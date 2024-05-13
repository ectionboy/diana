import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main
        style={{
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
