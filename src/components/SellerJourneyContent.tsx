import { Package, LogIn, Zap, Heart } from 'lucide-react';

export function SellerJourneyContent() {
  return (
    <div>
      {/* Goal Statement */}
      <div 
        style={{
          background: 'rgba(139, 92, 246, 0.05)',
          border: '1px solid rgba(139, 92, 246, 0.15)',
          borderRadius: '8px',
          padding: '16px 20px',
          marginBottom: '32px'
        }}
      >
        <div 
          style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(139, 92, 246, 0.7)',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '6px'
          }}
        >
          Emotional State & Goal
        </div>
        <p 
          style={{
            fontSize: '14px',
            lineHeight: '1.6',
            color: 'rgba(17, 24, 39, 0.8)',
            fontFamily: 'Work Sans, sans-serif',
            margin: 0
          }}
        >
          Sell old items with ease to keep home clean and make some money out of it
        </p>
      </div>

      {/* Journey Stages */}
      <div className="grid md:grid-cols-4" style={{ gap: '16px', marginBottom: '40px' }}>
        {[
          {
            stage: 'ENTICE',
            icon: Package,
            action: 'Frustrated with lot of old products making house messy, finds out that few of the friends sell it online',
            emotion: 'Frustrated',
            painPoint: 'Sees lot of papers, cardboards, plastics making house messy. Looks for few online options to clean or resell it, but finding garbage collector schedule is tough',
            opportunity: 'Scope for marketing to create awareness about our app'
          },
          {
            stage: 'ENTER',
            icon: LogIn,
            action: 'Signs up and browses the categories, checks the process and pricing. Fills all the details',
            emotion: 'Normal → Hesitant → Confused',
            painPoint: 'I forgot my username & password / So many categories, I am confused which to choose',
            opportunity: 'Single tap sign in/signup(gmail), Login with OTP. Add only most needed categories and arrange them as per user demand. Search option would be great'
          },
          {
            stage: 'ENGAGE',
            icon: Zap,
            action: 'Request for pickup, tracks the order & waits for pickup, sells it to scrap collector and receives money or reward',
            emotion: 'Excited → Confused → Normal',
            painPoint: 'Whether this will be okay to share? / Why should I wait for so long? / Are these really needed?',
            opportunity: 'Quick Pickup and notify user about the status. Better/Decent price for the sold products, rewards to encourage to do more'
          },
          {
            stage: 'EXIT & EXTEND',
            icon: Heart,
            action: 'Receives congratulations message, shares experience with others, uses the old app again with family',
            emotion: 'Excited',
            painPoint: 'Do I really need to rate?',
            opportunity: 'Encourage people to share, some kind recognition to promote products and app'
          }
        ].map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={idx}
              style={{
                background: 'white',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '8px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              {/* Stage header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '2px solid rgba(139, 92, 246, 0.15)', paddingBottom: '12px' }}>
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(139, 92, 246, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <IconComponent size={16} style={{ color: '#8B5CF6' }} />
                </div>
                <div 
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: '#8B5CF6',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {item.stage}
                </div>
              </div>

              {/* Action */}
              <div>
                <div 
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'rgba(17, 24, 39, 0.5)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '6px'
                  }}
                >
                  User Action
                </div>
                <p 
                  style={{
                    fontSize: '12px',
                    lineHeight: '1.5',
                    color: 'rgba(17, 24, 39, 0.75)',
                    fontFamily: 'Work Sans, sans-serif',
                    margin: 0
                  }}
                >
                  {item.action}
                </p>
              </div>

              {/* Emotion */}
              <div>
                <div 
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'rgba(17, 24, 39, 0.5)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '6px'
                  }}
                >
                  Emotion
                </div>
                <p 
                  style={{
                    fontSize: '12px',
                    lineHeight: '1.5',
                    color: '#8B5CF6',
                    fontFamily: 'Work Sans, sans-serif',
                    margin: 0,
                    fontWeight: 500
                  }}
                >
                  {item.emotion}
                </p>
              </div>

              {/* Pain Point */}
              <div 
                style={{
                  padding: '12px',
                  background: 'rgba(239, 68, 68, 0.05)',
                  borderLeft: '2px solid rgba(239, 68, 68, 0.4)',
                  borderRadius: '4px'
                }}
              >
                <div 
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'rgba(239, 68, 68, 0.8)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '4px'
                  }}
                >
                  Pain Point
                </div>
                <p 
                  style={{
                    fontSize: '11px',
                    lineHeight: '1.4',
                    color: 'rgba(17, 24, 39, 0.75)',
                    fontFamily: 'Work Sans, sans-serif',
                    margin: 0
                  }}
                >
                  {item.painPoint}
                </p>
              </div>

              {/* Opportunity */}
              <div 
                style={{
                  padding: '12px',
                  background: 'rgba(16, 185, 129, 0.05)',
                  borderLeft: '2px solid rgba(16, 185, 129, 0.4)',
                  borderRadius: '4px'
                }}
              >
                <div 
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'rgba(16, 185, 129, 0.8)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '4px'
                  }}
                >
                  Opportunity
                </div>
                <p 
                  style={{
                    fontSize: '11px',
                    lineHeight: '1.4',
                    color: 'rgba(17, 24, 39, 0.75)',
                    fontFamily: 'Work Sans, sans-serif',
                    margin: 0
                  }}
                >
                  {item.opportunity}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empathy Map Section */}
      <div 
        style={{
          background: '#FAFAFA',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          borderRadius: '12px',
          padding: '32px'
        }}
      >
        <h3 
          style={{
            fontSize: '17px',
            fontWeight: 600,
            color: '#111827',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '24px'
          }}
        >
          Empathy Map
        </h3>
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
    </div>
  );
}
