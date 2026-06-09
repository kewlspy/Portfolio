import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

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
  margin-bottom: 16px;
  line-height: 1.7;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 24px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary}33;
  box-shadow: 0 4px 24px ${({ theme }) => theme.primary}10;
  border-radius: 20px;
  padding: 24px 32px;
  transition: all 0.3s ease;
  &:hover {
    border-color: ${({ theme }) => theme.primary}66;
    box-shadow: 0 8px 32px ${({ theme }) => theme.primary}22;
    transform: translateY(-3px);
  }
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 16px 24px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 16px 20px;
  }
`;

const SkillTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 16px;
  text-align: center;
  font-family: 'Space Grotesk', sans-serif;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 8px;
`;

const SkillItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid ${({ theme }) => theme.text_secondary}44;
  border-radius: 10px;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  &:hover {
    border-color: ${({ theme }) => theme.primary}66;
    color: ${({ theme }) => theme.text_primary};
    background: ${({ theme }) => theme.primary}10;
  }
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 10px;
  }
`;

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <SectionLabel>Technical Expertise</SectionLabel>
        <Title>Skills</Title>
        <Desc>
          Spanning AI & automation, full-stack development, cloud infrastructure, and industrial engineering.
        </Desc>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={index}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, i) => (
                  <SkillItem key={i}>
                    <SkillImage src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
