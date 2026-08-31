import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useAuth } from "./AuthContext";
import {
  getActivity,
  getBookmarks,
  getPrefs,
  getProgress,
  saveActivity,
  saveBookmarks,
  savePrefs,
  saveProgress,
} from "./repository";
import { getRoadmapCatalog } from "../data/catalog";

const ProgressContext = createContext(null);

function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function calcStreak(activity) {
  const days = new Set(
    activity
      .filter((item) => item.type === "complete" || item.type === "start")
      .map((item) => item.at.slice(0, 10))
  );
  if (!days.size) return 0;
  let streak = 0;
  const cursor = new Date();
  for (let i = 0; i < 365; i += 1) {
    const key = todayKey(cursor);
    if (days.has(key)) streak += 1;
    else if (i > 0) break;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export function ProgressProvider({ children }) {
  const { user } = useAuth();
  const [progress, setProgress] = useState({});
  const [bookmarks, setBookmarks] = useState({ roadmaps: [], topics: [], resources: [] });
  const [activity, setActivity] = useState([]);
  const [prefs, setPrefs] = useState({ notifications: { progress: true, weekly: false }, appearance: "emerald" });

  useEffect(() => {
    if (!user) {
      setProgress({});
      setBookmarks({ roadmaps: [], topics: [], resources: [] });
      setActivity([]);
      return;
    }
    setProgress(getProgress(user.id));
    setBookmarks(getBookmarks(user.id));
    setActivity(getActivity(user.id));
    setPrefs(getPrefs(user.id));
  }, [user]);

  const pushActivity = useCallback((userId, entry) => {
    const next = [{ id: crypto.randomUUID(), at: new Date().toISOString(), ...entry }, ...getActivity(userId)];
    saveActivity(userId, next);
    setActivity(next);
  }, []);

  const touchRoadmap = useCallback((roadmapId) => {
    if (!user) return;
    const current = getProgress(user.id);
    const entry = current[roadmapId] || { completedTopics: [], inProgressTopics: [], startedAt: new Date().toISOString() };
    const next = {
      ...current,
      [roadmapId]: { ...entry, lastAccessed: new Date().toISOString() },
    };
    saveProgress(user.id, next);
    setProgress(next);
  }, [user]);

  const startTopic = useCallback((roadmapId, topicId, title) => {
    if (!user) return;
    const current = getProgress(user.id);
    const entry = current[roadmapId] || { completedTopics: [], inProgressTopics: [], startedAt: new Date().toISOString() };
    const inProgress = Array.from(new Set([...(entry.inProgressTopics || []), topicId]));
    const next = {
      ...current,
      [roadmapId]: { ...entry, inProgressTopics: inProgress, lastAccessed: new Date().toISOString() },
    };
    saveProgress(user.id, next);
    setProgress(next);
    pushActivity(user.id, { type: "start", roadmapId, topicId, title });
  }, [pushActivity, user]);

  const completeTopic = useCallback((roadmapId, topicId, title) => {
    if (!user) return;
    const current = getProgress(user.id);
    const entry = current[roadmapId] || { completedTopics: [], inProgressTopics: [], startedAt: new Date().toISOString() };
    const completed = Array.from(new Set([...(entry.completedTopics || []), topicId]));
    const inProgress = (entry.inProgressTopics || []).filter((id) => id !== topicId);
    const next = {
      ...current,
      [roadmapId]: {
        ...entry,
        completedTopics: completed,
        inProgressTopics: inProgress,
        lastAccessed: new Date().toISOString(),
      },
    };
    saveProgress(user.id, next);
    setProgress(next);
    pushActivity(user.id, { type: "complete", roadmapId, topicId, title });
  }, [pushActivity, user]);

  const completeTopics = useCallback((roadmapId, topicIds, title) => {
    if (!user || !topicIds?.length) return;
    const current = getProgress(user.id);
    const entry = current[roadmapId] || { completedTopics: [], inProgressTopics: [], startedAt: new Date().toISOString() };
    const completed = Array.from(new Set([...(entry.completedTopics || []), ...topicIds]));
    const inProgress = (entry.inProgressTopics || []).filter((id) => !topicIds.includes(id));
    const next = {
      ...current,
      [roadmapId]: {
        ...entry,
        completedTopics: completed,
        inProgressTopics: inProgress,
        lastAccessed: new Date().toISOString(),
      },
    };
    saveProgress(user.id, next);
    setProgress(next);
    pushActivity(user.id, { type: "complete", roadmapId, topicId: topicIds[topicIds.length - 1], title });
  }, [pushActivity, user]);

  const uncompleteTopic = useCallback((roadmapId, topicId) => {
    if (!user) return;
    const current = getProgress(user.id);
    const entry = current[roadmapId];
    if (!entry) return;
    const next = {
      ...current,
      [roadmapId]: {
        ...entry,
        completedTopics: (entry.completedTopics || []).filter((id) => id !== topicId),
        lastAccessed: new Date().toISOString(),
      },
    };
    saveProgress(user.id, next);
    setProgress(next);
  }, [user]);

  const toggleRoadmapBookmark = useCallback((roadmapId) => {
    if (!user) return;
    const current = getBookmarks(user.id);
    const exists = current.roadmaps.includes(roadmapId);
    const next = {
      ...current,
      roadmaps: exists ? current.roadmaps.filter((id) => id !== roadmapId) : [...current.roadmaps, roadmapId],
    };
    saveBookmarks(user.id, next);
    setBookmarks(next);
  }, [user]);

  const toggleTopicBookmark = useCallback((roadmapId, topicId, title) => {
    if (!user) return;
    const current = getBookmarks(user.id);
    const exists = current.topics.some((item) => item.topicId === topicId);
    const next = {
      ...current,
      topics: exists
        ? current.topics.filter((item) => item.topicId !== topicId)
        : [...current.topics, { roadmapId, topicId, title }],
    };
    saveBookmarks(user.id, next);
    setBookmarks(next);
  }, [user]);

  const toggleResourceBookmark = useCallback((resource) => {
    if (!user) return;
    const current = getBookmarks(user.id);
    const exists = current.resources.some((item) => item.id === resource.id);
    const next = {
      ...current,
      resources: exists
        ? current.resources.filter((item) => item.id !== resource.id)
        : [...current.resources, resource],
    };
    saveBookmarks(user.id, next);
    setBookmarks(next);
  }, [user]);

  const updatePrefs = useCallback((nextPrefs) => {
    if (!user) return;
    savePrefs(user.id, nextPrefs);
    setPrefs(nextPrefs);
  }, [user]);

  const stats = useMemo(() => {
    const catalog = getRoadmapCatalog();
    const entries = Object.entries(progress);
    let completedTopics = 0;
    let active = 0;
    let completedRoadmaps = 0;
    let totalTracked = 0;
    let totalCompleted = 0;

    entries.forEach(([roadmapId, entry]) => {
      const roadmap = catalog.find((item) => item.id === roadmapId || item.slug === roadmapId);
      const done = entry.completedTopics?.length || 0;
      completedTopics += done;
      if (roadmap) {
        totalTracked += roadmap.topicCount;
        totalCompleted += done;
        if (done > 0 && done < roadmap.topicCount) active += 1;
        if (roadmap.topicCount > 0 && done >= roadmap.topicCount) completedRoadmaps += 1;
      }
    });

    const overall = totalTracked ? Math.round((totalCompleted / totalTracked) * 100) : 0;

    return {
      overall,
      active,
      completedTopics,
      completedRoadmaps,
      started: entries.length,
      streak: calcStreak(activity),
    };
  }, [activity, progress]);

  const value = useMemo(
    () => ({
      progress,
      bookmarks,
      activity,
      prefs,
      stats,
      touchRoadmap,
      startTopic,
      completeTopic,
      completeTopics,
      uncompleteTopic,
      toggleRoadmapBookmark,
      toggleTopicBookmark,
      toggleResourceBookmark,
      updatePrefs,
    }),
    [
      activity,
      bookmarks,
      completeTopic,
      completeTopics,
      prefs,
      progress,
      startTopic,
      stats,
      toggleResourceBookmark,
      toggleRoadmapBookmark,
      toggleTopicBookmark,
      touchRoadmap,
      uncompleteTopic,
      updatePrefs,
    ]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}

export function topicStatus(entry, topicId, index, previousCompleted) {
  const completed = entry?.completedTopics || [];
  const inProgress = entry?.inProgressTopics || [];
  if (completed.includes(topicId)) return "completed";
  if (inProgress.includes(topicId)) return "in-progress";
  if (index > 0 && !previousCompleted) return "locked";
  return "not-started";
}

export function canvasNodeStatus(entry, node, previousCompleted) {
  const completed = entry?.completedTopics || [];
  const inProgress = entry?.inProgressTopics || [];
  const ids = node.topicIds || [];
  if (ids.length && ids.every((id) => completed.includes(id))) return "completed";
  if (ids.some((id) => completed.includes(id) || inProgress.includes(id))) return "in-progress";
  if (!previousCompleted) return "locked";
  return "not-started";
}

export function roadmapPercent(roadmap, entry) {
  if (!roadmap?.topicCount) return 0;
  const done = entry?.completedTopics?.length || 0;
  return Math.round((done / roadmap.topicCount) * 100);
}
