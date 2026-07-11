import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, Sparkles, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';

// Flowchart image import
import figmaAgentFlowchart from '../assets/figma-agent-flowchart.png';

// Custom component to render prompts in a sleek code/terminal editor window
function PromptConsole({ promptText, title = "prompt_command.sh" }: { promptText: string, title?: string }) {
  return (
    <div 
      style={{
        backgroundColor: '#0F172A',
        borderRadius: '12px',
        border: '1px solid rgba(29, 133, 126, 0.2)',
        overflow: 'hidden',
        margin: '28px 0',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)'
      }}
    >
      {/* Title bar simulating macOS window */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 18px',
          backgroundColor: '#020617',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444', display: 'inline-block' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B', display: 'inline-block' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
        </div>
        <span 
          style={{
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.4)',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 500,
            letterSpacing: '0.02em'
          }}
        >
          {title}
        </span>
        <span style={{ width: '32px' }} /> {/* Spacer */}
      </div>

      {/* Terminal Workspace */}
      <div 
        style={{
          padding: '20px 24px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '14px',
          lineHeight: '1.6',
          color: '#38BDF8', // Light blue terminal text
          backgroundColor: '#0F172A',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap'
        }}
      >
        <span style={{ color: 'rgba(255, 255, 255, 0.3)', marginRight: '8px' }}>$</span>
        <span style={{ color: '#E2E8F0' }}>{promptText}</span>
        <span 
          style={{
            display: 'inline-block',
            width: '8px',
            height: '15px',
            backgroundColor: '#10B981',
            marginLeft: '4px',
            verticalAlign: 'middle',
            animation: 'blink 1.2s infinite'
          }}
        />
      </div>
    </div>
  );
}

