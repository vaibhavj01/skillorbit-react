import { CheckCircle2, Minus } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import { learningModels } from "../../data/learningModels";

export default function LearningModels() {
  const featureLabels = learningModels[0]?.features.map((f) => f.label) || [];

  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-6xl">
        <SectionHeading eyebrow="Flexibility" title="Choose Your Learning Model" subtitle="Pick the format that fits your schedule — without compromising outcomes." />
        <Reveal className="overflow-x-auto rounded-2xl border border-line bg-white">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="bg-surface-muted">
                <th className="text-left px-5 py-4 font-semibold text-ink-light">Feature</th>
                {learningModels.map((m) => (
                  <th key={m.id} className={`text-center px-5 py-4 font-semibold ${m.highlight ? "text-brand-700 bg-brand-100" : "text-ink-light"}`}>
                    {m.highlight && <span className="block text-[10px] font-bold uppercase tracking-wide mb-1 text-brand-600">Popular</span>}
                    {m.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureLabels.map((label, rowIdx) => (
                <tr key={label} className="border-t border-line">
                  <td className="px-5 py-4 font-medium text-ink">{label}</td>
                  {learningModels.map((m) => (
                    <td
                      key={m.id}
                      className={`text-center px-5 py-4 ${m.highlight ? "bg-brand-50 text-brand-700 font-semibold" : "text-ink-muted"}`}
                    >
                      {m.features[rowIdx]?.included ? (
                        <CheckCircle2 size={18} className="inline text-brand-500" />
                      ) : (
                        <Minus size={16} className="inline text-line-strong" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-line">
                <td className="px-5 py-4 font-medium text-ink">Summary</td>
                {learningModels.map((m) => (
                  <td key={m.id} className={`text-center px-5 py-4 text-xs ${m.highlight ? "bg-brand-50 text-brand-700" : "text-ink-muted"}`}>
                    {m.summary}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </Reveal>
        <p className="text-xs mt-4 text-center text-ink-muted">
          *Placement support eligibility varies by program completion and attendance criteria.
        </p>
      </Container>
    </section>
  );
}
