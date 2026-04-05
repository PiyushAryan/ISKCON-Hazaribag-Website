import React from 'react';

// Placeholder — swap in real events when available
const events = [];

const EmptyState = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5rem 2rem',
    background: '#fff',
    border: '1px solid #ebebeb',
    textAlign: 'center',
  }}>
    {/* Om symbol */}
    <span style={{
      fontSize: '3rem',
      lineHeight: 1,
      color: '#e8dfd6',
      marginBottom: '1.5rem',
      fontFamily: 'serif',
    }}>ॐ</span>
    <p style={{
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '0.75rem',
      fontWeight: 700,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: '#ccc',
      marginBottom: '0.6rem',
    }}>No upcoming events</p>
    <p style={{
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '0.82rem',
      color: '#bbb',
      maxWidth: '320px',
      lineHeight: 1.7,
      margin: 0,
    }}>
      Please check back soon. New events, festivals, and satsangs are announced regularly.
    </p>
  </div>
);

const EventCard = ({ date, month, title, time, location, tag }) => (
  <div className="ev-card">
    {/* Date block */}
    <div className="ev-date-block">
      <div className="ev-date">{date}</div>
      <div className="ev-month">{month}</div>
    </div>

    {/* Vertical rule */}
    <div className="ev-card-rule" />

    {/* Content */}
    <div className="ev-content">
      <span className="ev-tag">{tag}</span>
      <h3 className="ev-card-title">{title}</h3>
      <div className="ev-meta">
        <span>
          🕐 {time}
        </span>
        <span>
          📍 {location}
        </span>
      </div>
    </div>
  </div>
);

const LiveDarshan = () => {
  return (
    <>
      <style>{`
        #navigate {
          background: #faf9f7;
          padding: 6rem 2rem;
        }
        .ev-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .ev-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3rem;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .ev-eyebrow {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #e07b39;
          margin-bottom: 0.6rem;
          font-family: 'Montserrat', sans-serif;
        }
        .ev-title {
          font-family: 'Merienda One', cursive;
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 400;
          color: #1a1a1a;
          line-height: 1.15;
          margin: 0;
        }
        .ev-desc {
          font-size: 0.88rem;
          color: #999;
          max-width: 280px;
          line-height: 1.7;
          font-family: 'Montserrat', sans-serif;
          margin: 0;
        }
        .ev-rule {
          border: none;
          border-top: 1px solid #ebebeb;
          margin: 4rem 0 0;
        }

        /* ── Event Card Classes ── */
        .ev-card {
          background: #fff;
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          padding: 1.75rem;
          border-bottom: 1px solid #f0f0f0;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .ev-card:hover {
          background: #fafaf9;
        }
        .ev-date-block {
          flex-shrink: 0;
          width: 54px;
          text-align: center;
          padding-top: 2px;
        }
        .ev-date {
          font-size: 1.6rem;
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1;
          font-family: 'Montserrat', sans-serif;
        }
        .ev-month {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #e07b39;
          margin-top: 2px;
        }
        .ev-card-rule {
          width: 1px;
          background: #ebebeb;
          align-self: stretch;
          flex-shrink: 0;
        }
        .ev-content {
          flex: 1;
        }
        .ev-tag {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #e07b39;
          margin-bottom: 0.4rem;
          display: block;
        }
        .ev-card-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 0.5rem;
        }
        .ev-meta {
          display: flex;
          gap: 1.2rem;
          flex-wrap: wrap;
        }
        .ev-meta span {
          font-size: 0.78rem;
          color: #aaa;
          font-family: 'Montserrat', sans-serif;
        }

        /* ── Mobile Responsive ── */
        @media (max-width: 768px) {
          #navigate {
            padding: 3rem 1.25rem;
            background: #faf9f7;
          }
          .ev-header {
            margin-bottom: 2rem;
            flex-direction: column;
            align-items: flex-start;
          }
          .ev-title {
            font-size: 2.2rem;
          }
          .ev-card {
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.04);
            border: 1px solid rgba(0,0,0,0.04);
            border-bottom: none;
            flex-direction: row;
            padding: 1.25rem;
            gap: 1.25rem;
            margin-bottom: 1rem;
          }
          .ev-card:last-child {
            margin-bottom: 0;
          }
          .ev-rule {
            margin: 3rem 0 0;
          }
        }
      `}</style>

      <section id="navigate">
        <div className="ev-inner">

          {/* Header */}
          <div className="ev-header">
            <div>
              <p className="ev-eyebrow">What's On</p>
              <h2 className="ev-title">Events at ISKCON Hazaribag</h2>
            </div>
            <p className="ev-desc">
              Festivals, satsangs, and community gatherings at Sri Sri Radha Madhava Temple.
            </p>
          </div>

          {/* Event list or empty state */}
          {events.length > 0
            ? events.map((ev, i) => <EventCard key={i} {...ev} />)
            : <EmptyState />
          }

          <hr className="ev-rule" />
        </div>
      </section>
    </>
  );
};

export default LiveDarshan;
