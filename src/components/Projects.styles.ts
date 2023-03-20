import { Image, ImageRounded } from "@mui/icons-material";
import { rgbToHex, styled } from "@mui/system";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { colors } from "../utils/color.pallete";
import hexToRGB from "../utils/hexToRGB";

export const ProjectsContainer = styled('div')({
    position: 'absolute',
    width: '100%',
    height: '500vh',
    backgroundColor: colors.secondary
});

export const ProjectsRow = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '450vh',
    marginTop: '25vh'
});

export const ProjectsCol = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: hexToRGB(colors.neutral1, 0.05),
    boxShadow: `0 1px 12px 0 ${hexToRGB(colors.neutral3, 0.75)}`,
    backdropFilter: 'blur(4px)',
    '-webkit-backdrop-filter': 'blur(4px)', // Safari
    borderRadius: '10px',
    padding: '80px',
    height: '500px'
});

export const ProjectTitleContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '50%',
    height: '100%'
});

export const ProjectImgContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: `${hexToRGB(colors.neutral1, 0.05)}`,
    backdropFilter: 'blur(4px)',
    '-webkit-backdrop-filter': 'blur(4px)', // Safari
    borderRadius: '10px',
    padding: '10%',
    width: '80%',
    height: '50%'
});

export const ProjectImg = styled('img')({
    width: '100%',
    height: '100%',
    opacity: '0.8',
    borderRadius: '10px',
    position: 'relative',
    display: 'block'
})

export const ProjectTitle = styled('h2')({
    color: colors.complementary,
    fontFamily: 'Bangers',
    width: '100%',
    textAlign: 'center'
});

export const ProjectDescription = styled('div')({
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
});

export const ProjectAbout = styled('div')({
    fontFamily: 'Oswald',
    color: colors.primary,
    width: '60%',
    paddingBottom: '2%',
    paddingTop: '4%'
});

export const ProjectResponsibilities = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Oswald',
    color: colors.accent,
    width: '60%',
    paddingBottom: '2%'
});

export const ResponsibilitiesList = styled('ul')({
    backgroundColor: `${hexToRGB(colors.neutral2, 0.05)}`,
    backdropFilter: 'blur(4px)',
    '-webkit-backdrop-filter': 'blur(4px)', // Safari
    borderRadius: '5px',
});

export const ResponsibilitiesListLi = styled('li')({
    padding: '20px'
});

export const ProjectTechnologies = styled('div')({
    fontFamily: 'Oswald',
    color: colors.primary,
    width: '60%',
    paddingBottom: '2%'
});