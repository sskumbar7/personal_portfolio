import { useLayoutEffect } from 'react';

/**
 * Headless scroll-reveal: fades each top-level <section> on the current page
 * up into view as it enters the viewport. Drop one instance anywhere in a
 * page; it observes the document, so no per-section markup is needed.
 *
 * Pairs with the .reveal-section styles in index.css. No-ops entirely for
 * users who prefer reduced motion.
 */
export function SectionReveals() {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Outermost sections only, so nested sections don't double-animate
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section')).filter(
      (s) => !s.parentElement?.closest('section')
    );
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0 }
    );

    for (const s of sections) {
      s.classList.add('reveal-section');
      io.observe(s);
    }

    return () => {
      io.disconnect();
      for (const s of sections) s.classList.remove('reveal-section', 'is-visible');
    };
  }, []);

  return null;
}
