// import { Container } from '@mui/material';
// import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <Container
        maxWidth="xl"
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          // pt: '20px',
          // pb: '20px',
           paddingLeft: '0px',
           paddingRight: '0px',
          xs: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxWidth: '375px',
            margin: ' 0 auto',
            width: '100%',
            paddingLeft: '0px',
            paddingRight: '0px',
            // paddingLeft: '20px',
            // paddingRight: '20px',
            // gap: '50px',
          },
          sm: {
            maxWidth: '600px',
            paddingLeft: '0px',
            paddingRight: '0px',
            // paddingLeft: '32px',
            // paddingRight: '32px',
          },
          xl: {
            maxWidth: '1440px',
            paddingLeft: '0px',
            paddingRight: '0px',
            // paddingLeft: '128px',
            // paddingRight: '128px',
          },
        }}
      >
        
      </Container> */}
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
