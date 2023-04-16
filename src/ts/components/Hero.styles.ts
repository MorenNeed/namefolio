import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';
import hexToRGB from '../../utils/hexToRGB';

export const HeroSectionWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.info.main,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    top: '0',
    zIndex: '-1'
}));

export const HeroContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'row'
});

export const AboutMeWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50%',
    padding: '5%',
    backgroundColor: hexToRGB(theme.palette.info.dark, 0.15),
    borderRadius: '20px',
    boxShadow: `0 0px 16px ${hexToRGB(theme.palette.info.dark, 0.25)}`,
    backdropFilter: 'blur(10px)',
}));

export const AboutMeTitle = styled('h2')(({theme}) => ({
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: theme.palette.primary.main,
    fontFamily: 'Bangers',
    textShadow: `0 0px 4px ${theme.palette.info.dark}`,
}));

export const AboutMeContent = styled('p')(({theme}) => ({
    fontSize: '1.2rem',
    fontFamily: 'Oswald',
    color: theme.palette.secondary.dark,
    textShadow: `0 0px 4px ${theme.palette.info.dark}`,
}));
