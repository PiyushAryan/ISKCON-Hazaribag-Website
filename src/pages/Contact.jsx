import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us — ISKCON Hazaribag';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        .ct-root {
          min-height: 100vh;
          background: #1a0409;
          font-family: 'Montserrat', sans-serif;
          color: #fff7c2;
          display: flex;
          flex-direction: column;
        }

        .ct-hero {
          position: relative;
          background: linear-gradient(135deg, #542e3a 0%, #2b0710 100%);
          padding: 160px 2rem 10rem;
          text-align: center;
          border-bottom: 1px solid rgba(246, 212, 123, 0.1);
          overflow: hidden;
        }

        .ct-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url('/images/iskcon-rm.jpg') center/cover;
          opacity: 0.15;
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        .ct-eyebrow {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #f6d47b;
          margin-bottom: 1rem;
          display: block;
          position: relative;
        }

        .ct-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          font-weight: 800;
          margin: 0 0 1rem;
          color: #fff7c2;
          position: relative;
        }

        .ct-subtitle {
          font-size: 1.15rem;
          color: rgba(255, 247, 194, 0.8);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          position: relative;
        }

        .ct-grid {
          max-width: 1200px;
          margin: -6rem auto 5rem;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          position: relative;
          z-index: 10;
        }

        @media (min-width: 768px) {
          .ct-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .ct-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(246, 212, 123, 0.15);
          border-radius: 16px;
          padding: 3rem 2rem;
          text-align: center;
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ct-card:hover {
          transform: translateY(-8px);
          border-color: rgba(246, 212, 123, 0.4);
          background: rgba(255, 255, 255, 0.06);
        }

        .ct-icon-wrap {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(246, 212, 123, 0.1);
          color: #f6d47b;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          border: 1px solid rgba(246, 212, 123, 0.2);
        }

        .ct-icon {
          width: 32px;
          height: 32px;
          stroke-width: 1.5;
        }

        .ct-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 247, 194, 0.6);
          margin-bottom: 1rem;
        }

        .ct-value {
          font-size: 1.15rem;
          font-weight: 600;
          line-height: 1.5;
          color: #fff7c2;
        }

        .ct-link {
          color: #fff7c2;
          text-decoration: none;
          transition: color 0.2s;
          display: inline-block;
          position: relative;
        }

        .ct-link::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: #f6d47b;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s ease;
        }

        .ct-link:hover {
          color: #f6d47b;
        }
        
        .ct-link:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>

      <div className="ct-root">
        <Navbar />
        
        <header className="ct-hero">
          <span className="ct-eyebrow">Get in Touch</span>
          <h1 className="ct-title">Contact Us</h1>
          <p className="ct-subtitle">
            We would love to hear from you. Reach out to us for any queries, donations, or spiritual guidance.
          </p>
        </header>

        <main className="ct-grid">
          {/* Address Card */}
          <div className="ct-card">
            <div className="ct-icon-wrap">
              <svg className="ct-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <span className="ct-label">Visit Us</span>
            <span className="ct-value">
              PTC Kanhari Road,<br />
              opposite Vrindavasadan Colony,<br />
              Hazaribagh, Jharkhand
            </span>
          </div>

          {/* Phone Card */}
          <div className="ct-card">
            <div className="ct-icon-wrap">
              <svg className="ct-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.21-.535a1.125 1.125 0 00-1.227.498l-1.599 2.133a15.26 15.26 0 01-8.22-8.22l2.133-1.599a1.125 1.125 0 00.498-1.227l-.535-3.21C7.716 2.601 7.266 2.25 6.75 2.25H3.375A2.25 2.25 0 001.125 4.5v2.25z" />
              </svg>
            </div>
            <span className="ct-label">Call Us</span>
            <span className="ct-value">
              <a href="tel:+918210665015" className="ct-link">+91 82106 65015</a>
            </span>
          </div>

          {/* Email Card */}
          <div className="ct-card">
            <div className="ct-icon-wrap">
              <svg className="ct-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <span className="ct-label">Email Us</span>
            <span className="ct-value">
              <a href="mailto:iskconhazaribagh1@gmail.com" className="ct-link">iskconhazaribagh1@gmail.com</a>
            </span>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
