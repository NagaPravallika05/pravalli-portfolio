import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Sparkles, Terminal, Code2 } from 'lucide-react';
import { ProfileConfig } from '../types/portfolio';

interface NavbarProps {
  profile: ProfileConfig;
  onOpenResume: () => void;
  onOpenCustomize: () => void;
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ profile, onOpenResume, onOpenCustomize }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          const height = sectionEl.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      // If Lenis is active
      const lenis = (window as unknown as { __lenis?: { scrollTo: (el: Element, opts: { offset: number }) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(target, { offset: -70 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06080F]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo with 3D Monogram badge */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="flex items-center gap-3 group select-none"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:shadow-cyan-400/40 transition-all group-hover:scale-105 duration-200">
            <div className="w-full h-full bg-[#0A0E1A] rounded-[10px] flex items-center justify-center font-heading font-black text-sm text-cyan-300">
              {profile.name.charAt(0) || 'P'}
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0A0E1A]" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-sm text-slate-100 tracking-tight group-hover:text-cyan-300 transition-colors">
                {profile.name}
              </span>
              <span className="text-[10px] font-mono text-cyan-400 font-bold bg-cyan-950/70 px-1.5 py-0.5 rounded border border-cyan-800/40 hidden sm:inline-block">
                DEV
              </span>
            </div>
            <span className="text-[11px] text-slate-400 hidden md:inline-block">
              Frontend &amp; Web Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Pill Dock */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0A0E1A]/80 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/10 shadow-xl shadow-black/50">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 font-bold shadow-md shadow-cyan-500/25 scale-105'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Resume & Customize Modal */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-200 bg-[#0F172A]/90 hover:bg-slate-800 hover:text-cyan-300 px-4 py-2 rounded-xl border border-white/10 transition-all hover:border-cyan-500/40 cursor-pointer shadow-lg shadow-black/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </button>

          <button
            type="button"
            onClick={onOpenCustomize}
            title="Edit profile info"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 px-4 py-2 rounded-xl transition-all cursor-pointer shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>Customize</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onOpenCustomize}
            className="p-2 text-cyan-300 bg-cyan-950/70 rounded-xl border border-cyan-800/60"
            title="Customize"
            aria-label="Customize"
          >
            <Sparkles className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-white/10 bg-[#0A0E1A] text-slate-200 hover:bg-slate-800 transition-colors focus:outline-hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-slate-200" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0E1A]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3 shadow-2xl shadow-black/90 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold text-center transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2.5 px-3 text-xs font-bold text-center bg-slate-900 border border-white/10 rounded-xl text-slate-200 flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="flex-1 py-2.5 px-3 text-xs font-bold text-center bg-gradient-to-r from-cyan-400 to-indigo-400 text-slate-950 rounded-xl flex items-center justify-center gap-1 shadow-md shadow-cyan-500/20"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
