import { Calendar, Clock, MapPin } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import Button from "../common/Button";
import { batches } from "../../data/batches";
import { getCourseBySlug } from "../../data/courses";

const STATUS_STYLE = {
  open: { dot: "bg-brand-500", bg: "bg-brand-100", text: "text-brand-700", label: "Seats open" },
  filling: { dot: "bg-[#F79009]", bg: "bg-[#FEF6E7]", text: "text-[#B25E09]", label: "Filling fast" },
  full: { dot: "bg-[#D92D20]", bg: "bg-[#FDEDEC]", text: "text-[#B42318]", label: "Full" },
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function BatchCard({ batch, delay }) {
  const s = STATUS_STYLE[batch.status] || STATUS_STYLE.open;
  const pct = Math.round(((batch.seatsTotal - batch.seatsLeft) / batch.seatsTotal) * 100);
  const course = getCourseBySlug(batch.courseId);

  return (
    <Reveal delay={delay}>
      <div className="h-full p-6 rounded-2xl border border-line bg-white flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-bold leading-snug font-display text-ink">{batch.courseName}</h3>
          <span className={`shrink-0 flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full ${s.bg} ${s.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} /> {s.label}
          </span>
        </div>
        <div className="space-y-2 text-sm text-ink-light">
          <p className="flex items-center gap-2">
            <Calendar size={14} className="text-brand-600" /> Starts {formatDate(batch.startDate)}
          </p>
          <p className="flex items-center gap-2">
            <Clock size={14} className="text-brand-600" /> {batch.schedule}
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={14} className="text-brand-600" /> {batch.location} · {batch.mode}
          </p>
        </div>
        <div>
          <div className="w-full h-1.5 rounded-full overflow-hidden bg-surface-muted">
            <div className="h-full rounded-full bg-gradient-brand" style={{ width: `${pct}%` }} />
          </div>
          <p className="text-xs mt-1.5 text-ink-muted">
            {batch.seatsLeft} of {batch.seatsTotal} seats left
          </p>
        </div>
        <Button to={course ? `/courses/${course.slug}` : "/contact"} variant="outline" size="sm" className="w-full mt-auto">
          {batch.status === "full" ? "Join Waitlist" : "Reserve Seat"}
        </Button>
      </div>
    </Reveal>
  );
}

export default function Batches() {
  return (
    <section id="batches" className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading eyebrow="Schedule" title="Upcoming Batches" subtitle="New classroom, online and distance learning seats open regularly." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {batches.map((b, i) => (
            <BatchCard key={b.id} batch={b} delay={i * 0.06} />
          ))}
        </div>
      </Container>
    </section>
  );
}
