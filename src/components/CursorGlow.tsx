import { useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from 'motion/react';

/**
 * CursorGlow — a soft, blurred trailing glow scoped to its parent container.
 *
 * Renders inside the Hero section only. Uses a canvas with a blur filter
 * for a dreamy, non-distracting wash of color that follows the cursor.
 *
 * • Scoped to parent container (position: absolute, not fixed)
 * • Blurred for a soft, ambient feel
 * • Desktop only / respects prefers-reduced-motion
 */

const TRAIL_LENGTH = 15;
const DOT_MAX_RADIUS = 5;
const GLOW_RADIUS = 80;
const LERP_FACTOR = 0.2;

export function CursorGlow() {
  const prefersReducedMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const trail = useRef<{ x: number; y: number }[]>([]);
  const raf = useRef<number>(0);
  const isActive = useRef(false);

  // Initialize trail
  if (trail.current.length === 0) {
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      trail.current.push({ x: -200, y: -200 });
    }
  }

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = container.getBoundingClientRect();

    // Resize canvas to container
    if (canvas.width !== rect.width || canvas.height !== rect.height) {
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!isActive.current) {
      raf.current = requestAnimationFrame(animate);
      return;
    }

    // Update trail
    trail.current[0].x += (mouse.current.x - trail.current[0].x) * LERP_FACTOR;
    trail.current[0].y += (mouse.current.y - trail.current[0].y) * LERP_FACTOR;

    for (let i = 1; i < TRAIL_LENGTH; i++) {
      const prev = trail.current[i - 1];
      const curr = trail.current[i];
      const factor = LERP_FACTOR * (1 - i / TRAIL_LENGTH * 0.5);
      curr.x += (prev.x - curr.x) * factor;
      curr.y += (prev.y - curr.y) * factor;
    }

    // Draw soft glow at lead point
    const lead = trail.current[0];
    const glowGradient = ctx.createRadialGradient(
      lead.x, lead.y, 0,
      lead.x, lead.y, GLOW_RADIUS
    );
    glowGradient.addColorStop(0, 'rgba(29, 133, 126, 0.10)');
    glowGradient.addColorStop(0.5, 'rgba(29, 133, 126, 0.04)');
    glowGradient.addColorStop(1, 'rgba(29, 133, 126, 0)');
    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(lead.x, lead.y, GLOW_RADIUS, 0, Math.PI * 2);
    ctx.fill();

    // Draw soft trail dots
    for (let i = TRAIL_LENGTH - 1; i >= 0; i--) {
      const point = trail.current[i];
      const progress = 1 - i / TRAIL_LENGTH;
      const radius = DOT_MAX_RADIUS * progress;
      const alpha = 0.2 * progress * progress;

      if (radius < 0.5) continue;

      ctx.beginPath();
      ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(29, 133, 126, ${alpha})`;
      ctx.fill();
    }

    raf.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      // Convert to coordinates relative to the container
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      isActive.current = true;
    };

    const handleMouseLeave = () => {
      isActive.current = false;
    };

    const handleMouseEnter = () => {
      isActive.current = true;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseenter', handleMouseEnter);

    raf.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(raf.current);
    };
  }, [prefersReducedMotion, animate]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          // Blur the canvas output for a dreamy, soft feel
          filter: 'blur(8px)',
        }}
      />
    </div>
  );
}
