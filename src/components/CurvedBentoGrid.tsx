import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { 
  Laptop, 
  Smartphone, 
  Tablet, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  Play, 
  RotateCcw, 
  Layers, 
  Check, 
  Cpu, 
  Zap,
  Code2,
  Boxes
} from 'lucide-react';
import { TechIcon } from './TechIcons';

type SandboxTab = 'react' | 'javascript' | 'css' | 'python';

export const CurvedBentoGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<SandboxTab>('react');
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  
  // Interactive React Sandbox state
  const [counter, setCounter] = useState(5);
  const [liked, setLiked] = useState(false);
  
  // Interactive JS Filter state
  const [jsRunning, setJsRunning] = useState(false);

  // Interactive CSS Theme state
  const [cssRadius, setCssRadius] = useState<'rounded' | 'pill' | 'sharp'>('rounded');
  const [cssGlow, setCssGlow] = useState(true);

  // Interactive Python state
  const [pyExecuted, setPyExecuted] = useState(false);

  // 3D Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [6, -6]), {
    stiffness: 140,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-6, 6]), {
    stiffness: 140,
    damping: 18,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const runJsPipeline = () => {
    setJsRunning(true);
    setTimeout(() => {
      setJsRunning(false);
    }, 300);
  };

  return (
    <div 
      className="relative w-full max-w-xl mx-auto perspective-1000 select-none py-2"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-5 sm:p-6 border border-white/10 shadow-2xl shadow-cyan-950/40 transition-all duration-300 ring-1 ring-cyan-500/20"
      >
        {/* Specular top gloss light line */}
        <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />

        {/* Ambient 3D Glow Blobs */}
        <div 
          className="absolute -top-12 -right-12 w-56 h-56 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none -z-10" 
          aria-hidden="true" 
        />
        <div 
          className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-600/20 rounded-full blur-2xl pointer-events-none -z-10" 
          aria-hidden="true" 
        />

        {/* Bento Header: 3D Sandbox Tabs */}
        <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-xs font-black text-cyan-300 uppercase tracking-wider font-mono">
              Interactive 3D Sandbox
            </span>
          </div>

          {/* Sandbox Technology Switcher */}
          <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-white/10">
            <button
              type="button"
              onClick={() => setActiveTab('react')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'react'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <TechIcon name="react" className="w-3.5 h-3.5" />
              <span>React</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('javascript')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'javascript'
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <TechIcon name="javascript" className="w-3.5 h-3.5" />
              <span>JS</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('css')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'css'
                  ? 'bg-sky-400 text-slate-950 shadow-md shadow-sky-400/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <TechIcon name="css" className="w-3.5 h-3.5" />
              <span>CSS</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('python')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'python'
                  ? 'bg-emerald-400 text-slate-950 shadow-md shadow-emerald-400/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <TechIcon name="python" className="w-3.5 h-3.5" />
              <span>Python</span>
            </button>
          </div>
        </div>

        {/* Bento Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
          
          {/* Card 1: Interactive Live Code Playground (Span 12) */}
          <div className="sm:col-span-12 bg-slate-950/90 rounded-2xl p-4 text-white border border-white/10 shadow-inner flex flex-col justify-between">
            {/* Window title bar */}
            <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block shadow-sm shadow-rose-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block shadow-sm shadow-amber-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block shadow-sm shadow-emerald-500/50" />
                <span className="text-[11px] font-mono text-slate-400 ml-2">
                  {activeTab === 'react' && 'CounterEngine.tsx'}
                  {activeTab === 'javascript' && 'arrayPipeline.js'}
                  {activeTab === 'css' && '3d-tokens.css'}
                  {activeTab === 'python' && 'data_analytics.py'}
                </span>
              </div>
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded-md border border-cyan-700/60 flex items-center gap-1 shadow-xs">
                <Zap className="w-3 h-3 text-cyan-400" /> Live VM Active
              </span>
            </div>

            {/* TAB CONTENT: REACT */}
            {activeTab === 'react' && (
              <div>
                <div className="text-xs font-mono text-slate-300 space-y-0.5 mb-3 bg-[#080C14] p-3 rounded-xl border border-white/5">
                  <div className="text-slate-500 text-[11px]">// React 19 State Synchronization &amp; Hooks</div>
                  <div><span className="text-purple-400">const</span> [<span className="text-cyan-300">count</span>, <span className="text-blue-300">setCount</span>] = <span className="text-emerald-400">useState</span>(<span className="text-amber-300">{counter}</span>);</div>
                  <div><span className="text-purple-400">const</span> <span className="text-blue-300">handlePress</span> = () =&gt; <span className="text-emerald-400">setCount</span>(c =&gt; c + 1);</div>
                </div>

                {/* Interactive React Mini-Preview */}
                <div className="bg-slate-900 p-3 rounded-xl border border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-300 font-medium">State Value:</span>
                    <span className="px-2.5 py-0.5 bg-cyan-500/20 text-cyan-300 rounded-md font-mono text-xs font-bold border border-cyan-500/40 shadow-xs">
                      {counter}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setCounter((c) => c + 1)}
                      className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-cyan-500/25 active:scale-95 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Increment +1</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setLiked(!liked)}
                      className={`p-1.5 px-2.5 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                        liked 
                          ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-sm shadow-rose-500/20' 
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                      }`}
                      title="Toggle state"
                    >
                      {liked ? '❤️ Liked' : '🤍 Like'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: JAVASCRIPT */}
            {activeTab === 'javascript' && (
              <div>
                <div className="text-xs font-mono text-slate-300 space-y-0.5 mb-3 bg-[#080C14] p-3 rounded-xl border border-white/5">
                  <div className="text-slate-500 text-[11px]">// Functional Array Transformation Pipeline</div>
                  <div><span className="text-purple-400">const</span> <span className="text-cyan-300">result</span> = data.<span className="text-emerald-400">filter</span>(x =&gt; x.score &gt;= <span className="text-amber-300">90</span>).<span className="text-emerald-400">map</span>(x =&gt; x.name);</div>
                </div>

                <div className="bg-slate-900 p-3 rounded-xl border border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-300">
                    <span className="text-slate-500">&gt;</span>
                    {jsRunning ? (
                      <span className="text-amber-400 animate-pulse font-bold">Computing pipeline output...</span>
                    ) : (
                      <span className="text-emerald-400 font-semibold">[ &apos;React UI&apos;, &apos;Web Standards&apos;, &apos;Clean Code&apos; ]</span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={runJsPipeline}
                    className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-md shadow-amber-400/25"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Script</span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB CONTENT: CSS */}
            {activeTab === 'css' && (
              <div>
                <div className="text-xs font-mono text-slate-300 space-y-0.5 mb-3 bg-[#080C14] p-3 rounded-xl border border-white/5">
                  <div className="text-slate-500 text-[11px]">// Dynamic 3D CSS Variables &amp; Glow Tokens</div>
                  <div><span className="text-purple-400">--card-radius</span>: <span className="text-amber-300">{cssRadius === 'rounded' ? '16px' : cssRadius === 'pill' ? '999px' : '4px'}</span>;</div>
                  <div><span className="text-purple-400">--glow-fx</span>: <span className="text-emerald-400">{cssGlow ? '0 0 25px rgba(6,182,212,0.6)' : 'none'}</span>;</div>
                </div>

                <div className="bg-slate-900 p-2.5 rounded-xl border border-white/10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    {(['rounded', 'pill', 'sharp'] as const).map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setCssRadius(r)}
                        className={`px-2 py-1 rounded text-[11px] font-mono capitalize transition-all cursor-pointer ${
                          cssRadius === r
                            ? 'bg-cyan-500 text-slate-950 font-bold shadow-xs'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setCssGlow(!cssGlow)}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all border cursor-pointer ${
                      cssGlow
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-sm shadow-cyan-500/20'
                        : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}
                  >
                    {cssGlow ? '✨ Neon On' : '⚪ Glow Off'}
                  </button>
                </div>
              </div>
            )}

            {/* TAB CONTENT: PYTHON */}
            {activeTab === 'python' && (
              <div>
                <div className="text-xs font-mono text-slate-300 space-y-0.5 mb-3 bg-[#080C14] p-3 rounded-xl border border-white/5">
                  <div className="text-slate-500 text-[11px]"># Python 3 algorithm &amp; data parsing</div>
                  <div><span className="text-purple-400">def</span> <span className="text-blue-300">get_developer_skills</span>():</div>
                  <div className="pl-3"><span className="text-purple-400">return</span> [<span className="text-emerald-300">&quot;HTML&quot;</span>, <span className="text-emerald-300">&quot;CSS&quot;</span>, <span className="text-emerald-300">&quot;JS&quot;</span>, <span className="text-emerald-300">&quot;React&quot;</span>, <span className="text-emerald-300">&quot;Python&quot;</span>]</div>
                </div>

                <div className="bg-slate-900 p-3 rounded-xl border border-white/10 flex items-center justify-between gap-3">
                  <div className="font-mono text-xs text-slate-300 flex items-center gap-1.5">
                    <span className="text-slate-500">&gt;&gt;&gt;</span>
                    {pyExecuted ? (
                      <span className="text-emerald-400 font-semibold">{`{'status': 'ready', 'skills_count': 9}`}</span>
                    ) : (
                      <span className="text-slate-400">Ready to execute script...</span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setPyExecuted(!pyExecuted)}
                    className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-md shadow-emerald-500/25"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{pyExecuted ? 'Reset' : 'Execute'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Card 2: 3D Core Stack Quick Grid (Span 7) */}
          <div className="sm:col-span-7 bg-slate-950/80 rounded-2xl p-4 border border-white/10 flex flex-col justify-between hover:border-cyan-500/40 transition-colors shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
                    Direct Core Stack
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800/50">
                  9 Techs
                </span>
              </div>
              
              {/* Direct skill capsules */}
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { name: 'React', icon: 'react' },
                  { name: 'JavaScript', icon: 'javascript' },
                  { name: 'HTML5', icon: 'html' },
                  { name: 'CSS3', icon: 'css' },
                  { name: 'Python', icon: 'python' },
                  { name: 'Git', icon: 'git' },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-lg border border-white/10 text-xs font-medium text-slate-200 shadow-2xs hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                  >
                    <TechIcon name={tech.icon} className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate font-semibold text-[11px]">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 font-medium text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Foundation</span>
              </span>
              <a href="#skills" className="text-cyan-400 font-semibold hover:underline font-mono text-[11px]">
                Explore Lab &rarr;
              </a>
            </div>
          </div>

          {/* Card 3: Responsive Viewport Tester (Span 5) */}
          <div className="sm:col-span-5 bg-slate-950/80 rounded-2xl p-4 border border-white/10 flex flex-col justify-between hover:border-cyan-500/40 transition-colors shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-200 font-mono">
                Responsive View
              </span>
              <div className="flex items-center bg-slate-900 p-0.5 rounded-lg border border-white/10 gap-0.5">
                <button
                  type="button"
                  onClick={() => setActiveDevice('desktop')}
                  className={`p-1 rounded cursor-pointer transition-colors ${
                    activeDevice === 'desktop' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Desktop"
                >
                  <Laptop className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDevice('tablet')}
                  className={`p-1 rounded cursor-pointer transition-colors ${
                    activeDevice === 'tablet' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Tablet"
                >
                  <Tablet className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDevice('mobile')}
                  className={`p-1 rounded cursor-pointer transition-colors ${
                    activeDevice === 'mobile' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Mobile"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Viewport spec card */}
            <div className="bg-slate-900/90 rounded-xl p-2.5 border border-white/10 text-center">
              {activeDevice === 'desktop' && (
                <div>
                  <div className="text-[11px] font-bold text-slate-200 flex items-center justify-center gap-1">
                    <Laptop className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Desktop (1280px+)</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">Fluid multi-col grid</p>
                </div>
              )}
              {activeDevice === 'tablet' && (
                <div>
                  <div className="text-[11px] font-bold text-slate-200 flex items-center justify-center gap-1">
                    <Tablet className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Tablet (768px - 1024px)</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">Adaptive 2-column flex</p>
                </div>
              )}
              {activeDevice === 'mobile' && (
                <div>
                  <div className="text-[11px] font-bold text-slate-200 flex items-center justify-center gap-1">
                    <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Mobile (&lt;640px)</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">Touch 44px min targets</p>
                </div>
              )}
            </div>

            <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-between">
              <span>WCAG 2.1 AA</span>
              <span className="text-emerald-400 font-semibold">100% Mobile Ready</span>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
