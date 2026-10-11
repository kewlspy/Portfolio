import React from 'react'
import styled from 'styled-components'
import { industries } from '../../data/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 24px;
  position: relative;
  z-index: 1;
  background: ${({ theme }) => theme.bg};
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
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  font-family: 'Space Grotesk', sans-serif;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Divider = styled.div`
  width: 60px;
  height: 4px;
  background: ${({ theme }) => theme.primary};
  border-radius: 2px;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Paragraph = styled.p`
  font-size: 17px;
  line-height: 1.8;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
`;

const IdentityCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary}33;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.3s ease;
  &:hover {
    border-color: ${({ theme }) => theme.primary}88;
    box-shadow: 0 4px 24px ${({ theme }) => theme.primary}22;
    transform: translateY(-3px);
  }
`;

const CardIcon = styled.div`
  font-size: 28px;
  margin-bottom: 4px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Space Grotesk', sans-serif;
`;

const CardText = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
`;

const IndustriesBox = styled.div`
  margin-top: 48px;
`;

const IndustriesTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  font-family: 'Space Grotesk', sans-serif;
`;

const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const IndustryCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary}33;
  border-radius: 14px;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const IndustryName = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  font-family: 'Space Grotesk', sans-serif;
`;

const IndustryClients = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
`;

const UVPBox = styled.div`
  margin-top: 48px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}15 0%, ${({ theme }) => theme.card} 100%);
  border: 1px solid ${({ theme }) => theme.primary}44;
  border-radius: 20px;
  padding: 36px 40px;
  @media (max-width: 640px) {
    padding: 24px 20px;
  }
`;

const UVPTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
  font-family: 'Space Grotesk', sans-serif;
`;

const UVPText = styled.p`
  font-size: 17px;
  line-height: 1.8;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const About = () => {
  return (
    <Container id="about">
      <Wrapper>
        <SectionLabel>Who I Am</SectionLabel>
        <Title>A Rare Combination</Title>
        <Divider />

        <Grid>
          <Column>
            <Paragraph>
              Most software engineers have never commissioned a sensor on a running production line.
              Most plant engineers can't build the cloud platform the data flows into.
              <Highlight> I do both.</Highlight>
            </Paragraph>
            <Paragraph>
              I am <Highlight>Engr. Waqas Ahmed Khan</Highlight>, a Registered Electronics Engineer
              (PEC: ELECTRO/16504). I have spent <Highlight>11+ years in high-precision manufacturing</Highlight> and
              <Highlight> 5+ years building enterprise software</Highlight>. Today I am a <Highlight>Deployment
              Lead at Procheck Technologies</Highlight>, where I roll out Industrial IoT and condition-monitoring
              systems for pharmaceutical, FMCG, beverage and energy manufacturers.
            </Paragraph>
            <Paragraph>
              My work happens where quality is not optional: GMP-regulated pharmaceutical plants, high-speed
              beverage lines and energy facilities. I own the deployment end to end, from site assessment, sensor
              selection and panel wiring to MQTT/Modbus gateway integration, commissioning, validation and the
              dashboards that plant managers use every day. I also support clients' sites in other countries
              remotely.
            </Paragraph>
          </Column>

          <Column>
            <IdentityCard>
              <CardIcon>📡</CardIcon>
              <CardTitle>Deployment Lead · Industrial IoT & Condition Monitoring</CardTitle>
              <CardText>
                At Procheck Technologies I lead end-to-end IIoT deployments for clients including GSK,
                Getz Pharma, Martin Dow, Macter, CCL Pharmaceuticals, PepsiCo and Shell. I am the product owner
                for client-facing enhancements, from requirements through UAT.
              </CardText>
            </IdentityCard>

            <IdentityCard>
              <CardIcon>🏭</CardIcon>
              <CardTitle>Electronics Engineer · 11+ Years Manufacturing</CardTitle>
              <CardText>
                As Deputy Manager Production at Treet Group I led high-precision production operations,
                built an IoT-based OEE system, cut downtime by 70–80% and won the Kaizen Continuous
                Improvement Award 2024. I am Six Sigma Green Belt trained and have trained teams in ISO 9001:2015, Poka-Yoke and TQM.
              </CardText>
            </IdentityCard>

            <IdentityCard>
              <CardIcon>💻</CardIcon>
              <CardTitle>Full Stack & AI Engineer · 5+ Years</CardTitle>
              <CardText>
                React, Node.js, Laravel, Python and AWS, with remote work for Epicmetry (Dubai) and
                OpenSoft Technologies. I build OpenAI/Anthropic-powered tools and n8n automations, and I
                lived in Munich on Germany's Opportunity Card.
              </CardText>
            </IdentityCard>
          </Column>
        </Grid>

        <IndustriesBox>
          <IndustriesTitle>Industries & Clients I've Deployed For</IndustriesTitle>
          <IndustriesGrid>
            {industries.map((industry) => (
              <IndustryCard key={industry.name}>
                <IndustryName>{industry.icon} {industry.name}</IndustryName>
                <IndustryClients>{industry.clients.join(' · ')}</IndustryClients>
              </IndustryCard>
            ))}
          </IndustriesGrid>
        </IndustriesBox>

        <UVPBox>
          <UVPTitle>What I Bring to Your Team</UVPTitle>
          <UVPText>
            I have stood on the production floor tracking down a bottleneck, and I have shipped cloud applications
            used by international clients. I understand the machine <em>and</em> the code. When I deploy a
            condition-monitoring system, an OEE dashboard or a predictive-maintenance pipeline, I am not guessing
            at what the plant needs, because I ran one for over a decade. I am looking to bring that combination of
            hands-on electronics, regulated-manufacturing discipline and modern software engineering to an
            industrial team in <Highlight>Germany, Luxembourg or elsewhere in the EU</Highlight>.
          </UVPText>
        </UVPBox>
      </Wrapper>
    </Container>
  )
}

export default About
