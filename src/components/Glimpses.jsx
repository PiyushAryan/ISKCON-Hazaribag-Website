import React, { useState } from 'react';

const images = [
  "https://www.iskconhazaribagh.com/_next/image?url=%2Fassets%2F4.jpg&w=640&q=75",
  "https://www.iskconhazaribagh.com/_next/image?url=%2Fassets%2F9.jpg&w=640&q=75",
  "https://www.iskconhazaribagh.com/_next/image?url=%2Fassets%2F13.jpg&w=640&q=75",
  "https://www.iskconhazaribagh.com/_next/image?url=%2Fassets%2F6.jpg&w=640&q=75"
];

const Glimpses = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Lock body scroll when overlay opens
  React.useEffect(() => {
    if (selectedImg) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [selectedImg]);

  return (
    <>
      <style>{`
        .glimpses-section {
          padding: 6rem 2rem;
          background-color: #fcfaf8;
        }
        .glimpses-title {
          font-family: 'Merienda One', cursive;
          font-size: 2.5rem;
          text-align: center;
          color: #a44e08;
          margin-bottom: 3rem;
        }
        @media (max-width: 768px) {
          .glimpses-section {
            padding: 4rem 1.5rem;
          }
          .glimpses-title {
            font-size: 2.2rem;
            margin-bottom: 2.5rem;
          }
        }
      `}</style>
      <section id="glimpses" className="glimpses-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="glimpses-title">
            A few glimpses from the ground
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {images.map((url, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedImg(url)}
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                  aspectRatio: '4/3',
                  transform: 'translateY(0)',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'zoom-in'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(164, 78, 8, 0.12)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
                }}
              >
                <img 
                  src={url} 
                  alt={`Glimpse ${i+1}`} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Lightbox Overlay */}
      {selectedImg && (
        <div 
          onClick={() => setSelectedImg(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'glassFadeIn 0.3s forwards',
            cursor: 'zoom-out'
          }}
        >
          <div style={{ position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImg} 
              alt="Expanded Glimpse" 
              style={{
                maxWidth: '85vw',
                maxHeight: '90vh',
                borderRadius: '16px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                animation: 'glassScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
              }}
            />
            {/* Elegant close button */}
            <button 
              onClick={() => setSelectedImg(null)}
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                background: '#fff',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                color: '#555',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Local keyframes for smooth entrance animations */}
      <style>{`
        @keyframes glassScaleUp {
          from { transform: scale(0.9) translateY(20px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes glassFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Glimpses;
