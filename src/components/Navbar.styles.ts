import { hexToRgb, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { colors } from '../utils/color.pallete';
import { Box, Button } from '@mui/material';


export const GlassNavbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: `rgba(${hexToRgb(colors.secondary)}, 1)`,
    boxShadow: `0 1px 12px 0 ${colors.neutral3}`,
    backdropFilter: 'blur(4px)',
    '-webkit-backdrop-filter': 'blur(4px)', // Safari
    borderRadius: '10px',
    color: colors.primary,
    position: 'fixed',
    top: '5px',
    margin: '0 10%',
    padding: '0 !important',
    width: '80%',
    zIndex: '100',
}));

export const GlassTypography = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightMedium,
    flexGrow: 1,
    fontFamily: 'Oswald',
    marginLeft: theme.spacing(3),
    width: 'fit-content'
}));

export const GlassLinkButtons = styled(Box)(({ theme }) => ({
    margin: theme.spacing(2),
    textDecoration: 'none',
}));

export const GlassLinkButton = styled(Button)(({ theme }) => ({
    color: colors.accent,
    fontFamily: 'Oswald',
}));

export const GlassNavbarButton = styled(IconButton)(({ theme }) => ({
    marginRight: theme.spacing(3),
}));

export const GlassNavbarMenuIcon = styled(MenuIcon)(({ theme }) => ({
    color: colors.complementary,
    fontFamily: 'Oswald',
}));