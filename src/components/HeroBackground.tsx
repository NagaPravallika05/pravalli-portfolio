import React, { useEffect, useRef, useState } from 'react';

export const HeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left - width / 2) / (width / 2);
      const y = (e.clientY - rect.top - height / 2) / (height / 2);
      mousePos.current.targetX = x;
      mousePos.current.targetY = y;
    };

    if (!isTouch) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // 3D Particles & Nodes
    const PARTICLE_COUNT = 90;
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      size: number;
      color: string;
      speed: number;
    }> = [];

    const colors = [
      'rgba(56, 189, 248, ',  // Sky Blue
      'rgba(99, 102, 241, ',  // Indigo
      'rgba(168, 85, 247, ',  // Purple
      'rgba(52, 211, 153, ',  // Emerald
      'rgba(244, 114, 182, ', // Rose
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 1200;
      const y = (Math.random() - 0.5) * 900;
      const z = Math.random() * 800 + 100;
      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        size: Math.random() * 2.2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.4 + 0.2,
      });
    }

    // 3D Rotating Polyhedron vertices (Icosahedron / Cube wireframe)
    const cubeVertices = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
    ].map(([x, y, z]) => ({ x: x * 140, y: y * 140, z: z * 140 }));

    const cubeEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // Back face
      [4, 5], [5, 6], [6, 7], [7, 4], // Front face
      [0, 4], [1, 5], [2, 6], [3, 7], // Connecting edges
    ];

    let angleX = 0;
    let angleY = 0;
    let angleZ = 0;
    const focalLength = 550;

    const render = () => {
      // Lerp mouse
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      angleX += 0.003 + mousePos.current.y * 0.005;
      angleY += 0.005 + mousePos.current.x * 0.005;
      angleZ += 0.002;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // 3D Particles projection
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.z -= p.speed;
        if (p.z <= 10) {
          p.z = 800;
        }

        // Parallax offset
        const curX = p.x - mousePos.current.x * 120;
        const curY = p.y - mousePos.current.y * 120;

        const scale = focalLength / (focalLength + p.z);
        const projX = centerX + curX * scale;
        const projY = centerY + curY * scale;
        const radius = p.size * scale;
        const alpha = Math.max(0.1, Math.min(0.85, (1 - p.z / 800) * 0.9));

        if (projX > 0 && projX < width && projY > 0 && projY < height) {
          ctx.beginPath();
          ctx.arc(projX, projY, Math.max(0.8, radius), 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${alpha})`;
          ctx.shadowColor = `${p.color}0.8)`;
          ctx.shadowBlur = radius * 4;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Connect nearby particles in 3D
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const distZ = Math.abs(p.z - p2.z);
            if (distZ < 100) {
              const curX2 = p2.x - mousePos.current.x * 120;
              const curY2 = p2.y - mousePos.current.y * 120;
              const scale2 = focalLength / (focalLength + p2.z);
              const projX2 = centerX + curX2 * scale2;
              const projY2 = centerY + curY2 * scale2;

              const dx = projX - projX2;
              const dy = projY - projY2;
              const dist2D = Math.sqrt(dx * dx + dy * dy);

              if (dist2D < 110) {
                const lineAlpha = (1 - dist2D / 110) * (1 - p.z / 800) * 0.25;
                ctx.beginPath();
                ctx.moveTo(projX, projY);
                ctx.lineTo(projX2, projY2);
                ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
                ctx.lineWidth = 0.75;
                ctx.stroke();
              }
            }
          }
        }
      }

      // Rotate and draw floating 3D Wireframe Polyhedron
      const rotatedVertices = cubeVertices.map((v) => {
        // Rotate Y
        let x1 = v.x * Math.cos(angleY) - v.z * Math.sin(angleY);
        let z1 = v.x * Math.sin(angleY) + v.z * Math.cos(angleY);

        // Rotate X
        let y2 = v.y * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = v.y * Math.sin(angleX) + z1 * Math.cos(angleX);

        // Rotate Z
        let x3 = x1 * Math.cos(angleZ) - y2 * Math.sin(angleZ);
        let y3 = x1 * Math.sin(angleZ) + y2 * Math.cos(angleZ);

        // Position slightly offset to right-top in 3D
        const worldX = x3 + (width > 768 ? width * 0.25 : 0) - mousePos.current.x * 80;
        const worldY = y3 - 60 - mousePos.current.y * 80;
        const worldZ = z2 + 250;

        const scale = focalLength / (focalLength + worldZ);
        return {
          x: centerX + worldX * scale,
          y: centerY + worldY * scale,
          z: worldZ,
          scale,
        };
      });

      // Draw cube edges with neon gradient glow
      cubeEdges.forEach(([startIdx, endIdx]) => {
        const p1 = rotatedVertices[startIdx];
        const p2 = rotatedVertices[endIdx];

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.35)';
        ctx.lineWidth = 1.2;
        ctx.shadowColor = 'rgba(6, 182, 212, 0.6)';
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Draw cube vertices glowing points
      rotatedVertices.forEach((v) => {
        ctx.beginPath();
        ctx.arc(v.x, v.y, 3 * v.scale, 0, Math.PI * 2);
        ctx.fillStyle = '#38BDF8';
        ctx.shadowColor = '#00F0FF';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (!isTouch) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTouchDevice]);

  return (
    <div 
      className="absolute inset-0 pointer-events-none overflow-hidden z-0" 
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-85"
      />
      {/* 3D Radiant Ambient Spotlights */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Soft gradient edge vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080C14]/40 via-transparent to-[#080C14] pointer-events-none" />
    </div>
  );
};
