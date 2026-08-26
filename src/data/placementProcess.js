export const placementJourney = [
  {
    id: "assess",
    step: "01",
    title: "Skill Assessment",
    short: "Assessment",
    description:
      "Assess the learner's current technical knowledge, identify skill gaps, and create a focused learning path based on their target career.",
    points: ["Technical baseline", "Skill-gap map", "Personal learning path"],
    icon: "target",
  },
  {
    id: "train",
    step: "02",
    title: "Role-Focused Training",
    short: "Training",
    description:
      "Learn the technical tools, concepts, and workflows required for the learner's target job role through structured industry-focused training.",
    points: [
      "Java Full Stack Developer",
      "Backend Developer",
      "Frontend Developer",
      "Software Engineer",
      "Data Analyst",
      "DevOps Engineer",
    ],
    icon: "code",
  },
  {
    id: "practice",
    step: "03",
    title: "Practical Learning",
    short: "Practical Skills",
    description:
      "Build real skills through coding tasks, assignments, projects, case studies, and practical exercises based on real-world scenarios.",
    points: ["Daily assignments", "Coding practice", "Hands-on exercises", "Real-world use cases", "Projects"],
    icon: "terminal",
  },
  {
    id: "profile",
    step: "04",
    title: "Profile Building",
    short: "Profile Building",
    description:
      "Turn trained skills into a recruiter-ready profile with a polished resume, GitHub, LinkedIn, and a portfolio that showcases completed work.",
    points: [
      "Resume building",
      "GitHub profile",
      "LinkedIn optimization",
      "Portfolio development",
      "Project presentation",
      "ATS-friendly resume",
    ],
    icon: "user",
  },
  {
    id: "interview",
    step: "05",
    title: "Interview Preparation",
    short: "Interview Preparation",
    description:
      "Prepare for technical rounds, HR interviews, and professional communication through mock interviews and a repeatable interview process.",
    points: [
      "Communication skills",
      "Soft skills",
      "Mock interviews",
      "HR interview prep",
      "Interview questions",
      "Professional etiquette",
    ],
    icon: "mic",
  },
  {
    id: "drives",
    step: "06",
    title: "Placement",
    short: "Placement",
    description:
      "Connect trained learners with relevant openings through placement drives, internships, and recruitment support matched to their target role.",
    points: [
      "Placement drives",
      "Internal job portal",
      "Internship opportunities",
      "Job openings",
      "Interview opportunities",
      "Recruitment assistance",
    ],
    icon: "building",
  },
  {
    id: "career",
    step: "07",
    title: "Career",
    short: "Career",
    description:
      "Convert skills, interviews, and offers into a real role — with onboarding support and a plan to grow from placement into a long-term career.",
    points: ["Offer support", "Role onboarding", "Career growth plan"],
    icon: "rocket",
    featured: true,
  },
];

/** @deprecated kept for any leftover imports */
export const placementProcess = placementJourney;
