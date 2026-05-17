import React from 'react';
import { Link } from 'react-router-dom';

const mantra = 'Hare Krsna Hare Krsna - Krsna Krsna Hare Hare - Hare Rama Hare Rama - Rama Rama Hare Hare';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Chronicle', href: '/#mission' },
  { label: 'Events', href: '/#festivals' },
  { label: 'Donation', href: '/#donation' },
  { label: 'Contact', href: '/contact' },
];

const legal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Donate via UPI', href: 'https://rzp.io/l/uMSGTo2yj' },
];
const socials = [
  { icon: 'fab fa-instagram', href: 'https://www.instagram.com/iskconhazaribaghofficial', label: 'Instagram' },
  { icon: 'fab fa-facebook', href: 'https://www.facebook.com/iskconhazaribag', label: 'Facebook' },
  { icon: 'fab fa-youtube', href: 'https://www.youtube.com/@ISKCONHAZARIBAGH', label: 'YouTube' },
];

const Footer = () => {
  return (
    <>
      <style>{`
        .ft-ticker {
          background: #f6d47b;
          color: #4d2030;
          overflow: hidden;
          white-space: nowrap;
          padding: 0.62rem 0;
        }
        .ft-ticker-track {
          display: inline-flex;
          animation: ticker 30s linear infinite;
        }
        .ft-ticker-item {
          padding: 0 2.5rem;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.05rem;
          font-style: italic;
          font-weight: 500;
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        #footer {
          background: #222b33;
          color: rgba(255, 255, 255, 0.76);
          padding: 2.7rem 1.4rem 2rem;
        }
        .ft-inner {
          max-width: 980px;
          margin: 0 auto;
        }
        .ft-top {
          display: grid;
          grid-template-columns: 1.45fr 0.8fr 0.9fr 1.1fr;
          gap: 2rem;
          align-items: start;
        }
        .ft-brand {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }
        .ft-logo {
          width: 52px;
          filter: invert(1) brightness(2);
          opacity: 0.9;
          flex: 0 0 auto;
        }
        .ft-name {
          color: #fff;
          font-size: 0.78rem;
          font-weight: 900;
          text-transform: uppercase;
          margin: 0 0 0.15rem;
        }
        .ft-small {
          color: rgba(255, 255, 255, 0.58);
          font-size: 0.64rem;
          line-height: 1.6;
          margin: 0;
        }
        .ft-desc {
          margin: 0.85rem 0 0;
          color: rgba(255, 255, 255, 0.58);
          font-size: 0.7rem;
          line-height: 1.7;
        }
        .ft-heading {
          color: #fff;
          font-size: 0.66rem;
          font-weight: 900;
          letter-spacing: 0.16em;
          margin: 0 0 0.9rem;
          text-transform: uppercase;
        }
        .ft-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 0.5rem;
        }
        .ft-list a,
        .ft-bottom a {
          color: rgba(255, 255, 255, 0.66);
          text-decoration: none;
          font-size: 0.68rem;
        }
        .ft-list a:hover,
        .ft-bottom a:hover {
          color: #f6d47b;
        }
        .ft-socials {
          display: flex;
          gap: 0.55rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }
        .ft-social-link {
          width: 32px;
          height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(246, 212, 123, 0.28);
          border-radius: 50%;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.78rem;
        }
        .ft-social-link:hover {
          color: #f6d47b;
          border-color: #f6d47b;
        }
        .ft-donate {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 1rem;
          min-height: 36px;
          padding: 0.6rem 0.9rem;
          background: #f6d47b;
          border-radius: 5px;
          color: #4d2030;
          font-size: 0.68rem;
          font-weight: 900;
          text-decoration: none;
          text-transform: uppercase;
        }
        .ft-bottom {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.18);
          color: rgba(255, 255, 255, 0.56);
          font-size: 0.62rem;
        }
        .ft-bottom p {
          margin: 0;
        }
        @media (max-width: 900px) {
          .ft-top {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 620px) {
          .ft-top {
            grid-template-columns: 1fr;
          }
          .ft-bottom {
            text-align: left;
          }
        }
      `}</style>

      <div className="ft-ticker">
        <div className="ft-ticker-track">
          {[...Array(6)].map((_, index) => (
            <span className="ft-ticker-item" key={index}>{mantra}</span>
          ))}
        </div>
      </div>

      <footer id="footer">
        <div className="ft-inner">
          <div className="ft-top">
            <div>
              <div className="ft-brand">
                <img className="ft-logo" src="/images/iskcon_logo.svg" alt="ISKCON" />
                <div>
                  <p className="ft-name">ISKCON Hazaribag</p>
                  <p className="ft-small">International Society for Krishna Consciousness</p>
                </div>
              </div>
              <p className="ft-desc">
                Spreading the teachings of Bhagavad Gita and the glory of Sri Sri Radha Madhava throughout Jharkhand and beyond.
              </p>
              <div className="ft-socials">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="ft-social-link" aria-label={social.label}>
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="ft-heading">Navigate</p>
              <ul className="ft-list">
                {links.map((link) => (
                  <li key={link.label}><Link to={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <p className="ft-heading">Legal &amp; More</p>
              <ul className="ft-list">
                {legal.map((item) => (
                  <li key={item.label}>
                    {item.href.startsWith('http')
                      ? <a href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
                      : <Link to={item.href}>{item.label}</Link>}
                  </li>
                ))}
              </ul>
              <Link to="/checkout" className="ft-donate">Donate Now</Link>
            </div>

            <div>
              <p className="ft-heading">Address</p>
              <p className="ft-small">
                Vanshidhar Colony,<br />
                PTC Chowk,<br />
                Hazaribagh, Jharkhand - 825301
              </p>
            </div>
          </div>

          <div className="ft-bottom">
            <p>© {new Date().getFullYear()} ISKCON Hazaribag. All Rights Reserved.</p>
            <p>Developed with love by <a href="https://linkedin.com/in/piyush-aryan" target="_blank" rel="noreferrer">Piyush Aryan</a></p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
