import { courses } from "../data/courses";

export const BRANCHES = ["Pune", "Online", "Hybrid", "Distance Learning"];
export const MODES = ["Classroom", "Online", "Hybrid", "Self-Paced", "Distance Learning"];

const COURSE_NAMES = new Set(courses.map((course) => course.name));
const COURSE_IDS = new Set(courses.map((course) => course.id));

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "mailinator.com",
  "tempmail.com",
  "temp-mail.org",
  "10minutemail.com",
  "guerrillamail.com",
  "yopmail.com",
  "trashmail.com",
  "fakeinbox.com",
  "throwawaymail.com",
  "sharklasers.com",
  "getnada.com",
  "moakt.com",
]);

const FAKE_NAMES = new Set([
  "test",
  "testing",
  "abc",
  "abcd",
  "asdf",
  "qwerty",
  "name",
  "full name",
  "admin",
  "user",
  "student",
  "aaaa",
  "xxxx",
]);

const FAKE_PHONES = new Set([
  "0000000000",
  "1111111111",
  "2222222222",
  "9999999999",
  "1234567890",
  "0123456789",
  "9876543210",
  "1231231231",
]);

export const MESSAGE_WORD_LIMIT = 300;

export function countWords(value) {
  const text = String(value || "").trim();
  if (!text) return 0;
  return text.split(/\s+/).filter(Boolean).length;
}

export function clipToWordLimit(value, limit = MESSAGE_WORD_LIMIT) {
  const text = String(value || "");
  if (countWords(text) <= limit) return text;
  const words = text.trim().split(/\s+/).filter(Boolean).slice(0, limit);
  return words.join(" ");
}

