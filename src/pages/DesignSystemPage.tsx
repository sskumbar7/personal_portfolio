import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Tag } from '../components/ui/Tag';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CaseStudyCard } from '../components/ui/CaseStudyCard';
import { SEO } from '../components/SEO';
import { Copy, Check, Moon, Sun, Type, Layout, Palette, Box, Eye, Monitor, Layers, Grid } from 'lucide-react';
import { motion } from 'motion/react';


export function DesignSystemPage() {
  // Safe check for mounted status to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('foundation');

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll Spy Implementation
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'foundation'; // Default

      sections.forEach((section) => {
        // We cast to HTMLElement to access offsetTop
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop;
        const sectionHeight = htmlSection.clientHeight;

        // If we've scrolled past the section's top (with an offset for the sticky header)
        if (window.scrollY >= sectionTop - 200) {
          current = htmlSection.getAttribute('id') || 'foundation';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const isDark = false;

  // Copy to Clipboard
  const copyToClipboard = (text: string, tokenName: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedToken(tokenName);
      setTimeout(() => setCopiedToken(null), 2000);
    });
  };

  // EXTENDED Color Tokens
  const colorTokens = {
    primary: [
      { name: 'Primary Teal', value: '#1D857E', darkValue: '#2DD4BF', usage: 'Primary actions, links, accents' },
      { name: 'Primary Hover', value: '#178076', darkValue: '#14B8A6', usage: 'Hover states' },
      { name: 'Primary Light', value: '#CDE9E6', darkValue: 'rgba(45, 212, 191, 0.2)', usage: 'Subtle backgrounds' },
    ],
    neutral: [
      { name: 'Paper', value: '#FFFFFF', darkValue: '#111827', usage: 'Card backgrounds' },
      { name: 'Soft Grey', value: '#FAFAFA', darkValue: '#1F2937', usage: 'Page backgrounds' },
      { name: 'Border', value: '#E5E7EB', darkValue: '#374151', usage: 'Dividers, borders' },
      { name: 'Text Main', value: '#111827', darkValue: '#F9FAFB', usage: 'Primary text' },
      { name: 'Text Muted', value: '#6B7280', darkValue: '#9CA3AF', usage: 'Secondary text' },
    ],
    semantic: [
      { name: 'Success', value: '#10B981', darkValue: '#34D399', usage: 'Success states' },
      { name: 'Warning', value: '#F59E0B', darkValue: '#FBBF24', usage: 'Warning states' },
      { name: 'Error', value: '#EF4444', darkValue: '#F87171', usage: 'Error states' },
      { name: 'Info', value: '#3B82F6', darkValue: '#60A5FA', usage: 'Information' },
    ],
    gradients: [
      { name: 'Brand Gradient', value: 'linear-gradient(135deg, #1D857E 0%, #3BC5A1 100%)', darkValue: 'linear-gradient(135deg, #2DD4BF 0%, #14B8A6 100%)', usage: 'Primary buttons, hero accents' },
      { name: 'Surface Gradient', value: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFFFFF 100%)', darkValue: 'linear-gradient(180deg, rgba(17,24,39,0) 0%, #111827 100%)', usage: 'Content fade-outs' }
    ]
  };

  const typography = [
    { name: 'Display', element: 'H1', size: '36px', mobile: '32px', weight: '600', family: 'Inter', usage: 'Hero headings' },
    { name: 'Heading 1', element: 'H1', size: '32px', mobile: '28px', weight: '600', family: 'Inter', usage: 'Page titles' },
    { name: 'Heading 2', element: 'H2', size: '24px', mobile: '22px', weight: '600', family: 'Inter', usage: 'Section titles' },
    { name: 'Heading 3', element: 'H3', size: '18px', mobile: '18px', weight: '600', family: 'Inter', usage: 'Card titles' },
    { name: 'Body Large', element: 'P', size: '17px', mobile: '16px', weight: '400', family: 'Work Sans', usage: 'Lead text' },
    { name: 'Body', element: 'P', size: '16px', mobile: '15px', weight: '400', family: 'Work Sans', usage: 'Standard text' },
    { name: 'Caption', element: 'Span', size: '14px', mobile: '13px', weight: '400', family: 'Work Sans', usage: 'Metadata' },
    { name: 'Mono', element: 'Code', size: '13px', mobile: '12px', weight: '500', family: 'JetBrains Mono', usage: 'Code snippets' },
  ];

  const spacing = [96, 64, 40, 32, 24, 16, 12, 8, 4];

  const shadows = [
    { name: 'sm', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)', usage: 'Subtle emphasis' },
    { name: 'md', value: '0 4px 6px -1px rgb(0 0 0 / 0.1)', usage: 'Dropdowns, Cards' },
    { name: 'lg', value: '0 10px 15px -3px rgb(0 0 0 / 0.1)', usage: 'Modals, Hover states' },
    { name: 'xl', value: '0 20px 25px -5px rgb(0 0 0 / 0.1)', usage: 'Floating commands' },
  ];

  const navItems = [
    { id: 'foundation', label: 'Colors & Gradients', icon: Palette },
    { id: 'typography', label: 'Typography', icon: Type },
    { id: 'layout', label: 'Layout & Spacing', icon: Layout },
    { id: 'shadows', label: 'Shadows & Depth', icon: Layers },
    { id: 'components', label: 'Components', icon: Box },
    { id: 'accessibility', label: 'Accessibility', icon: Eye },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <SEO
        title="Design System | Sandeep S Kumbar"
        description="Comprehensive design system documentation including colors, typography, components, and accessibility guidelines."
      />

      <Navigation />

      <main id="main-content">
        {/* Header Banner - Matching Contact/Work Pages */}
        <section
          className="relative overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(29, 133, 126, 0.11) 0%, rgba(29, 133, 126, 0.06) 40%, #FFFFFF 80%)'
          }}
        >
          {/* Subtle pattern overlay for design system page context */}
          <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />

          <div className="max-w-[1180px] mx-auto px-8 pt-24 pb-12 md:pt-32 md:pb-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-[720px] mx-auto space-y-10"
            >
              <div className="flex justify-center items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[rgba(29,133,126,0.08)] text-[#1D857E] border border-[rgba(29,133,126,0.15)]">
                  System v2.1
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-gray-100 text-gray-500">
                  Live
                </span>
              </div>

              <h1 className="leading-tight" style={{ color: '#111827', fontSize: '36px', lineHeight: '1.2' }}>
                Design <span style={{ color: '#1D857E' }}>System</span>
              </h1>

              <p style={{ fontSize: '17px', lineHeight: '1.5', color: 'rgba(17, 24, 39, 0.7)', maxWidth: '600px', margin: '0 auto' }}>
                The visual language used to build this portfolio.
                Values automatically adapt to the <span className="text-[#1D857E] font-medium">current theme</span>.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-[1180px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Sidebar Navigation */}
            <aside className="lg:col-span-3 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0 hidden lg:block">
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeSection === item.id
                      ? 'bg-teal-50 text-teal-700 dark:bg-teal-900/20 dark:text-teal-400 translate-x-1'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-32">

              {/* Foundation / Colors */}
              <section id="foundation" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
                  <span className="p-3 rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400">
                    <Palette className="w-6 h-6" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold">Color System</h2>
                    <p className="text-gray-600 dark:text-gray-400">Context-aware color palette.</p>
                  </div>
                </div>

                <div className="space-y-16">
                  {Object.entries(colorTokens).map(([category, tokens]) => (
                    <div key={category}>
                      <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 opacity-60 flex items-center gap-2">
                        {category} Tokens
                        <span className="h-px flex-1 bg-current opacity-20"></span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tokens.map((token) => (
                          <div
                            key={token.name}
                            className="group rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                          >
                            <div
                              className="h-28 w-full cursor-pointer relative"
                              style={{ background: isDark ? token.darkValue : token.value }}
                              onClick={() => copyToClipboard(isDark ? token.darkValue : token.value, token.name)}
                            >
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 backdrop-blur-[2px]">
                                <Copy className="w-6 h-6 text-white drop-shadow-lg" />
                              </div>
                            </div>
                            <div className="p-5">
                              <div className="flex justify-between items-start mb-2">
                                <span className="font-semibold text-sm">{token.name}</span>
                                <span className={copiedToken === token.name ? 'opacity-100' : 'opacity-0'}>
                                  <Check className="w-4 h-4 text-green-500" />
                                </span>
                              </div>
                              <div className="flex items-center gap-2 mb-3">
                                <code className="text-xs px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono text-gray-600 dark:text-gray-300">
                                  {isDark ? token.darkValue : token.value}
                                </code>
                              </div>
                              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-2 mt-2">
                                {token.usage}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Typography */}
              <section id="typography" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
                  <span className="p-3 rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                    <Type className="w-6 h-6" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold">Typography</h2>
                    <p className="text-gray-600 dark:text-gray-400">Responsive type scale.</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900/50">
                  {typography.map((type, index) => (
                    <div
                      key={type.name}
                      className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-baseline border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <div className="w-32 shrink-0">
                        <span className="text-xs font-semibold uppercase tracking-wider block mb-1 text-gray-400 dark:text-gray-500">
                          {type.element}
                        </span>
                        <span className="font-medium text-sm text-gray-900 dark:text-gray-100">{type.name}</span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p
                          style={{
                            fontSize: type.size,
                            fontWeight: type.weight,
                            fontFamily: type.family === 'Inter' ? 'Inter, sans-serif' : type.family === 'Work Sans' ? 'Work Sans, sans-serif' : 'JetBrains Mono, monospace'
                          }}
                          className="truncate text-gray-900 dark:text-gray-100"
                        >
                          The quick brown fox jumps over the lazy dog
                        </p>
                        <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                          {type.family} • {type.weight}
                        </p>
                      </div>

                      <div className="w-48 shrink-0 text-right md:text-left">
                        <div className="flex flex-col gap-1">
                          <code className="text-xs font-mono text-teal-600 dark:text-teal-400">
                            Desktop: {type.size}
                          </code>
                          <code className="text-xs font-mono text-gray-500 dark:text-gray-400">
                            Mobile: {type.mobile}
                          </code>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Layout & Spacing */}
              <section id="layout" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
                  <span className="p-3 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                    <Layout className="w-6 h-6" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold">Layout & Spacing</h2>
                    <p className="text-gray-600 dark:text-gray-400">8pt grid system.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 opacity-60">Spacing Scale</h3>
                    <div className="flex flex-col gap-4">
                      {spacing.map((val) => (
                        <div key={val} className="flex items-center gap-6 group">
                          <div className="w-16 text-right font-mono text-sm opacity-40 group-hover:opacity-100 transition-opacity">{val}px</div>
                          <div
                            className="h-8 rounded bg-teal-500/20 dark:bg-teal-500/40 relative"
                            style={{ width: `${val}px` }}
                          >
                            <div className="absolute inset-0 flex items-center justify-center text-[10px] text-teal-700 dark:text-teal-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap px-1">
                              {val}px
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-12 gap-4 px-8 opacity-10">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="h-full bg-red-500"></div>
                      ))}
                    </div>
                    <div className="text-center relative z-10">
                      <Grid className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                      <h4 className="font-semibold mb-2">12 Column Grid</h4>
                      <p className="text-sm text-gray-500 max-w-xs mx-auto">
                        Max-width: 1180px<br />
                        Gaps: 16px - 32px<br />
                        Margins: 24px - 48px
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Shadows */}
              <section id="shadows" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
                  <span className="p-3 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400">
                    <Layers className="w-6 h-6" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold">Shadows & Depth</h2>
                    <p className="text-gray-600 dark:text-gray-400">Elevation scale.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {shadows.map((shadow) => (
                    <div key={shadow.name} className="flex flex-col items-center">
                      <div
                        className="w-24 h-24 rounded-xl bg-white dark:bg-gray-900 mb-6 transition-all duration-300"
                        style={{ boxShadow: shadow.value }}
                      ></div>
                      <code className="text-sm font-semibold mb-1">shadow-{shadow.name}</code>
                      <p className="text-xs text-center text-gray-500">{shadow.usage}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Components */}
              <section id="components" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
                  <span className="p-3 rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
                    <Box className="w-6 h-6" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold">Components</h2>
                    <p className="text-gray-600 dark:text-gray-400">Interactive elements.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Buttons */}
                  <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
                    <h3 className="text-lg font-semibold mb-6">Buttons</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="default">Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
                    <h3 className="text-lg font-semibold mb-6">Tags & Badges</h3>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex flex-col gap-2 border-r border-gray-100 pr-6">
                        <span className="text-xs text-gray-500 font-mono">variant="code"</span>
                        <Tag variant="code">Code / Default</Tag>
                      </div>
                      <div className="flex flex-col gap-2 border-r border-gray-100 pr-6">
                        <span className="text-xs text-gray-500 font-mono">variant="skill"</span>
                        <Tag variant="skill">Skill Tag</Tag>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-xs text-gray-500 font-mono">variant="badge"</span>
                        <Tag variant="badge">System Badge</Tag>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <span className="text-xs text-gray-500 font-mono">variant="section-label"</span>
                      <Tag variant="section-label">Section Label (e.g. 01 — FOUNDATION)</Tag>
                    </div>
                  </div>

                  {/* Inline Links */}
                  <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
                    <h3 className="text-lg font-semibold mb-6">Inline Links</h3>
                    <div className="space-y-6">

                      <div className="flex flex-col gap-2">
                        <span className="text-xs text-gray-500 font-mono">Standard CTA Link</span>
                        <div
                          className="inline-flex items-center gap-1.5 cursor-pointer group"
                          style={{
                            fontSize: '13px',
                            fontWeight: 500,
                            color: '#1D857E',
                            fontFamily: 'Work Sans, sans-serif'
                          }}
                        >
                          View case study
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform duration-200 ease-out group-hover:translate-x-[3px]"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <span className="text-xs text-gray-500 font-mono">Narrative Text Link (Animated underline)</span>
                        <style>{`
                          .ds-inline-link:hover {
                            color: rgba(29, 133, 126, 1);
                          }
                          .ds-inline-link:hover::after {
                            transform: scaleX(1);
                          }
                          .ds-inline-link::after {
                            content: '';
                            position: absolute;
                            bottom: -2px;
                            left: 0;
                            right: 20px;
                            height: 1px;
                            background: rgba(29, 133, 126, 0.4);
                            transform: scaleX(0);
                            transform-origin: left;
                            transition: transform 0.25s ease;
                          }
                          .ds-inline-link:hover .ds-arrow-icon {
                            transform: translateX(3px);
                          }
                        `}</style>
                        <div
                          className="ds-inline-link cursor-pointer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '15px',
                            fontWeight: 500,
                            color: 'rgba(29, 133, 126, 0.95)',
                            fontFamily: 'Work Sans, sans-serif',
                            textDecoration: 'none',
                            position: 'relative',
                            transition: 'color 0.2s ease',
                            width: 'fit-content'
                          }}
                        >
                          Looking for details? Reach out
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ds-arrow-icon transition-transform duration-200 ease-out"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Structural Components */}
                  <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 md:col-span-2">
                    <h3 className="text-lg font-semibold mb-6">Structural & Interactive Components</h3>

                    <div className="grid grid-cols-1 gap-12">
                      <div className="flex flex-col gap-4">
                        <span className="text-xs text-gray-500 font-mono">SectionHeader Element</span>
                        <div className="p-8 bg-gray-50 dark:bg-gray-900/40 rounded-xl border border-dashed border-gray-200 dark:border-gray-800">
                          <SectionHeader
                            label="Component Pattern"
                            title="Consistent Section Headings"
                            description="This standardizes the layout for all major content segments across the portfolio."
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-4">
                        <span className="text-xs text-gray-500 font-mono">CaseStudyCard Instances</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <CaseStudyCard
                            title="Featured Work Example"
                            description="Standard case study card used on the Home and Work pages."
                            tags={['UX Strategy', 'Visual Design']}
                            href="/design-system"
                            gradient="linear-gradient(135deg, rgba(29, 133, 126, 0.1) 0%, rgba(59, 197, 161, 0.1) 100%)"
                          />
                          <CaseStudyCard
                            title="Confidential Client"
                            description="Locked project display for sensitive client engagements."
                            tags={['Interaction Design', 'Systems']}
                            href="/design-system"
                            isClient={true}
                            gradient="rgba(71, 85, 105, 0.08)"
                            artifactHint={
                              <div className="w-full h-full flex items-center justify-center">
                                <div className="text-xs font-medium text-[#1D857E] bg-white/95 px-4 py-2 rounded-md border border-[#1D857E]/20 flex items-center gap-1.5 shadow-sm">
                                  <span>🔒</span> Confidential content
                                </div>
                              </div>
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Accessibility */}
              <section id="accessibility" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
                  <span className="p-3 rounded-lg bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                    <Eye className="w-6 h-6" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold">Accessibility</h2>
                    <p className="text-gray-600 dark:text-gray-400">WCAG 2.1 Compliance.</p>
                  </div>
                </div>

                <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="font-semibold mb-6 flex items-center gap-2">
                        <Monitor className="w-4 h-4" />
                        Contrast Ratios
                      </h3>
                      <ul className="space-y-4">
                        {[
                          { label: 'Normal Text', val: '4.5:1', pass: true, desc: 'Body text against background' },
                          { label: 'Large Text', val: '3.0:1', pass: true, desc: 'Headings (18pt+) against background' },
                          { label: 'UI Components', val: '3.0:1', pass: true, desc: 'Inputs, Borders, Icons' },
                        ].map((item) => (
                          <li key={item.label} className="flex flex-col gap-2 pb-4 border-b border-gray-100 dark:border-gray-800 last:border-0">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-sm">{item.label}</span>
                              <span className="flex items-center gap-2 font-mono text-xs bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-1 rounded">
                                {item.val} <Check className="w-3 h-3" />
                              </span>
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-6">Focus States</h3>
                      <div className="space-y-6">
                        <div className="p-6 bg-gray-50 dark:bg-gray-950 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                          <p className="text-sm mb-4 text-center text-gray-500">
                            Try tabbing through these elements
                          </p>
                          <div className="flex justify-center gap-4">
                            <button className="px-4 py-2 rounded bg-teal-500 text-white focus:ring-4 focus:ring-teal-500/40 focus:outline-none transition-shadow">
                              Button
                            </button>
                            <input
                              type="text"
                              placeholder="Input"
                              className="w-24 px-3 py-2 rounded border border-gray-300 dark:border-gray-600 focus:ring-4 focus:ring-teal-500/40 focus:outline-none focus:border-teal-500 bg-white dark:bg-gray-900"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>

        <div className="max-w-[1180px] mx-auto px-8 mt-20">
          <Footer />
        </div>
      </main>
    </div>
  );
}
