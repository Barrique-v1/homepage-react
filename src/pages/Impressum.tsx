import React, {useEffect} from 'react';
import { Box, Typography, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';



const Impressum: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 4,
            }}
        >
            {/* Breadcrumbs for navigation */}
            <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
                <Link underline="hover" color="inherit" component={RouterLink} to="/">
                    Home
                </Link>
                <Typography color="text.primary">Impressum</Typography>
            </Breadcrumbs>

            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                Impressum
            </Typography>
            <Typography variant="body1" gutterBottom>
                Norman Peters<br/>
                Carl-Spindler-Str. 7 <br/>
                12555 Berlin
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                Kontakt
            </Typography>
            <Typography variant="body1" gutterBottom>
                E-Mail: peters.norman@proton.me
            </Typography>
        </Box>
    );
};

export default Impressum;
