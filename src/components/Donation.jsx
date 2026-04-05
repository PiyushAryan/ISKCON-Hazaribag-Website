import React from 'react';
import { Link } from 'react-router-dom';

const causes = [
  {
    image: 'https://www.iskcondelhi.com/wp-content/uploads/2021/05/anna-dan-iskcon-delhi-tab.jpg',
    tag: 'Food Seva',
    title: 'Food for Life',
    desc: 'Nourish the hungry and earn divine blessings. Every meal served is an offering to the Lord.',
  },
  {
    image: 'https://www.iskcondelhi.com/wp-content/uploads/2021/05/food-for-life-iskcon-delhi.jpg',
    tag: 'Community',
    title: 'Food for Needy',
    desc: 'Support our mission of feeding underprivileged communities around Hazaribag with love and devotion.',
  },
  {
    image: 'https://www.iskcondelhi.com/wp-content/uploads/2021/05/nitya-seva-iskcon-delhi-donation.jpg',
    tag: 'Daily Worship',
    title: 'Nitya Seva',
    desc: 'Sponsor the daily worship of Sri Sri Radha Madhava — flowers, incense, garments, and prasadam.',
  },
];

const Donation = () => {
  return (
    <>
      <style>{`
        #donation {
          background: #fff;
          padding: 6rem 2rem;
        }
        .dn-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .dn-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 4rem;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .dn-eyebrow {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #e07b39;
          margin-bottom: 0.6rem;
          font-family: 'Montserrat', sans-serif;
        }
        .dn-title {
          font-family: 'Merienda One', cursive;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 400;
          color: #1a1a1a;
          line-height: 1.2;
          margin: 0;
        }
        .dn-desc {
          font-size: 0.88rem;
          color: #999;
          max-width: 280px;
          line-height: 1.7;
          font-family: 'Montserrat', sans-serif;
          margin: 0;
        }

        /* Grid */
        .dn-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: #ebebeb;
        }
        @media (max-width: 900px) {
          .dn-grid { grid-template-columns: 1fr; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .dn-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* Card */
        .dn-card {
          background: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }
        .dn-card:hover { transform: translateY(-4px); }

        .dn-img-wrap {
          width: 100%;
          aspect-ratio: 3/2;
          overflow: hidden;
        }
        .dn-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .dn-card:hover .dn-img-wrap img {
          transform: scale(1.05);
        }

        .dn-body {
          padding: 1.75rem 1.75rem 2rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          border-bottom: 3px solid transparent;
          transition: border-color 0.3s;
        }
        .dn-card:hover .dn-body {
          border-color: #e07b39;
        }

        .dn-tag {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #e07b39;
          margin-bottom: 0.5rem;
          display: block;
        }
        .dn-card-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 0.65rem;
          line-height: 1.3;
        }
        .dn-card-desc {
          font-size: 0.82rem;
          color: #888;
          line-height: 1.75;
          font-family: 'Montserrat', sans-serif;
          margin: 0 0 1.75rem;
          flex: 1;
        }

        /* Button */
        .dn-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.65rem 1.4rem;
          background: transparent;
          border: 1.5px solid #1a1a1a;
          border-radius: 4px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1a1a1a;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
          width: fit-content;
        }
        .dn-btn:hover {
          background: #e07b39;
          border-color: #e07b39;
          color: #fff;
        }

        .dn-rule {
          border: none;
          border-top: 1px solid #ebebeb;
          margin: 4rem 0 0;
        }

        /* ── Mobile Responsive ── */
        @media (max-width: 768px) {
          #donation {
            padding: 3rem 1.25rem;
            background: #ebebeb;
          }
          .dn-header {
            margin-bottom: 2rem;
            flex-direction: column;
            align-items: flex-start;
          }
          .dn-title {
            font-size: 2.2rem;
          }
          .dn-grid {
            gap: 1.5rem;
            background: transparent;
          }
          .dn-card {
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
            border: 1px solid rgba(0,0,0,0.03);
          }
          .dn-btn {
            width: 100%;
            justify-content: center;
            padding: 1rem;
            font-size: 0.9rem;
          }
          .dn-rule {
            margin: 3rem 0 0;
          }
        }
      `}</style>

      <section id="donation">
        <div className="dn-inner">

          {/* Header */}
          <div className="dn-header">
            <div>
              <p className="dn-eyebrow">Offer Your Devotion</p>
              <h2 className="dn-title">
                Get Blessings from<br />
                Sri Sri Radha Madhava
              </h2>
            </div>
            <p className="dn-desc">
              Every contribution, big or small, is an act of devotion that sustains our temple and community.
            </p>
          </div>

          {/* Cards */}
          <div className="dn-grid">
            {causes.map((c, i) => (
              <div className="dn-card" key={i}>
                <div className="dn-img-wrap">
                  <img src={c.image} alt={c.title} />
                </div>
                <div className="dn-body">
                  <span className="dn-tag">{c.tag}</span>
                  <h3 className="dn-card-title">{c.title}</h3>
                  <p className="dn-card-desc">{c.desc}</p>
                  <Link to="/checkout" className="dn-btn">
                    Donate Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <hr className="dn-rule" />
        </div>
      </section>
    </>
  );
};

export default Donation;
