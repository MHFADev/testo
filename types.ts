export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'Language' | 'Framework' | 'Tool' | 'Core';
}

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}