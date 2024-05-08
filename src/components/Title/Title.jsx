import React from 'react';
import mainImg from '../../img/main-img.png';
import { AboutText, ContainerStyled, MainTitle, ProfessionTitle, TitleContainer } from './Title.styled';

const Title = () => {
  return (
    <ContainerStyled>
      <TitleContainer>
        <ProfessionTitle>English teacher</ProfessionTitle>
        <MainTitle>Diana Yalinska</MainTitle>
        <AboutText>Welcome to my portfolio.</AboutText>
      </TitleContainer>
      <img src={mainImg} alt="Фото Діани" width={"345px"} height={"430px"}/>
    </ContainerStyled>
  );
};

export default Title;
