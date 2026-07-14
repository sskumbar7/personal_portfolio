import { Navigation } from '../components/Navigation';
import { SectionReveals } from '../components/animations/SectionReveals';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Shield, MessageCircle, ThumbsUp, UserCheck, Palette, Type, Grid3x3, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';
import mobileHome from '../assets/b92a8671aba19484df70d5b00dcb3fc6b567fa53.webp';
import mobileCreate from '../assets/4d5a27ec50ddb7ac13e4f8c03f26fb31c5bd4cfd.webp';
import mobileDetail from '../assets/812b0facbc73c95b10c8ebb1e1cec32d9fc24df4.webp';

// Core Flows
import heroImage from '../assets/13e06508fa565e6a916de46eba28a74c9e452b39.webp';
import loginFlow from '../assets/9acc539a382f66e721f1ed8fbca7ae282932ad23.webp';
import browseFlow from '../assets/7f4469d22cdce8df49731ecb7fe65719ce99a569.webp';
import createPostFlow from '../assets/e2bcae5819bc486f774930a0a5f66075302ce8e5.png';
import replyFlow from '../assets/72612e97302ec43d760405fb4db85c219fd39bb2.png';

// Web / Design Screens
import landingPageDesign from '../assets/8a80c5f22aba5bf46b75e7083d0132c4bf9d6c7a.webp';
import topicListingDesign from '../assets/024046386a2425ffa236cbb25c4ba7515941a17e.webp';
import postDetailsDesign from '../assets/16043d6f496b856ec2f44ef1d6daa78391bf6800.webp';
import createNewPostDesign from '../assets/aafa51483f84f99d61331ff2d888e1b54d58d1c4.webp';
import replyToDiscussionDesign from '../assets/fb6bd5d093f88a01f65745952d1faf47fa78309b.webp';

// Design System / UI Elements
import colorSystemImage from '../assets/befbc3f0803267c0ec86a20a0cf7cab64a627942.webp';
import typographyImage from '../assets/ed380d7db126e3f6f1bff5a4dbfc3b254db09e97.png';
import buttonVariantsImage from '../assets/41168b98aa9b7f53ecd60d2b268710cce1cac410.webp';
import cardAnatomyImage from '../assets/Card_anatomy.webp';

// Brand / Reference Logos
import componentConsistency1 from '../assets/2a4a44acb66830653a79cb8be98e84e234210834.webp';
import componentConsistency2 from '../assets/acb433052ee4b2cecaf021f76d400d96d5068c35.png';

import mayoClinicLogo from '../assets/905a241ff1bdc5bcea7ed3d12e1b4c0abf151367.png';
import patientLogo from '../assets/6979ac574ba1942a785503c4b93851bcb7dac767.png';
import inspireLogo from '../assets/d23c6aa78e9b4001ee532cec135d4d3c7d61f186.png';
import quoraLogo from '../assets/87a2b9caa3bedc7089e6c7df8d5b7bcf1141b603.png';
import stackOverflowLogo from '../assets/6dded04dabee7c688bddcb0b922d6ce1be252e39.png';



