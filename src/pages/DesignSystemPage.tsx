import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import { Copy, Check, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Tag } from '../components/ui/Tag';
import { SEO } from '../components/SEO';

export function DesignSystemPage() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (text: string, tokenName: string) => {
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
      { name: 'Primary Teal', value: '#1D857E', hex: '#1D857E', usage: 'Primary buttons, links, accents, active states' },
      { name: 'Primary Hover', value: '#178076', hex: '#178076', usage: 'Hover state for primary actions' },
      { name: 'Primary Light', value: '#CDE9E6', hex: '#CDE9E6', usage: 'Subtle backgrounds, badge tints' },
    ],
    neutral: [
      { name: 'Charcoal', value: '#1A1A1A', hex: '#1A1A1A', usage: 'Headings, primary text (high contrast)' },
      { name: 'Grey 900', value: '#111827', hex: '#111827', usage: 'Headings, primary text' },
      { name: 'Grey 700', value: 'rgba(17, 24, 39, 0.7)', hex: 'rgba(17, 24, 39, 0.7)', usage: 'Body text, paragraphs' },
      { name: 'Grey 500', value: '#6B7280', hex: '#6B7280', usage: 'Secondary text, captions, subtitles' },
      { name: 'Soft Grey', value: '#FAFAFA', hex: '#FAFAFA', usage: 'Page background, card tints' },
      { name: 'Border Soft', value: 'rgba(0, 0, 0, 0.06)', hex: 'rgba(0, 0, 0, 0.06)', usage: 'Subtle borders, dividers' },
    ],
    semantic: [
      { name: 'Success', value: '#10B981', hex: '#10B981', usage: 'Success states, positive feedback' },
      { name: 'Warning', value: '#F59E0B', hex: '#F59E0B', usage: 'Warning states, caution' },
      { name: 'Error', value: '#EF4444', hex: '#EF4444', usage: 'Error states, critical actions' },
      { name: 'Info', value: '#3B82F6', hex: '#3B82F6', usage: 'Informational states, hints' },
    ]
  };

  const typography = [
    {
      name: 'Hero Display',
      element: 'h1',
      size: '36px',
      mobile: '28px',
      weight: '600',
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
      family: 'Inter',
      usage: 'Hero headings, main page titles'
    },
    {
      name: 'Heading 1',
      element: 'h1',
      size: '32px',
      mobile: '27px',
      weight: '600',
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
      family: 'Inter',
      usage: 'Primary section headings'
    },
    {
      name: 'Heading 2',
      element: 'h2',
      size: '24px',
      mobile: '22px',
      weight: '600',
      lineHeight: '1.2',
      letterSpacing: '-0.01em',
      family: 'Inter',
      usage: 'Secondary section headings'
    },
    {
      name: 'Heading 3',
      element: 'h3',
      size: '18px',
      mobile: '16px',
      weight: '600',
      lineHeight: '1.3',
      letterSpacing: '0',
      family: 'Inter',
      usage: 'Card titles, subsections'
    },
    {
      name: 'Body Large',
      element: 'p',
      size: '17px',
      mobile: '17px',
      weight: '400',
      lineHeight: '1.5',
      letterSpacing: '0',
      family: 'Work Sans',
      usage: 'Lead paragraphs, important body text'
    },
    {
      name: 'Body Regular',
      element: 'p',
      size: '16px',
      mobile: '16px',
      weight: '400',
      lineHeight: '1.5',
      letterSpacing: '0',
      family: 'Work Sans',
      usage: 'Standard body text, descriptions'
    },
    {
      name: 'Caption',
      element: 'span',
      size: '14px',
      mobile: '14px',
      weight: '400',
      lineHeight: '1.5',
      letterSpacing: '0',
      family: 'Work Sans',
      usage: 'Captions, metadata, small text'
    },
    {
      name: 'Code Tag',
      element: 'code',
      size: '13px',
      mobile: '13px',
      weight: '500',
      lineHeight: '1.2',
      letterSpacing: '0.025em',
      family: 'JetBrains Mono',
      usage: 'Skill tags, code-style badges'
    },
    {
      name: 'Section Label',
      element: 'span',
      size: '14px',
      mobile: '14px',
      weight: '600',
      lineHeight: '1.2',
      letterSpacing: '0.12em',
      family: 'Inter',
      usage: 'Uppercase section labels, eyebrows'
    },
  ];

  const spacing = [
    { token: '96px', value: '96px', usage: 'Hero spacing, major page sections (Editorial scale)' },
    { token: '64px', value: '64px', usage: 'Large section breaks (Editorial scale)' },
    { token: '40px', value: '40px', usage: 'Section spacing (Editorial scale)' },
    { token: '32px', value: '32px', usage: 'Moderate section spacing (Editorial scale)' },
    { token: '24px', value: '24px', usage: 'Card padding, element spacing' },
    { token: '16px', value: '16px', usage: 'Standard padding, gaps' },
    { token: '12px', value: '12px', usage: 'Compact spacing' },
    { token: '8px', value: '8px', usage: 'Tight spacing, small gaps' },
    { token: '4px', value: '4px', usage: 'Minimal spacing, icon padding' },
  ];

  const radius = [
    { token: 'Cards', value: '16px', usage: 'Main cards, containers' },
    { token: 'Buttons', value: '12px', usage: 'Buttons, form inputs' },
    { token: 'Tags', value: '6px', usage: 'Skill tags, badges' },
    { token: 'Pills', value: '9999px', usage: 'Pill buttons, status dots' },
  ];

  const shadows = [
    { name: 'Card Default', value: '0 4px 20px rgba(0, 0, 0, 0.04)', usage: 'Default card elevation' },
    { name: 'Card Hover', value: '0 8px 24px rgba(0, 0, 0, 0.08)', usage: 'Card hover state' },
    { name: 'Primary Button', value: '0 4px 14px rgba(29, 133, 126, 0.22), 0 2px 6px rgba(29, 133, 126, 0.08)', usage: 'Primary button default' },
    { name: 'Primary Hover', value: '0 6px 20px rgba(29, 133, 126, 0.28), 0 2px 8px rgba(29, 133, 126, 0.12)', usage: 'Primary button hover' },
  ];

  const ColorSwatch = ({ name, value, usage }: { name: string; value: string; usage: string }) => (
    <div className="group relative">
      <div
        className="h-20 rounded-2xl mb-3 border transition-all cursor-pointer"
        style={{
          background: value,
          borderColor: 'rgba(0, 0, 0, 0.06)'
        }}
        onClick={() => copyToClipboard(value, name)}
      />
      <div className="space-y-1">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif', color: '#111827' }}>{name}</p>
          <button
            onClick={() => copyToClipboard(value, name)}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-gray-100 rounded"
            title="Copy value"
          >
            {copiedToken === name ? (
              <Check className="w-3.5 h-3.5 text-green-600" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-gray-500" />
            )}
          </button>
        </div>
        <code className="text-xs font-mono block" style={{ color: '#1D857E' }}>{value}</code>
        <p className="text-xs leading-tight" style={{ color: 'rgba(17, 24, 39, 0.45)' }}>{usage}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Design System - Sandeep S Kumbar"
        description="Complete design system documentation including colors, typography, spacing, and components"
        pathname="/design-system"
      />
      <Navigation />

      <main id="main-content">
        {/* Hero */}
        <section
          className="relative overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(29, 133, 126, 0.08) 0%, rgba(29, 133, 126, 0.04) 40%, #FFFFFF 80%)'
          }}
        >
          <div className="max-w-[1180px] mx-auto px-8 pt-24 pb-16 md:pt-32 md:pb-20">
            <div className="max-w-[800px]">
              <span
                className="section-label"
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#1D857E',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Portfolio Design System
              </span>

              <h1
                className="mt-4 mb-6"
                style={{
                  fontSize: '36px',
                  lineHeight: '1.2',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Design tokens, components, and patterns
              </h1>

              <p
                style={{
                  fontSize: '17px',
                  lineHeight: '1.5',
                  color: 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  maxWidth: '640px'
                }}
              >
                A comprehensive design system built with primary teal (#1D857E), soft grey (#FAFAFA), and charcoal (#1A1A1A).
                Featuring clean typography, editorial spacing (96/64/40/32px), and thoughtful micro-interactions.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <Tag variant="skill">Design Tokens</Tag>
                <Tag variant="skill">Component Library</Tag>
                <Tag variant="skill">Accessibility First</Tag>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1180px] mx-auto px-8 py-12 md:py-20">

          {/* SECTION 1: Color System */}
          <section className="mb-20 md:mb-32">
            <div className="mb-12">
              <span className="section-label" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1D857E', fontFamily: 'Inter, sans-serif' }}>
                01 — Foundation
              </span>
              <h2 className="mt-4 mb-4" style={{ fontSize: '32px', lineHeight: '1.2', fontWeight: 600, letterSpacing: '-0.02em', color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                Color System
              </h2>
              <p style={{ fontSize: '17px', lineHeight: '1.5', color: 'rgba(17, 24, 39, 0.7)', fontFamily: 'Work Sans, sans-serif', maxWidth: '720px' }}>
                Our color palette centers on primary teal (#1D857E) to convey trust, calm professionalism, and human-centered design.
                The neutral scale ensures excellent readability and visual hierarchy.
              </p>
            </div>

            {/* Primary Colors */}
            <div className="mb-12">
              <h3 className="mb-6" style={{ fontSize: '18px', fontWeight: 600, color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                Primary Colors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {colorTokens.primary.map((color) => (
                  <ColorSwatch key={color.name} name={color.name} value={color.value} usage={color.usage} />
                ))}
              </div>
            </div>

            {/* Neutral Colors */}
            <div className="mb-12">
              <h3 className="mb-6" style={{ fontSize: '18px', fontWeight: 600, color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                Neutral Scale
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {colorTokens.neutral.map((color) => (
                  <ColorSwatch key={color.name} name={color.name} value={color.value} usage={color.usage} />
                ))}
              </div>
            </div>

            {/* Semantic Colors */}
            <div className="mb-12">
              <h3 className="mb-6" style={{ fontSize: '18px', fontWeight: 600, color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                Semantic Colors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {colorTokens.semantic.map((color) => (
                  <ColorSwatch key={color.name} name={color.name} value={color.value} usage={color.usage} />
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 2: Typography */}
          <section className="mb-20 md:mb-32">
            <div className="mb-12">
              <span className="section-label" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1D857E', fontFamily: 'Inter, sans-serif' }}>
                02 — Typography
              </span>
              <h2 className="mt-4 mb-4" style={{ fontSize: '32px', lineHeight: '1.2', fontWeight: 600, letterSpacing: '-0.02em', color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                Type Scale
              </h2>
              <p style={{ fontSize: '17px', lineHeight: '1.5', color: 'rgba(17, 24, 39, 0.7)', fontFamily: 'Work Sans, sans-serif', maxWidth: '720px' }}>
                <strong style={{ fontWeight: 600 }}>Inter</strong> for headings (clarity, modern).
                <strong style={{ fontWeight: 600 }}> Work Sans</strong> for body text (readability, warmth).
                <strong style={{ fontWeight: 600 }}> JetBrains Mono</strong> for code elements (technical authenticity).
              </p>
            </div>

            <div className="space-y-10">
              {typography.map((type, index) => (
                <div key={index} className="pb-10 border-b" style={{ borderColor: 'rgba(0, 0, 0, 0.06)' }}>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    {/* Preview */}
                    <div className="lg:col-span-3">
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
                          type.name === 'Code Tag' ? '<skill-tag>' :
                            'The quick brown fox jumps over the lazy dog'}
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="lg:col-span-2 space-y-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(17, 24, 39, 0.45)' }}>Style</p>
                        <p className="text-sm font-mono" style={{ color: '#111827' }}>{type.name}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(17, 24, 39, 0.45)' }}>Size</p>
                          <p className="text-sm font-mono" style={{ color: '#1D857E' }}>{type.size}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(17, 24, 39, 0.45)' }}>Weight</p>
                          <p className="text-sm font-mono" style={{ color: '#1D857E' }}>{type.weight}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(17, 24, 39, 0.45)' }}>Line Height</p>
                          <p className="text-sm font-mono" style={{ color: '#1D857E' }}>{type.lineHeight}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(17, 24, 39, 0.45)' }}>Family</p>
                          <p className="text-sm font-mono" style={{ color: '#1D857E' }}>{type.family}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(17, 24, 39, 0.45)' }}>Usage</p>
                        <p className="text-xs leading-tight" style={{ color: 'rgba(17, 24, 39, 0.7)' }}>{type.usage}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: Spacing */}
          <section className="mb-20 md:mb-32">
            <div className="mb-12">
              <span className="section-label" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1D857E', fontFamily: 'Inter, sans-serif' }}>
                03 — Layout
              </span>
              <h2 className="mt-4 mb-4" style={{ fontSize: '32px', lineHeight: '1.2', fontWeight: 600, letterSpacing: '-0.02em', color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                Spacing Scale
              </h2>
              <p style={{ fontSize: '17px', lineHeight: '1.5', color: 'rgba(17, 24, 39, 0.7)', fontFamily: 'Work Sans, sans-serif', maxWidth: '720px' }}>
                Editorial spacing scale (96/64/40/32px) creates intentional breathing room and clear visual hierarchy.
                Smaller increments (16/12/8/4px) handle micro-spacing within components.
              </p>
            </div>

            <div className="space-y-4">
              {spacing.map((space) => (
                <div
                  key={space.token}
                  className="flex items-center gap-6 p-5 rounded-2xl border transition-all hover:border-gray-200"
                  style={{ borderColor: 'rgba(0, 0, 0, 0.06)', background: 'rgba(250, 250, 250, 0.4)' }}
                >
                  <div
                    className="rounded"
                    style={{
                      width: space.value,
                      height: '32px',
                      minWidth: space.value,
                      background: 'linear-gradient(to right, #1D857E, #178076)'
                    }}
                  />
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <code className="text-sm font-mono font-semibold" style={{ color: '#111827' }}>{space.token}</code>
                    </div>
                    <div>
                      <code className="text-sm font-mono" style={{ color: '#1D857E' }}>{space.value}</code>
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: 'rgba(17, 24, 39, 0.7)' }}>{space.usage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: Border Radius */}
          <section className="mb-20 md:mb-32">
            <div className="mb-12">
              <h2 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.2', fontWeight: 600, letterSpacing: '-0.02em', color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                Border Radius
              </h2>
              <p style={{ fontSize: '17px', lineHeight: '1.5', color: 'rgba(17, 24, 39, 0.7)', fontFamily: 'Work Sans, sans-serif', maxWidth: '720px' }}>
                Consistent corner rounding (16px for cards) creates a soft, approachable, modern aesthetic.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {radius.map((r) => (
                <div key={r.token} className="text-center">
                  <div
                    className="h-28 mb-4 mx-auto"
                    style={{
                      borderRadius: r.value,
                      maxWidth: '140px',
                      background: 'linear-gradient(135deg, #1D857E 0%, #3BC5A1 100%)'
                    }}
                  />
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Inter, sans-serif', color: '#111827' }}>{r.token}</p>
                  <code className="text-sm font-mono block mb-2" style={{ color: '#1D857E' }}>{r.value}</code>
                  <p className="text-xs" style={{ color: 'rgba(17, 24, 39, 0.45)' }}>{r.usage}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5: Shadows */}
          <section className="mb-20 md:mb-32">
            <div className="mb-12">
              <h2 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.2', fontWeight: 600, letterSpacing: '-0.02em', color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                Shadow System
              </h2>
              <p style={{ fontSize: '17px', lineHeight: '1.5', color: 'rgba(17, 24, 39, 0.7)', fontFamily: 'Work Sans, sans-serif', maxWidth: '720px' }}>
                Subtle shadows create depth without overwhelming the minimal aesthetic. Primary shadows use teal tints for brand cohesion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {shadows.map((shadow) => (
                <div key={shadow.name} className="p-6 rounded-2xl" style={{ background: 'rgba(250, 250, 250, 0.6)' }}>
                  <div
                    className="h-28 bg-white rounded-2xl mb-4"
                    style={{ boxShadow: shadow.value }}
                  />
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Inter, sans-serif', color: '#111827' }}>{shadow.name}</p>
                  <code className="text-xs font-mono block mb-2" style={{ color: '#1D857E' }}>{shadow.value}</code>
                  <p className="text-xs" style={{ color: 'rgba(17, 24, 39, 0.45)' }}>{shadow.usage}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 6: Components */}
          <section className="mb-20 md:mb-32">
            <div className="mb-12">
              <span className="section-label" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1D857E', fontFamily: 'Inter, sans-serif' }}>
                04 — Components
              </span>
              <h2 className="mt-4 mb-4" style={{ fontSize: '32px', lineHeight: '1.2', fontWeight: 600, letterSpacing: '-0.02em', color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                Component Library
              </h2>
              <p style={{ fontSize: '17px', lineHeight: '1.5', color: 'rgba(17, 24, 39, 0.7)', fontFamily: 'Work Sans, sans-serif', maxWidth: '720px' }}>
                Reusable, accessible components with consistent states and micro-interactions.
              </p>
            </div>

            {/* Buttons */}
            <div className="mb-12">
              <h3 className="mb-6" style={{ fontSize: '24px', fontWeight: 600, color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                Buttons
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl" style={{ background: 'rgba(250, 250, 250, 0.6)', border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                  <p className="text-sm font-semibold mb-4" style={{ fontFamily: 'Inter, sans-serif', color: '#111827' }}>Primary Button</p>
                  <Button variant="default" icon="arrow">
                    View Case Studies
                  </Button>
                  <code className="text-xs font-mono block mt-3" style={{ color: 'rgba(17, 24, 39, 0.45)' }}>
                    variant="default"
                  </code>
                </div>

                <div className="p-6 rounded-2xl" style={{ background: 'rgba(250, 250, 250, 0.6)', border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                  <p className="text-sm font-semibold mb-4" style={{ fontFamily: 'Inter, sans-serif', color: '#111827' }}>Secondary Button</p>
                  <Button variant="secondary">
                    Contact Me
                  </Button>
                  <code className="text-xs font-mono block mt-3" style={{ color: 'rgba(17, 24, 39, 0.45)' }}>
                    variant="secondary"
                  </code>
                </div>

                <div className="p-6 rounded-2xl" style={{ background: 'rgba(250, 250, 250, 0.6)', border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                  <p className="text-sm font-semibold mb-4" style={{ fontFamily: 'Inter, sans-serif', color: '#111827' }}>Outline Button</p>
                  <Button variant="outline">
                    All Work
                  </Button>
                  <code className="text-xs font-mono block mt-3" style={{ color: 'rgba(17, 24, 39, 0.45)' }}>
                    variant="outline"
                  </code>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-12">
              <h3 className="mb-6" style={{ fontSize: '24px', fontWeight: 600, color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                Tags
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl" style={{ background: 'rgba(250, 250, 250, 0.6)', border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                  <p className="text-sm font-semibold mb-4" style={{ fontFamily: 'Inter, sans-serif', color: '#111827' }}>Skill Tag</p>
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="skill">Figma</Tag>
                    <Tag variant="skill">Prototyping</Tag>
                    <Tag variant="skill">User Research</Tag>
                  </div>
                  <code className="text-xs font-mono block mt-3" style={{ color: 'rgba(17, 24, 39, 0.45)' }}>
                    variant="skill"
                  </code>
                </div>

                <div className="p-6 rounded-2xl" style={{ background: 'rgba(250, 250, 250, 0.6)', border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                  <p className="text-sm font-semibold mb-4" style={{ fontFamily: 'Inter, sans-serif', color: '#111827' }}>Badge Tag</p>
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="badge">Design Systems</Tag>
                    <Tag variant="badge">Accessibility</Tag>
                  </div>
                  <code className="text-xs font-mono block mt-3" style={{ color: 'rgba(17, 24, 39, 0.45)' }}>
                    variant="badge"
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7: Grid System */}
          <section className="mb-20 md:mb-32">
            <div className="mb-12">
              <span className="section-label" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1D857E', fontFamily: 'Inter, sans-serif' }}>
                05 — Grid & Layout
              </span>
              <h2 className="mt-4 mb-4" style={{ fontSize: '32px', lineHeight: '1.2', fontWeight: 600, letterSpacing: '-0.02em', color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                12-Column Grid
              </h2>
              <p style={{ fontSize: '17px', lineHeight: '1.5', color: 'rgba(17, 24, 39, 0.7)', fontFamily: 'Work Sans, sans-serif', maxWidth: '720px' }}>
                Max container width: 1200-1280px. Responsive breakpoints ensure optimal reading experience across all devices.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ background: 'rgba(250, 250, 250, 0.6)', border: '1px solid rgba(0, 0, 0, 0.06)' }}>
              <div className="grid grid-cols-12 gap-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-16 rounded flex items-center justify-center text-xs font-mono"
                    style={{ background: 'rgba(29, 133, 126, 0.15)', color: '#1D857E' }}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <p className="text-xs text-center mt-4" style={{ color: 'rgba(17, 24, 39, 0.45)' }}>12-column responsive grid with 16-24px gutters</p>
            </div>
          </section>

          {/* SECTION 8: Accessibility */}
          <section className="mb-20 md:mb-32">
            <div className="mb-12">
              <span className="section-label" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1D857E', fontFamily: 'Inter, sans-serif' }}>
                06 — Accessibility
              </span>
              <h2 className="mt-4 mb-4" style={{ fontSize: '32px', lineHeight: '1.2', fontWeight: 600, letterSpacing: '-0.02em', color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                WCAG 2.1 AA Compliant
              </h2>
              <p style={{ fontSize: '17px', lineHeight: '1.5', color: 'rgba(17, 24, 39, 0.7)', fontFamily: 'Work Sans, sans-serif', maxWidth: '720px' }}>
                95%+ compliance with proper ARIA attributes, keyboard navigation, skip links, semantic HTML, focus states, and motion preferences support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl" style={{ background: 'rgba(250, 250, 250, 0.6)', border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 600, color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                  Color Contrast
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" style={{ color: '#10B981' }} />
                    <span className="text-sm" style={{ color: 'rgba(17, 24, 39, 0.7)' }}>Primary text: 4.5:1 contrast ratio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" style={{ color: '#10B981' }} />
                    <span className="text-sm" style={{ color: 'rgba(17, 24, 39, 0.7)' }}>Large text: 3:1 contrast ratio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" style={{ color: '#10B981' }} />
                    <span className="text-sm" style={{ color: 'rgba(17, 24, 39, 0.7)' }}>UI elements: 3:1 contrast</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: 'rgba(250, 250, 250, 0.6)', border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 600, color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                  Interactive Elements
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" style={{ color: '#10B981' }} />
                    <span className="text-sm" style={{ color: 'rgba(17, 24, 39, 0.7)' }}>Keyboard navigation support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" style={{ color: '#10B981' }} />
                    <span className="text-sm" style={{ color: 'rgba(17, 24, 39, 0.7)' }}>Focus visible on all interactive elements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" style={{ color: '#10B981' }} />
                    <span className="text-sm" style={{ color: 'rgba(17, 24, 39, 0.7)' }}>Motion preferences respected</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 9: Design Principles */}
          <section className="mb-20 md:mb-32">
            <div className="mb-12">
              <span className="section-label" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1D857E', fontFamily: 'Inter, sans-serif' }}>
                07 — Philosophy
              </span>
              <h2 className="mt-4 mb-4" style={{ fontSize: '32px', lineHeight: '1.2', fontWeight: 600, letterSpacing: '-0.02em', color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                Design Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl" style={{ background: 'rgba(250, 250, 250, 0.6)', border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 600, color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                  Calm & Strategic
                </h3>
                <p className="text-sm" style={{ color: 'rgba(17, 24, 39, 0.7)', lineHeight: '1.5' }}>
                  Deliberate use of space and restraint creates a senior, thoughtful aesthetic that conveys strategic thinking.
                </p>
              </div>

              <div className="p-8 rounded-2xl" style={{ background: 'rgba(250, 250, 250, 0.6)', border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 600, color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                  Human-Centered
                </h3>
                <p className="text-sm" style={{ color: 'rgba(17, 24, 39, 0.7)', lineHeight: '1.5' }}>
                  Accessibility-first approach ensures usability for all users, with clear hierarchy and readable typography.
                </p>
              </div>

              <div className="p-8 rounded-2xl" style={{ background: 'rgba(250, 250, 250, 0.6)', border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 600, color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                  Modern Polish
                </h3>
                <p className="text-sm" style={{ color: 'rgba(17, 24, 39, 0.7)', lineHeight: '1.5' }}>
                  Subtle micro-interactions and glassmorphism details add contemporary sophistication without distraction.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="max-w-[1180px] mx-auto px-8 pb-20 md:pb-24">
          <Footer />
        </div>
      </main>
    </div>
  );
}
