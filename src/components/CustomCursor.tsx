import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'button' | 'project'>('default');
  const [cursorLabel, setCursorLabel] = useState<string>('');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.35 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (isTouch) return;

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveProject = target.closest('[data-cursor="project"]');
      const interactiveButton = target.closest('button, a, [role="button"], input, textarea, select, [tabindex="0"]');
      const customCursorEl = target.closest('[data-cursor]');

      if (interactiveProject) {
        setCursorType('project');
        setCursorLabel('VIEW');
      } else if (customCursorEl) {
        const val = customCursorEl.getAttribute('data-cursor');
        if (val === 'view' || val === 'explore') {
          setCursorType('project');
          setCursorLabel(val.toUpperCase());
        } else {
          setCursorType('button');
          setCursorLabel('');
        }
      } else if (interactiveButton) {
        setCursorType('button');
        setCursorLabel('');
      } else {
        setCursorType('default');
        setCursorLabel('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none">
      {/* 1. BUTTON HOVER: Compact Glowing Cyber Arrowhead (Aligned exactly at click tip) */}
      {cursorType === 'button' && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none origin-top-left"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: 0,
            translateY: 0,
          }}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 450 }}
        >
          <div className="relative -top-0.5 -left-0.5">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="drop-shadow-[0_0_8px_rgba(56,189,248,0.9)] filter"
            >
              <path
                d="M2 2L9 22L12.5 13.5L21 10L2 2Z"
                fill="url(#compactArrowGradient)"
                stroke="#ffffff"
                strokeWidth="1.75"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="compactArrowGradient" x1="2" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#38BDF8" />
                  <stop offset="0.6" stopColor="#818CF8" />
                  <stop offset="1" stopColor="#A855F7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      )}

      {/* 2. PROJECT HOVER: Sleek 'VIEW' Disc */}
      {cursorType === 'project' && (
        <motion.div
          className="fixed top-0 left-0 rounded-full flex items-center justify-center border-2 border-cyan-400/80 bg-slate-950/85 backdrop-blur-md shadow-[0_0_18px_rgba(56,189,248,0.5)] pointer-events-none font-mono text-[10px] font-black text-cyan-300 tracking-wider"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: '-50%',
            translateY: '-50%',
            width: 52,
            height: 52,
          }}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 350 }}
        >
          {cursorLabel}
        </motion.div>
      )}

      {/* 3. DEFAULT STATE: Minimal Glowing Spring Ring & Dot */}
      {cursorType === 'default' && (
        <>
          <motion.div
            className="fixed top-0 left-0 rounded-full border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-[1px] pointer-events-none shadow-[0_0_10px_rgba(56,189,248,0.25)]"
            style={{
              x: smoothX,
              y: smoothY,
              translateX: '-50%',
              translateY: '-50%',
              width: 22,
              height: 22,
            }}
          />
          <motion.div
            className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff] pointer-events-none"
            style={{
              x: mouseX,
              y: mouseY,
              translateX: '-50%',
              translateY: '-50%',
            }}
          />
        </>
      )}
    </div>
  );
};
