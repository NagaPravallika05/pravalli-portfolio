import React from 'react';
import { ShoppingBag, CheckSquare, Layers, CloudSun, Terminal, ExternalLink } from 'lucide-react';

interface ProjectPreviewProps {
  type?: 'ecommerce' | 'dashboard' | 'component' | 'landing';
  title: string;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ type, title }) => {
  if (type === 'ecommerce') {
    return (
      <div className="w-full h-52 bg-[#050811] border-b border-white/10 p-3.5 flex flex-col justify-between overflow-hidden relative group/preview">
        {/* Cyber browser header bar */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-xs" />
          </div>
          <span className="text-[10px] font-mono text-cyan-300 bg-slate-900 px-2.5 py-0.5 rounded-md border border-cyan-500/30 shadow-inner">
            storefront.io/catalog
          </span>
          <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" />
        </div>

        {/* 3D Storefront Grid */}
        <div className="grid grid-cols-3 gap-2 my-auto">
          {[
            { name: 'Quantum Watch', price: '$189', color: 'from-cyan-500/20 to-blue-600/30', border: 'border-cyan-500/30' },
            { name: 'Spatial Audio', price: '$129', color: 'from-indigo-500/20 to-purple-600/30', border: 'border-indigo-500/30' },
            { name: 'Onyx Backpack', price: '$159', color: 'from-emerald-500/20 to-teal-600/30', border: 'border-emerald-500/30' },
          ].map((item, i) => (
            <div key={i} className={`bg-slate-900/90 rounded-xl p-2 border ${item.border} shadow-lg shadow-black/40 hover:scale-105 transition-transform`}>
              <div className={`w-full h-12 rounded-lg bg-gradient-to-br ${item.color} mb-1.5 flex items-center justify-center border border-white/10`}>
                <span className="text-[9px] font-mono text-cyan-300 font-bold">ITEM 0{i+1}</span>
              </div>
              <div className="text-[10px] font-bold text-white truncate">{item.name}</div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[9px] text-cyan-400 font-mono font-bold">{item.price}</span>
                <span className="text-[8px] bg-cyan-950 text-cyan-300 border border-cyan-800/60 px-1 rounded font-mono">Cart +</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer status bar */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5">
          <span className="flex items-center gap-1.5 font-mono text-[9px] text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Global Cart State
          </span>
          <span className="font-mono text-[9px] text-cyan-400">Responsive UI</span>
        </div>
      </div>
    );
  }

  if (type === 'dashboard') {
    return (
      <div className="w-full h-52 bg-[#050811] border-b border-white/10 p-3.5 flex flex-col justify-between overflow-hidden relative">
        {/* Cyber browser header bar */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-xs" />
          </div>
          <span className="text-[10px] font-mono text-cyan-300 bg-slate-900 px-2.5 py-0.5 rounded-md border border-cyan-500/30 shadow-inner">
            kanban.dev/matrix
          </span>
          <CheckSquare className="w-3.5 h-3.5 text-cyan-400" />
        </div>

        {/* Kanban Board Columns */}
        <div className="grid grid-cols-3 gap-2 my-auto">
          {/* Column 1: Todo */}
          <div className="bg-slate-900/90 rounded-xl p-1.5 border border-white/10">
            <div className="text-[9px] font-bold text-slate-300 mb-1 flex items-center justify-between">
              <span>Backlog</span>
              <span className="text-[8px] bg-slate-800 text-slate-400 px-1 rounded font-mono">2</span>
            </div>
            <div className="bg-slate-950 p-1.5 rounded-lg border border-white/10 text-[9px] text-slate-300 shadow-2xs mb-1">
              3D Matrix setup
            </div>
            <div className="bg-slate-950 p-1.5 rounded-lg border border-white/10 text-[9px] text-slate-300 shadow-2xs">
              Async REST hook
            </div>
          </div>

          {/* Column 2: In Progress */}
          <div className="bg-cyan-950/40 rounded-xl p-1.5 border border-cyan-500/30">
            <div className="text-[9px] font-bold text-cyan-300 mb-1 flex items-center justify-between">
              <span>Sprint</span>
              <span className="text-[8px] bg-cyan-900 text-cyan-200 px-1 rounded font-mono">1</span>
            </div>
            <div className="bg-slate-950 p-1.5 rounded-lg border border-cyan-500/40 text-[9px] text-slate-100 shadow-2xs">
              <span className="text-[8px] text-cyan-400 font-bold block font-mono">PRIORITY</span>
              Web Component a11y
            </div>
          </div>

          {/* Column 3: Done */}
          <div className="bg-emerald-950/40 rounded-xl p-1.5 border border-emerald-500/30">
            <div className="text-[9px] font-bold text-emerald-300 mb-1 flex items-center justify-between">
              <span>Shipped</span>
              <span className="text-[8px] bg-emerald-900 text-emerald-200 px-1 rounded font-mono">3</span>
            </div>
            <div className="bg-slate-950 p-1.5 rounded-lg border border-emerald-500/40 text-[9px] text-slate-400 line-through">
              Refactor hooks
            </div>
          </div>
        </div>

        {/* Footer status bar */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5">
          <span className="font-mono text-[9px] text-slate-300">Drag &amp; Drop Dnd</span>
          <span className="font-mono text-[9px] text-cyan-400">React Redux Sync</span>
        </div>
      </div>
    );
  }

  if (type === 'component') {
    return (
      <div className="w-full h-52 bg-[#050811] border-b border-white/10 p-3.5 flex flex-col justify-between overflow-hidden relative">
        {/* Cyber browser header bar */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-xs" />
          </div>
          <span className="text-[10px] font-mono text-cyan-300 bg-slate-900 px-2.5 py-0.5 rounded-md border border-cyan-500/30 shadow-inner">
            design-tokens.system/ui
          </span>
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
        </div>

        {/* UI Primitives Showcase */}
        <div className="space-y-2 my-auto bg-slate-900/90 p-3 rounded-xl border border-white/10">
          <div className="flex items-center justify-between gap-2">
            <button type="button" className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-[10px] font-black rounded-lg shadow-md shadow-cyan-500/20">
              Primary 3D
            </button>
            <button type="button" className="px-2.5 py-1 bg-slate-950 text-slate-300 text-[10px] font-medium rounded-lg border border-white/10">
              Ghost Token
            </button>
            <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[9px] font-bold rounded-full">
              WCAG AA
            </span>
          </div>

          <div className="flex items-center gap-2 pt-1 border-t border-white/5">
            <div className="flex-1 bg-slate-950 h-6 rounded-lg px-2 flex items-center text-[10px] text-slate-400 font-mono border border-white/5">
              search tokens...
            </div>
            <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 flex items-center justify-center text-[10px] font-bold">
              ✓
            </div>
          </div>
        </div>

        {/* Footer status bar */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5">
          <span className="font-mono text-[9px] text-emerald-400">Zero Dependencies</span>
          <span className="font-mono text-[9px] text-cyan-400">Tailwind V4</span>
        </div>
      </div>
    );
  }

  // Fallback / Weather App
  return (
    <div className="w-full h-52 bg-[#050811] border-b border-white/10 p-3.5 flex flex-col justify-between overflow-hidden relative">
      {/* Cyber browser header bar */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-xs" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-xs" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-xs" />
        </div>
        <span className="text-[10px] font-mono text-cyan-300 bg-slate-900 px-2.5 py-0.5 rounded-md border border-cyan-500/30 shadow-inner">
          weather-satellite.live/forecast
        </span>
        <CloudSun className="w-3.5 h-3.5 text-cyan-400" />
      </div>

      {/* Weather Forecast */}
      <div className="bg-slate-900/90 rounded-xl p-3 border border-white/10 shadow-lg my-auto">
        <div className="flex items-center justify-between mb-1.5">
          <div>
            <div className="text-xs font-bold text-white">San Francisco, CA</div>
            <div className="text-[10px] text-cyan-300 font-mono">Atmospheric Live Node</div>
          </div>
          <div className="text-lg font-black text-cyan-400 font-mono">72°F</div>
        </div>
        <div className="grid grid-cols-4 gap-1 text-center pt-2 border-t border-white/10">
          {['Mon', 'Tue', 'Wed', 'Thu'].map((d, idx) => (
            <div key={d} className="bg-slate-950 p-1 rounded-lg text-[9px] text-slate-300 border border-white/5">
              <span className="font-bold block text-cyan-300">{d}</span>
              <span className="font-mono">{68 + idx}°</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer status bar */}
      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5">
        <span className="font-mono text-[9px] text-emerald-400">Live Async REST API</span>
        <span className="font-mono text-[9px] text-cyan-400">ES6+ Fetch</span>
      </div>
    </div>
  );
};
