import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './Navbar.css';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <button onClick={() => changeLanguage('de')}>Deutsch</button>
            <button onClick={() => changeLanguage('en')}>English</button>
        </div>
    );
};

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
                    {/* Hier kannst du einen Titel oder Logo platzieren */}
                </Typography>
                <Button color="inherit" onClick={() => scrollToSection('home')}>Home</Button>
                <Button color="inherit" onClick={() => scrollToSection('about')}>About</Button>
                <Button color="inherit" onClick={() => scrollToSection('projects')}>Projects</Button>
                <LanguageSwitcher />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
