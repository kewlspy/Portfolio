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
    gap: 8px;
    width: 300px;
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

const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Space Grotesk', sans-serif;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary}99;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Grade = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        {education.img ? (
          <Image src={education.img} alt={education.school} />
        ) : (
          <ImagePlaceholder>🎓</ImagePlaceholder>
        )}
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade><b>Status: </b>{education.grade}</Grade>
      <Description>{education.desc}</Description>
    </Card>
  )
}

export default EducationCard
