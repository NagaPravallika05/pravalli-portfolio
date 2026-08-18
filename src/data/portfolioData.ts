import { ProfileConfig, Project, SkillItem, WhatIDoCard, LearningMilestone } from '../types/portfolio';

export const initialProfile: ProfileConfig = {
  name: "N Naga Pravallika",
  roleTitle: "Frontend Developer & Web Developer",
  supportingText: "Building clean, responsive and user-focused web experiences with modern React & TypeScript.",
  shortBio: "I am a frontend and web developer dedicated to crafting modern, accessible web applications with clean code, intuitive user interfaces, and smooth user experiences.",
  bio: "I am a frontend and web developer dedicated to crafting modern, accessible web applications with clean code, intuitive user interfaces, and smooth user experiences. I specialize in turning complex requirements into elegant, high-performance interfaces using React 19, TypeScript, and modern CSS architecture.",
  detailedAbout: [
    "I focus on building modern, responsive frontend applications that prioritize user experience, clean architecture, and web accessibility. My goal is to turn visual design concepts into fast, interactive, and reliable web products.",
    "I continuously practice modern web development standards, writing semantic HTML, modular CSS, structured JavaScript, and clean React components. Whether optimizing a mobile layout or integrating dynamic UI components, I strive for precision and simplicity.",
    "Driven by curiosity and a commitment to continuous growth, I actively work on hands-on projects, study design systems, and expand my technical skillset to stay current with industry practices."
  ],
  email: "nagapravallika05@gmail.com",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com",
  location: "Open to Remote & On-Site Roles",
  availableForWork: true,
};

