import { rgbToHex, styled } from "@mui/system";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { colors } from "../utils/color.pallete";

export const ProjectsContainer = styled('div')({
    position: 'absolute',
    width: '100%',
    height: '300vh',
    backgroundColor: colors.red[100]
});

export const ProjectsRow = styled(Row)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '250vh',
    marginTop: '25vh'
});

export const ProjectsCol = styled(Col)({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: `rgba(1, 1, 1, 0.05)`,
    boxShadow: `0 1px 12px 0 ${colors.gray[300]}`,
    backdropFilter: 'blur(4px)',
    '-webkit-backdrop-filter': 'blur(4px)', // Safari
    borderRadius: '10px',
    color: colors.gray[800],
    padding: '10%',
    height: '20%'
    
});