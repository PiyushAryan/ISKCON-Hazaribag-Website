import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const allEvents = [
  {
    name: 'Grand Ratha Yatra',
    date: '16 July 2026',
    desc: 'The grand chariot festival of Lord Jagannath, Baladeva and Subhadra Devi. Join thousands of devotees as we pull the sacred chariots through the streets of Hazaribag.',
    image: '/images/rath_yatra.png',
  },
  {
    name: 'Pandava Nirjala Ekadashi',
    date: '08 June 2026',
    desc: 'The most meritorious of all Ekadashi fasts observed without even water. Special kirtans and discourses on the glories of fasting for Lord Vishnu.',
    image: '/images/mayapur-samadhi.jpeg',
  },
  {
    name: 'Shri Ramnavami Celebration',
    date: '27 March 2026',
    desc: 'Celebrating the divine appearance of Lord Sri Rama with special abhishek, kirtan, and scriptural discourses throughout the day.',
    image: '/images/srichaitanya001901.jpg',
  },
  {
    name: 'Shri Gaur Purnima Celebration',
    date: '02 March 2026',
    desc: 'The auspicious appearance day of Sri Chaitanya Mahaprabhu — the golden avatar who gave us the Hare Krishna Maha Mantra.',
    image: '/images/radhashtami.png',
  },
];

const today = new Date();
const futureEvents = allEvents
  .filter((e) => new Date(e.date) >= today)
  .sort((a, b) => new Date(a.date) - new Date(b.date))
  .slice(0, 2);
const pastEvents = allEvents
  .filter((e) => new Date(e.date) < today)
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 1);
const displayEvents = [...futureEvents, ...pastEvents];

const isUpcoming = (dateStr) => new Date(dateStr) >= today;

const annualFestivals = [
  {
    name: 'Janmashtami',
    period: 'August · Every Year',
    desc: 'The most celebrated festival of the year — the appearance of Lord Sri Krishna. An all-night programme of kirtan, drama and midnight abhishek.',
    image: '/images/janmashtami.png',
  },
  {
    name: 'Radhashtami',
    period: 'August–September · Every Year',
    desc: 'The appearance day of Srimati Radharani, the queen of Vrindavan. Celebrated with floral decorations, special kirtans and prasadam distribution.',
    image: '/images/radhashtami.png',
  },
  {
    name: 'Diwali & Govardhan Puja',
    period: 'October–November · Every Year',
    desc: 'Celebrating the lifting of Govardhan Hill by Lord Krishna with an anna-kuta feast — mountains of prasadam offered to the Lord.',
    image: '/images/carousel1.jpeg',
  },
  {
    name: 'Kartik Deepotsav',
    period: 'October–November · Every Year',
    desc: 'The sacred month of Kartik observed with Damodar prayers, lamp offerings and nightly discourses on Krishna\'s pastimes.',
    image: '/images/mayapur-samadhi.jpeg',
  },
];

