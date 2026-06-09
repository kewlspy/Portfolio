import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import { Bio } from "../../data/constants";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 24px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  max-width: 1100px;
  gap: 48px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

const Left = styled.div`
  flex: 1;
  min-width: 0;
`;

const Right = styled.div`
  flex: 1;
  min-width: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
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
  margin-bottom: 8px;
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
  margin-bottom: 24px;
`;

const Intro = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.8;
  margin-bottom: 32px;
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;

const ContactInfoItem = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 15px;
  transition: all 0.25s ease;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.primary}18;
  border: 1px solid ${({ theme }) => theme.primary}33;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  flex-shrink: 0;
  transition: all 0.25s ease;
  ${ContactInfoItem}:hover & {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.black};
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text_secondary}44;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 18px;
  transition: all 0.25s ease;
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary}15;
    transform: translateY(-2px);
  }
`;

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.primary}22;
  box-shadow: 0 4px 24px ${({ theme }) => theme.primary}10;
  gap: 14px;
`;

const FormTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 4px;
  font-family: 'Space Grotesk', sans-serif;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary}44;
  outline: none;
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 10px;
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  transition: border-color 0.2s ease;
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary}88;
  }
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}15;
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary}44;
  outline: none;
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 10px;
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  resize: vertical;
  transition: border-color 0.2s ease;
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary}88;
  }
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}15;
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({ theme }) => theme.primary};
  padding: 14px 16px;
  margin-top: 4px;
  border-radius: 10px;
  border: none;
  color: ${({ theme }) => theme.black};
  font-size: 16px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 16px ${({ theme }) => theme.primary}44;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.primary}66;
    opacity: 0.92;
  }
  &:active {
    transform: translateY(1px);
  }
`;

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEl = form.current;
    const formData = new FormData(formEl);
    const fromEmail = formData.get("from_email")?.trim();
    const fromName = formData.get("from_name")?.trim();
    const subject = formData.get("subject")?.trim();
    const message = formData.get("message")?.trim();

    if (!fromEmail || !fromName || !subject || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    emailjs
      .sendForm("service_utacrco", "template_ogurm9f", formEl, "bs44JZzAcAKj2w12F")
      .then(
        (_result) => {
          setOpen(true);
          formEl.reset();
        },
        (error) => {
          console.error("Email send error:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Left>
          <SectionLabel>Get In Touch</SectionLabel>
          <Title>Contact</Title>
          <Divider />
          <Intro>
            Whether you have a project in mind, want to discuss the AI production planning platform,
            or just want to connect — I'd love to hear from you.
          </Intro>

          <ContactInfoList>
            <ContactInfoItem href={`mailto:${Bio.email}`}>
              <InfoIcon><FaEnvelope /></InfoIcon>
              {Bio.email}
            </ContactInfoItem>
            <ContactInfoItem href={`tel:${Bio.phone}`}>
              <InfoIcon><FaPhone /></InfoIcon>
              {Bio.phone}
            </ContactInfoItem>
            <ContactInfoItem href={Bio.whatsapp} target="_blank" rel="noopener noreferrer">
              <InfoIcon><FaWhatsapp /></InfoIcon>
              WhatsApp: {Bio.phone}
            </ContactInfoItem>
            <ContactInfoItem as="div">
              <InfoIcon><FaMapMarkerAlt /></InfoIcon>
              {Bio.location}
            </ContactInfoItem>
          </ContactInfoList>

          <SocialRow>
            <SocialLink href={Bio.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href={Bio.github} target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </SocialLink>
            <SocialLink href={Bio.whatsapp} target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <FaWhatsapp />
            </SocialLink>
            <SocialLink href={`mailto:${Bio.email}`} title="Email">
              <FaEnvelope />
            </SocialLink>
          </SocialRow>
        </Left>

        <Right>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <FormTitle>Send a Message</FormTitle>
            <ContactInput placeholder="Your Email" name="from_email" required />
            <ContactInput placeholder="Your Name" name="from_name" required />
            <ContactInput placeholder="Subject" name="subject" required />
            <ContactInputMessage placeholder="Your Message" rows="5" name="message" required />
            <ContactButton type="submit" value="Send Message" />
          </ContactForm>
        </Right>
      </Wrapper>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Message sent successfully!"
      />
    </Container>
  );
};

export default Contact;
