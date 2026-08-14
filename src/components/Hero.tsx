import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Terminal,
  Zap,
  Globe,
  Layers,
  ChevronRight
} from 'lucide-react';
import { ProfileConfig } from '../types/portfolio';
import { HeroBackground } from './HeroBackground';
import { TechIcon } from './TechIcons';

interface HeroProps {
  profile: ProfileConfig;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const directSkills = [
    { name: 'HTML5', icon: 'html', level: 'Semantic' },
    { name: 'CSS3', icon: 'css', level: '3D & Grid' },
    { name: 'JavaScript', icon: 'javascript', level: 'ES6+' },
    { name: 'React 19', icon: 'react', level: 'Hooks' },
    { name: 'Python', icon: 'python', level: 'Data' },
    { name: 'Git', icon: 'git', level: 'Version' },
    { name: 'GitHub', icon: 'github', level: 'CI/CD' },
    { name: 'VS Code', icon: 'vscode', level: 'IDE' },
    { name: 'Figma', icon: 'figma', level: 'UI/UX' },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-[88vh] pt-32 pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#080C14] via-[#0B0F19] to-[#080C14]"
    >
      {/* 3D Particle & Wireframe Mesh Background */}
      <HeroBackground />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center space-y-6"
        >
          {/* Status Pill Badge with 3D glowing pulse */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-semibold text-cyan-300 backdrop-blur-xl shadow-lg shadow-cyan-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="font-mono tracking-wide">{profile.location}</span>
          </div>

          {/* Main 3D Headline */}
          <div className="max-w-3xl mx-auto">
            <div className="text-xs sm:text-sm font-black uppercase tracking-widest text-cyan-400 font-mono mb-3 inline-flex items-center justify-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Hi, I&apos;m {profile.name}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-5">
              Frontend Developer <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                &amp; Web Engineer
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              {profile.supportingText} Specializing in responsive architectures, modern component systems, and high-performance interactive interfaces.
            </p>
          </div>

          {/* Direct Skills Floating Capsule Dock (3D Pro styling) */}
          <div className="pt-2 max-w-3xl mx-auto">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono mb-3 flex items-center justify-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Direct Technical Stack &amp; Tooling</span>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {directSkills.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/85 border border-white/10 hover:border-cyan-400/50 text-xs font-bold text-slate-200 shadow-md shadow-black/40 hover:shadow-cyan-500/20 backdrop-blur-md transition-all cursor-default group"
                >
                  <TechIcon name={tech.icon} className="w-4 h-4 transition-transform group-hover:rotate-6" />
                  <span className="text-slate-200 group-hover:text-cyan-300 transition-colors font-medium">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-cyan-400/80">
                    {tech.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 text-sm font-extrabold shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>Explore Featured Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#skills"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white text-sm font-bold border border-white/10 hover:border-cyan-500/40 transition-all shadow-lg shadow-black/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Interactive Skill Lab</span>
            </a>
          </div>

          {/* Bottom Proof Metric Pills */}
          <div className="pt-6 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 border-t border-white/10 w-full max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Modern React 19 &amp; ES6+</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Responsive &amp; Mobile-First</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              <span>Semantic &amp; Accessible</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
