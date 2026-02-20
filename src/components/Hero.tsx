import { motion } from 'motion/react';
import { useState } from 'react';
import portraitImage from '../assets/29ef344e7da5848a42de9cbdc17ff00a75af6555.png';
import { Button } from './ui/Button';
import { Tag } from './ui/Tag';

import { Link } from 'react-router-dom';

import { FadeIn } from './animations/FadeIn';

export function Hero() {
  const tags = [
    'Agentic AI Design',
    'Explainable AI (XAI)',
    // 'Google (EPAM)', // Moved to top badge
    'UX Strategy',
    'Micro-interactions'
  ];

  /* ... imports ... */
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = 'sskumbar7@gmail.com';

    // Use fallback method that works in all contexts
    const textarea = document.createElement('textarea');
    textarea.value = email;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '0';
    textarea.setAttribute('readonly', '');
    document.body.appendChild(textarea);

    try {
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      document.execCommand('copy');

      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    } catch (err) {
      console.error('Copy failed:', err);
    } finally {
      document.body.removeChild(textarea);
    }
  };

  const GradientWord = ({ children, wordKey }: { children: string; wordKey: string }) => {
    /* ... existing implementation ... */
    const isHovered = hoveredWord === wordKey;

    return (
      <motion.span
        className="relative inline-block cursor-default"
        onMouseEnter={() => setHoveredWord(wordKey)}
        onMouseLeave={() => setHoveredWord(null)}
        animate={{
          backgroundPosition: isHovered ? ['0% 0', '100% 0', '0% 0'] : '0% 0'
        }}
        transition={{
          duration: isHovered ? 1.5 : 0,
          repeat: isHovered ? Infinity : 0,
          ease: 'linear'
        }}
        style={{
          background: 'linear-gradient(90deg, #1D857E 0%, #3BC5A1 50%, #1D857E 100%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        {children}
      </motion.span>
    );
  };

  return (
    <section className="relative overflow-hidden transition-colors duration-300">
      {/* Soft gradient background - Adaptive */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: 'linear-gradient(135deg, #1D857E 0%, transparent 100%)'
        }}
      />

      <div className="max-w-[1180px] mx-auto px-8 pt-12 pb-12 md:pt-24 md:pb-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left column */}
          <div className="space-y-10">
            <div>
              <FadeIn delay={0.1}>
                <div className="mb-6">
                  <Tag variant="badge">
                    Currently at KPMG
                  </Tag>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="leading-tight text-[28px] md:text-[36px] font-semibold" style={{
                  color: 'var(--color-foreground)',
                  lineHeight: '1.2'
                }}>
                  Lead <GradientWord wordKey="exp-designer">Experience Designer</GradientWord> shaping <GradientWord wordKey="calm">calm</GradientWord>, <GradientWord wordKey="meaningful">meaningful</GradientWord> digital products.
                </h1>
              </FadeIn>
            </div>

            <FadeIn delay={0.3}>
              <p style={{ fontSize: '17px', lineHeight: '1.5', color: 'var(--color-muted-foreground)', maxWidth: '580px' }}>
                With 11+ years of expertise spanning UX research, strategic design thinking, interaction design,
                micro-motion choreography, and agentic AI workflows—I craft experiences that feel purposeful,
                human, and technically sound.
              </p>
            </FadeIn>

            {/* Pill tags */}
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-2 -mt-2">
                {tags.map((tag, index) => (
                  <Tag key={index} variant="code">
                    {tag}
                  </Tag>
                ))}
              </div>
            </FadeIn>

            {/* Portrait - Mobile Only (order: 2) */}
            <div className="relative md:hidden" style={{ order: 2 }}>
              <div className="relative flex justify-center">
                {/* Organic teal blob background */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] rounded-[40%_60%_70%_30%/60%_30%_70%_40%]"
                  style={{ background: '#1D857E' }}
                />

                <div className="relative w-full max-w-md">
                  <div className="relative p-1 rounded-xl" style={{
                    background: 'linear-gradient(to bottom right, rgba(29, 133, 126, 0.3), rgba(78, 205, 196, 0.3), rgba(29, 133, 126, 0.3))'
                  }}>
                    <img
                      src={portraitImage}
                      alt="Sandeep S Kumbar - Lead Experience Designer"
                      loading="eager"
                      className="w-full h-auto rounded-xl shadow-xl transition-opacity"
                      style={{
                        filter: 'grayscale(100%)',
                        aspectRatio: '1/1',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4" style={{ order: 3 }}>
              <Button variant="default" className="w-full md:w-auto" asChild>
                <Link to="/work">View Case Studies</Link>
              </Button>
              <Button variant="secondary" className="w-full md:w-auto" onClick={handleCopyEmail}>
                {emailCopied ? 'Email Copied!' : 'Contact Me'}
              </Button>
            </div>
          </div>

          {/* Right column - Portrait (Desktop Only) */}
          <div className="relative hidden md:block">
            <div className="relative flex justify-center md:justify-end">
              {/* Organic teal blob background */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] rounded-[40%_60%_70%_30%/60%_30%_70%_40%]"
                style={{ background: '#1D857E' }}
              />

              <div className="relative w-full max-w-md">
                <div className="relative p-1 rounded-xl" style={{
                  background: 'linear-gradient(to bottom right, rgba(29, 133, 126, 0.3), rgba(78, 205, 196, 0.3), rgba(29, 133, 126, 0.3))'
                }}>
                  <img
                    src={portraitImage}
                    alt="Sandeep S Kumbar - Lead Experience Designer"
                    className="w-full h-auto rounded-xl shadow-xl transition-opacity"
                    style={{
                      filter: 'grayscale(100%)',
                      aspectRatio: '1/1',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}