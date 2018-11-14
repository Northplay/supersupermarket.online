import React from 'react';
import styled from 'styled-components';

import Head from '../root/Head';

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: 0 auto;
`;

const Page = ({ children }) => <Container>
  <Head/>
  <Content>
    {children}
  </Content>
</Container>;

export default Page;
