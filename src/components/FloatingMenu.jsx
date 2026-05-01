import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        .fm-wrapper {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1rem;
        }

        .fm-options {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.8rem;
          pointer-events: none;
        }

        .fm-options.open {
          pointer-events: auto;
        }

        .fm-option {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          opacity: 0;
          transform: translateY(15px) scale(0.9);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
        }

        .fm-options.open .fm-option {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .fm-options.open .fm-option:nth-child(1) { transition-delay: 0.05s; }
        .fm-options.open .fm-option:nth-child(2) { transition-delay: 0.1s; }

        .fm-label {
          background: rgba(88, 39, 57, 0.9);
          backdrop-filter: blur(8px);
          color: #fff7c2;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          white-space: nowrap;
          border: 1px solid rgba(246, 212, 123, 0.2);
        }

        .fm-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background: #f6d47b;
          color: #582739;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fm-option:hover .fm-btn {
          transform: scale(1.08);
          box-shadow: 0 8px 25px rgba(246, 212, 123, 0.4);
        }

        .fm-toggle {
          width: 110px;
          height: auto;
          border: none;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 0;
          filter: drop-shadow(0 10px 15px rgba(88, 39, 57, 0.4));
        }

        .fm-toggle img {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
        }

        .fm-toggle.open {
          transform: scale(1.3);
          filter: drop-shadow(0 12px 20px rgba(246, 212, 123, 0.5));
        }

        @media (max-width: 620px) {
          .fm-wrapper {
            bottom: 1.5rem;
            right: 1.5rem;
          }
          .fm-toggle {
            width: 75px;
            height: auto;
          }
          .fm-toggle.open {
            transform: scale(1.15);
          }
        }
      `}</style>

      <div className="fm-wrapper" onMouseLeave={() => setIsOpen(false)}>
        <div className={`fm-options ${isOpen ? 'open' : ''}`}>
          <Link to="/contact" className="fm-option" onClick={() => setIsOpen(false)}>
            <span className="fm-label">Location</span>
            <div className="fm-btn">📍</div>
          </Link>
          <Link to="/life-membership" className="fm-option" onClick={() => setIsOpen(false)}>
            <span className="fm-label">Life Membership Patron</span>
            <div className="fm-btn">🪷</div>
          </Link>
        </div>

        <button 
          className={`fm-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsOpen(true)}
          aria-label="Quick Actions"
        >
          <img 
            src={isOpen ? "/images/iskcon-delhi-temple-help.png" : "/images/iskcon-delhi-official-monk-f.png"} 
            alt={isOpen ? "Help" : "Monk"} 
          />
        </button>
      </div>
    </>
  );
};

export default FloatingMenu;
