import React from 'react';
import Profilfoto from './assets/Profilfoto.jpg';
import { Typography } from '@mui/material';

const Home: React.FC = () => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <img src={Profilfoto} alt="Profilfoto" style={{borderRadius: '50%', width: '150px', height: '150px'}}/>
            <Typography variant="h4" style={{marginTop: '20px'}}>
                Willkommen auf meiner Homepage!
            </Typography>
        </div>
    );
};

export default Home;
