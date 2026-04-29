import React from 'react';
import { Link } from 'react-router-dom';

const festivals = [
  {
    name: 'Grand Ratha Yatra',
    date: '16 July 2026',
    tag: 'Upcoming',
    image: '/images/rath_yatra.png',
  },
  {
    name: 'Shri Ramnavami Celebration',
    date: '27 March 2026',
    image: '/images/srichaitanya001901.jpg',
  },
  {
    name: 'Shri Gaur Purnima Celebration',
    date: '02 March 2026',
    image: '/images/radhashtami.png',
  },
];

const Festivals = () => {
  return (
    <>
      <style>{`
        #festivals {
          background: #5a2a39;
          color: #fff7c2;
          padding: 3.5rem 1.4rem 5rem;
          text-align: center;
        }
        .f-container {
          max-width: 980px;
          margin: 0 auto;
        }
        .section-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.55rem, 3vw, 2.25rem);
          font-weight: 900;
          line-height: 1;
          color: #fff7c2;
          margin: 0 0 0.65rem;
          text-transform: uppercase;
        }
        .section-copy {
          margin: 0 auto;
          max-width: 620px;
          color: rgba(255, 247, 194, 0.84);
          font-size: 0.9rem;
          line-height: 1.7;
        }
        .f-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.5rem;
          margin: 3.1rem auto 2.7rem;
          max-width: 720px;
        }
        .f-card {
          display: block;
          text-align: left;
          text-decoration: none;
          color: #fff7c2;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 247, 194, 0.12);
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .f-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.12);
          color: #fff7c2;
        }
        .f-img {
          width: 100%;
          aspect-ratio: 1.18;
          object-fit: cover;
          display: block;
        }
        .f-content {
          padding: 0.85rem 0.85rem 0.9rem;
        }
        .f-name {
          color: #fff7c2;
          font-size: 0.92rem;
          font-weight: 800;
          line-height: 1.25;
          margin: 0 0 0.35rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .f-date-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.45rem;
        }
        .f-date {
          color: rgba(255, 247, 194, 0.75);
          font-size: 0.67rem;
          font-weight: 700;
        }
        .f-tag {
          background: #d7df77;
          color: #4b1f2e;
          border-radius: 999px;
          padding: 0.16rem 0.42rem;
          font-size: 0.55rem;
          font-weight: 900;
          text-transform: uppercase;
        }
        .pdf-center-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0.75rem 1.35rem;
          background: #f6d47b;
          border: 1px solid #f6d47b;
          border-radius: 7px;
          color: #4d2030;
          font-size: 0.82rem;
          font-weight: 800;
          text-transform: uppercase;
          text-decoration: none;
        }
        .pdf-center-btn:hover {
          background: #ffe495;
          color: #4d2030;
        }
        @media (max-width: 760px) {
          #festivals { padding-top: 3rem; }
          .f-grid {
            grid-template-columns: 1fr;
            max-width: 360px;
            margin-top: 2rem;
          }
          .f-name { white-space: normal; }
        }
      `}</style>

      <section id="festivals">
        <div className="f-container">
          <h2 className="section-title">Events &amp; Festivals</h2>
          <p className="section-copy">
            Stay connected with upcoming festivals and relive the past celebrations.
          </p>

          <div className="f-grid">
            {festivals.map((festival) => (
              <Link to="/checkout" className="f-card" key={festival.name}>
                <img
                  className="f-img"
                  src={festival.image}
                  alt={festival.name}
                  loading="lazy"
                />
                <div className="f-content">
                  <h3 className="f-name">{festival.name}</h3>
                  <div className="f-date-row">
                    <span className="f-date">{festival.date}</span>
                    {festival.tag && <span className="f-tag">{festival.tag}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link className="pdf-center-btn" to="/checkout">Explore Events</Link>
        </div>
      </section>
    </>
  );
};

export default Festivals;
