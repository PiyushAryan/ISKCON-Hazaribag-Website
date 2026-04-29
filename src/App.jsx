import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Chronicle from './components/Chronicle';
import Teachings from './components/Teachings';
import Festivals from './components/Festivals';
import LiveDarshan from './components/LiveDarshan';
import Donation from './components/Donation';
import Footer from './components/Footer';

import CheckoutPage from './pages/CheckoutPage';
import ConfirmPage from './pages/ConfirmPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import Prabhupada from './pages/Prabhupada';
import Yatras from './pages/Yatras';
import Contact from './pages/Contact';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
