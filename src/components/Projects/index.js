import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider, SectionLabel } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <SectionLabel>What I've Built</SectionLabel>
        <Title>Projects</Title>
        <Desc>
          From real-time factory IoT systems to multi-vendor e-commerce platforms — projects that solve real problems.
        </Desc>
        <ToggleButtonGroup>
          {['all', 'web app', 'android app'].map((cat, i, arr) => (
            <React.Fragment key={cat}>
              <ToggleButton
                active={toggle === cat}
                onClick={() => setToggle(cat)}
              >
                {cat === 'all' ? 'All' : cat === 'web app' ? 'Web Apps' : 'Mobile Apps'}
              </ToggleButton>
              {i < arr.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {(toggle === 'all' ? projects : projects.filter(p => p.category === toggle))
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
