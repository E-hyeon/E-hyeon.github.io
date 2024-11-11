// src/components/Section.tsx
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface SectionProps {
  id: string;
  backgroundColor: string;
  title?: string;
  children?: ReactNode;
}

const SectionContainer = styled.div<{ backgroundColor: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  scroll-snap-align: start;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Section: React.FC<SectionProps> = ({ id, backgroundColor, title, children }) => {
  return (
    <SectionContainer id={id} backgroundColor={backgroundColor}>
      {title && <Title>{title}</Title>}
      {children}
    </SectionContainer>
  );
};

export default Section;
