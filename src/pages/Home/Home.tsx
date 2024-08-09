import React from 'react';
import Profilfoto from '../../assets/images/Profilfoto.jpg';
import {Grid, Typography, IconButton} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home: React.FC = () => {
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6} display="flex" justifyContent="center">
                    <img src={Profilfoto} alt="Profilfoto"
                         style={{borderRadius: '50%', width: '100%', maxWidth: '500px', height: 'auto'}}/>
                </Grid>
                <Grid item xs={12} sm={6} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant="h6" fontWeight={"bold"} style={{ marginTop: '20px', textAlign: 'center' }}>
                        Hello, I'm Norman Peters,
                    </Typography>
                    <Typography variant="body1" style={{ marginTop: '20px', textAlign: 'center', padding: '0 20px' }}>
                        a Business Informatics student at HTW Berlin and an aspiring software developer.
                        I'm excited to share some of my projects with you—please feel free to explore them!
                    </Typography>

                    {/* Icon Buttons */}
                    <div style={{ display: 'flex', marginTop: '30px' }}>
                        <IconButton href="https://github.com/Barrique-v1" target="_blank" aria-label="GitHub">
                            <GitHubIcon style={{ color: '#333', fontSize: '36px' }} />
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/in/peters-norman" target="_blank" aria-label="LinkedIn">
                            <LinkedInIcon style={{ color: '#0077b5', fontSize: '36px' }} />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;
