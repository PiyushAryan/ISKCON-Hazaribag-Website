import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from "motion/react";
import { animate } from "motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb"

const navItems = [
  { id: 'iskcon', label: 'About ISKCON' },
  { id: 'iskcon-hazaribag', label: 'ISKCON Hazaribag' },
  { id: 'why-krishna-consciousness', label: 'Why Krishna Consciousness?' },
  { id: 'founder-acharya', label: 'Founder-Acharya' },
];

const About = () => {
  const [activeSection, setActiveSection] = useState('iskcon');
  const sectionRefs = useRef({});

  useEffect(() => {
    document.title = 'About Us — ISKCON Hazaribag';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observers = navItems.map(item => {
      const el = sectionRefs.current[item.id];
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.id);
          }
        },
        { rootMargin: '-30% 0px -70% 0px' }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach(obs => obs?.observer?.unobserve(obs.el));
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const element = sectionRefs.current[id];
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      animate(window.scrollY, top, {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => window.scrollTo(0, latest)
      });
    }
  };

  return (
    <>
      <style>{`
        /* Hero */
        .sp-hero {
          position: relative;
          background: #fdfaf6;
          color: #2b0710;
          padding: 140px 2rem 5rem;
          min-height: 40vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
        }

        .sp-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(255, 255, 255, 0) 100%);
        }

        .sp-hero-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .sp-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #c79b28;
          margin-bottom: 1rem;
          display: block;
        }

        .sp-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          margin: 0 0 1rem;
          color: #2b0710;
        }

        /* Reading Area */
        .sp-content {
          background: #fcfcfc;
          padding: 4rem 2rem;
        }

        .sp-layout {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        @media (min-width: 900px) {
          .sp-layout {
            flex-direction: row;
            align-items: flex-start;
          }
        }

        .sp-sidebar {
          position: sticky;
          top: 100px;
          flex: 0 0 250px;
          padding-right: 2rem;
          z-index: 10;
        }

        .sp-sidenav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          border-left: 2px solid rgba(43, 7, 16, 0.1);
          padding-left: 1rem;
          position: relative;
        }

        .sp-sidenav-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #8c7a7d;
          text-decoration: none;
          transition: all 0.2s ease;
          position: relative;
          padding: 0.75rem 1rem;
          border-radius: 8px;
        }

        .sp-sidenav-link:hover {
          color: #2b0710;
          background: rgba(43, 7, 16, 0.03);
        }

        .sp-sidenav-link.active {
          color: #2b0710;
        }

        .sp-sidenav-active-indicator {
          position: absolute;
          inset: 0;
          background: rgba(199, 155, 40, 0.12);
          border-radius: 8px;
          z-index: 0;
        }

        .sp-main {
          flex: 1;
          min-width: 0;
        }

        .sp-section {
          margin: 0 0 8rem;
          scroll-margin-top: 100px;
        }

        .sp-section-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 800;
          color: #2b0710;
          margin-bottom: 2rem;
          text-align: left;
          line-height: 1.2;
        }

        .sp-article {
          font-family: 'Montserrat', sans-serif;
          color: #4a3a3d;
          line-height: 1.8;
          font-size: 1.05rem;
        }

        .sp-article p {
          margin-bottom: 1.5rem;
        }

        .sp-article p:first-of-type::first-letter {
          font-family: 'Cormorant Garamond', serif;
          float: left;
          font-size: 5.5rem;
          line-height: 0.8;
          padding-top: 4px;
          padding-right: 12px;
          color: #c79b28;
          font-weight: 600;
        }

        /* Grid Layouts for Images */
        .sp-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .sp-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
          .sp-grid.reverse .sp-article-wrapper {
            order: 2;
          }
          .sp-grid.reverse .sp-image-wrapper {
            order: 1;
          }
        }

        .sp-image-wrapper {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 24px 50px rgba(0,0,0,0.1);
          aspect-ratio: 4/3;
        }

        .sp-image-wrapper.portrait {
          aspect-ratio: 3/4;
        }

        .sp-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 0 1px rgba(43, 7, 16, 0.1);
          border-radius: 16px;
          pointer-events: none;
        }

        .sp-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sp-image-wrapper:hover .sp-image {
          transform: scale(1.05);
        }

        .sp-image-wrapper.splash {
          border-radius: 43% 57% 72% 28% / 36% 65% 35% 64%;
          animation: splashMorph 8s ease-in-out infinite;
          box-shadow: 0 30px 60px rgba(0,0,0,0.08);
        }

        .sp-image-wrapper.splash::after {
          animation: splashMorph 8s ease-in-out infinite;
        }

        @keyframes splashMorph {
          0% {
            border-radius: 43% 57% 72% 28% / 36% 65% 35% 64%;
          }
          33% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          66% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          100% {
            border-radius: 43% 57% 72% 28% / 36% 65% 35% 64%;
          }
        }

        .sp-splash-bg {
          position: relative;
          z-index: 1;
        }

        .sp-splash-bg::before {
          content: '';
          position: absolute;
          inset: -25px;
          background: linear-gradient(135deg, rgba(199, 155, 40, 0.2), rgba(199, 155, 40, 0.05));
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: splashMorphReverse 12s ease-in-out infinite alternate;
          z-index: -1;
        }

        @keyframes splashMorphReverse {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(0deg); }
          50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; transform: rotate(2deg); }
          100% { border-radius: 50% 50% 30% 70% / 30% 70% 70% 30%; transform: rotate(-2deg); }
        }

        /* Prabhupada Specific */
        .sp-founder-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
          margin-bottom: 4rem;
          text-align: center;
        }

        .sp-founder-img-wrap {
          position: relative;
          width: 280px;
          height: 380px;
          border-radius: 12px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.15);
          overflow: hidden;
        }

        .sp-founder-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: sepia(0.2) contrast(1.05);
        }

        @media (min-width: 768px) {
          .sp-founder-header {
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
          }
          .sp-founder-img-wrap {
            flex: 0 0 320px;
            height: 420px;
          }
        }

        .sp-quote-block {
          margin: 4rem 0;
          padding: 3rem;
          background: #ffffff;
          border: 1px solid rgba(43, 7, 16, 0.05);
          border-left: 4px solid #c79b28;
          border-radius: 0 16px 16px 0;
          box-shadow: 0 24px 40px rgba(0,0,0,0.05);
        }

        .sp-quote-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-style: italic;
          color: #2b0710;
          line-height: 1.5;
          margin: 0;
        }

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
          background: #ffffff;
          border: 1px solid rgba(43, 7, 16, 0.05);
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .sp-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.8rem;
          color: #c79b28;
          font-weight: 600;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .sp-stat-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 700;
          color: #7a6669;
        }
        
        .breadcrumb-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        /* Override shadcn breadcrumb text colors */
        .breadcrumb-wrapper nav ol li a,
        .breadcrumb-wrapper nav ol li span {
          color: #8c7a7d;
        }
        .breadcrumb-wrapper nav ol li a:hover {
          color: #2b0710;
        }
        .breadcrumb-wrapper nav ol li:last-child span {
          color: #2b0710;
          font-weight: 600;
        }
        .breadcrumb-wrapper svg {
          color: rgba(43, 7, 16, 0.3);
        }

        .sp-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 3rem;
        }
        @media (min-width: 768px) {
          .sp-cards-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        .sp-card {
          background: #ffffff;
          border: 1px solid rgba(43, 7, 16, 0.05);
          border-radius: 16px;
          padding: 2.5rem 2rem;
          transition: transform 0.3s ease, background 0.3s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
        }
        .sp-card:hover {
          transform: translateY(-5px);
          background: #fdfaf6;
          border-color: rgba(199, 155, 40, 0.3);
        }
        .sp-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          color: #2b0710;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .sp-cta-block {
          text-align: center;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #542e3a, #2b0710);
          border-radius: 20px;
          margin-top: 5rem;
          border: 1px solid rgba(199, 155, 40, 0.2);
        }
        .sp-cta-block h3 {
          font-family: 'Montserrat', sans-serif;
          font-size: 2rem;
          color: #c79b28;
          margin-bottom: 1.5rem;
          font-weight: 800;
        }
      `}</style>

      <Navbar />

      <header className="sp-hero">
        <div className="sp-hero-container">
          <div className="breadcrumb-wrapper">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>About Us</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="sp-eyebrow">Discover Our Mission</span>
            <h1 className="sp-title">About Us</h1>
          </motion.div>
        </div>
      </header>

      <section className="sp-content">
        <div className="sp-layout">
          <aside className="sp-sidebar">
            <nav className="sp-sidenav">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`sp-sidenav-link ${isActive ? 'active' : ''}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="sp-sidenav-active-indicator"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span style={{ position: 'relative', zIndex: 1 }}>{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </aside>
          
          <div className="sp-main">
            {/* About ISKCON */}
            <motion.div 
              className="sp-section" 
              id="iskcon"
              ref={(el) => (sectionRefs.current['iskcon'] = el)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="sp-section-title">About ISKCON</h2>
              <div className="sp-grid">
                <div className="sp-article-wrapper">
                  <article className="sp-article">
                    <p>
                      The International Society for Krishna Consciousness (ISKCON), otherwise known as the Hare Krishna movement, includes five hundred major centers, temples, and rural communities, nearly one hundred affiliated vegetarian restaurants, thousands of namahattas or local meeting groups, a wide variety of community projects, and millions of congregational members worldwide.
                    </p>
                    <p>
                      ISKCON belongs to the Gaudiya-Vaishnava sampradaya, a monotheistic tradition within the Vedic or Hindu culture. Philosophically it is based on the Sanskrit texts Bhagavad-gita and the Bhagavat Purana, or Srimad Bhagavatam. These are the historic texts of the devotional bhakti yoga tradition, which teaches that the ultimate goal for all living beings is to reawaken their love for God, or Lord Krishna, the "all-attractive one".
                    </p>
                  </article>
                </div>
                <div className="sp-splash-bg">
                  <div className="sp-image-wrapper splash">
                    <img src="/images/about-iskcon.png" alt="Hare Krishna Movement" className="sp-image" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About ISKCON Hazaribag */}
            <motion.div 
              className="sp-section" 
              id="iskcon-hazaribag"
              ref={(el) => (sectionRefs.current['iskcon-hazaribag'] = el)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="sp-section-title">About ISKCON Hazaribag</h2>
              <div className="sp-grid reverse">
                <div className="sp-article-wrapper">
                  <article className="sp-article">
                    <p>
                      ISKCON Hazaribag serves as a spiritual oasis in the heart of Jharkhand, dedicated to spreading the message of love, peace, and spiritual harmony as taught by Lord Chaitanya Mahaprabhu. Since its inception, the temple has been a vibrant center for Vedic education, cultural festivals, and community service.
                    </p>
                    <p>
                      Our center focuses on empowering individuals through the teachings of the Bhagavad Gita, hosting grand festivals like Janmashtami and Rath Yatra, and conducting extensive food distribution (Food for Life) to serve the local community. We welcome everyone, regardless of background, to experience the profound joy of Krishna consciousness.
                    </p>
                  </article>
                </div>
                <div className="sp-splash-bg">
                  <div className="sp-image-wrapper splash portrait">
                    <img src="/images/iskcon-rm.jpg" alt="ISKCON Hazaribag Temple" className="sp-image" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why Krishna Consciousness */}
            <motion.div 
              className="sp-section" 
              id="why-krishna-consciousness"
              ref={(el) => (sectionRefs.current['why-krishna-consciousness'] = el)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="sp-section-title">Why this Krishna Consciousness Movement?</h2>
              <article className="sp-article">
                <p>
                  In today’s fast-paced, materialistic world, stress, anxiety, and emptiness plague countless lives. People chase temporary pleasures—wealth, fame, relationships—yet remain unsatisfied, searching for deeper meaning. Krishna consciousness offers what modern society desperately lacks: true purpose, inner peace, and everlasting joy. It is not merely a philosophy but a timeless science of the soul, revealing our eternal identity beyond the temporary body. By reconnecting with Krishna, the source of all existence, we awaken to real happiness—unshaken by external circumstances.
                </p>

                <h3 className="sp-section-title" style={{ fontSize: '2rem', marginTop: '4rem', marginBottom: '1rem' }}>Why do we need Krishna Consciousness?</h3>
                
                <div className="sp-cards-grid">
                  <div className="sp-card">
                    <h4 className="sp-card-title">1. A Remedy for Modern Chaos</h4>
                    <p style={{ margin: 0, fontSize: '0.95rem' }}>
                      Today's world overwhelms us with endless distractions—social media, empty entertainment, and artificial connections. Krishna consciousness cuts through this noise by anchoring the mind in what truly matters. Through chanting Hare Krishna and studying Bhagavad Gita's wisdom, we gain clarity and inner stillness, discovering life's true purpose.
                    </p>
                  </div>
                  <div className="sp-card">
                    <h4 className="sp-card-title">2. Freedom from Anxiety & Depression</h4>
                    <p style={{ margin: 0, fontSize: '0.95rem' }}>
                      Mental health struggles surge as people drift from their spiritual essence. The sacred Hare Krishna mantra purifies the mind of negativity, while loving service to the Divine fills the heart with transcendental joy. By reconnecting with Krishna, we awaken to lasting peace that no material circumstance can shake.
                    </p>
                  </div>
                  <div className="sp-card">
                    <h4 className="sp-card-title">3. A Solution to Violence & Greed</h4>
                    <p style={{ margin: 0, fontSize: '0.95rem' }}>
                      Our world's crises stem from forgetting our divine connection. Devotees embrace nonviolence (ahimsa), choosing plant-based diets that honor creation. Greed dissolves as we find fulfillment in serving rather than acquiring. When we recognize the divine in all beings, competition gives way to cooperation.
                    </p>
                  </div>
                  <div className="sp-card">
                    <h4 className="sp-card-title">4. Real Family & Community</h4>
                    <p style={{ margin: 0, fontSize: '0.95rem' }}>
                      In today's disconnected world, ISKCON offers a global spiritual family united in divine love. Our temples become hubs of authentic connection, where relationships transcend superficial interests. As artificial social networks leave people empty, our Krishna-centered sanga fills hearts with the warmth of genuine spiritual kinship.
                    </p>
                  </div>
                </div>


                <div className="sp-cta-block">
                  <h3>Start Your Journey Today</h3>
                  <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem', color: '#fdfaf6' }}>
                    Krishna consciousness is not an escape from life but the art of living fully—with awareness, joy, and love. Come. Discover the happiness you’ve been searching for.
                  </p>
                  <a href="/" style={{ 
                    display: 'inline-block', 
                    padding: '1rem 2.5rem', 
                    background: '#c79b28', 
                    color: '#fdfaf6', 
                    textDecoration: 'none', 
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    borderRadius: '50px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    transition: 'transform 0.2s ease',
                  }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                    Visit the Temple
                  </a>
                </div>
              </article>
            </motion.div>

            {/* Founder Acharya */}
            <motion.div 
              className="sp-section" 
              id="founder-acharya"
              ref={(el) => (sectionRefs.current['founder-acharya'] = el)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="sp-founder-header">
                <div className="sp-founder-img-wrap">
                  <img 
                    src="https://anvfnzuaen.cloudimg.io/cdno/n/webp/https://sppb.blob.core.windows.net/images/splilawebsite/prabhupada/ic_sp_lila_8.jpg" 
                    alt="Srila Prabhupada" 
                  />
                </div>
                <div>
                  <span className="sp-eyebrow" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>Founder-Acharya</span>
                  <h2 className="sp-section-title" style={{ marginBottom: '1rem' }}>His Divine Grace A.C. Bhaktivedanta Swami Prabhupada</h2>
                  <p className="sp-article" style={{ fontSize: '1.2rem', fontStyle: 'italic', fontFamily: '"Cormorant Garamond", serif', color: '#7a6669' }}>
                    The Ambassador of Bhakti to the Modern World
                  </p>
                </div>
              </div>

              <article className="sp-article">
                <p>
                  Born as Abhay Charan De in 1896 in Calcutta, India, His Divine Grace A.C. Bhaktivedanta Swami Prabhupada grew up in a pious Vaishnava family. In 1922, he met his spiritual master, Srila Bhaktisiddhanta Sarasvati Thakura, who requested him to preach the message of Lord Chaitanya Mahaprabhu in the English-speaking world.
                </p>

                <p>
                  It was not until 1965, at the advanced age of 69, that Srila Prabhupada boarded the Jaladuta cargo ship bound for the United States. Enduring a challenging voyage that included two heart attacks, he arrived in New York with nothing but thirty-five rupees and a trunk full of his translations of the Srimad-Bhagavatam.
                </p>

                <div className="sp-grid" style={{ margin: '4rem 0' }}>
                  <div className="sp-splash-bg">
                    <div className="sp-image-wrapper splash">
                      <img src="/images/TOVP.jpeg" alt="Spiritual Movement" className="sp-image" />
                    </div>
                  </div>
                  <div className="sp-article-wrapper">
                    <p>
                      In July 1966, amidst the counterculture movement of the Lower East Side, he officially founded the International Society for Krishna Consciousness (ISKCON). What began as a small storefront gathering soon blossomed into a global spiritual revolution.
                    </p>
                    <p>
                      Over the next eleven years, Srila Prabhupada circled the globe fourteen times on lecture tours, bringing the teachings of Krishna consciousness to six continents. He initiated thousands of disciples, established farm communities, opened gurukulas, and guided his followers in establishing the world's largest vegetarian food relief program.
                    </p>
                  </div>
                </div>

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

                <div className="sp-quote-block">
                  <p className="sp-quote-text">
                    "We are not these bodies; we are spirit souls. The body is just like a dress. Just as we change our worn-out clothes, the soul changes bodies from one life to the next."
                  </p>
                </div>

                <p>
                  Despite his immense administrative duties, Srila Prabhupada's most significant contribution remains his books. Highly respected by the academic community for their authority, depth, and clarity, his writings have been translated into over eighty languages. The Bhaktivedanta Book Trust, established in 1972 exclusively to publish his works, has become the world’s largest publisher of books in the field of Indian religion and philosophy.
                </p>
              </article>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
