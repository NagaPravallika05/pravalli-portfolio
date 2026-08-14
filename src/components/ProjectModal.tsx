import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Code2, Layers, Calendar, Terminal } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ProjectPreview } from './ProjectPreview';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
          className="relative w-full max-w-2xl bg-[#0B0F19] rounded-3xl border border-white/10 shadow-2xl shadow-cyan-950/60 overflow-hidden z-10 my-8 backdrop-blur-2xl ring-1 ring-cyan-500/20"
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
          <div className="w-full bg-[#050811] border-b border-white/10">
            <ProjectPreview type={project.previewType} title={project.title} />
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8">
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

            <h3 className="text-2xl font-black text-white mb-3">
              {project.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Highlights Breakdown */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-6 bg-slate-950/90 rounded-2xl p-4 sm:p-5 border border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5 font-mono">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  Key Implementations &amp; Architecture
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech stack tags */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                Tech Stack &amp; Tools
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono font-medium text-slate-200 shadow-2xs hover:border-cyan-400/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-white/10">
              <a
                href={project.demoUrl === '#' ? '#home' : project.demoUrl}
                target={project.demoUrl === '#' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 text-xs font-extrabold transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
              >
                <span>Launch Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold border border-white/10 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Source Repository</span>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
