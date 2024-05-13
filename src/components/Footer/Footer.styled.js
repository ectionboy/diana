import styled from 'styled-components';

export const ContainerStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  //   max-width: 375px;
  margin: 0 auto;
  width: 100%;
  padding: 40px 0;
  background-color: #1f1f1f;
  color: #ffffff;
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
`;
export const Icon = styled.svg`
  fill: #ffffff;
  width: 24px;
  height: 24px;
`;
export const SocialMediaContainer = styled.div``;
export const SocialMediaTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 16px;
`;
export const SocialMediaList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 32px;
`;
export const SocialMediaListItem = styled.li``;
