import React from 'react';
import { Typography } from '@mui/material';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div style={{ padding: '2rem 0' }}>
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
