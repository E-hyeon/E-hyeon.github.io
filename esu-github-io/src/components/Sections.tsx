// src/components/Section.tsx
import React from 'react';
import styled from 'styled-components';

interface SectionProps {
  id: string;
  backgroundColor: string;
  title: string;
}

const SectionContainer = styled.div<{ backgroundColor: string }>`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  font-size: 2.5rem;
  scroll-snap-align: start;
`;

const Section: React.FC<SectionProps> = ({ id, backgroundColor, title }) => {
  return (
    <SectionContainer id={id} backgroundColor={backgroundColor}>
      <h2>{title}</h2>
    </SectionContainer>
  );
};

export default Section;
