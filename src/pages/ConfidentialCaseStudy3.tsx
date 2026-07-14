import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, SearchCheck } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { SectionReveals } from '../components/animations/SectionReveals';
import { Footer } from '../components/Footer';
import heuristicsPreview from '../assets/2f8374a01ddd7212c48aacbeb9e0ea701ca03686.webp';

export function ConfidentialCaseStudy3() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <SectionReveals />

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

          {/* Title with Icon */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <h1
              className="text-[32px] md:text-[52px]"
              style={{
                lineHeight: '1.1',
                color: '#111827',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                margin: 0
              }}
            >
              Product Heuristics Evaluation
            </h1>
            <SearchCheck
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
              maxWidth: '820px'
            }}
          >
            A comprehensive heuristic evaluation for a life sciences analytics platform to identify usability issues and improve the overall user experience through systematic analysis and design system alignment.
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
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Role:</span> <span style={{ fontWeight: 500 }}>UX Researcher & UI Designer</span>
            </div>
            <span className="hidden md:inline" style={{ color: 'rgba(0, 0, 0, 0.15)' }}>|</span>
            <div>
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Platform:</span> <span style={{ fontWeight: 500 }}>Web Application</span>
            </div>
            <span className="hidden md:inline" style={{ color: 'rgba(0, 0, 0, 0.15)' }}>|</span>
            <div>
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Timeline:</span> <span style={{ fontWeight: 500 }}>4 weeks</span>
            </div>
            <span className="hidden md:inline" style={{ color: 'rgba(0, 0, 0, 0.15)' }}>|</span>
            <div>
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Industry:</span> <span style={{ fontWeight: 500 }}>Life Sciences</span>
            </div>
          </div>
        </div>
      </section>

      {/* BLURRED PREVIEW IMAGE */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-24">
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
                src={heuristicsPreview}
                alt="Heuristics Analysis Preview"
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
                  'A comprehensive heuristic evaluation of an analytics platform serving the life sciences industry',
                  'Identified usability issues across aesthetics, content consistency, and interaction design',
                  'Explored Salesforce Design System to align the product with modern design standards'
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
                  'The client sought to improve existing usability problems affecting end-user experience',
                  'Inconsistencies in design created unnecessary cognitive load during task completion',
                  'Opportunity to elevate overall UX/UI quality through systematic evaluation and redesign'
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

        {/* SECTION 2: EVALUATION HIGHLIGHTS */}
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
            Key Insights
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
            Evaluation Highlights
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
            Analysis revealed that consistency issues dominated the usability problems, accounting for a significant portion of identified concerns. The evaluation uncovered opportunities across multiple heuristic categories.
          </p>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Top Issue Category',
                value: 'Consistency & Standards',
                description: 'The largest category of issues, representing opportunities to unify design patterns and create a cohesive experience.'
              },
              {
                title: 'Severity Distribution',
                value: 'Mixed Impact',
                description: 'Issues ranged from minor problems to critical usability concerns requiring immediate attention.'
              },
              {
                title: 'Design System',
                value: 'Salesforce Lightning',
                description: 'Explored enterprise-grade design system to modernize and standardize the product interface.'
              }
            ].map((highlight, idx) => (
              <div
                key={idx}
                style={{
                  padding: '32px',
                  background: 'rgba(250, 250, 250, 0.5)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(29, 133, 126, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(29, 133, 126, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(250, 250, 250, 0.5)';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(29, 133, 126, 0.6)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '8px'
                  }}
                >
                  {highlight.title}
                </div>
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '12px'
                  }}
                >
                  {highlight.value}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: 'rgba(17, 24, 39, 0.7)',
                    fontFamily: 'Work Sans, sans-serif',
                    margin: 0
                  }}
                >
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: IMPACT & OUTCOMES */}
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
              marginBottom: '32px'
            }}
          >
            Impact & Recommendations
          </h2>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(29, 133, 126, 0.05) 0%, rgba(29, 133, 126, 0.02) 100%)',
              border: '1px solid rgba(29, 133, 126, 0.12)',
              borderRadius: '12px',
              padding: '40px'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Provided comprehensive usability audit identifying key areas for improvement',
                'Delivered actionable recommendations prioritized by severity and impact',
                'Proposed design system alignment to ensure long-term consistency and scalability'
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: 'rgba(17, 24, 39, 0.8)',
                    fontFamily: 'Work Sans, sans-serif',
                    paddingLeft: '28px',
                    position: 'relative'
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: '#1D857E',
                      fontWeight: 600,
                      fontSize: '18px'
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: CALL TO ACTION */}
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
              Want to see the complete case study?
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
              I'd be happy to walk you through the detailed heuristic analysis, findings breakdown, and design recommendations in a private conversation.
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
              <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default ConfidentialCaseStudy3;