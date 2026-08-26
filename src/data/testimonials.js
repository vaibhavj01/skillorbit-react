export const testimonials = [
  {
    id: "surya",
    name: "Surya",
    role: "Salesforce Developer",
    package: "13 LPA",
    avatar: "/assets/images/testimonials/surya.png",
    featured: true,
  },
  {
    id: "vishal",
    name: "Vishal",
    role: "ServiceNow Developer",
    package: "9.5 LPA",
    avatar: "/assets/images/testimonials/vishal.jpg",
    featured: true,
  },
  {
    id: "pravin-gaikwad",
    name: "Pravin Gaikwad",
    role: "ServiceNow Developer",
    package: "8 LPA",
    avatar: "/assets/images/testimonials/pravin-gaikwad.jpg",
    featured: true,
  },
  {
    id: "suraj",
    name: "Suraj",
    role: "DevOps Engineer",
    package: "18 LPA",
    avatar: "/assets/images/testimonials/suraj.png",
    featured: true,
  },
  {
    id: "manish",
    name: "Manish",
    role: "Data Analytics Professional",
    package: "9 LPA",
    avatar: "/assets/images/testimonials/manish.jpg",
    featured: true,
  },
  {
    id: "faran-shaikh",
    name: "Faran Shaikh",
    role: "Junior Data Analyst",
    package: "6.5 LPA",
    avatar: "/assets/images/testimonials/faran-shaikh.png",
    featured: true,
  },
  {
    id: "akshay",
    name: "Akshay",
    role: "Salesforce Consultant",
    package: "18 LPA",
    avatar: "/assets/images/testimonials/akshay.png",
    featured: true,
  },
  {
    id: "pranjali",
    name: "Pranjali",
    role: "ServiceNow Developer",
    package: "8.5 LPA",
    avatar: "/assets/images/testimonials/pranjali.png",
    featured: true,
  },
];

export const REVIEW_STATS = [
  { id: "learners", value: "10,000+", label: "Happy Learners" },
  { id: "rating", value: "4.8/5", label: "Average Rating" },
  { id: "support", value: "95%", label: "Placement Support" },
  { id: "campuses", value: "3", label: "Pune Campuses" },
];

export const PLATFORM_RATINGS = [
  {
    id: "google",
    name: "Google",
    score: 4.8,
    reviewsLabel: "Search & Maps feedback",
    growth: "Highest volume",
    color: "#4285F4",
    percent: 96,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    score: 4.7,
    reviewsLabel: "Profile recommendations",
    growth: "Hiring visibility",
    color: "#0A66C2",
    percent: 94,
  },
  {
    id: "justdial",
    name: "Justdial",
    score: 4.6,
    reviewsLabel: "Local Pune listings",
    growth: "Campus searches",
    color: "#E31C25",
    percent: 92,
  },
  {
    id: "facebook",
    name: "Facebook",
    score: 4.7,
    reviewsLabel: "Community comments",
    growth: "Batch updates",
    color: "#1877F2",
    percent: 94,
  },
];

export const featuredTestimonials = testimonials.filter((item) => item.featured);
