import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --transition: all 0.3s ease;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-family);
    line-height: 1.6;
    transition: var(--transition);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Security: Prevent XSS */
  * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Allow text selection for content areas */
  p, span, div, h1, h2, h3, h4, h5, h6 {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }

  /* Responsive images */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Focus styles for accessibility */
  *:focus {
    outline: 2px solid #3498db;
    outline-offset: 2px;
  }

  /* Smooth scrolling for anchor links */
  html {
    scroll-behavior: smooth;
  }

  /* Prevent horizontal scroll */
  body {
    overflow-x: hidden;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`; 