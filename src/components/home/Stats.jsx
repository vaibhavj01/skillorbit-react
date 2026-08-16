import useScrollReveal from "../../hooks/useScrollReveal";
import useCounter from "../../hooks/useCounter";
import { STATS } from "../../data/siteConfig";

function StatItem({ stat }) {
  const [ref, visible] = useScrollReveal(0.4);
  const value = useCounter(stat.value, visible);
  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl md:text-4xl font-bold font-display text-ink">
        {value.toLocaleString()}
        <span className="text-brand-500">{stat.suffix}</span>
      </p>
      <p className="text-sm mt-1 text-ink-muted">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative z-10 -mt-8 md:-mt-12 px-5 md:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-card border border-line grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-6 py-8 md:px-10 md:py-10">
        {STATS.map((s) => (
          <StatItem key={s.key} stat={s} />
        ))}
      </div>
    </section>
  );
}
