import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  Mail, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { ProfileConfig } from '../types/portfolio';
import { TechIcon } from './TechIcons';

interface HeroProps {
  profile: ProfileConfig;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const directSkills = [
    { name: 'React 19', icon: 'react', level: 'Hooks & DOM' },
    { name: 'TypeScript', icon: 'javascript', level: 'Types & Logic' },
    { name: 'JavaScript', icon: 'javascript', level: 'ES6+ Async' },
    { name: 'HTML5', icon: 'html', level: 'Semantic / a11y' },
    { name: 'CSS3', icon: 'css', level: 'Tailwind & 3D' },
    { name: 'Python', icon: 'python', level: 'Data & Scripting' },
    { name: 'Git', icon: 'git', level: 'Workflows' },
    { name: 'VS Code', icon: 'vscode', level: 'Dev Environment' },
    { name: 'Figma', icon: 'figma', level: 'Design-to-Code' },
  ];

  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement, opts: { offset: number }) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(el, { offset: -70 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography, Status, Description & Actions */}
          <div className="lg:col-span-8 flex flex-col items-start text-left space-y-7">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-semibold text-cyan-300 backdrop-blur-xl shadow-lg shadow-cyan-500/10 select-none"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="font-mono tracking-wide">{profile.location}</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-medium">Available for Opportunities</span>
            </motion.div>

            {/* Main Hero Typography */}
            <div className="space-y-4 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base font-bold uppercase tracking-widest text-cyan-400 font-mono flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Hi, I&apos;m {profile.name}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black text-white tracking-tight leading-[1.06]"
              >
                Frontend Developer <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                  &amp; Web Engineer.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl"
              >
                I build modern, interactive and user-focused digital experiences with clean component architectures, responsive layouts, and modern web standards.
              </motion.p>
            </div>

            {/* Direct Skills Floating Capsule Dock */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-1 w-full max-w-2xl"
            >
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Core Stack &amp; Tooling</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {directSkills.map((tech) => (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/50 text-xs font-medium text-slate-200 shadow-md backdrop-blur-md transition-all cursor-default group"
                  >
                    <TechIcon name={tech.icon} className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                    <span className="group-hover:text-cyan-300 transition-colors font-semibold">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 hidden sm:inline-block">
                      {tech.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Primary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-3 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 text-sm font-extrabold shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white text-sm font-bold border border-white/10 hover:border-violet-500/50 transition-all shadow-lg shadow-black/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span>CONTACT ME</span>
              </button>
            </motion.div>

            {/* Bottom Proof Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-5 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-white/10 w-full"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>React 19 &amp; TypeScript</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>100% Responsive Design</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>WCAG Accessible Markup</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 3D interactive highlight preview spacer (Three.js 3D crystal is rendered here in 3D space) */}
          <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center relative min-h-[380px] pointer-events-none">
            {/* Soft decorative glow ring */}
            <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-cyan-500/10 via-indigo-500/15 to-violet-600/10 blur-3xl animate-pulse" />
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        type="button"
        onClick={() => handleScrollTo('about')}
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mx-auto mt-12 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer group"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL TO EXPLORE</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
      </motion.button>
    </section>
  );
};
