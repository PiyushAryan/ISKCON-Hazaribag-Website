import React from 'react';

const yatras = [
  {
    id: 'mayapur',
    name: 'Sri Mayapur Dham',
    desc: 'The spiritual capital and birthplace of Sri Chaitanya Mahaprabhu.',
    image: '/images/mayapur-samadhi.jpeg',
  },
  {
    id: 'vrindavan',
    name: 'Sri Vrindavan Dham',
    desc: 'The eternal playground of Lord Krishna and Srimati Radharani.',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'mathura',
    name: 'Mathura',
    desc: 'The sacred birthplace of Lord Krishna on the banks of Yamuna.',
    image: 'https://images.unsplash.com/photo-1620216664923-11bb8cba50b3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'dwarka',
    name: 'Dwarka',
    desc: 'The glorious kingdom of Lord Krishna by the western sea.',
    image: 'https://images.unsplash.com/photo-1623912643542-a7d0c75c87de?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'puri',
    name: 'Jagannath Puri',
    desc: 'The majestic abode of the Lord of the Universe, Sri Jagannath.',
    image: 'https://images.unsplash.com/photo-1549488344-c63d4fdf80f4?q=80&w=800&auto=format&fit=crop',
  }
];

const Yatras = () => {
  return (
    <>
      <style>{`
        #yatras {
          background: #fff;
          padding: 6rem 0;
          overflow: hidden;
        }

        .y-header {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem;
          margin-bottom: 3.5rem;
        }

        .y-eyebrow {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #e07b39;
          margin-bottom: 0.75rem;
          display: block;
        }

        .y-title {
          font-family: 'Merienda One', cursive;
          font-size: clamp(2.2rem, 4vw, 3rem);
          font-weight: 400;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.15;
        }

        /* Horizontal scroll track */
        .y-track {
          display: flex;
          gap: 2rem;
          overflow-x: auto;
          padding: 0 2rem 2rem;
          margin: 0 auto;
          scroll-snap-type: x mandatory;
          scroll-padding: 2rem;
          -webkit-overflow-scrolling: touch;
        }

        /* Hide scrollbar */
        .y-track::-webkit-scrollbar { display: none; }
        .y-track { -ms-overflow-style: none; scrollbar-width: none; }

        .y-card {
          flex: 0 0 320px;
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          position: relative;
          group: hover;
        }

        @media (min-width: 1100px) {
          .y-track {
            padding: 0 calc((100vw - 1100px) / 2 + 2rem) 2rem;
            scroll-padding: calc((100vw - 1100px) / 2 + 2rem);
          }
        }

        /* Image frame */
        .y-img-frame {
          width: 100%;
          border-radius: 8px;
          aspect-ratio: 4/5;
          overflow: hidden;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .y-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .y-card:hover .y-img {
          transform: scale(1.04);
        }

        /* Bottom gradient for overlay (optional, but keeps it clean) */
        .y-img-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.1), transparent 40%);
          pointer-events: none;
        }

        /* Text content */
        .y-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 0.5rem;
          letter-spacing: -0.02em;
        }

        .y-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.82rem;
          color: #666;
          line-height: 1.6;
          margin: 0 0 1rem;
        }

        .y-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #e07b39;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: gap 0.2s;
        }

        .y-link:hover { gap: 0.6rem; }
      `}</style>

      <section id="yatras">
        <div className="y-header">
          <span className="y-eyebrow">Pilgrimages</span>
          <h2 className="y-title">Sri Dham Yatras</h2>
        </div>

        <div className="y-track">
          {yatras.map((yatra) => (
            <div className="y-card" key={yatra.id}>
              <div className="y-img-frame">
                <img src={yatra.image} alt={yatra.name} className="y-img" loading="lazy" />
              </div>
              <h3 className="y-name">{yatra.name}</h3>
              <p className="y-desc">{yatra.desc}</p>
              <a href="#footer" className="y-link">
                Join Us <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Yatras;