export const skillsData: SkillItem[] = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    description: "Component architecture, Custom Hooks, State Synchronization, React 19 patterns & DOM reconciliation",
    badge: "Framework",
    level: "Advanced",
    iconKey: "react",
    color: "#61DAFB",
    keyTopics: ["Custom Hooks", "State & Props", "Virtual DOM", "Component Lifecycle", "Context API", "Performance Memoization"],
    codeSample: {
      filename: "useCounter.tsx",
      language: "typescript",
      code: `import { useState, useCallback } from 'react';

export function useInteractiveCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const reset = useCallback(() => setCount(0), []);

  return { count, increment, reset, isPositive: count > 0 };
}`,
      outputExplanation: "Clean custom hook encapsulating reusable state logic with memoized handler callbacks."
    },
    relatedProjectIds: ["project-1", "project-2", "project-4"]
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description: "Modern ECMAScript (ES6+), Asynchronous Promises/Async-Await, DOM APIs, Closures & Event Loop",
    badge: "Logic",
    level: "Advanced",
    iconKey: "javascript",
    color: "#F7DF1E",
    keyTopics: ["ES6+ Syntax", "Async / Await", "Fetch API", "Event Delegation", "Array Methods", "Closures & Scope"],
    codeSample: {
      filename: "dataFilter.js",
      language: "javascript",
      code: `// Async data query with robust filtering
async function fetchActiveUsers(endpoint, minScore = 80) {
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error('Network error');
  const data = await res.json();
  
  return data
    .filter(user => user.isActive && user.score >= minScore)
    .sort((a, b) => b.score - a.score);
}`,
      outputExplanation: "Modern asynchronous data pipeline utilizing clean array transformations and error handling."
    },
    relatedProjectIds: ["project-1", "project-2", "project-3", "project-4"]
  },
  {
    name: "HTML",
    category: "Frontend",
    description: "Semantic HTML5 markup, ARIA Accessibility standards, SEO structure & micro-formatting",
    badge: "Core",
    level: "Advanced",
    iconKey: "html",
    color: "#E34F26",
    keyTopics: ["Semantic Elements", "ARIA Landmarks", "WCAG 2.1 AA", "SEO Metadata", "Form Validation", "Audio/Video APIs"],
    codeSample: {
      filename: "accessible-nav.html",
      language: "html",
      code: `<header role="banner" class="app-header">
  <nav aria-label="Main Navigation">
    <ul class="nav-list">
      <li><a href="#projects" class="nav-item">Projects</a></li>
      <li><a href="#skills" class="nav-item">Skills</a></li>
      <li><a href="#contact" class="btn-cta">Contact</a></li>
    </ul>
  </nav>
</header>`,
      outputExplanation: "Semantic structural hierarchy compliant with screen readers and modern accessibility guidelines."
    },
    relatedProjectIds: ["project-1", "project-2", "project-3", "project-4"]
  },
  {
    name: "CSS",
    category: "Frontend",
    description: "Flexbox, CSS Grid, Custom Properties (Variables), Responsive Media Queries & Keyframe Animations",
    badge: "Styling",
    level: "Advanced",
    iconKey: "css",
    color: "#1572B6",
    keyTopics: ["CSS Grid & Flexbox", "Tailwind CSS", "CSS Variables", "Transitions & Keyframes", "Responsive Breakpoints", "Modern Layouts"],
    codeSample: {
      filename: "grid-layout.css",
      language: "css",
      code: `.bento-matrix {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.glass-card {
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}`,
      outputExplanation: "Responsive fluid grid architecture with glassmorphic depth styling and smooth cubic bezier transitions."
    },
    relatedProjectIds: ["project-1", "project-2", "project-3", "project-4"]
  },
  // Programming
  {
    name: "Python",
    category: "Programming",
    description: "Algorithm development, data parsing, automation scripting, REST APIs & computational problem-solving",
    badge: "Language",
    level: "Proficient",
    iconKey: "python",
    color: "#3776AB",
    keyTopics: ["Data Structures", "Algorithms", "Automation Scripts", "File I/O & JSON", "REST API Consumption", "Object-Oriented Design"],
    codeSample: {
      filename: "automation.py",
      language: "python",
      code: `import json

def analyze_tech_stack(portfolio_data: dict) -> dict:
    """Analyze and group tech competencies by proficiency"""
    summary = {}
    for skill in portfolio_data.get("skills", []):
        category = skill.get("category", "General")
        summary.setdefault(category, []).append(skill["name"])
    return {
        "status": "success",
        "total_skills": sum(len(v) for v in summary.values()),
        "categories": summary
    }`,
      outputExplanation: "Clean Pythonic dictionary comprehension and data categorization utility."
    },
    relatedProjectIds: ["project-2"]
  },
  // Tools
  {
    name: "Git",
    category: "Tools",
    description: "Distributed version control, atomic commits, branch rebasing, merge conflict resolution & history audit",
    badge: "VCS",
    level: "Proficient",
    iconKey: "git",
    color: "#F05032",
    keyTopics: ["Branching & Merging", "Interactive Rebase", "Commit Hygiene", "Merge Conflict Resolution", "Git Hooks", "Stashing"],
    codeSample: {
      filename: "workflow.sh",
      language: "bash",
      code: `# Standard feature branch workflow
git checkout -b feature/pro-skills-matrix
git add src/components/Skills.tsx src/types/portfolio.ts
git commit -m "feat: add interactive pro skill inspector & code sandbox"
git push origin feature/pro-skills-matrix`,
      outputExplanation: "Structured semantic commit convention and modern feature branch isolation."
    },
    relatedProjectIds: ["project-1", "project-2", "project-3", "project-4"]
  },
  {
    name: "GitHub",
    category: "Tools",
    description: "Pull request reviews, GitHub Actions CI/CD workflows, issue tracking, project boards & GitHub Pages",
    badge: "Platform",
    level: "Proficient",
    iconKey: "github",
    color: "#181717",
    keyTopics: ["Pull Requests", "Code Reviews", "GitHub Actions CI", "Repository Management", "Issue Tracking", "GitHub Pages"],
    codeSample: {
      filename: "deploy.yml",
      language: "yaml",
      code: `name: Deploy Portfolio
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci && npm run build`,
      outputExplanation: "Automated GitHub Actions CI/CD pipeline ensuring clean build checks on push."
    },
    relatedProjectIds: ["project-1", "project-2", "project-3", "project-4"]
  },
  {
    name: "VS Code",
    category: "Tools",
    description: "Configured developer environment with TypeScript integration, ESLint, Prettier, debugger & shortcuts",
    badge: "Editor",
    level: "Core Tool",
    iconKey: "vscode",
    color: "#007ACC",
    keyTopics: ["Debugging & Breakpoints", "ESLint / Prettier", "Tailwind IntelliSense", "Snippets & Keybindings", "Workspace Settings", "GitLens"],
    codeSample: {
      filename: "settings.json",
      language: "json",
      code: `{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "typescript.updateImportsOnFileMove.enabled": "always"
}`,
      outputExplanation: "Strict formatting and automated code quality linting configuration."
    },
    relatedProjectIds: ["project-1", "project-2", "project-3", "project-4"]
  },
  {
    name: "Figma",
    category: "Design",
    description: "Design-to-code translation, auto-layout inspection, color token extraction & responsive design specs",
    badge: "Design",
    level: "Proficient",
    iconKey: "figma",
    color: "#F24E1E",
    keyTopics: ["Design-to-Code", "Auto Layout", "Design Tokens", "Typography Hierarchy", "Component Variants", "Asset Exporting"],
    codeSample: {
      filename: "design-tokens.ts",
      language: "typescript",
      code: `export const figmaTokens = {
  colors: {
    primary: '#2563EB',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    textPrimary: '#111111',
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
} as const;`,
      outputExplanation: "Direct mathematical translation of Figma spacing, color tokens, and radii into clean TypeScript constants."
    },
    relatedProjectIds: ["project-1", "project-2", "project-3"]
  }
];

