import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setAboutOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        /* ── Navbar Shell ── */
        .nb {
          position: fixed;
          top: 14px;
          left: 3%;
          width: 94%;
          z-index: 1100;
          background: #ffffff;
          box-shadow: 0 8px 32px rgba(0,0,0,0.09);
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 100px;
          padding: 0.55rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ── Brand ── */
        .nb-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          cursor: pointer;
        }
        .nb-logo-img {
          width: 48px;
          height: auto;
          flex-shrink: 0;
        }
        .nb-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }
        .nb-logo-h {
          font-family: 'Montserrat', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #111;
          margin: 0;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }
        .nb-logo-s {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 400;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0;
          margin-top: 2px;
        }

        /* ── Desktop nav links ── */
        .nb-links {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nb-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #555;
          padding: 0.4rem 0.6rem;
          margin: 0 0.15rem;
          border-radius: 100px;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
          display: block;
        }
        .nb-link:hover { background: rgba(0,0,0,0.04); color: #111; }

        /* dropdown */
        .nb-dd-wrap { position: relative; }
        .nb-dd-menu {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 12px;
          padding: 0.4rem 0;
          min-width: 180px;
          box-shadow: 0 12px 32px rgba(0,0,0,0.12);
          animation: nbDdIn 0.2s cubic-bezier(0.16,1,0.3,1);
        }
        @keyframes nbDdIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nb-dd-item {
          display: block;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 500;
          padding: 0.6rem 1.5rem;
          color: #555;
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
        }
        .nb-dd-item:hover { background: rgba(0,0,0,0.03); color: #111; }

        /* ── Hamburger button ── */
        .nb-ham {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 44px;
          height: 44px;
          background: rgba(0,0,0,0.04);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          padding: 0;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .nb-ham:active { background: rgba(0,0,0,0.08); }
        .nb-ham-line {
          display: block;
          width: 20px;
          height: 2px;
          background: #333;
          border-radius: 2px;
          transition: all 0.25s ease;
        }
        .nb-ham.open .nb-ham-line:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nb-ham.open .nb-ham-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nb-ham.open .nb-ham-line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile menu overlay ── */
        .nb-mobile-overlay {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 1200;
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          animation: nbOverlayIn 0.4s ease;
        }
        @keyframes nbOverlayIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .nb-mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 85vw;
          max-width: 320px;
          background: #ffffff;
          z-index: 1205;
          box-shadow: -4px 0 24px rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          animation: nbMenuSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes nbMenuSlide {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0); opacity: 1; }
        }

        /* Mobile menu header row */
        .nb-mobile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem 1.5rem;
          background: #ffffff;
          z-index: 2;
        }

        /* Mobile menu body wrapper to scroll */
        .nb-mobile-body {
          flex: 1;
          overflow-y: auto;
          padding: 0;
          -webkit-overflow-scrolling: touch;
        }

        /* Mobile nav items */
        .nb-mobile-links {
          list-style: none;
          margin: 0;
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
        }
        .nb-mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'Montserrat', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #333;
          text-decoration: none;
          padding: 1rem 2rem;
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
          letter-spacing: 0.2px;
          transition: background 0.3s, color 0.3s;
        }
        .nb-mobile-link:active { 
          background: #fafafa; 
          color: #000; 
        }

        .nb-mobile-sub {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          background: #fafafa;
        }
        .nb-mobile-sub-link {
          display: block;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #666;
          text-decoration: none;
          padding: 0.85rem 2rem 0.85rem 3rem;
          transition: color 0.3s, background 0.3s;
        }
        .nb-mobile-sub-link:active { 
          background: #f0f0f0; 
          color: #000; 
        }

        .nb-mobile-about-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .nb-mobile-chevron {
          font-size: 12px;
          color: #aaa;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nb-mobile-chevron.open { transform: rotate(180deg); }

        /* Mobile footer */
        .nb-mobile-footer {
          padding: 1.5rem 2rem;
          background: #ffffff;
        }
        .nb-mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 0.9rem;
          background: transparent;
          color: #e07b39;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 600;
          border-radius: 6px;
          border: 1px solid #e07b39;
          text-decoration: none;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          transition: background 0.3s, color 0.3s;
        }
        .nb-mobile-cta:active {
          background: #e07b39;
          color: #ffffff;
        }

        /* ── Responsive breakpoint ── */
        @media (max-width: 900px) {
          .nb-links { display: none; }
          .nb-ham   { display: flex; width: 38px; height: 38px; }
          .nb-logo-s { display: none; }
          .nb { padding: 0.45rem 1rem; }
          .nb-logo-img { width: 36px; }
          .nb-logo-h { font-size: 15px; font-weight: 600; letter-spacing: 0.2px; }
        }
        @media (min-width: 901px) {
          .nb-mobile-overlay,
          .nb-mobile-menu { display: none !important; }
        }
        @media (max-width: 900px) {
          .nb-mobile-overlay { display: block; }
          .nb-mobile-menu { display: block; }
        }
      `}</style>

      {/* ── Pill Navbar ── */}
      <nav className="nb">
        <div className="nb-brand" onClick={() => navigate('/')}>
          <img
            className="nb-logo-img"
            src="https://www.iskconmumbai.com/bi_theme_snippets/static/src/img/logo-black-header.png"
            alt="ISKCON Logo"
          />
          <div className="nb-logo-text">
            <span className="nb-logo-h">ISKCON Hazaribag</span>
            <span className="nb-logo-s">International Society for Krishna Consciousness</span>
          </div>
        </div>

        {/* Desktop links */}
        <ul className="nb-links">
          <li><a className="nb-link" href="/" onClick={(e) => handleNav(e, 'features')}>Chronicle</a></li>
          <li><a className="nb-link" href="/" onClick={(e) => handleNav(e, 'yatras')}>Yatras</a></li>
          <li><a className="nb-link" href="/" onClick={(e) => handleNav(e, 'navigate')}>Live Darshan</a></li>
          <li><a className="nb-link" href="/" onClick={(e) => handleNav(e, 'donation')}>Donation</a></li>
          <li><a className="nb-link" href="/" onClick={(e) => handleNav(e, 'footer')}>Contact</a></li>
          <li className="nb-dd-wrap"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="nb-link">About ▾</button>
            {aboutOpen && (
              <div className="nb-dd-menu">
                <a className="nb-dd-item" href="/founder-acharya">Founder-Acharya</a>
                <a className="nb-dd-item" href="#">Gallery</a>
                <a className="nb-dd-item" href="#">Videos</a>
              </div>
            )}
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`nb-ham ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="nb-ham-line" />
          <span className="nb-ham-line" />
          <span className="nb-ham-line" />
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <>
          <div className="nb-mobile-overlay" onClick={() => setMenuOpen(false)} />
          <div className="nb-mobile-menu">
            {/* Header row inside menu */}
            <div className="nb-mobile-header">
              <div className="nb-brand" onClick={() => { navigate('/'); setMenuOpen(false); }}>
                <img
                  className="nb-logo-img"
                  src="https://www.iskconmumbai.com/bi_theme_snippets/static/src/img/logo-black-header.png"
                  alt="ISKCON Logo"
                  style={{ width: 48 }}
                />
                <div className="nb-logo-text">
                  <span className="nb-logo-h" style={{ fontSize: 19 }}>ISKCON Hazaribag</span>
                </div>
              </div>
              <button
                className="nb-ham open"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <span className="nb-ham-line" />
                <span className="nb-ham-line" />
                <span className="nb-ham-line" />
              </button>
            </div>

            <div className="nb-mobile-body">
              <ul className="nb-mobile-links">
                <li>
                  <a className="nb-mobile-link" href="/" onClick={(e) => handleNav(e, 'features')}>Chronicle</a>
                </li>
                <li>
                  <a className="nb-mobile-link" href="/" onClick={(e) => handleNav(e, 'yatras')}>Yatras</a>
                </li>
                <li>
                  <a className="nb-mobile-link" href="/" onClick={(e) => handleNav(e, 'navigate')}>Live Darshan</a>
                </li>
                <li>
                  <a className="nb-mobile-link" href="/" onClick={(e) => handleNav(e, 'donation')}>Donation</a>
                </li>
                <li>
                  <a className="nb-mobile-link" href="/" onClick={(e) => handleNav(e, 'footer')}>Contact</a>
                </li>
                <li>
                  <button
                    className="nb-mobile-link nb-mobile-about-toggle"
                    onClick={() => setAboutOpen(!aboutOpen)}
                  >
                    <span>About</span>
                    <span className={`nb-mobile-chevron ${aboutOpen ? 'open' : ''}`}>▾</span>
                  </button>
                  {aboutOpen && (
                    <ul className="nb-mobile-sub">
                      <li><a className="nb-mobile-sub-link" href="/founder-acharya" onClick={() => setMenuOpen(false)}>Founder-Acharya</a></li>
                      <li><a className="nb-mobile-sub-link" href="#" onClick={() => setMenuOpen(false)}>Gallery</a></li>
                      <li><a className="nb-mobile-sub-link" href="#" onClick={() => setMenuOpen(false)}>Videos</a></li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>

            <div className="nb-mobile-footer">
              <a href="/checkout" className="nb-mobile-cta" onClick={() => setMenuOpen(false)}>
                🙏 Donate Now
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
