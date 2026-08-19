import { useId, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import FormField from "./FormField";
import Input from "./Input";
import Select from "./Select";
import Button from "../common/Button";
import { courses } from "../../data/courses";
import { submitLead } from "../../lib/submitLead";
import { LEAD_SOURCES, SUCCESS_MESSAGE } from "../../data/leadSources";
import { GENAI_PROMO, GENAI_PROMO_EXPERIENCE, GENAI_PROMO_TIMES } from "../../data/genaiPromo";
import { MODES, isSpamSubmission, tooManySubmits, markLeadSubmitted, validateLead } from "../../lib/validateLead";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  courseId: "",
  mode: "",
  experience: "",
  demoTime: "",
  website: "",
};

export default function DemoForm({ defaultCourseId, campaign = "" }) {
  const isPromo = campaign === "genai-promo";
  const fieldId = useId();
  const [values, setValues] = useState({
    ...initialValues,
    courseId: defaultCourseId || (isPromo ? GENAI_PROMO.courseId : ""),
    demoTime: isPromo ? GENAI_PROMO_TIMES[0] : "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validateLead(values, isPromo ? ["name", "email", "phone", "courseId"] : ["name", "email", "phone", "courseId", "mode"]);
    if (isPromo) {
      if (!values.experience) nextErrors.experience = "Please select your current background.";
      if (!values.demoTime) nextErrors.demoTime = "Please choose a preferred demo time.";
    }
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
    const promoNote = isPromo
      ? `Data Analytics + GenAI special offer demo. Background: ${values.experience}. Preferred time: ${values.demoTime}. Event date: Sunday, 23 August 2026.`
      : "";
    setStatus("loading");
    try {
      await submitLead({
        name: values.name,
        email: values.email,
        phone: values.phone,
        course: courseName,
        mode: values.mode,
        message: promoNote,
        leadSource: isPromo ? LEAD_SOURCES.GENAI_PROMO : LEAD_SOURCES.FREE_DEMO,
        website: values.website,
      });
      markLeadSubmitted("skillorbit-demo");
      if (isPromo) {
        try {
          sessionStorage.setItem(GENAI_PROMO.sessionKey, "1");
        } catch {
          /* ignore */
        }
      }
      setStatus("success");
      setValues({ ...initialValues, courseId: defaultCourseId || "" });
    } catch (error) {
      setStatus("error");
      setErrors({ form: error.message || "Could not save your enquiry." });
    }
  };

  if (status === "error") {
    return (
      <div className="rounded-2xl border border-[#D92D20]/30 bg-[#0d1c16] p-6 text-center">
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
        <p className="text-xs text-ink-muted mb-4">
          {isPromo
            ? "Thank you! Our team will contact you shortly regarding your Data Analytics + GenAI demo."
            : SUCCESS_MESSAGE}
        </p>
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
      <FormField label="Full name" htmlFor={`${fieldId}-name`} error={errors.name} required>
        <Input id={`${fieldId}-name`} name="name" value={values.name} onChange={handleChange} placeholder="First and last name" maxLength={60} error={errors.name} />
      </FormField>
      <FormField label="Email address" htmlFor={`${fieldId}-email`} error={errors.email} required>
        <Input id={`${fieldId}-email`} type="email" name="email" value={values.email} onChange={handleChange} placeholder="you@gmail.com" maxLength={80} error={errors.email} />
      </FormField>
      <FormField label="Mobile number" htmlFor={`${fieldId}-phone`} error={errors.phone} required>
        <Input id={`${fieldId}-phone`} name="phone" value={values.phone} onChange={handleChange} placeholder="10-digit mobile number" inputMode="numeric" maxLength={14} error={errors.phone} />
      </FormField>
      {isPromo && (
        <FormField label="Current education / experience" htmlFor={`${fieldId}-experience`} error={errors.experience} required>
          <Select id={`${fieldId}-experience`} name="experience" value={values.experience} onChange={handleChange} error={errors.experience}>
            <option value="">Select your background</option>
            {GENAI_PROMO_EXPERIENCE.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </Select>
        </FormField>
      )}
      <FormField label="Preferred course" htmlFor={`${fieldId}-course`} error={errors.courseId} required>
        <Select id={`${fieldId}-course`} name="courseId" value={values.courseId} onChange={handleChange} error={errors.courseId}>
          <option value="">Select a course</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </Select>
      </FormField>
      {isPromo ? (
        <FormField label="Preferred demo time" htmlFor={`${fieldId}-demoTime`} error={errors.demoTime} required>
          <Select id={`${fieldId}-demoTime`} name="demoTime" value={values.demoTime} onChange={handleChange} error={errors.demoTime}>
            <option value="">Select a time</option>
            {GENAI_PROMO_TIMES.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </Select>
        </FormField>
      ) : (
        <FormField label="Preferred mode" htmlFor={`${fieldId}-mode`} error={errors.mode}>
          <Select id={`${fieldId}-mode`} name="mode" value={values.mode} onChange={handleChange} error={errors.mode}>
            <option value="">No preference</option>
            {MODES.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </Select>
        </FormField>
      )}
      <Button type="submit" variant="primary" size="md" disabled={status === "loading"} className="w-full">
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Booking…
          </>
        ) : isPromo ? (
          "Reserve My Demo"
        ) : (
          "Book Free Demo"
        )}
      </Button>
    </form>
  );
}
