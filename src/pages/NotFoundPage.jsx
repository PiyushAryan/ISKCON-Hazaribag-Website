import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Page Not Found | ISKCON Hazaribag';
  }, []);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .nf-root {
          display: flex;
          min-height: 100vh;
          font-family: 'Montserrat', sans-serif;
          background: #fff;
        }

        .nf-left {
          flex: 1;
          background-image: url('/images/iskcon-rm.jpg');
          background-size: cover;
          background-position: center;
          position: relative;
          display: none;
        }

        .nf-left::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(34,1,1,0.58) 0%, rgba(34,1,1,0.22) 100%);
        }

        .nf-left::before {
          content: '';
          position: absolute;
          inset: 1.5rem;
          z-index: 1;
          border: 1px solid rgba(255,255,255,0.32);
          border-radius: 8px;
          pointer-events: none;
        }

        .nf-left-content {
          position: absolute;
          left: 2.5rem;
          right: 2.5rem;
          bottom: 2.5rem;
          z-index: 1;
          color: #fff;
        }

        .nf-left-label {
          display: block;
          color: rgba(255,255,255,0.8);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .nf-left-title {
          max-width: 440px;
          color: rgba(255,255,255,0.94);
          font-size: clamp(2rem, 4vw, 3.6rem);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.01em;
        }

        @media (min-width: 768px) {
          .nf-left { display: block; }
        }

        .nf-right {
          flex: 0 0 100%;
          max-width: 100%;
          background: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3rem 2rem;
          overflow-y: auto;
        }

        @media (min-width: 768px) {
          .nf-right {
            flex: 0 0 540px;
            max-width: 540px;
            padding: 3.5rem 4rem;
          }
        }

        .nf-logo {
          width: 48px;
          height: auto;
          margin-bottom: 2rem;
        }

        .nf-code {
          font-size: clamp(4.5rem, 18vw, 7rem);
          font-weight: 200;
          color: #eee6dc;
          line-height: 1;
          letter-spacing: -0.04em;
          margin-bottom: 0.25rem;
        }

        .nf-title {
          font-size: 1.45rem;
          font-weight: 300;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 0.4rem;
        }

        .nf-subtitle {
          font-size: 0.82rem;
          color: #aaa;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 1.8rem;
        }

        .nf-lead {
          color: #777;
          font-size: 0.8rem;
          line-height: 1.7;
          font-weight: 500;
          margin-bottom: 2.1rem;
        }

        .nf-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
        }

        .nf-btn {
          width: 100%;
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: 6px;
          padding: 0.9rem 1rem;
          border: none;
          background: #582739;
          color: #fff7c2;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.86rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease, transform 0.16s ease;
        }

        .nf-btn svg {
          width: 16px;
          height: 16px;
        }

        .nf-btn:hover {
          background: #f6d47b;
          color: #4d2030;
          transform: translateY(-1px);
        }

        .nf-btn-outline {
          background: transparent;
          border: 1.5px solid #e5e5e5;
          color: #555;
        }

        .nf-btn-outline:hover {
          background: transparent;
          border-color: #ccc;
          color: #1a1a1a;
          transform: translateY(-1px);
        }

        @media (max-width: 520px) {
          .nf-right {
            padding: 2.5rem 1.5rem;
          }

          .nf-title {
            font-size: 1.35rem;
          }
        }
      `}</style>

      <main className="nf-root">
        <div className="nf-left">
          <div className="nf-left-content">
            <span className="nf-left-label">ISKCON Hazaribag</span>
            <h2 className="nf-left-title">Sri Sri Radha Madhava Temple</h2>
          </div>
        </div>

        <section className="nf-right" aria-labelledby="nf-title">
          <img src="/images/logo-black-header.png" alt="ISKCON" className="nf-logo" />

          <p className="nf-code" aria-hidden="true">404</p>
          <h1 className="nf-title" id="nf-title">Page Not Found</h1>
          <p className="nf-subtitle">Sri Sri Radha Madhava Temple</p>

          <p className="nf-lead">
            The page you are looking for may have been moved, renamed, or does not exist.
            Please return home or go back to continue browsing.
          </p>

          <div className="nf-actions">
            <Link to="/" className="nf-btn">
              <Home aria-hidden="true" />
              Back to Home
            </Link>
            <button type="button" onClick={() => navigate(-1)} className="nf-btn nf-btn-outline">
              <ArrowLeft aria-hidden="true" />
              Go Back
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFoundPage;
