import { useId, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import FormField from "../forms/FormField";
import Input from "../forms/Input";
import Select from "../forms/Select";
import { courses } from "../../data/courses";
import { submitLead } from "../../lib/submitLead";
import { LEAD_SOURCES } from "../../data/leadSources";
import { isSpamSubmission, tooManySubmits, markLeadSubmitted, validateLead } from "../../lib/validateLead";

const QUALIFICATIONS = ["12th", "Diploma", "Undergraduate", "Postgraduate", "Working Professional"];
const EXPERIENCE_LEVELS = ["Fresher", "0–2 Years", "2–5 Years", "5+ Years"];
const LEARNING_MODES = ["Online", "Offline", "Hybrid"];

const initialValues = {
  name: "",
  phone: "",
  email: "",
  qualification: "",
  experience: "",
  courseId: "",
  mode: "",
  website: "",
};

export default function PlacementJourneyForm() {
  const fieldId = useId();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateLead(values, ["name", "email", "phone"]);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    if (isSpamSubmission(values)) {
      setStatus("success");
      setValues(initialValues);
      return;
    }
    if (tooManySubmits("skillorbit-placement-journey")) {
      setErrors({ form: "Please wait a few seconds before sending another request." });
      return;
    }

    const courseName = courses.find((course) => course.id === values.courseId)?.name || "";
    const details = [
      values.qualification && `Qualification: ${values.qualification}`,
      values.experience && `Experience: ${values.experience}`,
      values.mode && `Preferred mode: ${values.mode}`,
    ]
      .filter(Boolean)
      .join(" | ");

    setStatus("loading");
    try {
      await submitLead({
        name: values.name,
        email: values.email,
        phone: values.phone,
        course: courseName,
        mode: values.mode,
        jobRole: values.experience,
        company: values.qualification,
        message: details,
        leadSource: LEAD_SOURCES.PLACEMENT_JOURNEY,
        website: values.website,
      });
      markLeadSubmitted("skillorbit-placement-journey");
      setStatus("success");
      setValues(initialValues);
    } catch (error) {
      setStatus("error");
      setErrors({ form: error.message || "Could not save your enquiry." });
    }
  };

  if (status === "error") {
    return (
      <div className="rounded-2xl border border-[#D92D20]/30 bg-dark-surface p-6 text-center">
        <h3 className="font-display mb-1 text-base font-bold text-white">Could not save your request</h3>
        <p className="mb-4 font-body text-xs text-dark-muted">Please try again, or call / WhatsApp us to get started.</p>
        {errors.form && (
          <p className="mb-3 text-xs text-[#D92D20]" role="alert">
            {errors.form}
          </p>
        )}
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="inline-flex min-h-11 items-center justify-center rounded-[13px] border border-[rgba(57,255,20,0.45)] px-4 text-sm font-semibold text-brand-lime transition hover:bg-[rgba(57,255,20,0.08)]"
        >
          Try again
        </button>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-dark-border bg-dark-surface p-6 text-center sm:p-8">
        <CheckCircle2 size={36} className="mx-auto mb-3 text-brand-lime" />
        <h3 className="font-display mb-2 text-xl font-bold text-white">Thank You!</h3>
        <p className="font-body text-sm leading-6 text-dark-muted">
          We&apos;ve received your details. Our career team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 font-body">
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <input tabIndex={-1} autoComplete="off" name="website" value={values.website} onChange={handleChange} />
      </div>

      {errors.form && (
        <p className="text-xs text-[#D92D20]" role="alert">
          {errors.form}
        </p>
      )}

      <FormField label="Full Name" htmlFor={`${fieldId}-name`} error={errors.name} required>
        <Input
          id={`${fieldId}-name`}
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="First and last name"
          autoComplete="name"
          maxLength={60}
          error={errors.name}
        />
      </FormField>

      <FormField label="Mobile Number" htmlFor={`${fieldId}-phone`} error={errors.phone} required>
        <Input
          id={`${fieldId}-phone`}
          name="phone"
          value={values.phone}
          onChange={handleChange}
          placeholder="10-digit mobile number"
          inputMode="numeric"
          autoComplete="tel"
          maxLength={14}
          error={errors.phone}
        />
      </FormField>

      <FormField label="Email Address" htmlFor={`${fieldId}-email`} error={errors.email} required>
        <Input
          id={`${fieldId}-email`}
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="you@gmail.com"
          autoComplete="email"
          maxLength={80}
          error={errors.email}
        />
      </FormField>

      <FormField label="Current Qualification" htmlFor={`${fieldId}-qualification`}>
        <Select
          id={`${fieldId}-qualification`}
          name="qualification"
          value={values.qualification}
          onChange={handleChange}
        >
          <option value="">Select qualification</option>
          {QUALIFICATIONS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </FormField>

      <FormField label="Experience Level" htmlFor={`${fieldId}-experience`}>
        <Select
          id={`${fieldId}-experience`}
          name="experience"
          value={values.experience}
          onChange={handleChange}
        >
          <option value="">Select experience</option>
          {EXPERIENCE_LEVELS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </FormField>

      <FormField label="Interested Course / Domain" htmlFor={`${fieldId}-course`} error={errors.courseId}>
        <Select
          id={`${fieldId}-course`}
          name="courseId"
          value={values.courseId}
          onChange={handleChange}
          error={errors.courseId}
        >
          <option value="">Select course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </Select>
      </FormField>

      <FormField label="Preferred Learning Mode" htmlFor={`${fieldId}-mode`}>
        <Select id={`${fieldId}-mode`} name="mode" value={values.mode} onChange={handleChange}>
          <option value="">Select learning mode</option>
          {LEARNING_MODES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </FormField>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-lime px-5 text-sm font-bold text-[var(--cta-ink)] shadow-btn transition hover:-translate-y-0.5 hover:bg-[var(--color-lime-hover)] disabled:pointer-events-none disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Submit & Start My Journey
            <ArrowRight size={16} />
          </>
        )}
      </button>
    </form>
  );
}
