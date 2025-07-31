import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx';
import { GlobalStyles } from './components/styled/GlobalStyles';
import { AppContainer, MainLayout } from './components/styled/Layout';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

// Separate component to use the theme hook
function AppContent() {
  const { theme } = useTheme();

  return (
    <AppContainer theme={theme}>
      <Router>
        <Header />
        <MainLayout theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainLayout>
      </Router>
    </AppContainer>
  );
}

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </>
  )
}

export default App
