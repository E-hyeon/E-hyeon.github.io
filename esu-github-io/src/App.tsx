// src/App.tsx
import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Name from './pages/Name';
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
  width: 100vw;
  scroll-behavior: smooth; 
`;


const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Name />
        <Profile />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </Container>
    </>
  );
};

export default App;
