import { AuthProvider } from "./auth/AuthContext";
import { ProgressProvider } from "./auth/ProgressContext";
import RoadmapLayout from "./layouts/RoadmapLayout";

export default function RoadmapRoot() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <RoadmapLayout />
      </ProgressProvider>
    </AuthProvider>
  );
}
