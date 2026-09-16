// Sourced from the original SkillOrbit static site (js/config.js)

export const SITE_URL = "https://www.skillorbit.in";

export const CONTACT = {
  email: "info@skill-orbit.com",
  inquiryEmail: "vaibhavjondhale0111@gmail.com",
  phone: "9175479525",
  phoneDisplay: "+91 91754 79525",
  phoneHref: "tel:+919175479525",
  smsHref: "sms:+919175479525",
  whatsapp: "919175479525",
  whatsappHref: "https://wa.me/919175479525",
  name: "SKILLORBIT Academy Pvt. Ltd.",
  location:
    "Flat 3, 2nd Floor, Exclusive Apartment, S. No. 134, 5, 6, 1, Baner Gaon, Haveli, Pune, Maharashtra, India, 411045",
  offices: ["Baner", "Hinjewadi", "Wakad"],
};


export const STATS = [
  {
    key: "students",
    label: "Students Trained",
    value: 100,
    suffix: "+",
  },

  // {
  //   key: "partners",
  //   label: "Hiring Partners (Aim)",
  //   value: 300,
  //   suffix: "+",
  // },

  {
    key: "placementRate",
    label: "Placement Support",
    value: 95,
    suffix: "%",
  },

  {
    key: "courses",
    label: "Courses Offered",
    value: 50,
    suffix: "+",
  },

  {
    key: "experts",
    label: "Industry Experts",
    value: 50,
    suffix: "+",
  },
];


export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "All Courses", to: "/courses" },
  { label: "About Us", to: "/about" },
  { label: "Placement", to: "/placements" },
  { label: "Corporate", to: "/corporate" },
  { label: "Teaching", to: "/about#teaching" },
  { label: "Contact Us", to: "/contact" },
];


export const FOOTER_QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "All Courses", to: "/courses" },
  { label: "About Us", to: "/about" },
  { label: "Placement", to: "/placements" },
  { label: "Contact Us", to: "/contact" },
];

export const FOOTER_POPULAR_COURSES = [
  { label: "Data Analytics", to: "/courses/data-analytics" },
  { label: "AWS + DevOps", to: "/courses/aws-devops-genai" },
  { label: "Java Full Stack Development", to: "/courses/java-fullstack" },
  { label: "Python Full Stack Development", to: "/courses/python-fullstack" },
  { label: "Artificial Intelligence", to: "/courses/artificial-intelligence" },
];

export const FOOTER_SUPPORT_LINKS = [
  { label: "Placement Assistance", to: "/placements" },
  { label: "Book Free Demo", action: "demo" },
      { label: "Career Counselling", to: "/contact" },
      { label: "Student Reviews", to: "/reviews" },
  { label: "FAQs", to: "/#faq" },
];

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Refund Policy", to: "/refund" },
];

// export const SOCIAL_LINKS = [
//   { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/skillorbit/" },
//   { id: "instagram", label: "Instagram", href: "https://www.instagram.com/skillorbit/" },
//   { id: "facebook", label: "Facebook", href: "https://www.facebook.com/skillorbit" },
//   { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@skillorbit" },
// ];

export const SOCIAL_LINKS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/skillorbit-academy/about/",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/skill_orbit_academy_official?stkn=NWNicHhsdDU1c3I1",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/skillorbit",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@skillorbit",
  },
];

export const FOOTER_LINKS = {
  SkillOrbit: [
    { label: "About Us", to: "/about" },
    { label: "Teaching", to: "/about#teaching" },
    { label: "All Courses", to: "/courses" },
    { label: "Placement", to: "/placements" },
    { label: "Corporate", to: "/corporate" },
    { label: "Contact Us", to: "/contact" },
  ],

  Learning: [
    { label: "Classroom", to: "/courses" },
    { label: "Online", to: "/courses" },
    { label: "Hybrid", to: "/courses" },
    { label: "Self-Paced", to: "/courses" },
    { label: "Distance Learning", to: "/distance-learning" },
  ],

  Resources: [
    { label: "Student Reviews", to: "/reviews" },
    { label: "FAQs", to: "/#faq" },
  ],

  Company: [
    { label: "About Us", to: "/about" },
    { label: "Careers", to: "/careers" },
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
    { label: "Refund Policy", to: "/refund" },
  ],
};


export const ASSETS = {
  logo: "/assets/logo/skillorbit-logo.webp",
  logoFooter: "/assets/logo/skillorbit-logo-footer.webp",
  favicon: "/assets/logo/favicon.png",
  orbitMark: "/assets/logo/skillorbit-orbit-mark.webp",
  poweredByLogo: "/assets/partners/icloud-training-placement.webp",
};