import styled from "styled-components";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }
  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 380px;
  max-height: 380px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 40px ${({ theme }) => theme.primary}44;
  object-fit: cover;
  @media (max-width: 768px) {
    max-width: 320px;
    max-height: 320px;
  }
  @media (max-width: 640px) {
    max-width: 240px;
    max-height: 240px;
  }
`;

export const TagLine = styled.div`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 12px;
  font-family: 'Space Grotesk', sans-serif;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.15;
  font-family: 'Space Grotesk', sans-serif;
  margin-bottom: 8px;
  @media (max-width: 960px) {
    text-align: center;
    font-size: 42px;
  }
  @media (max-width: 640px) {
    font-size: 32px;
    margin-bottom: 8px;
  }
`;

export const Headline = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
  margin-bottom: 16px;
  font-style: italic;
  font-family: 'Space Grotesk', sans-serif;
  @media (max-width: 960px) {
    text-align: center;
    font-size: 17px;
  }
  @media (max-width: 640px) {
    font-size: 15px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 28px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 64px;
  font-family: 'Space Grotesk', sans-serif;
  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;
  }
  @media (max-width: 640px) {
    font-size: 20px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 36px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 960px) {
    text-align: center;
    font-size: 16px;
  }
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 32px;
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 14px 32px;
  color: ${({ theme }) => theme.black};
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  transition: all 0.3s ease-in-out;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 0 20px ${({ theme }) => theme.primary}55;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px ${({ theme }) => theme.primary}77;
  }
  @media (max-width: 640px) {
    padding: 12px 24px;
    font-size: 14px;
  }
`;

export const OutlineButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 14px 32px;
  color: ${({ theme }) => theme.primary};
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  transition: all 0.3s ease-in-out;
  border: 2px solid ${({ theme }) => theme.primary};
  background: transparent;
  &:hover {
    background: ${({ theme }) => theme.primary}22;
    transform: translateY(-3px);
  }
  @media (max-width: 640px) {
    padding: 12px 24px;
    font-size: 14px;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.text_secondary}66;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 18px;
  transition: all 0.25s ease-in-out;
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${({ theme }) => theme.primary}33;
  }
`;

export const BadgeRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const Badge = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 4px 12px;
  border-radius: 20px;
  background: ${({ theme }) => theme.primary}18;
  border: 1px solid ${({ theme }) => theme.primary}44;
  color: ${({ theme }) => theme.primary};
  font-family: 'Space Grotesk', sans-serif;
`;
