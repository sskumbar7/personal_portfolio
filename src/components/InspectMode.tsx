import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Scan, X } from 'lucide-react';
import { inspectStore, useInspectActive } from '../utils/inspectStore';

interface Annotation {
  top: number;
  left: number;
  width: number;
  height: number;
  note: string;
  token?: string;
}

/**
 * Inspect mode — the site explains itself.
 *
 * Overlays Figma-style selection boxes and numbered markers on elements
 * carrying a `data-inspect` attribute, revealing the design decision behind
 * each one (plus an optional `data-inspect-token`). Also draws the layout
 * container guides while active. Toggled from the Navigation bar via
 * inspectStore. Desktop only.
 */
export function InspectMode() {
  const active = useInspectActive();
  const setActive = (v: boolean) => inspectStore.set(v);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [docHeight, setDocHeight] = useState(0);
  const [guideLeft, setGuideLeft] = useState(0);

  // Leaving the page exits the mode
  useEffect(() => () => inspectStore.set(false), []);

  const measure = useCallback(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-inspect]'));
    setAnnotations(
      els
        .map((el) => {
          const r = el.getBoundingClientRect();
          return {
            top: r.top + window.scrollY,
            left: r.left + window.scrollX,
            width: r.width,
            height: r.height,
            note: el.dataset.inspect || '',
            token: el.dataset.inspectToken
          };
        })
        .filter((a) => a.width > 0 && a.height > 0)
    );
    setDocHeight(document.body.scrollHeight);
    setGuideLeft(Math.max((document.documentElement.clientWidth - 1180) / 2 + 32, 16));
  }, []);

  useEffect(() => {
    if (!active) {
      setOpenIdx(null);
      return;
    }
    measure();

    let raf = 0;
    const onScrollOrResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(false);
    };
    window.addEventListener('resize', onScrollOrResize);
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onScrollOrResize);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('keydown', onKey);
    };
  }, [active, measure]);

  const handleSize = 6;
  const handleStyle = (x: 'left' | 'right', y: 'top' | 'bottom') => ({
    position: 'absolute' as const,
    width: handleSize,
    height: handleSize,
    background: '#FFFFFF',
    border: '1.5px solid #1D857E',
    borderRadius: '1px',
    [x]: -handleSize / 2 - 1,
    [y]: -handleSize / 2 - 1
  });

  return (
    <>
      {/* Mode toolbar — floats bottom-center like Figma's, clear of the nav */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="hidden lg:flex fixed bottom-6 z-[70] items-center gap-3"
            style={{
              left: '50%',
              x: '-50%',
              padding: '9px 10px 9px 18px',
              borderRadius: '24px',
              background: '#111827',
              color: 'rgba(255, 255, 255, 0.92)',
              fontSize: '13px',
              fontWeight: 500,
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)'
            }}
          >
            <Scan size={14} style={{ color: '#3BC5A1', flexShrink: 0 }} />
            <span>Inspect mode</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.45)', fontWeight: 400 }}>
              hover a number for the why
            </span>
            <kbd
              style={{
                fontSize: '10px',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                borderRadius: '4px',
                padding: '1px 6px',
                color: 'rgba(255, 255, 255, 0.6)'
              }}
            >
              esc
            </kbd>
            <button
              onClick={() => setActive(false)}
              aria-label="Exit inspect mode"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                background: 'rgba(255, 255, 255, 0.12)',
                color: '#FFFFFF',
                transition: 'background 0.15s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)')}
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: docHeight,
              pointerEvents: 'none',
              zIndex: 55
            }}
          >
            {/* Container guides */}
            {[guideLeft, undefined].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  [i === 0 ? 'left' : 'right']: guideLeft,
                  width: 0,
                  borderLeft: '1px dashed rgba(29, 133, 126, 0.25)'
                }}
              />
            ))}

            {annotations.map((a, idx) => {
              const chipBelow = a.top < 140;
              return (
                <div key={idx}>
                  {/* Selection box */}
                  <div
                    style={{
                      position: 'absolute',
                      top: a.top - 4,
                      left: a.left - 4,
                      width: a.width + 8,
                      height: a.height + 8,
                      border: '1.5px solid #1D857E',
                      borderRadius: '2px'
                    }}
                  >
                    <div style={handleStyle('left', 'top')} />
                    <div style={handleStyle('right', 'top')} />
                    <div style={handleStyle('left', 'bottom')} />
                    <div style={handleStyle('right', 'bottom')} />
                  </div>

                  {/* Numbered marker + note chip */}
                  <div
                    style={{
                      position: 'absolute',
                      top: a.top - 4,
                      left: a.left + a.width + 4,
                      transform: 'translate(-50%, -50%)',
                      pointerEvents: 'auto'
                    }}
                    onMouseEnter={() => setOpenIdx(idx)}
                    onMouseLeave={() => setOpenIdx(null)}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        background: '#1D857E',
                        color: '#FFFFFF',
                        fontSize: 11,
                        fontWeight: 600,
                        fontFamily: 'Inter, sans-serif',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid #FFFFFF',
                        boxShadow: '0 2px 8px rgba(29, 133, 126, 0.4)',
                        cursor: 'default'
                      }}
                    >
                      {idx + 1}
                    </div>

                    <AnimatePresence>
                      {openIdx === idx && (
                        <motion.div
                          initial={{ opacity: 0, y: chipBelow ? -4 : 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          style={{
                            position: 'absolute',
                            [chipBelow ? 'top' : 'bottom']: 26,
                            right: -8,
                            width: 260,
                            background: '#111827',
                            color: 'rgba(255, 255, 255, 0.92)',
                            borderRadius: '10px',
                            padding: '12px 14px',
                            fontSize: 12.5,
                            lineHeight: 1.5,
                            fontFamily: 'Work Sans, sans-serif',
                            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)'
                          }}
                        >
                          {a.note}
                          {a.token && (
                            <div
                              style={{
                                marginTop: 8,
                                fontSize: 11,
                                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                                color: '#3BC5A1'
                              }}
                            >
                              {a.token}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
