import { createContext, useCallback, useContext, useMemo, useState } from "react";

const DemoModalContext = createContext({
  isOpen: false,
  courseId: "",
  campaign: "",
  openDemo: () => {},
  closeDemo: () => {},
});

export function DemoModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [courseId, setCourseId] = useState("");
  const [campaign, setCampaign] = useState("");

  const openDemo = useCallback((nextCourseId = "", options = {}) => {
    setCourseId(nextCourseId || "");
    setCampaign(options?.campaign || "");
    setIsOpen(true);
  }, []);

  const closeDemo = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, courseId, campaign, openDemo, closeDemo }),
    [isOpen, courseId, campaign, openDemo, closeDemo],
  );

  return <DemoModalContext.Provider value={value}>{children}</DemoModalContext.Provider>;
}

export function useDemoModal() {
  return useContext(DemoModalContext);
}
