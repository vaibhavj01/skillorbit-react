import { lazy, Suspense, useEffect, useState } from "react";
import { useDemoModal } from "../../context/DemoModalContext";

const DemoModal = lazy(() => import("./DemoModal"));

export default function LazyDemoModal() {
  const { isOpen } = useDemoModal();
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (isOpen) setShouldLoad(true);
  }, [isOpen]);

  if (!shouldLoad) return null;

  return (
    <Suspense fallback={null}>
      <DemoModal />
    </Suspense>
  );
}
