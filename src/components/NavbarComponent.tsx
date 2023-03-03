import { Container } from '@mui/material';
import React, { ReactNode } from 'react';
import { GlassLinkButton, GlassLinkButtons, GlassNavbar, GlassNavbarButton, GlassNavbarMenuIcon, GlassTypography } from './Navbar.styles';


export default class NavbarComponent extends React.Component {
  render() : ReactNode {
    return (
        <GlassNavbar>
          <GlassTypography variant="h6">
            Oleksii
          </GlassTypography>
          <GlassLinkButtons>
            <GlassLinkButton>Home</GlassLinkButton>
            <GlassLinkButton>About</GlassLinkButton>
            <GlassLinkButton>Contact</GlassLinkButton>
          </GlassLinkButtons>
          <GlassNavbarButton edge="end">
            <GlassNavbarMenuIcon />
          </GlassNavbarButton>
        </GlassNavbar>
    );
  }
}

