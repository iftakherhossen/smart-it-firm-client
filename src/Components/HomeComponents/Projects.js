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
                <Box>
                    <Project />
                </Box>
            </Container>
        </div>
    );
};

export default Projects;  