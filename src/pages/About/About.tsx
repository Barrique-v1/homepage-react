import React from 'react';
import { Typography, Box } from '@mui/material';

const About: React.FC = () => {
    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
            padding: 2
        }}>
            <Typography variant="caption" marginTop={2}>
                Get To Know More
            </Typography>
            <Typography variant="h3" fontWeight={"bold"} marginBottom={5}>
                About Me
            </Typography>
        </Box>
    );
};

export default About;