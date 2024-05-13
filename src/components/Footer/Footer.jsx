import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
import {
  ContainerStyled,
  Icon,
  SocialMediaContainer,
  SocialMediaList,
  SocialMediaListItem,
  SocialMediaTitle,
} from './Footer.styled';
import icons from '../../img/icons.svg';

const Footer = () => {
  const navigate = useNavigate();

  const navTo = to => {
    navigate(to);
  };
  return (
    <>
      <ContainerStyled>
        <div>
          <DiamondIcon sx={{ mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navTo('/')}
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Diana
          </Typography>
        </div>
        <SocialMediaContainer>
          <SocialMediaTitle>Follow me on social media:</SocialMediaTitle>
          <SocialMediaList className="list">
            <SocialMediaListItem>
              <a href="/diana">
                <Icon>
                  <use xlinkHref={`${icons}#instagram`} />
                </Icon>
              </a>
            </SocialMediaListItem>
            <SocialMediaListItem>
              <a href="/diana">
                <Icon>
                  <use xlinkHref={`${icons}#facebook`} />
                </Icon>
              </a>
            </SocialMediaListItem>
            <SocialMediaListItem>
              <a href="/diana">
                <Icon>
                  <use xlinkHref={`${icons}#telegram`} />
                </Icon>
              </a>
            </SocialMediaListItem>
          </SocialMediaList>
        </SocialMediaContainer>
        <a
          href="https://www.flaticon.com/free-icons/english"
          title="english icons"
          target="blank"
          className="link"
          style={{ color: '#afafaf', fontSize: '8px' }}
        >
          English icons created by Chanut-is-Industries - Flaticon
        </a>
      </ContainerStyled>
    </>
  );
};

export default Footer;
