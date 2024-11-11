// src/pages/Profile.tsx
import React from 'react';
import styled from 'styled-components';
import Section from '../components/Sections';
import A from '../assets/A.png';

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  color: #0a1f44;
  background-color: #ffffff;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #0a1f44;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #6c757d;
  margin-bottom: 20px;
`;

const JobTitle = styled.div`
  font-size: 1.2rem;
  background-color: #0a1f44;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 20px;
  width: fit-content;
  margin-bottom: 20px;
`;

const ContactInfo = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactItem = styled.li`
  font-size: 1rem;
  margin: 10px 0;
  display: flex;
  align-items: center;
  color: #0a1f44;
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const Profile: React.FC = () => {
  return (
    <Section id="profile" backgroundColor="#ffffff">
      <ProfileContainer>
        <ProfileImage src={A} alt="Profile" />
        <InfoContainer>
          <Title>조은정 (E-hyeon)</Title>
          <Subtitle>CHO EUNJEONG</Subtitle>
          <JobTitle>Web FrontEnd Developer</JobTitle>
          <ContactInfo>
            <ContactItem>
              <Icon>📧</Icon> eunj0407@naver.com
            </ContactItem>
            <ContactItem>
              <Icon>📞</Icon> 010-3633-7042
            </ContactItem>
            <ContactItem>
              <Icon>📝</Icon> 제작중입니다..
            </ContactItem>
            <ContactItem>
              <Icon>🔗</Icon>
              <a
                href="https://github.com/E-hyeon"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0a1f44', textDecoration: 'none' }}
              >
                github.com/E-hyeon
              </a>
            </ContactItem>
          </ContactInfo>
        </InfoContainer>
      </ProfileContainer>
    </Section>
  );
};

export default Profile;
