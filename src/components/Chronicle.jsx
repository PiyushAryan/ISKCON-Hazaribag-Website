import React from 'react';

const cards = [
  {
    image: 'images/bhagavad-gita.jpg',
    tag: 'Scripture',
    title: 'Teachings from Gītā',
    desc: 'Discover the timeless wisdom of Bhagavad Gita — the essence of Vedic knowledge spoken by Lord Krishna to Arjuna on the battlefield of Kurukshetra.',
  },
  {
    image: 'images/How-Hare-Krishna-Movement-Spread-to-Worldwide.jpeg',
    tag: 'Legacy',
    title: 'Glory of Srila Prabhupada',
    desc: 'The dear most friend and ever well-wisher of one and all, who travelled the world to give the transcendental bliss of Krishna consciousness.',
  },
  {
    image: 'images/gau.jpg',
    tag: 'Seva',
    title: 'Gau Seva',
    desc: 'Cow protection is one of the most sacred activities in Vedic culture. Participate in our Gau Seva and be part of this profound tradition.',
  },
];

const Chronicle = () => {
  return (
    <>
      <style>{`
        #features {
          background: #faf9f7;
          padding: 6rem 2rem;
        }

        .cr-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .cr-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 4rem;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .cr-eyebrow {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #e07b39;
          margin-bottom: 0.6rem;
        }
        .cr-title {
          font-family: 'Merienda One', cursive;
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 400;
          color: #1a1a1a;
          line-height: 1.15;
          margin: 0;
        }
        .cr-desc {
          font-size: 0.88rem;
          color: #999;
          max-width: 280px;
          line-height: 1.7;
          font-family: 'Montserrat', sans-serif;
          margin: 0;
        }

        /* ── Grid ── */
        .cr-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        @media (max-width: 900px) {
          .cr-grid { grid-template-columns: 1fr; gap: 2px; }
          .cr-desc { max-width: 100%; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .cr-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* ── Card ── */
        .cr-card {
          background: #fff;
          overflow: hidden;
          position: relative;
          cursor: default;
          transition: transform 0.35s ease;
        }
        .cr-card:hover { transform: translateY(-4px); }

        .cr-img-wrap {
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
        }
        .cr-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          display: block;
        }
        .cr-card:hover .cr-img-wrap img {
          transform: scale(1.05);
        }

        .cr-body {
          padding: 1.75rem 1.75rem 2rem;
          border-bottom: 3px solid transparent;
          transition: border-color 0.3s;
        }
        .cr-card:hover .cr-body {
          border-color: #e07b39;
        }

        .cr-tag {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #e07b39;
          margin-bottom: 0.6rem;
        }
        .cr-card-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 0.75rem;
          line-height: 1.3;
        }
        .cr-card-desc {
          font-size: 0.83rem;
          color: #888;
          line-height: 1.75;
          font-family: 'Montserrat', sans-serif;
          margin: 0;
        }

        /* ── Divider ── */
        .cr-rule {
          border: none;
          border-top: 1px solid #ebebeb;
          margin: 4rem 0 0;
        }

        /* ── Mobile Responsive ── */
        @media (max-width: 768px) {
          #features {
            padding: 4rem 1.5rem;
          }
          .cr-header {
            margin-bottom: 2.5rem;
            flex-direction: column;
            align-items: flex-start;
          }
          .cr-title {
            font-size: 2.2rem;
          }
          .cr-rule {
            margin: 3rem 0 0;
          }
        }
      `}</style>

      <section id="features">
        <div className="cr-inner">

          {/* Header */}
          <div className="cr-header">
            <div>
              <p className="cr-eyebrow">Explore &amp; Discover</p>
              <h2 className="cr-title">Chronicle</h2>
            </div>
            <p className="cr-desc">
              Stories of devotion, service, and timeless teachings from the heart of ISKCON Hazaribag.
            </p>
          </div>

          {/* Cards */}
          <div className="cr-grid">
            {cards.map((c, i) => (
              <div className="cr-card" key={i}>
                <div className="cr-img-wrap">
                  <img src={c.image} alt={c.title} />
                </div>
                <div className="cr-body">
                  <span className="cr-tag">{c.tag}</span>
                  <h3 className="cr-card-title">{c.title}</h3>
                  <p className="cr-card-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="cr-rule" />
        </div>
      </section>
    </>
  );
};

export default Chronicle;
