import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Award,
  Zap,
  Globe2,
  Boxes
} from 'lucide-react';
import { ProfileConfig } from '../types/portfolio';

interface AboutProps {
  profile: ProfileConfig;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const highlights = [
    {
      title: 'Modern Component Architecture',
      description: 'Building declarative, reusable React 19 UI components with clean separation of concerns and TypeScript type safety.',
      icon: Code2,
      accent: 'from-cyan-500/20 to-blue-500/10',
      border: 'border-cyan-500/30',
      iconColor: 'text-cyan-400',
    },
    {
      title: 'Responsive & Accessible (a11y)',
      description: 'Precision mobile-first layouts with rigorous WCAG AA compliance, semantic HTML5 landmarks, and fluid responsive grids.',
      icon: Layers,
      accent: 'from-indigo-500/20 to-purple-500/10',
      border: 'border-indigo-500/30',
      iconColor: 'text-indigo-400',
    },
    {
      title: 'Performance & Web Standards',
      description: 'Zero layout shifts, optimized asset delivery, modern ES6+ paradigms, and smooth 60fps GPU-accelerated motion.',
      icon: Zap,
      accent: 'from-emerald-500/20 to-teal-500/10',
      border: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#090D16] border-y border-white/10 relative overflow-hidden">
      {/* 3D background glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-black text-cyan-400 tracking-wider uppercase font-mono mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Profile &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            About {profile.name}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            A developer dedicated to the craft of the frontend: combining design sensibilities with robust client architecture.
          </p>
        </div>

        {/* 2-Column Story & Direct Competency Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Core Narrative Card (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl backdrop-blur-xl relative">
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Frontend Engineering Philosophy</span>
              </h3>
              
              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>{profile.bio}</p>
                <p>
                  My development approach centers on <strong>clarity over complexity</strong>, write once, maintain forever modularity, and strict adherence to modern web standards. Whether crafting animated interactive dashboards or high-converting responsive interfaces, I focus on delivering seamless end-user experiences.
                </p>
              </div>

              {/* Quick Info Matrix */}
              <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-white/10">
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">Specialization</div>
                  <div className="text-xs font-bold text-cyan-300 mt-0.5">Frontend &amp; Web UI</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">Primary Tooling</div>
                  <div className="text-xs font-bold text-emerald-300 mt-0.5">React 19, TypeScript, CSS3</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">Location</div>
                  <div className="text-xs font-bold text-slate-200 mt-0.5">{profile.location}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">Availability</div>
                  <div className="text-xs font-bold text-cyan-400 mt-0.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Open to Roles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Engineering Principles (Span 6) */}
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
                  whileHover={{ scale: 1.02, x: 6 }}
                  className={`bg-slate-900/80 hover:bg-slate-800/90 rounded-2xl p-5 sm:p-6 border ${item.border} backdrop-blur-xl shadow-xl shadow-black/40 transition-all cursor-default group`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.accent} border border-white/10 ${item.iconColor} shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
