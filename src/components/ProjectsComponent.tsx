import { Container } from '@mui/system';
import React from 'react';
import { ProjectAbout, ProjectDescription, ProjectImg, ProjectImgContainer, ProjectResponsibilities, ProjectsCol, ProjectsContainer, ProjectsRow, ProjectTechnologies, ProjectTitle, ProjectTitleContainer, ResponsibilitiesList, ResponsibilitiesListLi } from './Projects.styles';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default class ProjectsComponent extends React.Component {
    render(): React.ReactNode {
        return (
            <ProjectsContainer id='projects'>
                <Container>
                    <ProjectsRow>
                        <AnimationOnScroll animateIn='animate__animated animate__backInLeft animate__faster'>
                            <ProjectsCol>
                                <ProjectTitleContainer>
                                    <ProjectImgContainer><ProjectImg src={'img/product-list-image-app.jpg'} alt='PRODUCT LIST MANAGE APP'/></ProjectImgContainer>
                                    <ProjectTitle>Product List Manage App</ProjectTitle>
                                </ProjectTitleContainer>
                                <ProjectDescription>
                                    <ProjectAbout><strong>About: </strong>Website for adding, viewing, and deleting products.</ProjectAbout>
                                    <ProjectResponsibilities><strong>Responsibilities: </strong>
                                        <ResponsibilitiesList>
                                            <ResponsibilitiesListLi>Developed MVC pattern application.</ResponsibilitiesListLi>
                                            <ResponsibilitiesListLi>Implemented RESTful API.</ResponsibilitiesListLi>
                                        </ResponsibilitiesList>
                                    </ProjectResponsibilities>
                                    <ProjectTechnologies><strong>Technologies: </strong>JavaScript, PHP, React, MySQL.</ProjectTechnologies>
                                </ProjectDescription>
                            </ProjectsCol>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn='animate__animated animate__backInLeft animate__faster'>
                            <ProjectsCol>
                                <ProjectTitleContainer>
                                    <ProjectImgContainer><img src='' /></ProjectImgContainer>
                                    <ProjectTitle>Puzzles online store</ProjectTitle>
                                </ProjectTitleContainer>
                                <ProjectDescription>
                                    <ProjectAbout><strong>About: </strong>Online store for selling puzzles.</ProjectAbout>
                                    <ProjectResponsibilities><strong>Responsibilities: </strong>
                                        <ResponsibilitiesList>
                                            <ResponsibilitiesListLi>Developed controllers, routes, and factories for the Laravel app.</ResponsibilitiesListLi>
                                            <ResponsibilitiesListLi>Developed responsive front-end design.</ResponsibilitiesListLi>
                                        </ResponsibilitiesList>
                                    </ProjectResponsibilities>
                                    <ProjectTechnologies><strong>Technologies: </strong>JavaScript, PHP, React, Laravel, MySQL.</ProjectTechnologies>
                                </ProjectDescription>
                            </ProjectsCol>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn='animate__animated animate__backInLeft animate__faster'>
                            <ProjectsCol>
                                <ProjectTitleContainer>
                                    <ProjectImgContainer><img src='' /></ProjectImgContainer>
                                    <ProjectTitle>HORECA website</ProjectTitle>
                                </ProjectTitleContainer>
                                <ProjectDescription>
                                    <ProjectAbout><strong>About: </strong>Online store for a restaurant.</ProjectAbout>
                                    <ProjectResponsibilities><strong>Responsibilities: </strong>
                                        <ResponsibilitiesList>
                                            <ResponsibilitiesListLi>Developed services, and controllers for node.js backend.</ResponsibilitiesListLi>
                                            <ResponsibilitiesListLi>Implemented custom calendar data input for reservations.</ResponsibilitiesListLi>
                                        </ResponsibilitiesList>
                                    </ProjectResponsibilities>
                                    <ProjectTechnologies><strong>Technologies: </strong>JavaScript, Node.js, React, React Hooks, MySQL.</ProjectTechnologies>
                                </ProjectDescription>
                            </ProjectsCol>
                        </AnimationOnScroll>
                    </ProjectsRow>
                </Container>
            </ProjectsContainer>
        );
    }
}