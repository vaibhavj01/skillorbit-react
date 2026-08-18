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
  location: "Baner, Hinjawadi & Wakad, Pune",
  offices: ["Baner", "Hinjawadi", "Wakad"],
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
  { label: "Corporate Training", to: "/corporate" },
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
    { label: "Corporate Training", to: "/corporate" },
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
    { label: "Student Reviews", to: "/reviews" },
    { label: "Career Guide", to: "/blog" },
    { label: "FAQs", to: "/#faq" },
  ],

  Company: [
    { label: "About Us", to: "/about" },
    { label: "Corporate Training", to: "/corporate" },
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