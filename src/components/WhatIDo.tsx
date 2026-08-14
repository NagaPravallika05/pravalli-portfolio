import React from 'react';
import { motion } from 'motion/react';
import { 
  Layout, 
  Smartphone, 
  Palette, 
  Terminal, 
  ArrowUpRight, 
  CheckCircle2, 
  Cpu, 
  Code2, 
  Sparkles,
  Zap,
  Globe2,
  Code
} from 'lucide-react';
import { whatIDoServices } from '../data/portfolioData';

export const WhatIDo: React.FC = () => {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Layout':
        return Layout;
      case 'Smartphone':
        return Smartphone;
      case 'Palette':
      case 'Layers':
        return Palette;
      case 'Code':
        return Code2;
      case 'Globe':
        return Globe2;
      default:
        return Terminal;
    }
  };

  return (
    <section id="what-i-do" className="py-24 bg-[#080C14] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-black text-cyan-400 tracking-wider uppercase font-mono mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Core Capabilities &amp; Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            What I Bring to the Table
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From design translation to full client-side state architecture, here are the direct areas I specialize in as a frontend developer.
          </p>
        </div>

        {/* 3D Capabilities Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whatIDoServices.map((service, index) => {
            const Icon = getIcon(service.icon || service.iconName);
            const points = service.points || service.deliverables || [];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-slate-900/80 hover:bg-slate-850 rounded-3xl p-7 border border-white/10 hover:border-cyan-400/50 transition-all shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-cyan-500/15 flex flex-col justify-between group backdrop-blur-xl relative overflow-hidden"
              >
                {/* Top specular glow bar */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-white/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Capability features checklist */}
                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">Key Deliverables</div>
                  {points.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
