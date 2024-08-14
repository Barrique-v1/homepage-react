import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
                p: 2,
                mt: 'auto',
                textAlign: 'center',
                position: 'relative',
                bottom: 0,
                width: '100%',
            }}
        >
            <Typography variant="body2" color="inherit">
                <Link component={RouterLink} to="/impressum" color="inherit" sx={{ textDecoration: 'none' }}>
                    Impressum
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
