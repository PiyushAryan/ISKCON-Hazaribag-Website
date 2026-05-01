import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const galleryItems = [
  {
    title: 'Harinaam Sankirtan',
    category: 'Procession',
    image: '/gallery/image.png',
  },
  {
    title: 'Snan Yatra',
    category: 'Festivals',
    image: '/gallery/image copy.png',
  },
  {
    title: 'Rath Yatra Gathering',
    category: 'Procession',
    image: '/gallery/image copy 2.png',
  },
  {
    title: 'Nagar Sankirtan',
    category: 'Procession',
    image: '/gallery/image copy 3.png',
  },
  {
    title: 'Pushpa Abhishek',
    category: 'Festivals',
    image: '/gallery/image copy 4.png',
  },
  {
    title: 'Sri Jagannath Baladeva Subhadra',
    category: 'Darshan',
    image: '/gallery/image copy 5.png',
  },
  {
    title: 'ISKCON Hazaribag Community',
    category: 'Temple',
    image: '/gallery/image copy 6.png',
  },
  {
    title: 'Devotee Assembly',
    category: 'Temple',
    image: '/gallery/image copy 7.png',
  },
];

const categories = ['All', ...Array.from(new Set(galleryItems.map((item) => item.category)))];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const visibleItems = useMemo(() => {
    if (activeCategory === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const selectedItem = selectedIndex === null ? null : visibleItems[selectedIndex];

  useEffect(() => {
    document.title = 'Gallery — ISKCON Hazaribag';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedItem ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

  const showPrevious = () => {
    setSelectedIndex((index) => (index === null ? 0 : (index - 1 + visibleItems.length) % visibleItems.length));
  };

  const showNext = () => {
    setSelectedIndex((index) => (index === null ? 0 : (index + 1) % visibleItems.length));
  };

  return (
    <>
      <style>{`
        .gallery-root {
          min-height: 100vh;
          background: #fffaf0;
          color: #321017;
          font-family: 'Montserrat', sans-serif;
          display: flex;
          flex-direction: column;
        }

        .gallery-hero {
          position: relative;
          min-height: 62vh;
          padding: 150px 2rem 5rem;
          display: flex;
          align-items: end;
          color: #fff7c2;
          overflow: hidden;
        }

        .gallery-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(26, 4, 9, 0.24) 0%, rgba(26, 4, 9, 0.86) 100%),
            url('/gallery/image copy 6.png') center/cover;
        }

        .gallery-hero-inner {
          position: relative;
          z-index: 1;
          width: min(1120px, 100%);
          margin: 0 auto;
        }

        .gallery-kicker {
          display: block;
          margin-bottom: 0.9rem;
          color: #f6d47b;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .gallery-title {
          margin: 0;
          color: #fff7c2;
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 0.95;
          font-weight: 900;
          letter-spacing: 0;
        }

        .gallery-subtitle {
          max-width: 660px;
          margin: 1.3rem 0 0;
          color: rgba(255, 247, 194, 0.84);
          font-size: clamp(1rem, 2vw, 1.18rem);
          line-height: 1.7;
        }

        .gallery-main {
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
          padding: 3rem 0 5rem;
          flex: 1;
        }

        .gallery-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .gallery-count {
          color: #6b3b22;
          font-size: 0.88rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .gallery-filters {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .gallery-filter {
          margin: 0;
          border: 1px solid rgba(88, 39, 57, 0.2);
          border-radius: 999px;
          background: #fff;
          color: #582739;
          padding: 0.65rem 1rem;
          font: inherit;
          font-size: 0.78rem;
          font-weight: 800;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }

        .gallery-filter.active,
        .gallery-filter:hover {
          background: #582739;
          border-color: #582739;
          color: #fff7c2;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 280px;
          grid-auto-flow: dense;
          gap: 1.2rem;
        }

        .gallery-tile {
          position: relative;
          grid-column: span 1;
          grid-row: span 1;
          border: 0;
          border-radius: 24px;
          overflow: hidden;
          padding: 0;
          margin: 0;
          background: #2b0710;
          cursor: zoom-in;
          box-shadow: 0 16px 36px rgba(52, 16, 23, 0.12);
        }

        .gallery-tile:nth-child(8n + 1) {
          grid-column: span 2;
          grid-row: span 2;
        }

        .gallery-tile:nth-child(8n + 4) {
          grid-column: span 1;
          grid-row: span 2;
        }

        .gallery-tile:nth-child(8n + 5) {
          grid-column: span 2;
          grid-row: span 1;
        }

        .gallery-tile:nth-child(8n + 8) {
          grid-column: span 2;
          grid-row: span 2;
        }

        .gallery-tile img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-tile:hover img {
          transform: scale(1.06);
        }

        .gallery-tile-caption {
          position: absolute;
          inset: auto 0 0;
          padding: 3rem 1rem 1rem;
          background: linear-gradient(180deg, rgba(26, 4, 9, 0) 0%, rgba(26, 4, 9, 0.82) 100%);
          color: #fff7c2;
          text-align: left;
        }

        .gallery-tile-title {
          display: block;
          font-size: 0.95rem;
          font-weight: 900;
        }

        .gallery-tile-category {
          display: block;
          margin-top: 0.2rem;
          color: #f6d47b;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .gallery-lightbox {
          position: fixed;
          inset: 0;
          z-index: 2000;
          padding: 1.5rem;
          background: rgba(18, 4, 8, 0.88);
          backdrop-filter: blur(16px);
          display: grid;
          place-items: center;
        }

        .gallery-lightbox-frame {
          position: relative;
          width: min(1040px, 100%);
        }

        .gallery-lightbox-img {
          width: 100%;
          max-height: 78vh;
          object-fit: contain;
          display: block;
          border-radius: 8px;
          background: #1a0409;
          box-shadow: 0 26px 70px rgba(0, 0, 0, 0.34);
        }

        .gallery-lightbox-meta {
          margin-top: 1rem;
          color: #fff7c2;
        }

        .gallery-lightbox-meta strong {
          display: block;
          font-size: 1.2rem;
        }

        .gallery-lightbox-meta span {
          display: block;
          margin-top: 0.25rem;
          color: #f6d47b;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .gallery-lightbox-btn {
          position: absolute;
          margin: 0;
          border: 1px solid rgba(255, 247, 194, 0.28);
          border-radius: 999px;
          background: rgba(255, 247, 194, 0.12);
          color: #fff7c2;
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .gallery-lightbox-btn:hover {
          background: #fff7c2;
          color: #582739;
        }

        .gallery-lightbox-close {
          top: -58px;
          right: 0;
        }

        .gallery-lightbox-prev,
        .gallery-lightbox-next {
          top: 50%;
          transform: translateY(-50%);
        }

        .gallery-lightbox-prev {
          left: -64px;
        }

        .gallery-lightbox-next {
          right: -64px;
        }

        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 240px;
          }

          .gallery-tile:nth-child(1n) {
            grid-column: span 1;
            grid-row: span 1;
          }

          .gallery-tile:nth-child(3n + 1) {
            grid-column: span 2;
            grid-row: span 2;
          }

          .gallery-lightbox-prev {
            left: 0.75rem;
          }

          .gallery-lightbox-next {
            right: 0.75rem;
          }
        }

        @media (max-width: 620px) {
          .gallery-hero {
            min-height: 56vh;
            padding: 120px 1rem 3rem;
          }

          .gallery-main {
            padding-top: 2rem;
          }

          .gallery-toolbar {
            align-items: flex-start;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 300px;
          }

          .gallery-tile:nth-child(1n) {
            grid-column: 1 / -1;
            grid-row: span 1;
          }

          .gallery-filter {
            padding: 0.58rem 0.82rem;
          }

          .gallery-lightbox {
            padding: 1rem;
          }

          .gallery-lightbox-close {
            top: -54px;
          }
        }
      `}</style>

      <div className="gallery-root">
        <Navbar />

        <header className="gallery-hero">
          <div className="gallery-hero-inner">
            <span className="gallery-kicker">Temple Memories</span>
            <h1 className="gallery-title">Gallery</h1>
            <p className="gallery-subtitle">
              Darshan, festivals, seva, and community moments from ISKCON Hazaribag.
            </p>
          </div>
        </header>

        <main className="gallery-main">
          <div className="gallery-toolbar">
            <span className="gallery-count">{visibleItems.length} photos</span>
            <div className="gallery-filters" aria-label="Gallery categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`gallery-filter ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedIndex(null);
                    setActiveCategory(category);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <section className="gallery-grid" aria-label="Photo gallery">
            {visibleItems.map((item, index) => (
              <button
                key={`${item.title}-${item.image}`}
                type="button"
                className="gallery-tile"
                onClick={() => setSelectedIndex(index)}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="gallery-tile-caption">
                  <span className="gallery-tile-title">{item.title}</span>
                  <span className="gallery-tile-category">{item.category}</span>
                </span>
              </button>
            ))}
          </section>
        </main>

        <Footer />
      </div>

      {selectedItem && (
        <div className="gallery-lightbox" onClick={() => setSelectedIndex(null)}>
          <div className="gallery-lightbox-frame" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="gallery-lightbox-btn gallery-lightbox-close"
              aria-label="Close gallery image"
              onClick={() => setSelectedIndex(null)}
            >
              x
            </button>
            <button
              type="button"
              className="gallery-lightbox-btn gallery-lightbox-prev"
              aria-label="Previous gallery image"
              onClick={showPrevious}
            >
              ‹
            </button>
            <img className="gallery-lightbox-img" src={selectedItem.image} alt={selectedItem.title} />
            <button
              type="button"
              className="gallery-lightbox-btn gallery-lightbox-next"
              aria-label="Next gallery image"
              onClick={showNext}
            >
              ›
            </button>
            <div className="gallery-lightbox-meta">
              <strong>{selectedItem.title}</strong>
              <span>{selectedItem.category}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
