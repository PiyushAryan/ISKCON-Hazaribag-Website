import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const weeklyPrograms = [
  {
    name: 'Sunday Youth Program',
    day: 'Every Sunday · 5:00 PM',
    desc: 'A grand evening of kirtan, scriptural discourse and a sumptuous vegetarian prasadam feast. Open to all.',
    image: '/images/srichaitanya001901.jpg',
  },
  {
    name: 'Estri Village Program',
    day: 'Weekday Evenings',
    desc: "Small group spiritual gatherings hosted in devotees' homes across Hazaribag for study, kirtan and association.",
    image: '/images/rath_yatra.png',
  },
];

const RegularPrograms = () => {
  useEffect(() => {
    document.title = 'Regular Programs — ISKCON Hazaribag';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#faf9f7' }}>
      <Navbar />

      <style>{`
        .rp-wrap {
          flex: 1;
          padding-top: 80px;
          padding-bottom: 40px;
        }

        /* ── Hero ── */
        .rp-hero {
          background: #582739;
          color: #fff7c2;
          padding: 4rem 1.5rem 4.5rem;
          text-align: center;
        }
        .rp-hero-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #f6d47b;
          margin-bottom: 0.85rem;
          display: block;
        }
        .rp-hero-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #fff7c2;
          margin: 0 0 1rem;
          line-height: 1.15;
        }
        .rp-hero-copy {
          margin: 0 auto;
          max-width: 620px;
          color: rgba(255, 247, 194, 0.85);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        /* ── Section shells ── */
        .rp-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 4rem 2rem 1rem;
        }
        .rp-section-head {
          margin-bottom: 2.5rem;
        }
        .rp-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #d4a017;
          margin-bottom: 0.6rem;
          display: block;
        }
        .rp-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: clamp(1.8rem, 3.4vw, 2.6rem);
          color: #582739;
          margin: 0;
          line-height: 1.15;
        }

        /* ── Daily schedule ── */
        .rp-schedule {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          background: #fff;
          border: 1px solid #ece6dc;
          border-radius: 10px;
          padding: 1rem 1.25rem;
        }
        .rp-row {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 1.5rem;
          align-items: baseline;
          padding: 1rem 0.25rem;
          border-bottom: 1px dashed #eadfd0;
        }
        .rp-row:last-child { border-bottom: none; }
        .rp-time {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 800;
          color: #d4a017;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .rp-event-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.02rem;
          font-weight: 800;
          color: #1a1a1a;
          margin: 0 0 0.3rem;
        }
        .rp-event-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          color: #555;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Weekly grid ── */
        .rp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .rp-card {
          background: #fff;
          border: 1px solid #ece6dc;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .rp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(88, 39, 57, 0.08);
        }
        .rp-card-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }
        .rp-card-body {
          padding: 1.25rem 1.4rem 1.6rem;
        }
        .rp-card-day {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #d4a017;
          margin: 0 0 0.45rem;
        }
        .rp-card-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          color: #1a1a1a;
          margin: 0 0 0.5rem;
        }
        .rp-card-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.88rem;
          color: #555;
          line-height: 1.65;
          margin: 0;
        }

        /* ── CTA ── */
        .rp-cta {
          max-width: 1100px;
          margin: 3rem auto 4rem;
          padding: 2.5rem 2rem;
          background: linear-gradient(135deg, #582739 0%, #4a1e30 100%);
          border-radius: 12px;
          text-align: center;
          color: #fff7c2;
          margin-left: 2rem;
          margin-right: 2rem;
        }
        .rp-cta-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.3rem, 2.5vw, 1.7rem);
          font-weight: 800;
          color: #fff7c2;
          margin: 0 0 0.6rem;
        }
        .rp-cta-copy {
          font-size: 0.9rem;
          color: rgba(255, 247, 194, 0.85);
          margin: 0 0 1.5rem;
          line-height: 1.6;
        }
        .rp-cta-btn {
          display: inline-flex;
          align-items: center;
          padding: 0.85rem 1.6rem;
          background: #f6d47b;
          color: #4d2030;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 6px;
          transition: background 0.2s, transform 0.2s;
        }
        .rp-cta-btn:hover {
          background: #ffe495;
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .rp-section { padding: 3rem 1.25rem 1rem; }
          .rp-row { grid-template-columns: 100px 1fr; gap: 1rem; }
          .rp-grid { grid-template-columns: 1fr; }
          .rp-card-img { height: 180px; }
          .rp-cta { margin-left: 1.25rem; margin-right: 1.25rem; padding: 2rem 1.25rem; }
        }
      `}</style>

      <div className="rp-wrap">
        <section className="rp-hero">
          <span className="rp-hero-eyebrow">Daily at the Temple</span>
          <h1 className="rp-hero-title">Regular Programs</h1>
          <p className="rp-hero-copy">
            From the pre-dawn Mangal Aarti to the closing Shayana Aarti, ISKCON Hazaribag follows a sacred daily rhythm
            of worship, study and kirtan. All are warmly welcome to participate.
          </p>
        </section>

        <section className="rp-section">
          <div className="rp-section-head">
            <span className="rp-eyebrow">Through the Week</span>
            <h2 className="rp-title">Weekly Programs</h2>
          </div>

          <div className="rp-grid">
            {weeklyPrograms.map((program) => (
              <article className="rp-card" key={program.name}>
                <img className="rp-card-img" src={program.image} alt={program.name} loading="lazy" />
                <div className="rp-card-body">
                  <p className="rp-card-day">{program.day}</p>
                  <h3 className="rp-card-name">{program.name}</h3>
                  <p className="rp-card-desc">{program.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rp-cta">
          <h3 className="rp-cta-title">Visit the Temple</h3>
          <p className="rp-cta-copy">
            Plan your visit and immerse yourself in the timeless practices of Krishna consciousness.
          </p>
          <a className="rp-cta-btn" href="/contact">Get Directions →</a>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default RegularPrograms;
