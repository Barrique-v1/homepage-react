import React from 'react';
import {
    Grid,
    Typography,
    Card,
    CardActions,
    CardContent,
    Button,
    IconButton,
    CardMedia,
    Tooltip,
    CardActionArea
} from '@mui/material';
import './Projects.css';
import TravelFund from '../../assets/images/Travelfund_Logo.png';
import {ReactComponent as JavaIcon} from '../../assets/icons/java.svg';
import {SiTypescript, SiVuedotjs, SiSpringboot, SiPostgresql} from 'react-icons/si';
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects: React.FC = () => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Grid container spacing={3}>

                {/* First Project Card */}
                <Grid item xs={6}>
                    <Card sx={{boxShadow: 3}} style={{height: '100%'}}>
                        <Tooltip title="Take a look!">
                            <CardActionArea component="a" href="https://travel-fund.onrender.com" target="_blank">
                                <CardMedia
                                    component="img"
                                    alt="TravelFund"
                                    height="250"
                                    image={TravelFund}
                                />
                            </CardActionArea>
                        </Tooltip>

                        <CardContent>
                            <Typography variant="body1">
                                Travel Fund is a web app for tracking expenses during a trip. The expenses are
                                converted into your home currency using an API, making it easier to manage your
                                finances abroad.
                                <Button size="small" component="a" href="https://travel-fund.onrender.com" target="_blank">Take a look.</Button>
                            </Typography>
                        </CardContent>


                        <Typography variant="overline" justifyContent="center" alignItems="center"
                                    textAlign="center" fontWeight={"bold"}>

                            <Grid container spacing={2} justifyContent="center" alignItems="center"
                                  textAlign="center">
                                <Grid item xs={4}>
                                    Frontend
                                    <IconButton href="https://github.com/Barrique-v1/Travel_Fund_Frontend" target="_blank" aria-label="GitHub">
                                        <GitHubIcon style={{ color: '#333', fontSize: 'large' }} />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={4}>
                                    Backend
                                    <IconButton href="https://github.com/Barrique-v1/Travel_Fund_Backend" target="_blank" aria-label="GitHub">
                                        <GitHubIcon style={{ color: '#333', fontSize: 'large' }} />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={4}>
                                    Data
                                </Grid>
                            </Grid>
                        </Typography>


                        <div style={{display: 'flex', marginTop: '10px', marginBottom: '10px'}}>
                            <Grid container spacing={2} justifyContent="center" alignItems="center"
                                  textAlign="center">
                                <Grid item xs={4}>
                                    {/* TypeScript Icon */}
                                    <Tooltip title="TypeScript">
                                        <IconButton aria-label="TypeScript">
                                            <SiTypescript fontSize="48px" style={{color: '#3178C6'}}/>
                                        </IconButton>
                                    </Tooltip>
                                    {/* Vue.js Icon */}
                                    <Tooltip title="Vue.js">
                                        <IconButton aria-label="Vue.js">
                                            <SiVuedotjs fontSize="48px" style={{color: '#42b883'}}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={4}>
                                    {/* Java Icon */}
                                    <Tooltip title="Java">
                                        <IconButton aria-label="Java">
                                            <JavaIcon width={48} height={48}/>
                                        </IconButton>
                                    </Tooltip>
                                    {/* Spring Boot Icon */}
                                    <Tooltip title="Spring Boot">
                                        <IconButton aria-label="Spring Boot">
                                            <SiSpringboot fontSize="48px" style={{color: '#6DB33F'}}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={4}>

                                    {/* PostgreSQL Icon */}
                                    <Tooltip title="PostgreSQL">
                                        <IconButton aria-label="PostgreSQL">
                                            <SiPostgresql fontSize="48px" style={{color: '#336791'}}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </div>
                    </Card>
                </Grid>

                {/* Second Project Card (Placeholder) */}
                <Grid item xs={6}>
                    <Card sx={{boxShadow: 3}} style={{height: '100%', backgroundColor: '#f5f5f5'}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project Placeholder"
                                height="250"
                                image="https://via.placeholder.com/500x250.png?text=Project+Coming+Soon"
                            />
                        </CardActionArea>

                        <CardContent>
                            <Typography variant="body1"
                                        style={{marginBottom: '25px', lineHeight: '1.6', color: '#555'}}>
                                A new project is under development. Stay tuned for updates!
                            </Typography>
                        </CardContent>

                        <Typography variant="overline" justifyContent="center" alignItems="center"
                                    textAlign="center" fontWeight={"bold"}>

                            <Grid container spacing={2} justifyContent="center" alignItems="center"
                                  textAlign="center">
                                <Grid item xs={4}>
                                    Frontend
                                </Grid>
                                <Grid item xs={4}>
                                    Backend
                                </Grid>
                                <Grid item xs={4}>
                                    Data
                                </Grid>
                            </Grid>
                        </Typography>

                        <div style={{display: 'flex', marginTop: '10px', marginBottom: '10px'}}>
                            <Grid container spacing={2} justifyContent="center" alignItems="center"
                                  textAlign="center">
                                <Grid item xs={4}>
                                    {/* Placeholder Icons */}
                                    <Tooltip title="Technology 1">
                                        <IconButton aria-label="Technology 1">
                                            <SiTypescript fontSize="48px" style={{color: '#cccccc'}}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={4}>
                                    <Tooltip title="Technology 2">
                                        <IconButton aria-label="Technology 2">
                                            <SiTypescript fontSize="48px" style={{color: '#cccccc'}}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={4}>
                                    <Tooltip title="Technology 3">
                                        <IconButton aria-label="Technology 3">
                                            <SiTypescript fontSize="48px" style={{color: '#cccccc'}}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Projects;
