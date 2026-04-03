import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const scrollRef = useRef();

  useEffect(() => {
    // Animate in on mount
    const el = scrollRef.current;
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 1.2s ease 0.3s, transform 1.2s ease 0.3s';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    }
  }, []);

  return (
    <>
      <style>{`
        #title {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: flex-end;
          padding: 0;
          background: none;
          overflow: hidden;
        }

        /* Background image */
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/iskcon-rm.jpg');
          background-size: cover;
          background-position: center 30%;
          z-index: 0;
        }

        /* Gradient overlay — dark at bottom, preserves image at top */
        .hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(16, 8, 0, 0.15) 0%,
            rgba(16, 8, 0, 0.3) 40%,
            rgba(16, 8, 0, 0.85) 75%,
            rgba(16, 8, 0, 0.97) 100%
          );
        }

        /* Content */
        .hero-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem 5rem;
        }

        /* Eyebrow */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #e07b39;
          margin-bottom: 1.25rem;
        }
        .hero-eyebrow-line {
          display: inline-block;
          width: 28px;
          height: 1.5px;
          background: #e07b39;
        }

        /* Main heading */
        .hero-title {
          font-family: 'Moon Dance', cursive;
          font-size: clamp(3rem, 9vw, 6.5rem);
          font-weight: 700;
          color: #f5ede4;
          line-height: 1.0;
          margin: 0 0 1rem;
          letter-spacing: -0.01em;
          cursor: default;
          transition: transform 0.4s ease;
        }
        .hero-title:hover {
          transform: translateY(-4px);
          background: linear-gradient(135deg, #f5ede4 10%, #e07b39 50%, #feb47b 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0 0 24px rgba(224, 123, 57, 0.35));
        }

        /* Subtitle */
        .hero-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(0.8rem, 1.5vw, 0.95rem);
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(245, 237, 228, 0.45);
          margin: 0 0 3rem;
        }


        /* Scroll indicator */
        .hero-scroll {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          opacity: 0.35;
          transition: opacity 0.2s;
        }
        .hero-scroll:hover { opacity: 0.7; }
        .hero-scroll-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #f5ede4;
          writing-mode: vertical-rl;
        }
        .hero-scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, #f5ede4, transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50%       { opacity: 0.9; transform: scaleY(1.1); }
        }

        /* Stat strip */
        .hero-strip {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1;
          display: flex;
          border-top: 1px solid rgba(245, 237, 228, 0.07);
        }
        .hero-stat {
          flex: 1;
          padding: 1.25rem 2rem;
          border-right: 1px solid rgba(245, 237, 228, 0.07);
          text-align: center;
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat-num {
          display: block;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: #e07b39;
          line-height: 1;
          margin-bottom: 0.25rem;
        }
        .hero-stat-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(245, 237, 228, 0.3);
        }
        @media (max-width: 600px) {
          .hero-strip { display: none; }
          .hero-content { padding-bottom: 3rem; }
          .hero-scroll { display: none; }
        }
      `}</style>

      <section id="title">
        <div className="hero-bg" />

        <div className="hero-content" ref={scrollRef}>
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            Welcome to
          </p>
          <h1 className="hero-title">Sri Sri Radha Madhava</h1>
          <p className="hero-subtitle">Temple · ISKCON Hazaribag · Jharkhand, India</p>


        </div>

        {/* Scroll hint */}
        <div className="hero-scroll" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="hero-scroll-text">Scroll</span>
          <div className="hero-scroll-line" />
        </div>

        {/* Stat strip */}
        <div className="hero-strip">
          <div className="hero-stat">
            <span className="hero-stat-num">Est 2010</span>
            <span className="hero-stat-label">Founded</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">80G</span>
            <span className="hero-stat-label">Tax Exempt</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">365</span>
            <span className="hero-stat-label">Days of Seva</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">∞</span>
            <span className="hero-stat-label">Blessings</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
