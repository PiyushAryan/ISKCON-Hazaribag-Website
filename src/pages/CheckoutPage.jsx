import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const presets = [501, 1001, 2100, 5100];

const donationItems = [
  'Anna Daan',
  'Sadhu Bhojan',
  'Kitchen Seva',
  'Gau Seva',
  'Deity Seva',
  'Ekadashi Seva',
  'Gita Seva',
  'Gupta Daan',
  'Special Daan',
];

const CheckoutPage = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [activeAmount, setActiveAmount] = useState(null);
  const [currentAmount, setCurrentAmount] = useState(0);
  const [wants80G, setWants80G] = useState(false);
  const [step, setStep] = useState(1);
  const fullnameRef = useRef();
  const telRef = useRef();
  const emailRef = useRef();
  const panRef = useRef();
  const addressRef = useRef();
  const amountRef = useRef();
  const typeRef = useRef();

  async function createOrder(donationAmount) {
    const response = await fetch(
      'https://0t0nsqp0k3.execute-api.us-east-1.amazonaws.com/dev/createOrder',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: donationAmount * 100 }),
      }
    );
    const orderData = await response.json();
    return orderData.id;
  }

  async function initiatePayment(e) {
    e.preventDefault();
    const donationAmount = amountRef.current.value || '5000';
    setLoading(true);
    try {
      const order_id = await createOrder(donationAmount);
      const options = {
        key: 'rzp_test_f71au899PKnfY6',
        amount: donationAmount * 100,
        currency: 'INR',
        name: 'ISKCON Hazaribag',
        description: `Donation – ${typeRef.current.value}`,
        image: 'https://www.iskconmumbai.com/bi_theme_snippets/static/src/img/logo-black-header.png',
        order_id,
        handler(response) {
          const params = new URLSearchParams({
            payment_id: response.razorpay_payment_id,
            amount: donationAmount,
            status: 'Successful',
            wants_80g: wants80G ? 'yes' : 'no',
          }).toString();
          window.location.href = `/confirm?${params}`;
        },
        prefill: {
          name: fullnameRef.current.value,
          email: emailRef.current.value,
          contact: telRef.current.value,
        },
        notes: { 
          address: addressRef.current.value, 
          purpose: typeRef.current.value,
          pan: panRef.current?.value || 'Not Provided'
        },
        theme: { color: '#582739' },
      };
      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      alert('Payment could not be processed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  function handlePreset(val) {
    setActiveAmount(val);
    amountRef.current.value = val;
    setCurrentAmount(val);
  }

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .co-root {
          display: flex;
          min-height: 100vh;
          font-family: 'Montserrat', sans-serif;
        }

        /* ── Left panel ── */
        .co-left {
          flex: 1;
          background-image: url('/images/iskcon-rm.jpg');
          background-size: cover;
          background-position: center;
          position: relative;
          display: none;
        }
        .co-left::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(34,1,1,0.55) 0%, rgba(34,1,1,0.2) 100%);
        }
        .co-left-label {
          position: absolute;
          bottom: 2.5rem;
          left: 2.5rem;
          z-index: 1;
          color: rgba(255,255,255,0.8);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        @media (min-width: 768px) {
          .co-left { display: block; }
        }

        /* ── Right panel ── */
        .co-right {
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
          .co-right {
            flex: 0 0 540px;
            max-width: 540px;
            padding: 3.5rem 4rem;
          }
        }

        /* ── Logo ── */
        .co-logo {
          width: 48px;
          height: auto;
          margin-bottom: 2rem;
        }

        /* ── Heading ── */
        .co-title {
          font-size: 2rem;
          font-weight: 300;
          color: #1a1a1a;
          letter-spacing: -0.01em;
          margin-bottom: 0.4rem;
        }
        .co-subtitle {
          font-size: 0.82rem;
          color: #aaa;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 2.5rem;
        }

        /* ── Field ── */
        .co-form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0 1.5rem;
        }
        @media (min-width: 500px) {
          .co-form-grid {
            grid-template-columns: 1fr 1fr;
          }
          .co-full {
            grid-column: 1 / -1;
          }
        }

        .co-label {
          display: block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #bbb;
          margin-bottom: 0.4rem;
        }
        .co-input {
          width: 100%;
          padding: 0.75rem 0;
          border: none;
          border-bottom: 1.5px solid #e5e5e5;
          border-radius: 0;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          color: #1a1a1a;
          background: transparent;
          outline: none;
          transition: border-color 0.2s;
          margin-bottom: 1.5rem;
        }
        .co-input::placeholder { color: #ccc; }
        .co-input:focus { border-color: #582739; }
        
        select.co-input {
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231a1a1a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right center;
          background-size: 16px;
          padding-right: 2rem;
        }

        /* ── Preset chips ── */
        .co-chips {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.6rem;
          margin-bottom: 1.25rem;
        }
        .co-chip {
          padding: 0.6rem 0;
          border: 1.5px solid #e5e5e5;
          border-radius: 6px;
          background: #fff;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          color: #555;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          text-align: center;
        }
        .co-chip:hover {
          border-color: #582739;
          color: #582739;
        }
        .co-chip.active {
          border-color: #582739;
          background: rgba(246, 212, 123, 0.15); /* Soft gold tint */
          color: #582739;
        }

        /* ── Submit ── */
        .co-btn {
          width: 100%;
          padding: 0.9rem;
          margin-top: 1.5rem;
          background: #582739;
          border: none;
          border-radius: 6px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fff7c2;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.15s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .co-btn:hover:not(:disabled) {
          background: #f6d47b;
          color: #4d2030;
          transform: translateY(-1px);
        }
        .co-btn:disabled { opacity: 0.65; cursor: not-allowed; }

        /* ── Footer ── */
        .co-meta {
          margin-top: 2rem;
          font-size: 0.7rem;
          color: #ccc;
          line-height: 1.6;
          text-align: center;
        }
        .co-meta a { color: #582739; text-decoration: none; font-weight: 600; }
        .co-back {
          display: inline-block;
          text-align: center;
          margin-top: 1rem;
          padding: 0.5rem;
          font-size: 0.88rem;
          color: #bbb;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 0.04em;
          transition: color 0.2s, transform 0.2s;
        }
        .co-back:hover { color: #582739; transform: translateX(-2px); }
        .co-secure {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          font-size: 0.68rem;
          color: #ccc;
          margin-top: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
      `}</style>

      <div className="co-root">

        {/* Left — temple image */}
        <div className="co-left">
          <span className="co-left-label">ISKCON Hazaribag</span>
        </div>

        {/* Right — form */}
        <div className="co-right">
          <img
            src="https://www.iskconmumbai.com/bi_theme_snippets/static/src/img/logo-black-header.png"
            alt="ISKCON"
            className="co-logo"
          />

          <h1 className="co-title">Make a Donation</h1>
          <p className="co-subtitle">Sri Sri Radha Madhava Temple</p>

          <form onSubmit={initiatePayment}>
            {/* --- STEP 1 --- */}
            <div style={{ display: step === 1 ? 'block' : 'none' }}>
              <label className="co-label">Select Amount</label>
              <div className="co-chips">
                {presets.map((val) => (
                  <button
                    key={val}
                    type="button"
                    className={`co-chip${activeAmount === val ? ' active' : ''}`}
                    onClick={() => handlePreset(val)}
                  >
                    ₹{val.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>

              <label className="co-label" htmlFor="donation-amount">Custom Amount (₹)</label>
              <input
                ref={amountRef}
                className="co-input"
                type="number"
                id="donation-amount"
                placeholder="Enter amount"
                min="1"
                onChange={(e) => {
                  setActiveAmount(null);
                  setCurrentAmount(Number(e.target.value) || 0);
                }}
              />

              <label className="co-label" htmlFor="donation-type">Donation Purpose</label>
              <select
                ref={typeRef}
                className="co-input"
                id="donation-type"
                required
                defaultValue={location.state?.type || 'Anna Daan'}
              >
                {donationItems.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>

              <button 
                type="button" 
                className="co-btn" 
                onClick={() => {
                  if (currentAmount >= 1) setStep(2);
                  else alert('Please select or enter a valid amount.');
                }}
              >
                Continue to Details
              </button>
            </div>

            {/* --- STEP 2 --- */}
            <div style={{ display: step === 2 ? 'block' : 'none' }}>
              <div className="co-form-grid">
                <div>
                  <label className="co-label" htmlFor="fullname">Full Name</label>
                  <input
                    ref={fullnameRef}
                    className="co-input"
                    type="text"
                    id="fullname"
                    placeholder="Your name"
                    required={step === 2}
                  />
                </div>

                <div>
                  <label className="co-label" htmlFor="tel">Phone Number</label>
                  <input
                    ref={telRef}
                    className="co-input"
                    type="tel"
                    id="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required={step === 2}
                  />
                </div>

                <div className="co-full">
                  <label className="co-label" htmlFor="address">Complete Address</label>
                  <input
                    ref={addressRef}
                    className="co-input"
                    type="text"
                    id="address"
                    placeholder="Your full address with pincode"
                    required={step === 2}
                  />
                </div>

                <div>
                  <label className="co-label" htmlFor="email">Email Address</label>
                  <input
                    ref={emailRef}
                    className="co-input"
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    required={step === 2}
                  />
                </div>

                {currentAmount > 50000 && (
                  <div>
                    <label className="co-label" htmlFor="wants-80g">80G Tax Exemption</label>
                    <select
                      className="co-input"
                      id="wants-80g"
                      value={wants80G ? "yes" : "no"}
                      onChange={(e) => setWants80G(e.target.value === "yes")}
                    >
                      <option value="no">No, I do not need it</option>
                      <option value="yes">Yes, I want to avail it</option>
                    </select>
                  </div>
                )}

                {currentAmount > 50000 && wants80G && (
                  <div className="co-full">
                    <label className="co-label" htmlFor="pan">PAN Number (Required for 80G)</label>
                    <input
                      ref={panRef}
                      className="co-input"
                      type="text"
                      id="pan"
                      placeholder="ABCDE1234F"
                      required={step === 2 && wants80G}
                      style={{ textTransform: 'uppercase' }}
                    />
                  </div>
                )}
              </div>

              <button type="submit" className="co-btn" disabled={loading}>
                {loading ? (
                  <>
                    <svg style={{ width: 16, height: 16, animation: 'spin 0.7s linear infinite' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                      <path d="M12 2a10 10 0 0 1 10 10" />
                      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                    </svg>
                    Processing…
                  </>
                ) : `Donate ₹${currentAmount.toLocaleString('en-IN')}`}
              </button>

              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <button type="button" onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: '#bbb', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  ← Back to Amount
                </button>
              </div>
            </div>
          </form>

          <div className="co-secure">
            <svg width="11" height="11" fill="#582739" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
            </svg>
            Secured by Razorpay
          </div>

          <p className="co-meta">
            80G tax exemption available · Cert. Ref. XXXXXXXPF20219
          </p>

          <Link to="/" className="co-back">← Back to Home</Link>
        </div>

      </div>
    </>
  );
};

export default CheckoutPage;
