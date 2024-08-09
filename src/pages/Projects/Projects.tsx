import React from 'react';
import { Grid, Typography, Card, CardActions, CardContent, Button, IconButton } from '@mui/material';
import './Projects.css';
import TravelFund from '../../assets/images/Travelfund_Logo.png';
import { ReactComponent as JavaIcon } from '../../assets/icons/java.svg';
import { SiTypescript, SiVuedotjs, SiSpringboot, SiPostgresql } from 'react-icons/si';

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
                    <Card>
                        <CardContent>
                            <img src={TravelFund} alt="TravelFund"
                                 style={{width: '500px', height: '500px'}}/>
                            <Typography variant="body2" style={{marginTop: '20px'}}>
                                TravelFund ist eine App zum Verfolgen von Ausgaben während einer Reise.<br/>
                                Die Ausgaben werden mittels einer API in die eigene Landeswährung umgerechnet.
                            </Typography>
                            <div style={{display: 'flex', marginTop: '20px'}}>
                                {/* TypeScript Icon */}
                                <IconButton aria-label="TypeScript">
                                    <SiTypescript fontSize="48px" style={{color: '#3178C6'}}/>
                                </IconButton>
                                {/* Vue.js Icon */}
                                <IconButton aria-label="Vue.js">
                                    <SiVuedotjs fontSize="48px" style={{color: '#42b883'}}/>
                                </IconButton>
                                {/* Java Icon */}
                                <IconButton aria-label="Java">
                                    <JavaIcon width={48} height={48} />
                                </IconButton>
                                {/* Spring Boot Icon */}
                                <IconButton aria-label="Spring Boot">
                                    <SiSpringboot fontSize="48px" style={{color: '#6DB33F'}}/>
                                </IconButton>
                                {/* PostgreSQL Icon */}
                                <IconButton aria-label="PostgreSQL">
                                    <SiPostgresql fontSize="48px" style={{color: '#336791'}}/>
                                </IconButton>
                            </div>

                        </CardContent>
                        <CardActions>
                            <Button size="small" href={"//travel-fund.onrender.com/"}>Take A Look</Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Second Project Card (Placeholder) */}
                <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                                benevolent
                            </Typography>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                            adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Projects;
