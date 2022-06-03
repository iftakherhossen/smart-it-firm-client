import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Project from './Project';

const Projects = () => {
    return (
        <div id="projects" style={{ backgroundColor: '#111430', color: 'white' }}>
            <Container>
                <Box sx={{ textAlign: 'center', pt: 8, pb: 6 }}>
                    <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', fontFamily: 'Macondo, cursive', color: 'white' }}>Our Projects</Typography>
                </Box>
                <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                    <Project />
                </div>
            </Container>
        </div>
    );
};

export default Projects;  