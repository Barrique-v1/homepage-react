import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import Impressum from '../../pages/Impressum';

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
                <Link href="/impressum" color="inherit" sx={{ textDecoration: 'none' }}>
                    Impressum
                </Link>
                {' | © 2024'}
            </Typography>
        </Box>
    );
};

export default Footer;
