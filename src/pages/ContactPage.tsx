import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { useState } from 'react';
import { SEO, seoConfig } from '../components/SEO';
import { Button } from '../components/ui/Button';

export function ContactPage() {
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = 'sandeepskumbar@gmail.com';
    
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
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    } finally {
      document.body.removeChild(textarea);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoConfig.contact} />
      <Navigation />
      
      <main id="main-content">
        {/* SECTION 1 - CONTACT HERO */}
        <section 
          className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(29, 133, 126, 0.11) 0%, rgba(29, 133, 126, 0.06) 40%, #FFFFFF 80%)'
        }}
      >
        
        <div className="max-w-[1180px] mx-auto px-8 pt-24 pb-12 md:pt-32 md:pb-20 relative">
          <div className="text-center max-w-[720px] mx-auto space-y-10">
            {/* Headline - split into two lines with highlighted words */}
            <h1 
              className="leading-tight"
              style={{ 
                color: '#111827',
                fontSize: '36px',
                lineHeight: '1.2'
              }}
            >
              Let's talk about <span style={{ color: '#1D857E' }}>design</span>, <span style={{ color: '#1D857E' }}>systems</span>,<br />
              or what you're building.
            </h1>

            {/* Supporting text */}
            <p 
              style={{ 
                fontSize: '17px',
                lineHeight: '1.5',
                color: 'rgba(17, 24, 39, 0.7)',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              Whether you're exploring ideas, refining work, or seeking strategic clarity, I'm always open to thoughtful conversations.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button 
                variant="primary" 
                onClick={handleCopyEmail}
              >
                {emailCopied ? 'Email Copied!' : 'Contact Me'}
              </Button>

              <Button 
                variant="secondary" 
                icon="linkedin"
                href="https://www.linkedin.com/in/sskumbar7"
              >
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - GUIDED CONVERSATION */}
      <section className="relative bg-white">
        <div className="max-w-[1180px] mx-auto px-8 pt-12 pb-10 md:pt-20 md:pb-24 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 relative">
            {/* Left column - Primary content card */}
            <div className="md:col-span-7">
              <motion.div 
                className="cursor-default"
                style={{
                  background: 'rgba(250, 250, 250, 0.6)',
                  borderRadius: '20px',
                  padding: '40px',
                  border: '1px solid',
                  borderColor: isCardHovered ? 'rgba(29, 133, 126, 0.3)' : 'rgba(0, 0, 0, 0.04)',
                  boxShadow: isCardHovered
                    ? '0 6px 20px rgba(0, 0, 0, 0.06)'
                    : '0 4px 16px rgba(0, 0, 0, 0.04)',
                  transform: isCardHovered ? 'translateY(-2px)' : 'translateY(0)',
                  transition: 'all 0.25s ease-out'
                }}
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
                onFocus={() => setIsCardHovered(true)}
                onBlur={() => setIsCardHovered(false)}
                tabIndex={0}
              >
                {/* Eyebrow */}
                <div 
                  className="section-label"
                  style={{ 
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#1D857E',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '24px'
                  }}
                >
                  Guided Conversation
                </div>

                {/* Headline */}
                <h2 
                  style={{ 
                    fontSize: '24px',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1.3',
                    marginBottom: '16px'
                  }}
                >
                  Need focused feedback — without the noise?
                </h2>

                {/* Description */}
                <p 
                  style={{ 
                    fontSize: '17px',
                    lineHeight: '1.5',
                    color: 'rgba(17, 24, 39, 0.7)',
                    fontFamily: 'Work Sans, sans-serif',
                    marginBottom: '28px'
                  }}
                >
                  Short, agenda-driven conversations designed to unblock thinking. Ideal for design reviews, interaction feedback, or strategic clarity.
                </p>

                {/* Primary CTA */}
                <motion.button 
                  className="inline-block px-8 py-3 text-white rounded-xl"
                  style={{
                    background: isCtaHovered
                      ? 'linear-gradient(to right, #1a7c76, #167069)'
                      : 'linear-gradient(to right, #1D857E, #178076)',
                    boxShadow: '0 4px 14px rgba(29, 133, 126, 0.22), 0 2px 6px rgba(29, 133, 126, 0.08)',
                    fontSize: '16px',
                    fontWeight: 500,
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '16px',
                    transform: isCtaHovered ? 'translateY(-1px)' : 'translateY(0)',
                    transition: 'all 0.25s ease-out'
                  }}
                  onMouseEnter={() => setIsCtaHovered(true)}
                  onMouseLeave={() => setIsCtaHovered(false)}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule a guided session
                </motion.button>

                {/* Meta text */}
                <p 
                  style={{ 
                    fontSize: '13px',
                    lineHeight: '1.5',
                    color: 'rgba(17, 24, 39, 0.4)',
                    fontFamily: 'Work Sans, sans-serif'
                  }}
                >
                  Limited availability · 30-minute sessions
                </p>
              </motion.div>
            </div>

            {/* Vertical Divider - hidden on mobile */}
            <div 
              className="hidden md:block absolute"
              style={{
                left: 'calc(58.33% - 32px)', // Position between columns (7/12 = 58.33%)
                top: '10%',
                bottom: '10%',
                width: '1px',
                background: 'rgba(0, 0, 0, 0.016)',
              }}
            />

            {/* Right column - Supporting content */}
            <div className="md:col-span-5">
              {/* Block 1: Good fit if you're */}
              <div style={{ marginBottom: '40px' }}>
                <h3 
                  style={{ 
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '16px'
                  }}
                >
                  Good fit if you're:
                </h3>
                
                {/* Role pills in 2-column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Junior Designer',
                    'Mid / Senior Designer',
                    'Career transition to UX'
                  ].map((role, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 rounded border bg-transparent text-center"
                      style={{ 
                        fontSize: '14px', 
                        fontWeight: 500,
                        fontFamily: 'Work Sans, sans-serif',
                        letterSpacing: '0.01em',
                        lineHeight: '1.3',
                        borderColor: 'rgba(29, 133, 126, 0.25)',
                        color: 'rgba(17, 24, 39, 0.8)'
                      }}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Block 2: Topics we can cover */}
              <div className="w-full">
                <h3 
                  style={{ 
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '16px'
                  }}
                >
                  Topics we can cover:
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {[
                    'UX & interaction feedback',
                    'Design systems thinking',
                    'Career guidance & portfolio review',
                    'AI + design workflows'
                  ].map((topic, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded border bg-transparent text-center"
                      style={{ 
                        fontSize: '13px', 
                        fontWeight: 500,
                        fontFamily: 'Work Sans, sans-serif',
                        letterSpacing: '0.01em',
                        lineHeight: '1.2',
                        borderColor: 'rgba(29, 133, 126, 0.4)',
                        color: '#1D857E'
                      }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Footer */}
        <div className="max-w-[1180px] mx-auto px-8 pb-20 md:pb-24">
          <Footer />
        </div>
      </main>
    </div>
  );
}