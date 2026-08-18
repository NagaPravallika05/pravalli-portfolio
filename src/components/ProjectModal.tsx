import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Code2, Layers, Calendar, Terminal } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ProjectPreview } from './ProjectPreview';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
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
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        data-lenis-prevent="true"
      >
        {/* Dark 3D Backdrop */}
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
          className="relative w-full max-w-2xl bg-[#0B0F19] rounded-3xl border border-white/10 shadow-2xl shadow-cyan-950/60 overflow-hidden z-10 my-auto max-h-[88vh] flex flex-col backdrop-blur-2xl ring-1 ring-cyan-500/20"
          data-lenis-prevent="true"
        >
          {/* Header Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-20 border border-white/10 cursor-pointer shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Project Preview Graphic */}
          <div className="w-full bg-[#050811] border-b border-white/10 shrink-0">
            <ProjectPreview type={project.previewType} title={project.title} />
          </div>

          {/* Modal Content */}
          <div 
            className="p-6 sm:p-8 overflow-y-auto space-y-4 overscroll-contain flex-1"
            data-lenis-prevent="true"
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 text-xs font-bold border border-cyan-700/50 font-mono">
                {project.category}
              </span>
              {project.date && (
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {project.date}
                </span>
              )}
            </div>

            <h3 className="text-2xl font-black text-white font-heading">
              {project.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {project.description}
            </p>

            {/* Architecture Highlights */}
            {project.highlights && (
              <div className="pt-2 space-y-2">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Key Technical Features &amp; Architecture:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.highlights.map((hl) => (
                    <div key={hl} className="p-3 rounded-xl bg-slate-900/90 border border-white/5 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="pt-3">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                Technologies Used:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-white/10 text-xs font-mono text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href={project.demoUrl === '#' ? '#home' : project.demoUrl}
                target={project.demoUrl === '#' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 text-xs font-black text-center flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Application</span>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 transition-colors flex items-center gap-2 text-xs font-bold"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
