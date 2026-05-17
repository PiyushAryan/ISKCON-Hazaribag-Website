import React from 'react';
import { Link } from 'react-router-dom';

const LegalPage = ({ title, eyebrow, lastUpdated, children }) => {
  return (
    <>
      <style>{`
        .lp-root {
          min-height: 100vh;
          background: #faf9f7;
          font-family: 'Montserrat', sans-serif;
        }

        /* ── Top bar ── */
        .lp-topbar {
          background: #fff;
          border-bottom: 1px solid #ebebeb;
          padding: 1.1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .lp-topbar-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        .lp-topbar-logo {
          width: 36px;
          height: auto;
        }
        .lp-topbar-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: #1a1a1a;
        }
        .lp-back {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #aaa;
          text-decoration: none;
          transition: color 0.2s;
        }
        .lp-back:hover { color: #582739; }

        /* ── Header ── */
        .lp-header {
          max-width: 740px;
          margin: 0 auto;
          padding: 4rem 2rem 3rem;
          border-bottom: 1px solid #ebebeb;
        }
        .lp-eyebrow {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #582739;
          margin-bottom: 0.75rem;
          display: block;
        }
        .lp-title {
          font-family: 'Merienda One', cursive;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 400;
          color: #1a1a1a;
          margin: 0 0 1rem;
          line-height: 1.2;
        }
        .lp-meta {
          font-size: 0.75rem;
          color: #bbb;
          font-weight: 500;
          letter-spacing: 0.04em;
        }

        /* ── Body ── */
        .lp-body {
          max-width: 740px;
          margin: 0 auto;
          padding: 3rem 2rem 6rem;
        }
        .lp-body h2 {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #1a1a1a;
          margin: 2.5rem 0 0.9rem;
          padding-bottom: 0.6rem;
          border-bottom: 1px solid #ebebeb;
        }
        .lp-body h2:first-child { margin-top: 0; }
        .lp-body p {
          font-size: 0.88rem;
          color: #555;
          line-height: 1.85;
          margin: 0 0 1rem;
        }
        .lp-body ul {
          padding-left: 1.2rem;
          margin: 0 0 1rem;
        }
        .lp-body li {
          font-size: 0.88rem;
          color: #555;
          line-height: 1.85;
          margin-bottom: 0.4rem;
        }
        .lp-body a {
          color: #582739;
          font-weight: 600;
          text-decoration: none;
        }
        .lp-body a:hover { text-decoration: underline; }
        .lp-highlight {
          background: rgba(246, 212, 123, 0.15); /* Soft gold tint */
          border-left: 3px solid #582739;
          padding: 1rem 1.25rem;
          border-radius: 0 4px 4px 0;
          margin: 1.5rem 0;
          font-size: 0.85rem;
          color: #555;
          line-height: 1.75;
        }

        /* ── Footer ── */
        .lp-footer {
          border-top: 1px solid #ebebeb;
          background: #fff;
          padding: 1.5rem 2rem;
          text-align: center;
          font-size: 0.72rem;
          color: #ccc;
        }
      `}</style>

      <div className="lp-root">
        {/* Top navigation bar */}
        <nav className="lp-topbar">
          <Link to="/" className="lp-topbar-brand">
            <img src="/images/iskcon_logo.svg" alt="ISKCON" className="lp-topbar-logo" />
            <span className="lp-topbar-name">ISKCON Hazaribag</span>
          </Link>
          <Link to="/" className="lp-back">← Back to Home</Link>
        </nav>

        {/* Page header */}
        <header className="lp-header">
          <span className="lp-eyebrow">{eyebrow}</span>
          <h1 className="lp-title">{title}</h1>
          <p className="lp-meta">Last updated: {lastUpdated}</p>
        </header>

        {/* Content */}
        <main className="lp-body">{children}</main>

        {/* Footer */}
        <footer className="lp-footer">
          © {new Date().getFullYear()} ISKCON Hazaribag. All Rights Reserved.
        </footer>
      </div>
    </>
  );
};

export default LegalPage;
