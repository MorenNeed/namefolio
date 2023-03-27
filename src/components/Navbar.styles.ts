import { hexToRgb, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Link } from '@mui/material';


export const GlassNavbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: `rgba(${hexToRgb(theme.palette.info.main)}, 1)`,
    boxShadow: `0 0px 12px 0 ${theme.palette.info.main}`,
    backdropFilter: 'blur(4px)',
    '-webkit-backdrop-filter': 'blur(4px)', // Safari
    borderRadius: '10px',
    color: theme.palette.primary.main,
    textShadow: `0px 0px 4px ${theme.palette.info.dark}`,
    position: 'fixed',
    top: '20px',
    margin: '0 10%',
    padding: '0 !important',
    width: '80%',
    zIndex: '100',
}));

export const GlassTypography = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightMedium,
    flexGrow: 1,
    fontFamily: 'Oswald',
    marginLeft: theme.spacing(8),
    width: 'fit-content'
}));

export const GlassLinkButtons = styled(Box)(({ theme }) => ({
    margin: theme.spacing(2),
    textDecoration: 'none',
    marginRight: theme.spacing(5)
}));

export const GlassLinkButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.dark,
    textShadow: `0px 0px 4px ${theme.palette.info.dark}`,
    fontFamily: 'Oswald',
    transition: 'all 0.4s',
    padding: '0px',
    '&:hover': {
        backgroundColor: theme.palette.info.main
    }
}));

export const GlassLink = styled(Link)(({ theme }) => ({
    color: theme.palette.secondary.dark,
    textDecoration: 'none',
    textShadow: `0px 0px 4px ${theme.palette.info.dark}`,
    fontFamily: 'Oswald',
    transition: 'all 0.4s',
    width: '100%',
    height: '100%',
    padding: '6px 8px',
    borderRadius: '10px',
    '&:hover': {
        backgroundColor: theme.palette.info.main
    }
}));

export const GlassNavbarButton = styled(IconButton)(({ theme }) => ({
    marginRight: theme.spacing(5),
}));

export const GlassNavbarMenuIcon = styled(MenuIcon)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontFamily: 'Oswald',
}));