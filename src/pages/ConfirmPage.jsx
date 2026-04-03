import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const ConfirmPage = () => {
  const [searchParams] = useSearchParams();

  const payment_id = searchParams.get('payment_id') || '—';
  const amount = searchParams.get('amount') || '—';
  const status = searchParams.get('status') || '—';

  useEffect(() => {
    document.title = 'Thank You — ISKCON Hazaribag';
  }, []);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .cp-root {
          display: flex;
          min-height: 100vh;
          font-family: 'Montserrat', sans-serif;
        }

        /* ── Left panel ── */
        .cp-left {
          flex: 1;
          background-image: url('/images/iskcon-rm.jpg');
          background-size: cover;
          background-position: center;
          position: relative;
          display: none;
        }
        .cp-left::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(34,1,1,0.55) 0%, rgba(34,1,1,0.2) 100%);
        }
        .cp-left-label {
          position: absolute;
          bottom: 2.5rem;
          left: 2.5rem;
          z-index: 1;
          color: rgba(255,255,255,0.75);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        @media (min-width: 768px) {
          .cp-left { display: block; }
        }

        /* ── Right panel ── */
        .cp-right {
          flex: 0 0 100%;
          max-width: 100%;
          background: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3rem 2rem;
        }
        @media (min-width: 768px) {
          .cp-right {
            flex: 0 0 480px;
            max-width: 480px;
            padding: 3.5rem;
          }
        }

        /* ── Logo ── */
        .cp-logo {
          width: 44px;
          height: auto;
          margin-bottom: 3rem;
        }

        /* ── Icon ring ── */
        .cp-icon-ring {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 1.5px solid #e07b39;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .cp-icon-ring svg {
          color: #e07b39;
        }

        /* ── Headings ── */
        .cp-kicker {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #e07b39;
          margin-bottom: 0.5rem;
        }
        .cp-title {
          font-family: 'Moon Dance', cursive;
          font-size: 2.6rem;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.15;
          margin-bottom: 0.5rem;
        }
        .cp-lead {
          font-size: 0.85rem;
          color: #aaa;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          font-weight: 500;
        }

        /* ── Details table ── */
        .cp-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 2.5rem;
        }
        .cp-table tr {
          border-bottom: 1px solid #f0f0f0;
        }
        .cp-table tr:last-child {
          border-bottom: none;
        }
        .cp-table td {
          padding: 0.85rem 0;
          font-size: 0.82rem;
          font-family: 'Montserrat', sans-serif;
        }
        .cp-table td:first-child {
          color: #bbb;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-size: 0.68rem;
          width: 45%;
        }
        .cp-table td:last-child {
          color: #1a1a1a;
          font-weight: 600;
        }
        .cp-status {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: #4caf50 !important;
        }
        .cp-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4caf50;
          flex-shrink: 0;
        }

        /* ── Buttons ── */
        .cp-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .cp-btn-primary {
          flex: 1;
          min-width: 120px;
          padding: 0.8rem 1.2rem;
          background: #e07b39;
          border: none;
          border-radius: 4px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #fff;
          text-decoration: none;
          text-align: center;
          cursor: pointer;
          transition: background 0.2s;
        }
        .cp-btn-primary:hover { background: #c96930; color: #fff; }

        .cp-btn-outline {
          flex: 1;
          min-width: 120px;
          padding: 0.8rem 1.2rem;
          background: transparent;
          border: 1.5px solid #e5e5e5;
          border-radius: 4px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #555;
          text-decoration: none;
          text-align: center;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .cp-btn-outline:hover { border-color: #ccc; color: #1a1a1a; }

        /* ── Footer note ── */
        .cp-note {
          margin-top: 2rem;
          font-size: 0.7rem;
          color: #ccc;
          line-height: 1.7;
          text-align: center;
          padding-top: 1.5rem;
          border-top: 1px solid #f0f0f0;
        }
        .cp-note a { color: #e07b39; text-decoration: none; }
      `}</style>

      <div className="cp-root">
        {/* Left — temple image */}
        <div className="cp-left">
          <span className="cp-left-label">ISKCON Hazaribag</span>
        </div>

        {/* Right — confirmation */}
        <div className="cp-right">
          <img
            src="https://www.iskconmumbai.com/bi_theme_snippets/static/src/img/logo-black-header.png"
            alt="ISKCON"
            className="cp-logo"
          />

          {/* Check icon */}
          <div className="cp-icon-ring">
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <p className="cp-kicker">Donation Confirmed</p>
          <h1 className="cp-title">!! Hare Krishna !!</h1>
          <p className="cp-lead">
            Your offering has been received. May Sri Sri Radha Madhava shower you with their blessings.
          </p>

          {/* Payment details */}
          <table className="cp-table">
            <tbody>
              <tr>
                <td>Reference No.</td>
                <td>{payment_id}</td>
              </tr>
              <tr>
                <td>Amount</td>
                <td>₹{amount}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>
                  <span className="cp-status">
                    <span className="cp-status-dot"></span>
                    {status}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Actions */}
          <div className="cp-actions">
            <Link to="/" className="cp-btn-primary">Back to Home</Link>
            <Link to="/checkout" className="cp-btn-outline">Donate Again</Link>
          </div>

          <p className="cp-note">
            80G exemption available · For receipt email PAN &amp; address to{' '}
            <a href="mailto:info@iskconhzb.com">info@iskconhzb.com</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ConfirmPage;
