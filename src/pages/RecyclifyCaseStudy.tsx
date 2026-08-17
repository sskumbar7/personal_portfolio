import { Navigation } from '../components/Navigation';
import { SectionReveals } from '../components/animations/SectionReveals';
import { LayersPanel } from '../components/LayersPanel';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { BuyerJourneyContent } from '../components/BuyerJourneyContent';
import { SellerJourneyContent } from '../components/SellerJourneyContent';
import { InformationArchitecture } from '../components/InformationArchitecture';
import { SEO } from '../components/SEO';
import loginRegisterFlowImg from '../assets/a9d27889a2a3189c4590492f3fe75b74d4e93deb.png';
import sellItemsFlowImg from '../assets/4c2a67b7d531f85616cfa93ce6aa6725efd382e7.png';
import buyProductsFlowImg from '../assets/1c454ef69e221da96172a592a1f36e589b0aa10f.png';
import cardSortingImg from '../assets/c448282c4da45510eab68a7b36ddaa2973578b03.webp';
import hiFiOnboardingImg from '../assets/68aa67b68abe7b8961f12385c6a10eb5b1351a4b.webp';
import hiFiHomeScreenImg from '../assets/f0edf0cd1700b773e9e82196345359d0177fc49b.webp';
import hiFiSellingFlowImg from '../assets/7a55e6b4d53d9648bda532fac42c10d6cf9d80ca.webp';
import hiFiSellingCompleteImg from '../assets/6ddd7a45c9d532861286c12d2122b28266a5edab.webp';
import { ArrowLeft, ArrowRight, Users, Target, Package, TrendingUp, Search, Focus, Sparkles, Palette, BadgeCheck, CheckCircle2, Heart, Zap, AlertTriangle, Shield, Clock, Eye, DollarSign, Leaf, UserPlus, ChevronDown, ChevronUp, Lightbulb, BarChart3, Map, FileText, GitBranch, ShoppingBag, Recycle, LogIn, ShoppingCart } from 'lucide-react';
import recyclifyHeroImage from '../assets/8ff22e9b39c0ae2daef106b3a94e4474e10b1ae8.webp';
import wireframesImage from '../assets/9bbca8c75599410fc9ae1a59df1168a5dc498ccf.webp';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useState } from 'react';

