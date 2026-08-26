import { lazy, Suspense } from "react";

const GetMeJobLead = lazy(() => import("../layout/GetMeJobLead"));

export default function LazyGetMeJobLead() {
  return (
    <Suspense fallback={null}>
      <GetMeJobLead />
    </Suspense>
  );
}
