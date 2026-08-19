import { CONTACT } from "../data/siteConfig";
import { cleanLead } from "./validateLead";

const INQUIRY_EMAIL =
  import.meta.env.VITE_INQUIRY_EMAIL || CONTACT.inquiryEmail || "vaibhavjondhale0111@gmail.com";

function leadFields(lead) {
  return {
    name: lead.name || "",
    email: lead.email || "",
    phone: lead.phone || "",
    city_graduation_year: lead.cityYear || "",
    course: lead.course || "",
    branch: lead.branch || "",
    preferred_mode: lead.mode || "",
    job_role: lead.jobRole || "",
    company: lead.company || "",
    message: lead.message || "",
    source: lead.leadSource || lead.source || "Website",
    page: typeof window !== "undefined" ? window.location.href : "",
  };
}

function postViaHiddenIframe(action, payload) {
  return new Promise((resolve) => {
    const iframeName = `lead_${Date.now()}`;
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.title = "Form submission";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = action;
    form.target = iframeName;
    form.acceptCharset = "UTF-8";
    form.style.display = "none";

    Object.entries(payload).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = String(value ?? "");
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    window.setTimeout(() => {
      form.remove();
      iframe.remove();
      resolve({ ok: true });
    }, 1600);
  });
}

export async function submitLead(lead) {
  const cleaned = cleanLead(lead);
  if (!cleaned.name || !cleaned.phone) {
    throw new Error("Incomplete lead");
  }

  const fields = leadFields({ ...lead, ...cleaned });
  await postViaHiddenIframe(`https://formsubmit.co/${encodeURIComponent(INQUIRY_EMAIL)}`, {
    _subject: `SkillOrbit website lead — ${fields.source}`,
    _template: "table",
    _captcha: "false",
    _replyto: fields.email || INQUIRY_EMAIL,
    ...fields,
  });
}
