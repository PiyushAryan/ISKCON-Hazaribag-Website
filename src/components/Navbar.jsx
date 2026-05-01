import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const donationItems = [
  'Anna Daan',
  'Sadhu Bhojan',
  'Kitchen Seva',
  'Gau Seva',
  'Deity Seva',
  'Ekadashi Seva',
  'Gita Seva',
  'Gupta Daan',
  'Special Daan',
];

const navItems = [
  { label: 'Home', id: 'title' },
  { 
    label: 'Temple', 
    id: 'mission',
    dropdownItems: [
      { label: 'Deities', href: '#' },
      { label: 'Gallery', href: '/gallery' }
    ]
  },
  {
    label: 'E-Books',
    href: '#',
    dropdownItems: [
      { label: 'Bhagavad Gita', href: 'https://vedabase.io/en/library/bg/' },
      { label: 'Library', href: 'https://vedabase.io/en/library/' }
    ]
  },
  { label: 'Store', href: '#' },
  { label: 'Yatras', href: '/yatras' },
  { label: 'About', href: '/founder-acharya' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredNavItems = navItems.filter(item => !(item.label === 'Home' && location.pathname === '/'));

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (event, sectionId) => {
    event.preventDefault();
    setMenuOpen(false);
    setDonateOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .nb {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 100%;
          z-index: 1100;
          background: #582739;
          color: #fff7c2;
          border-radius: 0;
          border: 0;
          box-shadow: 0 8px 30px rgba(20, 5, 10, 0.22);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nb.scrolled {
          top: 15px;
          width: 94%;
          max-width: 1180px;
          border-radius: 100px;
          background: rgba(88, 39, 57, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 247, 194, 0.1);
        }
        .nb-inner {
          max-width: 1180px;
          margin: 0 auto;
          height: 58px;
          padding: 0 1.35rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }
        .nb-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: #fff7c2;
          text-decoration: none;
          min-width: 0;
        }
        .nb-logo-img {
          width: 45px;
          height: 36px;
          object-fit: contain;
          filter: invert(1) sepia(1) saturate(0.7) hue-rotate(345deg) brightness(1.4);
        }
        .nb-logo-h {
          display: block;
          font-size: 0.86rem;
          line-height: 1;
          font-weight: 800;
          text-transform: uppercase;
          white-space: nowrap;
          color: #fff7c2;
        }
        .nb-logo-s {
          display: block;
          margin-top: 0.18rem;
          color: rgba(255, 247, 194, 0.82);
          font-size: 0.55rem;
          line-height: 1;
          font-weight: 600;
          white-space: nowrap;
        }
        .nb-links {
          display: flex;
          align-items: stretch;
          margin: 0;
          padding: 0;
          list-style: none;
          height: 100%;
        }
        .nb-link {
          display: inline-flex;
          align-items: center;
          height: 100%;
          padding: 0 0.8rem;
          border: 0;
          background: transparent;
          color: #fff7c2;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.78rem;
          font-weight: 800;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .nb-link:hover {
          color: #fff;
          background: rgba(246, 212, 123, 0.1);
        }
        .nb-donate-wrap {
          display: flex;
          align-items: center;
          height: 100%;
          padding-left: 0.5rem;
          position: relative;
        }
        .nb-donate-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.55rem 1.4rem;
          background: linear-gradient(135deg, rgba(246, 212, 123, 0.15) 0%, rgba(246, 212, 123, 0.05) 100%);
          color: #f6d47b;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-decoration: none;
          border: 1px solid rgba(246, 212, 123, 0.4);
          border-radius: 100px;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nb-donate-btn:hover {
          background: #f6d47b;
          color: #4d2030;
          box-shadow: 0 6px 20px rgba(246, 212, 123, 0.3);
          transform: translateY(-1px);
        }
        .nb-dd-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 172px;
          background: #582739;
          border: 1px solid rgba(246, 212, 123, 0.42);
          box-shadow: 0 18px 46px rgba(0, 0, 0, 0.28);
        }
        .nb-dd-item {
          display: block;
          padding: 0.48rem 0.7rem;
          color: #fff7c2;
          font-size: 0.72rem;
          font-weight: 700;
          text-decoration: none;
          border-bottom: 1px solid rgba(246, 212, 123, 0.18);
        }
        .nb-dd-item:hover {
          background: rgba(246, 212, 123, 0.14);
          color: #fff;
        }
        .nb-ham {
          display: none;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(255, 247, 194, 0.28);
          border-radius: 4px;
          background: transparent;
          color: #fff7c2;
          font-size: 1.35rem;
          line-height: 1;
          margin: 0;
        }
        .nb-mobile-panel {
          position: fixed;
          inset: 58px 0 0;
          z-index: 1090;
          background: rgba(38, 9, 18, 0.55);
          backdrop-filter: blur(8px);
        }
        .nb-mobile-menu {
          margin-left: auto;
          width: min(340px, 86vw);
          min-height: 100%;
          background: #582739;
          padding: 1rem;
          box-shadow: -20px 0 40px rgba(0, 0, 0, 0.24);
        }
        .nb-mobile-link {
          display: block;
          color: #fff7c2;
          text-decoration: none;
          font-weight: 800;
          padding: 0.95rem 0.7rem;
          border-bottom: 1px solid rgba(246, 212, 123, 0.18);
        }
        .nb-mobile-heading {
          margin: 1rem 0 0.35rem;
          color: rgba(255, 247, 194, 0.64);
          font-size: 0.67rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 800;
        }
        @media (max-width: 820px) {
          .nb-inner { padding: 0 0.9rem; }
          .nb-logo-s { display: none; }
          .nb-links { display: none; }
          .nb-ham { display: inline-flex; align-items: center; justify-content: center; }
        }
      `}</style>

      <nav className={`nb ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nb-inner">
          <Link className="nb-brand" to="/">
            <img className="nb-logo-img" src="/images/iskcon_logo.svg" alt="ISKCON" />
            <span>
              <span className="nb-logo-h">ISKCON Hazaribag</span>
              <span className="nb-logo-s">International Society for Krishna Consciousness</span>
            </span>
          </Link>

          <ul className="nb-links">
            {filteredNavItems.map((item) => (
              <li 
                key={item.label} 
                className={item.dropdownItems ? "nb-donate-wrap" : ""}
                style={item.dropdownItems ? { paddingLeft: 0 } : {}}
                onMouseEnter={() => item.dropdownItems && setActiveDropdown(item.label)}
                onMouseLeave={() => item.dropdownItems && setActiveDropdown(null)}
              >
                {item.id ? (
                  <a className="nb-link" href={`#${item.id}`} onClick={(event) => handleNav(event, item.id)}>
                    {item.label} {item.dropdownItems && <span style={{fontSize: '0.6rem', marginLeft: '0.3rem'}}>▼</span>}
                  </a>
                ) : (
                  <Link className="nb-link" to={item.href} onClick={() => { setDonateOpen(false); setActiveDropdown(null); }}>
                    {item.label} {item.dropdownItems && <span style={{fontSize: '0.6rem', marginLeft: '0.3rem'}}>▼</span>}
                  </Link>
                )}
                
                {item.dropdownItems && activeDropdown === item.label && (
                  <div className="nb-dd-menu">
                    {item.dropdownItems.map(ddItem => (
                      ddItem.href.startsWith('http') ? (
                        <a key={ddItem.label} className="nb-dd-item" href={ddItem.href} target="_blank" rel="noreferrer" onClick={() => setActiveDropdown(null)}>{ddItem.label}</a>
                      ) : (
                        <Link key={ddItem.label} className="nb-dd-item" to={ddItem.href} onClick={() => setActiveDropdown(null)}>{ddItem.label}</Link>
                      )
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li
              className="nb-donate-wrap"
              onMouseEnter={() => setDonateOpen(true)}
              onMouseLeave={() => setDonateOpen(false)}
            >
              <Link className="nb-donate-btn" to="/checkout" onClick={() => setDonateOpen(false)}>Donate</Link>
              {donateOpen && (
                <div className="nb-dd-menu">
                  {donationItems.map((item) => (
                    <Link key={item} className="nb-dd-item" to="/checkout" onClick={() => setDonateOpen(false)}>{item}</Link>
                  ))}
                </div>
              )}
            </li>
          </ul>

          <button className="nb-ham" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">
            {menuOpen ? 'x' : '='}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="nb-mobile-panel" onClick={() => setMenuOpen(false)}>
          <div className="nb-mobile-menu" onClick={(event) => event.stopPropagation()}>
            {filteredNavItems.map((item) => (
              <React.Fragment key={item.label}>
                {item.id ? (
                  <a className="nb-mobile-link" href={`#${item.id}`} onClick={(event) => handleNav(event, item.id)}>
                    {item.label}
                  </a>
                ) : (
                  <Link className="nb-mobile-link" to={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>
                )}
                {item.dropdownItems && (
                  <div style={{ marginLeft: '1rem', borderLeft: '1px solid rgba(246, 212, 123, 0.18)', paddingLeft: '0.5rem', marginBottom: '0.5rem' }}>
                    {item.dropdownItems.map(ddItem => (
                      ddItem.href.startsWith('http') ? (
                        <a key={ddItem.label} className="nb-mobile-link" style={{ borderBottom: 'none', padding: '0.6rem 0.7rem', color: 'rgba(255, 247, 194, 0.8)' }} href={ddItem.href} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
                          {ddItem.label}
                        </a>
                      ) : (
                        <Link key={ddItem.label} className="nb-mobile-link" style={{ borderBottom: 'none', padding: '0.6rem 0.7rem', color: 'rgba(255, 247, 194, 0.8)' }} to={ddItem.href} onClick={() => setMenuOpen(false)}>
                          {ddItem.label}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <Link className="nb-mobile-link" to="/checkout" onClick={() => setMenuOpen(false)}>Donate</Link>
            <p className="nb-mobile-heading">Donation Seva</p>
            {donationItems.map((item) => (
              <Link key={item} className="nb-mobile-link" to="/checkout" onClick={() => setMenuOpen(false)}>{item}</Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
