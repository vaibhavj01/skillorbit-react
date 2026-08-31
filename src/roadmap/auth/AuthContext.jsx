import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { hashPassword, randomBytes, verifyPassword } from "./crypto";
import {
  clearSession,
  findUserByEmail,
  findUserById,
  getLockout,
  getSession,
  listUsers,
  publicUser,
  setLockout,
  setSession,
  upsertUser,
} from "./repository";

const AuthContext = createContext(null);

const EMAIL_RE = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
const MAX_FAILS = 5;
const LOCK_MS = 60_000;

function sanitizeName(value) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, 80);
}

export function validateAuthFields({ name, email, password, confirmPassword }, mode) {
  const errors = {};
  const cleanEmail = String(email || "").trim().toLowerCase();

  if (mode === "register") {
    if (!sanitizeName(name) || sanitizeName(name).length < 2) {
      errors.name = "Enter your full name.";
    }
  }

  if (!cleanEmail) errors.email = "Enter your email.";
  else if (!EMAIL_RE.test(cleanEmail)) errors.email = "Enter a valid email address.";

  if (!password) errors.password = "Enter a password.";
  else if (password.length < 8) errors.password = "Use at least 8 characters.";
  else if (password.length > 72) errors.password = "Password is too long.";

  if (mode === "register" || mode === "reset") {
    if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const session = getSession();
    if (session?.userId && session.expiresAt > Date.now()) {
      const record = findUserById(session.userId);
      if (record) setUser(publicUser(record));
      else clearSession();
    } else if (session) {
      clearSession();
    }
    setReady(true);
  }, []);

  const register = useCallback(async ({ name, email, password, confirmPassword }) => {
    const errors = validateAuthFields({ name, email, password, confirmPassword }, "register");
    if (Object.keys(errors).length) return { ok: false, errors };

    const cleanEmail = email.trim().toLowerCase();
    if (findUserByEmail(cleanEmail)) {
      return { ok: false, errors: { email: "An account with this email already exists." } };
    }

    const salt = randomBytes(16);
    const passwordHash = await hashPassword(password, salt);
    const record = {
      id: crypto.randomUUID(),
      name: sanitizeName(name),
      email: cleanEmail,
      passwordHash,
      salt,
      createdAt: new Date().toISOString(),
    };
    const safe = upsertUser(record);
    setSession({
      userId: record.id,
      token: randomBytes(32),
      expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 30,
    });
    setUser(safe);
    return { ok: true };
  }, []);

  const login = useCallback(async ({ email, password, remember }) => {
    const errors = validateAuthFields({ email, password }, "login");
    if (Object.keys(errors).length) return { ok: false, errors };

    const lock = getLockout();
    if (lock.until > Date.now()) {
      return { ok: false, errors: { form: "Too many attempts. Please wait a minute and try again." } };
    }

    const record = findUserByEmail(email);
    const valid = record ? await verifyPassword(password, record.salt, record.passwordHash) : false;
    if (!valid) {
      const fails = (lock.fails || 0) + 1;
      setLockout({
        fails,
        until: fails >= MAX_FAILS ? Date.now() + LOCK_MS : 0,
      });
      return { ok: false, errors: { form: "Incorrect email or password." } };
    }

    setLockout({ fails: 0, until: 0 });
    const days = remember ? 30 : 7;
    setSession({
      userId: record.id,
      token: randomBytes(32),
      expiresAt: Date.now() + 1000 * 60 * 60 * 24 * days,
    });
    setUser(publicUser(record));
    return { ok: true };
  }, []);

  const logout = useCallback(() => {
    clearSession();
    setUser(null);
  }, []);

  const updateProfile = useCallback((patch) => {
    if (!user) return { ok: false };
    const record = findUserById(user.id);
    if (!record) return { ok: false };
    const next = {
      ...record,
      name: patch.name ? sanitizeName(patch.name) : record.name,
    };
    const safe = upsertUser(next);
    setUser(safe);
    return { ok: true };
  }, [user]);

  const changePassword = useCallback(async ({ currentPassword, password, confirmPassword }) => {
    if (!user) return { ok: false, errors: { form: "Please sign in again." } };
    const errors = validateAuthFields({ email: user.email, password, confirmPassword }, "reset");
    if (!currentPassword) errors.currentPassword = "Enter your current password.";
    if (Object.keys(errors).length) return { ok: false, errors };

    const record = findUserById(user.id);
    const valid = await verifyPassword(currentPassword, record.salt, record.passwordHash);
    if (!valid) return { ok: false, errors: { currentPassword: "Current password is incorrect." } };

    const salt = randomBytes(16);
    const passwordHash = await hashPassword(password, salt);
    upsertUser({ ...record, salt, passwordHash });
    setSession({
      userId: record.id,
      token: randomBytes(32),
      expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 7,
    });
    return { ok: true };
  }, [user]);

  const resetPassword = useCallback(async ({ email }) => {
    const cleanEmail = String(email || "").trim().toLowerCase();
    if (!cleanEmail) return { ok: false, errors: { email: "Enter your email." } };
    if (!EMAIL_RE.test(cleanEmail)) return { ok: false, errors: { email: "Enter a valid email address." } };
    return {
      ok: false,
      errors: {
        form: "Password reset needs the SkillOrbit account service. Email info@skill-orbit.com — your password was not changed.",
      },
    };
  }, []);

  const value = useMemo(
    () => ({
      user,
      ready,
      isAuthenticated: Boolean(user),
      register,
      login,
      logout,
      updateProfile,
      changePassword,
      resetPassword,
      userCount: listUsers().length,
    }),
    [user, ready, register, login, logout, updateProfile, changePassword, resetPassword]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
