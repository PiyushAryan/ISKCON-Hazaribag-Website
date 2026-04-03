import React from 'react';
import { Link } from 'react-router-dom';

const mantra = "Hare Kṛṣṇa Hare Kṛṣṇa · Kṛṣṇa Kṛṣṇa Hare Hare · Hare Rāma Hare Rāma · Rāma Rāma Hare Hare";

const links = [
  { label: 'Home', href: '/' },
  { label: 'Chronicle', href: '/#features' },
  { label: 'Events', href: '/#navigate' },
  { label: 'Donation', href: '/#donation' },
  { label: 'Contact', href: '/#footer' },
];

const legal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Donate via UPI', href: 'https://rzp.io/l/uMSGTo2yj' },
];

const socials = [
  { icon: 'fab fa-twitter', href: 'https://twitter.com/PiyushAryanPA', label: 'Twitter' },
  { icon: 'fab fa-instagram', href: 'https://www.instagram.com/piyush_.aryan', label: 'Instagram' },
  { icon: 'fab fa-facebook', href: 'https://facebook.com/PiyushAryan.pa', label: 'Facebook' },
  { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/piyush-aryan', label: 'LinkedIn' },
];

const Footer = () => {
  return (
    <>
      <style>{`
        /* ── Marquee ticker ── */
        .ft-ticker {
          background: #e07b39;
          overflow: hidden;
          white-space: nowrap;
          padding: 0.85rem 0;
          display: flex;
        }
        .ft-ticker-track {
          display: inline-flex;
          animation: ticker 28s linear infinite;
          gap: 0;
        }
        .ft-ticker-track:hover { animation-play-state: paused; }
        .ft-ticker-item {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-style: italic;
          font-weight: 400;
          font-size: 1.1rem;
          color: #1a0a00;
          padding: 0 3rem;
          white-space: nowrap;
          letter-spacing: 0.04em;
        }
        .ft-ticker-dot {
          color: rgba(26,10,0,0.4);
          font-style: normal;
        }
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ── Footer ── */
        #footer {
          background: #100800;
          color: #fff;
        }
        .ft-main {
          max-width: 1100px;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr;
          gap: 3rem;
        }
        @media (max-width: 768px) {
          .ft-main { grid-template-columns: 1fr; gap: 2rem; }
        }

        /* Brand column */
        .ft-brand-logo {
          width: 52px;
          height: auto;
          margin-bottom: 1.2rem;
          opacity: 0.85;
          filter: invert(1) brightness(2);
        }
        .ft-brand-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #f5ede4;
          margin: 0 0 0.25rem;
        }
        .ft-brand-sub {
          font-size: 0.72rem;
          color: rgba(245,237,228,0.35);
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 0.04em;
          margin: 0 0 1.5rem;
        }
        .ft-brand-desc {
          font-size: 0.8rem;
          color: rgba(245,237,228,0.45);
          line-height: 1.8;
          font-family: 'Montserrat', sans-serif;
          max-width: 280px;
          margin: 0 0 1.75rem;
        }
        .ft-socials {
          display: flex;
          gap: 1rem;
        }
        .ft-social-link {
          width: 34px;
          height: 34px;
          border: 1px solid rgba(245,237,228,0.12);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(245,237,228,0.4);
          font-size: 0.82rem;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .ft-social-link:hover {
          border-color: #e07b39;
          color: #e07b39;
        }

        /* Nav columns */
        .ft-col-heading {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(245,237,228,0.3);
          font-family: 'Montserrat', sans-serif;
          margin: 0 0 1.25rem;
        }
        .ft-col-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .ft-col-list a {
          font-size: 0.82rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          color: rgba(245,237,228,0.5);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ft-col-list a:hover { color: #f5ede4; }

        /* Bottom bar */
        .ft-bar {
          border-top: 1px solid rgba(245,237,228,0.06);
          padding: 1.5rem 2rem;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .ft-bar p {
          font-size: 0.72rem;
          color: rgba(245,237,228,0.25);
          font-family: 'Montserrat', sans-serif;
          margin: 0;
        }
        .ft-bar a {
          color: rgba(245,237,228,0.35);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ft-bar a:hover { color: #e07b39; }

        /* Donate CTA */
        .ft-donate-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1.1rem;
          border: 1px solid rgba(224,123,57,0.4);
          border-radius: 4px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #e07b39;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
          margin-top: 0.5rem;
        }
        .ft-donate-cta:hover {
          background: rgba(224,123,57,0.1);
          border-color: #e07b39;
          color: #e07b39;
        }
      `}</style>

      {/* Mantra ticker */}
      <div className="ft-ticker">
        <div className="ft-ticker-track">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="ft-ticker-item">
              {mantra} <span className="ft-ticker-dot"> ✦ </span>
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer id="footer">
        <div className="ft-main">

          {/* Brand */}
          <div>
            <img
              src="/images/iskcon_logo.svg"
              alt="ISKCON"
              className="ft-brand-logo"
            />
            <p className="ft-brand-name">ISKCON Hazaribag</p>
            <p className="ft-brand-sub">International Society for Krishna Consciousness</p>
            <p className="ft-brand-desc">
              Spreading the teachings of Bhagavad Gita and the glory of Sri Sri Radha Madhava throughout Jharkhand and beyond.
            </p>

            <div className="ft-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="ft-social-link" aria-label={s.label}>
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>

            <Link to="/checkout" className="ft-donate-cta" style={{ display: 'inline-flex', marginTop: '1.5rem' }}>
              🙏 Donate Now
            </Link>
          </div>

          {/* Nav links */}
          <div>
            <p className="ft-col-heading">Navigate</p>
            <ul className="ft-col-list">
              {links.map((l) => (
                <li key={l.label}>
                  <Link to={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="ft-col-heading">Legal &amp; More</p>
            <ul className="ft-col-list">
              {legal.map((l) => (
                <li key={l.label}>
                  {l.href.startsWith('http')
                    ? <a href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                    : <Link to={l.href}>{l.label}</Link>
                  }
                </li>
              ))}
            </ul>

            <p className="ft-col-heading" style={{ marginTop: '2rem' }}>Address</p>
            <p style={{ fontSize: '0.78rem', color: 'rgba(245,237,228,0.4)', fontFamily: 'Montserrat, sans-serif', lineHeight: 1.75 }}>
              New Okni Talab,<br />
              Lohsinghna Road,<br />
              Hazaribag — 825301<br />
              Jharkhand, India
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="ft-bar">
          <p>© {new Date().getFullYear()} ISKCON Hazaribag. All Rights Reserved.</p>
          <p>Developed with ❤️ by <a href="https://linkedin.com/in/piyush-aryan">Piyush Aryan</a></p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
