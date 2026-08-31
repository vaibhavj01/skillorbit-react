import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function GuestOnly({ children }) {
  const { isAuthenticated, ready } = useAuth();
  if (!ready) return <div className="so-roadmap min-h-svh bg-[#021A12]" aria-hidden="true" />;
  if (isAuthenticated) return <Navigate to="/roadmap/dashboard" replace />;
  return children;
}
