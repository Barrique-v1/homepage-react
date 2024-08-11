import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Switch, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import './Navbar.css';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language === 'de');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isEnglish = event.target.checked;
        const newLanguage = isEnglish ? 'en' : 'de';
        i18n.changeLanguage(newLanguage);
        setLanguage(isEnglish);
    };

    return (
        <Box display="flex" alignItems="center">
            <Flag code="DE" style={{ width: 24, height: 24 }} />
            <Switch
                checked={language}
                onChange={handleChange}
                color="default"
            />
            <Flag code="GB" style={{ width: 24, height: 24 }} />
        </Box>
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
                </Typography>
                <Button color="inherit" onClick={() => scrollToSection('home')}>Home</Button>
                <Button color="inherit" onClick={() => scrollToSection('about')}>About</Button>
                <Button color="inherit" onClick={() => scrollToSection('projects')} sx={{marginRight: 3}}>Projects</Button>
                <LanguageSwitcher />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
