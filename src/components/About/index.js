import React from 'react'
import styled from 'styled-components'

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
              Most software consultants have never run a production line.
              Most manufacturing engineers can't build an AI application.
              <Highlight> I do both.</Highlight>
            </Paragraph>
            <Paragraph>
              I am <Highlight>Engr. Waqas Ahmed Khan</Highlight> — a Registered Electronics Engineer
              (PEC: ELECTRO/16504) with <Highlight>11+ years leading production operations</Highlight> at
              an industrial manufacturing company, and <Highlight>5+ years building enterprise web,
              mobile, and AI applications</Highlight> for clients across Pakistan, Saudi Arabia, and the UAE.
            </Paragraph>
            <Paragraph>
              My manufacturing career was spent on the shop floor — debugging machines at 2am, optimising
              vacuum processes, reducing downtime by 70%, and leading teams of engineers and technicians.
              My software career is where I began solving those same problems with code: IoT dashboards,
              production planning systems, and now AI-powered automation.
            </Paragraph>
          </Column>

          <Column>
            <IdentityCard>
              <CardIcon>🏭</CardIcon>
              <CardTitle>Electronics Engineer · 11+ Years Manufacturing</CardTitle>
              <CardText>
                Deputy Manager Production at Treet Group — led factory operations, IoT projects,
                process automation, and won the Kaizen Continuous Improvement Award 2024.
                Registered with Pakistan Engineering Council (PEC).
              </CardText>
            </IdentityCard>

            <IdentityCard>
              <CardIcon>💻</CardIcon>
              <CardTitle>Full Stack Developer · 5+ Years Enterprise Software</CardTitle>
              <CardText>
                Currently at Epicmetry (Dubai, UAE) building AI-oriented international products.
                Previously at OpenSoft Technologies — React, Node.js, Laravel, AWS, mobile apps,
                and deployed applications for clients in Saudi Arabia and Pakistan.
              </CardText>
            </IdentityCard>

            <IdentityCard>
              <CardIcon>🤖</CardIcon>
              <CardTitle>AI & Automation Builder</CardTitle>
              <CardText>
                Working with OpenAI API, agentic workflows, LLM-powered applications, and IoT+AI
                integrations. Currently developing a proposal for an AI-powered production planning
                platform for manufacturing companies.
              </CardText>
            </IdentityCard>
          </Column>
        </Grid>

        <UVPBox>
          <UVPTitle>My Unique Value Proposition</UVPTitle>
          <UVPText>
            I have stood in a production hall debugging a bottleneck — and I have deployed cloud applications
            used by international clients. I understand the machine <em>and</em> the code. When I build a
            production planning system, an OEE dashboard, or a maintenance application, I am not guessing
            at what the factory needs. I have lived it for over a decade. That combination — deep operational
            experience + modern full-stack and AI engineering — is what I bring to every project.
          </UVPText>
        </UVPBox>
      </Wrapper>
    </Container>
  )
}

export default About
