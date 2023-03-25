import React, { ReactNode } from 'react';
import ThreeElement from '../elements/ThreeElement';
import { AboutMeContent, AboutMeTitle, AboutMeWrapper, HeroContainer, HeroSectionWrapper } from './Hero.styles';

export default class HeroComponent extends React.Component {
  render() : ReactNode {
    return (
      <HeroSectionWrapper>
        <HeroContainer>
          <AboutMeWrapper>
            <AboutMeTitle>Roshchupkin Oleksii - Junior Fullstack JS Developer</AboutMeTitle>
            <AboutMeContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis cras sed felis eget. Quisque id diam vel quam elementum pulvinar etiam non quam. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. A lacus vestibulum sed arcu non odio euismod lacinia at. Mauris a diam maecenas sed. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Sed felis eget velit aliquet sagittis id. Faucibus purus in massa tempor nec feugiat. Tellus in hac habitasse platea dictumst.
            </AboutMeContent>
          </AboutMeWrapper>
          <ThreeElement/>
        </HeroContainer>

      </HeroSectionWrapper >
    );
  }
}
