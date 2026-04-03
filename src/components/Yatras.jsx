import React, { useState } from 'react';

const yatras = [
  {
    id: 'mayapur',
    name: 'Sri Mayapur Dham',
    desc: 'The spiritual capital and birthplace of Sri Chaitanya Mahaprabhu.',
    image: '/images/mayapur-samadhi.jpeg',
  },
  {
    id: 'vrindavan',
    name: 'Sri Vrindavan Dham',
    desc: 'The eternal playground of Lord Krishna and Srimati Radharani.',
    image: '/images/vrindavan.avif',
  },
  {
    id: 'mathura',
    name: 'Mathura',
    desc: 'The sacred birthplace of Lord Krishna on the banks of Yamuna.',
    image: '/images/Mathura.jpg',
  },
  {
    id: 'dwarka',
    name: 'Dwarka',
    desc: 'The glorious kingdom of Lord Krishna by the western sea.',
    image: '/images/m_Dwarka_tv_destination_img_1_l_766_1147.avif',
  },
  {
    id: 'puri',
    name: 'Jagannath Puri',
    desc: 'The majestic abode of the Lord of the Universe, Sri Jagannath.',
    image: '/images/Jagannath-Temple-Puri-–-Complete-Guide-.webp',
  }
];

const Yatras = () => {
  const [selectedYatra, setSelectedYatra] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    people: 1,
  });

  const openModal = (yatra) => {
    setSelectedYatra(yatra);
    setSubmitted(false);
    setFormData({ name: '', phone: '', email: '', people: 1 });
  };

  const closeModal = () => setSelectedYatra(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send to API here
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        #yatras {
          background: #fff;
          padding: 6rem 0;
          overflow: hidden;
        }

        .y-header {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem;
          margin-bottom: 3.5rem;
        }

        .y-eyebrow {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #e07b39;
          margin-bottom: 0.75rem;
          display: block;
        }

        .y-title {
          font-family: 'Merienda One', cursive;
          font-size: clamp(2.2rem, 4vw, 3rem);
          font-weight: 400;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.15;
        }

        /* Horizontal scroll track */
        .y-track {
          display: flex;
          gap: 2rem;
          overflow-x: auto;
          padding: 0 2rem 2rem;
          margin: 0 auto;
          scroll-snap-type: x mandatory;
          scroll-padding: 2rem;
          -webkit-overflow-scrolling: touch;
        }

        /* Hide scrollbar */
        .y-track::-webkit-scrollbar { display: none; }
        .y-track { -ms-overflow-style: none; scrollbar-width: none; }

        .y-card {
          flex: 0 0 320px;
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        @media (min-width: 1100px) {
          .y-track {
            padding: 0 calc((100vw - 1100px) / 2 + 2rem) 2rem;
            scroll-padding: calc((100vw - 1100px) / 2 + 2rem);
          }
        }

        .y-img-frame {
          width: 100%;
          border-radius: 8px;
          aspect-ratio: 4/5;
          overflow: hidden;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .y-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .y-card:hover .y-img { transform: scale(1.04); }

        .y-img-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.1), transparent 40%);
          pointer-events: none;
        }

        .y-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 0.5rem;
          letter-spacing: -0.02em;
        }

        .y-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.82rem;
          color: #666;
          line-height: 1.6;
          margin: 0 0 1rem;
        }

        .y-btn {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #e07b39;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: gap 0.2s;
        }
        .y-btn:hover { gap: 0.6rem; }

        /* ── Modal overlay ── */
        .ym-overlay {
          position: fixed;
          inset: 0;
          background: rgba(16, 8, 0, 0.75);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: ym-fade 0.2s ease-out;
        }

        @keyframes ym-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .ym-modal {
          background: #fff;
          width: 100%;
          max-width: 440px;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          animation: ym-slide 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes ym-slide {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .ym-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0,0,0,0.05);
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          font-size: 1.2rem;
          line-height: 1;
          color: #555;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, color 0.2s;
        }
        .ym-close:hover { background: rgba(0,0,0,0.1); color: #000; }

        .ym-header {
          padding: 2rem 2rem 1rem;
          text-align: center;
        }
        .ym-eyebrow {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #e07b39;
          margin-bottom: 0.5rem;
          display: block;
        }
        .ym-title {
          font-family: 'Moon Dance', cursive;
          font-size: 2.2rem;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.1;
        }

        .ym-body {
          padding: 0 2rem 2.5rem;
        }

        .ym-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .ym-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .ym-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #555;
        }

        .ym-input {
          width: 100%;
          padding: 0.85rem 1rem;
          border: 1px solid #e5e5e5;
          border-radius: 4px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          color: #1a1a1a;
          background: #faf9f7;
          transition: border-color 0.2s, background 0.2s;
        }
        .ym-input:focus {
          outline: none;
          border-color: #e07b39;
          background: #fff;
        }

        .ym-submit {
          margin-top: 0.5rem;
          width: 100%;
          padding: 1rem;
          background: #e07b39;
          color: #fff;
          border: none;
          border-radius: 4px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s;
        }
        .ym-submit:hover { background: #c96930; }

        /* Success msg */
        .ym-success {
          text-align: center;
          padding: 2rem 0;
        }
        .ym-success-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(224, 123, 57, 0.1);
          color: #e07b39;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }
        .ym-success h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }
        .ym-success p {
          font-size: 0.85rem;
          color: #666;
          line-height: 1.6;
        }
      `}</style>

      <section id="yatras">
        <div className="y-header">
          <span className="y-eyebrow">Pilgrimages</span>
          <h2 className="y-title">Sri Dham Yatras</h2>
        </div>

        <div className="y-track">
          {yatras.map((yatra) => (
            <div className="y-card" key={yatra.id}>
              <div className="y-img-frame">
                <img src={yatra.image} alt={yatra.name} className="y-img" loading="lazy" />
              </div>
              <h3 className="y-name">{yatra.name}</h3>
              <p className="y-desc">{yatra.desc}</p>
              <button onClick={() => openModal(yatra)} className="y-btn">
                Join Us <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedYatra && (
        <div className="ym-overlay" onClick={closeModal}>
          <div className="ym-modal" onClick={(e) => e.stopPropagation()}>
            <button className="ym-close" onClick={closeModal}>&times;</button>
            
            <div className="ym-header">
              <span className="ym-eyebrow">Join Us For</span>
              <h2 className="ym-title">{selectedYatra.name}</h2>
            </div>

            <div className="ym-body">
              {submitted ? (
                <div className="ym-success">
                  <div className="ym-success-icon">
                    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3>Request Received!</h3>
                  <p>Hare Krishna!<br/>Our Yatra coordinator will contact you shortly.</p>
                </div>
              ) : (
                <form className="ym-form" onSubmit={handleSubmit}>
                  <div className="ym-group">
                    <label className="ym-label">Full Name *</label>
                    <input 
                      type="text" 
                      className="ym-input" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Radhanath Das" 
                    />
                  </div>
                  <div className="ym-group">
                    <label className="ym-label">WhatsApp / Mobile *</label>
                    <input 
                      type="tel" 
                      className="ym-input" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91" 
                    />
                  </div>
                  <div className="ym-group">
                    <label className="ym-label">Email (Optional)</label>
                    <input 
                      type="email" 
                      className="ym-input" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="you@example.com" 
                    />
                  </div>
                  <div className="ym-group">
                    <label className="ym-label">Number of People</label>
                    <input 
                      type="number" 
                      className="ym-input" 
                      min="1" max="100" 
                      required 
                      value={formData.people}
                      onChange={(e) => setFormData({...formData, people: parseInt(e.target.value) || 1})}
                    />
                  </div>
                  <button type="submit" className="ym-submit">
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Yatras;
