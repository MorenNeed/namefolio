import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeroComponent from '../components/HeroComponent';
import NavbarComponent from '../components/NavbarComponent';
import PaddingComponent from '../components/PaddingComponent';
import ProjectsComponent from '../components/ProjectsComponent';
import colors from '../../utils/color.pallete';

function App() {

  return (
    <ThemeProvider theme={colors}>
      <div className="App">
        <NavbarComponent />
        <HeroComponent />
        <PaddingComponent />
        <ProjectsComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
