import { createContext, useCallback, useContext, useMemo, useState } from "react";

const DemoModalContext = createContext({
  isOpen: false,
  courseId: "",
  openDemo: () => {},
  closeDemo: () => {},
});

export function DemoModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [courseId, setCourseId] = useState("");

  const openDemo = useCallback((nextCourseId = "") => {
    setCourseId(nextCourseId || "");
    setIsOpen(true);
  }, []);

  const closeDemo = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, courseId, openDemo, closeDemo }),
    [isOpen, courseId, openDemo, closeDemo],
  );

  return <DemoModalContext.Provider value={value}>{children}</DemoModalContext.Provider>;
}

export function useDemoModal() {
  return useContext(DemoModalContext);
}
