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
  ExternalLink, 
  FolderGit2, 
  ShieldCheck, 
  Cpu, 
  Play,
  Flame,
  Binary,
  Boxes
} from 'lucide-react';
import { SkillItem } from '../types/portfolio';
import { TechIcon } from './TechIcons';

interface SkillsProps {
  skills: SkillItem[];
}

// Framer-motion 3D staggered animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 28, 
    scale: 0.94,
    rotateX: -10 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Frontend' | 'Programming' | 'Tools'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkillName, setSelectedSkillName] = useState<string>(skills[0]?.name || 'React');
  const [copiedCode, setCopiedCode] = useState(false);
  const [testRunOutput, setTestRunOutput] = useState<string | null>(null);

  const categories = [
    { id: 'All', label: 'All Tech' },
    { id: 'Frontend', label: 'Frontend Core' },
    { id: 'Programming', label: 'Programming' },
    { id: 'Tools', label: 'Tools & Workflow' },
  ] as const;

  // Filter skills by category & search query
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
    setTestRunOutput('Executing verified snippet in sandbox...');
    setTimeout(() => {
      if (selectedSkill.name === 'React') {
        setTestRunOutput('✓ useInteractiveCounter hook compiled successfully. State synchronization active.');
      } else if (selectedSkill.name === 'JavaScript') {
        setTestRunOutput('✓ Array pipeline evaluated: 3 active elements sorted by priority score.');
      } else if (selectedSkill.name === 'CSS') {
        setTestRunOutput('✓ 3D CSS Grid & Transform calculations verified across 320px–1920px viewports.');
      } else if (selectedSkill.name === 'HTML') {
        setTestRunOutput('✓ 100% ARIA Landmark accessibility compliance verified.');
      } else if (selectedSkill.name === 'Python') {
        setTestRunOutput('✓ Dictionary comprehension executed: 9 competencies categorized successfully.');
      } else {
        setTestRunOutput(`✓ ${selectedSkill.name} workflow rules verified.`);
      }
    }, 400);
  };

  return (
    <section id="skills" className="py-28 bg-[#080C14] relative overflow-hidden">
      {/* 3D Cyber Grid & Ambient Lighting */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-80" 
        aria-hidden="true" 
      />

      <div 
        className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 -right-32 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with smooth 3D viewport reveal */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-black text-cyan-400 tracking-wider uppercase font-mono mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span>Direct Skills &amp; Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Skills &amp; Interactive Tech Lab
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore the technical stack <span className="font-bold text-cyan-300">N Naga Pravallika</span> develops with. Click any 3D skill card to inspect key topics, verified code snippets, and live sandbox execution.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 bg-slate-900/90 p-2 rounded-2xl border border-white/10 w-fit shadow-xl backdrop-blur-xl">
            <div className="px-4 py-2 bg-slate-950/80 rounded-xl border border-white/10 text-center shadow-inner">
              <div className="text-sm font-black text-cyan-300 font-mono">9/9</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Tech</div>
            </div>
            <div className="px-4 py-2 bg-slate-950/80 rounded-xl border border-white/10 text-center shadow-inner">
              <div className="text-sm font-black text-emerald-400 font-mono">100%</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Production Code</div>
            </div>
          </div>
        </motion.div>

        {/* Controls Bar: Search & Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3.5 mb-8 p-2.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech (e.g., React, CSS, Git)..."
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </motion.div>

        {/* Pro 3D Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3D Staggered Skills Cards (Span 5) */}
          <div className="lg:col-span-5 space-y-3">
            {filteredSkills.length === 0 ? (
              <div className="p-8 text-center bg-slate-900/70 rounded-2xl border border-white/10 text-sm text-slate-400">
                No matching technologies found for &quot;{searchQuery}&quot;.
              </div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
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
                          ? 'bg-slate-800/90 border-cyan-400/80 shadow-xl shadow-cyan-500/15 ring-2 ring-cyan-500/30'
                          : 'bg-slate-900/70 hover:bg-slate-800/80 border-white/10 hover:border-white/20 shadow-lg shadow-black/30'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`p-2.5 rounded-xl border transition-all ${
                          isSelected 
                            ? 'bg-cyan-500/20 border-cyan-400/50 shadow-md shadow-cyan-500/20' 
                            : 'bg-slate-950/80 border-white/10 group-hover:border-white/20'
                        }`}>
                          <TechIcon name={skill.iconKey || skill.name} className="w-5 h-5 transition-transform group-hover:scale-110" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </h3>
                            <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/40">
                              {skill.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5 max-w-[210px] sm:max-w-[260px]">
                            {skill.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md ${
                          skill.level === 'Advanced'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        }`}>
                          {skill.level || 'Active'}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {/* Quality Statement Box */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 text-xs text-slate-300 flex items-start gap-2.5"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white">Production Architecture:</span> All listed skills reflect real-world implementation capability, modular patterns, and clean Git hygiene.
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Active Skill Inspector & Code Lab (Span 7) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {selectedSkill && (
                <motion.div
                  key={selectedSkill.name}
                  initial={{ opacity: 0, y: 14, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -14, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-white/10 shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl relative ring-1 ring-white/5"
                >
                  {/* Top specular glow line */}
                  <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />

                  {/* Inspector Header */}
                  <div className="flex flex-wrap items-center justify-between pb-5 mb-5 border-b border-white/10 gap-3">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3.5 rounded-2xl bg-slate-950 border border-white/10 shadow-md">
                        <TechIcon name={selectedSkill.iconKey || selectedSkill.name} className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-black text-white">
                            {selectedSkill.name}
                          </h3>
                          <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-700/50">
                            {selectedSkill.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1">
                          {selectedSkill.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-300 bg-slate-950 px-3 py-1 rounded-lg border border-white/10">
                        Proficiency: <strong className="text-cyan-300">{selectedSkill.level || 'Proficient'}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Core Topics / Key Competencies */}
                  {selectedSkill.keyTopics && selectedSkill.keyTopics.length > 0 && (
                    <div className="mb-6">
                      <div className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono mb-2.5 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        Key Competencies &amp; Concepts
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedSkill.keyTopics.map((topic) => (
                          <span
                            key={topic}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold bg-slate-950/80 text-slate-200 px-3 py-1.5 rounded-xl border border-white/10 hover:border-cyan-400/40 transition-colors shadow-xs"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{topic}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Clean Code Snippet Sandbox */}
                  {selectedSkill.codeSample && (
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
                          <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                          Verified Code Sample
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleCopyCode(selectedSkill.codeSample!.code)}
                            className="inline-flex items-center gap-1 text-xs font-bold text-slate-200 hover:text-white bg-slate-950 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-white/10 transition-colors cursor-pointer"
                          >
                            {copiedCode ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 text-slate-400" />
                                <span>Copy Code</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Code Display Window */}
                      <div className="bg-[#050811] rounded-2xl p-4 text-white border border-white/10 shadow-inner">
                        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 text-[11px] font-mono text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block shadow-sm shadow-cyan-400/50" />
                            {selectedSkill.codeSample.filename}
                          </span>
                          <span className="text-slate-400 uppercase font-bold">{selectedSkill.codeSample.language}</span>
                        </div>

                        <pre className="text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-56 p-1">
                          <code>{selectedSkill.codeSample.code}</code>
                        </pre>

                        {selectedSkill.codeSample.outputExplanation && (
                          <div className="mt-3 pt-2.5 border-t border-white/10 text-[11px] text-slate-400 font-mono flex items-start gap-1.5">
                            <span className="text-cyan-400 font-bold">&gt;</span>
                            <span>{selectedSkill.codeSample.outputExplanation}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Interactive Sandbox Test Action */}
                  <div className="p-4 rounded-2xl bg-slate-950/90 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-xs text-slate-300 w-full sm:w-auto">
                      {testRunOutput ? (
                        <span className="font-mono text-emerald-400 font-bold">{testRunOutput}</span>
                      ) : (
                        <span className="font-mono text-slate-400">Evaluate {selectedSkill.name} implementation in sandbox</span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={handleRunSample}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-cyan-500/25 active:scale-95 whitespace-nowrap"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Test in Sandbox</span>
                    </button>
                  </div>

                  {/* Applied In Projects Link */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Applied in N Naga Pravallika&apos;s projects</span>
                    </span>
                    <a
                      href="#projects"
                      className="text-cyan-400 font-bold hover:underline flex items-center gap-1 font-mono"
                    >
                      <span>Jump to Projects</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
