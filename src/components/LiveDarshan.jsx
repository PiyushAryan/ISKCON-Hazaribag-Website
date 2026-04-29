import React from 'react';

const programs = [
  {
    title: 'Koderma Regular Program',
    attendees: '50+ Attendees',
    image: '/images/carousel1.jpeg',
  },
  {
    title: 'Estri Regular Program',
    attendees: '40+ Attendees',
    desc: 'At Isri, local devotees gather daily for Srimad Bhagavatam discussions and kirtan. On special occasions, devotees from major ISKCON centers visit to conduct vibrant programs.',
    image: '/images/Interfaith-Walk-Members-Tour-Temple-97634e44121a6fd.jpeg',
    wide: true,
  },
  {
    title: 'Bagodar Regular Program',
    attendees: '40+ Attendees',
    image: '/images/iskcon-delhi-official-monk-f.png',
  },
];

const LiveDarshan = () => {
  return (
    <>
      <style>{`
        #navigate {
          background: #4a2b3a;
          color: #fff7c2;
          padding: 4rem 1.4rem 5rem;
          border-top: 1px solid rgba(255, 247, 194, 0.28);
          text-align: center;
        }
        .rp-inner {
          max-width: 980px;
          margin: 0 auto;
        }
        .rp-grid {
          display: grid;
          grid-template-columns: 1fr 1.28fr 1fr;
          gap: 1rem;
          align-items: center;
          margin: 3rem auto 2.7rem;
          max-width: 720px;
        }
        .rp-card {
          min-height: 172px;
          border-radius: 10px;
          position: relative;
          overflow: hidden;
          text-align: left;
          background: #2a111b;
          box-shadow: 0 18px 42px rgba(20, 5, 10, 0.24);
        }
        .rp-card.wide { min-height: 210px; }
        .rp-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.82;
          transition: transform 0.45s ease;
        }
        .rp-card:hover img { transform: scale(1.05); }
        .rp-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(34, 12, 22, 0.1), rgba(34, 12, 22, 0.86));
        }
        .rp-content {
          position: absolute;
          left: 0.85rem;
          right: 0.85rem;
          bottom: 0.85rem;
          z-index: 1;
        }
        .rp-title {
          color: #fff7c2;
          font-size: 0.88rem;
          font-weight: 800;
          line-height: 1.25;
          margin: 0 0 0.2rem;
        }
        .rp-attendees {
          color: rgba(255, 247, 194, 0.78);
          font-size: 0.63rem;
          font-weight: 800;
          margin: 0;
        }
        .rp-desc {
          margin: 0.65rem 0 0;
          color: rgba(255, 247, 194, 0.78);
          font-size: 0.65rem;
          line-height: 1.55;
        }
        @media (max-width: 760px) {
          .rp-grid {
            grid-template-columns: 1fr;
            max-width: 360px;
            margin-top: 2rem;
          }
          .rp-card,
          .rp-card.wide {
            min-height: 230px;
          }
        }
      `}</style>

      <section id="navigate">
        <div className="rp-inner">
          <h2 className="section-title">Regular Programs</h2>
          <p className="section-copy">
            Experience the joy of devotion through our regular programs conducted at different places.
          </p>

          <div className="rp-grid">
            {programs.map((program) => (
              <article className={`rp-card${program.wide ? ' wide' : ''}`} key={program.title}>
                <img src={program.image} alt={program.title} loading="lazy" />
                <div className="rp-content">
                  <h3 className="rp-title">{program.title}</h3>
                  <p className="rp-attendees">{program.attendees}</p>
                  {program.desc && <p className="rp-desc">{program.desc}</p>}
                </div>
              </article>
            ))}
          </div>

          <a className="pdf-center-btn" href="#footer">All Regular Programs</a>
        </div>
      </section>
    </>
  );
};

export default LiveDarshan;
