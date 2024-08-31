import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { useTranslation } from "react-i18next";
import Profilfoto from "../assets/images/Profilfoto.jpg";
import { styled } from "@mui/material/styles";

const About: React.FC = () => {
    const { t } = useTranslation();
    const paragraphs = t('about.paragraphs', { returnObjects: true }) as string[];

    const ProfileImage = styled('img')(({ theme }) => ({
        borderRadius: '50%',
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
    }));

    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
            marginTop: 5,
            paddingX: 2
        }}>
            <Typography variant="caption">
                {t('about.subtitle')}
            </Typography>

            <Typography variant="h3" fontWeight={"bold"} marginBottom={5}>
                {t('about.title')}
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'start',
                    textAlign: 'start',
                    paddingX: 2,
                }}>
                    <Typography variant="body1">
                        {paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingX: 2,
                }}>
                    <ProfileImage src={Profilfoto} alt="Profilfoto" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;
