import { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronsRight,
  FileText,
  GraduationCap,
  Loader2,
  Mail,
  Phone,
  User,
  X,
} from "lucide-react";
import { courses } from "../../data/courses";
import { STATS } from "../../data/siteConfig";
import { submitLead } from "../../lib/submitLead";
import { LEAD_SOURCES } from "../../data/leadSources";
import {
  BRANCHES,
  isSpamSubmission,
  tooManySubmits,
  markLeadSubmitted,
  validateLead,
} from "../../lib/validateLead";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  cityYear: "",
  courseName: "",
  branch: "",
  website: "",
};

function validate(values) {
  return validateLead(values, ["name", "email", "phone", "cityYear", "courseName", "branch"]);
}

function IconField({ icon: Icon, error, children }) {
  return (
    <div>
      <label className="relative flex items-center">
        <span className="pointer-events-none absolute left-3.5 text-[#239F4A]">
          <Icon size={16} />
        </span>
        {children}
      </label>
      {error && <p className="mt-1 pl-1 text-[11px] font-medium text-[#D92D20]">{error}</p>}
    </div>
  );
}

const fieldClass = (error) =>
  `h-11 w-full rounded-lg border bg-[#071313] pl-11 pr-4 text-sm text-white outline-none transition-colors placeholder:text-[#8AA0A8] focus:border-[#7CFF00] ${
    error ? "border-[#D92D20]" : "border-white/10"
  }`;