export function sanitizeText(value) {
  return String(value || "")
    .replace(/<[^>]*>/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizePhone(value) {
  let digits = String(value || "").replace(/\D/g, "");
  if (digits.startsWith("91") && digits.length === 12) digits = digits.slice(2);
  if (digits.startsWith("0") && digits.length === 11) digits = digits.slice(1);
  return digits;
}

export function formatPhone(value) {
  const digits = normalizePhone(value);
  return digits.length === 10 ? `+91 ${digits}` : sanitizeText(value);
}

function hasRepeatedChars(value) {
  return /(.)\1{3,}/.test(value.replace(/\s/g, ""));
}

function validateName(raw) {
  const name = sanitizeText(raw);
  if (!name) return "Please enter your full name.";
  if (name.length < 3) return "Name is too short.";
  if (name.length > 60) return "Name is too long.";
  if (!/^[A-Za-z][A-Za-z .'-]*[A-Za-z.]$/.test(name) && !/^[A-Za-z]{3,}$/.test(name)) {
    return "Use letters only — no numbers or special characters.";
  }
  if (!/[A-Za-z]{3,}/.test(name)) return "Enter a real name.";
  if (FAKE_NAMES.has(name.toLowerCase())) return "Please enter your real full name.";
  if (hasRepeatedChars(name)) return "Please enter a valid name.";
  if (name.split(" ").filter(Boolean).length < 2) {
    return "Enter first and last name.";
  }
  return "";
}

function validateEmail(raw) {
  const email = sanitizeText(raw).toLowerCase();
  if (!email) return "Please enter your email.";
  if (email.length > 80) return "Email is too long.";
  if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email)) {
    return "Enter a valid email, like name@gmail.com.";
  }
  if (email.includes("..") || email.startsWith(".") || email.includes("@-")) {
    return "Enter a valid email address.";
  }
  const domain = email.split("@")[1] || "";
  if (DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
    return "Please use a permanent email, not a temporary one.";
  }
  return "";
}

function validatePhone(raw) {
  if (!sanitizeText(raw)) return "Please enter your 10-digit mobile number.";
  const digits = normalizePhone(raw);
  if (!/^[6-9]\d{9}$/.test(digits)) {
    return "Enter a valid 10-digit Indian mobile number.";
  }
  if (FAKE_PHONES.has(digits) || /^(\d)\1{9}$/.test(digits)) {
    return "Enter your real mobile number.";
  }
  return "";
}

function validateCityYear(raw) {
  const value = sanitizeText(raw);
  if (!value) return "Enter city and graduation year, e.g. Pune / 2024.";

  const match = value.match(
    /^([A-Za-z][A-Za-z .'-]{1,38}[A-Za-z.])(?:\s*[/,|-]\s*|\s+)(19\d{2}|20\d{2})$/,
  );
  if (!match) return "Use this format: City / Year, e.g. Pune / 2024.";

  const year = Number(match[2]);
  const maxYear = new Date().getFullYear() + 4;
  if (year < 1995 || year > maxYear) {
    return `Graduation year must be between 1995 and ${maxYear}.`;
  }
  return "";
}

function validateMessage(raw) {
  const message = sanitizeText(raw);
  if (!message) return "Please tell us what you are looking for.";
  const words = countWords(message);
  if (words < 5) return "Please write at least 5 words so we can help you.";
  if (words > MESSAGE_WORD_LIMIT) return `Message can be at most ${MESSAGE_WORD_LIMIT} words.`;
  if (/(https?:\/\/|www\.)/i.test(message) && (message.match(/https?:\/\/|www\./gi) || []).length > 2) {
    return "Please remove extra links from your message.";
  }
  if (/<script|javascript:|onerror=/i.test(raw || "")) {
    return "Please enter a normal message.";
  }
  return "";
}

export function validateLead(values, required = []) {
  const errors = {};
  const needs = new Set(required);

  if (needs.has("name")) {
    const error = validateName(values.name);
    if (error) errors.name = error;
  }
  if (needs.has("email")) {
    const error = validateEmail(values.email);
    if (error) errors.email = error;
  }
  if (needs.has("phone")) {
    const error = validatePhone(values.phone);
    if (error) errors.phone = error;
  }
  if (needs.has("cityYear")) {
    const error = validateCityYear(values.cityYear);
    if (error) errors.cityYear = error;
  }
  if (needs.has("courseName")) {
    const courseName = sanitizeText(values.courseName);
    if (!courseName) errors.courseName = "Please select a course.";
    else if (!COURSE_NAMES.has(courseName)) errors.courseName = "Please choose a course from the list.";
  }
  if (needs.has("courseId")) {
    const courseId = sanitizeText(values.courseId);
    if (!courseId) errors.courseId = "Please select a course.";
    else if (!COURSE_IDS.has(courseId)) errors.courseId = "Please choose a course from the list.";
  }
  if (needs.has("branch")) {
    if (!BRANCHES.includes(values.branch)) errors.branch = "Please choose a valid branch.";
  }
  if (needs.has("mode") && values.mode) {
    if (!MODES.includes(values.mode)) errors.mode = "Please choose a valid learning mode.";
  }
  if (needs.has("message")) {
    const error = validateMessage(values.message);
    if (error) errors.message = error;
  }

  if (values.courseId && !COURSE_IDS.has(values.courseId)) {
    errors.courseId = "Please choose a course from the list.";
  }

  return errors;
}

export function isSpamSubmission(values) {
  return Boolean(sanitizeText(values.website || values.honeypot));
}

export function tooManySubmits(key = "skillorbit-lead", windowMs = 20000) {
  try {
    const last = Number(sessionStorage.getItem(key) || 0);
    return Date.now() - last < windowMs;
  } catch {
    return false;
  }
}

export function markLeadSubmitted(key = "skillorbit-lead") {
  try {
    sessionStorage.setItem(key, String(Date.now()));
  } catch {
    /* ignore private-mode storage errors */
  }
}

export function cleanLead(lead) {
  return {
    name: sanitizeText(lead.name),
    email: sanitizeText(lead.email).toLowerCase(),
    phone: formatPhone(lead.phone),
    cityYear: sanitizeText(lead.cityYear),
    course: sanitizeText(lead.course),
    branch: sanitizeText(lead.branch),
    mode: sanitizeText(lead.mode),
    message: sanitizeText(lead.message),
    source: sanitizeText(lead.source || lead.leadSource) || "Website",
    leadSource: sanitizeText(lead.leadSource || lead.source) || "Website",
  };
}
