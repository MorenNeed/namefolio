import { Container } from '@mui/material';
import React from 'react';
import { GlassLinkButton, GlassLinkButtons, GlassNavbar, GlassNavbarButton, GlassNavbarMenuIcon, GlassTypography } from './Navbar.styles';



const NavBar: React.FC = () => {
  return (
    <Container>
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
    </Container>

  );
};

export default NavBar;
