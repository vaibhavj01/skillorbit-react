import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import FormField from "./FormField";
import Input from "./Input";
import Select from "./Select";
import Button from "../common/Button";
import { courses } from "../../data/courses";
import { submitLead } from "../../lib/submitLead";
import { LEAD_SOURCES, SUCCESS_MESSAGE } from "../../data/leadSources";
import { MODES, isSpamSubmission, tooManySubmits, markLeadSubmitted, validateLead } from "../../lib/validateLead";

const initialValues = { name: "", email: "", phone: "", courseId: "", mode: "", website: "" };

export default function DemoForm({ defaultCourseId }) {
  const [values, setValues] = useState({ ...initialValues, courseId: defaultCourseId || "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validateLead(values, ["name", "email", "phone", "courseId", "mode"]);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    if (isSpamSubmission(values)) {
      setStatus("success");
      setValues({ ...initialValues, courseId: defaultCourseId || "" });
      return;
    }
    if (tooManySubmits("skillorbit-demo")) {
      setErrors({ courseId: "Please wait a few seconds before sending another request." });
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
        mode: values.mode,
        leadSource: LEAD_SOURCES.FREE_DEMO,
        website: values.website,
      });
      markLeadSubmitted("skillorbit-demo");
      setStatus("success");
      setValues({ ...initialValues, courseId: defaultCourseId || "" });
    } catch (error) {
      setStatus("error");
      setErrors({ form: error.message || "Could not save your enquiry." });
    }
  };

  if (status === "error") {
    return (
      <div className="rounded-2xl border border-[#D92D20]/30 bg-white p-6 text-center">
        <h3 className="font-display font-bold text-base text-ink mb-1">Could not save your request</h3>
        <p className="text-xs text-ink-muted mb-4">Please try again, or call / WhatsApp us to book your demo.</p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Try again
        </Button>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-brand-50 p-6 text-center">
        <CheckCircle2 size={32} className="mx-auto mb-2 text-brand-600" />
        <h3 className="font-display font-bold text-base text-ink mb-1">Demo request received</h3>
        <p className="text-xs text-ink-muted mb-4">{SUCCESS_MESSAGE}</p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Book another demo
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <input tabIndex={-1} autoComplete="off" name="website" value={values.website} onChange={handleChange} />
      </div>
      <FormField label="Full name" htmlFor="demo-name" error={errors.name} required>
        <Input id="demo-name" name="name" value={values.name} onChange={handleChange} placeholder="First and last name" maxLength={60} error={errors.name} />
      </FormField>
      <FormField label="Email" htmlFor="demo-email" error={errors.email} required>
        <Input id="demo-email" type="email" name="email" value={values.email} onChange={handleChange} placeholder="you@gmail.com" maxLength={80} error={errors.email} />
      </FormField>
      <FormField label="Phone" htmlFor="demo-phone" error={errors.phone} required>
        <Input id="demo-phone" name="phone" value={values.phone} onChange={handleChange} placeholder="10-digit mobile number" inputMode="numeric" maxLength={14} error={errors.phone} />
      </FormField>
      <FormField label="Course" htmlFor="demo-course" error={errors.courseId} required>
        <Select id="demo-course" name="courseId" value={values.courseId} onChange={handleChange} error={errors.courseId}>
          <option value="">Select a course</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </Select>
      </FormField>
      <FormField label="Preferred mode" htmlFor="demo-mode" error={errors.mode}>
        <Select id="demo-mode" name="mode" value={values.mode} onChange={handleChange} error={errors.mode}>
          <option value="">No preference</option>
          {MODES.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </Select>
      </FormField>
      <Button type="submit" variant="primary" size="md" disabled={status === "loading"} className="w-full">
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Booking…
          </>
        ) : (
          "Book Free Demo"
        )}
      </Button>
    </form>
  );
}
