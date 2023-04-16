import { Link } from '@mui/material';
import React, { ReactNode } from 'react';
import { GlassLink, GlassLinkButton, GlassLinkButtons, GlassNavbar, GlassNavbarButton, GlassNavbarMenuIcon, GlassTypography } from './Navbar.styles';


export default class NavbarComponent extends React.Component {
  render() : ReactNode {
    return (
        <GlassNavbar>
          <GlassTypography variant="h6">
            Roshchupkin Oleksii Portfolio
          </GlassTypography>
          <GlassLinkButtons>
            <GlassLinkButton><GlassLink href='#about-me'>About</GlassLink></GlassLinkButton>
            <GlassLinkButton><GlassLink href='#projects'>Projects</GlassLink></GlassLinkButton>
            <GlassLinkButton><GlassLink href='#contact'>Contact Me</GlassLink></GlassLinkButton>
          </GlassLinkButtons>
          {/* <GlassNavbarButton edge="end">
            <GlassNavbarMenuIcon />
          </GlassNavbarButton> */}
        </GlassNavbar>
    );
  }
}

