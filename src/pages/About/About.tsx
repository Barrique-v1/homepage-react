import React from 'react';
import { Typography } from '@mui/material';
import './About.css';

const About: React.FC = () => {
    return (
        <div style={{ padding: '2rem 0' }}>
            <Typography variant="h2" component="h1" gutterBottom>
                About Me
            </Typography>
            <Typography variant="body1">
                This is the about page.
            </Typography>
        </div>
    );
};

export default About;
