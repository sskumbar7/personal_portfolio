export function InformationArchitecture() {
  return (
    <div 
      style={{
        background: 'white',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        borderRadius: '12px',
        padding: '40px',
        overflowX: 'auto'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
        
        {/* Level 1: Splash Screen */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div 
            style={{
              padding: '12px 32px',
              background: 'linear-gradient(135deg, #84B996 0%, #6B9B7D 100%)',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 600,
              color: 'white',
              fontFamily: 'Work Sans, sans-serif',
              textAlign: 'center'
            }}
          >
            Splash Screen
          </div>
          
          {/* Connector */}
          <div style={{ width: '2px', height: '24px', background: 'rgba(0, 0, 0, 0.15)' }} />
          
          {/* Onboarding Row */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {['Onboarding 1', 'Onboarding 2', 'Onboarding 3', 'Login/Register'].map((item, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '10px 20px',
                  background: 'linear-gradient(135deg, #84B996 0%, #6B9B7D 100%)',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'white',
                  fontFamily: 'Work Sans, sans-serif',
                  whiteSpace: 'nowrap'
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Connector */}
        <div style={{ width: '2px', height: '32px', background: 'rgba(0, 0, 0, 0.15)' }} />

        {/* Level 2: Home */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div 
            style={{
              padding: '12px 48px',
              background: 'linear-gradient(135deg, #84B996 0%, #6B9B7D 100%)',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 600,
              color: 'white',
              fontFamily: 'Work Sans, sans-serif',
              textAlign: 'center'
            }}
          >
            Home
          </div>
          
          {/* Connector */}
          <div style={{ width: '2px', height: '24px', background: 'rgba(0, 0, 0, 0.15)' }} />
          
          {/* Search & Wallet */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {['Search', 'Wallet'].map((item, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '8px 24px',
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.15)',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'rgba(17, 24, 39, 0.75)',
                  fontFamily: 'Work Sans, sans-serif'
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Connector to 4 columns */}
        <div style={{ width: '2px', height: '32px', background: 'rgba(0, 0, 0, 0.15)' }} />

        {/* Level 3: Main 4 Sections */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', width: '100%', maxWidth: '1100px' }}>
          
          {/* Sell Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div 
              style={{
                padding: '10px 24px',
                background: 'linear-gradient(135deg, #84B996 0%, #6B9B7D 100%)',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                color: 'white',
                fontFamily: 'Work Sans, sans-serif',
                width: '100%',
                textAlign: 'center'
              }}
            >
              Sell
            </div>
            
            {/* Items */}
            {['Clothes', 'Plastic stuffs', 'Paper', 'Boxes', 'Electronics', 'Utensils', 'Glass items', 'Metal canes'].map((item, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '8px 12px',
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '4px',
                  fontSize: '11px',
                  color: 'rgba(17, 24, 39, 0.75)',
                  fontFamily: 'Work Sans, sans-serif',
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                {item}
              </div>
            ))}
            
            {/* PDP */}
            <div 
              style={{
                padding: '10px 24px',
                background: 'linear-gradient(135deg, #84B996 0%, #6B9B7D 100%)',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 600,
                color: 'white',
                fontFamily: 'Work Sans, sans-serif',
                width: '100%',
                textAlign: 'center',
                marginTop: '8px'
              }}
            >
              PDP
            </div>
            
            {/* PDP Sub-items */}
            {['Schedule pickup', 'Pickup confirmation', 'Cancel pickup', 'Call agent', 'OTP Verified', 'Pickup completed'].map((item, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '6px 10px',
                  background: ['Pickup confirmation', 'Pickup completed'].includes(item) ? 'linear-gradient(135deg, #84B996 0%, #6B9B7D 100%)' : 'white',
                  border: ['Pickup confirmation', 'Pickup completed'].includes(item) ? 'none' : '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '4px',
                  fontSize: '10px',
                  fontWeight: ['Pickup confirmation', 'Pickup completed'].includes(item) ? 600 : 400,
                  color: ['Pickup confirmation', 'Pickup completed'].includes(item) ? 'white' : 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Buy Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div 
              style={{
                padding: '10px 24px',
                background: 'linear-gradient(135deg, #84B996 0%, #6B9B7D 100%)',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                color: 'white',
                fontFamily: 'Work Sans, sans-serif',
                width: '100%',
                textAlign: 'center'
              }}
            >
              Buy
            </div>
            
            {/* Items */}
            {['Home Decors', 'Foot wears', 'Clothes', 'Bags', 'Pots/Plants', 'Furniture', 'Gift boxes'].map((item, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '8px 12px',
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '4px',
                  fontSize: '11px',
                  color: 'rgba(17, 24, 39, 0.75)',
                  fontFamily: 'Work Sans, sans-serif',
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                {item}
              </div>
            ))}
            
            {/* PLP/PDP */}
            <div 
              style={{
                padding: '10px 24px',
                background: 'linear-gradient(135deg, #84B996 0%, #6B9B7D 100%)',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 600,
                color: 'white',
                fontFamily: 'Work Sans, sans-serif',
                width: '100%',
                textAlign: 'center',
                marginTop: '8px'
              }}
            >
              PLP/PDP
            </div>
            
            {/* PLP/PDP Sub-items */}
            {['Add to cart', 'Add to favorite', 'Share Product', 'Cart', 'Change quantity', 'Remove Product', 'Proceed to payment', 'Order placed'].map((item, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '6px 10px',
                  background: ['Cart', 'Order placed'].includes(item) ? 'linear-gradient(135deg, #84B996 0%, #6B9B7D 100%)' : 'white',
                  border: ['Cart', 'Order placed'].includes(item) ? 'none' : '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '4px',
                  fontSize: '10px',
                  fontWeight: ['Cart', 'Order placed'].includes(item) ? 600 : 400,
                  color: ['Cart', 'Order placed'].includes(item) ? 'white' : 'rgba(17, 24, 39, 0.7)',
                  fontFamily: 'Work Sans, sans-serif',
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Orders History Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div 
              style={{
                padding: '10px 24px',
                background: 'linear-gradient(135deg, #84B996 0%, #6B9B7D 100%)',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                color: 'white',
                fontFamily: 'Work Sans, sans-serif',
                width: '100%',
                textAlign: 'center'
              }}
            >
              Orders history
            </div>
            
            {/* Items */}
            {['Track order', 'Cancel', 'Return', 'Download invoice'].map((item, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '8px 12px',
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '4px',
                  fontSize: '11px',
                  color: 'rgba(17, 24, 39, 0.75)',
                  fontFamily: 'Work Sans, sans-serif',
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Profile Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div 
              style={{
                padding: '10px 24px',
                background: 'linear-gradient(135deg, #84B996 0%, #6B9B7D 100%)',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                color: 'white',
                fontFamily: 'Work Sans, sans-serif',
                width: '100%',
                textAlign: 'center'
              }}
            >
              Profile
            </div>
            
            {/* Items */}
            {['Edit Profile', 'Favourites', 'Community', 'Impact', 'Saved Address', 'Videos', 'Events', 'Groups', 'News feed'].map((item, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '8px 12px',
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '4px',
                  fontSize: '11px',
                  color: 'rgba(17, 24, 39, 0.75)',
                  fontFamily: 'Work Sans, sans-serif',
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
