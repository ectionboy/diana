import styled from 'styled-components';

export const ContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin: 0 auto;
  padding: 20px 10px;
  background-color: #ffd4d0;
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
  width: 235px;
`;
export const Icon = styled.svg`
  fill: #fc3314;
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
export const ServicesListText = styled.p``;
