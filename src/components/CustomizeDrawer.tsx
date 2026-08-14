import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Check, RotateCcw, Copy, UserCheck, Terminal } from 'lucide-react';
import { ProfileConfig } from '../types/portfolio';
import { initialProfile } from '../data/portfolioData';

interface CustomizeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileConfig;
  onUpdateProfile: (updated: ProfileConfig) => void;
}

export const CustomizeDrawer: React.FC<CustomizeDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field: keyof ProfileConfig, value: string) => {
    onUpdateProfile({
      ...profile,
      [field]: value,
    });
  };

  const handleReset = () => {
    onUpdateProfile(initialProfile);
  };

  const handleCopyConfig = () => {
    const code = `export const initialProfile = ${JSON.stringify(profile, null, 2)};`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050811]/70 backdrop-blur-xs transition-opacity"
        />

        {/* Drawer Window */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-md bg-[#0B0F19] border-l border-white/10 shadow-2xl shadow-cyan-950/60 z-10 h-full flex flex-col justify-between"
        >
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-slate-900">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  Personalize Portfolio
                </h3>
                <p className="text-[11px] text-slate-400 font-mono">
                  Live state parameter updates
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Form Fields */}
          <div className="p-5 overflow-y-auto space-y-4 flex-1 text-xs text-slate-200">
            <div>
              <label htmlFor="custom-name" className="block font-bold text-slate-300 mb-1 font-mono">
                Full Name / Developer Alias
              </label>
              <input
                id="custom-name"
                type="text"
                value={profile.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="e.g. N Naga Pravallika"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="custom-role" className="block font-bold text-slate-300 mb-1 font-mono">
                Role Title
              </label>
              <input
                id="custom-role"
                type="text"
                value={profile.roleTitle}
                onChange={(e) => handleChange('roleTitle', e.target.value)}
                placeholder="Frontend Developer & Web Developer"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="custom-email" className="block font-bold text-slate-300 mb-1 font-mono">
                Email Address
              </label>
              <input
                id="custom-email"
                type="email"
                value={profile.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="nagapravallika05@gmail.com"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="custom-location" className="block font-bold text-slate-300 mb-1 font-mono">
                Location
              </label>
              <input
                id="custom-location"
                type="text"
                value={profile.location}
                onChange={(e) => handleChange('location', e.target.value)}
                placeholder="Open for Remote & Relocation"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="custom-hero" className="block font-bold text-slate-300 mb-1 font-mono">
                Hero Supporting Text
              </label>
              <textarea
                id="custom-hero"
                rows={2}
                value={profile.supportingText}
                onChange={(e) => handleChange('supportingText', e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400 resize-none"
              />
            </div>

            <div>
              <label htmlFor="custom-bio" className="block font-bold text-slate-300 mb-1 font-mono">
                About / Bio Description
              </label>
              <textarea
                id="custom-bio"
                rows={3}
                value={profile.bio}
                onChange={(e) => handleChange('bio', e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400 resize-none"
              />
            </div>
          </div>

          {/* Footer Controls */}
          <div className="p-4 border-t border-white/10 bg-slate-900 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2 text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              type="button"
              onClick={handleCopyConfig}
              className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-md shadow-cyan-500/20 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-slate-950" /> : <Copy className="w-3.5 h-3.5 text-slate-950" />}
              <span>{copied ? 'Copied' : 'Copy JSON'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
