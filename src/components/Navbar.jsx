import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <a className="navbar-brand" href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
        <img
          className="img-logo"
          src="https://www.iskconmumbai.com/bi_theme_snippets/static/src/img/logo-black-header.png"
          alt="ISKCON Logo"
          width="110"
          height="102"
        />
        <div className="logo">
          <h3 className="logo-h">ISKCON Hazaribag</h3>
          <p className="logo-s">International Society for Krishna Consciousness</p>
        </div>
      </a>

      <button
        className="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon custom-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse custom-navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link custom-nav-link" href="/" onClick={(e) => handleNav(e, 'footer')}>Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link custom-nav-link" href="/" onClick={(e) => handleNav(e, 'donation')}>Donation</a>
          </li>
          <li className="nav-item">
            <a className="nav-link custom-nav-link" href="/" onClick={(e) => handleNav(e, 'navigate')}>Live Darshan</a>
          </li>
          <li className="nav-item">
            <a className="nav-link custom-nav-link" href="/" onClick={(e) => handleNav(e, 'yatras')}>Yatras</a>
          </li>
          <li className="nav-item">
            <a className="nav-link custom-nav-link" href="/" onClick={(e) => handleNav(e, 'features')}>Chronicle</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link custom-nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About
            </a>
            <ul className="dropdown-menu dropdown-menu-end custom-dropdown-menu">
              <li><a className="dropdown-item custom-dropdown-item" href="/founder-acharya">Founder-Acharya</a></li>
              <li><a className="dropdown-item custom-dropdown-item" href="#">Gallery</a></li>
              <li><a className="dropdown-item custom-dropdown-item" href="#">Videos</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
