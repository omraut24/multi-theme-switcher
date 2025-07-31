import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import { Header as StyledHeader, HeaderContent, Logo, ThemeSelector } from './styled/Layout';

const Header = () => {
  const { currentTheme, setTheme, theme } = useTheme();
  const location = useLocation();

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: 'ℹ️' },
  ];

  return (
    <StyledHeader
      theme={theme}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <HeaderContent theme={theme}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.md,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Logo theme={theme}>
            🎨 Multi-Theme 
          </Logo>
        </div>

        <nav
          style={{
            display: 'flex',
            gap: theme.spacing.md,
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {navItems.map((item, index) => (
            <div key={item.path}>
              <Link
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                  color: location.pathname === item.path ? theme.colors.accent : theme.colors.text,
                  textDecoration: 'none',
                  borderRadius: theme.layout.borderRadius,
                  transition: theme.animation.transition,
                  fontWeight: location.pathname === item.path ? theme.typography.fontWeight.bold : theme.typography.fontWeight.normal,
                  fontSize: theme.typography.fontSize.medium,
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = `${theme.colors.accent}20`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </div>
          ))}
        </nav>
        
        <div>
          <ThemeSelector
            theme={theme}
            value={currentTheme}
            onChange={handleThemeChange}
            aria-label="Select theme"
          >
            <option value="theme1" style={{ cursor: 'pointer' }}>Theme 1 - Minimalist</option>
            <option value="theme2" style={{ cursor: 'pointer' }}>Theme 2 - Dark Sidebar</option>
            <option value="theme3" style={{ cursor: 'pointer' }}>Theme 3 - Colorful Playful</option>
          </ThemeSelector>
        </div>
      </HeaderContent>
    </StyledHeader>
  );
};

export default Header; 