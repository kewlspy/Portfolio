import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import {
  HeroContainer, HeroBg, HeroLeftContainer, Img,
  HeroRightContainer, HeroInnerContainer, TextLoop, Title,
  Span, SubTitle, ButtonRow, PrimaryButton, OutlineButton,
  SocialRow, SocialIcon, TagLine, Headline, BadgeRow, Badge
} from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div id="home">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <TagLine>Electronics Engineer · Full Stack Developer · AI Builder</TagLine>
            <Title>Hi, I am<br />{Bio.name}</Title>
            <Headline>"Engineer by training. Developer by craft. Manufacturing by experience."</Headline>
            <TextLoop>
              I am a&nbsp;
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <BadgeRow>
              <Badge>11+ yrs Manufacturing</Badge>
              <Badge>5+ yrs Full Stack Dev</Badge>
              <Badge>AI & Automation</Badge>
              <Badge>PEC Registered Engineer</Badge>
            </BadgeRow>
            <SubTitle>{Bio.description}</SubTitle>
            <ButtonRow>
              <PrimaryButton href="#projects">View My Work</PrimaryButton>
              <OutlineButton href="#contact">Discuss a Project</OutlineButton>
              <OutlineButton href={Bio.resume} target="_blank" rel="noopener noreferrer">Resume</OutlineButton>
            </ButtonRow>
            <SocialRow>
              <SocialIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon href={Bio.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub />
              </SocialIcon>
              <SocialIcon href={Bio.whatsapp} target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <FaWhatsapp />
              </SocialIcon>
              <SocialIcon href={`mailto:${Bio.email}`} title="Email">
                <FaEnvelope />
              </SocialIcon>
            </SocialRow>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="Waqas Ahmed Khan" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default HeroSection
