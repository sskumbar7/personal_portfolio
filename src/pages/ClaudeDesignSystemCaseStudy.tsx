import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { shadows } from '../utils/shadows';

// Statically imported images provided by user
import claudeBlogCover from '../assets/claude-blog-cover.png';
import claudeCover from '../assets/claude-cover.png';
import claudeConcept from '../assets/claude-concept.png';
import claudeApproach from '../assets/claude-approach.png';
import claudeFoundations from '../assets/claude-foundations.png';
import claudeTokens from '../assets/claude-tokens.png';
import claudeDesignMd from '../assets/claude-designmd.png';
import claudeColor from '../assets/claude-color.png';
import claudeType from '../assets/claude-type.png';
import claudeComponents from '../assets/claude-components.png';
import claudeButton from '../assets/claude-button.png';
import claudeDark from '../assets/claude-dark.png';
import claudeMobileFeed from '../assets/claude-mobile-feed.png';
import claudeWebDashboard from '../assets/claude-web-dashboard.png';
import claudePrinciples from '../assets/claude-principles.png';

export function ClaudeDesignSystemCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="I Let Claude Build a Design System. I Just Directed It. | Sandeep S Kumbar"
        description="A weekend experiment in treating AI as a design companion. Directing Claude to build a token-driven UI system for Studybud."
        keywords="Design Systems, AI Workflows, Claude AI, UX Design, Product Design, Handoff Optimization, Figma Variables"
        image="/claude-cover.png"
      />
      <Navigation />

      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(29, 133, 126, 0.11) 0%, rgba(29, 133, 126, 0.06) 40%, #FFFFFF 80%)'
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-20 pb-12">
          {/* Back link */}
          <Link
            to="/work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
              fontWeight: 500,
              color: 'rgba(29, 133, 126, 0.8)',
              fontFamily: 'Work Sans, sans-serif',
              textDecoration: 'none',
              marginBottom: '24px',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(29, 133, 126, 1)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(29, 133, 126, 0.8)'}
          >
            <ArrowLeft size={16} />
            Back to Selected Work
          </Link>

          {/* Title */}
          <h1
            className="text-[32px] md:text-[52px]"
            style={{
              lineHeight: '1.1',
              color: '#111827',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              marginBottom: '16px'
            }}
          >
            I Let Claude Build a Design System.<br /> I Just Directed It.
          </h1>

          {/* Value statement */}
          <p
            className="text-[15px] md:text-[17px]"
            style={{
              lineHeight: '1.5',
              color: 'rgba(17, 24, 39, 0.7)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '24px',
              maxWidth: '720px'
            }}
          >
            A weekend experiment in treating AI as a design companion.
          </p>

          {/* Meta row */}
          <div
            className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 text-[13px] md:text-[13px]"
            style={{
              color: 'rgba(17, 24, 39, 0.7)',
              fontFamily: 'Work Sans, sans-serif'
            }}
          >
            <div>
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Role:</span> <span style={{ fontWeight: 500 }}>Lead Experience Designer / UI Architect</span>
            </div>
            <span className="hidden md:inline" style={{ color: 'rgba(0, 0, 0, 0.15)' }}>|</span>
            <div>
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Platform:</span> <span style={{ fontWeight: 500 }}>Web + Mobile (Figma)</span>
            </div>
            <span className="hidden md:inline" style={{ color: 'rgba(0, 0, 0, 0.15)' }}>|</span>
            <div>
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Duration:</span> <span style={{ fontWeight: 500 }}>Weekend Experiment (2026)</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT - UNIFIED MAX-WIDTH CONTAINER (1200px) */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">

        {/* 1. COVER / HERO VISUAL */}
        <section className="pt-8 pb-12 md:pt-12 md:pb-24">
          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: shadows.card
            }}
          >
            <ImageWithFallback
              src={claudeBlogCover}
              alt="I Let Claude Build a Design System - Hero Cover"
              style={{
                width: '100%',
                maxHeight: '420px',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block'
              }}
            />
          </div>
          <p
            style={{
              fontSize: '13px',
              lineHeight: '1.5',
              color: 'rgba(17, 24, 39, 0.5)',
              fontFamily: 'Work Sans, sans-serif',
              marginTop: '12px',
              textAlign: 'center',
              marginBottom: '40px'
            }}
          >
            Claude Design System – Blog Cover Frame
          </p>

          <div
            style={{
              background: 'rgba(29, 133, 126, 0.04)',
              borderLeft: '3px solid rgba(29, 133, 126, 0.5)',
              padding: '24px 28px',
              borderRadius: '4px',
              marginBottom: '24px'
            }}
          >
            <p
              className="text-[17px] md:text-[19px]"
              style={{
                lineHeight: '1.6',
                color: 'rgba(17, 24, 39, 0.85)',
                fontFamily: 'Work Sans, sans-serif',
                fontStyle: 'italic',
                fontWeight: 500,
                margin: 0
              }}
            >
              A question had been nagging at me: could I design a system properly and let an AI do the actual building, while I stayed in the director's chair the whole way?
            </p>
          </div>

          <p
            className="text-[15px] md:text-[17px]"
            style={{
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.85)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '24px',
              textAlign: 'left'
            }}
          >
            So I picked a hobby concept, a study app I called Studybud, and sat down with Claude connected to Figma. I made every creative decision. Claude did the assembly on the canvas. What came out surprised me, and it changed how I think about these tools.
          </p>
        </section>

        {/* 2. CONTEXT -> "The concept" */}
        <section className="pb-12 md:pb-24 text-left">
          <div
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(29, 133, 126, 0.6)',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '8px'
            }}
          >
            Context
          </div>
          <h2
            className="text-[24px] md:text-[32px]"
            style={{
              fontWeight: 600,
              color: '#111827',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              marginBottom: '32px'
            }}
          >
            The Concept
          </h2>

          <p
            className="text-[15px] md:text-[17px]"
            style={{
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.85)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '24px'
            }}
          >
            Studybud is a personal concept for an AI study companion, the kind of app a student uses to turn messy notes into flashcards or get a concept explained at eleven at night. Three platforms, a handful of features, light and dark themes, one designer. Me.
          </p>

          <p
            className="text-[15px] md:text-[17px]"
            style={{
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.85)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '24px'
            }}
          >
            The point was never to fake a company. It was to see how far one person could get by directing an AI well. Which makes the real subject of this piece not the app, but the working relationship.
          </p>

          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: shadows.card,
              marginBottom: '12px',
              marginTop: '12px'
            }}
          >
            <ImageWithFallback
              src={claudeConcept}
              alt="Studybud Context Section Mockup"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
          <p
            style={{
              fontSize: '13px',
              lineHeight: '1.5',
              color: 'rgba(17, 24, 39, 0.5)',
              fontFamily: 'Work Sans, sans-serif',
              marginTop: '12px',
              textAlign: 'center',
              marginBottom: '32px'
            }}
          >
            02 Context – Studybud app screens concept layout
          </p>
        </section>

        {/* 3. APPROACH -> "How I worked with Claude" */}
        <section className="pb-12 md:pb-24 text-left">
          <div
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(29, 133, 126, 0.6)',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '8px'
            }}
          >
            Approach
          </div>
          <h2
            className="text-[24px] md:text-[32px]"
            style={{
              fontWeight: 600,
              color: '#111827',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              marginBottom: '32px'
            }}
          >
            How I Worked with Claude
          </h2>

          <p
            className="text-[15px] md:text-[17px]"
            style={{
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.85)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '24px'
            }}
          >
            Here is the most important thing I learned, and I learned it early: the AI was never the hard part. The context was.
          </p>

          <p
            className="text-[15px] md:text-[17px]"
            style={{
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.85)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '24px'
            }}
          >
            My first instinct was to prompt my way to a result. That gave me generic, forgettable output. So I stopped and did what I would for any serious work. I wrote the context down first: a brief, a couple of personas, the design principles I cared about, the platform constraints. Then I handed all of it to Claude before asking it to build anything.
          </p>

          <div
            style={{
              background: 'rgba(29, 133, 126, 0.04)',
              borderLeft: '3px solid rgba(29, 133, 126, 0.5)',
              padding: '24px 28px',
              borderRadius: '4px',
              marginBottom: '24px'
            }}
          >
            <p
              style={{
                fontSize: '17px',
                lineHeight: '1.6',
                color: 'rgba(17, 24, 39, 0.85)',
                fontFamily: 'Work Sans, sans-serif',
                margin: 0
              }}
            >
              The difference was night and day. With real context to stand on, it stopped guessing and started producing work I liked. That is why I think of this as context engineering rather than prompting. This is not a vending machine you pull output from. It is a companion you direct.
            </p>
          </div>

          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: shadows.card,
              marginBottom: '12px',
              marginTop: '12px'
            }}
          >
            <ImageWithFallback
              src={claudeApproach}
              alt="How I Worked with Claude - Workflow diagram"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
          <p
            style={{
              fontSize: '13px',
              lineHeight: '1.5',
              color: 'rgba(17, 24, 39, 0.5)',
              fontFamily: 'Work Sans, sans-serif',
              marginTop: '12px',
              textAlign: 'center',
              marginBottom: '32px'
            }}
          >
            03 Approach – Directing AI with structured context seeding
          </p>
        </section>

        {/* 4. FOUNDATIONS / TOKENS / HANDOFF -> the "how it's built" middle */}
        <section className="pb-12 md:pb-24 text-left">
          <div
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(29, 133, 126, 0.6)',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '8px'
            }}
          >
            Foundations
          </div>
          <h2
            className="text-[24px] md:text-[32px]"
            style={{
              fontWeight: 600,
              color: '#111827',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              marginBottom: '32px'
            }}
          >
            Building a System AI Could Understand
          </h2>

          <p
            className="text-[15px] md:text-[17px]"
            style={{
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.85)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '32px'
            }}
          >
            We built on a proper token architecture, the primitive and semantic model that systems like Polaris and Material use, not a flat pile of hex values. Primitives hold the raw palette, semantic tokens carry meaning, and components reference only the semantic layer.
          </p>

          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: shadows.card,
              marginBottom: '12px',
              marginTop: '12px'
            }}
          >
            <ImageWithFallback
              src={claudeFoundations}
              alt="Token Architecture Layout"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
          <p
            style={{
              fontSize: '13px',
              lineHeight: '1.5',
              color: 'rgba(17, 24, 39, 0.5)',
              fontFamily: 'Work Sans, sans-serif',
              marginTop: '12px',
              textAlign: 'center',
              marginBottom: '32px'
            }}
          >
            04 Foundations – Token architecture layers and mapping schema
          </p>

          <p
            className="text-[15px] md:text-[17px]"
            style={{
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.85)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '32px'
            }}
          >
            The result was 248 variables across three collections, every one carrying a description, a scope, and a code reference. Not one loose value. That discipline is tedious by hand, and exactly the kind of thing a well directed AI is good at.
          </p>

          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: shadows.card,
              marginBottom: '12px',
              marginTop: '12px'
            }}
          >
            <ImageWithFallback
              src={claudeTokens}
              alt="Tokens and Figma Variables Map"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
          <p
            style={{
              fontSize: '13px',
              lineHeight: '1.5',
              color: 'rgba(17, 24, 39, 0.5)',
              fontFamily: 'Work Sans, sans-serif',
              marginTop: '12px',
              textAlign: 'center',
              marginBottom: '32px'
            }}
          >
            Tokens and Variables – JSON variable mapping and scopes
          </p>

          <p
            className="text-[15px] md:text-[17px]"
            style={{
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.85)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '24px'
            }}
          >
            The part I enjoyed most: because every token has a plain description and clear rules, the whole system can be gathered into a single file that an AI can read and build from. The same context that helped Claude build the system can brief the next model that extends it. The system can describe itself.
          </p>

          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: shadows.card,
              marginBottom: '12px',
              marginTop: '12px'
            }}
          >
            <ImageWithFallback
              src={claudeDesignMd}
              alt="AI-readable Single Config File Specifications"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
          <p
            style={{
              fontSize: '13px',
              lineHeight: '1.5',
              color: 'rgba(17, 24, 39, 0.5)',
              fontFamily: 'Work Sans, sans-serif',
              marginTop: '12px',
              textAlign: 'center',
              marginBottom: '32px'
            }}
          >
            AI-readable – Single config files ready for context mapping
          </p>
        </section>

        {/* 5. CRAFT -> Color / Type / Spacing / Components / Button / Input */}
        <section className="pb-12 md:pb-24 text-left">
          <div
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(29, 133, 126, 0.6)',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '8px'
            }}
          >
            The Craft
          </div>
          <h2
            className="text-[24px] md:text-[32px]"
            style={{
              fontWeight: 600,
              color: '#111827',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              marginBottom: '32px'
            }}
          >
            The craft decisions stayed mine
          </h2>

          <p
            className="text-[15px] md:text-[17px]"
            style={{
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.85)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '40px'
            }}
          >
            This was the line I would not cross, and it is where the "AI will replace designers" anxiety really lives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

            {/* Color */}
            <div>
              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '16px'
                }}
              >
                Color System
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.5',
                  color: 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  marginBottom: '16px'
                }}
              >
                The colours were my call. A confident purple grounded in a warm neutral base, so long reading sessions stay comfortable.
              </p>
              <div
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: shadows.card,
                  marginBottom: '10px'
                }}
              >
                <ImageWithFallback
                  src={claudeColor}
                  alt="07 Color Section - Color Palette Specs"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: '1.5',
                  color: 'rgba(17, 24, 39, 0.5)',
                  fontFamily: 'Work Sans, sans-serif'
                }}
              >
                07 Color – A confident purple grounded in a warm neutral base
              </p>
            </div>

            {/* Typography & Spacing */}
            <div>
              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '16px'
                }}
              >
                Typography & Spacing Scale
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.5',
                  color: 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  marginBottom: '16px'
                }}
              >
                The type and spacing were my call too. One typeface tuned across a set of roles, on a four pixel base with separate mobile and web modes, so flipping one property re-scales the whole layout.
              </p>
              <div
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: shadows.card,
                  marginBottom: '10px'
                }}
              >
                <ImageWithFallback
                  src={claudeType}
                  alt="08 Type Section - Typography Scales"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: '1.5',
                  color: 'rgba(17, 24, 39, 0.5)',
                  fontFamily: 'Work Sans, sans-serif'
                }}
              >
                08 Type – Responsive layout type scaling configurations
              </p>
            </div>

          </div>

          <p
            className="text-[15px] md:text-[17px]"
            style={{
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.85)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '40px'
            }}
          >
            The notes I gave Claude deliberately withheld the specific values. They taught it how to structure whatever I decided, without deciding for me. The AI was excellent at execution and consistency. Taste and judgment were still my job, and that is exactly how it should be.
          </p>

          <h2
            className="text-[20px] md:text-[26px]"
            style={{
              fontWeight: 650,
              color: '#111827',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              marginBottom: '24px'
            }}
          >
            A library that composes itself
          </h2>

          <p
            className="text-[15px] md:text-[17px]"
            style={{
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.85)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '32px'
            }}
          >
            Then the components: buttons, inputs, badges, chips, avatars, alerts, and more, across roughly four hundred variants, every value bound to the semantic layer. We built them in small, verifiable steps. A collection, then primitives, then semantic tokens, then a validation pass, then components. Small steps keep you in control and let you catch errors while they are cheap.
          </p>

          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: shadows.card,
              marginBottom: '12px',
              marginTop: '12px'
            }}
          >
            <ImageWithFallback
              src={claudeComponents}
              alt="10 Components layout overview"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
          <p
            style={{
              fontSize: '13px',
              lineHeight: '1.5',
              color: 'rgba(17, 24, 39, 0.5)',
              fontFamily: 'Work Sans, sans-serif',
              marginTop: '12px',
              textAlign: 'center',
              marginBottom: '32px'
            }}
          >
            10 Components – Assembly of primary variants and visual layouts
          </p>

          <p
            className="text-[15px] md:text-[17px]"
            style={{
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.85)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '32px'
            }}
          >
            For the two components that carry the most weight, the button and the input, we went deeper, annotating each down to its parts and laying out the full range of states.
          </p>

          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: shadows.card,
              marginBottom: '12px',
              marginTop: '12px'
            }}
          >
            <ImageWithFallback
              src={claudeButton}
              alt="Button and Input components detailed structure"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
          <p
            style={{
              fontSize: '13px',
              lineHeight: '1.5',
              color: 'rgba(17, 24, 39, 0.5)',
              fontFamily: 'Work Sans, sans-serif',
              marginTop: '12px',
              textAlign: 'center',
              marginBottom: '32px'
            }}
          >
            Button and Input deep-dive – State mappings and anatomies annotations
          </p>
        </section>

        {/* 6. DARK MODE / IN PRODUCT -> "seeing it work" */}
        <section className="pb-12 md:pb-24 text-left">
          <div
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(29, 133, 126, 0.6)',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '8px'
            }}
          >
            Product
          </div>
          <h2
            className="text-[24px] md:text-[32px]"
            style={{
              fontWeight: 600,
              color: '#111827',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              marginBottom: '32px'
            }}
          >
            Seeing it work
          </h2>

          <p
            className="text-[15px] md:text-[17px]"
            style={{
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.85)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '32px'
            }}
          >
            Because every component referenced tokens and never raw hex, dark mode came almost for free. The same composition, re-themed by switching one mode.
          </p>

          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: shadows.card,
              marginBottom: '12px',
              marginTop: '12px'
            }}
          >
            <ImageWithFallback
              src={claudeDark}
              alt="Studybud Dark Mode Layout Mapping"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
          <p
            style={{
              fontSize: '13px',
              lineHeight: '1.5',
              color: 'rgba(17, 24, 39, 0.5)',
              fontFamily: 'Work Sans, sans-serif',
              marginTop: '12px',
              textAlign: 'center',
              marginBottom: '32px'
            }}
          >
            Dark Mode – Mode-switched semantic variables running side-by-side
          </p>

          <p
            className="text-[15px] md:text-[17px]"
            style={{
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.85)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '32px'
            }}
          >
            Then the real test: assembling the tokens and components into actual product screens, a mobile feed and a web dashboard, both drawn entirely from the library. Nothing bespoke.
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-start"
            style={{ marginBottom: '12px', marginTop: '12px' }}
          >
            {/* Mobile Feed */}
            <div
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: shadows.card
              }}
            >
              <ImageWithFallback
                src={claudeMobileFeed}
                alt="Studybud Mobile Feed – product screen composed from design system"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>

            {/* Web Dashboard */}
            <div
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: shadows.card
              }}
            >
              <ImageWithFallback
                src={claudeWebDashboard}
                alt="Studybud Web Dashboard – product screen composed from design system"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
          </div>
          <p
            style={{
              fontSize: '13px',
              lineHeight: '1.5',
              color: 'rgba(17, 24, 39, 0.5)',
              fontFamily: 'Work Sans, sans-serif',
              marginTop: '12px',
              textAlign: 'center',
              marginBottom: '32px'
            }}
          >
            Product Screens – Mobile feed and web dashboard, composed entirely from the design system library
          </p>


        </section>

        {/* 7. TROUBLESHOOT -> "It was not all smooth" */}
        <section className="pb-12 md:pb-24 text-left">
          <div
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(29, 133, 126, 0.6)',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '8px'
            }}
          >
            Challenges
          </div>
          <h2
            className="text-[24px] md:text-[32px]"
            style={{
              fontWeight: 600,
              color: '#111827',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              marginBottom: '32px'
            }}
          >
            It was not all smooth
          </h2>

          <p
            className="text-[15px] md:text-[17px]"
            style={{
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.85)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '24px'
            }}
          >
            The hype usually skips this part, so I will not. Design tooling has real quirks. A single mistake could undo a chunk of work. Content could collapse if properties were set in the wrong order. Getting unstuck came down to me knowing what the result was supposed to look like, and knowing the tool well enough to fix it.
          </p>

          <div
            style={{
              background: 'rgba(29, 133, 126, 0.04)',
              borderLeft: '3px solid rgba(29, 133, 126, 0.5)',
              padding: '24px 28px',
              borderRadius: '4px',
              marginBottom: '24px'
            }}
          >
            <p
              style={{
                fontSize: '17px',
                lineHeight: '1.6',
                color: 'rgba(17, 24, 39, 0.85)',
                fontFamily: 'Work Sans, sans-serif',
                margin: 0
              }}
            >
              That was the quietest lesson and maybe the most important. The AI extends your reach. It does not replace your understanding. Someone who did not know design systems could have produced something that looked plausible and was quietly broken underneath.
            </p>
          </div>
        </section>

        {/* 8. CLOSE -> Accessibility / Principles -> "What I took away" */}
        <section className="pb-12 md:pb-24 text-left">
          <div
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(29, 133, 126, 0.6)',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '8px'
            }}
          >
            Principles
          </div>
          <h2
            className="text-[24px] md:text-[32px]"
            style={{
              fontWeight: 600,
              color: '#111827',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              marginBottom: '32px'
            }}
          >
            What I took away
          </h2>

          <p
            className="text-[15px] md:text-[17px]"
            style={{
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.85)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '24px'
            }}
          >
            These tools do not replace designers. They extend the ones who know how to direct them. Line up the skills that made this work and prompting is near the bottom. What mattered was knowing my craft well enough to judge, engineering the context, decomposing the work into checkable steps, and keeping taste on my side of the line.
          </p>

          <p
            className="text-[15px] md:text-[17px]"
            style={{
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.85)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '24px'
            }}
          >
            A design system is thousands of small decisions made once, correctly, so the next screen comes easy. This one was built as an experiment, with AI handling the assembly and human judgment setting the direction. If you are wondering where you fit in all of this: right in the director's chair. Bring the context. Make the decisions. Hand over the assembly, not the judgment.
          </p>

          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: shadows.card,
              marginBottom: '12px',
              marginTop: '12px'
            }}
          >
            <ImageWithFallback
              src={claudePrinciples}
              alt="14 Principles and close checklist"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
          <p
            style={{
              fontSize: '13px',
              lineHeight: '1.5',
              color: 'rgba(17, 24, 39, 0.5)',
              fontFamily: 'Work Sans, sans-serif',
              marginTop: '12px',
              textAlign: 'center',
              marginBottom: '32px'
            }}
          >
            14 Principles – Takeaways on AI-driven design authorship
          </p>

          <div
            style={{
              marginTop: '40px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(0, 0, 0, 0.08)'
            }}
          >
            <p
              style={{
                fontSize: '14px',
                fontStyle: 'italic',
                color: 'rgba(17, 24, 39, 0.5)',
                fontFamily: 'Work Sans, sans-serif',
                margin: 0
              }}
            >
              Studybud is a personal concept project, built in Figma with Claude as a build companion, 2026.
            </p>
          </div>
        </section>

        {/* BOTTOM NAVIGATION LINKS */}
        <section className="py-12 border-t border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link
              to="/work"
              className="w-full md:w-auto justify-center md:justify-start"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgba(29, 133, 126, 0.8)',
                fontFamily: 'Work Sans, sans-serif',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid rgba(29, 133, 126, 0.2)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(29, 133, 126, 1)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(29, 133, 126, 0.8)'}
            >
              <ArrowLeft size={16} />
              Back to Selected Work
            </Link>

            <Link
              to="/work/discussion-forum"
              className="w-full md:w-auto justify-center md:justify-start"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgba(29, 133, 126, 0.8)',
                fontFamily: 'Work Sans, sans-serif',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid rgba(29, 133, 126, 0.2)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(29, 133, 126, 1)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(29, 133, 126, 0.8)'}
            >
              Next Case Study: Discussion Forum
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pb-20">
        <Footer />
      </div>
    </div>
  );
}
