import { createTheme } from '@mui/material/styles';


const colors = createTheme({
  palette: {
    primary: {
      main: '#9DD9D2',
      light: '#C4E8E4',
      dark: '#6CC6BB'
    },
    secondary: {
      main: '#FFECD6',
      light: '#FFF8F0',
      dark: '#FFD9AD'
    },
    error: {
      main: '#F95738',
      light: '#FA7A61',
      dark: '#F83812'
    },
    warning: {
      main: '#FF850A',
      light: '#FF9933',
      dark: '#E07000'
    },
    info: {
      main: '#423F78',
      light: '#6654A0',
      dark: '#2B2343'
    },
    success: {
      main: '#48AD72',
      light: '#61BD87',
      dark: '#3C905F'
    },
  },
});

export default colors;