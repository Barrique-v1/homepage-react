import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    CardMedia,
    Tooltip,
    Grid,
    Button,
    CardActionArea
} from '@mui/material';
import {styled} from '@mui/material/styles';
import GitHubIcon from "@mui/icons-material/GitHub";

type Technology = {
    name: string;
    icon: React.ReactNode;
};

type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    button_text: string;
    link: string;
    frontend_technologies: Technology[];
    backend_technologies: Technology[];
    repoLinks: { frontend: string; backend: string };
};

const StyledCard = styled(Card)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    boxShadow: theme.shadows[3],
}));

const ProjectCard: React.FC<ProjectCardProps> = ({
                                                     title,
                                                     description,
                                                     image,
                                                     button_text,
                                                     link,
                                                     frontend_technologies,
                                                     backend_technologies,
                                                     repoLinks
                                                 }) => (
    <StyledCard style={{display: 'flex', flexDirection: 'column', padding: '16px'}}>
        {/* Project Image */}
        <CardActionArea component="a" href={link} target="_blank" style={{flex: '1'}}>
            <CardMedia component="img" alt={title} image={image}
                       style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px'}}/>
        </CardActionArea>

        <CardContent style={{display: 'flex', flexDirection: 'column', flex: '3', justifyContent: 'space-between'}}>
            {/* Project Description */}
            <div style={{
                flex: '1',
                textAlign: 'start',
                alignItems: 'start',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
            }}>
                <Typography variant="body1" gutterBottom>
                    {description}
                    <Button size="small" component="a" href={link} target="_blank">{button_text}</Button>
                </Typography>
            </div>

            {/* Technologie Titles */}
            <Grid container spacing={0} justifyContent="center" alignItems="end" textAlign="center"
                  style={{flex: '1'}}>
                <Grid item xs={6}>
                    <Typography variant="overline">Frontend</Typography>
                    <IconButton href={repoLinks.frontend} target="_blank" aria-label="GitHub Frontend Repo">
                        <GitHubIcon style={{color: '#333', fontSize: 'large'}}/>
                    </IconButton>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="overline">Backend</Typography>
                    <IconButton href={repoLinks.backend} target="_blank" aria-label="GitHub Backend Repo">
                        <GitHubIcon style={{color: '#333', fontSize: 'large'}}/>
                    </IconButton>
                </Grid>
            </Grid>

            {/* Technologie Icons */}
            <Grid container spacing={0} justifyContent="center" alignItems="center" style={{flex: '1'}}>
                <Grid item xs={6}>
                    <Grid container spacing={0} justifyContent="center" alignItems="center">
                        {frontend_technologies.map((tech, index) => (
                            <Grid item key={index}>
                                <Tooltip title={tech.name}>
                                    <IconButton aria-label={tech.name} style={{fontSize: '40px'}}>
                                        {tech.icon}
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={0} justifyContent="center" alignItems="center">
                        {backend_technologies.map((tech, index) => (
                            <Grid item key={index}>
                                <Tooltip title={tech.name}>
                                    <IconButton aria-label={tech.name} style={{fontSize: '40px'}}>
                                        {tech.icon}
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
    </StyledCard>

);

export default ProjectCard;
