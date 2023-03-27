import React, { ReactNode } from 'react';
import ThreeElement from '../elements/ThreeElement';
import { AboutMeContent, AboutMeTitle, AboutMeWrapper, HeroContainer, HeroSectionWrapper } from './Hero.styles';

export default class HeroComponent extends React.Component {
  render(): ReactNode {
    return (
      <HeroSectionWrapper id='about-me'>
        <HeroContainer>
          <AboutMeWrapper>
            <AboutMeTitle>Roshchupkin Oleksii - Junior Fullstack JS Developer</AboutMeTitle>
            <AboutMeContent>
              &emsp;  I`m a proficient junior full-stack developer with a strong desire to explore different domains of development and coding. My expertise encompasses various platforms, programming languages, and embedded systems. I have a fervor for technology and its advancements. I am self-motivated and can work both individually and collaboratively as a part of a team. Additionally, I am a quick learner, always willing to expand my knowledge and skills.
            </AboutMeContent>
          </AboutMeWrapper>
          <ThreeElement />
        </HeroContainer>

      </HeroSectionWrapper >
    );
  }
}
