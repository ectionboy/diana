import React from 'react';
import {
  ContainerStyled,
  Icon,
  ServicesList,
  ServicesListItem,
  ServicesListText,
  ServicesListTitle,
  ServicesText,
  ServicesTitle,
  TitleContainer,
} from './Services.styled';
import icons from '../../img/icons.svg';

const Services = () => {
  return (
    <ContainerStyled>
      <TitleContainer>
        <ServicesTitle>Services</ServicesTitle>
        <ServicesText>
          My services include lessons focused on different aspects of the
          language, using different methods and materials to ensure effective
          and interesting learning. My goal is to help each student achieve
          their goals and develop their potential in learning English.
        </ServicesText>
      </TitleContainer>
      <ServicesList className="list">
        <ServicesListItem>
          <Icon>
            <use xlinkHref={`${icons}#offline`} />
          </Icon>
          <ServicesListTitle>Offline classes</ServicesListTitle>
          <ServicesListText>
            Personalized lessons tailored to your needs and goals await in a
            dynamic, face-to-face setting.
          </ServicesListText>
        </ServicesListItem>
        <ServicesListItem>
          <Icon>
            <use xlinkHref={`${icons}#group`} />
          </Icon>
          <ServicesListTitle>Group classes</ServicesListTitle>
          <ServicesListText>
            Join to interactive online lessons tailored to the needs of the
            group, fostering camaraderie and accelerated language acquisition.
          </ServicesListText>
        </ServicesListItem>
        <ServicesListItem>
          <Icon>
            <use xlinkHref={`${icons}#individual`} />
          </Icon>
          <ServicesListTitle>Individual сlasses</ServicesListTitle>
          <ServicesListText>
            You receive personalized attention and customized lesson plans
            designed to address your specific learning needs and goals.
          </ServicesListText>
        </ServicesListItem>
        <ServicesListItem>
          <Icon>
            <use xlinkHref={`${icons}#self-study`} />
          </Icon>
          <ServicesListTitle>Self-study English course</ServicesListTitle>
          <ServicesListText>
            Start these course to learning language journey with my
            comprehensive resources and guidance, to master English at your own
            pace and convenience.
          </ServicesListText>
        </ServicesListItem>
      </ServicesList>
    </ContainerStyled>
  );
};

export default Services;
