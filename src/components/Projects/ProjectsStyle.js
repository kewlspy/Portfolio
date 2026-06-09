import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(343.07deg, rgba(0, 212, 255, 0.05) 5.71%, rgba(0, 212, 255, 0) 64.83%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
  padding: 80px 24px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const SectionLabel = styled.div`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 12px;
  font-family: 'Space Grotesk', sans-serif;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Space Grotesk', sans-serif;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 17px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 15px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
  ${({ active, theme }) =>
    active &&
    `background: ${theme.primary}33; color: ${theme.primary};`
  }
  &:hover {
    background: ${({ theme }) => theme.primary}18;
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

export const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 24px;
  flex-wrap: wrap;
`;
