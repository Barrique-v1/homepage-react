import React from 'react';
import { Typography } from '@mui/material';
import './Projects.css';

const Projects: React.FC = () => {
    return (
        <div style={{ padding: '2rem 0' }}>
            <Typography variant="h2" component="h1" gutterBottom>
                My Projects
            </Typography>
            <Typography variant="body1">
                This is the projects page.
            </Typography>
        </div>
    );
};

export default Projects;
