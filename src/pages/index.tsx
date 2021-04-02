import React from 'react';

import { GlobalStyles, Container } from '../styles';
import { BackToTopBtn } from '../components';

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <BackToTopBtn />
      <Container>
        <h1>Hello World</h1>
      </Container>
    </>
  );
}
