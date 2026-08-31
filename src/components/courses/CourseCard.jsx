import { Link } from "react-router-dom";
import { Star, Check, ArrowRight, Map } from "lucide-react";
import Reveal from "../common/Reveal";
import { getCourseCover } from "../../data/courses";
import CourseBannerMark from "./CourseBannerMark";

export default function CourseCard({ course, delay = 0 }) {
  const cover = getCourseCover(course);
  const placement = course.placementSupport
    ? "100% Placement Assistance"
    : "Career guidance";
  const detailsTo = `/courses/${course.slug || course.id}`;
  const roadmapTo = `${detailsTo}/roadmap`;

  return (
    <Reveal delay={delay} className="h-full">
      <article className="so-card so-course-card flex h-full min-w-0 flex-col overflow-hidden">
        <Link to={detailsTo} className="course-banner relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-surface-muted">
          <img
            src={cover}
            alt={course.name}
            className="block h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
            width={640}
            height={360}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <CourseBannerMark />
        </Link>

        <div className="so-course-card__body flex min-h-0 flex-1 flex-col">
          <Link to={detailsTo} className="min-w-0">
            <h3 className="so-course-card__title">
              {course.name}
            </h3>
            <p className="so-course-card__desc">
              {course.description}
            </p>
          </Link>

          <ul className="so-course-card__features">
            <Detail label="Duration" value={course.duration} />
            <Detail label="Fees" value={course.fees} />
            <Detail label="Placement" value={placement} />
          </ul>

          <div className="so-course-card__footer">
            <p className="so-course-card__rating">
              <Star size={15} className="fill-warning text-warning" />
              {course.rating}
              <span className="so-course-card__reviews">
                ({course.reviewCount || 52} Reviews)
              </span>
            </p>

            <div className="so-course-card__actions">
              <Link to={roadmapTo} className="so-course-card__btn so-course-card__btn--ghost">
                <Map size={13} /> Roadmap
              </Link>
              <Link to={detailsTo} className="so-course-card__btn so-course-card__btn--primary">
                View More <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Detail({ label, value }) {
  return (
    <li>
      <Check size={15} className="so-course-card__check" strokeWidth={2.75} />
      <span>
        {label}:{" "}
        <strong>{value}</strong>
      </span>
    </li>
  );
}
