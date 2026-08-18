import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Copy, Check, Send, CheckCircle2, ArrowUpRight, Sparkles, Terminal, MapPin } from 'lucide-react';
import { ProfileConfig } from '../types/portfolio';

interface ContactProps {
  profile: ProfileConfig;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 500);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md mb-4 shadow-lg shadow-cyan-500/10">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>START A CONVERSATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight leading-tight">
          LET&apos;S BUILD{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            SOMETHING GREAT.
          </span>
        </h2>
        <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
          I&apos;m always interested in building meaningful digital experiences and learning through new projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Links & Action Cards (Span 5) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Card */}
          <div className="bg-slate-900/60 rounded-3xl p-6 sm:p-7 border border-white/10 shadow-xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center text-cyan-400 shadow-md">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Direct Email</div>
                <div className="text-sm font-bold text-white font-mono break-all">{profile.email}</div>
              </div>
            </div>

            <div className="flex gap-2.5">
              <a
                href={`mailto:${profile.email}`}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 text-xs font-extrabold text-center transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/20"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>EMAIL ME</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold border border-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Social Links Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/60 hover:bg-slate-850 p-4 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-950 text-slate-200 border border-white/10 group-hover:text-cyan-400 transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">GitHub</div>
                  <div className="text-[10px] font-mono text-slate-400">@Repositories</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/60 hover:bg-slate-850 p-4 rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-950 text-slate-200 border border-white/10 group-hover:text-violet-400 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-violet-300 transition-colors">LinkedIn</div>
                  <div className="text-[10px] font-mono text-slate-400">@Connect</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          {/* Location & Timezone card */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Ready for Work</span>
            </div>
          </div>

        </div>

        {/* Right Column: Cyber-Glass Interactive Contact Form (Span 7) */}
        <div className="lg:col-span-7">
          <div className="bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl backdrop-blur-2xl relative">
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

            <h3 className="text-xl font-heading font-bold text-white mb-2 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span>Send a Message</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 font-normal">
              Send a quick project enquiry or note directly.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-center space-y-2"
              >
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out. I will get back to you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs text-cyan-400 underline font-bold cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/90 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/90 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Message / Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, role, or inquiry..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/90 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 text-xs font-extrabold shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Transmitting Message...' : 'SUBMIT MESSAGE'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
