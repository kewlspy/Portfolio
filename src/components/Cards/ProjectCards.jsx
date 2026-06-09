import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 320px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.primary}22;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  padding: 0;
  display: flex;
  flex-direction: column;
  transition: all 0.35s ease;
  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.primary}55;
    box-shadow: 0 12px 36px ${({ theme }) => theme.primary}20;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 160px;
  overflow: hidden;
  background: ${({ theme }) => theme.card_light};
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  ${Card}:hover & {
    transform: scale(1.04);
  }
`;

const Body = styled.div`
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;

const Tag = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary}18;
  border: 1px solid ${({ theme }) => theme.primary}33;
  padding: 2px 8px;
  border-radius: 8px;
  font-family: 'Space Grotesk', sans-serif;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Space Grotesk', sans-serif;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 1.4;
`;

const Client = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary}cc;
`;

const Description = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 1.6;
`;

const Impact = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary}10;
  border: 1px solid ${({ theme }) => theme.primary}25;
  border-radius: 8px;
  padding: 6px 10px;
  line-height: 1.5;
  margin-top: auto;
`;

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <ImageWrapper>
        <Image src={project.image} alt={project.title} />
      </ImageWrapper>
      <Body>
        <Tags>
          {project.tags?.slice(0, 4).map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
        <Title>{project.title}</Title>
        {project.client && <Client>📍 {project.client}</Client>}
        <Description>{project.description}</Description>
        {project.impact && <Impact>✦ {project.impact}</Impact>}
      </Body>
    </Card>
  );
};

export default ProjectCards;
