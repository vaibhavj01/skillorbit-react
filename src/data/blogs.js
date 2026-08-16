// Sourced from the original SkillOrbit static site (js/data.js)
export const blogPosts = [
  {
    "id": "bp1",
    "slug": "choose-it-course-pune",
    "title": "How to Choose the Right IT Course in Pune (Placeholder)",
    "category": "Career Guidance",
    "date": "2026-08-01",
    "readTime": "6 min",
    "excerpt": "PLACEHOLDER: Guidance on matching career goals with Full Stack, Testing, Data or Cloud tracks.",
    "image": "/assets/images/placeholders/blog-1.svg",
    "placeholder": true
  },
  {
    "id": "bp2",
    "slug": "java-vs-python-beginners",
    "title": "Java vs Python for Beginners (Placeholder)",
    "category": "Programming",
    "date": "2026-07-20",
    "readTime": "5 min",
    "excerpt": "PLACEHOLDER: Compare learning curves, career paths and project styles.",
    "image": "/assets/images/placeholders/blog-2.svg",
    "placeholder": true
  },
  {
    "id": "bp3",
    "slug": "distance-learning-tips",
    "title": "Succeeding with Distance Learning (Placeholder)",
    "category": "Student Success",
    "date": "2026-07-05",
    "readTime": "4 min",
    "excerpt": "PLACEHOLDER: Habits, schedules and mentor tips for remote learners.",
    "image": "/assets/images/placeholders/blog-3.svg",
    "placeholder": true
  },
  {
    "id": "bp4",
    "slug": "interview-prep-checklist",
    "title": "IT Interview Prep Checklist (Placeholder)",
    "category": "Interview Preparation",
    "date": "2026-06-18",
    "readTime": "7 min",
    "excerpt": "PLACEHOLDER: Resume, DSA basics, projects and behavioural prep.",
    "image": "/assets/images/placeholders/blog-1.svg",
    "placeholder": true
  }
];

export function getBlogBySlug(slug) {
  return blogPosts.find((b) => b.slug === slug);
}
