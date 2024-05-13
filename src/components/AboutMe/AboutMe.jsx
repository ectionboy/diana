import React from 'react';
import {
  AboutMeContainer,
  AboutMeText,
  AboutMeTitle,
  ContainerStyled,
} from './AboutMe.styled';

const AboutMe = () => {
  return (
    <ContainerStyled>
      <AboutMeContainer>
        <AboutMeTitle>About Me</AboutMeTitle>
        <AboutMeText>
          I'm Diana Yalinska, an English language instructor committed to
          fostering effective communication and language proficiency. With a
          dedication to student-centered teaching, I strive to create engaging
          and dynamic learning environments. Together, let's embark on a journey
          to unlock the full potential of your English language skills and
          achieve your learning goals.
        </AboutMeText>
      </AboutMeContainer>
    </ContainerStyled>
  );
};

export default AboutMe;
