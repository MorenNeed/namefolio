import { Container } from '@mui/system';
import React from 'react';
import HeroComponent from '../components/HeroComponent';
import NavbarComponent from '../components/NavbarComponent';
import ProjectsComponent from '../components/ProjectsComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeroComponent />
      <ProjectsComponent />
    </div>
  );
}

export default App;
