import React from 'react';
import Profilfoto from '../../assets/images/Profilfoto.jpg';
import { Grid, Typography, IconButton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ProfileImage = styled('img')(({ theme }) => ({
    borderRadius: '50%',
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
}));

const IconContainer = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(1),
}));

const Home: React.FC = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <ProfileImage src={Profilfoto} alt="Profilfoto" />
                </Grid>

                <Grid item xs={12} sm={6} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                    <Typography variant="body1">
                        Hello, I am <br />
                    </Typography>
                    <Typography variant="h3" fontWeight="bold" component="span" mb={2}>
                        Norman Peters<br />
                    </Typography>
                    <Typography variant="body1">
                        a Business Informatics student at the University of Applied Sciences in Berlin and an aspiring software developer.
                        I'm excited to share some of my projects with you — please feel free to explore them!
                    </Typography>

                    <IconContainer>
                        <IconButton href="https://github.com/Barrique-v1" target="_blank" aria-label="GitHub">
                            <GitHubIcon sx={{ color: '#333', fontSize: 36 }} />
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/in/peters-norman" target="_blank" aria-label="LinkedIn">
                            <LinkedInIcon sx={{ color: '#0077b5', fontSize: 36 }} />
                        </IconButton>
                    </IconContainer>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