export const whatIDoCards: WhatIDoCard[] = [
  {
    id: "frontend-dev",
    title: "Frontend Development",
    description: "Building responsive, interactive and user-friendly interfaces.",
    iconName: "Layout",
    deliverables: [
      "Modern React component architecture",
      "Interactive state management & data flow",
      "Smooth micro-interactions and transitions",
      "Cross-browser cross-device compatibility"
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Creating modern websites that work smoothly across devices.",
    iconName: "Globe",
    deliverables: [
      "Mobile-first responsive web design",
      "Fast page load performance & optimization",
      "Semantic HTML5 & clean CSS structure",
      "Modern tooling and build automation"
    ]
  },
  {
    id: "ui-impl",
    title: "UI Implementation",
    description: "Turning design concepts and ideas into functional web experiences.",
    iconName: "Layers",
    deliverables: [
      "Pixel-accurate Figma-to-code translation",
      "Design systems & reusable UI primitives",
      "Accessible contrast and keyboard navigation",
      "Intuitive navigation patterns & typography hierarchy"
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "Modern E-Commerce Storefront",
    description: "A fast, fully responsive e-commerce web application with product catalog filtering, interactive cart management, and seamless checkout flow.",
    tags: ["React", "JavaScript", "CSS", "HTML"],
    category: "Web Apps",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    previewType: "ecommerce",
    highlights: [
      "Dynamic category filtering & instant search",
      "Persistent shopping cart state management",
      "Responsive checkout validation & review modal",
      "Mobile-first responsive navigation"
    ],
    date: "Recent Project"
  },
  {
    id: "project-2",
    title: "Task & Productivity Dashboard",
    description: "A clean, minimalist productivity web application featuring Kanban board organization, task filtering, priority tags, and deadline tracking.",
    tags: ["React", "JavaScript", "CSS"],
    category: "Frontend",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    previewType: "dashboard",
    highlights: [
      "Drag-and-drop or click-to-move task cards",
      "Custom status columns & priority categorization",
      "Local storage data persistence",
      "Keyboard shortcut accessible modal"
    ],
    date: "Featured Project"
  },
  {
    id: "project-3",
    title: "UI Component System & Design Guide",
    description: "A comprehensive library of reusable, accessible UI components built from scratch with consistent spacing tokens, color palettes, and interactive states.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "UI Systems",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    previewType: "component",
    highlights: [
      "Accessible modal, dropdown, and tab primitives",
      "Custom color token system & theme variables",
      "Interactive component playground and state inspector",
      "Strict WCAG 2.1 AA color contrast compliance"
    ],
    date: "Design System"
  },
  {
    id: "project-4",
    title: "Interactive Weather & City Guide",
    description: "A sleek weather forecast application integrating live climate metrics, 5-day forecasts, search history, and adaptive weather visualizations.",
    tags: ["JavaScript", "HTML", "CSS", "React"],
    category: "Web Apps",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: false,
    previewType: "landing",
    highlights: [
      "Real-time weather data fetching & error handling",
      "Interactive 5-day forecast cards",
      "Recent search history quick switch",
      "Smooth animated weather condition icons"
    ],
    date: "Web Application"
  }
];

export const learningJourneyData: LearningMilestone[] = [
  {
    id: "milestone-1",
    period: "Foundation Phase",
    title: "Web Standards & Core Foundations",
    description: "Mastered semantic HTML5 markup, modern CSS3 layout engines (Flexbox, CSS Grid), responsive design principles, and core JavaScript fundamentals (DOM, events, ES6+).",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Git"],
    status: "completed"
  },
  {
    id: "milestone-2",
    period: "Component Architecture",
    title: "Modern Frontend Development with React",
    description: "Built scalable single-page applications using React, mastering component lifecycles, custom hooks, state synchronization, and modular styling patterns.",
    technologies: ["React", "State Management", "Component Patterns", "Tailwind CSS"],
    status: "completed"
  },
  {
    id: "milestone-3",
    period: "Current Focus",
    title: "Web Performance, Accessibility & Design Systems",
    description: "Deepening expertise in web accessibility (WCAG AA), Core Web Vitals optimization, TypeScript integration, and building cohesive design system primitives.",
    technologies: ["TypeScript", "Web Accessibility (a11y)", "Performance Optimization", "Figma Design Translation"],
    status: "in-progress"
  },
  {
    id: "milestone-4",
    period: "Upcoming Roadmap",
    title: "Full-Stack Web Architecture & Server-Side Rendering",
    description: "Expanding knowledge into Next.js, server-rendered components, API routes, and full-stack web integration with automated testing workflows.",
    technologies: ["Next.js", "Full-Stack APIs", "Testing (Jest / Vitest)", "CI/CD"],
    status: "upcoming"
  }
];

export const whatIDoServices: WhatIDoCard[] = [
  {
    title: "Responsive Web Engineering",
    description: "Designing and building resilient, mobile-first responsive web applications with semantic HTML5, modern CSS3 Flexbox & Grid, and cross-browser precision.",
    icon: "Layout",
    points: [
      "Fluid breakpoints & dynamic responsive containers",
      "Strict semantic HTML5 landmark architecture",
      "Accessible color contrast & keyboard navigation",
      "Cross-browser testing (Chrome, Safari, Firefox)"
    ]
  },
  {
    title: "React Component Systems",
    description: "Architecting modular, highly reusable component hierarchies with custom React hooks, predictable state synchronization, and TypeScript type safety.",
    icon: "Code",
    points: [
      "Custom React 19 hooks & atomic state patterns",
      "TypeScript interfaces & compile-time safety",
      "High-performance virtual DOM reconciliation",
      "Seamless API integration & async error handling"
    ]
  },
  {
    title: "Interactive UI & 3D Web Motion",
    description: "Crafting captivating user experiences with 3D card tilt physics, 60fps GPU-accelerated motion, frosted glassmorphism, and micro-interactions.",
    icon: "Smartphone",
    points: [
      "3D perspective transforms & particle mesh canvases",
      "Tailwind CSS design token architectures",
      "Smooth layout transitions & micro-feedback",
      "Zero cumulative layout shifts (CLS)"
    ]
  }
];
