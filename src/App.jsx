import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import PageFallback from "./components/common/PageFallback";
import ProtectedRoute from "./roadmap/auth/ProtectedRoute";
import GuestOnly from "./roadmap/auth/GuestOnly";

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

const RoadmapRoot = lazy(() => import("./roadmap/RoadmapRoot"));
const RoadmapExplore = lazy(() => import("./roadmap/pages/Explore"));
const RoadmapLogin = lazy(() => import("./roadmap/pages/Login"));
const RoadmapRegister = lazy(() => import("./roadmap/pages/Register"));
const RoadmapForgot = lazy(() => import("./roadmap/pages/ForgotPassword"));
const RoadmapDashboard = lazy(() => import("./roadmap/pages/Dashboard"));
const RoadmapProgress = lazy(() => import("./roadmap/pages/Progress"));
const RoadmapBookmarks = lazy(() => import("./roadmap/pages/Bookmarks"));
const RoadmapResources = lazy(() => import("./roadmap/pages/Resources"));
const RoadmapProfile = lazy(() => import("./roadmap/pages/Profile"));
const RoadmapSettings = lazy(() => import("./roadmap/pages/Settings"));
const RoadmapView = lazy(() => import("./roadmap/pages/RoadmapView"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/roadmap" element={<RoadmapRoot />}>
            <Route index element={<RoadmapExplore />} />
            <Route path="login" element={<GuestOnly><RoadmapLogin /></GuestOnly>} />
            <Route path="register" element={<GuestOnly><RoadmapRegister /></GuestOnly>} />
            <Route path="forgot-password" element={<GuestOnly><RoadmapForgot /></GuestOnly>} />
            <Route path="dashboard" element={<ProtectedRoute><RoadmapDashboard /></ProtectedRoute>} />
            <Route path="progress" element={<ProtectedRoute><RoadmapProgress /></ProtectedRoute>} />
            <Route path="bookmarks" element={<ProtectedRoute><RoadmapBookmarks /></ProtectedRoute>} />
            <Route path="resources" element={<ProtectedRoute><RoadmapResources /></ProtectedRoute>} />
            <Route path="profile" element={<ProtectedRoute><RoadmapProfile /></ProtectedRoute>} />
            <Route path="settings" element={<ProtectedRoute><RoadmapSettings /></ProtectedRoute>} />
            <Route path=":slug" element={<ProtectedRoute><RoadmapView /></ProtectedRoute>} />
          </Route>
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
