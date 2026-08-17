import { motion } from 'motion/react';
import { useState } from 'react';
import portraitImage from '../assets/29ef344e7da5848a42de9cbdc17ff00a75af6555.webp';
import { Button } from './ui/button';
import { Tag } from './ui/Tag';
import { HeroMeshGradient } from './HeroMeshGradient';
import { CursorGlow } from './CursorGlow';

import { Link } from 'react-router-dom';

import { FadeIn } from './animations/FadeIn';

export function Hero() {
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
      {/* Animated mesh gradient background */}
      <HeroMeshGradient />
      {/* Soft cursor trail — hero only */}
      <CursorGlow />

      <div className="max-w-[1180px] mx-auto px-8 pt-16 pb-16 md:pt-28 md:pb-24 relative">
        <div className="max-w-[1000px] space-y-9">

          {/* Beat 1 — identity row: portrait, greeting, live status */}
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <span
                className="group inline-flex items-center gap-3"
                data-inspect="Grayscale until hover. Color is earned, not given."
                data-inspect-token="cubic-bezier(0.16, 1, 0.3, 1)"
              >
                <img
                  src={portraitImage}
                  alt="Sandeep S Kumbar"
                  loading="eager"
                  className="rounded-full transition-all duration-500"
                  style={{
                    width: '72px',
                    height: '72px',
                    objectFit: 'cover',
                    filter: 'grayscale(100%)',
                    border: '2.5px solid rgba(29, 133, 126, 0.3)',
                    transition: 'filter 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
                />
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: 500,
                    color: 'var(--color-foreground)',
                    fontFamily: 'Work Sans, sans-serif'
                  }}
                >
                  Hi, I'm Sandeep 👋
                </span>
              </span>
              <span
                className="inline-block"
                data-inspect="A live status line says more than a static bio ever will."
                data-inspect-token='Tag variant="badge"'
              >
                <Tag variant="badge">
                  Currently at KPMG
                </Tag>
              </span>
            </div>
          </FadeIn>

          {/* Beat 2 — the statement, in the site's only serif */}
          <FadeIn delay={0.2}>
            <h1
              data-inspect="The statement gets the site's only serif, and only the words that carry meaning get the gradient."
              data-inspect-token="Fraunces · clamp(36px, 5.5vw, 68px)"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: 'clamp(36px, 5.5vw, 68px)',
                fontWeight: 560,
                lineHeight: 1.08,
                letterSpacing: '-0.015em',
                color: 'var(--color-foreground)'
              }}
            >
              Lead <GradientWord wordKey="exp-designer">Experience Designer</GradientWord> shaping <GradientWord wordKey="calm">calm</GradientWord>, <GradientWord wordKey="meaningful">meaningful</GradientWord> digital products.
            </h1>
          </FadeIn>

          {/* Beat 3 — context, actions, thesis */}
          <FadeIn delay={0.3}>
            <p style={{ fontSize: '17px', lineHeight: '1.6', color: 'var(--color-muted-foreground)', maxWidth: '580px' }}>
              With 11+ years of experience in UX research, design strategy, interaction design,
              motion design, and agentic AI workflows. I craft experiences that feel purposeful,
              human, and technically sound.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="space-y-6">
              <div
                className="flex flex-wrap gap-4"
                data-inspect="One filled action per view. Everything else stays quiet."
                data-inspect-token='Button variant="default"'
              >
                <Button variant="default" className="w-full md:w-auto" asChild>
                  <Link to="/work">View Case Studies</Link>
                </Button>
                <Button variant="secondary" className="w-full md:w-auto" onClick={handleCopyEmail}>
                  {emailCopied ? 'Email Copied!' : 'Contact Me'}
                </Button>
              </div>

              <p
                data-inspect="The thesis, set in machine mono. Type does the taxonomy."
                data-inspect-token="ui-monospace · 13px"
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.02em',
                  color: 'rgba(17, 24, 39, 0.45)',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace'
                }}
              >
                complex systems → calm experiences
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
