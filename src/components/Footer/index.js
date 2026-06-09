import styled from "styled-components";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Bio } from "../../data/constants";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2.5rem 0 1.5rem 0;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.primary}22;
  background: ${({ theme }) => theme.card_light};
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 0 24px;
`;

const Logo = styled.h2`
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: 0.5px;
`;

const Tagline = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin-top: -12px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 28px;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    gap: 16px;
    font-size: 13px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.text_secondary}33;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  text-decoration: none;
  transition: all 0.2s ease;
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary}88;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Engr. Waqas Ahmed Khan</Logo>
        <Tagline>Electronics Engineer · Full Stack Developer · AI Builder</Tagline>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#education">Credentials</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
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
        <Copyright>
          &copy; 2025 Waqas Ahmed Khan · PEC Registered Engineer ELECTRO/16504 · Karachi, Pakistan
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
