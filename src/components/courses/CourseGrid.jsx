import CourseCard from "./CourseCard";

export default function CourseGrid({ courses, emptyLabel = "No courses match this filter yet." }) {
  if (!courses.length) {
    return <p className="text-center text-ink-muted py-16">{emptyLabel}</p>;
  }
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
      {courses.map((c, i) => (
        <CourseCard key={c.id} course={c} delay={(i % 4) * 0.05} />
      ))}
    </div>
  );
}
