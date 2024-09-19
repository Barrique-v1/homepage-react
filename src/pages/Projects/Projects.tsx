import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import ProjectCard from './ProjectCard';
import bucksbuddypng from '../../assets/images/bucksbuddypng.png';
import recipevaultpng from '../../assets/images/recipevaultpng.png';
import {SiBootstrap, SiNuxtdotjs, SiPostgresql, SiSpring, SiTypescript, SiVuedotjs, SiTailwindcss} from 'react-icons/si';
import {ReactComponent as JavaIcon} from '../../assets/icons/java.svg';
import {useTranslation} from "react-i18next";

const Projects: React.FC = () => {
    const {t} = useTranslation();
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'center',
                marginTop: 5,
                paddingX: 2
            }}
        >
            <Typography variant="caption">
                {t('projects.subtitle')}
            </Typography>
            <Typography variant="h3" fontWeight="bold" marginBottom={5}>
                {t('projects.title')}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <ProjectCard
                        title="Bucks Buddy"
                        image={bucksbuddypng}
                        description={t('projects.trafelfund')}
                        button_text={t('projects.button')}
                        link="https://bucks-buddy.onrender.com"
frontend_technologies={[
    {name: 'TypeScript', icon: <SiTypescript style={{color: '#3178C6'}}/>},
    {name: 'Vue.js', icon: <SiVuedotjs style={{color: '#42b883'}}/>},
    {name: 'Bootstrap', icon: <SiBootstrap style={{color: '#7952B3'}}/>},
]}
backend_technologies={[
    {name: 'Java', icon: <JavaIcon width={40} height={40}/>},
    {name: 'Java Spring', icon: <SiSpring style={{color: '#6DB33F'}}/>},
    {name: 'PostgreSQL', icon: <SiPostgresql style={{color: '#336791'}}/>},
]}
                        repoLinks={{
                            frontend: "https://github.com/Barrique-v1/Travel_Fund_Frontend",
                            backend: "https://github.com/Barrique-v1/Travel_Fund_Backend"
                        }}
                    />
                </Grid>
                {/* Add more ProjectCards here */}
                <Grid item xs={12} md={6}>
                    <ProjectCard
                        title="Recipe Vault"
                        description={t('projects.digitalcookbook')}
                        image={recipevaultpng}
                        button_text=''
                        link='https://github.com/NormanPeters/recipevault-backend'
frontend_technologies={[
    {name: 'TypeScript', icon: <SiTypescript style={{color: '#3178C6'}}/>},
    {name: 'Vue.js', icon: <SiVuedotjs style={{color: '#42b883'}}/>},
    {name: 'Nuxt.js', icon: <SiNuxtdotjs style={{color: '#00C58E'}}/>},
    {name: 'Tailwind CSS', icon: <SiTailwindcss style={{color: '#38B2AC'}}/>},
]}
backend_technologies={[
    {name: 'Java', icon: <JavaIcon width={40} height={40}/>},
    {name: 'Java Spring', icon: <SiSpring style={{color: '#6DB33F'}}/>},
    {name: 'PostgreSQL', icon: <SiPostgresql style={{color: '#336791'}}/>},
]}
                        repoLinks={{
                            frontend: 'https://github.com/NormanPeters/recipevault-frontend',
                            backend: 'https://github.com/NormanPeters/recipevault-backend'
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Projects;
