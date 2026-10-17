import React from 'react';
import {
  UserCheck,
  Briefcase,
  Coffee,
  Database,
  Globe,
  Leaf,
  Server,
  Atom,
  FileType,
  Code,
  GitBranch,
  TestTube,
  Network,
  Users,
  Monitor,
  BookOpen,
} from 'lucide-react';

interface TopicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function TopicIcon({ name, className = 'w-5 h-5', size }: TopicIconProps) {
  const iconMap: Record<string, React.ElementType> = {
    UserCheck,
    Briefcase,
    Coffee,
    Database,
    Globe,
    Leaf,
    Server,
    Atom,
    FileType,
    Code,
    GitBranch,
    TestTube,
    Network,
    Users,
    Monitor,
  };

  const IconComponent = iconMap[name] || BookOpen;
  return <IconComponent className={className} size={size} />;
}
