import React, { useState, useEffect, useCallback } from 'react';

const teachings = [
  {
    quote: "You should not be carried away by the dictation of the mind, but the mind should be carried by your dictation.",
    author: "A. C. Bhaktivedanta Swami Prabhupada",
    role: "Founder-Acharya, ISKCON",
    image: "https://anvfnzuaen.cloudimg.io/cdno/n/webp/https://sppb.blob.core.windows.net/images/splilawebsite/prabhupada/ic_sp_lila_8.jpg",
  },
  {
    quote: "Be like a tree. The tree gives shade even to him who cuts off its boughs.",
    author: "Shri Chaitanya Mahaprabhu",
    role: "The Golden Avatar",
    image: "images/srichaitanya001901.jpg",
  },
];

const Teachings = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const switchTo = useCallback((idx) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  }, [animating, current]);

  useEffect(() => {
    const timer = setInterval(() => {
      switchTo((current + 1) % teachings.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, switchTo]);

  const t = teachings[current];

  return (
    <>
      <style>{`
        #DiscoverMore {
          background: #1a0a00;
          padding: 7rem 2rem;
          position: relative;
          overflow: hidden;
        }

        /* Subtle texture overlay */
        #DiscoverMore::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 60% 50%, rgba(224,123,57,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .tc-inner {
          max-width: 860px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Eyebrow */
        .tc-eyebrow {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #e07b39;
          margin-bottom: 3.5rem;
          font-family: 'Montserrat', sans-serif;
          display: block;
          text-align: center;
        }

        /* Quote block */
        .tc-quote-wrap {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .tc-quote-wrap.fade-out {
          opacity: 0;
          transform: translateY(8px);
        }

        /* Opening mark */
        .tc-mark {
          font-family: Georgia, serif;
          font-size: 5rem;
          line-height: 0.6;
          color: #e07b39;
          opacity: 0.35;
          display: block;
          margin-bottom: 1.5rem;
          user-select: none;
        }

        /* Quote text */
        .tc-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-style: italic;
          font-weight: 300;
          font-size: clamp(1.5rem, 3.2vw, 2.2rem);
          line-height: 1.65;
          color: #f5ede4;
          margin: 0 0 2.5rem;
          letter-spacing: 0.01em;
        }

        /* Author row */
        .tc-author-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .tc-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(224,123,57,0.4);
          flex-shrink: 0;
        }
        .tc-author-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          color: #f5ede4;
          margin: 0 0 0.2rem;
        }
        .tc-author-role {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          color: rgba(245,237,228,0.45);
          font-weight: 500;
          letter-spacing: 0.04em;
          margin: 0;
        }

        /* Divider */
        .tc-divider {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.08);
          margin: 0 0.5rem;
          flex-shrink: 0;
        }

        /* Dot nav */
        .tc-dots {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-left: auto;
        }
        .tc-dot {
          width: 20px;
          height: 2px;
          background: rgba(255,255,255,0.15);
          border: none;
          border-radius: 2px;
          cursor: pointer;
          padding: 0;
          transition: background 0.3s, width 0.3s;
        }
        .tc-dot.active {
          background: #e07b39;
          width: 32px;
        }

        /* ── Mobile Responsive ── */
        @media (max-width: 768px) {
          #DiscoverMore {
            padding: 3rem 1.25rem;
          }
          .tc-eyebrow {
            margin-bottom: 2rem;
          }
          .tc-mark {
            font-size: 3rem;
            margin-bottom: 0.5rem;
          }
          .tc-text {
            font-size: 1.6rem;
            line-height: 1.5;
            margin-bottom: 2rem;
          }
          .tc-author-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            background: rgba(255,255,255,0.03);
            border-radius: 12px;
            padding: 1.25rem;
          }
          .tc-divider {
            display: none;
          }
          .tc-dots {
            margin-left: 0;
            margin-top: 0.5rem;
          }
        }
      `}</style>

      <section id="DiscoverMore">
        <div className="tc-inner">

          <span className="tc-eyebrow">Words of Wisdom</span>

          <div className={`tc-quote-wrap${animating ? ' fade-out' : ''}`}>
            <span className="tc-mark">"</span>
            <p className="tc-text">{t.quote}</p>

            <div className="tc-author-row">
              <img className="tc-avatar" src={t.image} alt={t.author} />
              <div>
                <p className="tc-author-name">{t.author}</p>
                <p className="tc-author-role">{t.role}</p>
              </div>

              <div className="tc-divider" />

              <div className="tc-dots">
                {teachings.map((_, i) => (
                  <button
                    key={i}
                    className={`tc-dot${i === current ? ' active' : ''}`}
                    onClick={() => switchTo(i)}
                    aria-label={`Go to quote ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Teachings;
