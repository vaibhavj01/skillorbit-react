import { BookOpen, Users, Target } from "lucide-react";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import Button from "../common/Button";
import OrbitBackdrop from "../common/OrbitBackdrop";
import { Eyebrow } from "../common/SectionHeading";

function DashboardMockup() {
  const bars = [40, 65, 50, 80, 70, 90];
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-line">
      <div className="flex items-center gap-2 px-4 py-3 bg-ink">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-white/60">learn.skillorbit.in</span>
      </div>
      <div className="flex bg-[#F3FBF7]">
        <aside className="w-32 shrink-0 py-4 px-3 space-y-1 bg-surface-muted">
          {["My Courses", "Assignments", "Live Sessions", "Career Hub"].map((n, i) => (
            <div key={n} className={`text-xs font-medium px-2.5 py-2 rounded-lg ${i === 0 ? "bg-brand-500 text-white" : "text-ink-light"}`}>
              {n}
            </div>
          ))}
        </aside>
        <div className="flex-1 p-4">
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[["78%", "Progress"], ["12", "Modules"], ["4", "Projects"]].map(([v, l]) => (
              <div key={l} className="rounded-xl p-3 text-center bg-surface-bg">
                <p className="text-lg font-bold font-display text-ink">{v}</p>
                <p className="text-[10px] text-ink-muted">{l}</p>
              </div>
            ))}
          </div>
          <div className="flex items-end gap-2 h-24">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t-md bg-gradient-brand" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DistanceLearningPreview() {
  const features = [
    { icon: BookOpen, title: "Guided curriculum", text: "Week-by-week modules with clear milestones." },
    { icon: Users, title: "Mentor support", text: "Scheduled doubt-clearing and progress reviews." },
    { icon: Target, title: "Career track", text: "Projects and interview prep built into the journey." },
  ];
  return (
    <section id="distance" className="relative overflow-hidden bg-[#E7F7F0] py-20 md:py-28">
      <OrbitBackdrop variant="mint" />
      <Container className="relative z-10 grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Distance Learning</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5 font-display text-ink tracking-tight">
            Learn remotely. Stay accountable.
          </h2>
          <p className="text-base mb-8 leading-relaxed text-ink-muted">
            Structured content, mentor check-ins and career guidance — designed for professionals and students who
            cannot attend daily classroom sessions.
          </p>
          <div className="space-y-5 mb-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-brand-100">
                  <f.icon size={19} className="text-brand-700" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-0.5 text-ink">{f.title}</h3>
                  <p className="text-sm text-ink-muted">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
          <Button to="/distance-learning" variant="primary" size="md">
            Explore Distance Learning
          </Button>
        </Reveal>
        <Reveal delay={0.15}>
          <DashboardMockup />
        </Reveal>
      </Container>
    </section>
  );
}
