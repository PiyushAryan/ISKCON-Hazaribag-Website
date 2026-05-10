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
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Montserrat', sans-serif;
          background-image: url('/images/iskcon-rm.jpg');
          background-size: cover;
          background-position: center;
          padding: 2rem;
        }

        .nf-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(20,2,2,0.55) 0%,
            rgba(20,2,2,0.72) 60%,
            rgba(20,2,2,0.85) 100%
          );
        }

        .nf-inner {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 480px;
          width: 100%;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 3rem 2.5rem;
        }

        @media (max-width: 520px) {
          .nf-inner {
            padding: 2.5rem 1.5rem;
          }
        }

        .nf-logo {
          width: 52px;
          height: auto;
          margin-bottom: 2.5rem;
          filter: brightness(0) invert(1);
          opacity: 0.9;
        }

        .nf-code {
          font-size: clamp(6rem, 22vw, 10rem);
          font-weight: 200;
          color: rgba(255,255,255,0.08);
          line-height: 1;
          letter-spacing: -0.04em;
          margin-bottom: -0.5rem;
          user-select: none;
        }

        .nf-divider {
          width: 40px;
          height: 1.5px;
          background: rgba(246,212,123,0.6);
          margin: 0 auto 1.5rem;
        }

        .nf-label {
          display: block;
          color: rgba(255,255,255,0.55);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .nf-title {
          color: rgba(255,255,255,0.95);
          font-size: clamp(1.6rem, 5vw, 2.4rem);
          font-weight: 300;
          line-height: 1.15;
          letter-spacing: -0.01em;
          margin-bottom: 1rem;
        }

        .nf-lead {
          color: rgba(255,255,255,0.55);
          font-size: 0.82rem;
          line-height: 1.75;
          font-weight: 500;
          margin-bottom: 2.5rem;
        }

        .nf-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
        }

        @media (min-width: 420px) {
          .nf-actions {
            flex-direction: row;
            justify-content: center;
          }
        }

        .nf-btn {
          min-width: 160px;
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: 6px;
          padding: 0.85rem 1.4rem;
          border: none;
          background: #582739;
          color: #fff7c2;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease, transform 0.16s ease;
        }

        .nf-btn svg {
          width: 15px;
          height: 15px;
        }

        .nf-btn:hover {
          background: #f6d47b;
          color: #4d2030;
          transform: translateY(-2px);
        }

        .nf-btn-ghost {
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.22);
          color: rgba(255,255,255,0.75);
        }

        .nf-btn-ghost:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.45);
          color: #fff;
          transform: translateY(-2px);
        }
      `}</style>

      <main className="nf-root" aria-labelledby="nf-title">
        <div className="nf-inner">
          <img src="/images/logo-black-header.png" alt="ISKCON" className="nf-logo" />

          <p className="nf-code" aria-hidden="true">404</p>
          <div className="nf-divider" />

          <span className="nf-label">ISKCON Hazaribag</span>
          <h1 className="nf-title" id="nf-title">Page Not Found</h1>
          <p className="nf-lead">
            The page you're looking for may have been moved or doesn't exist.<br />
            Return home or go back to continue.
          </p>

          <div className="nf-actions">
            <Link to="/" className="nf-btn">
              <Home aria-hidden="true" />
              Back to Home
            </Link>
            <button type="button" onClick={() => navigate(-1)} className="nf-btn nf-btn-ghost">
              <ArrowLeft aria-hidden="true" />
              Go Back
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
