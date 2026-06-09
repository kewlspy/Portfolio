import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 650px;
  border-radius: 14px;
  padding: 16px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.primary}33;
  box-shadow: 0 4px 20px ${({ theme }) => theme.primary}10;
  background: ${({ theme }) => theme.card};
  &:hover {
    border-color: ${({ theme }) => theme.primary}66;
    box-shadow: 0 8px 28px ${({ theme }) => theme.primary}20;
    transform: translateY(-3px);
  }
  @media only screen and (max-width: 768px) {
    padding: 12px;
    width: 300px;
    gap: 8px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

const Image = styled.img`
  height: 44px;
  width: 44px;
  object-fit: contain;
  background-color: #fff;
  border-radius: 8px;
  margin-top: 2px;
  flex-shrink: 0;
  @media only screen and (max-width: 768px) {
    height: 36px;
    width: 36px;
  }
`;

const ImagePlaceholder = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 8px;
  background: ${({ theme }) => theme.primary}22;
  border: 1px solid ${({ theme }) => theme.primary}44;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  margin-top: 2px;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Role = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Space Grotesk', sans-serif;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Location = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary}99;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

const SkillBadge = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.primary}12;
  border: 1px solid ${({ theme }) => theme.primary}2a;
  border-radius: 6px;
  padding: 3px 8px;
`;

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        {experience.img ? (
          <Image src={experience.img} alt={experience.company} />
        ) : (
          <ImagePlaceholder>🏢</ImagePlaceholder>
        )}
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          {experience.location && <Location>📍 {experience.location}</Location>}
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      {experience.desc && (
        <Description>
          <Span>{experience.desc}</Span>
        </Description>
      )}
      {experience.skills && experience.skills.length > 0 && (
        <SkillsRow>
          {experience.skills.map((skill, index) => (
            <SkillBadge key={index}>{skill}</SkillBadge>
          ))}
        </SkillsRow>
      )}
    </Card>
  )
}

export default ExperienceCard