// FINAL – CASE STUDY LOCKED
export function DiscussionForumCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Discussion Forum Design - Case Study | Sandeep S Kumbar"
        description="UX case study: Designing a mobile-first discussion forum with focus on community engagement and content discovery."
        keywords="Discussion Forum Design, Mobile UX, Community Platform, UX Case Study, Product Design"
        image="/discussion-cover.png"
      />
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
            Discussion Forum
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
            Designing a moderated discussion platform focused on trust, engagement, and expert-led health conversations.
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
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Role:</span> <span style={{ fontWeight: 500 }}>Product Designer</span>
            </div>
            <span className="hidden md:inline" style={{ color: 'rgba(0, 0, 0, 0.15)' }}>|</span>
            <div>
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Platform:</span> <span style={{ fontWeight: 500 }}>Web + Mobile</span>
            </div>
            <span className="hidden md:inline" style={{ color: 'rgba(0, 0, 0, 0.15)' }}>|</span>
            <div>
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Duration:</span> <span style={{ fontWeight: 500 }}>Concept / Client Work</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT - UNIFIED MAX-WIDTH CONTAINER (1200px) */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">

        {/* HERO VISUAL */}
        <section className="pt-8 pb-12 md:pt-12 md:pb-24">
          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.08)'
            }}
          >
            <img
              src={heroImage}
              alt="Discussion Forum - Desktop and Mobile Interface"
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
              textAlign: 'center'
            }}
          >
            Discussion forum platform overview
          </p>
        </section>

        {/* OVERVIEW */}
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
            Overview
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
            Project Context
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
            Health Information seeking platform dedicated to providing reliable health information through various mediums such as articles, videos, and podcasts.
          </p>

          {/* Services - lightweight inline display */}
          <div>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'rgba(17, 24, 39, 0.6)',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '12px'
              }}
            >
              Services
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Articles', 'Videos', 'Podcasts', 'Newsletter', 'Webinar', 'Summits'].map((service, index) => (
                <span
                  key={index}
                  style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    background: 'rgba(29, 133, 126, 0.06)',
                    borderRadius: '16px',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'rgba(17, 24, 39, 0.7)',
                    fontFamily: 'Work Sans, sans-serif',
                    border: '1px solid rgba(29, 133, 126, 0.1)'
                  }}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM STATEMENT - HIGHLIGHTED PANEL */}
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
            Problem Statement
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
            The Challenge
          </h2>

          <div
            style={{
              background: 'rgba(29, 133, 126, 0.04)',
              borderLeft: '3px solid rgba(29, 133, 126, 0.5)',
              padding: '24px 28px',
              borderRadius: '4px'
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
              Despite offering valuable health content, the platform fails to provide a dedicated space for users to interact and discuss various health topics. Without a moderated forum, users miss out on peer support and community-driven insights, impacting the overall user experience and engagement levels.
            </p>
          </div>
        </section>

        {/* USER DETAILS */}
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
            User Details
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
            Understanding the Audience
          </h2>

          <div className="grid md:grid-cols-2" style={{ gap: '24px' }}>
            {[
              {
                title: 'Demographics',
                items: [
                  { label: 'Age Range', value: '16–60 years' },
                  { label: 'Gender', value: 'Both Male and Female' },
                  { label: 'Location', value: 'India' },
                  { label: 'Education Level', value: 'Educated individuals who can read and write in English' },
                  { label: 'Occupation', value: 'Mixed (students, professionals, homemakers, retirees)' }
                ]
              },
              {
                title: 'Interests',
                items: [
                  'Regularly practices yoga and meditation',
                  'Follows a balanced diet and is interested in alternative medicine like Ayurveda',
                  'Enjoys reading health-related articles, listening to podcasts, and watching health videos on weekends'
                ]
              },
              {
                title: 'User Goals',
                items: [
                  'To engage with a community of like-minded individuals',
                  'To stay informed about the latest health-related content',
                  'To learn from shared experiences and discussions'
                ]
              },
              {
                title: 'Needs & Expectations',
                items: [
                  'Reliable content verified by healthcare professionals',
                  'Opportunities to engage in meaningful discussions',
                  'Consume content across multiple formats'
                ]
              },
              {
                title: 'Motivations',
                items: [
                  'Feeling of belonging to a community',
                  'Improve personal health and well-being',
                  'Consume content in preferred formats'
                ]
              },
              {
                title: 'Pain Points & Frustrations',
                items: [
                  'Concerns about accuracy of health information',
                  'Difficulty navigating large volumes of content',
                  'Privacy and data security concerns'
                ]
              }
            ].map((card, cardIndex) => (
              <div
                key={cardIndex}
                style={{
                  background: '#FAFAFA',
                  borderRadius: '12px',
                  padding: '24px',
                  border: '1px solid rgba(0, 0, 0, 0.06)'
                }}
              >
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '16px'
                  }}
                >
                  {card.title}
                </h3>
                {cardIndex === 0 ? (
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {(card.items as { label: string; value: string }[]).map((item, index) => (
                      <div key={index}>
                        <div
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            color: 'rgba(29, 133, 126, 0.75)',
                            fontFamily: 'Inter, sans-serif',
                            marginBottom: '3px'
                          }}
                        >
                          {item.label}
                        </div>
                        <div
                          style={{
                            fontSize: '13px',
                            color: 'rgba(17, 24, 39, 0.8)',
                            fontFamily: 'Work Sans, sans-serif',
                            lineHeight: '1.4'
                          }}
                        >
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: '10px' }}>
                    {(card.items as string[]).map((item, index) => (
                      <li
                        key={index}
                        style={{
                          fontSize: '13px',
                          lineHeight: '1.5',
                          color: 'rgba(17, 24, 39, 0.75)',
                          fontFamily: 'Work Sans, sans-serif',
                          paddingLeft: '18px',
                          position: 'relative'
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: '0',
                            top: '7px',
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            background: 'rgba(29, 133, 126, 0.6)'
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT OBJECTIVES - SPLIT LAYOUT (LEFT: TITLE, RIGHT: LIST) */}
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
            Goals
          </div>

          <div className="grid md:grid-cols-5" style={{ gap: '48px', alignItems: 'start' }}>
            {/* Left: Title + Intro + Design Intent */}
            <div style={{ gridColumn: 'span 2' }}>
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
                Project Objectives
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: 'rgba(17, 24, 39, 0.65)',
                  fontFamily: 'Work Sans, sans-serif',
                  marginBottom: '32px'
                }}
              >
                Key goals established to guide the design and development of the discussion forum platform.
              </p>

              {/* Design Intent subheading and context */}
              <div>
                <h3
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(29, 133, 126, 0.8)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '12px'
                  }}
                >
                  Design Intent
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: '1.65',
                    color: 'rgba(17, 24, 39, 0.7)',
                    fontFamily: 'Work Sans, sans-serif',
                    marginBottom: '12px'
                  }}
                >
                  These objectives prioritize trust and quality in health discussions—where misinformation can have real consequences.
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: '1.65',
                    color: 'rgba(17, 24, 39, 0.7)',
                    fontFamily: 'Work Sans, sans-serif',
                    marginBottom: '12px'
                  }}
                >
                  Every design decision was filtered through the lens of fostering genuine peer support while maintaining content integrity.
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: '1.65',
                    color: 'rgba(17, 24, 39, 0.7)',
                    fontFamily: 'Work Sans, sans-serif',
                    margin: 0
                  }}
                >
                  The moderation system became central to balancing community engagement with platform credibility.
                </p>
              </div>
            </div>

            {/* Right: Vertical list of objectives */}
            <div style={{ gridColumn: 'span 3' }}>
              <div style={{ display: 'grid', gap: '24px' }}>
                {[
                  {
                    title: 'Enhance User Engagement',
                    description: 'Encourage users to ask questions, share knowledge, and participate in discussions.',
                    icon: MessageCircle
                  },
                  {
                    title: 'Facilitate Peer Support',
                    description: 'Enable users to support each other by sharing personal experiences and advice.',
                    icon: ThumbsUp
                  },
                  {
                    title: 'Ensure Quality and Trust',
                    description: 'Implement admin approval systems to maintain information quality.',
                    icon: Shield
                  },
                  {
                    title: 'Increase Platform Stickiness',
                    description: 'Create community features to encourage return visits.',
                    icon: CheckCircle2
                  }
                ].map((goal, index) => {
                  const IconComponent = goal.icon;
                  return (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        gap: '16px',
                        alignItems: 'flex-start',
                        paddingBottom: '24px',
                        borderBottom: index < 3 ? '1px solid rgba(0, 0, 0, 0.06)' : 'none'
                      }}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'rgba(29, 133, 126, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <IconComponent size={20} style={{ color: 'rgba(29, 133, 126, 0.8)' }} />
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: '16px',
                            fontWeight: 600,
                            color: '#111827',
                            fontFamily: 'Inter, sans-serif',
                            marginBottom: '4px',
                            lineHeight: '1.3'
                          }}
                        >
                          {goal.title}
                        </h3>
                        <p
                          style={{
                            fontSize: '14px',
                            lineHeight: '1.5',
                            color: 'rgba(17, 24, 39, 0.7)',
                            fontFamily: 'Work Sans, sans-serif',
                            margin: 0
                          }}
                        >
                          {goal.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* DESIGN PROCESS - CIRCULAR SYSTEM */}
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
            Approach
          </div>
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
            Design Process
          </h2>

          {/* Infographic-style horizontal flow */}
          <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-0 relative">
            {[
              {
                step: '01',
                title: 'Research & Analysis',
                description: 'Requirement analysis & competitor analysis'
              },
              {
                step: '02',
                title: 'Design & Strategy',
                description: 'User flows, identifying touchpoints, style guide, visual design'
              },
              {
                step: '03',
                title: 'Iteration & Delivery',
                description: 'Stakeholder discussions, design iterations, approvals'
              }
            ].map((item, index) => (
              <div key={index} className="contents md:contents">
                <div
                  className="relative pt-5 flex-1"
                >
                  {/* Large background step number */}
                  <div
                    style={{
                      fontSize: '96px',
                      fontWeight: 700,
                      color: 'rgba(29, 133, 126, 0.06)',
                      fontFamily: 'Inter, sans-serif',
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      zIndex: 0,
                      userSelect: 'none'
                    }}
                  >
                    {item.step}
                  </div>

                  {/* Content area */}
                  <div className="relative z-10 pl-0 md:pl-20">
                    {/* Small step indicator with circle */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: 'rgba(29, 133, 126, 0.1)',
                          border: '1.5px solid rgba(29, 133, 126, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: 600,
                          color: 'rgba(29, 133, 126, 0.8)',
                          fontFamily: 'Inter, sans-serif'
                        }}
                      >
                        {item.step}
                      </div>
                      <div
                        style={{
                          width: '24px',
                          height: '1.5px',
                          background: 'rgba(29, 133, 126, 0.2)'
                        }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: 600,
                        color: '#111827',
                        fontFamily: 'Inter, sans-serif',
                        marginBottom: '12px',
                        lineHeight: '1.3'
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.6',
                        color: 'rgba(17, 24, 39, 0.65)',
                        fontFamily: 'Work Sans, sans-serif',
                        margin: 0
                      }}
                      className="max-w-full md:max-w-[280px]"
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Arrow connector between steps */}
                {index < 2 && (
                  <div
                    className="hidden md:flex items-center flex-shrink-0 -mx-3"
                    style={{
                      paddingTop: '70px'
                    }}
                  >
                    <svg
                      width="48"
                      height="24"
                      viewBox="0 0 48 24"
                      fill="none"
                      style={{ opacity: 0.3 }}
                    >
                      <path
                        d="M0 12H44M44 12L36 6M44 12L36 18"
                        stroke="rgba(29, 133, 126, 0.5)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* COMPETITOR ANALYSIS */}
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
            Competitor Analysis
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
            Market Research
          </h2>

          {/* INLINE COMPETITORS AND REFERENCES */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-5 mb-8">
            {/* Direct Competitors - 70% */}
            <div className="w-full md:flex-[0_0_70%]">
              <h3
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '12px'
                }}
              >
                Direct Competitors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-4">
                {[
                  { name: 'Mayo Clinic', logo: mayoClinicLogo },
                  { name: 'Patient', logo: patientLogo },
                  { name: 'Inspire', logo: inspireLogo }
                ].map((competitor, index) => (
                  <div
                    key={index}
                    className="md:flex-1"
                    style={{
                      padding: '16px',
                      background: 'rgba(29, 133, 126, 0.06)',
                      borderRadius: '8px',
                      border: '1px solid rgba(29, 133, 126, 0.1)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'rgba(17, 24, 39, 0.8)',
                        fontFamily: 'Work Sans, sans-serif'
                      }}
                    >
                      {competitor.name}
                    </span>
                    <img
                      src={competitor.logo}
                      alt={competitor.name}
                      style={{
                        height: '40px',
                        width: 'auto',
                        objectFit: 'contain',
                        alignSelf: 'flex-start'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Discussion Forum References - 30% */}
            <div className="w-full md:flex-[0_0_calc(30%-20px)]">
              <h3
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '12px'
                }}
              >
                Discussion Forum References
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-4">
                {[
                  { name: 'Quora', logo: quoraLogo },
                  { name: 'Stack Overflow', logo: stackOverflowLogo }
                ].map((platform, index) => (
                  <div
                    key={index}
                    className="md:flex-1"
                    style={{
                      padding: '16px',
                      background: 'rgba(29, 133, 126, 0.06)',
                      borderRadius: '8px',
                      border: '1px solid rgba(29, 133, 126, 0.1)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'rgba(17, 24, 39, 0.8)',
                        fontFamily: 'Work Sans, sans-serif'
                      }}
                    >
                      {platform.name}
                    </span>
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      style={{
                        height: '40px',
                        width: 'auto',
                        objectFit: 'contain',
                        alignSelf: 'flex-start'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '0px' }}>

            {/* STRENGTHS SECTION */}
            <div style={{ marginTop: '24px' }}>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '20px'
                }}
              >
                Strengths
              </h3>

              <div className="grid md:grid-cols-3" style={{ gap: '20px' }}>
                {/* Strength Card 1 - Light Blue */}
                <div
                  style={{
                    background: '#A8D8EA',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '200px'
                  }}
                >
                  <div>
                    <ol style={{ margin: 0, padding: 0, paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#111827', fontFamily: 'Work Sans, sans-serif' }}>
                        Simple and clean UI
                      </li>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#111827', fontFamily: 'Work Sans, sans-serif' }}>
                        Dedicated landing page for the discussion topics with options to follow topics to notified about the posts and replies
                      </li>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#111827', fontFamily: 'Work Sans, sans-serif' }}>
                        Filter and search options to help users to find relevant topics
                      </li>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#111827', fontFamily: 'Work Sans, sans-serif' }}>
                        Multiple reactions, Book mark and copy discussion options keeps users engaged
                      </li>
                    </ol>
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(17, 24, 39, 0.5)', fontFamily: 'Work Sans, sans-serif', marginTop: '16px' }}>
                    ss kumbar
                  </div>
                </div>

                {/* Strength Card 2 - Pink */}
                <div
                  style={{
                    background: '#FFB6C1',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '200px'
                  }}
                >
                  <div>
                    <ol style={{ margin: 0, padding: 0, paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#111827', fontFamily: 'Work Sans, sans-serif' }}>
                        Dedicated landing page for topics with categories or groups, addition and browse by alphabets
                      </li>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#111827', fontFamily: 'Work Sans, sans-serif' }}>
                        Admin can pin some of the discussion that needs more attention
                      </li>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#111827', fontFamily: 'Work Sans, sans-serif' }}>
                        discussion list with latest reply, this gives user an idea the activeness of the discussion
                      </li>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#111827', fontFamily: 'Work Sans, sans-serif' }}>
                        Sort options for the replies
                      </li>
                    </ol>
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(17, 24, 39, 0.5)', fontFamily: 'Work Sans, sans-serif', marginTop: '16px' }}>
                    ss kumbar
                  </div>
                </div>

                {/* Strength Card 3 - Blue */}
                <div
                  style={{
                    background: '#3A7CA5',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '200px'
                  }}
                >
                  <div>
                    <ol style={{ margin: 0, padding: 0, paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#FFFFFF', fontFamily: 'Work Sans, sans-serif' }}>
                        Search all and browse by category options navigate to topics/discussion
                      </li>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#FFFFFF', fontFamily: 'Work Sans, sans-serif' }}>
                        Preview and detailed on the same with options to reach, reply and share. Reply option will take user to new page
                      </li>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#FFFFFF', fontFamily: 'Work Sans, sans-serif' }}>
                        User can create, react and reply to post if signed in and all of these action are easy and intuitive.
                      </li>
                    </ol>
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)', fontFamily: 'Work Sans, sans-serif', marginTop: '16px' }}>
                    ss kumbar
                  </div>
                </div>
              </div>
            </div>

            {/* WEAKNESS SECTION */}
            <div style={{ marginTop: '48px' }}>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '20px'
                }}
              >
                Weakness
              </h3>

              <div className="grid md:grid-cols-3" style={{ gap: '20px' }}>
                {/* Weakness Card 1 */}
                <div
                  style={{
                    background: '#F5F5F5',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '180px'
                  }}
                >
                  <div>
                    <ol style={{ margin: 0, padding: 0, paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#111827', fontFamily: 'Work Sans, sans-serif' }}>
                        Discussion listing page lack the sorting option
                      </li>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#111827', fontFamily: 'Work Sans, sans-serif' }}>
                        Inconsistent login page patterns(Popups and login page)
                      </li>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#111827', fontFamily: 'Work Sans, sans-serif' }}>
                        Needs to login to view more posts from author
                      </li>
                    </ol>
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(17, 24, 39, 0.5)', fontFamily: 'Work Sans, sans-serif', marginTop: '16px' }}>
                    ss kumbar
                  </div>
                </div>

                {/* Weakness Card 2 */}
                <div
                  style={{
                    background: '#F5F5F5',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '180px'
                  }}
                >
                  <div>
                    <ol style={{ margin: 0, padding: 0, paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#111827', fontFamily: 'Work Sans, sans-serif' }}>
                        Lacks visual looks and feel, inconsistent in terms of styling
                      </li>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#111827', fontFamily: 'Work Sans, sans-serif' }}>
                        Content is not updated or added on regular basis
                      </li>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#111827', fontFamily: 'Work Sans, sans-serif' }}>
                        Inconsistent link styling
                      </li>
                    </ol>
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(17, 24, 39, 0.5)', fontFamily: 'Work Sans, sans-serif', marginTop: '16px' }}>
                    ss kumbar
                  </div>
                </div>

                {/* Weakness Card 3 */}
                <div
                  style={{
                    background: '#F5F5F5',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '180px'
                  }}
                >
                  <div>
                    <ol style={{ margin: 0, padding: 0, paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#111827', fontFamily: 'Work Sans, sans-serif' }}>
                        Too many buttons on screens while creating a post
                      </li>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#111827', fontFamily: 'Work Sans, sans-serif' }}>
                        Share post has multiple popups that confuses users
                      </li>
                      <li style={{ fontSize: '13px', lineHeight: '1.6', color: '#111827', fontFamily: 'Work Sans, sans-serif' }}>
                        Inconsistent link style and color styling for CTAs
                      </li>
                    </ol>
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(17, 24, 39, 0.5)', fontFamily: 'Work Sans, sans-serif', marginTop: '16px' }}>
                    ss kumbar
                  </div>
                </div>
              </div>
            </div>

            {/* OUTCOMES & DESIGN DECISIONS SECTION */}
            <div className="grid md:grid-cols-2" style={{ gap: '48px', marginTop: '48px' }}>
              {/* Outcomes of Competitor Analysis */}
              <div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '20px'
                  }}
                >
                  Outcomes of Competitor Analysis
                </h3>

                <div className="grid md:grid-cols-3" style={{ gap: '16px' }}>
                  {/* Outcome 1 - Yellow */}
                  <div
                    style={{
                      background: '#F9D949',
                      borderRadius: '8px',
                      padding: '20px',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '140px'
                    }}
                  >
                    <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#111827', fontFamily: 'Work Sans, sans-serif', margin: 0, fontWeight: 500 }}>
                      Anonymity<br />and Privacy
                    </p>
                    <div style={{ fontSize: '11px', color: 'rgba(17, 24, 39, 0.4)', fontFamily: 'Work Sans, sans-serif', marginTop: '12px' }}>
                      ss kumbar
                    </div>
                  </div>

                  {/* Outcome 2 - Yellow */}
                  <div
                    style={{
                      background: '#F9D949',
                      borderRadius: '8px',
                      padding: '20px',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '140px'
                    }}
                  >
                    <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#111827', fontFamily: 'Work Sans, sans-serif', margin: 0, fontWeight: 500 }}>
                      Wide range of topics
                    </p>
                    <div style={{ fontSize: '11px', color: 'rgba(17, 24, 39, 0.4)', fontFamily: 'Work Sans, sans-serif', marginTop: '12px' }}>
                      ss kumbar
                    </div>
                  </div>

                  {/* Outcome 3 - Yellow */}
                  <div
                    style={{
                      background: '#F9D949',
                      borderRadius: '8px',
                      padding: '20px',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '140px'
                    }}
                  >
                    <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#111827', fontFamily: 'Work Sans, sans-serif', margin: 0, fontWeight: 500 }}>
                      Real time discussion &<br />Interaction
                    </p>
                    <div style={{ fontSize: '11px', color: 'rgba(17, 24, 39, 0.4)', fontFamily: 'Work Sans, sans-serif', marginTop: '12px' }}>
                      ss kumbar
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Decisions */}
              <div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '20px'
                  }}
                >
                  Design Decisions
                </h3>

                <div className="grid md:grid-cols-3" style={{ gap: '16px' }}>
                  {/* Decision 1 - Light Blue */}
                  <div
                    style={{
                      background: '#C5DFE8',
                      borderRadius: '8px',
                      padding: '20px',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '140px'
                    }}
                  >
                    <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#111827', fontFamily: 'Work Sans, sans-serif', margin: 0, fontWeight: 500 }}>
                      Moderation<br />by Experts
                    </p>
                    <div style={{ fontSize: '11px', color: 'rgba(17, 24, 39, 0.4)', fontFamily: 'Work Sans, sans-serif', marginTop: '12px' }}>
                      ss kumbar
                    </div>
                  </div>

                  {/* Decision 2 - Light Blue */}
                  <div
                    style={{
                      background: '#C5DFE8',
                      borderRadius: '8px',
                      padding: '20px',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '140px'
                    }}
                  >
                    <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#111827', fontFamily: 'Work Sans, sans-serif', margin: 0, fontWeight: 500 }}>
                      Engagement<br />Features
                    </p>
                    <div style={{ fontSize: '11px', color: 'rgba(17, 24, 39, 0.4)', fontFamily: 'Work Sans, sans-serif', marginTop: '12px' }}>
                      ss kumbar
                    </div>
                  </div>

                  {/* Decision 3 - Light Blue */}
                  <div
                    style={{
                      background: '#C5DFE8',
                      borderRadius: '8px',
                      padding: '20px',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '140px'
                    }}
                  >
                    <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#111827', fontFamily: 'Work Sans, sans-serif', margin: 0, fontWeight: 500 }}>
                      Mobile<br />Optimization
                    </p>
                    <div style={{ fontSize: '11px', color: 'rgba(17, 24, 39, 0.4)', fontFamily: 'Work Sans, sans-serif', marginTop: '12px' }}>
                      ss kumbar
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECONDARY RESEARCH - SOFT CONTAINER */}
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
            Secondary Research
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
            Key Findings
          </h2>

          <div
            style={{
              background: 'rgba(29, 133, 126, 0.02)',
              border: '1px solid rgba(29, 133, 126, 0.08)',
              borderRadius: '12px',
              padding: '28px 32px'
            }}
          >
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: '14px' }}>
              {[
                'Usefulness, correctness, and specificity of information',
                'Reputation, expertise, and honesty of authors',
                'Support for multimedia posts',
                'Strong moderation expectations',
                'Content vetted by qualified professionals'
              ].map((finding, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: '15px',
                    lineHeight: '1.6',
                    color: 'rgba(17, 24, 39, 0.8)',
                    fontFamily: 'Work Sans, sans-serif',
                    paddingLeft: '22px',
                    position: 'relative'
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: '0',
                      top: '10px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'rgba(29, 133, 126, 0.6)'
                    }}
                  />
                  {finding}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* USER FLOWS */}
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
            User Flow
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
            Journey Mapping
          </h2>

          <div style={{ display: 'grid', gap: '48px' }}>
            {/* First two flows - full width */}
            {[
              { title: 'Login / Registration flow', caption: 'User authentication and onboarding process', image: loginFlow },
              { title: 'Browse and read posts', caption: 'Discovering and consuming health discussions', image: browseFlow }
            ].map((flow, index) => (
              <div key={index}>
                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '16px'
                  }}
                >
                  {flow.title}
                </h3>
                <img
                  src={flow.image}
                  alt={flow.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '8px',
                    marginBottom: '10px'
                  }}
                />
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.5',
                    color: 'rgba(17, 24, 39, 0.5)',
                    fontFamily: 'Work Sans, sans-serif'
                  }}
                >
                  {flow.caption}
                </p>
              </div>
            ))}

            {/* Last two flows - 2-column grid */}
            <div className="grid md:grid-cols-2" style={{ gap: '24px' }}>
              {[
                { title: 'Create a new post', caption: 'Posting questions and sharing experiences', image: createPostFlow },
                { title: 'Reply to a discussion', caption: 'Engaging with community conversations', image: replyFlow }
              ].map((flow, index) => (
                <div key={index}>
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 600,
                      color: '#111827',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '16px'
                    }}
                  >
                    {flow.title}
                  </h3>
                  <img
                    src={flow.image}
                    alt={flow.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      borderRadius: '8px',
                      marginBottom: '10px'
                    }}
                  />
                  <p
                    style={{
                      fontSize: '13px',
                      lineHeight: '1.5',
                      color: 'rgba(17, 24, 39, 0.5)',
                      fontFamily: 'Work Sans, sans-serif'
                    }}
                  >
                    {flow.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HEALTHCARE FEATURES - LIGHTER GRID */}
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
            Features
          </div>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#111827',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              marginBottom: '8px'
            }}
          >
            Healthcare-Specific Features
          </h2>
          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.5',
              color: 'rgba(17, 24, 39, 0.6)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '32px'
            }}
          >
            Keeping health care domain in mind
          </p>

          <div className="grid md:grid-cols-2" style={{ gap: '24px' }}>
            {[
              {
                icon: UserCheck,
                title: 'Doctor verified badge',
                description: 'Responses from healthcare professionals marked with verified badge'
              },
              {
                icon: Shield,
                title: 'Post / comment anonymously',
                description: 'Users can share health information while maintaining privacy'
              },
              {
                icon: CheckCircle2,
                title: 'Admin verified posts',
                description: 'All posts go through admin approval for quality assurance'
              },
              {
                icon: ThumbsUp,
                title: 'User reactions',
                description: 'Multiple reaction types including like, helpful, and support'
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                    paddingBottom: '20px',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(29, 133, 126, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <IconComponent size={20} style={{ color: 'rgba(29, 133, 126, 0.8)' }} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#111827',
                        fontFamily: 'Inter, sans-serif',
                        marginBottom: '4px',
                        lineHeight: '1.3'
                      }}
                    >
                      {feature.title}
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
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* DESIGN SYSTEM & COMPONENT FOUNDATION - EDITORIAL LAYOUT */}
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
            Design System
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
            Design System & Component Foundation
          </h2>

          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.7)',
              fontFamily: 'Work Sans, sans-serif',
              marginBottom: '40px'
            }}
          >
            The interface was built using a consistent design system to ensure accessibility, scalability, and visual consistency across all touchpoints.
          </p>

          {/* COLOR SYSTEM & ACCESSIBILITY - FULL WIDTH */}
          <div style={{ marginBottom: '48px' }}>
            {/* Text row */}
            <div
              style={{
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
                marginBottom: '24px'
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(29, 133, 126, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Palette size={16} style={{ color: 'rgba(29, 133, 126, 0.8)' }} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '4px',
                    lineHeight: '1.3'
                  }}
                >
                  Color system & accessibility
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.5',
                    color: 'rgba(17, 24, 39, 0.65)',
                    fontFamily: 'Work Sans, sans-serif',
                    margin: 0
                  }}
                >
                  WCAG-compliant palette with proper contrast ratios
                </p>
              </div>
            </div>

            {/* Full-width color system preview */}
            <div
              className="p-4 md:p-8"
              style={{
                background: '#FAFAFA',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.06)'
              }}
            >
              <div style={{ display: 'grid', gap: '24px' }}>
                {/* Primary Colors */}
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(17, 24, 39, 0.5)',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '12px'
                    }}
                  >
                    Primary Palette
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-3">
                    {[
                      { color: '#1D5351', name: 'Primary Colour', hex: '#1D5351', contrast: 'AA+' },
                      { color: '#005969', name: 'Secondary Colour', hex: '#005969', contrast: 'AAA' },
                      { color: '#005969', name: 'Tertiary Colour', hex: '#005969', contrast: 'AAA' },
                      { color: '#030712', name: 'Primary Black', hex: '#030712', contrast: 'AAA' },
                      { color: '#FFFFFF', name: 'Primary White', hex: '#FFFFFF', contrast: 'AAA', border: true }
                    ].map((item, index) => (
                      <div key={index}>
                        <div
                          className="h-14 md:h-[72px]"
                          style={{
                            width: '100%',
                            background: item.color,
                            borderRadius: '8px',
                            marginBottom: '10px',
                            border: item.border ? '1px solid rgba(0, 0, 0, 0.08)' : 'none'
                          }}
                        />
                        <div
                          style={{
                            fontSize: '12px',
                            fontWeight: 500,
                            color: '#111827',
                            fontFamily: 'Work Sans, sans-serif',
                            marginBottom: '2px'
                          }}
                        >
                          {item.name}
                        </div>
                        <div
                          style={{
                            fontSize: '10px',
                            color: 'rgba(17, 24, 39, 0.5)',
                            fontFamily: 'Work Sans, sans-serif'
                          }}
                        >
                          {item.hex}
                        </div>
                        <div
                          style={{
                            fontSize: '10px',
                            fontWeight: 600,
                            color: 'rgba(29, 133, 126, 0.8)',
                            fontFamily: 'Inter, sans-serif',
                            marginTop: '4px'
                          }}
                        >
                          {item.contrast}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Semantic Colors */}
                <div style={{ paddingTop: '8px', borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(17, 24, 39, 0.5)',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '12px'
                    }}
                  >
                    Semantic Usage
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#1D857E', flexShrink: 0 }} />
                      <span style={{ fontSize: '12px', color: 'rgba(17, 24, 39, 0.7)', fontFamily: 'Work Sans, sans-serif' }}>
                        Interactive elements
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#FAFAFA', border: '1px solid rgba(0, 0, 0, 0.08)', flexShrink: 0 }} />
                      <span style={{ fontSize: '12px', color: 'rgba(17, 24, 39, 0.7)', fontFamily: 'Work Sans, sans-serif' }}>
                        Surface backgrounds
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#1A1A1A', flexShrink: 0 }} />
                      <span style={{ fontSize: '12px', color: 'rgba(17, 24, 39, 0.7)', fontFamily: 'Work Sans, sans-serif' }}>
                        Primary text
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Full-width color system image */}
            <img
              src={colorSystemImage}
              alt="Color system palette and accessibility overview"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '8px',
                marginTop: '16px'
              }}
            />
          </div>

          {/* TYPOGRAPHY + BUTTON COMPONENTS - 50/50 SPLIT */}
          <div className="grid md:grid-cols-2" style={{ gap: '24px', marginBottom: '40px' }}>
            {/* Typography hierarchy */}
            <div>
              {/* Text row */}
              <div
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  marginBottom: '24px'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(29, 133, 126, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Type size={16} style={{ color: 'rgba(29, 133, 126, 0.8)' }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#111827',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '4px',
                      lineHeight: '1.3'
                    }}
                  >
                    Typography hierarchy
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      lineHeight: '1.5',
                      color: 'rgba(17, 24, 39, 0.65)',
                      fontFamily: 'Work Sans, sans-serif',
                      margin: 0
                    }}
                  >
                    Clear type scale for content readability
                  </p>
                </div>
              </div>

              {/* Typography preview */}
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  background: '#FAFAFA'
                }}
              >
                <img
                  src={typographyImage}
                  alt="Typography hierarchy scale"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
                {/* Blur fade at bottom */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '80px',
                    background: 'linear-gradient(to bottom, rgba(250, 250, 250, 0) 0%, rgba(250, 250, 250, 0.95) 70%, rgba(250, 250, 250, 1) 100%)',
                    pointerEvents: 'none'
                  }}
                />
              </div>
            </div>

            {/* Button variants */}
            <div>
              {/* Text row */}
              <div
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  marginBottom: '24px'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(29, 133, 126, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Sparkles size={16} style={{ color: 'rgba(29, 133, 126, 0.8)' }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#111827',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '4px',
                      lineHeight: '1.3'
                    }}
                  >
                    Button variants
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      lineHeight: '1.5',
                      color: 'rgba(17, 24, 39, 0.65)',
                      fontFamily: 'Work Sans, sans-serif',
                      margin: 0
                    }}
                  >
                    Consistent interactive component states
                  </p>
                </div>
              </div>

              {/* Button preview */}
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  height: '520px'
                }}
              >
                <img
                  src={buttonVariantsImage}
                  alt="Button variants with states"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    display: 'block'
                  }}
                />
                {/* Blur fade at bottom */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '80px',
                    background: 'linear-gradient(to bottom, rgba(250, 250, 250, 0) 0%, rgba(250, 250, 250, 0.95) 70%, rgba(250, 250, 250, 1) 100%)',
                    pointerEvents: 'none'
                  }}
                />
              </div>
            </div>
          </div>

          {/* CARD ANATOMY - FULL WIDTH */}
          <div style={{ marginBottom: '48px' }}>
            {/* Text row */}
            <div
              style={{
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
                marginBottom: '24px'
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(29, 133, 126, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Grid3x3 size={16} style={{ color: 'rgba(29, 133, 126, 0.8)' }} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '4px',
                    lineHeight: '1.3'
                  }}
                >
                  Card Anatomy
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.5',
                    color: 'rgba(17, 24, 39, 0.65)',
                    fontFamily: 'Work Sans, sans-serif',
                    margin: 0
                  }}
                >
                  Detailed breakdown of card components and structure
                </p>
              </div>
            </div>

            {/* Card anatomy image */}
            <img
              src={cardAnatomyImage}
              alt="Card anatomy and component structure"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '8px',
                marginTop: '16px'
              }}
            />
          </div>

          {/* COMPONENT CONSISTENCY & INTERACTION PATTERNS - LIGHTWEIGHT ROWS */}
          <div style={{ display: 'grid', gap: '24px' }}>
            {/* Component consistency with images */}
            <div
              style={{
                paddingBottom: '24px',
                borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  marginBottom: '24px'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(29, 133, 126, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Grid3x3 size={16} style={{ color: 'rgba(29, 133, 126, 0.8)' }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#111827',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '4px',
                      lineHeight: '1.3'
                    }}
                  >
                    Component consistency
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      lineHeight: '1.5',
                      color: 'rgba(17, 24, 39, 0.65)',
                      fontFamily: 'Work Sans, sans-serif',
                      margin: 0
                    }}
                  >
                    Reusable components following design principles
                  </p>
                </div>
              </div>

              {/* Component consistency images */}
              <div style={{ display: 'grid', gap: '16px' }}>
                {/* First image - full width */}
                <img
                  src={componentConsistency1}
                  alt="Component consistency - checkboxes, radios, and tabs"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '8px'
                  }}
                />

                {/* Second image - full width */}
                <img
                  src={componentConsistency2}
                  alt="Component consistency - form fields and states"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* INTERFACE DESIGNS */}
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
            Visual Designs
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
            Interface Designs
          </h2>

          <div style={{ display: 'grid', gap: '48px' }}>
            {/* Discussion landing page - full width */}
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
                Discussion landing page
              </h3>
              <img
                src={landingPageDesign}
                alt="Discussion landing page"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '8px',
                  marginBottom: '10px'
                }}
              />
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: '1.5',
                  color: 'rgba(17, 24, 39, 0.5)',
                  fontFamily: 'Work Sans, sans-serif'
                }}
              >
                Main forum overview with categories and recent discussions
              </p>
            </div>

            {/* Topic listing page and Post details page - 2-column grid */}
            <div className="grid md:grid-cols-2" style={{ gap: '24px' }}>
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
                  Topic listing page
                </h3>
                <img
                  src={topicListingDesign}
                  alt="Topic listing page"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '8px',
                    marginBottom: '10px'
                  }}
                />
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.5',
                    color: 'rgba(17, 24, 39, 0.5)',
                    fontFamily: 'Work Sans, sans-serif'
                  }}
                >
                  Filtered view of discussions within a specific health topic
                </p>
              </div>

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
                  Post details page
                </h3>
                <img
                  src={postDetailsDesign}
                  alt="Post details page"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '8px',
                    marginBottom: '10px'
                  }}
                />
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.5',
                    color: 'rgba(17, 24, 39, 0.5)',
                    fontFamily: 'Work Sans, sans-serif'
                  }}
                >
                  Full discussion thread with comments and reactions
                </p>
              </div>
            </div>

            {/* Create new post and Reply to discussion - 2-column grid */}
            <div className="grid md:grid-cols-2" style={{ gap: '24px' }}>
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
                  Create new post
                </h3>
                <img
                  src={createNewPostDesign}
                  alt="Create new post"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '8px',
                    marginBottom: '10px'
                  }}
                />
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.5',
                    color: 'rgba(17, 24, 39, 0.5)',
                    fontFamily: 'Work Sans, sans-serif'
                  }}
                >
                  Post creation interface with rich text editor and topic selection
                </p>
              </div>

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
                  Reply to discussion
                </h3>
                <img
                  src={replyToDiscussionDesign}
                  alt="Reply to discussion"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '8px',
                    marginBottom: '10px'
                  }}
                />
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.5',
                    color: 'rgba(17, 24, 39, 0.5)',
                    fontFamily: 'Work Sans, sans-serif'
                  }}
                >
                  Comment interface with support for text and anonymous posting
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RESPONSIVE MOBILE SCREENS */}
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
            Responsive Mobile Screens
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
            Mobile Experience
          </h2>

          <div className="grid md:grid-cols-3" style={{ gap: '24px' }}>
            {[
              { title: 'Home / discussion feed', caption: 'Mobile view of discussion listing', image: mobileHome },
              { title: 'Create new post', caption: 'Mobile post creation flow', image: mobileCreate },
              { title: 'Discussion detail view', caption: 'Mobile thread and comment view', image: mobileDetail }
            ].map((screen, index) => (
              <div key={index}>
                <img
                  src={screen.image}
                  alt={screen.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '8px',
                    marginBottom: '12px'
                  }}
                />
                <h3
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '5px'
                  }}
                >
                  {screen.title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.5',
                    color: 'rgba(17, 24, 39, 0.5)',
                    fontFamily: 'Work Sans, sans-serif'
                  }}
                >
                  {screen.caption}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER NAVIGATION */}
        <section
          className="pt-12 pb-16 md:pt-16 md:pb-24"
          style={{
            borderTop: '1px solid rgba(0, 0, 0, 0.08)'
          }}
        >
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
              to="/work/recyclify"
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
              Next Case Study: Recyclify
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
