import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const ConfirmPage = () => {
  const [searchParams] = useSearchParams();

  const payment_id = searchParams.get('payment_id') || '—';
  const amount = searchParams.get('amount') || '—';
  const status = searchParams.get('status') || '—';
  
  const certNumber = payment_id !== '—' ? `80G-${payment_id.toUpperCase()}` : '—';

  useEffect(() => {
    document.title = 'Thank You — ISKCON Hazaribag';
  }, []);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .cp-root {
          min-height: 100vh;
          font-family: 'Montserrat', sans-serif;
          background: #fff;
          display: flex;
          flex-direction: column;
        }

        /* ── Hero Image Section ── */
        .cp-hero {
          width: 100%;
          height: 35vh;
          min-height: 250px;
          background-image: url('/images/iskcon-rm.jpg');
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .cp-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(34,1,1,0.2) 0%, rgba(34,1,1,0.6) 100%);
        }
        .cp-hero-label {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
          color: rgba(255,255,255,0.9);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        /* ── Content Section ── */
        .cp-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4rem 2rem;
          max-width: 600px;
          margin: 0 auto;
          width: 100%;
        }

        /* ── Logo ── */
        .cp-logo {
          width: 52px;
          height: auto;
          margin-bottom: 2.5rem;
        }

        /* ── Headings ── */
        .cp-kicker {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #582739;
          margin-bottom: 0.5rem;
          text-align: center;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .cp-kicker svg {
          color: #4caf50;
        }
        .cp-title {
          font-family: 'Moon Dance', cursive;
          font-size: 3.2rem;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.15;
          margin-bottom: 1rem;
          text-align: center;
        }
        .cp-lead {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.7;
          margin-bottom: 3rem;
          font-weight: 500;
          text-align: center;
        }

        /* ── Details table ── */
        .cp-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 3rem;
        }
        .cp-table tr {
          border-bottom: 1px solid #f0f0f0;
        }
        .cp-table tr:last-child {
          border-bottom: none;
        }
        .cp-table td {
          padding: 1rem 0;
          font-size: 0.9rem;
          font-family: 'Montserrat', sans-serif;
        }
        .cp-table td:first-child {
          color: #888;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 0.75rem;
          width: 45%;
        }
        .cp-table td:last-child {
          color: #1a1a1a;
          font-weight: 700;
          text-align: right;
        }
        .cp-status {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: #4caf50 !important;
        }
        .cp-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4caf50;
          flex-shrink: 0;
        }

        /* ── Buttons ── */
        .cp-actions {
          display: flex;
          gap: 1rem;
          width: 100%;
          flex-direction: column;
        }
        @media (min-width: 500px) {
          .cp-actions {
            flex-direction: row;
          }
        }
        .cp-btn-primary {
          flex: 1;
          padding: 1rem;
          background: #582739;
          border: 1.5px solid transparent;
          border-radius: 8px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fff7c2;
          text-decoration: none;
          text-align: center;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.15s;
        }
        .cp-btn-primary:hover { background: #f6d47b; color: #4d2030; transform: translateY(-2px); }

        .cp-btn-outline {
          flex: 1;
          padding: 1rem;
          background: transparent;
          border: 1.5px solid #e5e5e5;
          border-radius: 8px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #555;
          text-decoration: none;
          text-align: center;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, transform 0.15s;
        }
        .cp-btn-outline:hover { border-color: #ccc; color: #1a1a1a; transform: translateY(-2px); }

        /* ── Footer note ── */
        .cp-note {
          margin-top: 3rem;
          font-size: 0.75rem;
          color: #aaa;
          line-height: 1.7;
          text-align: center;
        }

        /* ── Print Styles (Receipt Mode) ── */
        @media print {
          .cp-hero, .cp-actions { display: none !important; }
          .cp-root { background: #fff; padding: 0; }
          .cp-content { max-width: 100%; padding: 0; }
          @page { margin: 2cm; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .cp-kicker, .cp-title, .cp-status { color: #000 !important; }
          .cp-status-dot { filter: grayscale(1); }
        }
      `}</style>

      <div className="cp-root">
        {/* Full Width Hero Image */}
        <div className="cp-hero">
          <div className="cp-hero-label">ISKCON Hazaribag</div>
        </div>

        {/* Content Section (No Box) */}
        <div className="cp-content">
          <img
            src="https://www.iskconmumbai.com/bi_theme_snippets/static/src/img/logo-black-header.png"
            alt="ISKCON"
            className="cp-logo"
          />

          <p className="cp-kicker">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Donation Confirmed
          </p>
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
                <td>Certificate No.</td>
                <td>{certNumber}</td>
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
            <button onClick={() => window.print()} className="cp-btn-outline">Download Receipt</button>
          </div>

          <p className="cp-note">
            80G tax exemption available · Keep this reference for your records.
          </p>
        </div>
      </div>
    </>
  );
};

export default ConfirmPage;
