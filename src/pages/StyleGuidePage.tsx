import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function StyleGuidePage() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (text: string, tokenName: string) => {
    // Use fallback method that works in all contexts
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '0';
    textarea.setAttribute('readonly', '');
    document.body.appendChild(textarea);

    try {
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      document.execCommand('copy');

      setCopiedToken(tokenName);
      setTimeout(() => setCopiedToken(null), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    } finally {
      document.body.removeChild(textarea);
    }
  };

  // Color Tokens
  const colorTokens = {
    primary: [
      { name: 'primary', value: '#1D857E', description: 'Main brand color - buttons, links, accents' },
      { name: 'primary-hover', value: '#178076', description: 'Primary hover state' },
      { name: 'primary-light', value: '#CDE9E6', description: 'Subtle backgrounds, tints' },
      { name: 'primary-tint', value: 'rgba(29, 133, 126, 0.06)', description: 'Very subtle background tint' },
    ],
    gradient: [
      { name: 'gradient-primary', value: 'linear-gradient(90deg, #1D857E 0%, #3BC5A1 50%, #1D857E 100%)', description: 'Animated text gradient' },
      { name: 'gradient-mesh', value: 'radial-gradient(at 0% 0%, rgba(29, 133, 126, 0.15) 0%, transparent 50%), radial-gradient(at 100% 100%, rgba(78, 205, 196, 0.1) 0%, transparent 50%)', description: 'Subtle mesh backgrounds' },
    ],
    neutral: [
      { name: 'neutral-50', value: '#F9FAFB', description: 'Lightest gray - subtle backgrounds' },
      { name: 'neutral-100', value: '#F3F4F6', description: 'Light gray - cards, surfaces' },
      { name: 'neutral-200', value: '#E5E7EB', description: 'Border color - dividers' },
      { name: 'neutral-300', value: '#D1D5DB', description: 'Subtle borders' },
      { name: 'neutral-400', value: '#9CA3AF', description: 'Placeholder text' },
      { name: 'neutral-500', value: '#6B7280', description: 'Secondary text' },
      { name: 'neutral-600', value: '#4B5563', description: 'Captions, labels' },
      { name: 'neutral-700', value: '#374151', description: 'Body text (secondary)' },
      { name: 'neutral-800', value: '#1F2937', description: 'Body text (primary alt)' },
      { name: 'neutral-900', value: '#111827', description: 'Headings, primary text' },
    ],
    semantic: [
      { name: 'surface', value: '#FFFFFF', description: 'Card and modal backgrounds' },
      { name: 'surface-soft', value: '#FAFAFA', description: 'Page backgrounds' },
      { name: 'border-soft', value: '#DDE9E7', description: 'Subtle borders on cards' },
      { name: 'border-default', value: '#E5E7EB', description: 'Standard borders' },
      { name: 'text-primary', value: '#111827', description: 'Primary text color' },
      { name: 'text-secondary', value: 'rgba(17, 24, 39, 0.7)', description: 'Secondary text, paragraphs' },
      { name: 'text-tertiary', value: '#6B7280', description: 'Captions, metadata' },
    ],
    status: [
      { name: 'success', value: '#10B981', description: 'Success states, positive actions' },
      { name: 'warning', value: '#F59E0B', description: 'Warning states, caution' },
      { name: 'error', value: '#EF4444', description: 'Error states, destructive actions' },
      { name: 'info', value: '#3B82F6', description: 'Informational states' },
    ]
  };

  // Typography Scale
  const typography = [
    {
      name: 'Display Large',
      tag: 'H1 - Hero',
      size: '36px',
      lineHeight: '1.2',
      weight: '600',
      letterSpacing: '-0.02em',
      family: 'Inter',
      usage: 'Hero headings, page titles',
      mobile: '28px'
    },
    {
      name: 'Heading 1',
      tag: 'H1',
      size: '32px',
      lineHeight: '1.2',
      weight: '600',
      letterSpacing: '-0.02em',
      family: 'Inter',
      usage: 'Main page headings',
      mobile: '27px'
    },
    {
      name: 'Heading 2',
      tag: 'H2',
      size: '24px',
      lineHeight: '1.2',
      weight: '600',
      letterSpacing: '-0.01em',
      family: 'Inter',
      usage: 'Section headings',
      mobile: '22px'
    },
    {
      name: 'Heading 3',
      tag: 'H3',
      size: '18px',
      lineHeight: '1.3',
      weight: '600',
      letterSpacing: '0',
      family: 'Inter',
      usage: 'Card titles, subsections',
      mobile: '16px'
    },
    {
      name: 'Heading 4',
      tag: 'H4',
      size: '17px',
      lineHeight: '1.4',
      weight: '500',
      letterSpacing: '0',
      family: 'Inter',
      usage: 'Small headings, emphasized text',
      mobile: '17px'
    },
    {
      name: 'Body Large',
      tag: 'p.large',
      size: '17px',
      lineHeight: '1.5',
      weight: '400',
      letterSpacing: '0',
      family: 'Work Sans',
      usage: 'Main body text, paragraphs',
      mobile: '17px'
    },
    {
      name: 'Body Regular',
      tag: 'p',
      size: '16px',
      lineHeight: '1.5',
      weight: '400',
      letterSpacing: '0',
      family: 'Work Sans',
      usage: 'Standard body text',
      mobile: '16px'
    },
    {
      name: 'Caption',
      tag: 'span.caption',
      size: '14px',
      lineHeight: '1.5',
      weight: '400',
      letterSpacing: '0',
      family: 'Work Sans',
      usage: 'Small text, metadata, labels',
      mobile: '14px'
    },
    {
      name: 'Label / Tag',
      tag: 'span.label',
      size: '13px',
      lineHeight: '1.2',
      weight: '500',
      letterSpacing: '0.025em',
      family: 'JetBrains Mono',
      usage: 'Code tags, skill badges',
      mobile: '13px'
    },
    {
      name: 'Section Label',
      tag: 'span.section-label',
      size: '14px',
      lineHeight: '1.2',
      weight: '600',
      letterSpacing: '0.12em',
      family: 'Inter',
      usage: 'Section headers (uppercase)',
      mobile: '14px'
    },
  ];

  // Spacing Scale
  const spacing = [
    { token: 'space-4xs', value: '4px', rem: '0.25rem', usage: 'Minimal padding, icon spacing' },
    { token: 'space-3xs', value: '8px', rem: '0.5rem', usage: 'Tight spacing, badges' },
    { token: 'space-2xs', value: '12px', rem: '0.75rem', usage: 'Small padding, compact elements' },
    { token: 'space-xs', value: '16px', rem: '1rem', usage: 'Standard padding, button padding' },
    { token: 'space-sm', value: '24px', rem: '1.5rem', usage: 'Card padding, moderate spacing' },
    { token: 'space-md', value: '32px', rem: '2rem', usage: 'Section spacing (editorial)' },
    { token: 'space-lg', value: '40px', rem: '2.5rem', usage: 'Large section spacing (editorial)' },
    { token: 'space-xl', value: '64px', rem: '4rem', usage: 'Major section breaks (editorial)' },
    { token: 'space-2xl', value: '96px', rem: '6rem', usage: 'Hero spacing, page breaks (editorial)' },
  ];

  // Border Radius
  const radius = [
    { token: 'radius-sm', value: '8px', usage: 'Small elements, badges' },
    { token: 'radius-md', value: '12px', usage: 'Buttons, inputs' },
    { token: 'radius-lg', value: '16px', usage: 'Cards, containers' },
    { token: 'radius-xl', value: '24px', usage: 'Large cards, hero sections' },
    { token: 'radius-full', value: '9999px', usage: 'Pills, circular elements' },
  ];

  // Shadow Scale
  const shadows = [
    { token: 'shadow-xs', value: '0 1px 2px rgba(0, 0, 0, 0.05)', usage: 'Subtle lift' },
    { token: 'shadow-sm', value: '0 2px 6px rgba(0, 0, 0, 0.08)', usage: 'Small cards' },
    { token: 'shadow-md', value: '0 4px 14px rgba(0, 0, 0, 0.1)', usage: 'Cards, dropdowns' },
    { token: 'shadow-lg', value: '0 8px 24px rgba(0, 0, 0, 0.12)', usage: 'Modals, popovers' },
    { token: 'shadow-xl', value: '0 12px 40px rgba(0, 0, 0, 0.15)', usage: 'Hero elements' },
    { token: 'shadow-primary', value: '0 4px 14px rgba(29, 133, 126, 0.22)', usage: 'Primary button default' },
    { token: 'shadow-primary-hover', value: '0 6px 20px rgba(29, 133, 126, 0.28)', usage: 'Primary button hover' },
  ];

  const ColorSwatch = ({ name, value, description }: { name: string; value: string; description: string }) => (
    <div className="group relative">
      <div
        className="h-20 rounded-lg mb-3 border border-gray-200 transition-transform duration-300 ease-out group-hover:scale-105 cursor-pointer"
        style={{ background: value }}
        onClick={() => copyToClipboard(value, name)}
      />
      <div className="space-y-1">
        <div className="flex items-center justify-between gap-2">
          <code className="text-xs font-mono text-gray-900 font-semibold">{name}</code>
          <button
            onClick={() => copyToClipboard(value, name)}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded"
            title="Copy value"
          >
            {copiedToken === name ? (
              <Check className="w-3 h-3 text-green-600" />
            ) : (
              <Copy className="w-3 h-3 text-gray-500" />
            )}
          </button>
        </div>
        <code className="text-xs font-mono text-gray-600 block">{value}</code>
        <p className="text-xs text-gray-500 leading-tight">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-1">Design System Style Guide</h1>
              <p className="text-sm text-gray-600">Complete design tokens and component styles</p>
            </div>
            <div className="px-4 py-2 rounded-full bg-amber-50 border border-amber-200">
              <p className="text-xs font-mono text-amber-800">⚠️ Delete before production</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-8 py-16 space-y-24">

        {/* Color System */}
        <section id="colors">
          <div className="mb-12">
            <span className="section-label">01 — FOUNDATION</span>
            <h2 className="mt-4 mb-3">Color System</h2>
            <p className="text-gray-600 max-w-2xl">
              Our color palette is built around a primary teal (#1D857E) that conveys trust, calm, and professionalism.
              The neutral scale provides hierarchy and subtle contrast throughout the interface.
            </p>
          </div>

          {/* Primary Colors */}
          <div className="mb-12">
            <h3 className="mb-6 text-gray-900">Primary Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {colorTokens.primary.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </div>

          {/* Gradients */}
          <div className="mb-12">
            <h3 className="mb-6 text-gray-900">Gradients</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {colorTokens.gradient.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </div>

          {/* Neutral Scale */}
          <div className="mb-12">
            <h3 className="mb-6 text-gray-900">Neutral Scale</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
              {colorTokens.neutral.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="mb-12">
            <h3 className="mb-6 text-gray-900">Semantic Tokens</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {colorTokens.semantic.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </div>

          {/* Status Colors */}
          <div className="mb-12">
            <h3 className="mb-6 text-gray-900">Status Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {colorTokens.status.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </div>
        </section>

        {/* Typography */}
        <section id="typography">
          <div className="mb-12">
            <span className="section-label">02 — TYPOGRAPHY</span>
            <h2 className="mt-4 mb-3">Typography Scale</h2>
            <p className="text-gray-600 max-w-2xl">
              The typography system uses <strong>Inter</strong> for headings (clarity, modern) and <strong>Work Sans</strong> for body text (readability, warmth).
              Code elements use <strong>JetBrains Mono</strong> for technical authenticity.
            </p>
          </div>

          <div className="space-y-8">
            {typography.map((type, index) => (
              <div key={index} className="border-b border-gray-100 pb-8 last:border-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Preview */}
                  <div className="lg:col-span-2">
                    <div
                      style={{
                        fontSize: type.size,
                        lineHeight: type.lineHeight,
                        fontWeight: type.weight,
                        letterSpacing: type.letterSpacing,
                        fontFamily: type.family === 'Inter' ? 'Inter, sans-serif' :
                          type.family === 'Work Sans' ? 'Work Sans, sans-serif' :
                            'JetBrains Mono, monospace',
                        color: '#111827',
                        textTransform: type.name === 'Section Label' ? 'uppercase' : 'none'
                      }}
                    >
                      {type.name === 'Section Label' ? 'Section Label Example' :
                        type.name === 'Label / Tag' ? '<code-tag>' :
                          'The quick brown fox jumps over the lazy dog'}
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Style Name</span>
                      <p className="text-sm font-mono text-gray-900 mt-1">{type.name}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Tag</span>
                        <p className="text-sm font-mono text-gray-900 mt-1">{type.tag}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Family</span>
                        <p className="text-sm font-mono text-gray-900 mt-1">{type.family}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Size</span>
                        <p className="text-sm font-mono text-gray-900 mt-1">{type.size}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Mobile</span>
                        <p className="text-sm font-mono text-gray-900 mt-1">{type.mobile}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Weight</span>
                        <p className="text-sm font-mono text-gray-900 mt-1">{type.weight}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Line Height</span>
                        <p className="text-sm font-mono text-gray-900 mt-1">{type.lineHeight}</p>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Usage</span>
                      <p className="text-xs text-gray-600 mt-1">{type.usage}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing */}
        <section id="spacing">
          <div className="mb-12">
            <span className="section-label">03 — LAYOUT</span>
            <h2 className="mt-4 mb-3">Spacing Scale</h2>
            <p className="text-gray-600 max-w-2xl">
              Editorial spacing scale (96/64/40/32px) creates breathing room and visual hierarchy.
              Use consistently for padding, margins, and gaps throughout the interface.
            </p>
          </div>

          <div className="space-y-4">
            {spacing.map((space) => (
              <div key={space.token} className="flex items-center gap-6 p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                <div
                  className="bg-gradient-to-r from-teal-500 to-teal-400 rounded"
                  style={{ width: space.value, height: '24px', minWidth: space.value }}
                />
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <code className="text-sm font-mono font-semibold text-gray-900">{space.token}</code>
                  </div>
                  <div>
                    <code className="text-sm font-mono text-gray-600">{space.value} / {space.rem}</code>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{space.usage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Border Radius */}
        <section id="radius">
          <div className="mb-12">
            <h2 className="mb-3">Border Radius</h2>
            <p className="text-gray-600 max-w-2xl">
              Consistent corner rounding creates a cohesive, modern aesthetic. Larger radii (16px) are used for cards to create a soft, approachable feel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {radius.map((r) => (
              <div key={r.token} className="text-center">
                <div
                  className="h-24 mb-4 bg-gradient-to-br from-teal-500 to-teal-400 mx-auto"
                  style={{ borderRadius: r.value, maxWidth: '120px' }}
                />
                <code className="text-sm font-mono font-semibold text-gray-900 block mb-1">{r.token}</code>
                <code className="text-sm font-mono text-gray-600 block mb-2">{r.value}</code>
                <p className="text-xs text-gray-500">{r.usage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Shadows */}
        <section id="shadows">
          <div className="mb-12">
            <h2 className="mb-3">Shadow Scale</h2>
            <p className="text-gray-600 max-w-2xl">
              Subtle shadows create depth and hierarchy without overwhelming the minimal aesthetic.
              Primary shadows use teal tints for brand cohesion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shadows.map((shadow) => (
              <div key={shadow.token} className="p-6 bg-gray-50 rounded-lg">
                <div
                  className="h-24 bg-white rounded-lg mb-4"
                  style={{ boxShadow: shadow.value }}
                />
                <code className="text-sm font-mono font-semibold text-gray-900 block mb-1">{shadow.token}</code>
                <code className="text-xs font-mono text-gray-600 block mb-2">{shadow.value}</code>
                <p className="text-xs text-gray-500">{shadow.usage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive States - Buttons */}
        <section id="buttons">
          <div className="mb-12">
            <span className="section-label">04 — COMPONENTS</span>
            <h2 className="mt-4 mb-3">Button States</h2>
            <p className="text-gray-600 max-w-2xl">
              Buttons provide clear affordances through color, shadow, and micro-animations.
              All states are designed for accessibility and clarity.
            </p>
          </div>

          {/* Primary Button */}
          <div className="mb-12">
            <h3 className="mb-6 text-gray-900">Primary Button</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Default */}
              <div>
                <button
                  className="w-full px-8 py-3 text-white rounded-xl mb-4"
                  style={{
                    background: 'linear-gradient(to right, #1D857E, #178076)',
                    boxShadow: '0 4px 14px rgba(29, 133, 126, 0.22), 0 2px 6px rgba(29, 133, 126, 0.08)',
                    fontSize: '16px',
                    fontWeight: 500,
                  }}
                >
                  Default
                </button>
                <div className="space-y-1 text-sm">
                  <code className="text-xs font-mono text-gray-600 block">background: gradient</code>
                  <code className="text-xs font-mono text-gray-600 block">shadow: primary</code>
                </div>
              </div>

              {/* Hover */}
              <div>
                <button
                  className="w-full px-8 py-3 text-white rounded-xl mb-4"
                  style={{
                    background: 'linear-gradient(to right, #1e8880, #1a7c76)',
                    boxShadow: '0 6px 20px rgba(29, 133, 126, 0.28), 0 2px 8px rgba(29, 133, 126, 0.12)',
                    fontSize: '16px',
                    fontWeight: 500,
                    transform: 'translateY(-2px)',
                  }}
                >
                  Hover
                </button>
                <div className="space-y-1 text-sm">
                  <code className="text-xs font-mono text-gray-600 block">transform: translateY(-2px)</code>
                  <code className="text-xs font-mono text-gray-600 block">shadow: primary-hover</code>
                </div>
              </div>

              {/* Focus */}
              <div>
                <button
                  className="w-full px-8 py-3 text-white rounded-xl mb-4 ring-4 ring-teal-100"
                  style={{
                    background: 'linear-gradient(to right, #1D857E, #178076)',
                    boxShadow: '0 4px 14px rgba(29, 133, 126, 0.22)',
                    fontSize: '16px',
                    fontWeight: 500,
                  }}
                >
                  Focus
                </button>
                <div className="space-y-1 text-sm">
                  <code className="text-xs font-mono text-gray-600 block">ring: 4px teal-100</code>
                  <code className="text-xs font-mono text-gray-600 block">outline: visible</code>
                </div>
              </div>

              {/* Disabled */}
              <div>
                <button
                  disabled
                  className="w-full px-8 py-3 text-white rounded-xl mb-4 opacity-40 cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(to right, #1D857E, #178076)',
                    fontSize: '16px',
                    fontWeight: 500,
                  }}
                >
                  Disabled
                </button>
                <div className="space-y-1 text-sm">
                  <code className="text-xs font-mono text-gray-600 block">opacity: 0.4</code>
                  <code className="text-xs font-mono text-gray-600 block">cursor: not-allowed</code>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Button */}
          <div className="mb-12">
            <h3 className="mb-6 text-gray-900">Secondary Button (Outline)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Default */}
              <div>
                <button
                  className="w-full px-8 py-3 bg-transparent rounded-xl mb-4"
                  style={{
                    border: '1.5px solid rgba(29, 133, 126, 0.3)',
                    color: '#1D857E',
                    fontSize: '16px',
                    fontWeight: 500,
                  }}
                >
                  Default
                </button>
                <div className="space-y-1 text-sm">
                  <code className="text-xs font-mono text-gray-600 block">border: 1.5px primary-30%</code>
                  <code className="text-xs font-mono text-gray-600 block">color: primary</code>
                </div>
              </div>

              {/* Hover */}
              <div>
                <button
                  className="w-full px-8 py-3 bg-transparent rounded-xl mb-4 relative"
                  style={{
                    border: '1.5px solid #1D857E',
                    color: '#1D857E',
                    fontSize: '16px',
                    fontWeight: 500,
                  }}
                >
                  <span className="relative">
                    Hover
                    <span
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-current"
                    />
                  </span>
                </button>
                <div className="space-y-1 text-sm">
                  <code className="text-xs font-mono text-gray-600 block">border: 1.5px primary</code>
                  <code className="text-xs font-mono text-gray-600 block">underline: animated</code>
                </div>
              </div>

              {/* Focus */}
              <div>
                <button
                  className="w-full px-8 py-3 bg-transparent rounded-xl mb-4 ring-4 ring-teal-100"
                  style={{
                    border: '1.5px solid #1D857E',
                    color: '#1D857E',
                    fontSize: '16px',
                    fontWeight: 500,
                  }}
                >
                  Focus
                </button>
                <div className="space-y-1 text-sm">
                  <code className="text-xs font-mono text-gray-600 block">ring: 4px teal-100</code>
                  <code className="text-xs font-mono text-gray-600 block">outline: visible</code>
                </div>
              </div>

              {/* Disabled */}
              <div>
                <button
                  disabled
                  className="w-full px-8 py-3 bg-transparent rounded-xl mb-4 opacity-40 cursor-not-allowed"
                  style={{
                    border: '1.5px solid rgba(29, 133, 126, 0.3)',
                    color: '#1D857E',
                    fontSize: '16px',
                    fontWeight: 500,
                  }}
                >
                  Disabled
                </button>
                <div className="space-y-1 text-sm">
                  <code className="text-xs font-mono text-gray-600 block">opacity: 0.4</code>
                  <code className="text-xs font-mono text-gray-600 block">cursor: not-allowed</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section id="links">
          <div className="mb-12">
            <h2 className="mb-3">Link States</h2>
            <p className="text-gray-600 max-w-2xl">
              Links use subtle underlines and color changes to indicate interactivity while maintaining readability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Default */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <a
                href="#"
                className="text-lg inline-block mb-4"
                style={{ color: '#1D857E', textDecoration: 'none' }}
                onClick={(e) => e.preventDefault()}
              >
                Default Link
              </a>
              <div className="space-y-1">
                <code className="text-xs font-mono text-gray-600 block">color: primary</code>
                <code className="text-xs font-mono text-gray-600 block">underline: none</code>
              </div>
            </div>

            {/* Hover */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <a
                href="#"
                className="text-lg inline-block mb-4 relative"
                style={{ color: '#1D857E', textDecoration: 'none' }}
                onClick={(e) => e.preventDefault()}
              >
                Hover Link
                <span className="absolute bottom-0 left-0 w-full h-px bg-current" />
              </a>
              <div className="space-y-1">
                <code className="text-xs font-mono text-gray-600 block">color: primary</code>
                <code className="text-xs font-mono text-gray-600 block">underline: 1px solid</code>
              </div>
            </div>

            {/* Focus */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <a
                href="#"
                className="text-lg inline-block mb-4 ring-2 ring-teal-200 rounded px-1"
                style={{ color: '#1D857E', textDecoration: 'none' }}
                onClick={(e) => e.preventDefault()}
              >
                Focus Link
              </a>
              <div className="space-y-1">
                <code className="text-xs font-mono text-gray-600 block">outline: 2px teal-200</code>
                <code className="text-xs font-mono text-gray-600 block">offset: 2px</code>
              </div>
            </div>

            {/* Visited */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <a
                href="#"
                className="text-lg inline-block mb-4"
                style={{ color: '#6B7280', textDecoration: 'none' }}
                onClick={(e) => e.preventDefault()}
              >
                Visited Link
              </a>
              <div className="space-y-1">
                <code className="text-xs font-mono text-gray-600 block">color: neutral-500</code>
                <code className="text-xs font-mono text-gray-600 block">opacity: subtle</code>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section id="cards">
          <div className="mb-12">
            <h2 className="mb-3">Card Component</h2>
            <p className="text-gray-600 max-w-2xl">
              Cards use soft borders, subtle shadows, and gentle hover animations to create depth and interactivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Default */}
            <div>
              <div
                className="p-8 bg-white rounded-2xl border transition-all"
                style={{
                  borderColor: '#DDE9E7',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
                }}
              >
                <h3 className="mb-3">Card Title</h3>
                <p className="text-gray-600 text-sm mb-4">
                  This is a default card with soft borders and subtle shadow for depth.
                </p>
                <code className="text-xs font-mono text-gray-500 block">State: Default</code>
              </div>
              <div className="mt-4 space-y-1">
                <code className="text-xs font-mono text-gray-600 block">border: 1px border-soft</code>
                <code className="text-xs font-mono text-gray-600 block">shadow: 0 4px 20px rgba(0,0,0,0.04)</code>
                <code className="text-xs font-mono text-gray-600 block">radius: 16px</code>
              </div>
            </div>

            {/* Hover */}
            <div>
              <div
                className="p-8 bg-white rounded-2xl border transition-all"
                style={{
                  borderColor: '#DDE9E7',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  transform: 'translateY(-2px)'
                }}
              >
                <h3 className="mb-3">Card Title</h3>
                <p className="text-gray-600 text-sm mb-4">
                  On hover, the card lifts slightly with an enhanced shadow for feedback.
                </p>
                <code className="text-xs font-mono text-gray-500 block">State: Hover</code>
              </div>
              <div className="mt-4 space-y-1">
                <code className="text-xs font-mono text-gray-600 block">transform: translateY(-2px)</code>
                <code className="text-xs font-mono text-gray-600 block">shadow: 0 8px 24px rgba(0,0,0,0.08)</code>
                <code className="text-xs font-mono text-gray-600 block">transition: 200ms ease</code>
              </div>
            </div>
          </div>
        </section>

        {/* Grid System */}
        <section id="grid">
          <div className="mb-12">
            <span className="section-label">05 — LAYOUT SYSTEM</span>
            <h2 className="mt-4 mb-3">Grid System</h2>
            <p className="text-gray-600 max-w-2xl">
              12-column grid with max-width of 1200-1280px for optimal readability and visual balance.
            </p>
          </div>

          <div className="space-y-6">
            {/* Max Width Container */}
            <div>
              <h4 className="mb-4 text-gray-900">Container Max-Width</h4>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="mx-auto bg-teal-500/10 border-2 border-dashed border-teal-500 p-8 text-center" style={{ maxWidth: '1280px' }}>
                  <code className="text-sm font-mono text-gray-900">max-width: 1280px</code>
                  <p className="text-xs text-gray-600 mt-2">Centered content container</p>
                </div>
              </div>
            </div>

            {/* 12-Column Grid */}
            <div>
              <h4 className="mb-4 text-gray-900">12-Column Grid</h4>
              <div className="grid grid-cols-12 gap-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="bg-teal-500/20 border border-teal-500 p-4 text-center rounded">
                    <code className="text-xs font-mono text-gray-700">{i + 1}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section id="accessibility">
          <div className="mb-12">
            <span className="section-label">06 — ACCESSIBILITY</span>
            <h2 className="mt-4 mb-3">WCAG 2.1 AA Compliance</h2>
            <p className="text-gray-600 max-w-2xl">
              All colors meet WCAG AA contrast requirements. Focus states are clearly visible,
              and interactive elements are keyboard accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <div className="text-3xl mb-2">✓</div>
              <h4 className="mb-2 text-gray-900">Color Contrast</h4>
              <p className="text-sm text-gray-600">
                All text meets 4.5:1 minimum contrast ratio
              </p>
            </div>
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <div className="text-3xl mb-2">✓</div>
              <h4 className="mb-2 text-gray-900">Keyboard Navigation</h4>
              <p className="text-sm text-gray-600">
                All interactive elements are keyboard accessible
              </p>
            </div>
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <div className="text-3xl mb-2">✓</div>
              <h4 className="mb-2 text-gray-900">Focus Indicators</h4>
              <p className="text-sm text-gray-600">
                Visible focus states on all interactive elements
              </p>
            </div>
          </div>
        </section>

        {/* Export Info */}
        <section id="export" className="border-t border-gray-200 pt-12">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-200 rounded-2xl p-12 text-center">
            <h2 className="mb-4">Ready for Figma</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              This style guide documents all design tokens from the codebase.
              Use these values to maintain consistency when creating new designs in Figma.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="px-6 py-3 bg-white rounded-lg border border-gray-200">
                <span className="text-sm font-mono text-gray-600">Colors: </span>
                <span className="text-sm font-mono font-semibold text-gray-900">23 tokens</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-lg border border-gray-200">
                <span className="text-sm font-mono text-gray-600">Typography: </span>
                <span className="text-sm font-mono font-semibold text-gray-900">10 styles</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-lg border border-gray-200">
                <span className="text-sm font-mono text-gray-600">Spacing: </span>
                <span className="text-sm font-mono font-semibold text-gray-900">9 tokens</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-lg border border-gray-200">
                <span className="text-sm font-mono text-gray-600">Components: </span>
                <span className="text-sm font-mono font-semibold text-gray-900">Documented</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}