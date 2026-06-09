import React from 'react'
import styled from 'styled-components'
import { services } from '../../data/constants'

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
  max-width: 620px;
  margin: 0 auto 48px auto;
  line-height: 1.7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary}22;
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.primary};
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:hover {
    border-color: ${({ theme }) => theme.primary}55;
    box-shadow: 0 8px 32px ${({ theme }) => theme.primary}18;
    transform: translateY(-4px);
    &::before {
      opacity: 1;
    }
  }
`;

const CardIcon = styled.div`
  font-size: 36px;
  line-height: 1;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Space Grotesk', sans-serif;
`;

const CardDesc = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Item = styled.li`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  align-items: flex-start;
  gap: 8px;
  line-height: 1.5;
  &::before {
    content: '→';
    color: ${({ theme }) => theme.primary};
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 1px;
  }
`;

const AIPlatformBanner = styled.div`
  margin-top: 40px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}18 0%, ${({ theme }) => theme.card} 60%);
  border: 1px solid ${({ theme }) => theme.primary}55;
  border-radius: 20px;
  padding: 36px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 28px 24px;
    text-align: center;
  }
`;

const BannerLeft = styled.div`
  flex: 1;
`;

const BannerBadge = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary}20;
  border: 1px solid ${({ theme }) => theme.primary}44;
  padding: 4px 12px;
  border-radius: 20px;
  font-family: 'Space Grotesk', sans-serif;
  display: inline-block;
  margin-bottom: 12px;
`;

const BannerTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Space Grotesk', sans-serif;
  margin-bottom: 10px;
`;

const BannerText = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
`;

const BannerCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 14px 28px;
  color: ${({ theme }) => theme.black};
  border-radius: 50px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.primary};
  white-space: nowrap;
  flex-shrink: 0;
  box-shadow: 0 4px 16px ${({ theme }) => theme.primary}44;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.primary}66;
  }
`;

const Services = () => {
  return (
    <Container id="services">
      <Wrapper>
        <SectionLabel>What I Offer</SectionLabel>
        <Title>Services</Title>
        <Subtitle>
          I build software for problems I've spent 11 years living. Here's what I can do for you.
        </Subtitle>

        <Grid>
          {services.map((service, index) => (
            <Card key={index}>
              <CardIcon>{service.icon}</CardIcon>
              <CardTitle>{service.title}</CardTitle>
              <CardDesc>{service.description}</CardDesc>
              <ItemList>
                {service.items.map((item, i) => (
                  <Item key={i}>{item}</Item>
                ))}
              </ItemList>
            </Card>
          ))}
        </Grid>

        <AIPlatformBanner>
          <BannerLeft>
            <BannerBadge>🚀 Concept · Proposal Phase</BannerBadge>
            <BannerTitle>AI-Powered Production Planning Platform</BannerTitle>
            <BannerText>
              Developing a proposal for an AI-assisted production planning platform for manufacturing
              companies in Pakistan and the region — replacing manual Excel scheduling with AI-driven
              plans, real-time bottleneck prediction, what-if scenario simulation, and live operational
              dashboards customised to each facility's machines and data.
            </BannerText>
          </BannerLeft>
          <BannerCTA href="#contact">Discuss This Project</BannerCTA>
        </AIPlatformBanner>
      </Wrapper>
    </Container>
  )
}

export default Services
