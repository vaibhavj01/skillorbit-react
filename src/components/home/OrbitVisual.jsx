import { Code2, Cloud, ShieldCheck, FlaskConical, BrainCircuit, Server } from "lucide-react";

const ORBIT_ICONS = [Code2, Cloud, ShieldCheck, FlaskConical, BrainCircuit, Server];

export default function OrbitVisual() {
  const outerR = 150;
  const innerR = 88;

  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center">
      <div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(54,168,74,0.28) 0%, transparent 70%)" }}
      />
      <div className="absolute rounded-full border" style={{ width: outerR * 2, height: outerR * 2, borderColor: "rgba(54,168,74,0.22)" }} />
      <div className="absolute rounded-full border" style={{ width: innerR * 2, height: innerR * 2, borderColor: "rgba(54,168,74,0.3)" }} />

      {/* Outer rotating ring of tech icons */}
      <div className="absolute animate-orbit-spin" style={{ width: outerR * 2, height: outerR * 2 }}>
        {ORBIT_ICONS.map((Icon, i) => {
          const angle = (i / ORBIT_ICONS.length) * 2 * Math.PI;
          const x = outerR + outerR * Math.cos(angle) - 22;
          const y = outerR + outerR * Math.sin(angle) - 22;
          return (
            <div
              key={i}
              className="absolute w-11 h-11 rounded-xl flex items-center justify-center bg-white shadow-lg animate-orbit-spin-reverse"
              style={{ left: x, top: y, boxShadow: "0 8px 20px rgba(13,77,43,0.14)" }}
            >
              <Icon size={20} className="text-brand-700" />
            </div>
          );
        })}
      </div>

      {/* Inner rotating ring of dots */}
      <div className="absolute animate-orbit-spin-slow" style={{ width: innerR * 2, height: innerR * 2 }}>
        {[0, 1, 2].map((i) => {
          const angle = (i / 3) * 2 * Math.PI + 0.4;
          const x = innerR + innerR * Math.cos(angle) - 7;
          const y = innerR + innerR * Math.sin(angle) - 7;
          return <div key={i} className="absolute w-3.5 h-3.5 rounded-full bg-brand-400" style={{ left: x, top: y }} />;
        })}
      </div>

      {/* Center brand mark */}
      <div className="relative z-10 w-28 h-28 rounded-full flex items-center justify-center text-white font-bold text-2xl font-display bg-gradient-brand animate-pulse-soft shadow-[0_20px_45px_rgba(22,130,56,0.4)]">
        SO
      </div>
    </div>
  );
}
