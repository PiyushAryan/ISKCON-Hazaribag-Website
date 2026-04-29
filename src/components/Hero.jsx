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
            linear-gradient(180deg, rgba(50, 8, 19, 0.46) 0%, rgba(50, 8, 19, 0.12) 34%, rgba(50, 8, 19, 0.54) 78%, #4f2431 100%),
            url('/images/iskcon-rm.jpg');
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
          grid-template-columns: minmax(280px, 390px) 1fr;
          gap: 2rem;
        }
        .hero-panel {
          background: rgba(81, 35, 47, 0.96);
          border: 1px solid rgba(255, 211, 111, 0.2);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.34);
          padding: 1.45rem 1.55rem 1.35rem;
          border-radius: 4px;
        }
        .hero-kicker {
          font-size: 0.72rem;
          color: #f5d78b;
          margin: 0 0 0.35rem;
          font-weight: 500;
        }
        .hero-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.7rem);
          letter-spacing: 0;
          line-height: 1;
          margin: 0 0 0.55rem;
          color: #fff7c2;
          font-weight: 800;
        }
        .hero-address,
        .hero-founder {
          color: rgba(255, 247, 194, 0.8);
          font-size: 0.72rem;
          line-height: 1.55;
          margin: 0;
        }
        .hero-founder { margin-top: 0.35rem; }
        .hero-status {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          margin: 1.2rem 0 1rem;
          color: #f8d777;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
        }
        .hero-status strong {
          color: #fff7c2;
          font-size: 0.9rem;
        }
        .hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #82d76f;
          box-shadow: 0 0 0 6px rgba(130, 215, 111, 0.15);
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .pdf-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 38px;
          padding: 0.72rem 1rem;
          border-radius: 5px;
          background: #f6d47b;
          color: #4a1f2b;
          border: 1px solid #f6d47b;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.76rem;
          font-weight: 800;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .pdf-btn:hover {
          background: #ffe495;
          color: #4a1f2b;
          transform: translateY(-1px);
        }
        .pdf-btn.secondary {
          background: transparent;
          color: #f6d47b;
        }
        .pdf-btn.secondary:hover { background: rgba(246, 212, 123, 0.1); }
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
            <p className="hero-address">
              Vanshidhar Colony, PTC Chowk, Hazaribagh, Jharkhand - 825301
            </p>
            <p className="hero-founder">
              International Society for Krishna Consciousness<br />
              Founder Acharya: His Divine Grace A. C. Bhaktivedanta Swami Srila Prabhupada
            </p>
            <div className="hero-status">
              <span className="hero-dot" />
              <span>Temple Status: <strong>Open till 04:30 PM</strong></span>
            </div>
            <div className="hero-actions">
              <a className="pdf-btn secondary" href="#schedule" onClick={toggleSchedule}>View Schedule</a>
              <Link className="pdf-btn" to="/checkout">Donate</Link>
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
