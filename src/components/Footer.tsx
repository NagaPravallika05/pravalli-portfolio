import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { ProfileConfig } from '../types/portfolio';

interface FooterProps {
  profile: ProfileConfig;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number | string) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#04060A]/70 backdrop-blur-md text-slate-200 py-16 border-t border-white/10 overflow-hidden z-10">
      {/* 3D Grid pattern background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-40" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Left info with 3D monogram */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] flex items-center justify-center font-heading font-black text-xs text-cyan-300 shadow-md">
                <div className="w-full h-full bg-[#0A0E1A] rounded-[11px] flex items-center justify-center">
                  {profile.name.charAt(0) || 'P'}
                </div>
              </div>
              <span className="font-heading font-black text-lg text-white tracking-tight">{profile.name}</span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Frontend Developer &amp; Web Engineer • React 19 • TypeScript
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-900/80 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-indigo-500 hover:text-slate-950 text-slate-300 transition-all border border-white/10 shadow-lg shadow-black/40 hover:scale-105"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-900/80 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-indigo-500 hover:text-slate-950 text-slate-300 transition-all border border-white/10 shadow-lg shadow-black/40 hover:scale-105"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="p-3 rounded-2xl bg-slate-900/80 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-indigo-500 hover:text-slate-950 text-slate-300 transition-all border border-white/10 shadow-lg shadow-black/40 hover:scale-105"
              aria-label="Email Contact"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 px-4 py-2.5 rounded-xl border border-white/10 transition-all cursor-pointer shadow-md hover:-translate-y-0.5"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom copyright and tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            &copy; {currentYear} <strong className="text-slate-300">{profile.name}</strong>. Designed &amp; Built with passion.
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
            <span>React 19</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Three.js</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
