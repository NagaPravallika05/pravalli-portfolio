import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles, Terminal } from 'lucide-react';
import { ProfileConfig } from '../types/portfolio';

interface FooterProps {
  profile: ProfileConfig;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] text-slate-200 py-16 border-t border-white/10 relative overflow-hidden">
      {/* 3D Grid reflection at bottom */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-50" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Left info with 3D monogram */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center font-mono font-bold text-xs text-cyan-300">
                {profile.name.charAt(0) || 'N'}
              </div>
              <span className="font-black text-lg text-white tracking-tight">{profile.name}</span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Frontend Developer &amp; Web Engineer • React 19 • TypeScript
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition-all border border-white/10 shadow-lg shadow-black/40 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition-all border border-white/10 shadow-lg shadow-black/40 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="p-3 rounded-2xl bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition-all border border-white/10 shadow-lg shadow-black/40 hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 px-4 py-2.5 rounded-xl border border-white/10 transition-all cursor-pointer shadow-md hover:-translate-y-0.5"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            Crafted &amp; Built by <strong className="text-slate-200">{profile.name}</strong> • &copy; {currentYear}
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
            <span>React 19</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
