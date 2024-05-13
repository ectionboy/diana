import styled from 'styled-components';

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  //   max-width: 375px;
  margin: 0 auto;
  /* width: 100%; */
  padding: 20px 10px;
  background-color: #1F1F1F;
  font-family: 'Montserrat', sans-serif;

  //   @media screen and (min-width: 768px) {
  //     max-width: 768px;
  //     padding-left: 32px;
  //     padding-right: 32px;
  //     padding-top: '50px';
  //   }

  //   @media screen and (min-width: 1440px) {
  //     max-width: 1440px;
  //     padding-left: 128px;
  //     padding-right: 128px;
  //   }
`;
export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AboutMeTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.5;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 16px;
`;
export const AboutMeText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #FFFFFF;
  max-width: 810px;
  text-align: center;
`;
