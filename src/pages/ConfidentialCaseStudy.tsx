import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BarChart3 } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { SectionReveals } from '../components/animations/SectionReveals';
import { LayersPanel } from '../components/LayersPanel';
import { Footer } from '../components/Footer';
import auditImage from '../assets/be4b759848759754b68270bcb39f13b0ea089c33.webp';

export function ConfidentialCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <SectionReveals />
      <LayersPanel />

      {/* HERO SECTION - Two Column Layout */}
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

          {/* Title with Icon */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <h1
              className="text-[32px] md:text-[52px]"
              style={{
                lineHeight: '1.1',
                color: '#111827',
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 600,
                letterSpacing: '-0.02em',
                margin: 0
              }}
            >
              Research-Driven Website Revamp
            </h1>
            <BarChart3
              size={32}
              className="hidden md:block"
              style={{
                color: 'rgba(29, 133, 126, 0.5)',
                strokeWidth: 1.5,
                flexShrink: 0,
                marginTop: '8px'
              }}
            />
          </div>

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
            In-depth UX audit and strategic recommendations to improve usability, accessibility, and business outcomes for an enterprise website.
          </p>

          {/* Meta row */}
          <div
            className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5"
            style={{
              fontSize: '13px',
              color: 'rgba(17, 24, 39, 0.7)',
              fontFamily: 'Work Sans, sans-serif'
            }}
          >
            <div>
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Role:</span> <span style={{ fontWeight: 500 }}>Lead UX Researcher</span>
            </div>
            <span className="hidden md:inline" style={{ color: 'rgba(0, 0, 0, 0.15)' }}>|</span>
            <div>
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Platform:</span> <span style={{ fontWeight: 500 }}>Web (Desktop + Mobile)</span>
            </div>
            <span className="hidden md:inline" style={{ color: 'rgba(0, 0, 0, 0.15)' }}>|</span>
            <div>
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Timeline:</span> <span style={{ fontWeight: 500 }}>4 weeks</span>
            </div>
            <span className="hidden md:inline" style={{ color: 'rgba(0, 0, 0, 0.15)' }}>|</span>
            <div>
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Industry:</span> <span style={{ fontWeight: 500 }}>Enterprise SaaS</span>
            </div>
          </div>
        </div>
      </section>

      {/* BLURRED PREVIEW IMAGE */}
      <section data-layer-name="Confidential preview" className="pt-8 pb-12 md:pt-12 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '12px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              overflow: 'hidden',
              padding: '24px'
            }}
          >
            {/* Image with spacing */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                overflow: 'hidden'
              }}
            >
              <img
                src={auditImage}
                alt="UX Audit Research Preview"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />

              {/* Blurred overlay for bottom 75% */}
              <div
                style={{
                  position: 'absolute',
                  top: '25%',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  background: 'rgba(255, 255, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Confidential badge */}
                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: 'rgba(29, 133, 126, 0.9)',
                    fontFamily: 'Work Sans, sans-serif',
                    background: 'rgba(255, 255, 255, 0.95)',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: '1px solid rgba(29, 133, 126, 0.2)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  🔒 Confidential content — available upon request
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pb-20">
        {/* SECTION 1: WHAT & WHY (Two Columns) */}
        <section className="pt-12 pb-12 md:pt-16 md:pb-24">
          <div className="grid md:grid-cols-2 gap-12">
            {/* WHAT */}
            <div>
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
                Scope
              </div>
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
                What?
              </h2>
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
                  'Conducted an in-depth usability, accessibility, and performance audit of an existing enterprise website',
                  'Identified high-impact UX issues affecting engagement, trust, and conversions',
                  'Delivered clear, prioritized recommendations for short-term fixes and long-term experience improvements'
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: 'rgba(17, 24, 39, 0.75)',
                      fontFamily: 'Work Sans, sans-serif',
                      paddingLeft: '20px',
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

            {/* WHY */}
            <div>
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
                style={{
                  fontSize: '32px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '-0.01em',
                  marginBottom: '24px'
                }}
              >
                Why?
              </h2>
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
                  'A seamless and accessible website experience directly influences user trust, engagement, and business growth',
                  'Competitive analysis revealed UX and content gaps compared to industry peers',
                  'Stakeholders needed research-backed clarity to guide roadmap and investment decisions'
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: 'rgba(17, 24, 39, 0.75)',
                      fontFamily: 'Work Sans, sans-serif',
                      paddingLeft: '20px',
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

        {/* SECTION 2: MY ROLE & CONTRIBUTIONS */}
        <section className="pb-12 md:pb-24">
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
            Contributions
          </div>
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
            My Role
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.7',
              color: 'rgba(17, 24, 39, 0.75)',
              fontFamily: 'Work Sans, sans-serif',
              maxWidth: '780px',
              marginBottom: '32px'
            }}
          >
            I led the research and UX audit process, translating technical findings into actionable business recommendations.
          </p>

          <div
            className="p-6 md:p-8"
            style={{
              background: 'rgba(250, 250, 250, 0.6)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              borderRadius: '12px'
            }}
          >
            <ul
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}
            >
              {[
                'Led comprehensive UX audit covering usability, accessibility (WCAG 2.1 AA), and performance',
                'Conducted competitive analysis of 5 industry-leading websites to benchmark experience quality',
                'Analyzed user flows, information architecture, and content effectiveness',
                'Synthesized findings into a prioritized roadmap with effort-vs-impact assessment',
                'Presented research insights and recommendations to stakeholders',
                'Collaborated with product and engineering teams to align on implementation strategy'
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="text-[13px] md:text-[14px]"
                  style={{
                    lineHeight: '1.6',
                    color: 'rgba(17, 24, 39, 0.8)',
                    fontFamily: 'Work Sans, sans-serif',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: 'rgba(29, 133, 126, 0.7)',
                      fontWeight: 600,
                      fontSize: '14px'
                    }}
                  >
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 3: KEY FINDINGS */}
        <section className="pb-12 md:pb-24">
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
            Research
          </div>
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
            Key Findings
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.7',
              color: 'rgba(17, 24, 39, 0.75)',
              fontFamily: 'Work Sans, sans-serif',
              maxWidth: '780px',
              marginBottom: '40px'
            }}
          >
            The audit uncovered critical gaps across usability, accessibility, and content strategy. Below are highlights organized by impact area.
          </p>

          {/* Findings Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: 'Usability & Navigation',
                issues: [
                  'Unclear primary navigation structure affecting task completion',
                  'Inconsistent interaction patterns across key user journeys',
                  'Mobile experience lacked touch-friendly affordances'
                ]
              },
              {
                category: 'Accessibility',
                issues: [
                  'Multiple WCAG 2.1 AA violations (color contrast, keyboard navigation)',
                  'Missing ARIA labels and semantic HTML markup',
                  'Screen reader incompatibility on critical forms'
                ]
              },
              {
                category: 'Content & Messaging',
                issues: [
                  'Value proposition buried beneath promotional messaging',
                  'Jargon-heavy language reducing comprehension',
                  'Missing contextual help for complex workflows'
                ]
              },
              {
                category: 'Performance & Trust',
                issues: [
                  'Page load times exceeded industry benchmarks (3.2s avg)',
                  'Security indicators not visible on data-sensitive pages',
                  'Outdated design reducing perceived credibility'
                ]
              }
            ].map((finding, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(250, 250, 250, 0.5)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  borderRadius: '12px',
                  padding: '24px'
                }}
              >
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '16px'
                  }}
                >
                  {finding.category}
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  {finding.issues.map((issue, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.5',
                        color: 'rgba(17, 24, 39, 0.7)',
                        fontFamily: 'Work Sans, sans-serif',
                        paddingLeft: '18px',
                        position: 'relative'
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: 'rgba(29, 133, 126, 0.6)',
                          fontSize: '12px'
                        }}
                      >
                        →
                      </span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: IMPACT & OUTCOMES */}
        <section className="pb-12 md:pb-24">
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
            Results
          </div>
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
            Impact & Outcomes
          </h2>
          <div
            style={{
              background: 'rgba(29, 133, 126, 0.04)',
              border: '1px solid rgba(29, 133, 126, 0.1)',
              borderRadius: '12px',
              padding: '40px'
            }}
          >
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px'
              }}
            >
              {[
                'Provided stakeholders with a clear, prioritized roadmap aligned with business goals',
                'Research findings directly informed Q2 product roadmap decisions',
                'Established baseline UX metrics for future measurement',
                'Recommendations led to 3 immediate quick-win implementations',
                'Competitive analysis revealed 2 untapped content opportunities'
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
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5: CALL TO ACTION */}
        <section className="pb-12 md:pb-24">
          <div
            style={{
              background: 'rgba(29, 133, 126, 0.04)',
              borderRadius: '16px',
              padding: '56px 48px',
              border: '1px solid rgba(29, 133, 126, 0.1)',
              textAlign: 'center',
              maxWidth: '880px',
              margin: '0 auto'
            }}
          >
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 600,
                color: '#111827',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-0.01em',
                marginBottom: '16px'
              }}
            >
              Want to see the full audit report?
            </h2>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: 'rgba(17, 24, 39, 0.7)',
                fontFamily: 'Work Sans, sans-serif',
                marginBottom: '32px',
                maxWidth: '560px',
                margin: '0 auto 32px'
              }}
            >
              I'm happy to walk through the complete findings, methodology, and detailed recommendations in a private conversation.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px 28px',
                  background: '#1D857E',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: 'Work Sans, sans-serif',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#176D68';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(29, 133, 126, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#1D857E';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Contact Me
              </Link>

              <Link
                to="/work"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px 28px',
                  background: 'white',
                  color: '#1D857E',
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: 'Work Sans, sans-serif',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  border: '1px solid rgba(29, 133, 126, 0.2)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(29, 133, 126, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(29, 133, 126, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.borderColor = 'rgba(29, 133, 126, 0.2)';
                }}
              >
                Back to Works
              </Link>
            </div>
          </div>
        </section>

        {/* NAVIGATION */}
        <section data-layer-name="Up next" className="pt-12 pb-16 md:pt-16 md:pb-24" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
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
              to="/work/confidential-case-study-2"
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
              Next Case Study: Call Flow Development Tool
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default ConfidentialCaseStudy;