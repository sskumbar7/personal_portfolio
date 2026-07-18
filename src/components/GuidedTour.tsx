import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Compass, X } from 'lucide-react';
import { shadows } from '../utils/shadows';
import { tourScript, CONTACT_EMAIL, type TourChoice } from '../data/tourScript';

/**
 * Guided tour — a scripted agent that shows visitors around.
 *
 * Deliberately not an LLM: every path is curated. It speaks in the
 * system's voice, and its choices can navigate routes and scroll to
 * `data-tour` anchors. Mounted at App level so it survives navigation.
 */
export function GuidedTour() {
  const [open, setOpen] = useState(false);
  const [nodeId, setNodeId] = useState('start');
  const [transcript, setTranscript] = useState<string[]>([]);
  const [typed, setTyped] = useState('');
  const [busy, setBusy] = useState(false); // typing in progress
  const [thinking, setThinking] = useState(false); // pre-message pause dots

  const navigate = useNavigate();
  const location = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const queueRef = useRef<string[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startedRef = useRef(false);
  const locationRef = useRef(location.pathname);
  locationRef.current = location.pathname;

  const reducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  /** Type out queued messages, with a brief "thinking" pause before each */
  const pump = useCallback(() => {
    const queue = queueRef.current;
    if (queue.length === 0) {
      setBusy(false);
      setThinking(false);
      return;
    }
    setBusy(true);
    const message = queue[0];

    if (reducedMotion()) {
      queue.shift();
      setTranscript((t) => [...t, message]);
      timerRef.current = setTimeout(pump, 40);
      return;
    }

    // brief pause with pulsing dots, then type
    setThinking(true);
    timerRef.current = setTimeout(() => {
      setThinking(false);
      let i = 0;
      const step = () => {
        i += 2; // two chars per tick reads fast but alive
        setTyped(message.slice(0, i));
        if (i < message.length) {
          timerRef.current = setTimeout(step, 14);
        } else {
          queue.shift();
          setTyped('');
          setTranscript((t) => [...t, message]);
          timerRef.current = setTimeout(pump, 260);
        }
      };
      step();
    }, 380);
  }, []);

  /** Reveal everything instantly (skip typing) */
  const skip = useCallback(() => {
    if (!busy) return;
    clearTimer();
    const rest = queueRef.current.splice(0, queueRef.current.length);
    setTyped('');
    setThinking(false);
    setTranscript((t) => [...t, ...rest]);
    setBusy(false);
  }, [busy]);

  /** Scroll to a data-tour anchor, polling while lazy pages mount */
  const scrollToAnchor = useCallback((anchor: string) => {
    let tries = 0;
    const poll = () => {
      const el = document.querySelector(`[data-tour="${anchor}"]`);
      if (el) {
        el.scrollIntoView({
          behavior: reducedMotion() ? 'auto' : 'smooth',
          block: 'center'
        });
      } else if (tries++ < 20) {
        setTimeout(poll, 150);
      }
    };
    // small head start so page transitions settle first
    setTimeout(poll, 350);
  }, []);

  /** Enter a node: run its action, queue its messages */
  const enterNode = useCallback(
    (id: string) => {
      const node = tourScript[id];
      if (!node) return;
      setNodeId(id);

      if (node.action?.navigate && locationRef.current !== node.action.navigate) {
        navigate(node.action.navigate);
      }
      if (node.action?.scrollTo) scrollToAnchor(node.action.scrollTo);

      clearTimer();
      queueRef.current.push(...node.messages);
      pump();
    },
    [navigate, pump, scrollToAnchor]
  );

  const choose = (choice: TourChoice) => {
    if (choice.external) {
      window.open(choice.external, '_blank', 'noopener,noreferrer');
      return;
    }
    if (choice.copyEmail) {
      try {
        navigator.clipboard?.writeText(CONTACT_EMAIL);
      } catch {
        /* non-fatal */
      }
    }
    if (choice.next) enterNode(choice.next);
  };

  // First open starts the script
  useEffect(() => {
    if (open && !startedRef.current) {
      startedRef.current = true;
      enterNode('start');
    }
  }, [open, enterNode]);

  // Esc closes
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // The command palette can summon the tour
  useEffect(() => {
    const onOpenEvent = () => setOpen(true);
    window.addEventListener('portfolio:open-tour', onOpenEvent);
    return () => window.removeEventListener('portfolio:open-tour', onOpenEvent);
  }, []);

  // Keep the transcript pinned to the newest message
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [transcript, typed, busy, thinking]);

  useEffect(() => clearTimer, []);

  const node = tourScript[nodeId];
  const showChoices = open && !busy && node;

  return (
    <>
      {/* Launcher pill */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={() => setOpen(true)}
            aria-label="Open guided tour"
            className="fixed bottom-6 left-6 z-50 flex items-center gap-2"
            style={{
              padding: '10px 16px',
              borderRadius: '24px',
              fontSize: '13px',
              fontWeight: 500,
              fontFamily: 'Inter, sans-serif',
              cursor: 'pointer',
              border: '1px solid rgba(29, 133, 126, 0.3)',
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(10px)',
              color: '#1D857E',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.06), 0 8px 20px rgba(0, 0, 0, 0.08)'
            }}
          >
            <Compass size={15} />
            Tour
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Portfolio guide"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed bottom-6 left-6 z-[60] flex flex-col"
            style={{
              width: 'min(340px, calc(100vw - 48px))',
              maxHeight: 'min(480px, calc(100vh - 96px))',
              background: 'rgba(255, 255, 255, 0.96)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid rgba(0, 0, 0, 0.07)',
              borderRadius: '16px',
              boxShadow: shadows.cardHover,
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 14px',
                borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#1D857E',
                  flexShrink: 0
                }}
              />
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  color: '#111827'
                }}
              >
                Portfolio guide
              </span>
              <span
                style={{
                  fontSize: '10px',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                  color: 'rgba(17, 24, 39, 0.35)'
                }}
              >
                v{__APP_VERSION__}
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close guided tour"
                style={{
                  marginLeft: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  background: 'rgba(0, 0, 0, 0.05)',
                  color: 'rgba(17, 24, 39, 0.6)'
                }}
              >
                <X size={13} />
              </button>
            </div>

            {/* Transcript (click to skip typing) */}
            <div
              ref={scrollRef}
              onClick={skip}
              className="space-y-2.5"
              style={{
                padding: '14px',
                overflowY: 'auto',
                flex: 1,
                cursor: busy ? 'pointer' : 'default'
              }}
            >
              {transcript.map((message, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  style={{
                    background: 'rgba(29, 133, 126, 0.05)',
                    border: '1px solid rgba(29, 133, 126, 0.08)',
                    borderRadius: '12px',
                    borderTopLeftRadius: '4px',
                    padding: '10px 12px',
                    fontSize: '13.5px',
                    lineHeight: 1.55,
                    color: 'rgba(17, 24, 39, 0.85)',
                    fontFamily: 'Work Sans, sans-serif'
                  }}
                >
                  {message}
                </motion.div>
              ))}
              {typed && (
                <div
                  style={{
                    background: 'rgba(29, 133, 126, 0.05)',
                    border: '1px solid rgba(29, 133, 126, 0.08)',
                    borderRadius: '12px',
                    borderTopLeftRadius: '4px',
                    padding: '10px 12px',
                    fontSize: '13.5px',
                    lineHeight: 1.55,
                    color: 'rgba(17, 24, 39, 0.85)',
                    fontFamily: 'Work Sans, sans-serif'
                  }}
                >
                  {typed}
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'inline-block',
                      width: 2,
                      height: 14,
                      marginLeft: 2,
                      verticalAlign: 'text-bottom',
                      background: '#1D857E'
                    }}
                  />
                </div>
              )}
              {thinking && !typed && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    background: 'rgba(29, 133, 126, 0.05)',
                    border: '1px solid rgba(29, 133, 126, 0.08)',
                    borderRadius: '12px',
                    borderTopLeftRadius: '4px',
                    padding: '12px 14px'
                  }}
                >
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      animate={{ opacity: [0.25, 1, 0.25] }}
                      transition={{ repeat: Infinity, duration: 1, delay: d * 0.15, ease: 'easeInOut' }}
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: '#1D857E',
                        display: 'inline-block'
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </div>

            {/* Choices */}
            <div
              style={{
                padding: '0 14px 14px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                minHeight: showChoices ? undefined : 0
              }}
            >
              {showChoices &&
                node.choices.map((choice, i) => (
                  <motion.button
                    key={choice.label}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.07, ease: 'easeOut' }}
                    onClick={() => choose(choice)}
                    style={{
                      padding: '7px 13px',
                      borderRadius: '18px',
                      fontSize: '12.5px',
                      fontWeight: 500,
                      fontFamily: 'Inter, sans-serif',
                      cursor: 'pointer',
                      border: '1px solid rgba(29, 133, 126, 0.35)',
                      background: 'transparent',
                      color: '#1D857E',
                      transition: 'background 0.15s ease'
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = 'rgba(29, 133, 126, 0.07)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = 'transparent')
                    }
                  >
                    {choice.label}
                  </motion.button>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
