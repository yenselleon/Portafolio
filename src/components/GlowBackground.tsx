"use client";

import React, { useEffect, useRef } from 'react';

interface GlowBackgroundProps {
  opacity?: number;
  blur?: string;
  colors?: string[];
}

/**
 * GlowBackground - Componente de alto rendimiento para fondos dinámicos.
 * Se adapta automáticamente al tamaño de su contenedor padre.
 */
export const GlowBackground: React.FC<GlowBackgroundProps> = ({ 
  opacity = 0.4, 
  blur = '80px',
  colors = ['#06b6d4', '#8b5cf6', '#3b82f6', '#0ea5e9', '#6366f1']
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    interface Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
    }

    const particles: Particle[] = [];
    const particleCount = 5; 

    const init = () => {
      // Tomamos el tamaño del padre para que se ajuste a la sección específica
      const parent = canvas.parentElement;
      if (!parent) return;
      
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width;
      canvas.height = height;

      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * (width * 0.3) + 200, 
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 0.4, 
          vy: (Math.random() - 0.5) * 0.4,
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'screen';

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -p.radius || p.x > width + p.radius) p.vx *= -1;
        if (p.y < -p.radius || p.y > height + p.radius) p.vy *= -1;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    init();
    render();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-1000"
      style={{ 
        filter: `blur(${blur})`,
        opacity: opacity 
      }}
    />
  );
};