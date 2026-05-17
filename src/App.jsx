import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/navbar';
import Hero from './components/hero';
import Chronicle from './components/chronicle';
import Teachings from './components/teachings';
import Festivals from './components/festivals';
import LiveDarshan from './components/live-darshan';
import Donation from './components/donation';
import Footer from './components/footer';

import CheckoutPage from './pages/CheckoutPage';
import ConfirmPage from './pages/ConfirmPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import Prabhupada from './pages/Prabhupada';
import Yatras from './pages/Yatras';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import LifeMembership from './pages/LifeMembership';
import NotFoundPage from './pages/NotFoundPage';
import RegularPrograms from './pages/RegularPrograms';
import EventsFestivals from './pages/EventsFestivals';

import FloatingMenu from './components/floating-menu';

// Main homepage assembled from all sections
function HomePage() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'ISKCON Hazaribag - Sri Sri Radha Madhava';
    
    // Check if we arrived here from another page with a scrollTo request
    if (location.state && location.state.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100); // tiny timeout ensures DOM is fully rendered before scrolling
    } else if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <Festivals />
      <LiveDarshan />
      <Chronicle />
      <Teachings />
      <Donation />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/founder-acharya" element={<Prabhupada />} />
        <Route path="/yatras" element={<Yatras />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/life-membership" element={<LifeMembership />} />
        <Route path="/regular-programs" element={<RegularPrograms />} />
        <Route path="/events-festivals" element={<EventsFestivals />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <FloatingMenu />
    </BrowserRouter>
  );
}

export default App;
