import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, ready } = useAuth();
  const location = useLocation();

  if (!ready) {
    return <div className="so-roadmap min-h-svh bg-[#021A12]" aria-hidden="true" />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/roadmap/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}
