import React from 'react';
import {
  ContainerStyled,
  ServicesList,
  ServicesListImg,
  ServicesListItem,
  ServicesListText,
  ServicesListTitle,
  ServicesText,
  ServicesTitle,
  TitleContainer,
} from './Services.styled';
import taskIcon from '../../img/task.png';

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
        <ServicesList className='list'>
          <ServicesListItem>
            <ServicesListImg src={taskIcon} alt="task icon" />
            <ServicesListTitle>Design</ServicesListTitle>
            <ServicesListText>
              I specialize in web development and design, creating visually
              appealing, user-friendly digital experiences.
            </ServicesListText>
          </ServicesListItem>
          <ServicesListItem>
            <ServicesListImg src={taskIcon} alt="task icon" />
            <ServicesListTitle>Design</ServicesListTitle>
            <ServicesListText>
              I specialize in web development and design, creating visually
              appealing, user-friendly digital experiences.
            </ServicesListText>
          </ServicesListItem>
          <ServicesListItem>
            <ServicesListImg src={taskIcon} alt="task icon" />
            <ServicesListTitle>Design</ServicesListTitle>
            <ServicesListText>
              I specialize in web development and design, creating visually
              appealing, user-friendly digital experiences.
            </ServicesListText>
          </ServicesListItem>
          <ServicesListItem>
            <ServicesListImg src={taskIcon} alt="task icon" />
            <ServicesListTitle>Design</ServicesListTitle>
            <ServicesListText>
              I specialize in web development and design, creating visually
              appealing, user-friendly digital experiences.
            </ServicesListText>
          </ServicesListItem>
        </ServicesList>
    </ContainerStyled>
  );
};

export default Services;
