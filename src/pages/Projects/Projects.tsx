import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import ProjectCard from './ProjectCard';
import BucksBuddyLogo from '../../assets/images/BucksBuddy_Logo.png';
import {SiBootstrap, SiNuxtdotjs, SiPostgresql, SiSpringboot, SiTypescript, SiVuedotjs} from 'react-icons/si';
import {FaGolang} from "react-icons/fa6";
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
                        image={BucksBuddyLogo}
                        description={t('projects.trafelfund')}
                        button_text={t('projects.button')}
                        link="https://bucks-buddy.onrender.com"
                        frontend_technologies={[
                            {name: 'TypeScript', icon: <SiTypescript fontSize="48px" style={{color: '#3178C6'}}/>},
                            {name: 'Vue.js', icon: <SiVuedotjs fontSize="48px" style={{color: '#42b883'}}/>},
                            {name: 'Bootstrap', icon: <SiBootstrap fontSize="48px" style={{color: '#7952B3'}}/>},
                        ]}
                        backend_technologies={[
                            {name: 'Java', icon: <JavaIcon width={48} height={48}/>},
                            {name: 'Spring Boot', icon: <SiSpringboot fontSize="48px" style={{color: '#6DB33F'}}/>},
                            {name: 'PostgreSQL', icon: <SiPostgresql fontSize="48px" style={{color: '#336791'}}/>},

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
                        image="https://via.placeholder.com/1001x339.png?text=Recipe+Vault+-+Coming+Soon"
                        button_text=''
                        link=''
                        frontend_technologies={[
                            {name: 'TypeScript', icon: <SiTypescript fontSize="48px" style={{color: '#3178C6'}}/>},
                            {name: 'Vue.js', icon: <SiVuedotjs fontSize="48px" style={{color: '#42b883'}}/>},
                            {name: 'Nuxt.js', icon: <SiNuxtdotjs fontSize="48px" style={{color: '#00C58E'}}/>},
                            {name: 'Bootstrap', icon: <SiBootstrap fontSize="48px" style={{color: '#7952B3'}}/>},
                        ]}
                        backend_technologies={[
                            {name: 'Golang', icon: <FaGolang fontSize="48px" style={{color: '#00ADD8'}}/>},
                            {name: 'PostgreSQL', icon: <SiPostgresql fontSize="48px" style={{color: '#336791'}}/>},
                        ]}
                        repoLinks={{
                            frontend: '',
                            backend: ''
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Projects;