export function RecyclifyCaseStudy() {
  const [expandedClusters, setExpandedClusters] = useState<number[]>([]);
  const [activeJourney, setActiveJourney] = useState<'buyer' | 'seller'>('buyer');

  const toggleCluster = (index: number) => {
    setExpandedClusters(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Recyclify - Sustainable Marketplace | UX Case Study"
        description="Designing a circular economy marketplace connecting buyers and sellers for sustainable product exchange."
        keywords="Marketplace Design, Sustainable UX, E-commerce Platform, User Journey Mapping, Circular Economy"
        image="/recyclify-cover.png"
      />
      <Navigation />
      <SectionReveals />
      <LayersPanel />

      {/* SECTION 1: HERO */}
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
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 600,
              letterSpacing: '-0.02em',
              marginBottom: '16px'
            }}
          >
            Recyclify
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
            A sustainable marketplace connecting conscious buyers and sellers to reduce waste and extend product lifecycles.
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
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Role:</span> <span style={{ fontWeight: 500 }}>Lead Product Designer</span>
            </div>
            <span className="hidden md:inline" style={{ color: 'rgba(0, 0, 0, 0.15)' }}>|</span>
            <div>
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Platform:</span> <span style={{ fontWeight: 500 }}>iOS + Android</span>
            </div>
            <span className="hidden md:inline" style={{ color: 'rgba(0, 0, 0, 0.15)' }}>|</span>
            <div>
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Timeline:</span> <span style={{ fontWeight: 500 }}>8 weeks (Concept)</span>
            </div>
            <span className="hidden md:inline" style={{ color: 'rgba(0, 0, 0, 0.15)' }}>|</span>
            <div>
              <span style={{ color: 'rgba(17, 24, 39, 0.5)' }}>Tools:</span> <span style={{ fontWeight: 500 }}>Figma, FigJam, Maze</span>
            </div>
          </div>
        </div>

        {/* Subtle eco illustration */}
        <div
          style={{
            position: 'absolute',
            right: '5%',
            top: '20%',
            width: '180px',
            height: '180px',
            opacity: 0.08,
            pointerEvents: 'none'
          }}
        >
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
            <circle cx="90" cy="90" r="70" stroke="#1D857E" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M90 30 Q120 60 90 90 Q60 60 90 30Z" fill="#1D857E" opacity="0.3" />
            <path d="M90 90 Q120 120 90 150 Q60 120 90 90Z" fill="#1D857E" opacity="0.5" />
            <circle cx="90" cy="90" r="8" fill="#1D857E" />
          </svg>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">

        {/* HERO VISUAL */}
        <section data-layer-name="Overview" className="pt-8 pb-12 md:pt-12 md:pb-24">
          <img
            src={recyclifyHeroImage}
            alt="Recyclify mobile app interface showcase"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '12px',
              border: '1px solid rgba(0, 0, 0, 0.08)'
            }}
          />
        </section>

        {/* SECTION 2: PROJECT OVERVIEW */}
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
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#111827',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              marginBottom: '24px'
            }}
          >
            About the Project
          </h2>
          <div style={{ maxWidth: '780px' }}>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: 'rgba(17, 24, 39, 0.75)',
                fontFamily: 'Work Sans, sans-serif',
                marginBottom: '16px'
              }}
            >
              Recyclify is a mobile-first marketplace designed to make secondhand buying and selling accessible, trustworthy, and joyful. The platform aims to reduce consumption waste by creating a community where quality pre-owned items find new homes.
            </p>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: 'rgba(17, 24, 39, 0.75)',
                fontFamily: 'Work Sans, sans-serif',
                margin: 0
              }}
            >
              Unlike traditional resale apps, Recyclify emphasizes transparency, social proof, and environmental impact tracking—helping users see the positive effect of their sustainable choices while building a trusted community around conscious consumption.
            </p>
          </div>
        </section>

        {/* SECTION 3: PROBLEM & OPPORTUNITY */}
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
            Context
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
            Problem & Opportunity
          </h2>

          <div className="grid md:grid-cols-3" style={{ gap: '32px' }}>
            {/* User problems */}
            <div>
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(29, 133, 126, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Users size={18} style={{ color: 'rgba(29, 133, 126, 0.8)' }} />
                </div>
                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1.3'
                  }}
                >
                  User Problems
                </h3>
              </div>
              <ul
                style={{
                  fontSize: '14px',
                  lineHeight: '1.7',
                  color: 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  paddingLeft: '20px',
                  margin: 0
                }}
              >
                <li style={{ marginBottom: '10px' }}>Trust issues with secondhand sellers</li>
                <li style={{ marginBottom: '10px' }}>Unclear product condition descriptions</li>
                <li style={{ marginBottom: '10px' }}>No emotional connection to sustainability</li>
                <li>Complex listing and shipping flows</li>
              </ul>
            </div>

            {/* Market gaps */}
            <div>
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(29, 133, 126, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <TrendingUp size={18} style={{ color: 'rgba(29, 133, 126, 0.8)' }} />
                </div>
                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1.3'
                  }}
                >
                  Market Gaps
                </h3>
              </div>
              <ul
                style={{
                  fontSize: '14px',
                  lineHeight: '1.7',
                  color: 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  paddingLeft: '20px',
                  margin: 0
                }}
              >
                <li style={{ marginBottom: '10px' }}>Existing apps lack eco-impact visibility</li>
                <li style={{ marginBottom: '10px' }}>Generic UX does not build community</li>
                <li style={{ marginBottom: '10px' }}>Poor discovery and personalization</li>
                <li>Weak buyer protection mechanisms</li>
              </ul>
            </div>

            {/* Design challenge */}
            <div>
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(29, 133, 126, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Target size={18} style={{ color: 'rgba(29, 133, 126, 0.8)' }} />
                </div>
                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1.3'
                  }}
                >
                  Design Challenge
                </h3>
              </div>
              <div
                style={{
                  background: 'rgba(29, 133, 126, 0.04)',
                  borderLeft: '3px solid rgba(29, 133, 126, 0.5)',
                  padding: '16px',
                  borderRadius: '4px'
                }}
              >
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: '1.7',
                    color: 'rgba(17, 24, 39, 0.75)',
                    fontFamily: 'Work Sans, sans-serif',
                    fontStyle: 'italic',
                    margin: 0
                  }}
                >
                  How might we create a resale experience that builds trust, celebrates sustainability, and makes buying secondhand feel as delightful as buying new?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: DESIGN PROCESS & TIMELINE */}
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
            className="text-[24px] md:text-[32px]"
            style={{
              fontWeight: 600,
              color: '#111827',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              marginBottom: '24px'
            }}
          >
            Design Process & Timeline
          </h2>

          {/* Timeline phases */}
          <div style={{ position: 'relative' }}>
            {/* Timeline line - hide on mobile */}
            <div
              className="hidden md:block"
              style={{
                position: 'absolute',
                top: '28px',
                left: '0',
                right: '0',
                height: '2px',
                background: 'rgba(29, 133, 126, 0.15)',
                zIndex: 0
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4" style={{ position: 'relative', zIndex: 1 }}>
              {[
                {
                  phase: 'Discover',
                  icon: Search,
                  duration: 'Week 1–2',
                  description: 'Interviews, surveys, competitive analysis'
                },
                {
                  phase: 'Define',
                  icon: Focus,
                  duration: 'Week 3',
                  description: 'Personas, problem framing, synthesis'
                },
                {
                  phase: 'Ideate',
                  icon: Sparkles,
                  duration: 'Week 4',
                  description: 'UX principles, prioritization, flows'
                },
                {
                  phase: 'Design',
                  icon: Palette,
                  duration: 'Week 5–7',
                  description: 'Wireframes → High-fidelity UI'
                },
                {
                  phase: 'Validate',
                  icon: BadgeCheck,
                  duration: 'Week 8',
                  description: 'Usability testing, iteration'
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index}>
                    {/* Phase dot - hide on mobile */}
                    <div
                      className="hidden md:block"
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: '#1D857E',
                        margin: '0 auto 16px',
                        border: '3px solid white',
                        boxShadow: '0 0 0 1px rgba(29, 133, 126, 0.2)'
                      }}
                    />

                    <div
                      className="p-3 md:p-5"
                      style={{
                        background: 'white',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        borderRadius: '8px',
                        minHeight: '0'
                      }}
                    >
                      {/* Phase icon and name */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginBottom: '4px'
                        }}
                      >
                        <div
                          className="w-7 h-7 md:w-8 md:h-8"
                          style={{
                            borderRadius: '6px',
                            background: 'rgba(29, 133, 126, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <IconComponent size={14} className="md:w-4 md:h-4" style={{ color: 'rgba(29, 133, 126, 0.8)' }} />
                        </div>
                        <div
                          className="text-[13px] md:text-[15px]"
                          style={{
                            fontWeight: 600,
                            color: '#111827',
                            fontFamily: 'Inter, sans-serif'
                          }}
                        >
                          {item.phase}
                        </div>
                      </div>
                      <div
                        className="text-[11px] md:text-[12px]"
                        style={{
                          color: 'rgba(29, 133, 126, 0.7)',
                          fontFamily: 'Work Sans, sans-serif',
                          marginBottom: '6px',
                          fontWeight: 500
                        }}
                      >
                        {item.duration}
                      </div>

                      <p
                        className="text-[12px] md:text-[13px]"
                        style={{
                          lineHeight: '1.5',
                          color: 'rgba(17, 24, 39, 0.7)',
                          fontFamily: 'Work Sans, sans-serif',
                          margin: 0
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 5: RESEARCH OVERVIEW */}
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
            Research Overview
          </h2>

          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: 'rgba(17, 24, 39, 0.7)',
                fontFamily: 'Work Sans, sans-serif',
                margin: 0
              }}
            >
              Research focused on understanding resale behaviors, sustainability motivations, and trust barriers among urban users through a mix of qualitative and quantitative methods.
            </p>
          </div>

          {/* Research stats */}
          <div className="grid md:grid-cols-3" style={{ gap: '24px' }}>
            {[
              {
                number: '95',
                label: 'Survey Responses',
                sublabel: 'Tier-1 cities in India',
                detail: 'Ages: 20–35 (primary audience)'
              },
              {
                number: '12',
                label: 'Qualitative Interviews',
                sublabel: 'Working professionals, students, homemakers',
                detail: 'Contextual inquiry + semi-structured'
              },
              {
                number: '5',
                label: 'Platforms Analyzed',
                sublabel: 'OLX, online resale apps, social media',
                detail: 'Focus on trust, effort, accessibility'
              }
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  padding: '28px 24px',
                  background: '#FAFAFA',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.06)'
                }}
              >
                <div
                  style={{
                    fontSize: '40px',
                    fontWeight: 600,
                    color: '#1D857E',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '8px',
                    lineHeight: '1'
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '8px'
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: 'rgba(17, 24, 39, 0.6)',
                    fontFamily: 'Work Sans, sans-serif',
                    lineHeight: '1.5',
                    marginBottom: '4px'
                  }}
                >
                  {stat.sublabel}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: 'rgba(17, 24, 39, 0.5)',
                    fontFamily: 'Work Sans, sans-serif',
                    lineHeight: '1.4'
                  }}
                >
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: SURVEY RESULTS (VISUAL) */}
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
            Quantitative Data
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
            Survey Insights
          </h2>

          <div className="grid md:grid-cols-2" style={{ gap: '32px' }}>
            {/* Chart 1: Disposal Behavior */}
            <div
              style={{
                background: '#FAFAFA',
                borderRadius: '12px',
                padding: '28px',
                border: '1px solid rgba(0, 0, 0, 0.06)'
              }}
            >
              <h3
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '20px'
                }}
              >
                How users currently get rid of old items
              </h3>

              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Donate', value: 52.6 },
                      { name: 'Garbage', value: 34.7 },
                      { name: 'Sell', value: 12.6 }
                    ]}
                    cx="50%"
                    cy="45%"
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={2}
                    dataKey="value"
                    label={(entry) => `${entry.value}%`}
                  >
                    <Cell fill="#1D857E" />
                    <Cell fill="rgba(239, 68, 68, 0.6)" />
                    <Cell fill="rgba(29, 133, 126, 0.3)" />
                  </Pie>
                  <Tooltip />
                  <Legend wrapperStyle={{ paddingTop: "20px" }} />
                </PieChart>
              </ResponsiveContainer>
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: '1.5',
                  color: 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  marginTop: '16px',
                  padding: '12px',
                  background: 'white',
                  borderRadius: '6px',
                  margin: '16px 0 0 0'
                }}
              >
                Most users discard or donate items due to lack of simple selling options, not lack of intent.
              </p>
            </div>

            {/* Chart 2: Willingness to Sell */}
            <div
              style={{
                background: '#FAFAFA',
                borderRadius: '12px',
                padding: '28px',
                border: '1px solid rgba(0, 0, 0, 0.06)'
              }}
            >
              <h3
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '20px'
                }}
              >
                Do users sell second-hand products?
              </h3>

              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={[
                      { name: 'No', value: 40 },
                      { name: 'Maybe', value: 34.7 },
                      { name: 'Yes', value: 25.3 }
                    ]}
                    cx="50%"
                    cy="45%"
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={2}
                    dataKey="value"
                    label={(entry) => `${entry.value}%`}
                  >
                    <Cell fill="rgba(107, 114, 128, 0.4)" />
                    <Cell fill="#F59E0B" />
                    <Cell fill="#1D857E" />
                  </Pie>
                  <Tooltip />
                  <Legend wrapperStyle={{ paddingTop: "20px" }} />
                </PieChart>
              </ResponsiveContainer>
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: '1.5',
                  color: 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  marginTop: '16px',
                  padding: '12px',
                  background: 'white',
                  borderRadius: '6px',
                  margin: '16px 0 0 0'
                }}
              >
                A large "maybe" segment indicates untapped opportunity with the right platform.
              </p>
            </div>

            {/* Chart 3: Selling Effort Perception */}
            <div
              style={{
                background: '#FAFAFA',
                borderRadius: '12px',
                padding: '28px',
                border: '1px solid rgba(0, 0, 0, 0.06)'
              }}
            >
              <h3
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '20px'
                }}
              >
                Ease of clearing old items (1–5 scale)
              </h3>

              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={[
                  { rating: '1', responses: 8 },
                  { rating: '2', responses: 15 },
                  { rating: '3', responses: 32 },
                  { rating: '4', responses: 28 },
                  { rating: '5', responses: 12 }
                ]}>
                  <XAxis dataKey="rating" tick={{ fontSize: 11 }} label={{ value: 'Rating', position: 'insideBottom', offset: -5 }} />
                  <YAxis tick={{ fontSize: 11 }} label={{ value: 'Responses', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Bar dataKey="responses" fill="#1D857E" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: '1.5',
                  color: 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  marginTop: '16px',
                  padding: '12px',
                  background: 'white',
                  borderRadius: '6px',
                  margin: '16px 0 0 0'
                }}
              >
                The process is manageable but not delightful — users tolerate friction today.
              </p>
            </div>

            {/* Chart 4: Platform Preference */}
            <div
              style={{
                background: '#FAFAFA',
                borderRadius: '12px',
                padding: '28px',
                border: '1px solid rgba(0, 0, 0, 0.06)'
              }}
            >
              <h3
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '20px'
                }}
              >
                Where users sell today
              </h3>

              <ResponsiveContainer width="100%" height={260}>
                <BarChart
                  data={[
                    { platform: 'OLX', value: 34.9 },
                    { platform: 'Word of mouth', value: 25.6 },
                    { platform: 'Social media', value: 18.6 },
                    { platform: 'Online apps', value: 13.9 }
                  ]}
                  layout="vertical"
                >
                  <XAxis type="number" tick={{ fontSize: 11 }} />
                  <YAxis dataKey="platform" type="category" tick={{ fontSize: 11 }} width={100} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#1D857E" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: '1.5',
                  color: 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  marginTop: '16px',
                  padding: '12px',
                  background: 'white',
                  borderRadius: '6px',
                  margin: '16px 0 0 0'
                }}
              >
                Trust and familiarity matter more than feature richness.
              </p>
            </div>

            {/* Chart 5: Interest in Recycled Products */}
            <div
              style={{
                background: '#FAFAFA',
                borderRadius: '12px',
                padding: '28px',
                border: '1px solid rgba(0, 0, 0, 0.06)'
              }}
            >
              <h3
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '20px'
                }}
              >
                Do users like buying recycled products?
              </h3>

              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Yes', value: 50.5 },
                      { name: 'Maybe', value: 35.8 },
                      { name: 'No', value: 13.7 }
                    ]}
                    cx="50%"
                    cy="45%"
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={2}
                    dataKey="value"
                    label={(entry) => `${entry.value}%`}
                  >
                    <Cell fill="#10B981" />
                    <Cell fill="#F59E0B" />
                    <Cell fill="rgba(107, 114, 128, 0.4)" />
                  </Pie>
                  <Tooltip />
                  <Legend wrapperStyle={{ paddingTop: "20px" }} />
                </PieChart>
              </ResponsiveContainer>
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: '1.5',
                  color: 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  marginTop: '16px',
                  padding: '12px',
                  background: 'white',
                  borderRadius: '6px',
                  margin: '16px 0 0 0'
                }}
              >
                Intent exists, but confidence and accessibility are missing.
              </p>
            </div>

            {/* Chart 6: Barriers to Buying */}
            <div
              style={{
                background: '#FAFAFA',
                borderRadius: '12px',
                padding: '28px',
                border: '1px solid rgba(0, 0, 0, 0.06)'
              }}
            >
              <h3
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '20px'
                }}
              >
                Why users hesitate
              </h3>

              <ResponsiveContainer width="100%" height={260}>
                <BarChart
                  data={[
                    { barrier: 'Not easily available', value: 55.9 },
                    { barrier: 'Unsure about quality', value: 53.8 },
                    { barrier: 'High price', value: 14 }
                  ]}
                  layout="vertical"
                >
                  <XAxis type="number" tick={{ fontSize: 11 }} />
                  <YAxis dataKey="barrier" type="category" tick={{ fontSize: 11 }} width={120} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#EF4444" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: '1.5',
                  color: 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  marginTop: '16px',
                  padding: '12px',
                  background: 'white',
                  borderRadius: '6px',
                  margin: '16px 0 0 0'
                }}
              >
                Availability and trust outweigh pricing concerns.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: RESEARCH SYNTHESIS & INSIGHTS */}
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
            Synthesis
          </div>
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
            Research Synthesis & Insights
          </h2>
          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.7)',
              fontFamily: 'Work Sans, sans-serif',
              maxWidth: '780px',
              marginBottom: '48px'
            }}
          >
            Key insights synthesized from surveys and interviews, mapped directly to product strategy and UX decisions.
          </p>

          {/* Insight Snapshot */}
          <div>
            <h3
              style={{
                fontSize: '17px',
                fontWeight: 600,
                color: '#111827',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '24px'
              }}
            >
              Insight Snapshot
            </h3>
            <div className="grid md:grid-cols-3" style={{ gap: '20px', marginBottom: '48px' }}>
              {[
                { icon: Shield, label: 'Trust', desc: 'Seller credibility drives decisions', stat: '78%', color: '#1D857E' },
                { icon: Search, label: 'Discovery', desc: 'Finding quality items is difficult', stat: '92%', color: '#F59E0B' },
                { icon: Zap, label: 'Speed', desc: 'Listing feels time-consuming', stat: '58%', color: '#8B5CF6' },
                { icon: DollarSign, label: 'Pricing', desc: 'Hidden costs reduce conversion', stat: '54%', color: '#EF4444' },
                { icon: Leaf, label: 'Sustainability', desc: 'Impact must be tangible', stat: '83%', color: '#10B981' },
                { icon: Heart, label: 'Community', desc: 'Desire for social validation', stat: 'High', color: '#EC4899' }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    style={{
                      background: 'white',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      borderRadius: '8px',
                      padding: '20px',
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start'
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: `${item.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <IconComponent size={18} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: '#111827',
                          fontFamily: 'Inter, sans-serif',
                          marginBottom: '4px'
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: '12px',
                          lineHeight: '1.4',
                          color: 'rgba(17, 24, 39, 0.7)',
                          fontFamily: 'Work Sans, sans-serif',
                          marginBottom: '6px'
                        }}
                      >
                        {item.desc}
                      </div>
                      <div
                        style={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: item.color,
                          fontFamily: 'Inter, sans-serif'
                        }}
                      >
                        {item.stat}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 8: OUTCOME-BASED INSIGHT CLUSTERS (COLLAPSIBLE) */}
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
            Deep Dive
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
            Outcome-Based Insight Clusters
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                id: 0,
                title: 'Trust & Decision Confidence',
                icon: Shield,
                color: '#1D857E',
                summary: 'Trust determines whether a transaction happens',
                insights: [
                  '78% cited seller credibility as top concern',
                  'Hesitation around condition clarity and transparency',
                  'Social proof significantly reduces purchase anxiety'
                ],
                implications: 'Verified seller profiles, transaction history & response time, standardized condition labels'
              },
              {
                id: 1,
                title: 'Discovery & Accessibility',
                icon: Search,
                color: '#F59E0B',
                summary: 'Users give up before finding what they want',
                insights: [
                  '92% struggle with discovery',
                  'Excessive scrolling and irrelevant results',
                  'Current filters are too generic or hidden'
                ],
                implications: 'Smart filters (condition, category, distance), personalized feed, saved searches'
              },
              {
                id: 2,
                title: 'Speed & Effort Reduction',
                icon: Zap,
                color: '#8B5CF6',
                summary: 'Complexity kills seller motivation',
                insights: [
                  '58% abandon due to long listing flows',
                  'Current processes take 8–12 minutes',
                  'Photography and description writing are biggest barriers'
                ],
                implications: '3-step guided listing, auto-fill suggestions, photo-first flow'
              },
              {
                id: 3,
                title: 'Sustainability Needs Proof',
                icon: Leaf,
                color: '#10B981',
                summary: 'Sustainability must feel real, not abstract',
                insights: [
                  '83% want visible impact',
                  'Users doubt quality and value of recycled products',
                  'Environmental messaging feels generic across platforms'
                ],
                implications: 'Environmental impact metrics, badges for reused items, post-purchase impact summary'
              },
              {
                id: 4,
                title: 'Community & Validation',
                icon: Heart,
                color: '#EC4899',
                summary: 'Users want reassurance from people, not systems',
                insights: [
                  'Preference for word-of-mouth and social selling',
                  'Hesitation toward anonymous platforms',
                  'Community credibility outweighs brand trust'
                ],
                implications: 'Reviews & ratings, social signals, community credibility cues'
              }
            ].map((cluster) => {
              const isExpanded = expandedClusters.includes(cluster.id);
              const IconComponent = cluster.icon;
              return (
                <div
                  key={cluster.id}
                  style={{
                    background: isExpanded ? 'rgba(29, 133, 126, 0.02)' : 'white',
                    border: `1px solid ${isExpanded ? 'rgba(29, 133, 126, 0.2)' : 'rgba(0, 0, 0, 0.08)'}`,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {/* Header */}
                  <button
                    onClick={() => toggleCluster(cluster.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`cluster-content-${cluster.id}`}
                    className="focus:outline-none focus:ring-2 focus:ring-inset"
                    style={{
                      width: '100%',
                      padding: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      '--tw-ring-color': 'rgba(29, 133, 126, 0.3)'
                    } as React.CSSProperties}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: `${cluster.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <IconComponent size={20} style={{ color: cluster.color }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3
                          style={{
                            fontSize: '17px',
                            fontWeight: 600,
                            color: '#111827',
                            fontFamily: 'Inter, sans-serif',
                            marginBottom: '4px',
                            lineHeight: '1.3'
                          }}
                        >
                          {cluster.title}
                        </h3>
                        <p
                          style={{
                            fontSize: '13px',
                            color: 'rgba(17, 24, 39, 0.6)',
                            fontFamily: 'Work Sans, sans-serif',
                            margin: 0
                          }}
                        >
                          {cluster.summary}
                        </p>
                      </div>
                    </div>
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>

                  {/* Expanded content */}
                  {isExpanded && (
                    <div
                      id={`cluster-content-${cluster.id}`}
                      style={{ padding: '0 24px 24px' }}
                    >
                      <div
                        style={{
                          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                          paddingTop: '20px'
                        }}
                      >
                        <div
                          style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            color: 'rgba(17, 24, 39, 0.5)',
                            fontFamily: 'Inter, sans-serif',
                            marginBottom: '12px'
                          }}
                        >
                          Evidence
                        </div>
                        <ul
                          style={{
                            fontSize: '14px',
                            lineHeight: '1.7',
                            color: 'rgba(17, 24, 39, 0.75)',
                            fontFamily: 'Work Sans, sans-serif',
                            paddingLeft: '20px',
                            marginBottom: '20px',
                            margin: 0
                          }}
                        >
                          {cluster.insights.map((insight, idx) => (
                            <li key={idx} style={{ marginBottom: '8px' }}>{insight}</li>
                          ))}
                        </ul>

                        <div
                          style={{
                            marginTop: '16px',
                            padding: '16px',
                            background: 'rgba(29, 133, 126, 0.04)',
                            borderLeft: '3px solid rgba(29, 133, 126, 0.5)',
                            borderRadius: '4px'
                          }}
                        >
                          <div
                            style={{
                              fontSize: '11px',
                              fontWeight: 600,
                              letterSpacing: '0.05em',
                              textTransform: 'uppercase',
                              color: 'rgba(29, 133, 126, 0.8)',
                              fontFamily: 'Inter, sans-serif',
                              marginBottom: '6px'
                            }}
                          >
                            Design Outcome
                          </div>
                          <p
                            style={{
                              fontSize: '14px',
                              lineHeight: '1.6',
                              color: 'rgba(17, 24, 39, 0.75)',
                              fontFamily: 'Work Sans, sans-serif',
                              margin: 0
                            }}
                          >
                            {cluster.implications}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 9: PERSONAS */}
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
            Define
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
            Defining the Users
          </h2>

          <div className="grid md:grid-cols-2" style={{ gap: '32px' }}>
            {/* Persona 1 */}
            <div
              style={{
                background: 'white',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '12px',
                padding: '28px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(29, 133, 126, 0.2) 0%, rgba(29, 133, 126, 0.05) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <ShoppingBag size={24} style={{ color: '#1D857E' }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 600,
                      color: '#111827',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '2px'
                    }}
                  >
                    Milana Nagaraj, 29
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'rgba(17, 24, 39, 0.6)',
                      fontFamily: 'Work Sans, sans-serif',
                      margin: 0
                    }}
                  >
                    Senior Developer · Bengaluru
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'rgba(17, 24, 39, 0.5)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '8px'
                  }}
                >
                  Bio
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.6',
                    color: 'rgba(17, 24, 39, 0.75)',
                    fontFamily: 'Work Sans, sans-serif',
                    margin: 0,
                    fontStyle: 'italic'
                  }}
                >
                  "I am looking for an opportunity to be a eco-friendly Human"
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'rgba(17, 24, 39, 0.5)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '8px'
                  }}
                >
                  Goals
                </div>
                <ul
                  style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: 'rgba(17, 24, 39, 0.75)',
                    fontFamily: 'Work Sans, sans-serif',
                    paddingLeft: '20px',
                    margin: 0
                  }}
                >
                  <li style={{ marginBottom: '6px' }}>Get habituated to using recycled products</li>
                  <li style={{ marginBottom: '6px' }}>Look for opportunity to be eco-friendly</li>
                  <li>Make use of technology to complete tasks easily</li>
                </ul>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'rgba(17, 24, 39, 0.5)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '8px'
                  }}
                >
                  Frustrations
                </div>
                <ul
                  style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: 'rgba(17, 24, 39, 0.75)',
                    fontFamily: 'Work Sans, sans-serif',
                    paddingLeft: '20px',
                    margin: 0
                  }}
                >
                  <li style={{ marginBottom: '6px' }}>Recycled products are not easily accessible</li>
                  <li style={{ marginBottom: '6px' }}>No trustworthy platform for eco-friendly products</li>
                  <li>Less awareness about recycling</li>
                </ul>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'rgba(17, 24, 39, 0.5)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '8px'
                  }}
                >
                  Archetype
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Explorer', 'Organized', 'Practical', 'Hardworking'].map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '6px 12px',
                        background: 'rgba(29, 133, 126, 0.08)',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 500,
                        color: 'rgba(29, 133, 126, 0.9)',
                        fontFamily: 'Work Sans, sans-serif'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Persona 2 */}
            <div
              style={{
                background: 'white',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '12px',
                padding: '28px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.05) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Package size={24} style={{ color: '#8B5CF6' }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 600,
                      color: '#111827',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '2px'
                    }}
                  >
                    Samhith Acharya, 34
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'rgba(17, 24, 39, 0.6)',
                      fontFamily: 'Work Sans, sans-serif',
                      margin: 0
                    }}
                  >
                    Finance Advisor · Mysore
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'rgba(17, 24, 39, 0.5)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '8px'
                  }}
                >
                  Bio
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.6',
                    color: 'rgba(17, 24, 39, 0.75)',
                    fontFamily: 'Work Sans, sans-serif',
                    margin: 0,
                    fontStyle: 'italic'
                  }}
                >
                  "He cares deeply about the environment and looking for an opportunity to sell old stuffs which can be recycled further"
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'rgba(17, 24, 39, 0.5)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '8px'
                  }}
                >
                  Goals
                </div>
                <ul
                  style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: 'rgba(17, 24, 39, 0.75)',
                    fontFamily: 'Work Sans, sans-serif',
                    paddingLeft: '20px',
                    margin: 0
                  }}
                >
                  <li style={{ marginBottom: '6px' }}>Sell old stuffs at home without hassle</li>
                  <li style={{ marginBottom: '6px' }}>Get good price/reward on selling</li>
                  <li>Build ecologically friendly neighborhoods</li>
                </ul>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'rgba(17, 24, 39, 0.5)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '8px'
                  }}
                >
                  Frustrations
                </div>
                <ul
                  style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: 'rgba(17, 24, 39, 0.75)',
                    fontFamily: 'Work Sans, sans-serif',
                    paddingLeft: '20px',
                    margin: 0
                  }}
                >
                  <li style={{ marginBottom: '6px' }}>Lot of old stuff makes home messy</li>
                  <li style={{ marginBottom: '6px' }}>Can't catch up with garbage collectors schedule</li>
                  <li>Hesitant to sell to scrap collectors—doesn't feel professional</li>
                </ul>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'rgba(17, 24, 39, 0.5)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '8px'
                  }}
                >
                  Archetype
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Problem Solver', 'Self-Assured', 'Productive', 'Resourceful'].map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '6px 12px',
                        background: 'rgba(139, 92, 246, 0.08)',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 500,
                        color: 'rgba(139, 92, 246, 0.9)',
                        fontFamily: 'Work Sans, sans-serif'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: EMPATHY MAP & JOURNEY MAP */}
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
            User Experience
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
            Understanding User Experience
          </h2>
          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.7)',
              fontFamily: 'Work Sans, sans-serif',
              maxWidth: '780px',
              marginBottom: '48px'
            }}
          >
            Combining empathy mapping and journey mapping to understand emotional states, pain points, and opportunities across all touchpoints.
          </p>

          {/* Tab buttons */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }} role="tablist" aria-label="User journey type">
            <button
              onClick={() => setActiveJourney('buyer')}
              role="tab"
              aria-selected={activeJourney === 'buyer'}
              aria-controls="buyer-journey-panel"
              id="buyer-tab"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                padding: '10px 20px',
                background: activeJourney === 'buyer' ? 'rgba(29, 133, 126, 0.1)' : 'transparent',
                border: `1px solid ${activeJourney === 'buyer' ? 'rgba(29, 133, 126, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`,
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 500,
                color: activeJourney === 'buyer' ? '#1D857E' : 'rgba(17, 24, 39, 0.6)',
                fontFamily: 'Work Sans, sans-serif',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '--tw-ring-color': 'rgba(29, 133, 126, 0.5)'
              } as React.CSSProperties}
            >
              Buyer Journey
            </button>
            <button
              onClick={() => setActiveJourney('seller')}
              role="tab"
              aria-selected={activeJourney === 'seller'}
              aria-controls="seller-journey-panel"
              id="seller-tab"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                padding: '10px 20px',
                background: activeJourney === 'seller' ? 'rgba(29, 133, 126, 0.1)' : 'transparent',
                border: `1px solid ${activeJourney === 'seller' ? 'rgba(29, 133, 126, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`,
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 500,
                color: activeJourney === 'seller' ? '#1D857E' : 'rgba(17, 24, 39, 0.6)',
                fontFamily: 'Work Sans, sans-serif',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '--tw-ring-color': 'rgba(29, 133, 126, 0.5)'
              } as React.CSSProperties}
            >
              Seller Journey
            </button>
          </div>

          {/* Journey content */}
          <div
            role="tabpanel"
            id={`${activeJourney}-journey-panel`}
            aria-labelledby={`${activeJourney}-tab`}
          >
            {activeJourney === 'buyer' ? (
              <BuyerJourneyContent />
            ) : (
              <SellerJourneyContent />
            )}
          </div>
        </section>

        {/* OLD CONTENT BACKUP - REMOVE AFTER TESTING
          {activeJourney === 'buyer' ? (
            <div 
              style={{
                background: '#FAFAFA',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                borderRadius: '12px',
                padding: '32px'
              }}
            >
              <div className="grid md:grid-cols-3" style={{ gap: '32px' }}>
                <div>
                  <div 
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: '#1D857E',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '12px'
                    }}
                  >
                    Think & Feel
                  </div>
                  <ul 
                    style={{
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: 'rgba(17, 24, 39, 0.75)',
                      fontFamily: 'Work Sans, sans-serif',
                      paddingLeft: '20px',
                      margin: 0
                    }}
                  >
                    <li style={{ marginBottom: '8px' }}>Less awareness about recycled products</li>
                    <li style={{ marginBottom: '8px' }}>No trustworthy platform</li>
                    <li>Some recycled products may not be hygiene to use</li>
                  </ul>
                </div>
                <div>
                  <div 
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: '#1D857E',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '12px'
                    }}
                  >
                    See & Hear
                  </div>
                  <ul 
                    style={{
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: 'rgba(17, 24, 39, 0.75)',
                      fontFamily: 'Work Sans, sans-serif',
                      paddingLeft: '20px',
                      margin: 0
                    }}
                  >
                    <li style={{ marginBottom: '8px' }}>Less options to choose from online platforms</li>
                    <li style={{ marginBottom: '8px' }}>Products not easily accessible</li>
                    <li style={{ marginBottom: '8px' }}>Recycled products are costly</li>
                    <li>Quality concerns shared by others</li>
                  </ul>
                </div>
                <div>
                  <div 
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: '#1D857E',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '12px'
                    }}
                  >
                    Say & Do
                  </div>
                  <ul 
                    style={{
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: 'rgba(17, 24, 39, 0.75)',
                      fontFamily: 'Work Sans, sans-serif',
                      paddingLeft: '20px',
                      margin: 0
                    }}
                  >
                    <li style={{ marginBottom: '8px' }}>Tries to buy recycled products whenever there's opportunity</li>
                    <li style={{ marginBottom: '8px' }}>Encourages others to be eco-friendly</li>
                    <li>Looks for competitive prices and offers while buying</li>
                  </ul>
                </div>
              </div>

              <div 
                style={{
                  marginTop: '28px',
                  paddingTop: '28px',
                  borderTop: '1px solid rgba(0, 0, 0, 0.08)'
                }}
              >
                <div className="grid md:grid-cols-2" style={{ gap: '24px' }}>
                  <div>
                    <div 
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: 'rgba(17, 24, 39, 0.5)',
                        fontFamily: 'Inter, sans-serif',
                        marginBottom: '12px'
                      }}
                    >
                      Pains
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {['Not easily accessible', 'Not sure about quality', 'High price'].map((pain, idx) => (
                        <span 
                          key={idx}
                          style={{
                            padding: '8px 14px',
                            background: 'rgba(239, 68, 68, 0.08)',
                            border: '1px solid rgba(239, 68, 68, 0.2)',
                            borderRadius: '6px',
                            fontSize: '13px',
                            color: '#EF4444',
                            fontFamily: 'Work Sans, sans-serif'
                          }}
                        >
                          {pain}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div 
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: 'rgba(17, 24, 39, 0.5)',
                        fontFamily: 'Inter, sans-serif',
                        marginBottom: '12px'
                      }}
                    >
                      Gains
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {['Looking for trustworthy platform', 'Wants to use more recycled products', 'Hassle-free way to access products'].map((gain, idx) => (
                        <span 
                          key={idx}
                          style={{
                            padding: '8px 14px',
                            background: 'rgba(16, 185, 129, 0.08)',
                            border: '1px solid rgba(16, 185, 129, 0.2)',
                            borderRadius: '6px',
                            fontSize: '13px',
                            color: '#10B981',
                            fontFamily: 'Work Sans, sans-serif'
                          }}
                        >
                          {gain}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div 
              style={{
                background: '#FAFAFA',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                borderRadius: '12px',
                padding: '32px'
              }}
            >
              <div className="grid md:grid-cols-3" style={{ gap: '32px' }}>
                <div>
                  <div 
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: '#8B5CF6',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '12px'
                    }}
                  >
                    Think & Feel
                  </div>
                  <ul 
                    style={{
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: 'rgba(17, 24, 39, 0.75)',
                      fontFamily: 'Work Sans, sans-serif',
                      paddingLeft: '20px',
                      margin: 0
                    }}
                  >
                    <li style={{ marginBottom: '8px' }}>No trustworthy, convenient platform to sell old items</li>
                    <li style={{ marginBottom: '8px' }}>Hesitant to sell to scrap collectors (doesn't look professional)</li>
                    <li>Easy and convenient to throw old items on the road (garbage hub)</li>
                  </ul>
                </div>
                <div>
                  <div 
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: '#8B5CF6',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '12px'
                    }}
                  >
                    See & Hear
                  </div>
                  <ul 
                    style={{
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: 'rgba(17, 24, 39, 0.75)',
                      fontFamily: 'Work Sans, sans-serif',
                      paddingLeft: '20px',
                      margin: 0
                    }}
                  >
                    <li style={{ marginBottom: '8px' }}>Huge junk of waste stored in every household</li>
                    <li style={{ marginBottom: '8px' }}>Items sold at cheaper prices or for free</li>
                    <li style={{ marginBottom: '8px' }}>Selling is difficult and time consuming</li>
                    <li>Throwing it away is easy and convenient</li>
                  </ul>
                </div>
                <div>
                  <div 
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: '#8B5CF6',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '12px'
                    }}
                  >
                    Say & Do
                  </div>
                  <ul 
                    style={{
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: 'rgba(17, 24, 39, 0.75)',
                      fontFamily: 'Work Sans, sans-serif',
                      paddingLeft: '20px',
                      margin: 0
                    }}
                  >
                    <li style={{ marginBottom: '8px' }}>Sells to scrap collectors and donates few to known people</li>
                    <li style={{ marginBottom: '8px' }}>Sometimes chooses convenience over recycling</li>
                    <li>Looks for competitive prices and offers while buying</li>
                  </ul>
                </div>
              </div>

              <div 
                style={{
                  marginTop: '28px',
                  paddingTop: '28px',
                  borderTop: '1px solid rgba(0, 0, 0, 0.08)'
                }}
              >
                <div className="grid md:grid-cols-2" style={{ gap: '24px' }}>
                  <div>
                    <div 
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: 'rgba(17, 24, 39, 0.5)',
                        fontFamily: 'Inter, sans-serif',
                        marginBottom: '12px'
                      }}
                    >
                      Pains
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {['Junk stored in home not picked by local body', 'No trusted platform for selling', 'Selling at cheaper price or for free'].map((pain, idx) => (
                        <span 
                          key={idx}
                          style={{
                            padding: '8px 14px',
                            background: 'rgba(239, 68, 68, 0.08)',
                            border: '1px solid rgba(239, 68, 68, 0.2)',
                            borderRadius: '6px',
                            fontSize: '13px',
                            color: '#EF4444',
                            fontFamily: 'Work Sans, sans-serif'
                          }}
                        >
                          {pain}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div 
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: 'rgba(17, 24, 39, 0.5)',
                        fontFamily: 'Inter, sans-serif',
                        marginBottom: '12px'
                      }}
                    >
                      Gains
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {['Trustworthy platform to sell or donate', 'Convenience at fair prices/rewards', 'Professional selling experience'].map((gain, idx) => (
                        <span 
                          key={idx}
                          style={{
                            padding: '8px 14px',
                            background: 'rgba(16, 185, 129, 0.08)',
                            border: '1px solid rgba(16, 185, 129, 0.2)',
                            borderRadius: '6px',
                            fontSize: '13px',
                            color: '#10B981',
                            fontFamily: 'Work Sans, sans-serif'
                          }}
                        >
                          {gain}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        END OLD CONTENT BACKUP */}

        {/* SECTION 11: CARD SORTING & INFORMATION ARCHITECTURE */}
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
            Ideation
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
            Structuring the Experience
          </h2>

          {/* Card Sorting */}
          <div style={{ marginBottom: '48px' }}>
            <h3
              style={{
                fontSize: '17px',
                fontWeight: 600,
                color: '#111827',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '16px'
              }}
            >
              Card Sorting
            </h3>
            <div style={{ maxWidth: '780px', marginBottom: '24px' }}>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  margin: 0
                }}
              >
                Conducted open card sorting with 8 participants to understand how users naturally categorize marketplace features and content. This informed the navigation structure and feature grouping.
              </p>
            </div>
            <div
              style={{
                background: 'rgba(29, 133, 126, 0.04)',
                borderLeft: '3px solid rgba(29, 133, 126, 0.5)',
                padding: '16px 20px',
                borderRadius: '4px',
                maxWidth: '780px',
                marginBottom: '32px'
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'rgba(29, 133, 126, 0.8)',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '6px'
                }}
              >
                Outcome
              </div>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: 'rgba(17, 24, 39, 0.75)',
                  fontFamily: 'Work Sans, sans-serif',
                  margin: 0
                }}
              >
                Categories simplified from 12 to 6 main groups. Navigation reduced cognitive load by 40% in follow-up testing. Users preferred Browse, Sell, Messages, and Profile as primary tabs.
              </p>
            </div>

            {/* Card Sorting Image */}
            <div
              style={{
                background: 'white',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '12px',
                overflow: 'hidden',
                maxWidth: '100%'
              }}
            >
              <img
                src={cardSortingImg}
                alt="Card Sorting Session with Sticky Notes"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
          </div>

          {/* Information Architecture */}
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
              Information Architecture
            </h3>
            <InformationArchitecture />
          </div>
        </section>

        {/* SECTION 12: USER FLOWS */}
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
            Flows
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
            Key User Flows
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

            {/* Login/Register Flow */}
            <div
              style={{
                background: 'white',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '12px',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(29, 133, 126, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <LogIn size={20} style={{ color: '#1D857E' }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#111827',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '4px'
                    }}
                  >
                    Login/Register
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'rgba(17, 24, 39, 0.6)',
                      fontFamily: 'Work Sans, sans-serif',
                      margin: 0
                    }}
                  >
                    Seamless onboarding with multiple authentication options
                  </p>
                </div>
              </div>
              <div
                style={{
                  background: '#FAFAFA',
                  padding: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflowX: 'auto'
                }}
              >
                <img
                  src={loginRegisterFlowImg}
                  alt="Login and Registration Flow"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>
            </div>

            {/* Sell Items Flow */}
            <div
              style={{
                background: 'white',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '12px',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(245, 158, 11, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Package size={20} style={{ color: '#F59E0B' }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#111827',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '4px'
                    }}
                  >
                    Sell old items/stuffs
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'rgba(17, 24, 39, 0.6)',
                      fontFamily: 'Work Sans, sans-serif',
                      margin: 0
                    }}
                  >
                    Guided process from listing to pickup completion with rewards
                  </p>
                </div>
              </div>
              <div
                style={{
                  background: '#FAFAFA',
                  padding: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflowX: 'auto'
                }}
              >
                <img
                  src={sellItemsFlowImg}
                  alt="Sell old items/stuffs Flow"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>
            </div>

            {/* Buy Products Flow */}
            <div
              style={{
                background: 'white',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '12px',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <ShoppingCart size={20} style={{ color: '#10B981' }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#111827',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '4px'
                    }}
                  >
                    Buy Recycled products
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'rgba(17, 24, 39, 0.6)',
                      fontFamily: 'Work Sans, sans-serif',
                      margin: 0
                    }}
                  >
                    Browse, select, and purchase recycled products with secure checkout
                  </p>
                </div>
              </div>
              <div
                style={{
                  background: '#FAFAFA',
                  padding: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflowX: 'auto'
                }}
              >
                <img
                  src={buyProductsFlowImg}
                  alt="Buy Recycled products Flow"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 12.5: STYLE GUIDE */}
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
            Visual System
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
            Style Guide
          </h2>
          <div style={{ maxWidth: '780px', marginBottom: '64px' }}>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: 'rgba(17, 24, 39, 0.7)',
                fontFamily: 'Work Sans, sans-serif',
                margin: 0
              }}
            >
              A comprehensive design system ensures visual consistency and scalability across the Recyclify app experience.
            </p>
          </div>

          {/* Typography */}
          <div style={{ marginBottom: '64px' }}>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#111827',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '32px'
              }}
            >
              Typography
            </h3>

            <div className="grid md:grid-cols-2" style={{ gap: '48px' }}>
              {/* Left: Logo & Sample */}
              <div>
                <div
                  style={{
                    fontSize: '56px',
                    fontWeight: 700,
                    color: '#313131',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '40px',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Recyclify
                </div>
                <div
                  style={{
                    fontSize: '120px',
                    fontWeight: 300,
                    color: '#8C7347',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1',
                    letterSpacing: '-0.03em'
                  }}
                >
                  Aa
                </div>
              </div>

              {/* Right: Type Scale */}
              <div>
                {/* Heading Section */}
                <div style={{ marginBottom: '32px' }}>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#111827',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '20px'
                    }}
                  >
                    Heading
                  </div>

                  {[
                    { label: 'HM1', size: '24/32', desc: 'SF Pro/bold/24' },
                    { label: 'HM2', size: '20/28', desc: 'SF Pro/Semibold/20' },
                    { label: 'HM3', size: '16 / 24', desc: 'SF Pro/Semibold/16' },
                    { label: 'HM4', size: '14 / 24', desc: 'SF Pro/Semibold/14' }
                  ].map((type, index) => (
                    <div key={index} style={{ marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div
                            style={{
                              fontSize: '11px',
                              color: 'rgba(17, 24, 39, 0.5)',
                              fontFamily: 'Work Sans, sans-serif',
                              marginBottom: '2px'
                            }}
                          >
                            {type.label} - {type.size}
                          </div>
                          <div
                            style={{
                              fontSize: '10px',
                              color: 'rgba(17, 24, 39, 0.4)',
                              fontFamily: 'Work Sans, sans-serif'
                            }}
                          >
                            Letter spacing: 0
                          </div>
                        </div>
                        <div
                          style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            color: '#111827',
                            fontFamily: 'Inter, sans-serif'
                          }}
                        >
                          {type.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Body Section */}
                <div>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#111827',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '20px'
                    }}
                  >
                    Body
                  </div>

                  {[
                    { label: 'B1', weight: 'Medium', size: '16' },
                    { label: 'B1 Regular', weight: 'Regular', size: '16' },
                    { label: 'B2', weight: 'Medium', size: '14' }
                  ].map((type, index) => (
                    <div key={index} style={{ marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div
                            style={{
                              fontSize: '11px',
                              color: 'rgba(17, 24, 39, 0.5)',
                              fontFamily: 'Work Sans, sans-serif',
                              marginBottom: '2px'
                            }}
                          >
                            {type.label} - 18 / 24
                          </div>
                          <div
                            style={{
                              fontSize: '10px',
                              color: 'rgba(17, 24, 39, 0.4)',
                              fontFamily: 'Work Sans, sans-serif'
                            }}
                          >
                            Letter spacing: 0
                          </div>
                        </div>
                        <div
                          style={{
                            fontSize: '13px',
                            fontWeight: index === 1 ? 400 : 500,
                            color: '#111827',
                            fontFamily: 'Inter, sans-serif'
                          }}
                        >
                          B1/SF Pro/{type.weight}/{type.size}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Colors */}
          <div style={{ marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', gap: '12px' }}>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  margin: 0
                }}
              >
                Colors
              </h3>
              <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, #1AAA55 0%, #00C9B0 100%)' }} />
            </div>

            {/* Color Swatches */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-8">
              {[
                { color: '#8C7347', label: 'Primary' },
                { color: '#96B256', label: 'Secondary' },
                { color: '#00C9B0', label: 'Tertiary' },
                { color: '#313131', label: 'Text' }
              ].map((swatch, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div
                    className="w-full aspect-square max-w-[140px] mx-auto mb-3 md:mb-4"
                    style={{
                      background: swatch.color,
                      borderRadius: '50%',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <div
                    className="text-[14px] md:text-[16px]"
                    style={{
                      fontWeight: 600,
                      color: swatch.color,
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '4px'
                    }}
                  >
                    {swatch.color}
                  </div>
                  <div
                    className="text-[12px] md:text-[13px]"
                    style={{
                      color: swatch.color,
                      fontFamily: 'Work Sans, sans-serif'
                    }}
                  >
                    {swatch.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8">
              {[
                { color: '#1AAA55', label: 'Success' },
                { color: '#FC9403', label: 'Warning' },
                { color: '#DB3B21', label: 'Error' }
              ].map((swatch, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div
                    className="w-full aspect-square max-w-[140px] mx-auto mb-3 md:mb-4"
                    style={{
                      background: swatch.color,
                      borderRadius: '50%',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <div
                    className="text-[14px] md:text-[16px]"
                    style={{
                      fontWeight: 600,
                      color: swatch.color,
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '4px'
                    }}
                  >
                    {swatch.color}
                  </div>
                  <div
                    className="text-[12px] md:text-[13px]"
                    style={{
                      color: swatch.color,
                      fontFamily: 'Work Sans, sans-serif'
                    }}
                  >
                    {swatch.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Icons */}
          <div>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#111827',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '32px'
              }}
            >
              Icons
            </h3>

            {/* Outlined Icons */}
            <div style={{ marginBottom: '32px' }}>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'rgba(17, 24, 39, 0.6)',
                  fontFamily: 'Work Sans, sans-serif',
                  marginBottom: '16px'
                }}
              >
                Outlined
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {[
                  <UserPlus size={28} />,
                  <Recycle size={28} />,
                  <Heart size={28} />,
                  <Shield size={28} />,
                  <Package size={28} />,
                  <Clock size={28} />,
                  <DollarSign size={28} />,
                  <ShoppingCart size={28} />,
                  <FileText size={28} />,
                  <AlertTriangle size={28} />,
                  <Eye size={28} />,
                  <Search size={28} />,
                  <Focus size={28} />,
                  <Sparkles size={28} />
                ].map((icon, index) => (
                  <div
                    key={index}
                    style={{
                      color: 'rgba(107, 114, 128, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Filled Icons */}
            <div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'rgba(17, 24, 39, 0.6)',
                  fontFamily: 'Work Sans, sans-serif',
                  marginBottom: '16px'
                }}
              >
                Filled
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {[
                  <UserPlus size={28} />,
                  <Recycle size={28} />,
                  <Heart size={28} fill="#8C7347" />,
                  <Shield size={28} />,
                  <Package size={28} />,
                  <Clock size={28} />,
                  <DollarSign size={28} />,
                  <ShoppingCart size={28} />,
                  <FileText size={28} />,
                  <AlertTriangle size={28} />,
                  <Eye size={28} />,
                  <Search size={28} />,
                  <Focus size={28} />,
                  <Sparkles size={28} />
                ].map((icon, index) => (
                  <div
                    key={index}
                    style={{
                      color: '#8C7347',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 13: DESIGN SOLUTIONS */}
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
            Solution
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
            Design Solutions
          </h2>
          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: 'rgba(17, 24, 39, 0.7)',
                fontFamily: 'Work Sans, sans-serif',
                margin: 0
              }}
            >
              I iterated from low-fidelity wireframes to high-fidelity UI, validating decisions through usability testing with 6 participants across 3 rounds.
            </p>
          </div>

          {/* Wireframes */}
          <div style={{ marginBottom: '48px' }}>
            <h3
              style={{
                fontSize: '17px',
                fontWeight: 600,
                color: '#111827',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '16px'
              }}
            >
              Wireframes & Early Explorations
            </h3>
            <img
              src={wireframesImage}
              alt="Low-fidelity wireframes showing key screens"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.08)'
              }}
            />
          </div>

          {/* High-fidelity UI */}
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
              High-Fidelity UI
            </h3>

            {/* Onboarding & Login Screens */}
            <div style={{ marginBottom: '48px' }}>
              <h4
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '16px'
                }}
              >
                Onboarding & Authentication
              </h4>
              <img
                src={hiFiOnboardingImg}
                alt="Onboarding screens showing splash, sell old things, buy recycled products, rewards, and login/OTP flows"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.08)'
                }}
              />
            </div>

            {/* Home Screen */}
            <div style={{ marginBottom: '48px' }}>
              <h4
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '8px'
                }}
              >
                Home Screen
              </h4>
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: '1.5',
                  color: 'rgba(17, 24, 39, 0.6)',
                  fontFamily: 'Work Sans, sans-serif',
                  marginBottom: '16px'
                }}
              >
                Home screen lets users navigate to sell and buy sections, search products, shop by brand, and change location
              </p>
              <img
                src={hiFiHomeScreenImg}
                alt="Home screen with detailed annotations showing navigation, categories, and recommendations"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.08)'
                }}
              />
            </div>

            {/* Selling Flow */}
            <div>
              <h4
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '8px'
                }}
              >
                Selling Old Items
              </h4>
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: '1.5',
                  color: 'rgba(17, 24, 39, 0.6)',
                  fontFamily: 'Work Sans, sans-serif',
                  marginBottom: '16px'
                }}
              >
                Users can sell items such as clothes, paper, plastic, electronics, and more. Complete flow from category selection to pickup confirmation and rewards
              </p>
              <img
                src={hiFiSellingCompleteImg}
                alt="Complete selling flow showing category selection, item details, scheduling, pickup confirmation, earnings approval, and congratulations screen"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.08)'
                }}
              />
            </div>
          </div>
        </section>

        {/* SECTION 14: CHALLENGES & LEARNINGS */}
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
            Reflection
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
            Challenges & Learnings
          </h2>

          <div className="grid md:grid-cols-2" style={{ gap: '40px' }}>
            {/* What Didn't Work */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(239, 68, 68, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <AlertTriangle size={18} style={{ color: '#EF4444' }} />
                </div>
                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  What Didn't Work
                </h3>
              </div>
              <ul
                style={{
                  fontSize: '14px',
                  lineHeight: '1.7',
                  color: 'rgba(17, 24, 39, 0.75)',
                  fontFamily: 'Work Sans, sans-serif',
                  paddingLeft: '20px',
                  margin: 0
                }}
              >
                <li style={{ marginBottom: '12px' }}>
                  <strong>Gamification overload:</strong> Initial design included points, badges, and levels—users found it distracting and gimmicky
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Auto-pricing confusion:</strong> AI-suggested prices were often inaccurate, causing seller frustration
                </li>
                <li>
                  <strong>Heavy imagery on mobile:</strong> High-res photos slowed loading times and increased data usage
                </li>
              </ul>
            </div>

            {/* Key Takeaways */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Lightbulb size={18} style={{ color: '#10B981' }} />
                </div>
                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Key Takeaways
                </h3>
              </div>
              <ul
                style={{
                  fontSize: '14px',
                  lineHeight: '1.7',
                  color: 'rgba(17, 24, 39, 0.75)',
                  fontFamily: 'Work Sans, sans-serif',
                  paddingLeft: '20px',
                  margin: 0
                }}
              >
                <li style={{ marginBottom: '12px' }}>
                  <strong>Less is more:</strong> Simplified features outperformed complex alternatives in every test
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>Trust requires layers:</strong> Multiple trust signals (reviews, verification, history) work better than single indicators
                </li>
                <li>
                  <strong>Test early, test often:</strong> Validating assumptions with users prevented expensive redesigns
                </li>
              </ul>
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
              to="/work/visual-design"
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
              Next Case Study: Visual Design Collection
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
