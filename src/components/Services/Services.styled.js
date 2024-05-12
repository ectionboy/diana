import styled from 'styled-components';

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  //   max-width: 375px;
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
`;
export const ServicesTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.5;
  color: #1f1f1f;
  text-align: center;
  margin-bottom: 16px;
`;
export const ServicesText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #1f1f1f;
  text-align: center;
  max-width: 810px;
`;
export const ServicesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
`;
export const ServicesListItem = styled.li`
  width: 274px;
  padding: 4px;
`;
export const ServicesListImg = styled.img`
width: 54px;
height: 54px;
`;
export const ServicesListTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  color: #1f1f1f;
  margin: 8px 0;
`;
export const ServicesListText = styled.p`

`;