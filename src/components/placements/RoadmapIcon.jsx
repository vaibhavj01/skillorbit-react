import {
  BadgePercent,
  BookOpen,
  Briefcase,
  Building2,
  Code2,
  Mic2,
  MonitorSmartphone,
  PlayCircle,
  Rocket,
  Share2,
  Target,
  Terminal,
  UserRound,
  Users,
  Video,
} from "lucide-react";

const ICONS = {
  target: Target,
  code: Code2,
  terminal: Terminal,
  user: UserRound,
  mic: Mic2,
  building: Building2,
  rocket: Rocket,
  book: BookOpen,
  play: PlayCircle,
  users: Users,
  monitor: MonitorSmartphone,
  network: Share2,
  video: Video,
  badge: BadgePercent,
  briefcase: Briefcase,
};

export default function RoadmapIcon({ name, size = 20, className = "" }) {
  const Icon = ICONS[name] || Target;
  return <Icon size={size} className={className} strokeWidth={2.1} />;
}
