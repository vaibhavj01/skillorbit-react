# SkillOrbit Academy — React + Tailwind Recreation

A high-fidelity, component-based recreation of the original SkillOrbit Academy static
website, rebuilt with **React 19**, **Vite**, **Tailwind CSS 3**, and **React Router 7**.

All copy, courses, batches, FAQs, testimonials, trainers, blog posts, partner logos and
legal-page content were extracted directly from the original site's `js/data.js`,
`js/config.js` and HTML files — nothing here is generic filler.

---

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173` with hot module reload.

## Production build

```bash
npm run build
npm run preview   # serve the built app locally to sanity-check it
```

The production bundle is written to `dist/`.

---

## Project structure

```
src/
├── components/
│   ├── common/    Button, Container, SectionHeading, Badge, Loader,
│   │               Reveal (scroll animation), Seo, PageHero, LegalPage
│   ├── layout/     Header, MobileMenu, Footer, AnnouncementBar,
│   │               HeaderSearch, FloatingActions
│   ├── home/       Hero, OrbitVisual, Stats, Partners, WhyFeatures,
│   │               CoursesPreview, Batches, LearningModels,
│   │               DistanceLearningPreview, Projects, PlacementProcess,
│   │               Testimonials, Trainers, BlogPreview, FAQ, CTASection
│   ├── courses/    CourseCard, CourseFilter, CourseGrid
│   ├── blog/       BlogCard, BlogGrid
│   └── forms/      FormField, Input, Textarea, Select, ContactForm, DemoForm
│
├── pages/          Home, Courses, CourseDetails, Placements,
│                   DistanceLearning, About, Blog, BlogDetails, Contact,
│                   Careers, Privacy, Terms, Refund, NotFound
│
├── data/           courses.js, batches.js, faqs.js, testimonials.js,
│                   trainers.js, blogs.js, partners.js, projects.js,
│                   whyFeatures.js, placementProcess.js, learningModels.js,
│                   siteConfig.js (contact info, nav, footer links)
│
├── hooks/          useScrollReveal, useCounter, useClickOutside
├── layouts/         MainLayout.jsx (header/footer/announcement bar wrapper)
├── App.jsx           Router configuration
├── main.jsx
└── index.css          Tailwind entry + fonts + smooth scroll + keyframes

public/assets/          Real logo, partner, tech-icon and placeholder images
                        copied from the original site's ZIP
```

## Routes

| Path                 | Page             |
|-----------------------|------------------|
| `/`                    | Home             |
| `/courses`              | Courses (filter + search) |
| `/courses/:slug`         | Course details   |
| `/placements`            | Placements       |
| `/distance-learning`      | Distance Learning |
| `/about`                  | About Us         |
| `/blog`                    | Resources / Blog |
| `/blog/:slug`               | Blog article     |
| `/contact`                   | Contact          |
| `/careers`                    | Careers          |
| `/privacy`                     | Privacy Policy   |
| `/terms`                        | Terms of Use     |
| `/refund`                        | Refund Policy    |
| `*`                               | 404 Not Found    |

---

## How to add a course

Edit `src/data/courses.js` and add an object to the exported `courses` array. Each course
needs at minimum: `id`, `slug`, `name`, `category`, `description`, `duration`, `level`,
`rating`, `mode` (array), `icon` (path under `/assets/tech/...`). Optional fields
(`curriculum`, `technologies`, `whatYouLearn`, `careerPath`, `prerequisites`, `fees`)
populate the course details page automatically. `category` must match an id in the
`CATEGORIES` list exported from the same file so filtering works.

## How to add a blog post

Edit `src/data/blogs.js` and add an object with `id`, `slug`, `title`, `category`, `date`,
`readTime`, `excerpt`, and `image`. It will automatically appear on `/blog` and be
reachable at `/blog/:slug`.

## How to modify theme colors

Brand colors, fonts and animation keyframes are defined once in `tailwind.config.js`
under `theme.extend.colors.brand` (green scale), `theme.extend.colors.ink` (black/near-black
text), and `theme.extend.colors.surface` / `line` (backgrounds and borders). Change the hex
values there and every component that uses `bg-brand-500`, `text-ink`, etc. updates
automatically — no need to touch individual components.

Buttons are intentionally **black background / green text** (see `VARIANTS` in
`src/components/common/Button.jsx`) per the current brand direction. Adjust the variant
styles there if this changes.

## How to modify navigation

Edit `NAV_LINKS` and `FOOTER_LINKS` in `src/data/siteConfig.js`. The header, mobile drawer
and footer all read from these arrays, so a single edit updates every location.

---

## Notes on placeholder content

Several sections in the original site were explicitly marked as placeholders
(hiring-partner logos, trainer photos/bios, testimonials, blog article bodies). Those
are preserved as placeholders here too — swap in real data via the corresponding files in
`src/data/` and real images in `public/assets/` when they become available. Contact form
and demo form submissions are simulated client-side (no backend is wired up); connect
them to a real endpoint or form service before going live.
