import React from 'react';
import { Typography } from '@mui/material';

const Home: React.FC = () => {
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome to My Portfolio
            </Typography>
            <Typography variant="body1">
                This is the home page.
            </Typography>
        </div>
    );
};

export default Home;
