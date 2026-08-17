import { STATS } from "../../data/siteConfig";
import useCounter from "../../hooks/useCounter";
import useScrollReveal from "../../hooks/useScrollReveal";

const ORBITS = [
  {
    id: 1,
    planets: [
      { name: "Java", color: "#F97316", size: 48, slot: 18 },
      { name: "Python", color: "#3B82F6", size: 52, slot: 198 },
    ],
  },
  {
    id: 2,
    reverse: true,
    planets: [
      { name: "React", color: "#22D3EE", size: 54, slot: 55 },
      { name: "JS", color: "#FACC15", ink: "#1F2937", size: 48, slot: 175 },
      { name: "SQL", color: "#818CF8", size: 50, slot: 235 },
      { name: "MERN", color: "#34D399", size: 56, slot: 310 },
    ],
  },
  {
    id: 3,
    planets: [
      { name: "AWS", color: "#FB923C", size: 56, slot: 40 },
      { name: "Docker", color: "#38BDF8", size: 54, slot: 130 },
      { name: "K8s", color: "#326CE5", size: 50, slot: 210 },
      { name: "Azure", color: "#60A5FA", size: 52, slot: 300 },
    ],
  },
  {
    id: 4,
    reverse: true,
    planets: [
      { name: "AI", color: "#C084FC", size: 60, slot: 8 },
      { name: "ML", color: "#F472B6", size: 52, slot: 92 },
      { name: "Data", color: "#2DD4BF", size: 58, slot: 188 },
      { name: "Cyber", color: "#F87171", size: 54, slot: 278 },
    ],
  },
];

export default function HeroOrbit() {
  const [ref, visible] = useScrollReveal(0.2);
  const students = STATS.find((stat) => stat.key === "students");
  const studentsCount = useCounter(students?.value || 10000, visible);

  return (
    <div className="hero-orbit-wrapper" ref={ref}>
      <div id="hero-orbit" className="orbit-stage" data-hero-orbit aria-hidden="true">
        <div className="orbit-stage__stars" />
        <div className="orbit-stage__sun-glow" />

        <div className="orbit-stage__track orbit-stage__track--1" />
        <div className="orbit-stage__track orbit-stage__track--2" />
        <div className="orbit-stage__track orbit-stage__track--3" />
        <div className="orbit-stage__track orbit-stage__track--4" />

        {ORBITS.map((orbit) => (
          <div
            key={orbit.id}
            className={`orbit-stage__ring orbit-stage__ring--${orbit.id}${
              orbit.reverse ? " orbit-stage__ring--reverse" : ""
            }`}
          >
            {orbit.planets.map((planet) => (
              <div
                key={planet.name}
                className="orbit-stage__slot"
                style={{ "--slot": `${planet.slot}deg` }}
              >
                <div
                  className="orbit-stage__node"
                  style={{
                    "--planet": planet.color,
                    "--planet-size": `${planet.size}px`,
                    "--planet-ink": planet.ink || "#ffffff",
                  }}
                >
                  <span className="orbit-stage__planet-sphere" />
                  <span className="orbit-stage__planet-name">{planet.name}</span>
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="orbit-stage__center">
          <span className="orbit-stage__center-flare" />
          <span className="orbit-stage__center-core" />
          <span className="orbit-stage__center-label">SkillOrbit</span>
        </div>
      </div>

      <div className="hero__float-card hero__float-card--1">
        <p className="hero__float-card-value">
          <span data-stat="students" data-count={students?.value || 10000}>
            {studentsCount.toLocaleString("en-IN")}
          </span>
          {students?.suffix || "+"}
        </p>
        <p className="hero__float-card-label">Learners guided</p>
      </div>

      <div className="hero__float-card hero__float-card--2">
        <p className="hero__float-card-value">25%</p>
        <p className="hero__float-card-label">Placement support rate</p>
      </div>
    </div>
  );
}
