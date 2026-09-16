


import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";

import {
  ArrowLeft,
  CheckCircle2,
  ListChecks,
  BadgeCheck,
  Layers,
  Briefcase,
} from "lucide-react";

import Seo from "../components/common/Seo";
import Container from "../components/common/Container";
import Reveal from "../components/common/Reveal";
import CourseCard from "../components/courses/CourseCard";
import CourseEnrollCard from "../components/courses/CourseEnrollCard";
import DemoForm from "../components/forms/DemoForm";

import {
  getCourseBySlug,
  getRelatedCourses,
  categoryLabel,
  getCourseCover,
} from "../data/courses";

import OrbitBackdrop from "../components/common/OrbitBackdrop";
import CourseBannerMark from "../components/courses/CourseBannerMark";



export default function CourseDetails() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [slug]);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const related = getRelatedCourses(course, 3);

  return (
    <>
      {/* SEO */}
      <Seo
        title={course.name}
        description={course.description}
        path={`/courses/${course.slug}`}
      />

      <div className="relative overflow-hidden bg-surface-bg so-page-hero">

        {/* Background */}
        <OrbitBackdrop variant="mint" />

        <Container className="relative z-10">

          {/* Back Button */}
          <Link
            to="/courses"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-lime"
          >
            <ArrowLeft size={16} />
            Back to Courses
          </Link>

          <Reveal className="grid items-start gap-10 lg:grid-cols-3">

            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}

            <div className="lg:col-span-2">

              {/* Course Header */}
              <div className="mb-6 flex items-center gap-4">

                {/* Course Icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-dark-border bg-dark-surface p-3">
                  <img
                    src={course.icon}
                    alt=""
                    className="h-full w-full object-contain"
                    style={{
                      filter:
                        "invert(70%) sepia(40%) saturate(500%) hue-rotate(70deg)",
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Course Name */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-600">
                    {categoryLabel(course.category)}
                  </span>

                  <h1 className="font-display text-2xl font-bold leading-tight text-ink md:text-3xl">
                    {course.name}
                  </h1>
                </div>
              </div>

              {/* Course Description */}
              <p className="mb-8 text-base leading-relaxed text-ink-muted">
                {course.description}
              </p>

              {/* Course Banner */}
              <div className="course-banner relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-brand-primary/20">
                <img
                  src={getCourseCover(course)}
                  alt={`${course.name} course`}
                  className="h-full w-full object-cover object-center"
                />

                <CourseBannerMark />
              </div>

              {/* Technologies */}
              <div className="mb-10 flex flex-wrap gap-2">
                {(course.technologies || []).map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-[rgba(57,255,20,0.10)] px-3 py-1.5 text-xs font-semibold text-brand-lime"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* =====================================================
                  WHAT YOU'LL LEARN
              ====================================================== */}

              {course.whatYouLearn?.length > 0 && (
                <>
                  <h2 className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-ink">
                    <ListChecks
                      size={20}
                      className="text-brand-lime"
                    />

                    What You'll Learn
                  </h2>

                  <div className="mb-10 grid gap-3 sm:grid-cols-2">
                    {course.whatYouLearn.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 rounded-xl border border-brand-primary/20 bg-surface p-4"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-brand-500"
                        />

                        <span className="text-sm text-ink-light">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* =====================================================
                  CURRICULUM
              ====================================================== */}

              {course.curriculum?.length > 0 && (
                <>
                  <h2 className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-ink">
                    <Layers
                      size={20}
                      className="text-brand-lime"
                    />

                    Curriculum
                  </h2>

                  <ol className="mb-10 space-y-3">
                    {course.curriculum.map((step, index) => (
                      <li
                        key={step}
                        className="flex items-start gap-3 rounded-xl border border-brand-primary/20 bg-surface p-4"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-brand font-display text-xs font-bold text-[var(--cta-ink)]">
                          {index + 1}
                        </span>

                        <span className="pt-0.5 text-sm text-ink-light">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </>
              )}

              {/* =====================================================
                  CAREER PATH
              ====================================================== */}

              {course.careerPath && (
                <>
                  <h2 className="mb-3 flex items-center gap-2 font-display text-lg font-bold text-ink">
                    <Briefcase
                      size={20}
                      className="text-brand-lime"
                    />

                    Career Path
                  </h2>

                  <p className="mb-8 text-sm leading-relaxed text-ink-muted">
                    Graduates of this program typically pursue roles such as{" "}
                    <strong className="text-ink">
                      {course.careerPath}
                    </strong>
                    , backed by projects and interview preparation.
                  </p>
                </>
              )}

              {/* =====================================================
                  PLACEMENT SUPPORT
              ====================================================== */}

              {course.placementSupport && (
                <>
                  <h2 className="mb-3 flex items-center gap-2 font-display text-lg font-bold text-ink">
                    <BadgeCheck
                      size={20}
                      className="text-brand-lime"
                    />

                    Placement Support
                  </h2>

                  <p className="mb-2 text-sm leading-relaxed text-ink-muted">
                    Eligible learners on this program receive resume
                    guidance, mock interviews and job referrals through our
                    career team
                    {course.certificate
                      ? ", alongside a SkillOrbit certificate of completion"
                      : ""}
                    .
                  </p>
                </>
              )}
            </div>

            {/* =====================================================
                SIDEBAR
            ====================================================== */}

            <div className="space-y-5 lg:sticky lg:top-28">

              {/* =================================================
                  ENROLLMENT CARD
              ================================================== */}

              <CourseEnrollCard course={course} />

              {/* =================================================
                  DEMO FORM
              ================================================== */}

              <div
                id="demo-form"
                className="scroll-mt-28 rounded-2xl border border-brand-primary/20 bg-surface p-6"
              >

                <h3 className="mb-4 font-display text-base font-bold text-ink">
                  Book a free demo for this course
                </h3>

                <DemoForm
                  defaultCourseId={course.id}
                />

              </div>

            </div>
          </Reveal>

          {/* =====================================================
              RELATED COURSES
          ====================================================== */}

          {related.length > 0 && (
            <div className="mt-16">

              <h2 className="mb-6 font-display text-xl font-bold text-ink">
                Related Courses
              </h2>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                {related.map((relatedCourse, index) => (
                  <CourseCard
                    key={relatedCourse.id}
                    course={relatedCourse}
                    delay={index * 0.05}
                  />
                ))}

              </div>

            </div>
          )}

        </Container>
      </div>
    </>
  );
}