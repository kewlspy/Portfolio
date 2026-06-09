import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, credentials } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';
import { useTheme } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 24px;
  background: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const SectionLabel = styled.div`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 12px;
  font-family: 'Space Grotesk', sans-serif;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 8px;
  font-family: 'Space Grotesk', sans-serif;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 17px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 8px;
  line-height: 1.7;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 900px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const CredentialsSection = styled.div`
  width: 100%;
  max-width: 900px;
  margin-top: 48px;
`;

const CredTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 24px;
  text-align: center;
  font-family: 'Space Grotesk', sans-serif;
`;

const CredGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CredItem = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary}22;
  border-radius: 12px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.25s ease;
  &:hover {
    border-color: ${({ theme }) => theme.primary}55;
    background: ${({ theme }) => theme.primary}08;
  }
`;

const CredYear = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary}18;
  border: 1px solid ${({ theme }) => theme.primary}33;
  border-radius: 8px;
  padding: 3px 10px;
  font-family: 'Space Grotesk', sans-serif;
  flex-shrink: 0;
  min-width: 48px;
  text-align: center;
`;

const CredInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const CredName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const CredOrg = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Education = () => {
  const theme = useTheme();
  return (
    <Container id="education">
      <Wrapper>
        <SectionLabel>Academic & Professional Background</SectionLabel>
        <Title>Education & Credentials</Title>
        <Desc>
          Formal engineering education, software development certification, and extensive professional training.
        </Desc>

        <TimelineSection>
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem key={edu.id}>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <EducationCard education={edu} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" style={{ borderColor: theme.primary }} />
                  {index !== education.length - 1 && (
                    <TimelineConnector style={{ background: `${theme.primary}55` }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>

        <CredentialsSection>
          <CredTitle>Professional Credentials & Training</CredTitle>
          <CredGrid>
            {credentials.map((cred, index) => (
              <CredItem key={index}>
                <CredYear>{cred.year}</CredYear>
                <CredInfo>
                  <CredName>{cred.title}</CredName>
                  <CredOrg>{cred.org}{cred.detail ? ` · ${cred.detail}` : ''}</CredOrg>
                </CredInfo>
              </CredItem>
            ))}
          </CredGrid>
        </CredentialsSection>
      </Wrapper>
    </Container>
  )
}

export default Education
