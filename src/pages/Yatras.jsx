import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import YatrasComponent from '../components/Yatras';

const YatrasPage = () => {
  useEffect(() => {
    document.title = 'Spiritual Yatras — ISKCON Hazaribag';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#faf9f7' }}>
      <Navbar />
      <div style={{ flex: 1, paddingTop: '80px', paddingBottom: '40px' }}>
        <YatrasComponent />
      </div>
      <Footer />
    </div>
  );
};

export default YatrasPage;
