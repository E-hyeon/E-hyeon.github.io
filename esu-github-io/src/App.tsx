// src/App.tsx
import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import styled from 'styled-components';

const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Home />
        <About />
        <Profile />
        <Services />
        <Portfolio />
        <Contact />
      </Container>
    </>
  );
};

export default App;
