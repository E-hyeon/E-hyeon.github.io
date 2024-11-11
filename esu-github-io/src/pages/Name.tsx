// src/pages/Home.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Section from '../components/Sections';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffeb3b;
  animation: ${fadeIn} 2s ease-in-out;
`;

const NameTitle = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  color: #ffeb3b;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #ffd700;
  margin-top: 10px;
`;

const Home: React.FC = () => {
  return (
    <Section id="home" backgroundColor="#000000" title={''}>
      <NameContainer>
        <NameTitle>E-hyeon</NameTitle>
        <SubTitle>EUNJEONG CHO</SubTitle>
      </NameContainer>
    </Section>
  );
};

export default Home;
