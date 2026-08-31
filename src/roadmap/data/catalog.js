import { CATEGORIES, courses } from "../../data/courses";
import { getCourseRoadmap } from "../../data/roadmaps";

function flattenTopics(slug, stages, course) {
  const topics = [];
  (stages || []).forEach((stage, stageIndex) => {
    (stage.nodes || []).forEach((node, nodeIndex) => {
      (node.topics || []).forEach((title, topicIndex) => {
        const prev = topics[topics.length - 1];
        topics.push({
          id: `${slug}-s${stageIndex}-n${nodeIndex}-t${topicIndex}`,
          title,
          description: `${title} sits in ${node.title} during the ${stage.title} stage of ${course.name}.`,
          whatYouLearn: [`Understand ${title}`, `Apply ${title} in a SkillOrbit-style project task`],
          stage: stage.title,
          node: node.title,
          difficulty: course.level || "Intermediate",
          estimatedTime: "2–4 hrs",
          prerequisites: prev ? [prev.title] : [],
          resources: [
            { id: `${slug}-${title}-course`, title: `${course.name} classroom path`, href: `/courses/${course.slug}`, type: "course" },
            { id: `${slug}-${title}-practice`, title: `Practice: ${title}`, href: `/courses/${course.slug}`, type: "practice" },
          ],
        });
      });
    });
  });
  return topics;
}

function stagesFromCurriculum(course) {
  const items = course.curriculum || [];
  if (!items.length) {
    return [
      {
        title: "Core path",
        subtitle: "Start here",
        nodes: [{ title: course.name, topics: [course.name] }],
      },
    ];
  }
  return items.map((title, index) => ({
    title,
    subtitle: `Module ${index + 1}`,
    nodes: [{ title, topics: [title] }],
  }));
}

function buildCanvasNodes(slug, stages, course, topics) {
  const nodes = [];
  (stages || []).forEach((stage, stageIndex) => {
    (stage.nodes || []).forEach((node, nodeIndex) => {
      const topicIds = (node.topics || []).map((_, topicIndex) => `${slug}-s${stageIndex}-n${nodeIndex}-t${topicIndex}`);
      const prev = nodes[nodes.length - 1];
      nodes.push({
        id: `${slug}-s${stageIndex}-n${nodeIndex}`,
        title: node.title,
        stage: stage.title,
        description: `${node.title} is a checkpoint in the ${stage.title} stage of ${course.name}.`,
        whatYouLearn: node.topics || [],
        difficulty: course.level || "Intermediate",
        estimatedTime: `${Math.max(2, topicIds.length)}–${Math.max(4, topicIds.length * 2)} hrs`,
        prerequisites: prev ? [prev.title] : [],
        topicIds,
        resources: topics.find((topic) => topicIds.includes(topic.id))?.resources || [],
      });
    });
  });
  return nodes;
}

function compactSlug(slug) {
  return String(slug || "")
    .trim()
    .toLowerCase()
    .replace(/full-stack/g, "fullstack");
}

export const ROADMAP_CATEGORIES = CATEGORIES.filter((item) => item.id !== "all");

export function getRoadmapCatalog() {
  return courses.map((course, index) => {
    const existing = getCourseRoadmap(course.slug) || getCourseRoadmap(course.id);
    const stages = existing?.stages || stagesFromCurriculum(course);
    const topics = flattenTopics(course.slug, stages, course);
    return {
      id: course.id,
      slug: course.slug,
      title: course.name,
      description: course.description || existing?.intro || `A SkillOrbit learning path for ${course.name}.`,
      intro: existing?.intro || course.description,
      outcome: existing?.outcome || course.careerPath || "Job-ready skill path",
      category: course.category,
      difficulty: course.level || "Intermediate",
      estimatedDuration: course.duration || "Self-paced",
      topicCount: topics.length,
      topics,
      stages,
      canvasNodes: buildCanvasNodes(course.slug, stages, course, topics),
      createdRank: index,
      popularRank: (course.rating || 4.5) * 10 + topics.length,
      resources: (course.technologies || []).slice(0, 6).map((tech) => ({
        id: `${course.slug}-${tech}`,
        title: tech,
        href: `/courses/${course.slug}`,
        type: "technology",
      })),
    };
  });
}

export function getRoadmapBySlug(slug) {
  const catalog = getRoadmapCatalog();
  const direct = catalog.find((item) => item.slug === slug || item.id === slug);
  if (direct) return direct;
  const compact = compactSlug(slug);
  return catalog.find((item) => compactSlug(item.slug) === compact || compactSlug(item.id) === compact) || null;
}

export function searchRoadmaps(query, list = getRoadmapCatalog()) {
  const q = query.trim().toLowerCase();
  if (!q) return list;
  return list.filter((item) => {
    const hay = `${item.title} ${item.description} ${item.category} ${item.topics.map((t) => t.title).join(" ")}`.toLowerCase();
    return hay.includes(q);
  });
}
