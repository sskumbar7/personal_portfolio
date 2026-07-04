import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles, Layout, Palette, Zap } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import moodAnalysisImg from '../assets/mood-analysis-screens.png';
import salesDashboardWebImg from '../assets/19bd8364dd3a95ae26abf854529d6f9120c96450.png';
import salesDashboardMobileImg from '../assets/e02a31deda600c6c9743f1084295215f9f0d9422.png';
import enterprisePortalLightImg from '../assets/27a65817732aa7028be464a92ac4c60b55f78e20.png';
import enterprisePortalDarkImg from '../assets/0b20820c391d24f5e7b7273eaf098bd14eb76f0f.png';
import aiAssistantImg from '../assets/2ba6e613e10f8f70ff75326ae963e88ed02f12b4.png';
import landingPageImg from '../assets/bbf8a972e71238478714f2b57020667ce7e187cb.png';


export function VisualDesignCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Visual Design Collection | Sandeep S Kumbar"
        description="A curated collection of visual design explorations, UI components, and design system artifacts."
        keywords="Visual Design, UI Design, Design System Components, Interface Design, Product Design"
        image="/visual-design-cover.png"
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
            Visual Design Collection
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
            A curated set of interface designs showcasing UI craftsmanship across mobile apps, dashboards, enterprise platforms, and conversational interfaces.
          </p>

          {/* Meta row */}
          <div
            className="flex flex-col md:flex-row gap-3 md:gap-5"
            style={{
              marginBottom: '32px'
            }}
          >
            {[
              { label: 'Role', value: 'Product Designer / UI Designer' },
              { label: 'Focus', value: 'Visual Design, UI Systems, Theming' },
              { label: 'Platforms', value: 'Mobile, Web, Dashboard, Enterprise' }
            ].map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '6px' }}>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'rgba(17, 24, 39, 0.5)',
                    fontFamily: 'Work Sans, sans-serif'
                  }}
                >
                  {item.label}:
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    color: 'rgba(17, 24, 39, 0.8)',
                    fontFamily: 'Work Sans, sans-serif'
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pb-20">
        {/* SECTION 1: OVERVIEW */}
        <section className="pt-8 pb-12 md:pt-12 md:pb-24">
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#111827',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              marginBottom: '24px'
            }}
          >
            Overview
          </h2>
          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.7)',
              fontFamily: 'Work Sans, sans-serif',
              maxWidth: '780px',
              margin: 0
            }}
          >
            This case study is a visual design–focused collection highlighting interface quality, layout systems, component consistency, and interaction patterns across multiple real-world products. Each project represents a different problem space but shares a common emphasis on clarity, usability, and visual polish.
          </p>
        </section>

        {/* SECTION 2: DESIGN PRINCIPLES */}
        <section className="pb-12 md:pb-24">
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#111827',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              marginBottom: '40px'
            }}
          >
            Design Principles
          </h2>

          <div className="grid md:grid-cols-4" style={{ gap: '24px' }}>
            {[
              {
                icon: Sparkles,
                title: 'Clarity First',
                description: 'Interfaces optimized for quick scanning and reduced cognitive load.'
              },
              {
                icon: Layout,
                title: 'Consistency at Scale',
                description: 'Reusable components, predictable layouts, and systemized spacing.'
              },
              {
                icon: Palette,
                title: 'Accessible by Default',
                description: 'Color contrast, typography hierarchy, and legible UI states.'
              },
              {
                icon: Zap,
                title: 'Delight through Restraint',
                description: 'Subtle motion, gradients, and feedback without visual noise.'
              }
            ].map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div
                  key={index}
                  style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '28px',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'rgba(29, 133, 126, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}
                  >
                    <IconComponent size={22} style={{ color: '#1D857E' }} />
                  </div>
                  <h3
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#111827',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '12px'
                    }}
                  >
                    {principle.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      lineHeight: '1.5',
                      color: 'rgba(17, 24, 39, 0.7)',
                      fontFamily: 'Work Sans, sans-serif',
                      margin: 0
                    }}
                  >
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: VISUAL DESIGN PROJECTS */}
        <section className="pb-12 md:pb-24">
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#111827',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              marginBottom: '64px'
            }}
          >
            Selected Visual Design Works
          </h2>

          {/* PROJECT 01: MOOD ANALYSIS TOOL */}
          <div style={{ marginBottom: '96px' }}>
            <div style={{ marginBottom: '24px' }}>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '12px'
                }}
              >
                Mood Analysis Tool
              </h3>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                {['Mobile App', 'Emotional Design', 'Micro-interactions'].map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      color: 'rgba(29, 133, 126, 0.8)',
                      background: 'rgba(29, 133, 126, 0.08)',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontFamily: 'Work Sans, sans-serif'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  maxWidth: '720px'
                }}
              >
                A lightweight mood check-in experience designed around emotional states, color psychology, and friendly micro-interactions.
              </p>
            </div>

            {/* Image Layout */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(29, 133, 126, 0.05) 0%, rgba(139, 92, 71, 0.05) 100%)',
                borderRadius: '16px',
                padding: '48px',
                display: 'flex',
                gap: '0',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid rgba(0, 0, 0, 0.04)'
              }}
            >
              <img
                src={moodAnalysisImg}
                alt="Mood Analysis Tool mobile screens"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
            <p
              style={{
                fontSize: '12px',
                color: 'rgba(17, 24, 39, 0.5)',
                fontFamily: 'Work Sans, sans-serif',
                fontStyle: 'italic',
                marginTop: '16px',
                textAlign: 'center'
              }}
            >
              Focus on emotional clarity, tone-sensitive colors, and approachable UI.
            </p>
          </div>

          {/* PROJECT 02: SALES DASHBOARD */}
          <div style={{ marginBottom: '96px' }}>
            <div style={{ marginBottom: '24px' }}>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '12px'
                }}
              >
                Sales Analytics Dashboard
              </h3>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                {['Dashboard', 'Data Visualization', 'Web App'].map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      color: 'rgba(29, 133, 126, 0.8)',
                      background: 'rgba(29, 133, 126, 0.08)',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontFamily: 'Work Sans, sans-serif'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  maxWidth: '720px'
                }}
              >
                A clean, data-dense dashboard designed to help business users quickly understand trends, performance, and summaries.
              </p>
            </div>

            {/* Image Layout - Web + Mobile */}
            <div className="grid md:grid-cols-[1.8fr_1fr]" style={{ gap: '32px', alignItems: 'center' }}>
              <div
                style={{
                  background: 'white',
                  borderRadius: '8px',
                  padding: '24px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)'
                }}
              >
                <img
                  src={salesDashboardWebImg}
                  alt="Sales Analytics Dashboard"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '4px',
                    display: 'block'
                  }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={salesDashboardMobileImg}
                  alt="Sales Analytics Mobile App"
                  style={{
                    width: 'auto',
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '600px',
                    borderRadius: '8px',
                    display: 'block',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
                  }}
                />
              </div>
            </div>
            <p
              style={{
                fontSize: '12px',
                color: 'rgba(17, 24, 39, 0.5)',
                fontFamily: 'Work Sans, sans-serif',
                fontStyle: 'italic',
                marginTop: '16px',
                textAlign: 'center'
              }}
            >
              Prioritized readability, hierarchy, and chart clarity.
            </p>
          </div>

          {/* PROJECT 03: CUSTOMER PORTAL (LIGHT & DARK) */}
          <div style={{ marginBottom: '96px' }}>
            <div style={{ marginBottom: '24px' }}>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '12px'
                }}
              >
                Enterprise Customer Portal
              </h3>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                {['Enterprise', 'Web App', 'Light & Dark Mode'].map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      color: 'rgba(29, 133, 126, 0.8)',
                      background: 'rgba(29, 133, 126, 0.08)',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontFamily: 'Work Sans, sans-serif'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  maxWidth: '720px'
                }}
              >
                A customer-facing portal designed for complex workflows, supporting both light and dark themes with consistent component behavior.
              </p>
            </div>

            {/* Image Layout - Split Light/Dark with Unified Background */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(29, 133, 126, 0.04) 0%, rgba(139, 92, 71, 0.04) 100%)',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid rgba(0, 0, 0, 0.04)'
              }}
            >
              <div className="grid md:grid-cols-2" style={{ gap: '24px' }}>
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(17, 24, 39, 0.4)',
                      marginBottom: '12px',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    Light Theme
                  </div>
                  <img
                    src={enterprisePortalLightImg}
                    alt="Light Theme Interface"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      display: 'block',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)'
                    }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(17, 24, 39, 0.4)',
                      marginBottom: '12px',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    Dark Theme
                  </div>
                  <img
                    src={enterprisePortalDarkImg}
                    alt="Dark Theme Interface"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      display: 'block',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)'
                    }}
                  />
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: '12px',
                color: 'rgba(17, 24, 39, 0.5)',
                fontFamily: 'Work Sans, sans-serif',
                fontStyle: 'italic',
                marginTop: '16px',
                textAlign: 'center'
              }}
            >
              Theme parity ensured across all components and states.
            </p>
          </div>

          {/* PROJECT 04: CONVERSATIONAL AI INTERFACE */}
          <div style={{ marginBottom: '96px' }}>
            <div style={{ marginBottom: '24px' }}>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '12px'
                }}
              >
                AI Assistant Interface
              </h3>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                {['Conversational UI', 'Web', 'Mobile'].map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      color: 'rgba(29, 133, 126, 0.8)',
                      background: 'rgba(29, 133, 126, 0.08)',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontFamily: 'Work Sans, sans-serif'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  maxWidth: '720px'
                }}
              >
                A conversational assistant interface designed for clarity, trust, and smooth handoff between AI responses and user actions.
              </p>
            </div>

            {/* Image Layout - Composed Web + Mobile */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(29, 133, 126, 0.03) 0%, rgba(139, 92, 71, 0.03) 100%)',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                overflow: 'hidden'
              }}
            >
              <img
                src={aiAssistantImg}
                alt="AI Assistant Web and Mobile Interface"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                  objectPosition: 'top'
                }}
              />
            </div>

            <p
              style={{
                fontSize: '12px',
                color: 'rgba(17, 24, 39, 0.5)',
                fontFamily: 'Work Sans, sans-serif',
                fontStyle: 'italic',
                marginTop: '16px',
                textAlign: 'center'
              }}
            >
              Focused on conversational hierarchy and response legibility.
            </p>
          </div>

          {/* PROJECT 05: MARKETING LANDING PAGE */}
          <div style={{ marginBottom: '96px' }}>
            <div style={{ marginBottom: '24px' }}>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '12px'
                }}
              >
                Product Landing Page
              </h3>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                {['Marketing', 'Web', 'Visual Storytelling'].map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      color: 'rgba(29, 133, 126, 0.8)',
                      background: 'rgba(29, 133, 126, 0.08)',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontFamily: 'Work Sans, sans-serif'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  maxWidth: '720px'
                }}
              >
                A responsive landing page designed to clearly communicate value, guide users through features, and drive app downloads.
              </p>
            </div>

            {/* Image Layout */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(29, 133, 126, 0.04) 0%, rgba(139, 92, 71, 0.04) 100%)',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid rgba(0, 0, 0, 0.04)'
              }}
            >
              <img
                src={landingPageImg}
                alt="Product Landing Page"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  display: 'block'
                }}
              />
            </div>
            <p
              style={{
                fontSize: '12px',
                color: 'rgba(17, 24, 39, 0.5)',
                fontFamily: 'Work Sans, sans-serif',
                fontStyle: 'italic',
                marginTop: '16px',
                textAlign: 'center'
              }}
            >
              Clear storytelling supported by strong visual rhythm.
            </p>
          </div>
        </section>

        {/* SECTION 4: WHAT THIS DEMONSTRATES */}
        <section className="pb-12 md:pb-24">
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#111827',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              marginBottom: '40px'
            }}
          >
            What This Work Demonstrates
          </h2>

          <div className="grid md:grid-cols-2" style={{ gap: '40px' }}>
            <div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                {[
                  'Strong visual hierarchy across platforms',
                  'Component-driven UI thinking',
                  'Theming and accessibility awareness'
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: 'rgba(17, 24, 39, 0.8)',
                      fontFamily: 'Work Sans, sans-serif',
                      paddingLeft: '24px',
                      position: 'relative'
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: '#1D857E',
                        fontWeight: 600
                      }}
                    >
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                {[
                  'Scalable design patterns',
                  'High attention to spacing, alignment, and polish'
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: 'rgba(17, 24, 39, 0.8)',
                      fontFamily: 'Work Sans, sans-serif',
                      paddingLeft: '24px',
                      position: 'relative'
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: '#1D857E',
                        fontWeight: 600
                      }}
                    >
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 5: CLOSING SUMMARY */}
        <section className="pb-12 md:pb-24">
          <div
            style={{
              background: 'rgba(29, 133, 126, 0.04)',
              borderRadius: '16px',
              padding: '48px',
              border: '1px solid rgba(29, 133, 126, 0.1)'
            }}
          >
            <p
              style={{
                fontSize: '17px',
                lineHeight: '1.7',
                color: 'rgba(17, 24, 39, 0.8)',
                fontFamily: 'Work Sans, sans-serif',
                margin: 0,
                maxWidth: '860px'
              }}
            >
              This visual design collection reflects my approach to crafting interfaces that are clean, usable, and scalable across different domains. While each project solves a unique problem, they are unified by consistent design principles and attention to detail.
            </p>
          </div>
        </section>

        {/* NAVIGATION */}
        <section className="pt-12 pb-16 md:pt-16 md:pb-24" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
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
              to="/work/confidential"
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
              Next Case Study: Research-Driven Website Revamp
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default VisualDesignCaseStudy;