export default function GetMeJobLead() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const closeRef = useRef(null);
  const students = STATS.find((stat) => stat.key === "students");

  useEffect(() => {
    if (!open) return undefined;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    if (isSpamSubmission(values)) {
      setStatus("success");
      setValues(initialValues);
      return;
    }
    if (tooManySubmits("skillorbit-job")) {
      setErrors({ branch: "Please wait a few seconds before sending another request." });
      setStatus("idle");
      return;
    }
    try {
      await submitLead({
        name: values.name,
        email: values.email,
        phone: values.phone,
        cityYear: values.cityYear,
        course: values.courseName,
        branch: values.branch,
        jobRole: values.courseName,
        leadSource: LEAD_SOURCES.JOB,
        website: values.website,
      });
      markLeadSubmitted("skillorbit-job");
      setStatus("success");
      setValues(initialValues);
    } catch (error) {
      setStatus("error");
      setErrors({ form: error.message || "Could not save your enquiry." });
    }
  };

  const closeModal = () => {
    setOpen(false);
    setStatus("idle");
    setErrors({});
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="
          fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 sm:flex
          items-center gap-2 rounded-r-xl bg-[#7CFF00] px-4 py-3
          font-extrabold text-[#071313]
          shadow-[0_0_25px_rgba(124,255,0,0.30)]
          transition-all duration-300
          hover:bg-[#E7FF00] hover:px-6 hover:shadow-[0_0_35px_rgba(124,255,0,0.45)]
        "
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span className="text-lg" aria-hidden="true">▶</span>
        <span className="flex flex-col text-left leading-tight">
          <span className="text-[11px] font-semibold">Get Me</span>
          <span className="text-sm font-extrabold">JOB</span>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#063F2A]/55 backdrop-blur-[2px]"
            aria-label="Close callback form"
            onClick={closeModal}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="callback-title"
            className="
              relative z-10 grid max-h-[92vh] w-full max-w-[920px] overflow-hidden
              rounded-2xl bg-[#0d1c16] shadow-[0_30px_80px_rgba(0,0,0,0.45)]
              md:grid-cols-[0.92fr_1.08fr]
            "
          >
            <aside
              className="
                relative hidden overflow-hidden md:flex md:flex-col
                bg-[linear-gradient(180deg,#0a1a14_0%,#071313_48%,#063F2A_100%)]
              "
            >
              <div className="relative z-10 px-8 pt-8">
                <h2 className="max-w-[280px] font-roboto text-[22px] font-black uppercase leading-snug tracking-tight text-white">
                  Looking for courses that lead to real job opportunities?
                </h2>

                <p className="mt-5 flex items-center gap-2.5 font-roboto text-[22px] font-black text-white">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#239F4A] text-white">
                    <Briefcase size={18} />
                  </span>
                  {students?.value?.toLocaleString("en-IN") || "10,000"}
                  {students?.suffix || "+"} Learners Guided
                </p>
              </div>

              <div className="relative mt-2 flex min-h-[280px] flex-1 items-end justify-center px-2">
                <img
                  src="/assets/images/course-certificate.png"
                  alt="SkillOrbit course certificate of completion"
                  alt=""
                  className="absolute left-4 top-6 h-36 w-auto rotate-[-8deg] rounded-md shadow-lg ring-1 ring-white/70"
                />
                <img
                  src="/assets/images/callback-counsellor.png"
                  alt="SkillOrbit learner holding a laptop"
                  className="relative z-10 h-[300px] w-auto object-contain object-bottom"
                />
              </div>

              <ul className="relative z-10 space-y-1.5 px-8 pb-3">
                {["Affordable Learning", "Career Guidance", "Course Curriculum Details"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-semibold text-white">
                    <ChevronsRight size={16} className="text-[#239F4A]" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="px-8 pb-4 text-[13px] italic text-[#C5D5CE]">
                Take The First Step Toward A Brighter Career.
              </p>

              <div className="mx-4 mb-4 rounded-full bg-[#239F4A] py-2.5 text-center text-sm font-bold text-white">
                Register Now to Know More!
              </div>
            </aside>

            <div className="relative flex min-h-0 flex-col overflow-y-auto bg-[#0d1c16] px-5 py-6 sm:px-8 sm:py-8">
              <button
                ref={closeRef}
                type="button"
                onClick={closeModal}
                className="
                  absolute right-4 top-4 flex h-8 w-8 items-center justify-center
                  rounded-md bg-[#239F4A] text-white transition-colors hover:bg-[#087A3E]
                "
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="mb-5 rounded-xl bg-[#071313] px-4 py-3 md:hidden">
                <p className="font-roboto text-sm font-black uppercase leading-snug text-white">
                  Looking for courses that lead to real job opportunities?
                </p>
                <p className="mt-1 text-xs font-semibold text-[#239F4A]">
                  {students?.value?.toLocaleString("en-IN") || "10,000"}
                  {students?.suffix || "+"} Learners Guided
                </p>
              </div>

              <h3
                id="callback-title"
                className="mb-6 text-center font-roboto text-2xl font-black text-[#239F4A] sm:text-[26px]"
              >
                Request Callback
              </h3>

              {status === "success" ? (
                <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
                  <CheckCircle2 size={42} className="mb-3 text-[#239F4A]" />
                  <p className="font-roboto text-lg font-black text-white">Request received</p>
                  <p className="mt-2 max-w-sm text-sm text-[#C5D5CE]">
                    Thank you! Your enquiry has been received. Our team will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 rounded-full bg-[#239F4A] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#087A3E]"
                  >
                    Submit another request
                  </button>
                </div>
              ) : status === "error" ? (
                <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
                  <p className="font-roboto text-lg font-black text-white">Could not save your request</p>
                  <p className="mt-2 max-w-sm text-sm text-[#C5D5CE]">
                    Please try again, or WhatsApp / call SkillOrbit using the contact details on the site.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 rounded-full bg-[#239F4A] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#087A3E]"
                  >
                    Try again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3.5">
                  <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                    <label>
                      Website
                      <input
                        tabIndex={-1}
                        autoComplete="off"
                        name="website"
                        value={values.website}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <IconField icon={User} error={errors.name}>
                    <input
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Enter Full Name"
                      autoComplete="name"
                      maxLength={60}
                      className={fieldClass(errors.name)}
                    />
                  </IconField>

                  <IconField icon={Mail} error={errors.email}>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      autoComplete="email"
                      maxLength={80}
                      className={fieldClass(errors.email)}
                    />
                  </IconField>

                  <IconField icon={Phone} error={errors.phone}>
                    <input
                      type="tel"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      autoComplete="tel"
                      inputMode="numeric"
                      maxLength={14}
                      className={fieldClass(errors.phone)}
                    />
                  </IconField>

                  <IconField icon={Building2} error={errors.cityYear}>
                    <input
                      name="cityYear"
                      value={values.cityYear}
                      onChange={handleChange}
                      placeholder="Pune / 2024"
                      maxLength={40}
                      className={fieldClass(errors.cityYear)}
                    />
                  </IconField>

                  <IconField icon={FileText} error={errors.courseName}>
                    <span className="pointer-events-none absolute right-3.5 text-[#8AA0A8]">
                      <ChevronDown size={16} />
                    </span>
                    <select
                      name="courseName"
                      value={values.courseName}
                      onChange={handleChange}
                      className={`${fieldClass(errors.courseName)} appearance-none pr-10`}
                    >
                      <option value="">Enter Course Name</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.name}>
                          {course.name}
                        </option>
                      ))}
                    </select>
                  </IconField>

                  <IconField icon={GraduationCap} error={errors.branch}>
                    <span className="pointer-events-none absolute right-3.5 text-[#8AA0A8]">
                      <ChevronDown size={16} />
                    </span>
                    <select
                      name="branch"
                      value={values.branch}
                      onChange={handleChange}
                      className={`${fieldClass(errors.branch)} appearance-none pr-10`}
                    >
                      <option value="">Choose Branch</option>
                      {BRANCHES.map((branch) => (
                        <option key={branch} value={branch}>
                          {branch}
                        </option>
                      ))}
                    </select>
                  </IconField>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="
                      mt-3 inline-flex h-12 items-center justify-center rounded-full
                      bg-[linear-gradient(180deg,#35D06A_0%,#239F4A_55%,#1B8A3F_100%)]
                      font-roboto text-[15px] font-black text-white
                      shadow-[0_8px_20px_rgba(35,159,74,0.28)]
                      transition-transform hover:-translate-y-0.5
                      disabled:cursor-not-allowed disabled:opacity-70
                    "
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="mr-2 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      "Talk to Our Counsellor"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
