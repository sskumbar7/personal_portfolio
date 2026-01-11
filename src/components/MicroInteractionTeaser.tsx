import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function MicroInteractionTeaser() {
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [playingToken, setPlayingToken] = useState<string | null>(null);

  const timingTokens = [
    { 
      label: 'Fast', 
      duration: 150, 
      description: 'Instant feedback',
      ease: 'easeOut'
    },
    { 
      label: 'Medium', 
      duration: 300, 
      description: 'State transitions',
      ease: 'easeOut'
    },
    { 
      label: 'Slow', 
      duration: 500, 
      description: 'Emphasis & focus',
      ease: 'easeOut'
    }
  ];

  const handleTokenHover = (label: string) => {
    if (playingToken !== label) {
      setPlayingToken(label);
      // Reset after animation completes
      const token = timingTokens.find(t => t.label === label);
      if (token) {
        setTimeout(() => {
          setPlayingToken(null);
        }, token.duration);
      }
    }
  };

  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-8 pt-12 pb-12 md:pt-20 md:pb-20">
        <motion.div 
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(250, 250, 250, 0.6) 0%, rgba(249, 253, 252, 0.9) 100%)',
            border: '1px solid rgba(29, 133, 126, 0.08)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)'
          }}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeOut' }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={prefersReducedMotion ? {} : {
            boxShadow: '0 8px 24px rgba(29, 133, 126, 0.08)',
            background: 'linear-gradient(135deg, rgba(250, 250, 250, 0.7) 0%, rgba(249, 253, 252, 1) 100%)'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 p-12 md:p-16">
            {/* Left column - Text content and CTA */}
            <div className="flex flex-col justify-center">
              <div className="section-label mb-4">Interaction Craft</div>
              
              <h2 
                className="text-[24px] md:text-[32px]"
                style={{ 
                  color: '#111827', 
                  marginBottom: '20px',
                  lineHeight: '1.3',
                  letterSpacing: '-0.02em'
                }}
              >
                I craft <span style={{ 
                  color: '#1D857E',
                  position: 'relative'
                }}>micro-interactions</span> that enhance clarity, rhythm, and emotional intent.
              </h2>
              
              <p className="caption mb-8" style={{ 
                fontSize: '17px', 
                lineHeight: '1.6',
                color: '#6B7280',
                maxWidth: '480px'
              }}>
                Every interaction is choreographed with intention—timing, easing, and purpose working together to guide attention without demanding it.
              </p>
              
              {/* CTA */}
              <motion.a
                href="#case-studies"
                className="inline-flex items-center gap-2 group"
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#1D857E',
                  textDecoration: 'none',
                  width: 'fit-content'
                }}
                whileHover={{ x: prefersReducedMotion ? 0 : 2 }}
                transition={{ duration: 0.2 }}
              >
                <span style={{ position: 'relative' }}>
                  Explore interaction work
                  <motion.span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '1px',
                      backgroundColor: '#1D857E',
                      transformOrigin: 'left'
                    }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </span>
                <motion.div
                  animate={{ x: isHovered && !prefersReducedMotion ? 3 : 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </motion.div>
              </motion.a>
            </div>

            {/* Right column - Motion timing system */}
            <div className="flex flex-col justify-center space-y-10">
              {/* System label */}
              <div>
                <p style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'rgba(29, 133, 126, 0.4)',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '16px'
                }}>
                  Motion System
                </p>
              </div>

              {/* Timing tokens */}
              {timingTokens.map((token, index) => (
                <motion.button
                  key={token.label}
                  className="relative cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-offset-2 w-full"
                  onClick={() => !prefersReducedMotion && handleTokenHover(token.label)}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && !prefersReducedMotion) {
                      e.preventDefault();
                      handleTokenHover(token.label);
                    }
                  }}
                  aria-label={`Play ${token.label} timing animation - ${token.duration}ms`}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    '--tw-ring-color': 'rgba(29, 133, 126, 0.5)'
                  } as React.CSSProperties}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.25,
                    delay: prefersReducedMotion ? 0 : index * 0.08,
                    ease: 'easeOut'
                  }}
                >
                  <div className="flex items-center gap-6">
                    {/* Label and timing info */}
                    <div className="w-[100px] md:w-[140px] flex-shrink-0">
                      <div style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#111827',
                        fontFamily: 'Inter, sans-serif',
                        marginBottom: '2px'
                      }}>
                        {token.label}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        fontWeight: 500,
                        color: 'rgba(29, 133, 126, 0.5)',
                        fontFamily: 'monospace'
                      }}>
                        {token.duration}ms
                      </div>
                      <div style={{
                        fontSize: '13px',
                        color: 'rgba(107, 114, 128, 0.7)',
                        marginTop: '4px'
                      }}>
                        {token.description}
                      </div>
                    </div>

                    {/* Visual easing curve - hidden on mobile */}
                    <div className="hidden md:block" style={{ 
                      width: '80px', 
                      height: '40px',
                      position: 'relative'
                    }}>
                      <svg width="80" height="40" viewBox="0 0 80 40" style={{ overflow: 'visible' }}>
                        {/* Easing curve path - easeOut cubic bezier */}
                        <path
                          d="M 2 38 C 2 38, 20 2, 78 2"
                          stroke="rgba(29, 133, 126, 0.25)"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    {/* Animated dot demonstration */}
                    <div className="flex-1 min-w-0" style={{
                      height: '40px',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <motion.div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: '#1D857E',
                          position: 'absolute',
                          left: 0
                        }}
                        animate={
                          playingToken === token.label && !prefersReducedMotion
                            ? {
                                x: [0, 120, 0],
                                opacity: [0.4, 1, 0.4]
                              }
                            : {
                                x: 0,
                                opacity: 0.4
                              }
                        }
                        transition={{
                          duration: token.duration / 1000,
                          ease: token.ease,
                          times: [0, 0.5, 1]
                        }}
                      />
                      
                      {/* Track line - responsive width */}
                      <div className="absolute left-0 h-[1px] w-full max-w-[120px]" style={{
                        backgroundColor: 'rgba(29, 133, 126, 0.12)'
                      }} />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}