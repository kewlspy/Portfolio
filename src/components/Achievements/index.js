import React from 'react'
import styled from 'styled-components'
import { achievements } from '../../data/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 24px;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
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
  margin-bottom: 12px;
  font-family: 'Space Grotesk', sans-serif;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 17px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  max-width: 600px;
  margin: 0 auto 48px auto;
  line-height: 1.7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary}22;
  border-radius: 16px;
  padding: 28px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  &:hover {
    border-color: ${({ theme }) => theme.primary}55;
    box-shadow: 0 8px 28px ${({ theme }) => theme.primary}20;
    transform: translateY(-4px);
    &::after {
      transform: scaleX(1);
    }
  }
`;

const Metric = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: ${({ theme }) => theme.primary};
  font-family: 'Space Grotesk', sans-serif;
  line-height: 1;
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Label = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Desc = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const Achievements = () => {
  return (
    <Container id="achievements">
      <Wrapper>
        <SectionLabel>Impact By The Numbers</SectionLabel>
        <Title>Key Achievements</Title>
        <Subtitle>
          Measurable results from 11+ years on the factory floor and 5+ years building software.
        </Subtitle>

        <Grid>
          {achievements.map((item, index) => (
            <Card key={index}>
              <Metric>{item.metric}</Metric>
              <Label>{item.label}</Label>
              <Desc>{item.desc}</Desc>
            </Card>
          ))}
        </Grid>
      </Wrapper>
    </Container>
  )
}

export default Achievements
