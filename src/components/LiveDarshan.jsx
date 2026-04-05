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
  <div style={{
    background: '#fff',
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-start',
    padding: '1.75rem',
    borderBottom: '1px solid #f0f0f0',
    transition: 'background 0.2s',
  }}
  onMouseEnter={e => e.currentTarget.style.background = '#fafaf9'}
  onMouseLeave={e => e.currentTarget.style.background = '#fff'}
  >
    {/* Date block */}
    <div style={{
      flexShrink: 0,
      width: '54px',
      textAlign: 'center',
      paddingTop: '2px',
    }}>
      <div style={{
        fontSize: '1.6rem',
        fontWeight: 800,
        color: '#1a1a1a',
        lineHeight: 1,
        fontFamily: 'Montserrat, sans-serif',
      }}>{date}</div>
      <div style={{
        fontSize: '0.65rem',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#e07b39',
        marginTop: '2px',
      }}>{month}</div>
    </div>

    {/* Vertical rule */}
    <div style={{ width: '1px', background: '#ebebeb', alignSelf: 'stretch', flexShrink: 0 }} />

    {/* Content */}
    <div style={{ flex: 1 }}>
      <span style={{
        fontSize: '0.62rem',
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: '#e07b39',
        marginBottom: '0.4rem',
        display: 'block',
      }}>{tag}</span>
      <h3 style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1rem',
        fontWeight: 700,
        color: '#1a1a1a',
        margin: '0 0 0.5rem',
      }}>{title}</h3>
      <div style={{
        display: 'flex',
        gap: '1.2rem',
        flexWrap: 'wrap',
      }}>
        <span style={{ fontSize: '0.78rem', color: '#aaa', fontFamily: 'Montserrat, sans-serif' }}>
          🕐 {time}
        </span>
        <span style={{ fontSize: '0.78rem', color: '#aaa', fontFamily: 'Montserrat, sans-serif' }}>
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

        /* ── Mobile Responsive ── */
        @media (max-width: 768px) {
          #navigate {
            padding: 4rem 1.5rem;
          }
          .ev-header {
            margin-bottom: 2.5rem;
            flex-direction: column;
            align-items: flex-start;
          }
          .ev-title {
            font-size: 2.2rem;
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
