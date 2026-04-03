import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="#home">
        <img
          className="img-logo"
          src="https://www.iskconmumbai.com/bi_theme_snippets/static/src/img/logo-black-header.png"
          alt="ISKCON Logo"
          width="110"
          height="102"
        />
        <div className="logo" style={{ display: 'inline-block', marginLeft: '10px' }}>
          <h3 className="logo-h">ISKCON Hazaribag</h3>
          <p className="logo-s">International Society for Krishna Consciousness</p>
        </div>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#footer">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#donation">Donation</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#navigate">Live Darshan</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#features">Chronicle</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Media
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">News</a></li>
              <li><a className="dropdown-item" href="#">Gallery</a></li>
              <li><a className="dropdown-item" href="#">Videos</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
