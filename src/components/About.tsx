import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Terminal, 
  Sparkles, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Layout,
  CheckCircle2
} from 'lucide-react';
import { ProfileConfig } from '../types/portfolio';

interface AboutProps {
  profile: ProfileConfig;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const highlights = [
    {
      title: 'Modern Component Architecture',
      description: 'Building declarative, reusable UI components with clean separation of concerns, custom React hooks, and TypeScript type safety.',
      icon: Code2,
      accent: 'from-cyan-500/20 to-blue-500/10',
      border: 'hover:border-cyan-500/40',
      iconColor: 'text-cyan-400',
    },
    {
      title: 'Responsive & Accessible (a11y)',
      description: 'Mobile-first fluid layouts with strict WCAG 2.1 AA contrast compliance, semantic HTML5 landmark tags, and screen reader ergonomics.',
      icon: Layers,
      accent: 'from-violet-500/20 to-indigo-500/10',
      border: 'hover:border-violet-500/40',
      iconColor: 'text-violet-400',
    },
    {
      title: 'High Performance & Fluid Motion',
      description: 'Optimized rendering, zero cumulative layout shifts (CLS), GPU-accelerated micro-interactions, and 60fps animations.',
      icon: Zap,
      accent: 'from-emerald-500/20 to-teal-500/10',
      border: 'hover:border-emerald-500/40',
      iconColor: 'text-emerald-400',
    },
  ];

  const stats = [
    { label: 'Primary Specialization', value: 'Frontend & Web' },
    { label: 'Core Framework', value: 'React 19 & TypeScript' },
    { label: 'Design Precision', value: 'Pixel-Accurate UI' },
    { label: 'Architecture', value: 'Semantic & Accessible' },
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Tag */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md mb-4 shadow-lg shadow-cyan-500/10">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>ABOUT ME</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight leading-tight">
          Turning ideas into{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            tactile digital reality.
          </span>
        </h2>
        <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
          {profile.shortBio || profile.supportingText}
        </p>
      </div>

      {/* 2-Column Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Core Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 p-7 sm:p-9 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl relative flex flex-col justify-between"
        >
          {/* Subtle top edge illumination */}
          <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <h3 className="text-xl font-heading font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Engineering Focus &amp; Craft</span>
            </h3>
            
            <p>
              {profile.bio}
            </p>
            <p className="text-slate-400">
              I believe great frontend engineering lives at the intersection of aesthetic restraint and rigorous software architecture. Every layout, interaction, and transition should serve a clear functional purpose while feeling natural and responsive to user input.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="p-3.5 rounded-2xl bg-slate-950/70 border border-white/5">
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
                <div className="text-xs font-bold text-cyan-300 mt-1">{stat.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: 3 Pillars Cards */}
        <div className="lg:col-span-6 space-y-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 ${item.border} transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.accent} border border-white/10 ${item.iconColor} shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 font-heading">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
