import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useProgress } from "../auth/ProgressContext";
import RmButton from "../components/RmButton";

export default function Settings() {
  const { changePassword, logout } = useAuth();
  const { prefs, updatePrefs } = useProgress();
  const navigate = useNavigate();
  const [form, setForm] = useState({ currentPassword: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState("");
  const [busy, setBusy] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onPassword = async (event) => {
    event.preventDefault();
    setBusy(true);
    const result = await changePassword(form);
    setBusy(false);
    if (!result.ok) {
      setErrors(result.errors || {});
      setSaved("");
      return;
    }
    setErrors({});
    setForm({ currentPassword: "", password: "", confirmPassword: "" });
    setSaved("Password updated.");
  };

  return (
    <div>
      <section className="rm-hero">
        <h1>Settings</h1>
        <p>Account, appearance, notifications, and security.</p>
      </section>

      <section className="rm-card">
        <h2>Account</h2>
        <p className="rm-muted">Your email is used only to sign in on this device. Passwords are hashed and never stored in plain text.</p>
      </section>

      <section className="rm-card" style={{ marginTop: "0.85rem" }}>
        <h2>Appearance</h2>
        <p className="rm-muted">SkillOrbit emerald is the platform theme.</p>
        <label className="rm-check">
          <input
            type="radio"
            name="appearance"
            checked={prefs.appearance === "emerald"}
            onChange={() => updatePrefs({ ...prefs, appearance: "emerald" })}
          />
          Dark emerald
        </label>
      </section>

      <section className="rm-card" style={{ marginTop: "0.85rem" }}>
        <h2>Notifications</h2>
        <label className="rm-check">
          <input
            type="checkbox"
            checked={Boolean(prefs.notifications?.progress)}
            onChange={(event) => updatePrefs({ ...prefs, notifications: { ...prefs.notifications, progress: event.target.checked } })}
          />
          Progress reminders
        </label>
        <label className="rm-check">
          <input
            type="checkbox"
            checked={Boolean(prefs.notifications?.weekly)}
            onChange={(event) => updatePrefs({ ...prefs, notifications: { ...prefs.notifications, weekly: event.target.checked } })}
          />
          Weekly learning summary
        </label>
      </section>

      <form className="rm-card" style={{ marginTop: "0.85rem" }} onSubmit={onPassword}>
        <h2>Security</h2>
        <div className="rm-field">
          <label htmlFor="currentPassword">Current password</label>
          <input id="currentPassword" name="currentPassword" type="password" autoComplete="current-password" value={form.currentPassword} onChange={onChange} />
          {errors.currentPassword ? <p className="rm-error">{errors.currentPassword}</p> : null}
        </div>
        <div className="rm-field">
          <label htmlFor="password">New password</label>
          <input id="password" name="password" type="password" autoComplete="new-password" value={form.password} onChange={onChange} />
          {errors.password ? <p className="rm-error">{errors.password}</p> : null}
        </div>
        <div className="rm-field">
          <label htmlFor="confirmPassword">Confirm new password</label>
          <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" value={form.confirmPassword} onChange={onChange} />
          {errors.confirmPassword ? <p className="rm-error">{errors.confirmPassword}</p> : null}
        </div>
        {errors.form ? <p className="rm-error">{errors.form}</p> : null}
        {saved ? <p className="rm-muted">{saved}</p> : null}
        <div className="rm-card-actions">
          <RmButton type="submit" disabled={busy}>{busy ? "Saving…" : "Change Password"}</RmButton>
          <RmButton
            type="button"
            variant="ghost"
            onClick={() => {
              logout();
              navigate("/roadmap/login");
            }}
          >
            Logout from all devices
          </RmButton>
        </div>
        <p className="rm-muted" style={{ marginTop: "0.7rem" }}>
          This session is stored as a signed-in token on this browser only. Signing out clears it.
        </p>
      </form>
    </div>
  );
}
