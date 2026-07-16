import { useEffect, useState } from 'react';
import { Hash } from 'lucide-react';
import { shadows } from '../utils/shadows';

interface LayerItem {
  el: HTMLElement;
  name: string;
}

/**
 * Case-study wayfinding styled as a miniature Figma layers panel.
 *
 * Collapsed: a slim rail of frame icons fixed to the left edge; the active
 * section reads teal. Hover or keyboard focus expands it into a labeled
 * panel; clicking a layer scrolls to that section. Names are derived from
 * each top-level <section>'s first heading — sections without headings get
 * Figma-style "Frame NN" names. Desktop only.
 */
export function LayersPanel() {
  const [layers, setLayers] = useState<LayerItem[]>([]);
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('section')).filter(
      (s) => !s.parentElement?.closest('section')
    );
    if (els.length < 3) return; // not worth a panel on short pages

    setLayers(
      els.map((el, i) => {
        // Explicit name wins; otherwise derive from the first heading
        const heading = el.querySelector('h1, h2, h3');
        let name =
          el.dataset.layerName ||
          heading?.textContent?.trim() ||
          `Frame ${String(i + 1).padStart(2, '0')}`;
        if (name.length > 26) name = name.slice(0, 26).trimEnd() + '…';
        return { el, name };
      })
    );

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = els.indexOf(entry.target as HTMLElement);
            if (idx >= 0) setActive(idx);
          }
        }
      },
      // a horizontal band around the viewport's upper-middle decides "current"
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  if (layers.length === 0) return null;

  const scrollTo = (el: HTMLElement) => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <nav
      aria-label="Page sections"
      className="hidden min-[1360px]:block fixed left-5 top-1/2 -translate-y-1/2 z-40"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onFocus={() => setExpanded(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setExpanded(false);
      }}
    >
      <div
        style={{
          width: expanded ? '224px' : '36px',
          transition: 'width 0.25s ease',
          overflow: 'hidden',
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          borderRadius: '12px',
          boxShadow: shadows.card,
          padding: '8px 5px'
        }}
      >
        <div
          style={{
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(17, 24, 39, 0.35)',
            fontFamily: 'Inter, sans-serif',
            padding: '2px 7px 8px',
            whiteSpace: 'nowrap',
            opacity: expanded ? 1 : 0,
            transition: 'opacity 0.2s ease',
            height: expanded ? 'auto' : 0,
            paddingBottom: expanded ? '8px' : 0
          }}
        >
          Layers
        </div>

        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }} className="space-y-0.5">
          {layers.map((layer, idx) => {
            const isActive = idx === active;
            return (
              <li key={idx}>
                <button
                  onClick={() => scrollTo(layer.el)}
                  aria-current={isActive ? 'true' : undefined}
                  className="w-full text-left"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '5px 7px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    fontSize: '12px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? '#1D857E' : '#6B7280',
                    background: isActive ? 'rgba(29, 133, 126, 0.08)' : 'transparent',
                    transition: 'background 0.15s ease, color 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.background = 'rgba(0, 0, 0, 0.04)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <Hash
                    size={11}
                    style={{
                      flexShrink: 0,
                      color: isActive ? '#1D857E' : 'rgba(107, 114, 128, 0.55)'
                    }}
                  />
                  <span
                    style={{
                      opacity: expanded ? 1 : 0,
                      transition: 'opacity 0.2s ease',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {layer.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
