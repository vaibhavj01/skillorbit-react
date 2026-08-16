import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import FormField from "./FormField";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import Button from "../common/Button";
import { courses } from "../../data/courses";

const initialValues = { name: "", email: "", phone: "", courseId: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!/^[0-9+\-\s()]{7,15}$/.test(values.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!values.message.trim()) errors.message = "Tell us a little about what you're looking for.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    // No backend is wired up — this simulates submission for the demo build.
    setTimeout(() => {
      setStatus("success");
      setValues(initialValues);
    }, 1000);
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-brand-50 p-8 text-center">
        <CheckCircle2 size={40} className="mx-auto mb-3 text-brand-600" />
        <h3 className="font-display font-bold text-lg text-ink mb-1">Thanks — we've got your message</h3>
        <p className="text-sm text-ink-muted mb-5">Our admissions team will reach out within one business day.</p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField label="Full name" htmlFor="name" error={errors.name} required>
          <Input id="name" name="name" value={values.name} onChange={handleChange} placeholder="Your name" error={errors.name} />
        </FormField>
        <FormField label="Phone" htmlFor="phone" error={errors.phone} required>
          <Input id="phone" name="phone" value={values.phone} onChange={handleChange} placeholder="+91 98765 43210" error={errors.phone} />
        </FormField>
      </div>
      <FormField label="Email" htmlFor="email" error={errors.email} required>
        <Input id="email" type="email" name="email" value={values.email} onChange={handleChange} placeholder="you@example.com" error={errors.email} />
      </FormField>
      <FormField label="Course you're interested in" htmlFor="courseId">
        <Select id="courseId" name="courseId" value={values.courseId} onChange={handleChange}>
          <option value="">Select a course (optional)</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </Select>
      </FormField>
      <FormField label="Message" htmlFor="message" error={errors.message} required>
        <Textarea id="message" name="message" value={values.message} onChange={handleChange} placeholder="Tell us about your goals…" error={errors.message} />
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
