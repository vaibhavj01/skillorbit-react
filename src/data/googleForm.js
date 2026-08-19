/**
 * SkillOrbit lead capture → Google Form
 *
 * 1. Create a Google Form with these short-answer questions:
 *    Full Name, Email, Phone, City / Graduation Year, Course, Branch,
 *    Preferred Mode, Message, Source
 *
 * 2. Form settings: Collect email OFF, Limit to 1 response OFF.
 *    Responses → Link to Sheets (recommended).
 *
 * 3. Open ⋮ → Get pre-filled link. Fill EXACTLY these sample values:
 *    NAME, EMAIL, PHONE, CITY, COURSE, BRANCH, MODE, MESSAGE, SOURCE
 *
 * 4. Click Get link, copy the URL, and paste it into PREFILLED_URL below.
 */

const PREFILLED_URL = "";

const SAMPLE_TO_FIELD = {
  NAME: "name",
  EMAIL: "email",
  PHONE: "phone",
  CITY: "cityYear",
  COURSE: "course",
  BRANCH: "branch",
  MODE: "mode",
  MESSAGE: "message",
  SOURCE: "source",
};

const FALLBACK_ACTION = import.meta.env.VITE_GOOGLE_FORM_ACTION || "";

const FALLBACK_ENTRIES = {
  name: import.meta.env.VITE_GF_NAME || "",
  email: import.meta.env.VITE_GF_EMAIL || "",
  phone: import.meta.env.VITE_GF_PHONE || "",
  cityYear: import.meta.env.VITE_GF_CITY_YEAR || "",
  course: import.meta.env.VITE_GF_COURSE || "",
  branch: import.meta.env.VITE_GF_BRANCH || "",
  mode: import.meta.env.VITE_GF_MODE || "",
  message: import.meta.env.VITE_GF_MESSAGE || "",
  source: import.meta.env.VITE_GF_SOURCE || "",
};

function parsePrefilledUrl(url) {
  const entries = { ...FALLBACK_ENTRIES };
  if (!url) return { action: FALLBACK_ACTION, entries };

  try {
    const parsed = new URL(url);
    parsed.searchParams.forEach((value, key) => {
      if (!key.startsWith("entry.")) return;
      const field = SAMPLE_TO_FIELD[String(value).trim().toUpperCase()];
      if (field) entries[field] = key;
    });

    const action = `${parsed.origin}${parsed.pathname.replace(/\/viewform.*$/, "/formResponse")}`;
    return { action: action || FALLBACK_ACTION, entries };
  } catch {
    return { action: FALLBACK_ACTION, entries };
  }
}

const parsed = parsePrefilledUrl(PREFILLED_URL);

export const GOOGLE_FORM = {
  action: parsed.action,
  entries: parsed.entries,
};

export function isGoogleFormConfigured() {
  return Boolean(GOOGLE_FORM.action && GOOGLE_FORM.entries.name && GOOGLE_FORM.entries.phone);
}
