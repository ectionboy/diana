import React from 'react';
import { AboutMeContainer, AboutMeText, AboutMeTitle, ContainerStyled } from './AboutMe.styled';

const AboutMe = () => {
  return (
    <ContainerStyled>
      <AboutMeContainer>
        <AboutMeTitle>About Me</AboutMeTitle>
        <AboutMeText>
          I'm Sara Jones, a UI/UX designer dedicated to crafting intuitive and
          visually stunning digital experiences. With a passion for user-centric
          design, I transform ideas into functional and beautiful interfaces.
          Let's collaborate and shape the future of design together.
        </AboutMeText>
      </AboutMeContainer>
    </ContainerStyled>
  );
};

export default AboutMe;