const EventsFestivals = () => {
  useEffect(() => {
    document.title = 'Events & Festivals — ISKCON Hazaribag';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#faf9f7' }}>
      <Navbar />

      <style>{`
        .ef-wrap {
          flex: 1;
          padding-top: 80px;
          padding-bottom: 40px;
        }

        /* ── Hero ── */
        .ef-hero {
          background: #582739;
          color: #fff7c2;
          padding: 4rem 1.5rem 4.5rem;
          text-align: center;
        }
        .ef-hero-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #f6d47b;
          margin-bottom: 0.85rem;
          display: block;
        }
        .ef-hero-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #fff7c2;
          margin: 0 0 1rem;
          line-height: 1.15;
        }
        .ef-hero-copy {
          margin: 0 auto;
          max-width: 620px;
          color: rgba(255, 247, 194, 0.85);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        /* ── Section shells ── */
        .ef-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 4rem 2rem 1rem;
        }
        .ef-section-head {
          margin-bottom: 2.5rem;
        }
        .ef-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #d4a017;
          margin-bottom: 0.6rem;
          display: block;
        }
        .ef-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: clamp(1.8rem, 3.4vw, 2.6rem);
          color: #582739;
          margin: 0;
          line-height: 1.15;
        }

        /* ── Upcoming events list ── */
        .ef-upcoming-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .ef-upcoming-card {
          display: grid;
          grid-template-columns: 260px 1fr;
          background: #fff;
          border: 1px solid #ece6dc;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .ef-upcoming-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 28px rgba(88, 39, 57, 0.08);
        }
        .ef-upcoming-img {
          width: 100%;
          height: 100%;
          min-height: 180px;
          object-fit: cover;
          display: block;
        }
        .ef-upcoming-body {
          padding: 1.6rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.5rem;
        }
        .ef-upcoming-meta {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .ef-upcoming-date {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          color: #d4a017;
          letter-spacing: 0.05em;
        }
        .ef-tag {
          background: #d7df77;
          color: #4b1f2e;
          border-radius: 999px;
          padding: 0.18rem 0.5rem;
          font-size: 0.6rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .ef-upcoming-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.2;
        }
        .ef-upcoming-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.88rem;
          color: #555;
          line-height: 1.65;
          margin: 0;
        }
        .ef-register-btn {
          display: inline-flex;
          align-items: center;
          align-self: flex-start;
          margin-top: 0.5rem;
          padding: 0.6rem 1.2rem;
          background: #582739;
          color: #fff7c2;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 6px;
          transition: background 0.2s, transform 0.2s;
        }
        .ef-register-btn:hover {
          background: #4a1e30;
          transform: translateY(-1px);
          color: #fff7c2;
        }

        /* ── Annual festivals grid ── */
        .ef-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .ef-card {
          background: #fff;
          border: 1px solid #ece6dc;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .ef-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(88, 39, 57, 0.08);
        }
        .ef-card-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }
        .ef-card-body {
          padding: 1.25rem 1.4rem 1.6rem;
        }
        .ef-card-period {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #d4a017;
          margin: 0 0 0.45rem;
        }
        .ef-card-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          color: #1a1a1a;
          margin: 0 0 0.5rem;
        }
        .ef-card-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.88rem;
          color: #555;
          line-height: 1.65;
          margin: 0;
        }

        /* ── CTA ── */
        .ef-cta {
          max-width: 1100px;
          margin: 3rem auto 4rem;
          padding: 2.5rem 2rem;
          background: linear-gradient(135deg, #582739 0%, #4a1e30 100%);
          border-radius: 12px;
          text-align: center;
          color: #fff7c2;
        }
        .ef-cta-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.3rem, 2.5vw, 1.7rem);
          font-weight: 800;
          color: #fff7c2;
          margin: 0 0 0.6rem;
        }
        .ef-cta-copy {
          font-size: 0.9rem;
          color: rgba(255, 247, 194, 0.85);
          margin: 0 0 1.5rem;
          line-height: 1.6;
        }
        .ef-cta-btn {
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
        .ef-cta-btn:hover {
          background: #ffe495;
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .ef-section { padding: 3rem 1.25rem 1rem; }
          .ef-upcoming-card { grid-template-columns: 1fr; }
          .ef-upcoming-img { min-height: 200px; height: 200px; }
          .ef-upcoming-body { padding: 1.25rem 1.25rem 1.5rem; }
          .ef-grid { grid-template-columns: 1fr; }
          .ef-card-img { height: 180px; }
          .ef-cta { margin-left: 1.25rem; margin-right: 1.25rem; padding: 2rem 1.25rem; }
        }
      `}</style>

      <div className="ef-wrap">
        <section className="ef-hero">
          <span className="ef-hero-eyebrow">Celebrations at the Temple</span>
          <h1 className="ef-hero-title">Events &amp; Festivals</h1>
          <p className="ef-hero-copy">
            Immerse yourself in the transcendental joy of Vaishnava festivals. From the pre-dawn Mangal Aarti
            to grand chariot processions, every celebration is an invitation to experience Krishna's mercy.
          </p>
        </section>

        {/* Upcoming Events */}
        <section className="ef-section">
          <div className="ef-section-head">
            <span className="ef-eyebrow">Don't Miss</span>
            <h2 className="ef-title">Upcoming Events</h2>
          </div>

          <div className="ef-upcoming-list">
            {displayEvents.map((event) => (
              <article className="ef-upcoming-card" key={event.name}>
                <img className="ef-upcoming-img" src={event.image} alt={event.name} loading="lazy" />
                <div className="ef-upcoming-body">
                  <div className="ef-upcoming-meta">
                    <span className="ef-upcoming-date">{event.date}</span>
                    {isUpcoming(event.date) && <span className="ef-tag">Upcoming</span>}
                  </div>
                  <h3 className="ef-upcoming-name">{event.name}</h3>
                  <p className="ef-upcoming-desc">{event.desc}</p>
                  {isUpcoming(event.date) && (
                    <Link className="ef-register-btn" to="/checkout">Register Now →</Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Annual Festivals */}
        <section className="ef-section">
          <div className="ef-section-head">
            <span className="ef-eyebrow">Every Year</span>
            <h2 className="ef-title">Annual Festivals</h2>
          </div>

          <div className="ef-grid">
            {annualFestivals.map((festival) => (
              <article className="ef-card" key={festival.name}>
                <img className="ef-card-img" src={festival.image} alt={festival.name} loading="lazy" />
                <div className="ef-card-body">
                  <p className="ef-card-period">{festival.period}</p>
                  <h3 className="ef-card-name">{festival.name}</h3>
                  <p className="ef-card-desc">{festival.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ef-cta">
          <h3 className="ef-cta-title">Join the Celebration</h3>
          <p className="ef-cta-copy">
            Make a donation to help us organise grand festivals and distribute prasadam to thousands of devotees.
          </p>
          <Link className="ef-cta-btn" to="/checkout">Donate for Festivals →</Link>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EventsFestivals;
