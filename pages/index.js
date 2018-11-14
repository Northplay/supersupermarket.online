import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Page from '../components/shared/Page';
import Social from '../components/shared/Social';
import JoinTheClub from '../components/shared/JoinTheClub';
import Footer from '../components/shared/Footer';
import Logo from '../assets/logo.png';
import AppIcon from '../assets/app-icon.png';
import AppStore from '../assets/appstore.png';

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 100px 0;

  img {
    height: 175px;
    width: 474px;
  }
`;

const Split = styled.section`
  display: flex;
  flex-flow: rpw nowrap;
`;

const Color = styled.span`
  color: ${p => p.theme.colors[p.color]};
`;

const Description = styled.h1`
  text-align: left;
  text-transform: uppercase;
`;

const Video = styled.div`
  align-items: center;
  display: flex;
  flex: 0 1 50%;
  justify-content: center;
  padding: 30px;
`;

const Main = styled.div`
  flex: 0 1 50%;
  display: flex;
  flex-flow: column nowrap;
  padding: 30px;
`;

const IconLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 30px;

  img {
    height: 246px;
    width: 246px;
    transition: all 0.15s ease;
  }

  &:hover img {
    transform: scale(1.05, 1.05);
  }
`;

const AppStoreLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  margin-top: 30px;

  img {
    height: 97px;
    width: 291px;
    transition: all 0.15s ease;
  }

  &:hover img {
    transform: scale(1.05, 1.05);
  }
`;

const Index = () => <Page>
  <Header>
    <img src={Logo} alt="Super Supermarket"/>
  </Header>
  <Split role="main">
    <Video>
      Test
    </Video>
    <Main>
      <Link href="https://itunes.apple.com/us/app/super-supermarket/id1435484076?ls=1&mt=8&at=1010lwVg&ct=supersupermarket-site">
        <IconLink>
          <img src={AppIcon} alt="App Icon"/>
        </IconLink>
      </Link>
      <Description>
        <Color color="green">RACE</Color> through supermarkets! <Color color="yellow">COLLECT</Color> as many groceries as you can! <Color color="red">UPGRADE</Color> your cart and <Color color="blue">WIN</Color> a spot on the local or global shopping list!
      </Description>
      <Link href="https://itunes.apple.com/us/app/super-supermarket/id1435484076?ls=1&mt=8&at=1010lwVg&ct=supersupermarket-site">
        <AppStoreLink>
          <img src={AppStore} alt="Download on the app store"/>
        </AppStoreLink>
      </Link>
    </Main>
  </Split>
  <Social/>
  <JoinTheClub/>
  <Footer/>

</Page>;

export default Index;
