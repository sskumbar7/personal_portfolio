import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle Escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        // Return focus to toggle button
        const toggleBtn = document.querySelector('[aria-label="Toggle menu"]') as HTMLElement;
        toggleBtn?.focus();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Simple Focus Trap
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const menu = document.getElementById('mobile-menu');
    const focusableElements = menu?.querySelectorAll('a[href], button:not([disabled])');
    const firstElement = focusableElements?.[0] as HTMLElement;
    const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    menu?.addEventListener('keydown', handleTab);
    // Focus first element when menu opens
    setTimeout(() => firstElement?.focus(), 100);

    return () => menu?.removeEventListener('keydown', handleTab);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Work', href: '/work' },
  ];

  return (
    <>
      {/* Skip to main content link for keyboard navigation */}


      <nav
        className={`border-b sticky top-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/70 backdrop-blur-xl shadow-sm'
            : 'bg-white'
          }`}
        style={{
          borderColor: isScrolled ? 'rgba(221, 233, 231, 0.4)' : '#DDE9E7'
        }}
      >
        <div className="max-w-[1180px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="tracking-tight transition-colors"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                color: '#111827'
              }}
            >
              Sandeep
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {/* Work link - uses router */}
              <Link
                to="/work"
                className="relative transition-colors text-[15px]"
                style={{
                  fontFamily: 'Work Sans, sans-serif',
                  color: '#111827'
                }}
                onMouseEnter={() => setHoveredLink('Work')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Work
                <span
                  className="absolute -bottom-1 left-0 h-[2px] transition-all duration-300"
                  style={{
                    width: hoveredLink === 'Work' || location.pathname.startsWith('/work') ? '100%' : '0%',
                    backgroundColor: '#1D857E'
                  }}
                />
              </Link>

              {/* Contact link - uses router */}
              <Link
                to="/contact"
                className="relative transition-colors text-[15px]"
                style={{
                  fontFamily: 'Work Sans, sans-serif',
                  color: '#111827'
                }}
                onMouseEnter={() => setHoveredLink('Contact')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Contact
                <span
                  className="absolute -bottom-1 left-0 h-[2px] transition-all duration-300"
                  style={{
                    width: hoveredLink === 'Contact' || location.pathname === '/contact' ? '100%' : '0%',
                    backgroundColor: '#1D857E'
                  }}
                />
              </Link>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-lg transition-colors flex items-center justify-center"
              style={{
                color: '#1D857E',
                minWidth: '48px',
                minHeight: '48px'
              }}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:hidden border-t overflow-hidden"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              style={{
                borderColor: 'rgba(221, 233, 231, 0.4)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(12px)'
              }}
            >
              <div className="max-w-[1180px] mx-auto px-8 py-6 space-y-2">
                <Link
                  to="/work"
                  className="block py-3 transition-colors text-[16px]"
                  style={{
                    fontFamily: 'Work Sans, sans-serif',
                    color: location.pathname.startsWith('/work') ? '#1D857E' : '#111827',
                    minHeight: '48px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  Work
                </Link>

                <Link
                  to="/contact"
                  className="block py-3 transition-colors text-[16px]"
                  style={{
                    fontFamily: 'Work Sans, sans-serif',
                    color: location.pathname === '/contact' ? '#1D857E' : '#111827',
                    minHeight: '48px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}