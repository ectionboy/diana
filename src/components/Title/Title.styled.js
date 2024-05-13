import styled from 'styled-components';

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
     /* max-width: 375px; */
  margin: 0 auto;
  width: 100%;
  padding: 40px 0;
  background-color: #ffd4d0;
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

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 375px;

`;

export const MainTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.5;
  color: #fc3314;
  margin-top: 18px;
  margin-bottom: 8px;
`;
export const ProfessionTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: #1f1f1f;
`;
export const AboutText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #1f1f1f;
`;
