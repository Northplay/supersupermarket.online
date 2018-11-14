import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import bear from '../../assets/bear.png';

const Wrapper = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  z-index: -1;

  @media (max-width: 620px) {
    margin-top: -250px;
  } */
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 1 1 ${p => p.theme.maxWidth};
  padding: 80px 0;

  @media (max-width: 620px) {
    flex-wrap: wrap;
  }
`;

const Text = styled.a`
  flex: 1 1 50%;
  align-items: center;
  color: #fff;
  display: flex;
  font-family: "cubano";
  font-size: 30px;
  line-height: 1.1em;
  text-decoration: none;

  @media (max-width: 620px) {
    flex: 1 1 100%;
    text-align: center;
    justify-content: center;
    margin: 10px 0;
    order: 2;
  }
`;

const LeftText = styled(Text)`
  justify-content: flex-end;

  @media (max-width: 620px) {
    order: 1;
  }
`;

const People = styled.span`
  text-align: right;
`;
const Location = styled.span`
  text-align: left;
`;

const Logo = styled.img`
  height: 153px;
  width: 158px;
  transition: all 0.15s ease;

  &:hover {
    transform: scale(1.1, 1.1);
  }

  @media (max-width: 620px) {
    order: 0;
  }
`;

const Northplay = styled.a`
  flex: 0 1 158px;
  margin: 0 35px;

  &:hover {
    opacity: 0.8;
  }
`;

const MadeBy = () => <Wrapper>
  <Container>
    <Link href="https://northplay.co">
      <LeftText target="_blank">
        <People>Made by Northplay</People>
      </LeftText>
    </Link>
    <Link href="https://northplay.co">
      <Northplay target="_blank">
        <Logo src={bear} alt="Northplay" />
      </Northplay>
    </Link>
    <Link href="https://northplay.co">
      <Text target="_blank">
        <Location>In Copenhagen</Location>
      </Text>
    </Link>
  </Container>
</Wrapper>;


export default MadeBy;
