import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './Navbar.css';

const Navbar: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                </Typography>
                <Button color="inherit" onClick={() => scrollToSection('home')}>Home</Button>
                <Button color="inherit" onClick={() => scrollToSection('projects')}>Projects</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
