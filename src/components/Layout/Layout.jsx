import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
