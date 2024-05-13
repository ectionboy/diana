import React from 'react';
import mainImg from '../../img/main-img.png';
import {
  AboutText,
  ContainerStyled,
  MainTitle,
  ProfessionTitle,
  TitleContainer,
} from './Title.styled';

const Title = () => {
  return (
    <ContainerStyled>
      <TitleContainer>
        <ProfessionTitle>English teacher</ProfessionTitle>
        <MainTitle>Diana Yalinska</MainTitle>
        <AboutText>
          Welcome to my portfolio. I am a bachelor of philology, specializing in
          the study of English language and literature.
        </AboutText>
      </TitleContainer>
      <img src={mainImg} alt="Diana Yalinska" width={'345px'} height={'430px'} />
    </ContainerStyled>
  );
};

export default Title;
