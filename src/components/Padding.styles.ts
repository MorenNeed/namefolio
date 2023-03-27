import { styled } from '@mui/material/styles';

export const PaddingWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    background: `linear-gradient(180deg, ${theme.palette.info.main}, ${theme.palette.info.light})`
}));