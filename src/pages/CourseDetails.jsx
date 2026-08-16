import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, CheckCircle2, ListChecks, BadgeCheck, Clock,
  GraduationCap, Star, Layers, Briefcase,
} from "lucide-react";
import Seo from "../components/common/Seo";
import Container from "../components/common/Container";
import Reveal from "../components/common/Reveal";
import Button from "../components/common/Button";
import CourseCard from "../components/courses/CourseCard";
import DemoForm from "../components/forms/DemoForm";
import { getCourseBySlug, getRelatedCourses, categoryLabel } from "../data/courses";

export default function CourseDetails() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!course) return <Navigate to="/courses" replace />;

  const related = getRelatedCourses(course, 3);

  return (
    <>
      <Seo title={course.name} description={course.description} path={`/courses/${course.slug}`} />

      <div className="pt-28 pb-20">
        <Container>
          <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-semibold mb-8 text-brand-700">
            <ArrowLeft size={16} /> Back to Courses
          </Link>

          <Reveal className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Main column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-ink p-3">
                  <img
                    src={course.icon}
                    alt=""
                    className="w-full h-full object-contain"
                    style={{ filter: "invert(70%) sepia(40%) saturate(500%) hue-rotate(70deg)" }}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-600">{categoryLabel(course.category)}</span>
                  <h1 className="text-2xl md:text-3xl font-bold leading-tight font-display text-ink">{course.name}</h1>
                </div>
              </div>

              <p className="text-base leading-relaxed mb-8 text-ink-muted">{course.description}</p>

              <div className="flex flex-wrap gap-2 mb-10">
                {(course.technologies || []).map((t) => (
                  <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-100 text-brand-700">{t}</span>
                ))}
              </div>

              {course.whatYouLearn?.length > 0 && (
                <>
                  <h2 className="text-lg font-bold mb-4 flex items-center gap-2 font-display text-ink">
                    <ListChecks size={20} className="text-brand-700" /> What You'll Learn
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3 mb-10">
                    {course.whatYouLearn.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 p-4 rounded-xl border border-line bg-white">
                        <CheckCircle2 size={17} className="shrink-0 mt-0.5 text-brand-500" />
                        <span className="text-sm text-ink-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {course.curriculum?.length > 0 && (
                <>
                  <h2 className="text-lg font-bold mb-4 flex items-center gap-2 font-display text-ink">
                    <Layers size={20} className="text-brand-700" /> Curriculum
                  </h2>
                  <ol className="space-y-3 mb-10">
                    {course.curriculum.map((step, i) => (
                      <li key={step} className="flex items-start gap-3 p-4 rounded-xl border border-line bg-white">
                        <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white bg-gradient-brand shrink-0 font-display">
                          {i + 1}
                        </span>
                        <span className="text-sm text-ink-light pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </>
              )}

              {course.careerPath && (
                <>
                  <h2 className="text-lg font-bold mb-3 flex items-center gap-2 font-display text-ink">
                    <Briefcase size={20} className="text-brand-700" /> Career Path
                  </h2>
                  <p className="text-sm leading-relaxed mb-8 text-ink-muted">
                    Graduates of this program typically pursue roles such as <strong className="text-ink">{course.careerPath}</strong>, backed by projects and interview preparation.
                  </p>
                </>
              )}

              {course.placementSupport && (
                <>
                  <h2 className="text-lg font-bold mb-3 flex items-center gap-2 font-display text-ink">
                    <BadgeCheck size={20} className="text-brand-700" /> Placement Support
                  </h2>
                  <p className="text-sm leading-relaxed mb-2 text-ink-muted">
                    Eligible learners on this program receive resume guidance, mock interviews and job referrals through our
                    career team{course.certificate ? ", alongside a SkillOrbit certificate of completion" : ""}.
                  </p>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-28 space-y-5">
              <div className="rounded-2xl border border-line bg-white p-6">
                <p className="text-2xl font-bold mb-1 font-display text-ink">{course.fees || "Contact for fees"}</p>
                <p className="text-xs mb-6 text-ink-muted">Flexible payment options may be available</p>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-line">
                    <span className="flex items-center gap-2 text-ink-muted"><Clock size={15} /> Duration</span>
                    <span className="font-semibold text-ink">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-line">
                    <span className="flex items-center gap-2 text-ink-muted"><GraduationCap size={15} /> Level</span>
                    <span className="font-semibold text-ink">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-line">
                    <span className="flex items-center gap-2 text-ink-muted"><Star size={15} /> Rating</span>
                    <span className="font-semibold text-ink">{course.rating} / 5</span>
                  </div>
                  <div className="py-2">
                    <span className="flex items-center gap-2 mb-2 text-ink-muted"><Layers size={15} /> Modes available</span>
                    <div className="flex flex-wrap gap-1.5">
                      {(course.mode || []).map((m) => (
                        <span key={m} className="text-[11px] font-medium px-2 py-1 rounded-md bg-surface-muted text-ink-light">{m}</span>
                      ))}
                    </div>
                  </div>
                  {course.prerequisites && (
                    <div className="py-2">
                      <span className="text-ink-muted text-xs">Prerequisites</span>
                      <p className="text-sm text-ink-light">{course.prerequisites}</p>
                    </div>
                  )}
                </div>

                <Button href="#demo-form" variant="primary" size="md" className="w-full">
                  Book Free Demo <ArrowRight size={16} />
                </Button>
              </div>

              <div id="demo-form" className="rounded-2xl border border-line bg-white p-6 scroll-mt-28">
                <h3 className="font-display font-bold text-base text-ink mb-4">Book a free demo for this course</h3>
                <DemoForm defaultCourseId={course.id} />
              </div>
            </div>
          </Reveal>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-bold mb-6 font-display text-ink">Related Courses</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((c, i) => (
                  <CourseCard key={c.id} course={c} delay={i * 0.05} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
}
