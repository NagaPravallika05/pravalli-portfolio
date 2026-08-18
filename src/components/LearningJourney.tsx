import React from 'react';
import { motion } from 'motion/react';
import { Milestone, CheckCircle2, Clock, Compass, Sparkles, Terminal } from 'lucide-react';
import { LearningMilestone } from '../types/portfolio';

interface LearningJourneyProps {
  milestones: LearningMilestone[];
}

export const LearningJourney: React.FC<LearningJourneyProps> = ({ milestones }) => {
  const getStatusBadge = (status: LearningMilestone['status']) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Completed &amp; Mastered
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 animate-pulse">
            <Clock className="w-3.5 h-3.5" />
            Current Focus
          </span>
        );
      case 'upcoming':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
            <Compass className="w-3.5 h-3.5" />
            Roadmap Ahead
          </span>
        );
    }
  };

  return (
    <section id="journey" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md mb-4 shadow-lg shadow-cyan-500/10">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>CAREER TIMELINE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight leading-tight">
          MY{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            JOURNEY
          </span>
        </h2>
        <p className="mt-4 text-slate-300 text-base leading-relaxed">
          The continuous progression of technical milestones, frontend proficiencies, and future engineering roadmap.
        </p>
      </div>

      {/* Vertical Illuminated Timeline */}
      <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Timeline Glowing Dot */}
            <div
              className={`absolute -left-[31px] sm:-left-[47px] top-2 w-4 h-4 rounded-full border-2 border-[#06080F] transition-all shadow-lg ${
                milestone.status === 'completed'
                  ? 'bg-emerald-400 shadow-emerald-400/50'
                  : milestone.status === 'in-progress'
                  ? 'bg-cyan-400 shadow-cyan-400/80 ring-4 ring-cyan-500/30 animate-pulse'
                  : 'bg-slate-600'
              }`}
            />

            {/* Milestone Card */}
            <div className="bg-slate-900/60 hover:bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 shadow-xl shadow-black/50 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider bg-slate-950 px-3 py-1 rounded-lg border border-white/5">
                  {milestone.period}
                </span>
                {getStatusBadge(milestone.status)}
              </div>

              <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                {milestone.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                {milestone.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10">
                <span className="text-xs font-mono font-bold text-slate-400 mr-1">Focus Areas:</span>
                {milestone.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-slate-950 border border-white/5 text-xs font-mono text-cyan-300 hover:border-cyan-400/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
