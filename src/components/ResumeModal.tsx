import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Mail, Github, Linkedin, ExternalLink, MapPin, Terminal } from 'lucide-react';
import { ProfileConfig, Project, SkillItem, LearningMilestone } from '../types/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileConfig;
  skills: SkillItem[];
  projects: Project[];
  milestones: LearningMilestone[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  skills,
  projects,
  milestones,
}) => {
  useEffect(() => {
    if (isOpen) {
      const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
      lenis?.start();
      document.body.style.overflow = '';
    }

    return () => {
      const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
      lenis?.start();
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        data-lenis-prevent="true"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050811]/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#0B0F19] rounded-3xl border border-white/10 shadow-2xl shadow-cyan-950/60 overflow-hidden z-10 my-auto max-h-[88vh] flex flex-col ring-1 ring-cyan-500/20"
          data-lenis-prevent="true"
        >
          {/* Action header bar */}
          <div className="p-4 sm:px-6 bg-slate-900 border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
                Resume Overview
              </span>
              <span className="text-[11px] font-mono text-slate-300 bg-slate-950 px-2.5 py-0.5 rounded-md border border-white/10">
                Print &amp; PDF Ready
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 text-xs font-black shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close resume view"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resume Scrollable Body */}
          <div 
            className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200 overscroll-contain flex-1"
            data-lenis-prevent="true"
          >
            {/* Header */}
            <div className="border-b border-white/10 pb-6">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-heading">
                {profile.name}
              </h2>
              <p className="text-sm font-bold text-cyan-400 mt-1 font-mono">
                {profile.roleTitle}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-3 font-mono">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  {profile.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {profile.location}
                </span>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-2">
                Executive Profile
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {profile.bio}
              </p>
            </div>

            {/* Direct Skills Matrix */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-2">
                Direct Technical Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono font-medium text-slate-200"
                  >
                    {skill.name} <span className="text-cyan-400">({skill.badge})</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Key Projects & Applications */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-3">
                Key Projects &amp; Applications
              </h3>
              <div className="space-y-3">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white font-heading">{proj.title}</h4>
                      <span className="text-[11px] font-mono text-cyan-400">{proj.category}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{proj.description}</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {proj.tags.map((t) => (
                        <span key={t} className="text-[10px] font-mono bg-slate-950 px-2 py-0.5 rounded text-slate-400 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Milestones */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-3">
                Milestones &amp; Learning Journey
              </h3>
              <div className="space-y-3">
                {milestones.map((m) => (
                  <div key={m.id} className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/5">
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="text-white font-bold">{m.title}</span>
                      <span className="text-cyan-400 text-[11px]">{m.period}</span>
                    </div>
                    <p className="text-xs text-slate-300">{m.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
