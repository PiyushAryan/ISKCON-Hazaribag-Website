import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Check, Printer } from 'lucide-react';

const formatAmount = (value) => {
  if (!value || value === '—') return '—';

  const numericAmount = Number(value);
  if (Number.isNaN(numericAmount)) return `₹${value}`;

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(numericAmount);
};

const ConfirmPage = () => {
  const [searchParams] = useSearchParams();

  const paymentId = searchParams.get('payment_id') || '—';
  const amount = searchParams.get('amount') || '—';
  const status = searchParams.get('status') || 'Successful';
  const wants80G = searchParams.get('wants_80g') === 'yes';
  const certNumber = paymentId !== '—' ? `80G-${paymentId.toUpperCase()}` : '—';
  const isSuccessful = status.toLowerCase().includes('success');

  const details = [
    ['Reference No.', paymentId],
    ...(wants80G ? [['Certificate No.', certNumber]] : []),
    ['Payment Status', status],
  ];

  useEffect(() => {
    document.title = 'Donation Confirmed | ISKCON Hazaribag';
  }, []);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .cp-root {
          display: flex;
          min-height: 100vh;
          font-family: 'Montserrat', sans-serif;
          background: #fff;
        }

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
          background: linear-gradient(to right, rgba(34,1,1,0.58) 0%, rgba(34,1,1,0.22) 100%);
        }

        .cp-left::before {
          content: '';
          position: absolute;
          inset: 1.5rem;
          z-index: 1;
          border: 1px solid rgba(255,255,255,0.32);
          border-radius: 8px;
          pointer-events: none;
        }

        .cp-left-content {
          position: absolute;
          left: 2.5rem;
          right: 2.5rem;
          bottom: 2.5rem;
          z-index: 1;
          color: #fff;
        }

        .cp-left-label {
          display: block;
          color: rgba(255,255,255,0.8);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .cp-left-title {
          max-width: 440px;
          color: rgba(255,255,255,0.94);
          font-size: clamp(2rem, 4vw, 3.6rem);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.01em;
        }

        @media (min-width: 768px) {
          .cp-left { display: block; }
        }

        .cp-right {
          flex: 0 0 100%;
          max-width: 100%;
          background: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3rem 2rem;
          overflow-y: auto;
        }

        @media (min-width: 768px) {
          .cp-right {
            flex: 0 0 540px;
            max-width: 540px;
            padding: 3.5rem 4rem;
          }
        }

        .cp-logo {
          width: 48px;
          height: auto;
          margin-bottom: 2rem;
        }

        .cp-status-line {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .cp-success-mark {
          width: 42px;
          height: 42px;
          display: inline-grid;
          place-items: center;
          border-radius: 999px;
          border: 1.5px solid ${isSuccessful ? '#dcefe1' : '#f0dfd1'};
          background: ${isSuccessful ? '#f4fbf6' : '#fff8f1'};
          color: ${isSuccessful ? '#2f8a47' : '#a65d24'};
          flex-shrink: 0;
        }

        .cp-success-mark svg {
          width: 20px;
          height: 20px;
          stroke-width: 2.6;
        }

        .cp-status-copy {
          min-width: 0;
        }

        .cp-status-kicker {
          color: #aaa;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }

        .cp-status-text {
          color: ${isSuccessful ? '#2f8a47' : '#a65d24'};
          font-size: 0.94rem;
          font-weight: 700;
        }

        .cp-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.45rem;
          font-weight: 300;
          color: #1a1a1a;
          letter-spacing: 0;
          line-height: 1.2;
          margin-bottom: 0.4rem;
        }

        .cp-subtitle {
          font-size: 0.82rem;
          color: #aaa;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 1.8rem;
        }

        .cp-amount-card {
          border: 1.5px solid #eee6dc;
          border-radius: 8px;
          background: #fffdf8;
          padding: 1.2rem;
          margin-bottom: 1.8rem;
        }

        .cp-amount-label {
          color: #aaa;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 0.4rem;
        }

        .cp-amount-value {
          color: #1a1a1a;
          font-size: clamp(1.65rem, 5.5vw, 2.35rem);
          font-weight: 300;
          line-height: 1;
          letter-spacing: -0.01em;
        }

        .cp-lead {
          color: #777;
          font-size: 0.8rem;
          line-height: 1.7;
          font-weight: 500;
          margin-bottom: 2.1rem;
        }

        .cp-details {
          width: 100%;
          margin-bottom: 0.5rem;
        }

        .cp-row {
          padding: 0.75rem 0;
          border-bottom: 1.5px solid #e5e5e5;
          margin-bottom: 1.05rem;
        }

        .cp-row:last-child {
          margin-bottom: 0;
        }

        .cp-label {
          display: block;
          color: #bbb;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }

        .cp-value {
          display: block;
          min-width: 0;
          color: #1a1a1a;
          font-size: 0.95rem;
          font-weight: 700;
          overflow-wrap: anywhere;
        }

        .cp-value.is-success {
          color: #2f8a47;
        }

        .cp-actions {
          width: 100%;
          margin-top: 1.5rem;
        }

        .cp-btn {
          width: 100%;
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: 6px;
          padding: 0.9rem 1rem;
          border: none;
          background: #582739;
          color: #fff7c2;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.86rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          margin: 0;
          transition: background 0.2s ease, color 0.2s ease, transform 0.16s ease;
        }

        .cp-btn svg {
          width: 16px;
          height: 16px;
        }

        .cp-btn:hover {
          background: #f6d47b;
          color: #4d2030;
          transform: translateY(-1px);
        }

        .cp-note {
          margin-top: 2rem;
          font-size: 0.7rem;
          color: #ccc;
          line-height: 1.6;
          text-align: center;
        }

        .cp-back {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          margin-top: 1rem;
          padding: 0.5rem;
          font-size: 0.88rem;
          color: #bbb;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 0.04em;
          transition: color 0.2s, transform 0.2s;
        }

        .cp-back svg {
          width: 15px;
          height: 15px;
        }

        .cp-back:hover {
          color: #582739;
          transform: translateX(-2px);
        }

        @media (max-width: 520px) {
          .cp-right {
            padding: 2.5rem 1.5rem;
          }

          .cp-status-line {
            align-items: flex-start;
          }

          .cp-title {
            font-size: 1.35rem;
          }
        }

        @media print {
          .cp-left,
          .cp-actions,
          .cp-back {
            display: none !important;
          }

          .cp-root {
            min-height: auto;
            background: #fff;
            display: block;
          }

          .cp-right {
            width: 100%;
            max-width: 100%;
            padding: 0;
          }

          .cp-amount-card {
            border-color: #ddd;
            background: #fff;
          }

          @page { margin: 2cm; }

          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>

      <main className="cp-root">
        <div className="cp-left">
          <div className="cp-left-content">
            <span className="cp-left-label">ISKCON Hazaribag</span>
            <h2 className="cp-left-title">Thank you for serving Sri Sri Radha Madhava.</h2>
          </div>
        </div>

        <section className="cp-right" aria-labelledby="confirmation-title">
          <img src="/images/logo-black-header.png" alt="ISKCON" className="cp-logo" />

          <div className="cp-status-line">
            <div className="cp-success-mark" aria-hidden="true">
              <Check />
            </div>
            <div className="cp-status-copy">
              <p className="cp-status-kicker">Payment Status</p>
              <p className="cp-status-text">{status}</p>
            </div>
          </div>

          <h1 className="cp-title" id="confirmation-title">Donation Confirmed</h1>
          <p className="cp-subtitle">Sri Sri Radha Madhava Temple</p>

          <div className="cp-amount-card">
            <p className="cp-amount-label">Offering Received</p>
            <p className="cp-amount-value">{formatAmount(amount)}</p>
          </div>

          <p className="cp-lead">
            Your offering has been received with gratitude.<br />
            May Sri Sri Radha Madhava shower you and your family with their blessings.
          </p>

          <div className="cp-details" aria-label="Donation details">
            {details.map(([label, value]) => (
              <div className="cp-row" key={label}>
                <span className="cp-label">{label}</span>
                <span className={`cp-value ${label === 'Payment Status' && isSuccessful ? 'is-success' : ''}`}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="cp-actions">
            <button type="button" onClick={() => window.print()} className="cp-btn">
              <Printer aria-hidden="true" />
              Print Receipt
            </button>
          </div>

          <p className="cp-note">
            80G tax exemption available. Keep this reference number for your records.
          </p>

          <Link to="/" className="cp-back">
            <ArrowLeft aria-hidden="true" />
            Back to Home
          </Link>
        </section>
      </main>
    </>
  );
};

export default ConfirmPage;
