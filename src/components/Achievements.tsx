import React from 'react';
import { motion } from 'motion/react';
import { Award, Trophy, Star, CheckCircle2, ShieldCheck, Zap, Sparkles, ExternalLink } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  category: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  icon: 'award' | 'trophy' | 'star' | 'shield';
}

const achievementsData: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Frontend & React Engineering Excellence',
    category: 'Engineering Milestone',
    issuer: 'Technical Specialization',
    date: '2024 - Present',
    description: 'Engineered modular, high-performance web applications using React 19, TypeScript, and modern component systems with 100% responsive test passes.',
    skills: ['React 19', 'TypeScript', 'Component Architecture', 'Tailwind CSS'],
    icon: 'trophy',
  },
  {
    id: 'ach-2',
    title: 'Modern Web Accessibility & SEO Standards',
    category: 'Certification & Audit',
    issuer: 'Web Standards Compliance',
    date: 'Certified',
    description: 'Adherence to WCAG 2.1 AA accessibility guidelines, semantic markup hierarchies, ARIA roles, and Lighthouse 95+ Core Web Vitals optimization.',
    skills: ['WCAG AA', 'Semantic HTML5', 'Performance Optimization', 'SEO Architecture'],
    icon: 'shield',
  },
  {
    id: 'ach-3',
    title: 'Interactive UI & 3D Web Motion Design',
    category: 'Creative Technology',
    issuer: 'Design-to-Code Mastery',
    date: 'Specialization',
    description: 'Crafted smooth 60fps micro-interactions, responsive 3D WebGL interfaces, custom cursor feedback loops, and intuitive tactile interactions.',
    skills: ['Three.js', 'Framer Motion', 'Micro-Interactions', 'Figma Translation'],
    icon: 'star',
  },
  {
    id: 'ach-4',
    title: 'Algorithmic Problem Solving & Python Scripting',
    category: 'Programming & Logic',
    issuer: 'Core Foundations',
    date: 'Proficiency',
    description: 'Strong foundation in computational logic, clean data structures, asynchronous event loops, and structured backend automation scripts.',
    skills: ['Python', 'Data Structures', 'Async APIs', 'ES6+ Logic'],
    icon: 'award',
  }
];

export const Achievements: React.FC = () => {
  const getIcon = (type: Achievement['icon']) => {
    switch (type) {
      case 'trophy': return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'shield': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'star': return <Star className="w-5 h-5 text-cyan-400" />;
      default: return <Award className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="achievements" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-violet-500/30 text-xs font-mono font-bold text-violet-300 backdrop-blur-md mb-4 shadow-lg shadow-violet-500/10">
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span>RECOGNITION &amp; CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Achievements &amp;{' '}
          <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
            Milestones
          </span>
        </h2>
        <p className="mt-4 text-slate-400 text-base max-w-xl mx-auto">
          Verified milestones, technical certifications, and core frontend standards achieved through continuous hands-on engineering.
        </p>
      </div>

      {/* Grid of Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievementsData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative p-7 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-violet-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10 flex flex-col justify-between"
          >
            {/* Ambient inner card glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl pointer-events-none group-hover:bg-violet-600/20 transition-all" />

            <div>
              {/* Card Top Row */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-white/10 shadow-md group-hover:scale-105 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <div className="flex flex-col items-end text-right">
                  <span className="text-[11px] font-mono text-cyan-400 font-bold bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                    {item.issuer}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 mt-1">{item.date}</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                {item.description}
              </p>
            </div>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800/60 text-slate-300 border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
