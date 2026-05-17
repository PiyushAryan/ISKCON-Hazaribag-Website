import React from 'react';
import { Link } from 'react-router-dom';

const causes = [
  {
    image: '/images/food-for-life-collarge.jpg',
    title: 'Anna Daan',
    desc: 'Contribute to food distribution. Served 76 Crores plates since 2020.',
  },
  {
    image: '/images/bhagavad-gita.jpg',
    title: 'Varuthini Ekadashi',
    desc: 'Schedule donation on this auspicious day.',
    tag: 'Special Opportunity',
  },
  {
    image: '/images/How-Hare-Krishna-Movement-Spread-to-Worldwide.jpeg',
    title: 'Gyan Daan',
    desc: 'Contribute to book distribution by sponsoring Prabhupada books.',
  },
];

const Donation = () => {
  return (
    <>
      <style>{`
        #donation {
          background: #5a2a39;
          color: #fff7c2;
          padding: 3.8rem 1.4rem 5rem;
          text-align: center;
        }
        .dn-inner {
          max-width: 980px;
          margin: 0 auto;
        }
        .dn-quote {
          max-width: 720px;
          margin: 0.7rem auto 0;
          color: rgba(255, 247, 194, 0.86);
          font-size: 0.86rem;
          line-height: 1.65;
        }
        .dn-credit {
          margin: 0.55rem 0 0;
          color: rgba(255, 247, 194, 0.72);
          font-size: 0.62rem;
          line-height: 1.45;
        }
        .dn-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
          max-width: 720px;
          margin: 3rem auto 2.7rem;
          align-items: stretch;
        }
        .dn-card {
          position: relative;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 9px;
          overflow: hidden;
          text-align: left;
          color: #fff7c2;
          box-shadow: 0 18px 42px rgba(20, 5, 10, 0.18);
        }
        .dn-img-wrap {
          aspect-ratio: 1;
          overflow: hidden;
        }
        .dn-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.45s ease;
        }
        .dn-card:hover img { transform: scale(1.05); }
        .dn-body {
          padding: 0.85rem;
        }
        .dn-card-title {
          color: #fff7c2;
          font-size: 0.92rem;
          font-weight: 900;
          line-height: 1.2;
          margin: 0 0 0.35rem;
        }
        .dn-card-desc {
          color: rgba(255, 247, 194, 0.76);
          font-size: 0.68rem;
          line-height: 1.5;
          margin: 0;
        }
        .dn-tag {
          position: absolute;
          top: 0.55rem;
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
          max-width: calc(100% - 1rem);
          background: #fff7c2;
          color: #4d2030;
          border-radius: 999px;
          padding: 0.18rem 0.48rem;
          font-size: 0.52rem;
          text-transform: uppercase;
          font-weight: 900;
        }
        @media (max-width: 760px) {
          .dn-grid {
            grid-template-columns: 1fr;
            max-width: 360px;
          }
        }
      `}</style>

      <section id="donation">
        <div className="dn-inner">
          <h2 className="section-title">Donate</h2>
          <p className="dn-quote">
            "By engaging one's wealth in the service of the Lord, one becomes freed from karma and attains the spiritual world."
          </p>
          <p className="dn-credit">
            Srimad-Bhagavatam 1.5.12 Purport<br />
            His Divine Grace A. C. Bhaktivedanta Swami Srila Prabhupada
          </p>

          <div className="dn-grid">
            {causes.map((cause) => (
              <article className="dn-card" key={cause.title}>
                {cause.tag && <span className="dn-tag">{cause.tag}</span>}
                <div className="dn-img-wrap">
                  <img src={cause.image} alt={cause.title} loading="lazy" />
                </div>
                <div className="dn-body">
                  <h3 className="dn-card-title">{cause.title}</h3>
                  <p className="dn-card-desc">{cause.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <Link className="pdf-center-btn" to="/checkout">More Donations</Link>
        </div>
      </section>
    </>
  );
};

export default Donation;
