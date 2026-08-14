import React from 'react';
import { motion } from 'motion/react';
import { Milestone, CheckCircle2, Clock, Compass, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { LearningMilestone } from '../types/portfolio';

interface LearningJourneyProps {
  milestones: LearningMilestone[];
}

export const LearningJourney: React.FC<LearningJourneyProps> = ({ milestones }) => {
  const getStatusBadge = (status: LearningMilestone['status']) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Verified &amp; Completed
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-xs">
            <Clock className="w-3.5 h-3.5 animate-spin" />
            Current Active Focus
          </span>
        );
      case 'upcoming':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-xs">
            <Compass className="w-3.5 h-3.5" />
            Roadmap Next
          </span>
        );
    }
  };

  return (
    <section id="journey" className="py-28 bg-[#080C14] border-y border-white/10 relative overflow-hidden">
      {/* 3D background glows */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-black text-cyan-400 tracking-wider uppercase font-mono mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Growth &amp; Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Learning &amp; Engineering Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            A transparent timeline of technical milestones achieved, foundational proficiencies mastered, and active learning objectives.
          </p>
        </div>

        {/* 3D Illuminated Timeline */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glowing Timeline Indicator Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full border-2 border-[#080C14] transition-all shadow-lg ${
                  milestone.status === 'completed'
                    ? 'bg-emerald-400 shadow-emerald-400/50'
                    : milestone.status === 'in-progress'
                    ? 'bg-cyan-400 shadow-cyan-400/80 ring-4 ring-cyan-500/30 animate-pulse'
                    : 'bg-slate-600'
                }`}
              />

              {/* Milestone 3D Card */}
              <div className="bg-slate-900/80 hover:bg-slate-850 rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-cyan-400/50 transition-all shadow-xl shadow-black/40 backdrop-blur-xl group relative overflow-hidden">
                {/* Top specular line */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider bg-slate-950 px-2.5 py-1 rounded-md border border-white/5">
                    {milestone.period}
                  </span>
                  {getStatusBadge(milestone.status)}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {milestone.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {milestone.description}
                </p>

                {/* Technologies used in milestone */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10">
                  <span className="text-xs font-mono font-bold text-slate-400 mr-1">Focus Areas:</span>
                  {milestone.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-950 border border-white/10 text-xs font-mono text-cyan-300 shadow-2xs hover:border-cyan-400/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
