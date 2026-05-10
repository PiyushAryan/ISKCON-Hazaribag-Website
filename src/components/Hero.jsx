import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [showSchedule, setShowSchedule] = useState(false);

  const toggleSchedule = (e) => {
    e.preventDefault();
    setShowSchedule(!showSchedule);
  };

  return (
    <>
      <style>{`
        #title {
          min-height: 660px;
          height: 100vh;
          max-height: 820px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: flex-start;
          background: #2b0710;
          color: #fff7c2;
          padding: 7.6rem 1.5rem 4rem;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(180deg, rgba(50, 8, 19, 0.25) 0%, rgba(50, 8, 19, 0.05) 34%, rgba(50, 8, 19, 0.35) 78%, #4f2431 100%),
            url('/images/hero_img.jpg');
          background-size: cover;
          background-position: center 36%;
          transform: scale(1.01);
        }
        .hero-inner {
          width: min(1180px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(320px, 600px) 1fr;
          gap: 2rem;
        }
        .hero-panel {
          background: rgba(81, 35, 47, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 211, 111, 0.15);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          padding: 2.5rem 2rem;
          border-radius: 20px;
        }
        .hero-kicker {
          font-size: 0.85rem;
          color: #f5d78b;
          margin: 0 0 0.5rem;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .hero-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin: 0 0 0.5rem;
          color: #ffffff;
          font-weight: 700;
          text-align: left;
        }
        .hero-address {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin: 0 0 1.5rem;
        }
        .hero-address span {
          color: #f5d78b;
          font-size: 0.95rem;
          font-weight: 400;
          line-height: 1.5;
        }
        .hero-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .hero-founder,
        .hero-status {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin: 0;
        }
        .hero-status {
          align-items: center;
          color: #f8d777;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
        }
        .hero-founder span {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.85rem;
          line-height: 1.6;
          font-weight: 300;
          text-align: left;
          display: block;
        }
        .hero-status strong {
          color: #fff7c2;
          font-size: 0.9rem;
        }
        .hero-dot-wrapper {
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #82d76f;
          box-shadow: 0 0 0 4px rgba(130, 215, 111, 0.2);
        }
        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }
        .pdf-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          min-height: 42px;
          padding: 0.7rem 1.5rem;
          border-radius: 8px;
          background: #f6d47b;
          color: #4a1f2b;
          border: 1px solid #f6d47b;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(246, 212, 123, 0.2);
        }
        .pdf-btn svg {
          width: 17px;
          height: 17px;
        }
        .pdf-btn:hover {
          background: #fff;
          color: #4a1f2b;
          border-color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
        }
        .pdf-btn.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: none;
          backdrop-filter: blur(4px);
        }
        .pdf-btn.secondary:hover { 
          background: rgba(255, 255, 255, 0.2); 
          border-color: rgba(255, 255, 255, 0.5);
          color: #fff;
        }
        @media (max-width: 760px) {
          #title {
            min-height: 720px;
            height: auto;
            padding: 6.6rem 1rem 3rem;
            align-items: flex-end;
          }
          .hero-bg { background-position: center top; }
          .hero-inner {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }
          .hero-panel {
            padding: 1.2rem;
          }
          .hero-actions .pdf-btn {
            flex: 1;
          }
        }
        .schedule-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(38, 9, 18, 0.7);
          backdrop-filter: blur(4px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          opacity: 0;
          animation: fadeIn 0.3s forwards;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        .schedule-modal {
          background: #542e3a;
          border: 1px solid rgba(246, 212, 123, 0.3);
          border-radius: 8px;
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
          width: 100%;
          max-width: 400px;
          padding: 2rem;
          position: relative;
        }
        .schedule-close {
          position: absolute;
          top: 1rem;
          right: 1.2rem;
          background: transparent;
          border: none;
          color: #f6d47b;
          font-size: 2rem;
          cursor: pointer;
          line-height: 1;
        }
        .schedule-title {
          font-family: 'Montserrat', sans-serif;
          color: #fff7c2;
          font-size: 1.3rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-align: center;
        }
        .schedule-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .schedule-item {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255, 247, 194, 0.1);
          color: rgba(255, 247, 194, 0.9);
          font-size: 0.85rem;
          font-family: 'Montserrat', sans-serif;
        }
        .schedule-item:last-child {
          border-bottom: none;
        }
        .schedule-time {
          font-weight: 700;
          color: #f6d47b;
        }
      `}</style>

      <section id="title">
        <div className="hero-bg" />
        <div className="hero-inner">
          <div className="hero-panel">
            <p className="hero-kicker">Welcome to</p>
            <h1 className="hero-title">ISKCON Hazaribag</h1>
            <div className="hero-address">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px', color: '#f5d78b' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Vanshidhar Colony, PTC Chowk, Hazaribagh, Jharkhand - 825301</span>
            </div>
            <div className="hero-details">
              <div className="hero-founder">
                <span>
                  <strong style={{ fontSize: '1.15rem', fontWeight: 500, color: '#fff' }}>International Society for Krishna Consciousness</strong><br />
                  <span style={{ fontSize: '0.80rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '0.2rem' }}>Founder Acharya: His Divine Grace A. C. Bhaktivedanta Swami Srila Prabhupada</span>
                </span>
              </div>
              <div className="hero-status">
                <div className="hero-dot-wrapper"><span className="hero-dot animate-pulse" /></div>
                <span>Temple Status: <strong>Open till 08:30 PM</strong></span>
              </div>
            </div>
            <div className="hero-actions">
              <a className="pdf-btn secondary" href="#schedule" onClick={toggleSchedule}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                View Schedule
              </a>
              <Link className="pdf-btn" to="/checkout">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                Donate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {showSchedule && (
        <div className="schedule-modal-overlay" onClick={() => setShowSchedule(false)}>
          <div className="schedule-modal" onClick={e => e.stopPropagation()}>
            <button className="schedule-close" onClick={() => setShowSchedule(false)}>×</button>
            <h3 className="schedule-title">Temple Timings</h3>
            <ul className="schedule-list">
              <li className="schedule-item"><span>Mangala Arati</span><span className="schedule-time">04:30 AM</span></li>
              <li className="schedule-item"><span>Tulasi Arati</span><span className="schedule-time">05:15 AM</span></li>
              <li className="schedule-item"><span>Sringar Darshan</span><span className="schedule-time">07:15 AM</span></li>
              <li className="schedule-item"><span>Guru Puja</span><span className="schedule-time">07:30 AM</span></li>
              <li className="schedule-item"><span>Srimad Bhagavatam</span><span className="schedule-time">08:00 AM</span></li>
              <li className="schedule-item"><span>Raj Bhoga Arati</span><span className="schedule-time">12:30 PM</span></li>
              <li className="schedule-item"><span>Temple Closes</span><span className="schedule-time">01:00 PM</span></li>
              <li className="schedule-item"><span>Pushpa Arati</span><span className="schedule-time">04:15 PM</span></li>
              <li className="schedule-item"><span>Sandhya Arati</span><span className="schedule-time">07:00 PM</span></li>
              <li className="schedule-item"><span>Temple Closes</span><span className="schedule-time">08:30 PM</span></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
