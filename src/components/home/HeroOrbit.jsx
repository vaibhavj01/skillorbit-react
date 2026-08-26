import { ASSETS, STATS } from "../../data/siteConfig";
import useCounter from "../../hooks/useCounter";
import useScrollReveal from "../../hooks/useScrollReveal";
import "../../styles/hero-orbit.css";

const ORBIT_RINGS = [
  { id: 1, size: "34%", duration: "25s", reverse: false, dashed: false },
  { id: 2, size: "50%", duration: "35s", reverse: true, dashed: true },
  { id: 3, size: "66%", duration: "45s", reverse: false, dashed: false },
  { id: 4, size: "82%", duration: "55s", reverse: true, dashed: true },
  { id: 5, size: "94%", duration: "70s", reverse: false, dashed: false },
];

const TECHNOLOGIES = [
  { name: "Java", orbit: 1, angle: 18, hideOnMobile: false },
  { name: "Python", orbit: 1, angle: 198, hideOnMobile: false },
  { name: "JavaScript", orbit: 2, angle: 42, hideOnMobile: false },
  { name: "React", orbit: 2, angle: 128, hideOnMobile: false },
  { name: "SQL", orbit: 2, angle: 218, hideOnMobile: true },
  { name: "Git", orbit: 2, angle: 308, hideOnMobile: true },
  { name: "AWS", orbit: 3, angle: 24, hideOnMobile: false },
  { name: "Azure", orbit: 3, angle: 108, hideOnMobile: true },
  { name: "Docker", orbit: 3, angle: 196, hideOnMobile: false },
  { name: "Spring Boot", orbit: 3, angle: 292, hideOnMobile: true },
  { name: "Kubernetes", orbit: 4, angle: 56, hideOnMobile: true },
  { name: "AI", orbit: 4, angle: 168, hideOnMobile: false },
  { name: "DevOps", orbit: 4, angle: 286, hideOnMobile: true },
  { name: "Machine Learning", orbit: 5, angle: 78, hideOnMobile: true },
  { name: "Cybersecurity", orbit: 5, angle: 248, hideOnMobile: true },
];

function CentralLogo() {
  return (
    <div className="so-orbit-logo">
      <span className="so-orbit-logo__glow" aria-hidden="true" />
      <span className="so-orbit-logo__core">
        <img
          src={ASSETS.orbitMark}
          alt="SkillOrbit Academy"
          width={88}
          height={88}
          className="so-orbit-logo__img"
          fetchPriority="high"
          decoding="async"
        />
      </span>
    </div>
  );
}

function OrbitItem({ name, angle, duration, reverse, hideOnMobile }) {
  const angleStyle = {
    "--angle": `${angle}deg`,
    "--orbit-duration": duration,
    "--orbit-direction": reverse ? "reverse" : "normal",
  };

  return (
    <div
      className={`so-orbit-item${hideOnMobile ? " so-orbit-item--mobile-hide" : ""}`}
      style={angleStyle}
    >
      <span className="so-orbit-pill" style={angleStyle}>
        {name}
      </span>
    </div>
  );
}

function OrbitRing({ ring, items }) {
  return (
    <div
      className={`so-orbit-ring${ring.dashed ? " so-orbit-ring--dashed" : ""}`}
      style={{
        "--orbit-size": ring.size,
        "--orbit-duration": ring.duration,
        "--orbit-direction": ring.reverse ? "reverse" : "normal",
      }}
    >
      {items.map((tech) => (
        <OrbitItem
          key={tech.name}
          name={tech.name}
          angle={tech.angle}
          duration={ring.duration}
          reverse={ring.reverse}
          hideOnMobile={tech.hideOnMobile}
        />
      ))}
    </div>
  );
}

function FloatingStatCard({ value, suffix, label, position, delay = "0s" }) {
  return (
    <article className={`so-orbit-stat so-orbit-stat--${position}`} style={{ "--float-delay": delay }}>
      <p className="so-orbit-stat__value">
        {value}
        {suffix}
      </p>
      <p className="so-orbit-stat__label">{label}</p>
    </article>
  );
}

function DecorativeParticles() {
  return (
    <div className="so-orbit-decor" aria-hidden="true">
      <span className="so-orbit-decor__arc" />
      <span className="so-orbit-decor__dot so-orbit-decor__dot--1" />
      <span className="so-orbit-decor__dot so-orbit-decor__dot--2" />
      <span className="so-orbit-decor__dot so-orbit-decor__dot--3" />
      <span className="so-orbit-decor__dot so-orbit-decor__dot--4" />
      <span className="so-orbit-decor__blob so-orbit-decor__blob--1" />
      <span className="so-orbit-decor__blob so-orbit-decor__blob--2" />
      <span className="so-orbit-decor__plus so-orbit-decor__plus--1" />
      <span className="so-orbit-decor__plus so-orbit-decor__plus--2" />
    </div>
  );
}

function OrbitSystem() {
  return (
    <div className="so-orbit-stage">
      {ORBIT_RINGS.map((ring) => (
        <OrbitRing
          key={ring.id}
          ring={ring}
          items={TECHNOLOGIES.filter((tech) => tech.orbit === ring.id)}
        />
      ))}
      <CentralLogo />
    </div>
  );
}

export default function HeroOrbit() {
  const [ref, visible] = useScrollReveal(0.18);
  const students = STATS.find((stat) => stat.key === "students");
  const programs = STATS.find((stat) => stat.key === "courses");
  const placement = STATS.find((stat) => stat.key === "placementRate");

  const studentsCount = useCounter(students?.value || 10000, visible);
  const programsCount = useCounter(programs?.value || 50, visible);
  const placementCount = useCounter(placement?.value || 95, visible);

  return (
    <div className="so-orbit" ref={ref} id="hero-orbit">
      <div className="so-orbit-bg" aria-hidden="true">
        <span className="so-orbit-bg__dots" />
      </div>

      <span className="so-orbit-edge so-orbit-edge--card so-orbit-edge--tl" aria-hidden="true" />
      <span className="so-orbit-edge so-orbit-edge--circle so-orbit-edge--tr" aria-hidden="true" />
      <span className="so-orbit-edge so-orbit-edge--circle so-orbit-edge--br" aria-hidden="true" />

      <DecorativeParticles />
      <OrbitSystem />

      <FloatingStatCard
        position="tl"
        value={studentsCount.toLocaleString("en-IN")}
        suffix={students?.suffix || "+"}
        label="Learners guided"
      />
      <FloatingStatCard
        position="ml"
        value={programsCount}
        suffix={programs?.suffix || "+"}
        label="Programs"
        delay="0.8s"
      />
      <FloatingStatCard
        position="br"
        value={placementCount}
        suffix={placement?.suffix || "%"}
        label="Placement support rate"
        delay="1.4s"
      />
    </div>
  );
}
