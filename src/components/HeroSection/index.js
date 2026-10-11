import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import {
  HeroContainer, HeroBg, HeroLeftContainer, Img,
  HeroRightContainer, HeroInnerContainer, TextLoop, Title,
  Span, SubTitle, ButtonRow, PrimaryButton, OutlineButton,
  SocialRow, SocialIcon, TagLine, Headline, BadgeRow, Badge, Relocation
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
            <TagLine>Industrial IoT · Condition Monitoring · Electronics Engineer</TagLine>
            <Title>Hi, I am<br />{Bio.name}</Title>
            <Headline>"From sensor to cloud dashboard: Industrial IoT for high-precision, quality-critical manufacturing."</Headline>
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
              <Badge>Pharma · FMCG · Energy Deployments</Badge>
              <Badge>5+ yrs Full Stack Dev</Badge>
              <Badge>PEC Registered Engineer</Badge>
              <Badge>{Bio.languages}</Badge>
            </BadgeRow>
            <SubTitle>{Bio.description}</SubTitle>
            <Relocation>✈️ {Bio.relocation}</Relocation>
            <ButtonRow>
              <PrimaryButton href="#experience">View Experience</PrimaryButton>
              <OutlineButton href="#contact">Get in Touch</OutlineButton>
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
