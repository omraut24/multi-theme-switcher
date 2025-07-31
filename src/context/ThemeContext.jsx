import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes } from '../themes';

const ThemeContext = createContext(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'theme1';
  });

  const theme = themes[currentTheme];

  const setTheme = (newTheme) => {
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--font-family', theme.typography.fontFamily);
    document.documentElement.style.setProperty('--transition', theme.animation.transition);
  }, [theme]);

  const value = {
    currentTheme,
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 