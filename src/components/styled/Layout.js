import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.animation.transition};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export const Header = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.layout.boxShadow};
  transition: ${({ theme }) => theme.animation.transition};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }
`;

export const HeaderContent = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.xs} 0;
  }
`;

export const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ThemeSelector = styled.select`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  cursor: pointer;
  transition: ${({ theme }) => theme.animation.transition};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent}20;
  }

  option {
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const MainLayout = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  transition: ${({ theme }) => theme.animation.transition};

  @media (max-width: 768px) {
    padding-top: 120px;
  }
`;



export const MainContent = styled(motion.main)`
  padding: ${({ theme }) => theme.spacing.lg};
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
  transition: ${({ theme }) => theme.animation.transition};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const ContentSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  box-shadow: ${({ theme }) => theme.layout.boxShadow};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xlarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  transition: ${({ theme }) => theme.animation.transition};
`;

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  transition: ${({ theme }) => theme.animation.transition};
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  transition: ${({ theme }) => theme.animation.transition};
`;

export const Button = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  cursor: pointer;
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent}40;
  }
`;

 