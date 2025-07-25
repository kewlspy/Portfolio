import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(150, 0, 255, 0.4);
    opacity: 0.95;
  }
  &:active {
    transform: translateY(1px) scale(0.97);
    box-shadow: 0 2px 6px rgba(150, 0, 255, 0.2);
    opacity: 0.9;
  }
`;

const Contact = () => {
  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted");
  //   emailjs
  //     .sendForm(
  //       "service_utacrco",
  //       "template_ogurm9f",
  //       form.current,
  //       "bs44JZzAcAKj2w12F"
  //     )
  //     .then(
  //       (result) => {
  //         setOpen(true);
  //         form.current.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formEl = form.current;
    const formData = new FormData(formEl);

    const fromEmail = formData.get("from_email")?.trim();
    const fromName = formData.get("from_name")?.trim();
    const subject = formData.get("subject")?.trim();
    const message = formData.get("message")?.trim();

    // Check for empty fields
    if (!fromEmail || !fromName || !subject || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Sending email...");

    emailjs
      .sendForm(
        "service_utacrco",
        "template_ogurm9f",
        formEl,
        "bs44JZzAcAKj2w12F"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!");
          setOpen(true); // Show success UI/modal/snackbar
          formEl.reset();
        },
        (error) => {
          console.error("Email send error:", error.text);
          alert(
            "Something went wrong while sending the email. Please try again."
          );
        }
      );
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage
            placeholder="Message"
            rows="4"
            name="message"
            required
          />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
