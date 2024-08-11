import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import ProjectCard from './ProjectCard';
import TravelFundImage from '../../assets/images/Travelfund_Logo.png';
import { SiTypescript, SiVuedotjs, SiSpringboot, SiPostgresql } from 'react-icons/si';
import { ReactComponent as JavaIcon } from '../../assets/icons/java.svg';
import {useTranslation} from "react-i18next";

const Projects: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography variant="caption">
                Browse My Latest
            </Typography>
            <Typography variant="h3" fontWeight="bold" marginBottom={5}>
                Projects
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <ProjectCard
                        title="Travel Fund"
                        image={TravelFundImage}
                        description= {t('projects.trafelfund')}
                        button_text={t('projects.button')}
                        link="https://travel-fund.onrender.com"
                        frontend_technologies={[
                            { name: 'TypeScript', icon: <SiTypescript fontSize="48px" style={{ color: '#3178C6' }} /> },
                            { name: 'Vue.js', icon: <SiVuedotjs fontSize="48px" style={{ color: '#42b883' }} /> },
                        ]}
                        backend_technologies={[
                            { name: 'Java', icon: <JavaIcon width={48} height={48} /> },
                            { name: 'Spring Boot', icon: <SiSpringboot fontSize="48px" style={{ color: '#6DB33F' }} /> },
                        ]}
                        database_technologies={[
                            { name: 'PostgreSQL', icon: <SiPostgresql fontSize="48px" style={{ color: '#336791' }} /> },
                        ]}
                        repoLinks={{
                            frontend: "https://github.com/Barrique-v1/Travel_Fund_Frontend",
                            backend: "https://github.com/Barrique-v1/Travel_Fund_Backend"
                        }}
                    />
                </Grid>
                {/* Weitere Projektkarten können hier hinzugefügt werden */}
                <Grid item xs={12} md={6}>
                    <ProjectCard
                        title="New Project"
                        description="A new project is under development. Stay tuned for updates!"
                        image="https://via.placeholder.com/500x250.png?text=Project+Coming+Soon"
                        button_text={t('projects.button')}
                        link="#"
                        frontend_technologies={[
                            { name: 'Technology', icon: <SiTypescript fontSize="48px" style={{ color: '#cccccc' }} /> },
                        ]}
                        backend_technologies={[
                            { name: 'Technology', icon: <SiTypescript fontSize="48px" style={{ color: '#cccccc' }} /> },
                        ]}
                        database_technologies={[
                            { name: 'Technology', icon: <SiTypescript fontSize="48px" style={{ color: '#cccccc' }} /> },
                        ]}
                        repoLinks={{
                            frontend: "#",
                            backend: "#"
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Projects;
