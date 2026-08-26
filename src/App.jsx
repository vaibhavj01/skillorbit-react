import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import PageFallback from "./components/common/PageFallback";

const Home = lazy(() => import("./pages/Home"));
const Courses = lazy(() => import("./pages/Courses"));
const CourseDetails = lazy(() => import("./pages/CourseDetails"));
const Placements = lazy(() => import("./pages/Placements"));
const DistanceLearning = lazy(() => import("./pages/DistanceLearning"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const Inquiry = lazy(() => import("./pages/Inquiry"));
const Corporate = lazy(() => import("./pages/Corporate"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Refund = lazy(() => import("./pages/Refund"));
const CourseRoadmap = lazy(() => import("./pages/CourseRoadmap"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Reviews = lazy(() => import("./pages/Reviews"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug/roadmap" element={<CourseRoadmap />} />
            <Route path="/courses/:slug" element={<CourseDetails />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/distance-learning" element={<DistanceLearning />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/webinar" element={<Inquiry topic="webinar" />} />
            <Route path="/csr" element={<Inquiry topic="csr" />} />
            <Route path="/referral" element={<Inquiry topic="referral" />} />
            <Route path="/feedback" element={<Inquiry topic="feedback" />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
