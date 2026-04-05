import React from 'react';

const festivals = [
  {
    id: 'janmashtami',
    name: 'Sri Krishna Janmashtami',
    date: 'August / September',
    desc: 'The grand appearance day of Supreme Personality of Godhead, Lord Krishna. Join us for 24-hour kirtan, midnight maha-abhishek, 108 bhoga offering, and a majestic feast.',
    image: '/images/janmashtami.png',
  },
  {
    id: 'rath-yatra',
    name: 'Jagannath Rath Yatra',
    date: 'June / July',
    desc: 'The ecstatic festival of chariots where the Lord of the Universe comes out of the temple to bless everyone on the streets. Accompanied by loud chanting and dancing.',
    image: '/images/rath_yatra.png',
  },
  {
    id: 'radhashtami',
    name: 'Sri Radha Ashtami',
    date: 'September',
    desc: 'The divine appearance day of Srimati Radharani, the eternal consort of Lord Krishna and the queen of Vrindavan. The temple is adorned with fragrant flowers.',
    image: '/images/radhashtami.png',
  }
];

const Festivals = () => {
  return (
    <>
      <style>{`
        #festivals {
          background: #faf9f7;
          padding: 6rem 0;
        }

        .f-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .f-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .f-eyebrow {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #e07b39;
          margin-bottom: 0.75rem;
          display: block;
        }

        .f-title {
          font-family: 'Merienda One', cursive;
          font-size: clamp(2.2rem, 4vw, 3rem);
          font-weight: 400;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.15;
        }

        .f-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 768px) {
          .f-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .f-card {
          position: relative;
          background: #000;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 3/4;
          display: flex;
          align-items: flex-end;
          text-decoration: none;
          group: hover;
        }

        .f-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
          transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.4s ease;
        }

        .f-card:hover .f-img {
          transform: scale(1.06);
          opacity: 0.5;
        }

        .f-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(16,8,0,0.95) 0%, rgba(16,8,0,0.4) 50%, transparent 100%);
          pointer-events: none;
        }

        .f-content {
          position: relative;
          z-index: 2;
          padding: 2.5rem 2rem;
          width: 100%;
          transform: translateY(1rem);
          transition: transform 0.4s ease;
        }

        .f-card:hover .f-content {
          transform: translateY(0);
        }

        .f-date {
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #e07b39;
          margin-bottom: 0.75rem;
          background: rgba(255,255,255,0.1);
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          backdrop-filter: blur(4px);
        }

        .f-name {
          font-family: 'Merienda One', cursive;
          font-size: 1.8rem;
          font-weight: 400;
          color: #fff;
          margin: 0 0 1rem;
          line-height: 1.2;
        }

        .f-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          color: rgba(245,237,228,0.8);
          line-height: 1.6;
          margin: 0 0 1.5rem;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .f-card:hover .f-desc {
          opacity: 1;
          transform: translateY(0);
        }

        .f-btn {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #fff;
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.3);
          padding: 0.6rem 1.2rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s, border-color 0.3s;
        }

        .f-card:hover .f-btn {
          border-color: #e07b39;
          background: #e07b39;
        }

        /* ── Mobile Responsive ── */
        @media (max-width: 768px) {
          #festivals {
            padding: 4rem 1.5rem;
          }
          .f-header {
            margin-bottom: 2.5rem;
          }
          .f-title {
            font-size: 2.2rem;
          }
          .f-container {
            padding: 0;
          }
          .f-grid {
            gap: 1.5rem;
          }
          .f-desc {
            opacity: 1; /* Keep visible on mobile always as hover isn't natural */
            transform: translateY(0);
          }
          .f-card {
            aspect-ratio: auto;
            min-height: 480px; 
          }
          .f-content {
            transform: translateY(0);
          }
        }
      `}</style>

      <section id="festivals">
        <div className="f-container">
          <div className="f-header">
            <span className="f-eyebrow">Celebrations</span>
            <h2 className="f-title">Grand Festivals</h2>
          </div>

          <div className="f-grid">
            {festivals.map((fest) => (
              <a href="/#donation" className="f-card" key={fest.id}>
                <img src={fest.image} alt={fest.name} className="f-img" loading="lazy" />
                <div className="f-content">
                  <span className="f-date">{fest.date}</span>
                  <h3 className="f-name">{fest.name}</h3>
                  <p className="f-desc">{fest.desc}</p>
                  <button className="f-btn" onClick={() => {
                    // Let the parent <a> handle the navigation, or intercept if we want
                    // a modal. For now, it just goes to #donation to sponsor the festival.
                  }}>
                    Sponsor Festival
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Festivals;
