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
    backgroundColor: `rgba(${hexToRgb(colors.gray[100])}, 1)`,
    boxShadow: `0 1px 12px 0 ${colors.gray[300]}`,
    backdropFilter: 'blur(4px)',
    '-webkit-backdrop-filter': 'blur(4px)', // Safari
    borderRadius: '10px',
    color: colors.gray[800],
    position: 'fixed',
    marginTop: '5px'
}));

export const GlassTypography = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightMedium,
    flexGrow: 1,
    marginLeft: theme.spacing(1),
    width: 'fit-content'
}));

export const GlassLinkButtons = styled(Box)(({ theme }) => ({
    margin: theme.spacing(1),
    textDecoration: 'none',
}));

export const GlassLinkButton = styled(Button)(({ theme }) => ({
    color: colors.gray[700],
}));

export const GlassNavbarButton = styled(IconButton)(({ theme }) => ({
    marginRight: theme.spacing(1),
}));

export const GlassNavbarMenuIcon = styled(MenuIcon)(({ theme }) => ({
    color: colors.gray[800],
}));