import { Container } from '@mui/system';
import React from 'react';
import HeroSection from '../components/HeroComponent';
import NavBar from '../components/NavbarComponent';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default App;
