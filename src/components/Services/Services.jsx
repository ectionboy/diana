import React from 'react';
import {
  ContainerStyled,
  ServicesText,
  ServicesTitle,
  TitleContainer,
} from './Services.styled';

const Services = () => {
  return (
    <ContainerStyled>
      <TitleContainer>
        <ServicesTitle>Services</ServicesTitle>
        <ServicesText>
          Explore my design services, from user interface and experience to
          prototyping and testing. Let's craft exceptional digital experiences
          together.
        </ServicesText>
      </TitleContainer>
    </ContainerStyled>
  );
};

export default Services;
