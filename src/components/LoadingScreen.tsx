import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  name: string;
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ name, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 15;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] bg-[#06080F] flex flex-col items-center justify-center pointer-events-auto select-none"
        >
          <div className="w-full max-w-xs px-6 flex flex-col items-center text-center space-y-6">
            {/* 3D Glowing Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-violet-600 p-[1.5px] shadow-[0_0_40px_rgba(56,189,248,0.3)]"
            >
              <div className="w-full h-full bg-[#0A0E1A] rounded-[15px] flex items-center justify-center">
                <span className="font-heading font-black text-2xl text-cyan-300">
                  {name.charAt(0) || 'P'}
                </span>
              </div>
            </motion.div>

            {/* Name and Subtitle */}
            <div className="space-y-1">
              <div className="font-heading font-bold text-base tracking-tight text-white">
                {name}
              </div>
              <div className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
                Frontend Developer
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full space-y-2">
              <div className="h-1 w-full bg-slate-800/80 rounded-full overflow-hidden border border-white/5">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                <span>INITIALIZING SYSTEM</span>
                <span className="text-cyan-400 font-bold">{Math.min(progress, 100)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
