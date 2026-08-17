import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  /** Final value to count to */
  to: number;
  /** Milliseconds for the full count */
  duration?: number;
  /** Rendered before/after the number */
  prefix?: string;
  suffix?: string;
}

/**
 * Counts from zero to `to` when scrolled into view, once.
 *
 * Uses tabular figures so the width never jitters mid-count, and skips
 * straight to the final value for reduced-motion users.
 */
export function CountUp({ to, duration = 1200, prefix = '', suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);
  const fallbackRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || startedRef.current) continue;
          startedRef.current = true;
          io.disconnect();

          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // easeOutCubic: fast, then settles
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * to));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);

          // The number is content, not decoration: if rAF is throttled
          // (backgrounded tab), snap to the real value rather than stall.
          fallbackRef.current = setTimeout(() => setValue(to), duration + 150);
        }
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (fallbackRef.current) clearTimeout(fallbackRef.current);
    };
  }, [to, duration]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
