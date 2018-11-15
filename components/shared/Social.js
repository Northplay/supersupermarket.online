import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Twitter from '../../assets/bird.svg';
import Facebook from '../../assets/fbook.svg';
import Email from '../../assets/plane.svg';
import Box from '../../assets/hearbox.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 80px 0 0 0;

  @media (max-width: 420px) {
    margin: 40px 0;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  width: 100%;

  @media (max-width: 1010px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 420px) {
    margin: 0;
  }
`;

const StyledLink = styled.a`
  align-items: center;
  color: ${p => p.theme.colors.babyBlue};
  display: flex;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  text-decoration: none;
  padding: 20 10px;
  transition: all 0.15s ease;

  @media (max-width: 1010px) {
    margin: 10px;
  }

  @media (max-width: 420px) {
    font-size: 24px;
  }

  span {
    margin-left: 15px;
  }

  svg path {
    fill: ${p => p.theme.colors.babyBlue} !important;
  }

  &:hover {
    color: ${p => p.theme.colors.white};
    transform: translateY(-5px);

    svg path {
      fill: ${p => p.theme.colors.white} !important;
    }
  }
`;

const IconLink = ({ icon, text, url }) => <Link href={url} passHref>
  <StyledLink target="_blank">
    {icon}
    <span>{text}</span>
  </StyledLink>
</Link>;

const Social = () => <Container>
  <Row>
    <IconLink
      icon={<Twitter/>}
      url="https://twitter.com/heynorthplay"
      text="@heynorthplay" />
    <IconLink
      icon={<Facebook/>}
      url="https://facebook.com/northplay"
      text="/northplay" />
    {/* <IconLink
      icon={<Box/>}
      url=""
      text="Press Kit" /> */}
    <IconLink
      icon={<Email/>}
      url="mailto:hey@northplay.co?subject=Super%20Supermarket"
      text="hey@northplay.co" />
  </Row>
</Container>;

export default Social;
