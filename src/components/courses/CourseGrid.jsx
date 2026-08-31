import CourseCard from "./CourseCard";

export default function CourseGrid({
  courses,
  emptyLabel = "No courses match this filter yet.",
  variant = "default",
}) {
  if (!courses.length) {
    return <p className="course-grid-empty py-16 text-center text-ink-muted">{emptyLabel}</p>;
  }
  return (
    <div
      className={
        variant === "catalog"
          ? "so-courses-catalog"
          : "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5"
      }
    >
      {courses.map((c, i) => (
        <CourseCard key={c.id} course={c} delay={(i % 4) * 0.05} />
      ))}
    </div>
  );
}
