import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Workflow } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { SectionReveals } from '../components/animations/SectionReveals';
import { Footer } from '../components/Footer';
import flowToolImage from '../assets/77a0cbc77af505d9a6124708f3f42639e3e077c2.webp';

export function ConfidentialCaseStudy2() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <SectionReveals />

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
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                margin: 0
              }}
            >
              Call Flow Development Tool
            </h1>
            <Workflow
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
            A web-based tool designed for flow developers to create and maintain call flows, enforces established call flow standards while expediting development workflows, and guides intelligent phone call routing to connect customers with the right support agents.
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
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Timeline:</span> <span style={{ fontWeight: 500 }}>6 weeks</span>
            </div>
            <span className="hidden md:inline" style={{ color: 'rgba(0, 0, 0, 0.15)' }}>|</span>
            <div>
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Industry:</span> <span style={{ fontWeight: 500 }}>Enterprise Software</span>
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
                src={flowToolImage}
                alt="Flow Development Tool Preview"
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
                  'A web-based tool designed for flow developers to create and maintain call flows',
                  'Enforces established call flow standards while expediting development workflows',
                  'Guides intelligent phone call routing to connect customers with the right support agents'
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
                  'Developers needed a specialized tool to streamline call flow creation and reduce development time',
                  'Maintaining consistency across call flows was challenging without enforced standards',
                  'Customer experience depends on efficient call routing to agents with appropriate expertise'
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

        {/* SECTION 2: MY APPROACH & PROCESS */}
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
            Methodology
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
            My Approach
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
            I followed a user-centered design process, starting with research and ending with post-launch evaluation to ensure the tool met developer needs.
          </p>

          {/* Process Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                number: '01',
                title: 'User Interviews & Research Synthesis',
                description: 'Conducted in-depth user interviews with flow developers to understand pain points, workflows, and requirements. Synthesized qualitative data to identify patterns and key insights.'
              },
              {
                number: '02',
                title: 'User Journey & Flow Definition',
                description: 'Mapped out user journeys and defined the flow structure before jumping into visual designs, ensuring a solid foundation based on actual user needs.'
              },
              {
                number: '03',
                title: 'Design & Stakeholder Collaboration',
                description: 'Created high-fidelity designs and iterated based on stakeholder feedback. Collaborated closely with product and engineering teams to finalize the design direction.'
              },
              {
                number: '04',
                title: 'Post-Launch Survey',
                description: 'Conducted a user survey after the feature was released to gather feedback on adoption, usability, and areas for improvement.'
              },
              {
                number: '05',
                title: 'Heuristic Evaluation',
                description: 'Performed comprehensive heuristic evaluation of the product against established usability principles to identify opportunities for refinement.'
              }
            ].map((step, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '24px',
                  padding: '32px',
                  background: idx % 2 === 0 ? 'rgba(250, 250, 250, 0.5)' : 'white',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(29, 133, 126, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(29, 133, 126, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = idx % 2 === 0 ? 'rgba(250, 250, 250, 0.5)' : 'white';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
                }}
              >
                {/* Number */}
                <div
                  style={{
                    fontSize: '28px',
                    fontWeight: 600,
                    color: 'rgba(29, 133, 126, 0.3)',
                    fontFamily: 'Inter, sans-serif',
                    flexShrink: 0,
                    width: '60px'
                  }}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#111827',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '8px'
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: 'rgba(17, 24, 39, 0.7)',
                      fontFamily: 'Work Sans, sans-serif',
                      margin: 0
                    }}
                  >
                    {step.description}
                  </p>
                </div>
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
            Impact & Outcomes
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
                'Streamlined call flow development with improved workflow efficiency',
                'Enhanced user experience through research-driven design decisions',
                'Established design patterns enabling scalable future development'
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
              I'd be happy to walk you through the research process, design decisions, and detailed outcomes in a private conversation.
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
              to="/work/confidential-case-study-3"
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
              Next Case Study: Heuristics Evaluation
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default ConfidentialCaseStudy2;