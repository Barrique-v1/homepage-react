import React from 'react';
import { Typography, Box } from '@mui/material';
import {useTranslation} from "react-i18next";

const About: React.FC = () => {
    const { t } = useTranslation();
    const paragraphs = t('about.paragraphs', { returnObjects: true }) as string[];

    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography variant="caption">
                Get To Know More
            </Typography>
            <Typography variant="h3" fontWeight={"bold"} marginBottom={5}>
                About Me
            </Typography>

            <Typography variant="body1" textAlign="center">
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </Typography>
        </Box>
    );
};

export default About;