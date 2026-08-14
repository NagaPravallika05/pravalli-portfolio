export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
  category: string;
  previewType?: 'dashboard' | 'ecommerce' | 'component' | 'landing';
  highlights?: string[];
  date?: string;
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Programming' | 'Tools';
  description?: string;
  badge?: string;
  level?: 'Expert' | 'Advanced' | 'Proficient' | 'Core Tool';
  iconKey?: 'html' | 'css' | 'javascript' | 'react' | 'python' | 'git' | 'github' | 'vscode' | 'figma';
  keyTopics?: string[];
  codeSample?: {
    filename: string;
    language: string;
    code: string;
    outputExplanation?: string;
  };
  color?: string;
  relatedProjectIds?: string[];
}

export interface WhatIDoCard {
  id?: string;
  title: string;
  description: string;
  icon?: string;
  iconName?: string;
  points?: string[];
  deliverables?: string[];
}

export interface LearningMilestone {
  id: string;
  period: string;
  title: string;
  description: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface ProfileConfig {
  name: string;
  roleTitle: string;
  supportingText: string;
  shortBio: string;
  bio?: string;
  detailedAbout: string[];
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  location: string;
  availableForWork: boolean;
}
