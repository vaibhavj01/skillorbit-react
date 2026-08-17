import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Placements from "./pages/Placements";
import DistanceLearning from "./pages/DistanceLearning";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Inquiry from "./pages/Inquiry";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import CourseRoadmap from "./pages/CourseRoadmap";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug/roadmap" element={<CourseRoadmap />} />
          <Route path="/courses/:slug" element={<CourseDetails />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/distance-learning" element={<DistanceLearning />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/corporate" element={<Inquiry topic="corporate" />} />
          <Route path="/certificates" element={<Inquiry topic="certificates" />} />
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
    </BrowserRouter>
  );
}
