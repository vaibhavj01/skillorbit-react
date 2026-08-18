export const placementJourney = [
  {
    id: "assess",
    step: "01",
    title: "Skill Assessment",
    short: "Assessment",
    description:
      "Understand your current technical level, identify skill gaps, and create a personalized learning path.",
    points: ["Technical baseline", "Skill-gap map", "Personal learning path"],
    icon: "target",
  },
  {
    id: "train",
    step: "02",
    title: "Designation-Oriented Training",
    short: "Training",
    description:
      "Learn the exact technical skills required for your target job role — not isolated tools.",
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
    title: "Daily Practical Learning",
    short: "Practical Learning",
    description:
      "Build skills through daily coding tasks, assignments, practical exercises, and real-world development scenarios.",
    points: ["Daily assignments", "Coding practice", "Hands-on exercises", "Real-world use cases", "Projects"],
    icon: "terminal",
  },
  {
    id: "profile",
    step: "04",
    title: "Build Your Professional Profile",
    short: "Profile Building",
    description:
      "Turn your technical skills into a professional profile that recruiters can scan and trust.",
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
    title: "Interview & HR Preparation",
    short: "Interview Preparation",
    description:
      "Handle technical interviews, HR rounds, and professional communication with a repeatable process.",
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
    title: "Placement Drives & Job Opportunities",
    short: "Placement Drives",
    description:
      "Connect trained candidates with relevant openings through placement drives and an internal job portal.",
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
    title: "Start Your Career",
    short: "Career Success",
    description:
      "Convert skills, preparation, and interview performance into a real role — the final step of the journey.",
    points: ["Offer support", "Role onboarding", "Career growth plan"],
    icon: "rocket",
    featured: true,
  },
];

export const careerBenefits = [
  {
    id: "lms",
    title: "LMS Access",
    description: "Structured modules, assignments, and resources in one learning system.",
    icon: "book",
  },
  {
    id: "resources",
    title: "Learning Resource Access",
    description: "Recorded sessions and course resources you can revisit while you train.",
    icon: "play",
  },
  {
    id: "mentorship",
    title: "Personalized Mentorship",
    description: "Doubt-solving, progress checks, and career guidance mapped to your target role.",
    icon: "users",
  },
  {
    id: "modes",
    title: "Online / Offline / Hybrid",
    description: "Classroom, online, or hybrid batches from Baner, Hinjawadi, and Wakad.",
    icon: "monitor",
  },
  {
    id: "alumni",
    title: "Alumni Network",
    description: "Meet alumni, learn from their paths, and grow a professional network.",
    icon: "network",
  },
  {
    id: "webinars",
    title: "Industry Expert Webinars",
    description: "Live sessions on stacks, hiring trends, and how teams actually ship work.",
    icon: "video",
  },
  {
    id: "certs",
    title: "Global Certification Benefits",
    description: "20% off selected global certifications after you complete the program path.",
    icon: "badge",
  },
];

/** @deprecated kept for any leftover imports */
export const placementProcess = placementJourney;
