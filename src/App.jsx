import React from 'react';

import { GlobalStyles } from './components/Styled/Global';
import { Container } from './components/Styled/Container';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Navbar />
        <Header />
      </Container>
    </>
  );
}

export default App;
