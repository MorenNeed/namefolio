import { Container } from '@mui/system';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ProjectsCol, ProjectsContainer, ProjectsRow } from './Projects.styles';

export default class ProjectsComponent extends React.Component
{
    render(): React.ReactNode {
        return(
            <ProjectsContainer>
                <Container>
                    <ProjectsRow>
                        <ProjectsCol></ProjectsCol>
                        <ProjectsCol></ProjectsCol>
                        <ProjectsCol></ProjectsCol>
                    </ProjectsRow>
                </Container>
            </ProjectsContainer>
        );
    }
}