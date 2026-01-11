import { Search, LogIn, ShoppingCart, Heart } from 'lucide-react';

export function BuyerJourneyContent() {
  return (
    <div>
      {/* Goal Statement */}
      <div 
        style={{
          background: 'rgba(29, 133, 126, 0.05)',
          border: '1px solid rgba(29, 133, 126, 0.15)',
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
            color: 'rgba(29, 133, 126, 0.7)',
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
          Get habituated to using more and more recycled products in future, buy recycled products with less hassle
        </p>
      </div>

      {/* Journey Stages */}
      <div className="grid md:grid-cols-4" style={{ gap: '16px', marginBottom: '40px' }}>
        {[
          {
            stage: 'ENTICE',
            icon: Search,
            action: 'User enquires with friend and family, browses online to find an app to buy recycled products',
            emotion: 'Confused → Normal',
            painPoint: 'Seems like no recycling products are used in our society to make environment clean and eco friendly',
            opportunity: 'Scope for promoting eco-friendly product to create awareness about our app'
          },
          {
            stage: 'ENTER',
            icon: LogIn,
            action: 'Signs up, browses product, reads review and adds to cart',
            emotion: 'Normal → Confused',
            painPoint: 'I forgot my username & password / So many categories, I am confused which to choose',
            opportunity: 'Create website to promote our product, Single tap sign in/signup(gmail), Login with OTP, Add only most needed categories'
          },
          {
            stage: 'ENGAGE',
            icon: ShoppingCart,
            action: 'Reviews cart, makes payment, orders the product & tracks it',
            emotion: 'Confused → Excited',
            painPoint: 'I am confused which is trusted gateway',
            opportunity: 'Easy payment methods: UPI, PayLater, Card, Net banking. Reasonable price for recycled products to encourage people'
          },
          {
            stage: 'EXIT & EXTEND',
            icon: Heart,
            action: 'Starts using the product, rates & shares experience',
            emotion: 'Excited',
            painPoint: 'The quality of product is really good',
            opportunity: 'Referral System, Reward credits on giving feedback, Encourage people to share with recognition'
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '2px solid rgba(29, 133, 126, 0.15)', paddingBottom: '12px' }}>
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
                  <IconComponent size={16} style={{ color: '#1D857E' }} />
                </div>
                <div 
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: '#1D857E',
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
    </div>
  );
}
