import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { colors } from '../utils/color.pallete';
import { Container } from '@mui/system';

export const HeroSectionWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: `${colors.gray[100]}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    top: '0',
    zIndex: '-1'
});

export const HeroContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'row'
});

export const AboutMeWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '700px',
    padding: '2rem',
    backgroundColor: `rgba(1,1,1, 0.025)`,
    borderRadius: '20px',
    boxShadow: `0 2px 16px rgba(1,1,1, 0.1)`,
    backdropFilter: 'blur(10px)',
});

export const AboutMeTitle = styled('h2')({
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: colors.gray[800],
    fontFamily: 'Bangers',
    textShadow: `0 2px 4px rgba(${colors.gray[900]}, 0.7)`,
});

export const AboutMeContent = styled('p')({
    fontSize: '1.2rem',
    fontFamily: 'Oswald',
    lineHeight: 1.5,
    color: colors.gray[500],
    textShadow: `0 2px 4px rgba(${colors.gray[900]}, 0.7)`,
});
