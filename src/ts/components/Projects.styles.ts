import { styled } from "@mui/system";
import hexToRGB from "../../utils/hexToRGB";

export const ProjectsContainer = styled('div')(({theme}) => ({
    position: 'absolute',
    width: '100%',
    height: '500vh',
    backgroundColor: theme.palette.info.light
}));

export const ProjectsRow = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '450vh',
    marginTop: '25vh'
});

export const ProjectsCol = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: hexToRGB(theme.palette.info.main, 0.25),
    boxShadow: `0 2px 25px 15px ${hexToRGB(theme.palette.info.main, 0.25)}`,
    backdropFilter: 'blur(100px)',
    '-webkit-backdrop-filter': 'blur(100px)', // Safari
    borderRadius: '10px',
    padding: '80px',
    height: '80%',
    '@media (max-width : 780px)' : {
        flexDirection: 'column'
    },
    transition: 'all 0.4s',
    '&:hover':
    {
        backgroundColor: hexToRGB(theme.palette.info.dark, 0.25),
        boxShadow: `0 2px 25px 15px ${hexToRGB(theme.palette.info.dark, 0.25)}`
    }
}));

export const ProjectTitleContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '50%',
    height: '100%'
});

export const ProjectImgContainer = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: `${hexToRGB(theme.palette.info.dark, 0.1)}`,
    backdropFilter: 'blur(4px)',
    '-webkit-backdrop-filter': 'blur(4px)', // Safari
    borderRadius: '10px',
    padding: '10%',
    width: '80%',
    height: '50%'
}));

export const ProjectImg = styled('img')({
    width: '100%',
    height: '100%',
    opacity: '0.8',
    borderRadius: '10px',
    position: 'relative',
    display: 'block'
})

export const ProjectTitle = styled('h2')(({theme}) => ({
    color: theme.palette.secondary.dark,
    textShadow: `0px 0px 4px ${theme.palette.info.dark}`,
    fontFamily: 'Bangers',
    width: '100%',
    textAlign: 'center'
}));

export const ProjectDescription = styled('div')({
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
});

export const ProjectAbout = styled('div')(({theme}) => ({
    fontFamily: 'Oswald',
    color: theme.palette.primary.main,
    textShadow: `0px 0px 4px ${theme.palette.info.dark}`,
    width: '60%',
    paddingBottom: '2%',
    paddingTop: '4%'
}));

export const ProjectResponsibilities = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Oswald',
    color: theme.palette.secondary.main,
    textShadow: `0px 0px 4px ${theme.palette.info.dark}`,
    width: '60%',
    paddingBottom: '2%'
}));

export const ResponsibilitiesList = styled('ul')(({theme}) => ({
    backgroundColor: `${hexToRGB(theme.palette.info.dark, 0.1)}`,
    backdropFilter: 'blur(4px)',
    '-webkit-backdrop-filter': 'blur(4px)', // Safari
    borderRadius: '5px',
}));

export const ResponsibilitiesListLi = styled('li')({
    padding: '20px'
});

export const ProjectTechnologies = styled('div')(({theme}) => ({
    fontFamily: 'Oswald',
    color: theme.palette.primary.main,
    textShadow: `0px 0px 4px ${theme.palette.info.dark}`,
    width: '60%',
    paddingBottom: '2%'
}));