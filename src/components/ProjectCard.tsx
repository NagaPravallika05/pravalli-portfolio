import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, Eye, Calendar, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ProjectPreview } from './ProjectPreview';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt calculation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [6, -6]), {
    stiffness: 250,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-6, 6]), {
    stiffness: 250,
    damping: 25,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 select-none h-full"
      data-cursor="project"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="bg-slate-900/60 hover:bg-slate-900/90 rounded-3xl border border-white/10 hover:border-cyan-400/50 transition-colors duration-200 flex flex-col justify-between overflow-hidden group shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-cyan-500/15 h-full relative backdrop-blur-xl"
      >
        {/* Top specular reflection line */}
        <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none z-10" />

        <div>
          {/* Interactive UI Mockup Preview */}
          <div className="relative group/view">
            <ProjectPreview type={project.previewType} title={project.title} />

            {/* Quick Inspection Overlay Button */}
            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/view:opacity-100 backdrop-blur-xs transition-opacity flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => onOpenDetails(project)}
                className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 text-xs font-black rounded-xl flex items-center gap-1.5 shadow-lg shadow-cyan-500/30 transform -translate-y-2 group-hover/view:translate-y-0 transition-transform cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Deep Inspection</span>
              </button>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-6">
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className="text-[11px] font-mono font-bold text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                {project.category}
              </span>
              {project.date && (
                <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                  <Calendar className="w-3 h-3 text-slate-500" />
                  {project.date}
                </span>
              )}
            </div>

            <h3 className="text-lg font-heading font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-slate-950/90 border border-white/5 text-xs font-mono font-medium text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Card Footer Actions */}
        <div className="px-6 pb-6 pt-2 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-400/40 transition-colors"
              title="View Repository"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={project.demoUrl === '#' ? '#home' : project.demoUrl}
              target={project.demoUrl === '#' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 transition-all shadow-md shadow-cyan-500/20"
              title="Live Demo"
              aria-label={`View Live Demo of ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
