import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import FormField from "./FormField";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import Button from "../common/Button";
import { courses } from "../../data/courses";
import { submitLead } from "../../lib/submitLead";
import { LEAD_SOURCES, SUCCESS_MESSAGE } from "../../data/leadSources";
import { isSpamSubmission, tooManySubmits, markLeadSubmitted, validateLead, countWords, clipToWordLimit, MESSAGE_WORD_LIMIT } from "../../lib/validateLead";

const initialValues = { name: "", email: "", phone: "", courseId: "", message: "", website: "" };

export default function ContactForm({ defaultMessage = "", leadSource = LEAD_SOURCES.CONTACT_US }) {
  const [values, setValues] = useState({ ...initialValues, message: defaultMessage });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextValue = name === "message" ? clipToWordLimit(value) : value;
    setValues((v) => ({ ...v, [name]: nextValue }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validateLead(values, ["name", "email", "phone", "message"]);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    if (isSpamSubmission(values)) {
      setStatus("success");
      setValues({ ...initialValues, message: defaultMessage });
      return;
    }
    if (tooManySubmits("skillorbit-contact")) {
      setErrors({ message: "Please wait a few seconds before sending another request." });
      return;
    }

    const courseName = courses.find((c) => c.id === values.courseId)?.name || "";
    setStatus("loading");
    try {
      await submitLead({
        name: values.name,
        email: values.email,
        phone: values.phone,
        course: courseName,
        message: values.message,
        leadSource,
        website: values.website,
      });
      markLeadSubmitted("skillorbit-contact");
      setStatus("success");
      setValues({ ...initialValues, message: defaultMessage });
    } catch (error) {
      setStatus("error");
      setErrors({ form: error.message || "Could not save your enquiry." });
    }
  };

  if (status === "error") {
    return (
      <div className="rounded-2xl border border-[#D92D20]/30 bg-white p-8 text-center">
        <h3 className="font-display font-bold text-lg text-ink mb-1">Could not save your request</h3>
        <p className="text-sm text-ink-muted mb-5">
          Please try again, or WhatsApp / call us using the contact details on this page.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Try again
        </Button>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-brand-50 p-8 text-center">
        <CheckCircle2 size={40} className="mx-auto mb-3 text-brand-600" />
        <h3 className="font-display font-bold text-lg text-ink mb-1">Thanks — we've got your message</h3>
        <p className="text-sm text-ink-muted mb-5">{SUCCESS_MESSAGE}</p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <input tabIndex={-1} autoComplete="off" name="website" value={values.website} onChange={handleChange} />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField label="Full name" htmlFor="name" error={errors.name} required>
          <Input id="name" name="name" value={values.name} onChange={handleChange} placeholder="First and last name" maxLength={60} error={errors.name} />
        </FormField>
        <FormField label="Phone" htmlFor="phone" error={errors.phone} required>
          <Input id="phone" name="phone" value={values.phone} onChange={handleChange} placeholder="10-digit mobile number" inputMode="numeric" maxLength={14} error={errors.phone} />
        </FormField>
      </div>
      <FormField label="Email" htmlFor="email" error={errors.email} required>
        <Input id="email" type="email" name="email" value={values.email} onChange={handleChange} placeholder="you@gmail.com" maxLength={80} error={errors.email} />
      </FormField>
      <FormField label="Course you're interested in" htmlFor="courseId" error={errors.courseId}>
        <Select id="courseId" name="courseId" value={values.courseId} onChange={handleChange} error={errors.courseId}>
          <option value="">Select a course (optional)</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </Select>
      </FormField>
      <FormField label="Message" htmlFor="message" error={errors.message} required>
        <Textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="Tell us about your goals…"
          error={errors.message}
        />
        <p className={`text-xs ${countWords(values.message) >= MESSAGE_WORD_LIMIT ? "font-semibold text-[#D92D20]" : "text-ink-muted"}`}>
          {countWords(values.message)} / {MESSAGE_WORD_LIMIT} words
        </p>
      </FormField>
      <Button type="submit" variant="primary" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