export function ExperimentsPage() {
  const prefersReducedMotion = useReducedMotion();
  const [activeExpId, setActiveExpId] = useState<string>('figma-design-agent');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');

  // List of experiments for sidebar directory navigation
  const experimentsList = [
    {
      id: 'figma-design-agent',
      label: '01. Figma AI Agent',
      title: 'Can Figma\'s AI agent design a functional first draft of a UI on the first try? I put it to the test.',
      date: 'July 2026 • 2 min read'
    }
  ];

  // Helper to handle smooth scroll to an experiment section
  const handleScrollToExperiment = (id: string) => {
    setActiveExpId(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Determine dynamic font-size and line-height based on user selector state
  const getBodyStyles = () => {
    switch (fontSize) {
      case 'sm':
        return { fontSize: '15px', lineHeight: '1.65' };
      case 'lg':
        return { fontSize: '20px', lineHeight: '1.85' };
      case 'base':
      default:
        return { fontSize: '17px', lineHeight: '1.75' };
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Design Experiments & R&D | Sandeep S Kumbar"
        description="A chronological feed of design experiments, testing emerging AI agents, system automation, and interaction theories."
        keywords="Design Experiments, AI Design Agents, Figma Automation, R&D, Product Design, UX Strategy"
        image="/figma-agent-flowchart.png"
      />
      <Navigation />

      {/* Font & Class Setup matching Intercom Best Practices */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Work+Sans:wght@400;500;600&display=swap');
        
        .experiments-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .editorial-body {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #374151; /* Dark charcoal text color */
          transition: font-size 0.2s ease, line-height 0.2s ease;
        }
        
        .editorial-body p {
          margin-bottom: 24px;
        }

        .editorial-body strong {
          color: #111827;
          font-weight: 600;
        }

        .editorial-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          color: #111827;
          letter-spacing: -0.02em;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .text-size-btn:focus-visible {
          outline: 2px solid #1D857E;
          outline-offset: 1px;
        }
      `}</style>

      {/* HERO SECTION - Left Aligned */}
      <header
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(29, 133, 126, 0.08) 0%, rgba(29, 133, 126, 0.03) 50%, #FFFFFF 100%)',
          padding: '80px 0 48px'
        }}
      >
        <div className="experiments-container">
          {/* Back link - Left Aligned */}
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
              fontWeight: 500,
              color: 'rgba(29, 133, 126, 0.8)',
              fontFamily: 'Work Sans, sans-serif',
              textDecoration: 'none',
              marginBottom: '32px',
              transition: 'color 0.2s ease',
              textAlign: 'left'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(29, 133, 126, 1)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(29, 133, 126, 0.8)'}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <h1
            className="editorial-heading text-[36px] md:text-[48px]"
            style={{
              lineHeight: '1.15',
              marginBottom: '20px',
              textAlign: 'left'
            }}
          >
            Design Lab
          </h1>

          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#6B7280',
              fontFamily: 'Work Sans, sans-serif',
              maxWidth: '680px',
              textAlign: 'left',
              margin: '0'
            }}
          >
            A chronological notebook of short-form design experiments and quick bites of R&D—testing emerging AI agents, system automation, and UI interaction theories in real-world scenarios.
          </p>
        </div>
      </header>

      {/* MAIN CONTAINER: 2-Column Grid (Article & Sticky TOC Directory) */}
      <div className="experiments-container pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Article Feed */}
          <main className="lg:col-span-8 max-w-[700px] w-full" id="main-content">
            
            {/* EXPERIMENT #01 */}
            <article id="figma-design-agent" style={{ position: 'relative' }}>
              
              {/* Breadcrumbs Trail */}
              <div 
                style={{
                  fontSize: '13px',
                  fontFamily: 'Work Sans, sans-serif',
                  color: '#9CA3AF',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Link to="/" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Home</Link>
                <span>&gt;</span>
                <span style={{ color: '#9CA3AF' }}>Experiments</span>
                <span>&gt;</span>
                <span style={{ color: '#4B5563', fontWeight: 500 }}>Figma AI Agent</span>
              </div>

              {/* Title & Subheader */}
              <div 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '20px',
                  borderBottom: '1px solid rgba(229, 231, 235, 0.7)',
                  paddingBottom: '24px',
                  marginBottom: '32px'
                }}
              >
                <h2 
                  className="editorial-heading text-[28px] md:text-[36px]"
                  style={{ 
                    lineHeight: '1.25',
                    letterSpacing: '-0.02em',
                    margin: 0
                  }}
                >
                  Can Figma's AI agent design a functional first draft of a UI on the first try? I put it to the test.
                </h2>

                {/* Meta Row: Author details + Accessibility Font Size Selector */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  {/* Author Block */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* Small round initial avatar */}
                    <div 
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(29, 133, 126, 0.1)',
                        color: '#1D857E',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600
                      }}
                    >
                      SK
                    </div>
                    <div 
                      style={{ 
                        fontSize: '14px', 
                        fontFamily: 'Work Sans, sans-serif', 
                        color: '#4B5563' 
                      }}
                    >
                      Written by <strong>Sandeep S Kumbar</strong> <span style={{ color: '#9CA3AF', margin: '0 6px' }}>•</span> July 2026 <span style={{ color: '#9CA3AF', margin: '0 6px' }}>•</span> 2 Min Read <span style={{ color: '#9CA3AF', margin: '0 6px' }}>•</span> <span style={{ color: '#1D857E', fontWeight: 600 }}>⚡ Quick Bites</span>
                    </div>
                  </div>

                  {/* Font Size Accessibility Widget */}
                  <div 
                    style={{ 
                      display: 'inline-flex',
                      alignItems: 'center', 
                      gap: '4px',
                      backgroundColor: 'rgba(29, 133, 126, 0.05)',
                      border: '1px solid rgba(29, 133, 126, 0.15)',
                      borderRadius: '8px',
                      padding: '2px'
                    }}
                    aria-label="Text size controls"
                    role="group"
                  >
                    <button
                      onClick={() => setFontSize('sm')}
                      className="text-size-btn"
                      style={{
                        padding: '4px 10px',
                        fontSize: '12px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: fontSize === 'sm' ? 600 : 400,
                        color: fontSize === 'sm' ? '#FFFFFF' : '#4B5563',
                        backgroundColor: fontSize === 'sm' ? '#1D857E' : 'transparent',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        outline: 'none',
                        transition: 'all 0.15s ease'
                      }}
                      aria-label="Decrease text size"
                      aria-pressed={fontSize === 'sm'}
                    >
                      A-
                    </button>
                    <button
                      onClick={() => setFontSize('base')}
                      className="text-size-btn"
                      style={{
                        padding: '4px 10px',
                        fontSize: '13px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: fontSize === 'base' ? 600 : 400,
                        color: fontSize === 'base' ? '#FFFFFF' : '#4B5563',
                        backgroundColor: fontSize === 'base' ? '#1D857E' : 'transparent',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        outline: 'none',
                        transition: 'all 0.15s ease'
                      }}
                      aria-label="Reset text size to default"
                      aria-pressed={fontSize === 'base'}
                    >
                      A (Rec)
                    </button>
                    <button
                      onClick={() => setFontSize('lg')}
                      className="text-size-btn"
                      style={{
                        padding: '4px 10px',
                        fontSize: '15px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: fontSize === 'lg' ? 600 : 400,
                        color: fontSize === 'lg' ? '#FFFFFF' : '#4B5563',
                        backgroundColor: fontSize === 'lg' ? '#1D857E' : 'transparent',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        outline: 'none',
                        transition: 'all 0.15s ease'
                      }}
                      aria-label="Increase text size"
                      aria-pressed={fontSize === 'lg'}
                    >
                      A+
                    </button>
                  </div>
                </div>

              </div>

              {/* Post Narrative Body (Intercom Sans-Serif Styling with Dynamic Sizing) */}
              <div className="editorial-body" style={getBodyStyles()}>
                <p>
                  Last week I experimented with Figma's AI agent on an internal project: a conversational platform that helps users automate business tasks. It was a testing session aimed at understanding whether AI can replace, augment, or merely accelerate the initial phases of UI assembly.
                </p>

                {/* Centered Editorial Takeaway Blockquote */}
                <motion.blockquote 
                  style={{
                    margin: '36px 0',
                    paddingLeft: '24px',
                    borderLeft: '4px solid #1D857E',
                    fontSize: fontSize === 'sm' ? '17px' : fontSize === 'lg' ? '22px' : '19px',
                    lineHeight: '1.7',
                    color: '#111827',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    transition: 'font-size 0.2s ease'
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  "The agent didn't replace design thinking. I still had to shape the prompt, pick references, and judge the output. But it collapsed what would've been hours of first-draft work into a single working session. That's the real win here: not a finished design, but a much faster starting point."
                </motion.blockquote>

                <h3 
                  className="editorial-heading text-[20px] md:text-[24px]"
                  style={{ marginTop: '48px', marginBottom: '16px' }}
                >
                  The Process
                </h3>

                <p>
                  The experiment followed a structured workflow of feeding context, controlling direction, and executing automated design evaluations.
                </p>

                {/* Workflow Flowchart Integration */}
                <div 
                  style={{
                    margin: '32px 0',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.02)'
                  }}
                >
                  <img 
                    src={figmaAgentFlowchart} 
                    alt="Figma AI Design Agent Experiment Workflow Flowchart" 
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div 
                    style={{
                      padding: '12px 16px',
                      backgroundColor: 'rgba(250, 250, 250, 0.5)',
                      borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                      fontSize: '13px',
                      color: '#6B7280',
                      fontFamily: 'Work Sans, sans-serif',
                      textAlign: 'center'
                    }}
                  >
                    Linear workflow representing the human-in-the-loop Figma AI agent process.
                  </div>
                </div>

                {/* STEP 1 */}
                <h4 
                  className="editorial-heading text-[16px] uppercase"
                  style={{ color: '#1D857E', letterSpacing: '0.05em', marginTop: '36px', marginBottom: '8px' }}
                >
                  01. Gathered requirements
                </h4>
                <p>
                  Before launching the AI agent, I needed to assemble a comprehensive knowledge base. I pulled raw context from Copilot, including transcripts, requirement docs, and product notes. I ran a quick request to format the input parameters:
                </p>
                
                <PromptConsole 
                  title="copilot_summary.sh"
                  promptText="Summarize conversational automation transcripts, extract features, and group business rules into structured variables."
                />

                {/* STEP 2 */}
                <h4 
                  className="editorial-heading text-[16px] uppercase"
                  style={{ color: '#1D857E', letterSpacing: '0.05em', marginTop: '36px', marginBottom: '8px' }}
                >
                  02. Shared visual direction
                </h4>
                <p>
                  Agents require strong design reference to avoid generic outputs. I compiled a few screenshots showing roughly how I wanted the design to look, focusing on layout density, high-contrast states, and typography hierarchies.
                </p>

                {/* STEP 3 */}
                <h4 
                  className="editorial-heading text-[16px] uppercase"
                  style={{ color: '#1D857E', letterSpacing: '0.05em', marginTop: '36px', marginBottom: '8px' }}
                >
                  03. Generated a prompt
                </h4>
                <p>
                  I had Copilot turn the gathered transcripts and visual references into a highly structured prompt for the design agent. It was built specifically to outline components, layout rules, and spacing guidelines.
                </p>

                <PromptConsole 
                  title="figma_agent_prompt.txt"
                  promptText="Generate a conversational layout for business automation. Incorporate a collapsible task list pane, a center chat component, and right sidebar details. Enforce standard spacing grid, and reference icon styles from our shared design system."
                />

                {/* STEP 4 */}
                <h4 
                  className="editorial-heading text-[16px] uppercase"
                  style={{ color: '#1D857E', letterSpacing: '0.05em', marginTop: '36px', marginBottom: '8px' }}
                >
                  04. Kicked off Figma's AI agent
                </h4>
                <p>
                  I gave the agent everything: the project details, the structured prompt, the visual screenshots, and direct link assets to our shared Figma design system and icon libraries. The agent commenced assembly.
                </p>

                {/* STEP 5 */}
                <h4 
                  className="editorial-heading text-[16px] uppercase"
                  style={{ color: '#1D857E', letterSpacing: '0.05em', marginTop: '36px', marginBottom: '8px' }}
                >
                  05. Iterated
                </h4>
                <p>
                  I brainstormed with the Figma AI agent on its first pass and landed on a version that served as a solid structural baseline. The gap was mostly in spacing, icon choices, and a few interaction details, nothing structural.
                </p>

                {/* BONUS SECTION */}
                <div 
                  style={{
                    marginTop: '48px',
                    padding: '24px',
                    backgroundColor: 'rgba(29, 133, 126, 0.03)',
                    border: '1px dashed rgba(29, 133, 126, 0.25)',
                    borderRadius: '16px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <AlertCircle size={20} style={{ color: '#1D857E' }} />
                    <span 
                      className="editorial-heading text-[14px] uppercase"
                      style={{ letterSpacing: '0.05em', color: '#111827' }}
                    >
                      Bonus: Design Validation
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6', color: '#4B5563' }}>
                    I also ran Figma's "Check design" feature to validate the output against our design system. It was a useful gut-check before pulling in the rest of the team.
                  </p>
                </div>

                {/* Google SEO Hashtags */}
                <div 
                  style={{ 
                    marginTop: '48px', 
                    paddingTop: '24px',
                    borderTop: '1px solid rgba(229, 231, 235, 0.7)',
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '12px 16px',
                    fontFamily: 'Work Sans, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500
                  }}
                >
                  <span style={{ color: '#1D857E' }}>#FigmaAIAgent</span>
                  <span style={{ color: '#1D857E' }}>#UXAutomation</span>
                  <span style={{ color: '#1D857E' }}>#DesignSystems</span>
                  <span style={{ color: '#1D857E' }}>#DesignR&D</span>
                </div>

              </div>

            </article>
            
          </main>

          {/* Right Column: Sticky Directory Sidebar (Intercom Style) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 pl-8 border-l border-gray-100" style={{ height: 'fit-content' }}>
            <h5 
              style={{ 
                fontSize: '11px', 
                fontWeight: 600, 
                fontFamily: 'Inter, sans-serif', 
                color: '#9CA3AF', 
                textTransform: 'uppercase', 
                letterSpacing: '0.08em', 
                marginBottom: '20px' 
              }}
            >
              Experiments Directory
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="space-y-4">
              {experimentsList.map((item) => {
                const isActive = activeExpId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScrollToExperiment(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        margin: 0,
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        outline: 'none'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '14px',
                          fontWeight: isActive ? 600 : 500,
                          fontFamily: 'Inter, sans-serif',
                          color: isActive ? '#1D857E' : '#6B7280',
                          transition: 'color 0.2s ease'
                        }}
                      >
                        {item.label}
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          fontFamily: 'Work Sans, sans-serif',
                          color: '#9CA3AF'
                        }}
                      >
                        {item.date}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

        </div>
      </div>



      <Footer />
    </div>
  );
}
