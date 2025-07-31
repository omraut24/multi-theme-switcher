import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext.jsx';
import {
  MainContent,
  ContentSection,
  Title,
  Subtitle,
  Paragraph,
  Button,
} from '../components/styled/Layout';

const About = () => {
  const { theme } = useTheme();

  const features = [
    {
      title: 'Dynamic Theming',
      description: 'Switch between three completely different themes with unique layouts, colors, and typography.',
      icon: '🎨'
    },
    {
      title: 'Responsive Design',
      description: 'Fully responsive layout that works perfectly on desktop, tablet, and mobile devices.',
      icon: '📱'
    },
    {
      title: 'API Integration',
      description: 'Real-time data fetching from external APIs with proper error handling and security measures.',
      icon: '🔗'
    },
    {
      title: 'Smooth Animations',
      description: 'Beautiful animations and transitions powered by Framer Motion for enhanced user experience.',
      icon: '✨'
    },
    {
      title: 'JavaScript',
      description: 'Built with modern JavaScript for better code quality and developer experience.',
      icon: '🔒'
    },
    {
      title: 'Theme Persistence',
      description: 'Your theme preference is saved in localStorage and persists across page reloads.',
      icon: '💾'
    }
  ];

  const handleViewSourceCode = () => {
    window.open('https://github.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <MainContent
      theme={theme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContentSection theme={theme}>
        <Title theme={theme}>About MultiTheme Store</Title>
        <Paragraph theme={theme}>
          Welcome to our innovative multi-theme React application! This project demonstrates 
          the power of dynamic theming with three distinct visual experiences that transform 
          not just colors, but the entire layout, typography, and user interface.
        </Paragraph>
        <Paragraph theme={theme}>
          Built with modern React practices, JavaScript for flexibility, and styled-components 
          for dynamic styling, this application showcases how a single codebase can provide 
          multiple unique user experiences through theme switching.
        </Paragraph>
      </ContentSection>

      <ContentSection theme={theme}>
        <Subtitle theme={theme}>Theme Overview</Subtitle>
        <Paragraph theme={theme}>
          Each theme offers a completely different experience:
        </Paragraph>
        
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: theme.spacing.lg,
            marginTop: theme.spacing.lg
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          role="list"
          aria-label="Theme overview"
        >
          <motion.div
            style={{
              padding: theme.spacing.md,
              backgroundColor: theme.colors.surface,
              borderRadius: theme.layout.borderRadius,
              border: `1px solid ${theme.colors.border}`,
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            role="listitem"
          >
            <h3 style={{ color: theme.colors.primary, marginBottom: theme.spacing.sm }}>
              🎨 Theme 1 - Minimalist
            </h3>
            <p style={{ color: theme.colors.textSecondary, fontSize: theme.typography.fontSize.small }}>
              Clean, simple design with light colors and sans-serif typography. 
              Perfect for professional applications.
            </p>
          </motion.div>

          <motion.div
            style={{
              padding: theme.spacing.md,
              backgroundColor: theme.colors.surface,
              borderRadius: theme.layout.borderRadius,
              border: `1px solid ${theme.colors.border}`,
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            role="listitem"
          >
            <h3 style={{ color: theme.colors.primary, marginBottom: theme.spacing.sm }}>
              🌙 Theme 2 - Dark Sidebar
            </h3>
            <p style={{ color: theme.colors.textSecondary, fontSize: theme.typography.fontSize.small }}>
              Dark mode with sidebar navigation and serif typography. 
              Ideal for content-heavy applications.
            </p>
          </motion.div>

          <motion.div
            style={{
              padding: theme.spacing.md,
              backgroundColor: theme.colors.surface,
              borderRadius: theme.layout.borderRadius,
              border: `1px solid ${theme.colors.border}`,
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            role="listitem"
          >
            <h3 style={{ color: theme.colors.primary, marginBottom: theme.spacing.sm }}>
              🌈 Theme 3 - Colorful Playful
            </h3>
            <p style={{ color: theme.colors.textSecondary, fontSize: theme.typography.fontSize.small }}>
              Vibrant colors with the Pacifico font and playful design elements. 
              Great for creative and fun applications.
            </p>
          </motion.div>
        </motion.div>
      </ContentSection>
    </MainContent>
  );
};

export default About; 
