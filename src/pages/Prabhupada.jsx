import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Prabhupada = () => {
  useEffect(() => {
    document.title = 'Founder-Acharya — ISKCON Hazaribag';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        /* Hero */
        .sp-hero {
          position: relative;
          background: #2b0710;
          color: #fff7c2;
          padding: 140px 2rem 5rem;
          min-height: 80vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .sp-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(246, 212, 123, 0.1) 0%, rgba(43, 7, 16, 0) 100%);
        }

        .sp-hero-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column-reverse;
          gap: 3rem;
          width: 100%;
        }

        @media (min-width: 900px) {
          .sp-hero-container {
            flex-direction: row;
            align-items: center;
          }
        }

        .sp-hero-content {
          flex: 1;
        }

        .sp-hero-img-wrapper {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .sp-hero-img {
          width: 100%;
          max-width: 480px;
          border-radius: 8px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.6);
          filter: sepia(0.2) contrast(1.1);
        }

        .sp-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #f6d47b;
          margin-bottom: 1.5rem;
          display: block;
        }

        .sp-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          line-height: 1.1;
          margin: 0 0 1rem;
          color: #fff7c2;
        }

        .sp-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          font-style: italic;
          color: rgba(255, 247, 194, 0.8);
          margin: 0 0 2rem;
        }

        /* Reading Area */
        .sp-content {
          background: #542e3a;
          padding: 6rem 2rem;
        }

        .sp-article {
          max-width: 720px;
          margin: 0 auto;
          font-family: 'Montserrat', sans-serif;
          color: rgba(255, 247, 194, 0.85);
          line-height: 1.8;
          font-size: 1.05rem;
        }

        .sp-article p {
          margin-bottom: 2rem;
        }

        .sp-article p:first-of-type::first-letter {
          font-family: 'Cormorant Garamond', serif;
          float: left;
          font-size: 5.5rem;
          line-height: 0.8;
          padding-top: 4px;
          padding-right: 12px;
          color: #f6d47b;
          font-weight: 600;
        }

        .sp-quote-block {
          margin: 4rem 0;
          padding: 3rem;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-left: 4px solid #f6d47b;
          border-radius: 0 12px 12px 0;
          box-shadow: 0 24px 40px rgba(0,0,0,0.2);
        }

        .sp-quote-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-style: italic;
          color: #fff7c2;
          line-height: 1.5;
          margin: 0;
        }

        /* Achievements Grid */
        .sp-achievements {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin: 5rem 0;
        }

        @media (min-width: 768px) {
          .sp-achievements { grid-template-columns: repeat(3, 1fr); }
        }

        .sp-stat {
          text-align: center;
          padding: 2.5rem 1.5rem;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }

        .sp-stat:hover {
          transform: translateY(-5px);
        }

        .sp-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
          color: #f6d47b;
          font-weight: 600;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .sp-stat-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
          color: rgba(255, 247, 194, 0.7);
        }
      `}</style>

      <Navbar />

      <header className="sp-hero">
        <div className="sp-hero-container">
          <div className="sp-hero-content">
            <span className="sp-eyebrow">Founder-Acharya</span>
            <h1 className="sp-title">His Divine Grace A.C. Bhaktivedanta Swami Prabhupada</h1>
            <p className="sp-subtitle">The Ambassador of Bhakti to the Modern World</p>
          </div>
          <div className="sp-hero-img-wrapper">
            <img 
              src="https://anvfnzuaen.cloudimg.io/cdno/n/webp/https://sppb.blob.core.windows.net/images/splilawebsite/prabhupada/ic_sp_lila_8.jpg" 
              alt="Srila Prabhupada" 
              className="sp-hero-img"
            />
          </div>
        </div>
      </header>

      <section className="sp-content">
        <article className="sp-article">
          <p>
            Born as Abhay Charan De in 1896 in Calcutta, India, His Divine Grace A.C. Bhaktivedanta Swami Prabhupada grew up in a pious Vaishnava family. In 1922, he met his spiritual master, Srila Bhaktisiddhanta Sarasvati Thakura, who requested him to preach the message of Lord Chaitanya Mahaprabhu in the English-speaking world.
          </p>

          <p>
            It was not until 1965, at the advanced age of 69, that Srila Prabhupada boarded the Jaladuta cargo ship bound for the United States. Enduring a challenging voyage that included two heart attacks, he arrived in New York with nothing but thirty-five rupees and a trunk full of his translations of the Srimad-Bhagavatam.
          </p>

          <p>
            In July 1966, amidst the counterculture movement of the Lower East Side, he officially founded the International Society for Krishna Consciousness (ISKCON). What began as a small storefront gathering soon blossomed into a global spiritual revolution.
          </p>

          <div className="sp-achievements">
            <div className="sp-stat">
              <div className="sp-stat-num">108</div>
              <div className="sp-stat-label">Temples Founded</div>
            </div>
            <div className="sp-stat">
              <div className="sp-stat-num">80+</div>
              <div className="sp-stat-label">Books Published</div>
            </div>
            <div className="sp-stat">
              <div className="sp-stat-num">14</div>
              <div className="sp-stat-label">Global Tours</div>
            </div>
          </div>

          <p>
            Over the next eleven years, Srila Prabhupada circled the globe fourteen times on lecture tours, bringing the teachings of Krishna consciousness to six continents. He initiated thousands of disciples, established farm communities, opened gurukulas (traditional educational institutions), and guided his followers in establishing the world's largest vegetarian food relief program, Food for Life.
          </p>

          <div className="sp-quote-block">
            <p className="sp-quote-text">
              "We are not these bodies; we are spirit souls. The body is just like a dress. Just as we change our worn-out clothes, the soul changes bodies from one life to the next."
            </p>
          </div>

          <p>
            Despite his immense administrative duties, Srila Prabhupada's most significant contribution remains his books. Highly respected by the academic community for their authority, depth, and clarity, his writings have been translated into over eighty languages. The Bhaktivedanta Book Trust, established in 1972 exclusively to publish his works, has become the world’s largest publisher of books in the field of Indian religion and philosophy.
          </p>
        </article>
      </section>

      <Footer />
    </>
  );
};

export default Prabhupada;
