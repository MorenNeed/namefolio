import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { colors } from '../utils/color.pallete';
import { Container } from '@mui/system';
import hexToRGB from '../utils/hexToRGB';

export const HeroSectionWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: colors.secondary,
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
    backgroundColor: hexToRGB(colors.primary, 0.0125),
    borderRadius: '20px',
    boxShadow: `0 2px 16px ${hexToRGB(colors.neutral1, 0.5)}`,
    backdropFilter: 'blur(10px)',
});

export const AboutMeTitle = styled('h2')({
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: colors.accent,
    fontFamily: 'Bangers',
    textShadow: `0 2px 4px ${hexToRGB(colors.complementary, 0.3)}`,
});

export const AboutMeContent = styled('p')({
    fontSize: '1.2rem',
    fontFamily: 'Oswald',
    lineHeight: 1.5,
    color: hexToRGB(colors.neutral2, 0.5),
    textShadow: `0 2px 4px ${hexToRGB(colors.neutral3, 0.125)}`,
});
