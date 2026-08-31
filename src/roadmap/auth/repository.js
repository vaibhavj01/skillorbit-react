/**
 * Client persistence adapter for the SkillOrbit roadmap platform.
 * Swap these functions for API calls when a backend is available.
 * Passwords are never stored in plaintext — only PBKDF2 hashes + salts.
 */

const PREFIX = "so.roadmap";

const KEYS = {
  users: `${PREFIX}.users`,
  session: `${PREFIX}.session`,
  lockout: `${PREFIX}.lockout`,
  progress: (userId) => `${PREFIX}.progress.${userId}`,
  bookmarks: (userId) => `${PREFIX}.bookmarks.${userId}`,
  activity: (userId) => `${PREFIX}.activity.${userId}`,
  prefs: (userId) => `${PREFIX}.prefs.${userId}`,
};

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function listUsers() {
  return readJson(KEYS.users, []);
}

export function saveUsers(users) {
  writeJson(KEYS.users, users);
}

export function findUserByEmail(email) {
  const normalized = email.trim().toLowerCase();
  return listUsers().find((user) => user.email === normalized) || null;
}

export function findUserById(id) {
  return listUsers().find((user) => user.id === id) || null;
}

export function upsertUser(nextUser) {
  const users = listUsers();
  const index = users.findIndex((user) => user.id === nextUser.id);
  if (index >= 0) users[index] = nextUser;
  else users.push(nextUser);
  saveUsers(users);
  return publicUser(nextUser);
}

export function publicUser(user) {
  if (!user) return null;
  const { passwordHash, salt, ...safe } = user;
  return safe;
}

export function getSession() {
  return readJson(KEYS.session, null);
}

export function setSession(session) {
  writeJson(KEYS.session, session);
}

export function clearSession() {
  localStorage.removeItem(KEYS.session);
}

export function getLockout() {
  return readJson(KEYS.lockout, { fails: 0, until: 0 });
}

export function setLockout(lockout) {
  writeJson(KEYS.lockout, lockout);
}

export function emptyProgress() {
  return {};
}

export function getProgress(userId) {
  return readJson(KEYS.progress(userId), emptyProgress());
}

export function saveProgress(userId, progress) {
  writeJson(KEYS.progress(userId), progress);
}

export function emptyBookmarks() {
  return { roadmaps: [], topics: [], resources: [] };
}

export function getBookmarks(userId) {
  const stored = readJson(KEYS.bookmarks(userId), emptyBookmarks());
  return {
    roadmaps: stored.roadmaps || [],
    topics: stored.topics || [],
    resources: stored.resources || [],
  };
}

export function saveBookmarks(userId, bookmarks) {
  writeJson(KEYS.bookmarks(userId), bookmarks);
}

export function getActivity(userId) {
  return readJson(KEYS.activity(userId), []);
}

export function saveActivity(userId, activity) {
  writeJson(KEYS.activity(userId), activity.slice(0, 40));
}

export function getPrefs(userId) {
  return readJson(KEYS.prefs(userId), {
    notifications: { progress: true, weekly: false },
    appearance: "emerald",
  });
}

export function savePrefs(userId, prefs) {
  writeJson(KEYS.prefs(userId), prefs);
}
