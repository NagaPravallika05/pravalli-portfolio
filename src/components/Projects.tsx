import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, Sparkles, Filter, Code2, ExternalLink, Github, ArrowUpRight, CheckCircle2, Eye, Layout } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { ProjectPreview } from './ProjectPreview';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Web Apps', 'Frontend', 'UI Systems'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const featuredProject = projects.find((p) => p.featured) || projects[0];

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md mb-4 shadow-lg shadow-cyan-500/10">
            <Layout className="w-3.5 h-3.5 text-cyan-400" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight leading-tight">
            SELECTED{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              WORK
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Case studies and interactive web applications engineered with modern component architectures, state workflows, and responsive design systems.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-2xl border border-white/10 w-fit backdrop-blur-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 shadow-md shadow-cyan-500/25 scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Big Project Case Study Banner (when viewing All or matching category) */}
      {activeFilter === 'All' && featuredProject && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 rounded-3xl bg-slate-900/70 backdrop-blur-2xl border border-cyan-500/30 overflow-hidden shadow-2xl shadow-black/60 relative group"
        >
          {/* Top highlight bar */}
          <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            {/* Left Info (Span 5) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold text-cyan-300 bg-cyan-950/90 px-3 py-1 rounded-full border border-cyan-800/60">
                  ★ FEATURED SHOWCASE
                </span>
                <span className="text-xs font-mono text-slate-400">{featuredProject.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white group-hover:text-cyan-300 transition-colors">
                {featuredProject.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Highlights */}
              {featuredProject.highlights && (
                <div className="space-y-2 pt-2 border-t border-white/10">
                  {featuredProject.highlights.slice(0, 3).map((hl) => (
                    <div key={hl} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950 text-cyan-200 border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(featuredProject)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 text-xs font-extrabold shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>VIEW CASE STUDY</span>
                </button>

                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  title="View GitHub Repository"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Interactive Mockup (Span 7) */}
            <div
              className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative cursor-pointer group/preview"
              data-cursor="project"
              onClick={() => setSelectedProject(featuredProject)}
            >
              <ProjectPreview type={featuredProject.previewType} title={featuredProject.title} />
              
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 rounded-xl bg-slate-900/90 text-cyan-300 text-xs font-bold font-mono border border-cyan-400/50 shadow-xl">
                  CLICK TO INSPECT ARCHITECTURE
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Grid of Other Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
          >
            <ProjectCard
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          </motion.div>
        ))}
      </div>

      {/* Deep Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
