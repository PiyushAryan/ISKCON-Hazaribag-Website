import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import YatrasComponent from '../components/yatras';

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
