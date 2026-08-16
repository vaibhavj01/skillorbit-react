import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import FormField from "./FormField";
import Input from "./Input";
import Select from "./Select";
import Button from "../common/Button";
import { courses } from "../../data/courses";

const MODES = ["Classroom", "Online", "Hybrid", "Self-Paced", "Distance Learning"];
const initialValues = { name: "", phone: "", courseId: "", mode: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!/^[0-9+\-\s()]{7,15}$/.test(values.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!values.courseId) errors.courseId = "Please choose a course.";
  return errors;
}

export default function DemoForm({ defaultCourseId }) {
  const [values, setValues] = useState({ ...initialValues, courseId: defaultCourseId || "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

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
    setTimeout(() => {
      setStatus("success");
      setValues({ ...initialValues, courseId: defaultCourseId || "" });
    }, 1000);
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-brand-50 p-6 text-center">
        <CheckCircle2 size={32} className="mx-auto mb-2 text-brand-600" />
        <h3 className="font-display font-bold text-base text-ink mb-1">Demo request received</h3>
        <p className="text-xs text-ink-muted mb-4">A counsellor will call you shortly to schedule your session.</p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Book another demo
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <FormField label="Full name" htmlFor="demo-name" error={errors.name} required>
        <Input id="demo-name" name="name" value={values.name} onChange={handleChange} placeholder="Your name" error={errors.name} />
      </FormField>
      <FormField label="Phone" htmlFor="demo-phone" error={errors.phone} required>
        <Input id="demo-phone" name="phone" value={values.phone} onChange={handleChange} placeholder="+91 98765 43210" error={errors.phone} />
      </FormField>
      <FormField label="Course" htmlFor="demo-course" error={errors.courseId} required>
        <Select id="demo-course" name="courseId" value={values.courseId} onChange={handleChange} error={errors.courseId}>
          <option value="">Select a course</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </Select>
      </FormField>
      <FormField label="Preferred mode" htmlFor="demo-mode">
        <Select id="demo-mode" name="mode" value={values.mode} onChange={handleChange}>
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
