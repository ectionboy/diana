import styled from 'styled-components';

export const ContainerStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 20px 10px;
  padding-bottom: 0px;
  background-color: #ffd4d0;

  @media screen and (min-width: 900px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 40px;
    padding-bottom: 0px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 370px;
  margin-bottom: 18px;
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.5;
  color: #fc3314;
  margin-top: 18px;
  margin-bottom: 8px;
  @media screen and (min-width: 900px) {
    font-size: 48px;
  }
`;
export const ProfessionTitle = styled.h2`
  font-size: 18px;

  font-weight: 400;
  line-height: 1.5;
  color: #1f1f1f;
  @media screen and (min-width: 900px) {
    font-size: 20px;
  }
`;
export const AboutText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #1f1f1f;
  @media screen and (min-width: 900px) {
    font-size: 16px;
  }
`;
