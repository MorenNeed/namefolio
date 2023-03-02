import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { colors } from '../utils/color.pallete';

const HeroSectionWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: `${colors.gray[100]}`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const AboutMeWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '700px',
  padding: '2rem',
  backgroundColor: `rgba(${colors.gray[900]}, 0.7)`,
  borderRadius: '20px',
  boxShadow: `0 2px 16px rgba(${colors.gray[900]}, 0.7)`,
  backdropFilter: 'blur(10px)',
  '@media (min-width: 768px)': {
    width: '40%',
    marginLeft: '2rem',
  },
});

const AboutMeTitle = styled('h2')({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: colors.gray[100],
  textShadow: `0 2px 4px rgba(${colors.gray[900]}, 0.7)`,
});

const AboutMeContent = styled('p')({
  fontSize: '1.2rem',
  lineHeight: 1.5,
  color: colors.gray[100],
  textShadow: `0 2px 4px rgba(${colors.gray[900]}, 0.7)`,
});

const HeroSection: React.FC = () => {
  return (
    <HeroSectionWrapper>
      <AboutMeWrapper>
        <AboutMeTitle>About Me</AboutMeTitle>
        <AboutMeContent>
        </AboutMeContent>
      </AboutMeWrapper>
    </HeroSectionWrapper >
  );
};

export default HeroSection;
