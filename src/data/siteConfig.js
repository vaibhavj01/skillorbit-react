// Sourced from the original SkillOrbit static site (js/config.js)

export const SITE_URL = "https://www.skillorbit.in";

export const CONTACT = {
  email: "skillorbit@gmail.com",
  phone: "7588203332",
  phoneDisplay: "+91 75882 03332",
  phoneHref: "tel:+917588203332",
  whatsapp: "917588203332",
  whatsappHref: "https://wa.me/917588203332",
  name: "SKILLORBIT Academy Pvt. Ltd.",
  location: "Pune, Maharashtra, India",
};


export const STATS = [
  {
    key: "students",
    label: "Students Trained",
    value: 10000,
    suffix: "+",
  },

  {
    key: "partners",
    label: "Hiring Partners (Aim)",
    value: 300,
    suffix: "+",
  },

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
    value: 100,
    suffix: "+",
  },
];


export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Placements", to: "/placements" },
  { label: "Distance Learning", to: "/distance-learning" },
  { label: "About Us", to: "/about" },
  { label: "Resources", to: "/blog" },
  { label: "Contact", to: "/contact" },
];


export const FOOTER_LINKS = {
  SkillOrbit: [
    { label: "About", to: "/about" },
    { label: "Placements", to: "/placements" },
    { label: "Courses", to: "/courses" },
    { label: "Distance Learning", to: "/distance-learning" },
    { label: "Contact", to: "/contact" },
  ],

  Learning: [
    { label: "Classroom", to: "/courses" },
    { label: "Online", to: "/courses" },
    { label: "Hybrid", to: "/courses" },
    { label: "Self-Paced", to: "/courses" },
    { label: "Distance Learning", to: "/distance-learning" },
  ],

  Resources: [
    { label: "Blog", to: "/blog" },
    { label: "Career Guide", to: "/blog" },
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
  logo: "/assets/logo/skillorbit-logo.png",
  logoFooter: "/assets/logo/skillorbit-logo-footer.png",
  favicon: "/assets/logo/favicon.png",
  orbitMark: "/assets/logo/skillorbit-orbit-mark.png",
  poweredByLogo: "/assets/partners/icloud-training-placement.png",
};