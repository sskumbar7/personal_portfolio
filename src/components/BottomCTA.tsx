import { motion, useReducedMotion } from 'motion/react';
import { Footer } from './Footer';
import { Button } from './ui/button';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BottomCTA() {
  const prefersReducedMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

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

      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Copy failed:', err);
    } finally {
      document.body.removeChild(textarea);
    }
  };

  return (
    <section className="bg-white">
      <div className="max-w-[1180px] mx-auto px-8 pt-12 pb-12 md:pt-20 md:pb-24">
        {/* Main CTA Content */}
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <motion.h2
            className="text-[28px] md:text-[36px] font-normal"
            style={{
              color: '#111827',
              lineHeight: '1.4',
              letterSpacing: '-0.02em',
              fontFamily: 'Inter, sans-serif'
            }}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: 'easeOut' }}
          >
            Let's talk about design, systems, or what you're building.
          </motion.h2>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            <Button
              variant="default"
              onClick={handleCopyEmail}
              prefersReducedMotion={prefersReducedMotion}
            >
              {copied ? 'Email Copied!' : 'Contact Me'}
            </Button>

            <Button
              variant="secondary"
              asChild
              prefersReducedMotion={prefersReducedMotion}
            >
              <a href="https://www.linkedin.com/in/sskumbar7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </Button>
          </motion.div>

          {/* Micro-copy */}
          <motion.p
            style={{
              fontSize: '14px',
              lineHeight: '1.5',
              color: 'rgba(17, 24, 39, 0.45)',
              fontFamily: 'Work Sans, sans-serif',
              marginTop: '16px'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            Always happy to chat.
          </motion.p>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </section>
  );
}