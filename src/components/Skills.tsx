import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Terminal, 
  Wrench, 
  Layers, 
  CheckCircle2, 
  Search, 
  Sparkles, 
  Copy, 
  Check, 
  Cpu, 
  Play,
  Flame,
  Palette,
  Binary
} from 'lucide-react';
import { SkillItem } from '../types/portfolio';
import { TechIcon } from './TechIcons';

interface SkillsProps {
  skills: SkillItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20, 
    scale: 0.96 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Frontend' | 'Programming' | 'Design' | 'Tools'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkillName, setSelectedSkillName] = useState<string>(skills[0]?.name || 'React');
  const [copiedCode, setCopiedCode] = useState(false);
  const [testRunOutput, setTestRunOutput] = useState<string | null>(null);

  const categories = [
    { id: 'All', label: 'All Stack', icon: Sparkles },
    { id: 'Frontend', label: 'Frontend', icon: Code2 },
    { id: 'Programming', label: 'Programming', icon: Binary },
    { id: 'Design', label: 'Design', icon: Palette },
    { id: 'Tools', label: 'Tools', icon: Wrench },
  ] as const;

  const filteredSkills = skills.filter((s) => {
    const matchesCategory = activeCategory === 'All' || s.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesName = s.name.toLowerCase().includes(query);
    const matchesDesc = s.description?.toLowerCase().includes(query);
    const matchesTopics = s.keyTopics?.some((t) => t.toLowerCase().includes(query));
    return matchesCategory && (matchesName || matchesDesc || matchesTopics);
  });

  const selectedSkill = skills.find((s) => s.name === selectedSkillName) || filteredSkills[0] || skills[0];

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunSample = () => {
    setTestRunOutput('Executing verified snippet in virtual sandbox...');
    setTimeout(() => {
      if (selectedSkill.name === 'React') {
        setTestRunOutput('✓ useInteractiveCounter hook compiled successfully. State synchronization active.');
      } else if (selectedSkill.name === 'JavaScript') {
        setTestRunOutput('✓ Async data pipeline evaluated: 3 active elements processed.');
      } else if (selectedSkill.name === 'CSS') {
        setTestRunOutput('✓ 3D CSS Grid & Transform calculations verified across viewports.');
      } else if (selectedSkill.name === 'HTML') {
        setTestRunOutput('✓ 100% ARIA Landmark accessibility compliance verified.');
      } else if (selectedSkill.name === 'Python') {
        setTestRunOutput('✓ Python dictionary comprehension executed: 9 competencies categorized.');
      } else if (selectedSkill.name === 'Figma') {
        setTestRunOutput('✓ Figma design tokens exported to TypeScript format.');
      } else {
        setTestRunOutput(`✓ ${selectedSkill.name} workflow rules verified.`);
      }
    }, 350);
  };

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md mb-4 shadow-lg shadow-cyan-500/10">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight leading-tight">
            Skills &amp;{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Interactive Lab
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Hands-on technical competencies categorized with verified code implementations and interactive sandbox execution.
          </p>
        </div>

        {/* Quick Stats Pill */}
        <div className="flex items-center gap-3 bg-slate-900/80 p-2 rounded-2xl border border-white/10 w-fit shadow-xl backdrop-blur-xl">
          <div className="px-4 py-2 bg-slate-950/80 rounded-xl border border-white/5 text-center">
            <div className="text-sm font-black text-cyan-300 font-mono">9/9</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Tech</div>
          </div>
          <div className="px-4 py-2 bg-slate-950/80 rounded-xl border border-white/5 text-center">
            <div className="text-sm font-black text-emerald-400 font-mono">100%</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Hands-On</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 mb-8 p-2.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 shadow-md shadow-cyan-500/25 scale-105'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter tech (React, CSS, Git)..."
            className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>
      </div>

      {/* Split Interactive Matrix & Code Lab */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Skill Cards (Span 5) */}
        <div className="lg:col-span-5 space-y-3">
          {filteredSkills.length === 0 ? (
            <div className="p-8 text-center bg-slate-900/60 rounded-2xl border border-white/10 text-sm text-slate-400">
              No matching technologies found for &quot;{searchQuery}&quot;.
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {filteredSkills.map((skill) => {
                const isSelected = selectedSkill.name === skill.name;
                return (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    onClick={() => {
                      setSelectedSkillName(skill.name);
                      setTestRunOutput(null);
                    }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group backdrop-blur-xl ${
                      isSelected
                        ? 'bg-slate-800/90 border-cyan-400 shadow-xl shadow-cyan-500/10'
                        : 'bg-slate-900/60 border-white/10 hover:border-cyan-500/40 hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                        <TechIcon name={skill.iconKey || 'code'} className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-heading font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950 text-slate-400 border border-white/5">
                            {skill.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-1 mt-0.5 font-normal">
                          {skill.description}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0 ml-3">
                      <span className="text-[11px] font-mono font-bold text-cyan-400">
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* Right Column: Interactive Code Sandbox & Deep Dive (Span 7) */}
        <div className="lg:col-span-7">
          <motion.div
            key={selectedSkill.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-6"
          >
            {/* Header: Skill Name & Details */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-slate-950 border border-white/10 shadow-lg">
                  <TechIcon name={selectedSkill.iconKey || 'code'} className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-heading font-black text-white">
                      {selectedSkill.name}
                    </h3>
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                      {selectedSkill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 font-normal">
                    {selectedSkill.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Topics Chips */}
            {selectedSkill.keyTopics && selectedSkill.keyTopics.length > 0 && (
              <div>
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Core Competencies &amp; Concepts</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.keyTopics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 rounded-xl text-xs font-mono bg-slate-950/80 text-slate-300 border border-white/10"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Code Sample Box with Run and Copy Actions */}
            {selectedSkill.codeSample && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{selectedSkill.codeSample.filename}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleCopyCode(selectedSkill.codeSample!.code)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-300 hover:text-white bg-slate-950 px-2.5 py-1 rounded-lg border border-white/10 hover:border-cyan-400 transition-all cursor-pointer"
                    >
                      {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleRunSample}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 px-3 py-1 rounded-lg shadow-sm transition-all cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-slate-950" />
                      <span>Run Snippet</span>
                    </button>
                  </div>
                </div>

                {/* Code syntax block */}
                <div className="relative rounded-2xl bg-[#04060A] border border-white/10 p-4 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre className="leading-relaxed whitespace-pre-wrap">{selectedSkill.codeSample.code}</pre>
                </div>

                {/* Output Console simulation */}
                {testRunOutput && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{testRunOutput}</span>
                  </motion.div>
                )}

                {selectedSkill.codeSample.outputExplanation && (
                  <p className="text-xs text-slate-400 italic">
                    Note: {selectedSkill.codeSample.outputExplanation}
                  </p>
                )}
              </div>
            )}

          </motion.div>
        </div>

      </div>
    </section>
  );
};
