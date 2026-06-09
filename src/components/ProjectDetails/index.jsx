import { CloseRounded } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  transition: all 0.5s ease;
  backdrop-filter: blur(4px);
`;

const Wrapper = styled.div`
  max-width: 760px;
  width: 100%;
  border-radius: 20px;
  margin: 50px 16px 50px 16px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary}33;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px ${({ theme }) => theme.primary}10;
  color: ${({ theme }) => theme.text_primary};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary};
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.card_light};
  transition: all 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.text_primary};
    background: ${({ theme }) => theme.primary}22;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Space Grotesk', sans-serif;
  margin-top: 4px;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`;

const MetaItem = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const ClientBadge = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary}15;
  border: 1px solid ${({ theme }) => theme.primary}33;
  border-radius: 8px;
  padding: 3px 10px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Tag = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  padding: 3px 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.primary}18;
  border: 1px solid ${({ theme }) => theme.primary}30;
  font-family: 'Space Grotesk', sans-serif;
`;

const Desc = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
`;

const ImpactBox = styled.div`
  background: ${({ theme }) => theme.primary}12;
  border: 1px solid ${({ theme }) => theme.primary}33;
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 4px;
`;

const PrimaryBtn = styled.a`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: ${({ theme }) => theme.black};
  padding: 12px 16px;
  border-radius: 10px;
  background: ${({ theme }) => theme.primary};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 14px ${({ theme }) => theme.primary}44;
  &:hover {
    opacity: 0.88;
    transform: translateY(-2px);
  }
`;

const OutlineBtn = styled.a`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: ${({ theme }) => theme.primary};
  padding: 12px 16px;
  border-radius: 10px;
  background: transparent;
  border: 1.5px solid ${({ theme }) => theme.primary};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  &:hover {
    background: ${({ theme }) => theme.primary}18;
    transform: translateY(-2px);
  }
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseBtn onClick={() => setOpenModal({ state: false, project: null })}>
            <CloseRounded style={{ fontSize: 18 }} />
          </CloseBtn>
          <Image src={project?.image} alt={project?.title} />
          <Title>{project?.title}</Title>
          <MetaRow>
            <MetaItem>📅 {project?.date}</MetaItem>
            {project?.client && <ClientBadge>📍 {project.client}</ClientBadge>}
          </MetaRow>
          <Tags>
            {project?.tags?.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          {project?.impact && (
            <ImpactBox>✦ Impact: {project.impact}</ImpactBox>
          )}
          <ButtonGroup>
            {project?.github && (
              <OutlineBtn href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> View Code
              </OutlineBtn>
            )}
            {project?.webapp && (
              <PrimaryBtn href={project.webapp} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> View Live App
              </PrimaryBtn>
            )}
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails;
