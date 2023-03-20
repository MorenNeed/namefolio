import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeroComponent from '../components/HeroComponent';
import NavbarComponent from '../components/NavbarComponent';
import ProjectsComponent from '../components/ProjectsComponent';
import { useState } from 'react';

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavbarComponent />
        <HeroComponent />
        <ProjectsComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
