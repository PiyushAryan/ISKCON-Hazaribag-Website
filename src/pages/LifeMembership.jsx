import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const LifeMembership = () => {
  useEffect(() => {
    document.title = 'Life Patron Membership — ISKCON Hazaribag';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        .lm-page {
          min-height: 100vh;
          background: #fffaf0;
          color: #321017;
          font-family: 'Montserrat', sans-serif;
        }

        .lm-hero {
          position: relative;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 2rem 5rem;
          text-align: center;
          overflow: hidden;
          background: linear-gradient(135deg, #582739 0%, #2b0710 100%);
          color: #fff7c2;
        }

        .lm-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: url('/images/pattern.svg') center/cover;
          opacity: 0.05;
          pointer-events: none;
        }

        .lm-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        .lm-kicker {
          display: block;
          margin-bottom: 1rem;
          color: #f6d47b;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.25em;
          text-transform: uppercase;
        }

        .lm-title {
          margin: 0;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          line-height: 1.1;
          font-weight: 900;
          color: #fff7c2;
        }

        .lm-subtitle {
          margin: 1.5rem auto 0;
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255, 247, 194, 0.85);
          max-width: 700px;
        }

        .lm-main {
          max-width: 900px;
          margin: 0 auto 5rem;
          padding: 4rem 1.5rem 0;
          position: relative;
          z-index: 10;
        }

        .lm-section-title {
          font-size: 2.5rem;
          font-weight: 300;
          color: #321017;
          margin: 0 0 3.5rem;
          letter-spacing: -0.02em;
        }

        .lm-benefits {
          display: flex;
          flex-direction: column;
        }

        .lm-benefit {
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: 2rem;
          padding: 3rem 0;
          border-top: 1px solid rgba(50, 16, 23, 0.1);
        }

        .lm-b-num {
          font-size: 1.2rem;
          font-weight: 500;
          color: rgba(50, 16, 23, 0.4);
          font-variant-numeric: tabular-nums;
        }

        .lm-b-content h3 {
          margin: 0 0 1rem;
          font-size: 1.5rem;
          font-weight: 600;
          color: #321017;
          letter-spacing: -0.01em;
        }

        .lm-b-content p, .lm-b-content li {
          margin: 0 0 0.5rem;
          font-size: 1.05rem;
          line-height: 1.8;
          color: rgba(50, 16, 23, 0.75);
          font-weight: 400;
        }

        .lm-b-content ul {
          margin: 0;
          padding-left: 1.2rem;
          color: rgba(50, 16, 23, 0.75);
        }

        .lm-b-content li::marker {
          color: rgba(50, 16, 23, 0.4);
        }

        .lm-action-box {
          margin-top: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4rem 0 0;
          border-top: 1px solid rgba(50, 16, 23, 0.1);
          text-align: center;
        }

        .lm-price-label {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: rgba(50, 16, 23, 0.5);
          margin-bottom: 1rem;
          display: block;
        }

        .lm-price {
          font-size: 4rem;
          font-weight: 300;
          color: #321017;
          line-height: 1;
          margin-bottom: 1rem;
          letter-spacing: -0.03em;
        }

        .lm-tax {
          font-size: 0.9rem;
          color: rgba(50, 16, 23, 0.5);
          margin-bottom: 2.5rem;
        }

        .lm-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1.1rem 3.5rem;
          background: #321017;
          color: #fffaf0;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.4s ease;
        }

        .lm-btn:hover {
          background: #582739;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(50, 16, 23, 0.15);
        }

        @media (max-width: 768px) {
          .lm-main { padding-top: 2rem; margin-top: 0; }
          .lm-section-title { font-size: 2rem; margin-bottom: 2rem; }
          .lm-benefit { grid-template-columns: 1fr; gap: 0.5rem; padding: 2.5rem 0; }
          .lm-b-num { font-size: 1rem; margin-bottom: 0.5rem; }
          .lm-price { font-size: 3rem; }
        }
      `}</style>

      <div className="lm-page">
        <Navbar />

        <header className="lm-hero">
          <div className="lm-hero-content">
            <span className="lm-kicker">Join the Family</span>
            <h1 className="lm-title">Become a Life Patron Member of ISKCON</h1>
            <p className="lm-subtitle">
              The Life Patron Membership facility is an opportunity to become part of ISKCON’s family. A.C. Bhaktivedanta Swami introduced the Life Patron Membership program in the early 70’s and invited citizens of Hazaribag and across the world to reside in the temple for a couple of days, attend spiritual programs, and receive Krishna conscious association. Presently, more than 50,000 Life Patron Members are part of ISKCON’s family.
            </p>
          </div>
        </header>

        <main className="lm-main">
          <h2 className="lm-section-title">Life Patron Membership Benefits</h2>
          
          <div className="lm-benefits">
            <div className="lm-benefit">
              <div className="lm-b-num">01</div>
              <div className="lm-b-content">
                <h3>Guest House Accommodation</h3>
                <p>You are welcome to stay in any ISKCON center all over the world for three days in a year. Maintenance charges will be applied in ISKCON centers. All accommodation is subject to availability and only with confirmed advance reservation. This applies to accommodation in a single room of the patron, spouse and children below 18 years of age, and dependent parents above 60 years of age. Rules may vary in different countries.</p>
              </div>
            </div>

            <div className="lm-benefit">
              <div className="lm-b-num">02</div>
              <div className="lm-b-content">
                <h3>ISKCON Books</h3>
                <p>A set of books like Srimad Bhagavatam, Srimad Bhagavad Gita, other Vedic books by HDG A.C. Bhaktivedanta Swami Prabhupada, available in all major Indian Languages, is provided to the Life Patron Member. In addition, a photo frame is provided.</p>
              </div>
            </div>

            <div className="lm-benefit">
              <div className="lm-b-num">03</div>
              <div className="lm-b-content">
                <h3>Spiritual Benefits</h3>
                <ul>
                  <li>Special Birthday Pooja for the Life Patron Member followed by Prasadam for his/her family.</li>
                  <li>Prasadam is served every Sunday afternoon in the main temple hall for life member and his/her family.</li>
                  <li>Kirtan/Pravachan program at your home on special occasions.</li>
                  <li>Special Invitation passes will be sent for festivals like Janmashtami and Ram Navmi, etc.</li>
                  <li>Prasadam is couriered on birthday of relatives of Life Patron Member and other anniversaries or special occasions.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lm-action-box">
            <span className="lm-price-label">One-Time Contribution</span>
            <div className="lm-price">₹ 55,555</div>
            <p className="lm-tax">Tax exempted under section 80G of the Income Tax Act, 1961 (India).</p>
            <Link to="/checkout" className="lm-btn">Donate Now</Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LifeMembership;
