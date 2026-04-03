import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Chronicle from './components/Chronicle';
import Teachings from './components/Teachings';
import Yatras from './components/Yatras';
import LiveDarshan from './components/LiveDarshan';
import Donation from './components/Donation';
import Footer from './components/Footer';

import CheckoutPage from './pages/CheckoutPage';
import ConfirmPage from './pages/ConfirmPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import Prabhupada from './pages/Prabhupada';

// Main homepage assembled from all sections
function HomePage() {
  useEffect(() => {
    document.title = 'ISKCON Hazaribag - Sri Sri Radha Madhava';
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Chronicle />
      <Teachings />
      <Yatras />
      <LiveDarshan />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
