import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function AIWorkflowTeaser() {
    const prefersReducedMotion = useReducedMotion();
    const [isHovered, setIsHovered] = useState(false);

    const workflowStages = [
        {
            name: 'Explore',
            phase: 'Early phase',
            description: 'Prompts, patterns, and idea expansion'
        },
        {
            name: 'Refine',
            phase: 'Mid phase',
            description: 'Structure, consistency, and iteration'
        },
        {
            name: 'Validate',
            phase: 'Late phase',
            description: 'Edge cases, accessibility, and quality checks'
        }
    ];

    return (
        <section style={{
            backgroundColor: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                maxWidth: '1180px',
                margin: '0 auto',
                padding: '48px 32px'
            }}>
                <motion.div
                    style={{
                        position: 'relative',
                        borderRadius: '24px',
                        overflow: 'hidden',
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
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            {/* Section Label */}
                            <div style={{
                                fontSize: '11px',
                                fontWeight: 600,
                                letterSpacing: '0.08em',
                                color: 'rgba(29, 133, 126, 0.6)',
                                textTransform: 'uppercase',
                                fontFamily: 'Inter, sans-serif',
                                marginBottom: '16px'
                            }}>
                                AI-Augmented Workflow
                            </div>

                            {/* Headline */}
                            <h2 style={{
                                fontSize: '32px',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                color: '#111827',
                                marginBottom: '20px',
                                lineHeight: '1.3',
                                letterSpacing: '-0.02em'
                            }}>
                                I use AI as a <span style={{
                                    color: '#1D857E',
                                    position: 'relative'
                                }}>design partner</span> — not a shortcut.
                            </h2>

                            {/* Paragraph 1 */}
                            <p style={{
                                fontSize: '17px',
                                lineHeight: '1.6',
                                color: '#6B7280',
                                maxWidth: '480px',
                                marginBottom: '24px',
                                fontFamily: 'Work Sans, sans-serif'
                            }}>
                                AI supports my thinking across research, ideation, design execution, and validation — while decisions, judgment, and craft remain human-led.
                            </p>

                            {/* Paragraph 2 */}
                            <p style={{
                                fontSize: '17px',
                                lineHeight: '1.6',
                                color: '#6B7280',
                                maxWidth: '480px',
                                marginBottom: '32px',
                                fontFamily: 'Work Sans, sans-serif'
                            }}>
                                I use AI to accelerate clarity, explore alternatives, and stress-test ideas, without compromising design fundamentals.
                            </p>


                        </div>

                        {/* Right column - AI Workflow System */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            {/* System label */}
                            <div style={{ marginBottom: '32px' }}>
                                <p style={{
                                    fontSize: '11px',
                                    fontWeight: 600,
                                    letterSpacing: '0.08em',
                                    color: 'rgba(29, 133, 126, 0.4)',
                                    textTransform: 'uppercase',
                                    fontFamily: 'Inter, sans-serif'
                                }}>
                                    AI Workflow System
                                </p>
                            </div>

                            {/* Workflow stages with connecting lines */}
                            <div style={{ position: 'relative' }}>
                                {/* Subtle vertical flow line */}
                                <div style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: '2px',
                                    borderRadius: '9999px',
                                    background: 'linear-gradient(to bottom, transparent 0%, rgba(29, 133, 126, 0.15) 20%, rgba(29, 133, 126, 0.15) 80%, transparent 100%)',
                                    marginLeft: '8px'
                                }} />

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                    {workflowStages.map((stage, index) => (
                                        <motion.div
                                            key={stage.name}
                                            style={{
                                                position: 'relative',
                                                paddingLeft: '32px'
                                            }}
                                            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: '-50px' }}
                                            transition={{
                                                duration: prefersReducedMotion ? 0 : 0.4,
                                                delay: prefersReducedMotion ? 0 : index * 0.12,
                                                ease: 'easeOut'
                                            }}
                                        >
                                            {/* Stage indicator dot */}
                                            <motion.div
                                                style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 0,
                                                    width: '20px',
                                                    height: '20px',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: 'rgba(29, 133, 126, 0.1)',
                                                    border: '2px solid rgba(29, 133, 126, 0.25)'
                                                }}
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: prefersReducedMotion ? 0 : 0.3,
                                                    delay: prefersReducedMotion ? 0 : 0.2 + index * 0.12,
                                                    ease: 'easeOut'
                                                }}
                                            >
                                                <div style={{
                                                    width: '8px',
                                                    height: '8px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#1D857E'
                                                }} />
                                            </motion.div>

                                            {/* Stage content */}
                                            <div>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'baseline',
                                                    gap: '12px',
                                                    marginBottom: '8px'
                                                }}>
                                                    <h3 style={{
                                                        fontSize: '18px',
                                                        fontWeight: 600,
                                                        color: '#111827',
                                                        fontFamily: 'Inter, sans-serif',
                                                        letterSpacing: '-0.01em'
                                                    }}>
                                                        {stage.name}
                                                    </h3>
                                                    <span style={{
                                                        fontSize: '11px',
                                                        fontWeight: 500,
                                                        color: 'rgba(29, 133, 126, 0.5)',
                                                        fontFamily: 'Inter, sans-serif',
                                                        letterSpacing: '0.02em',
                                                        textTransform: 'uppercase'
                                                    }}>
                                                        {stage.phase}
                                                    </span>
                                                </div>
                                                <p style={{
                                                    fontSize: '15px',
                                                    lineHeight: '1.5',
                                                    color: 'rgba(107, 114, 128, 0.85)',
                                                    maxWidth: '360px',
                                                    fontFamily: 'Work Sans, sans-serif'
                                                }}>
                                                    {stage.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
