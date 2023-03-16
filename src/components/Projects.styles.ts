import { Image, ImageRounded } from "@mui/icons-material";
import { rgbToHex, styled } from "@mui/system";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { colors } from "../utils/color.pallete";

export const ProjectsContainer = styled('div')({
    position: 'absolute',
    width: '100%',
    height: '500vh',
    backgroundColor: colors.red[100]
});

export const ProjectsRow = styled(Row)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '450vh',
    marginTop: '25vh'
});

export const ProjectsCol = styled(Col)({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: `rgba(1, 1, 1, 0.05)`,
    boxShadow: `0 1px 12px 0 ${colors.gray[300]}`,
    backdropFilter: 'blur(4px)',
    '-webkit-backdrop-filter': 'blur(4px)', // Safari
    borderRadius: '10px',
    color: colors.gray[800],
    padding: '80px',
    height: '500px'
});

export const ProjectTitleContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '40%',
    height: '100%'
});

export const ProjectImgContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: `rgba(1, 1, 1, 0.05)`,
    backdropFilter: 'blur(4px)',
    '-webkit-backdrop-filter': 'blur(4px)', // Safari
    borderRadius: '10px',
    color: colors.gray[800],
    padding: '10%',
    width: '100%',
    height: '50%'
});

export const ProjectImg = styled('img')({
    width: '100%',
    height: '100%',
    opacity: '1',
    borderRadius: '10px'
})

export const ProjectTitle = styled('h2')({
    color: colors.gray[800],
    fontFamily: 'Bangers',
    width: '100%',
    textAlign: 'center'
});

export const ProjectDescription = styled('div')({
    width: '60%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
});

export const ProjectAbout = styled('div')({
    fontFamily: 'Oswald',
    color: colors.gray[600],
    width: '60%',
    paddingBottom: '2%',
    paddingTop: '4%'
});

export const ProjectResponsibilities = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Oswald',
    color: colors.gray[600],
    width: '60%',
    paddingBottom: '2%'
});

export const ResponsibilitiesList = styled('ul')({
    backgroundColor: `rgba(1, 1, 1, 0.05)`,
    backdropFilter: 'blur(4px)',
    '-webkit-backdrop-filter': 'blur(4px)', // Safari
    borderRadius: '5px',
});

export const ResponsibilitiesListLi = styled('li')({
    padding: '20px'
});

export const ProjectTechnologies = styled('div')({
    fontFamily: 'Oswald',
    color: colors.gray[600],
    width: '60%',
    paddingBottom: '2%'
});