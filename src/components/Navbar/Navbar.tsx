import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Switch, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language === 'en');

    useEffect(() => {
        setLanguage(i18n.language === 'en');
    }, [i18n.language]);

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
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavigation = (sectionId: string) => {
        if (location.pathname === '/') {
            scrollToSection(sectionId);
        } else {
            navigate('/');
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 100);
        }
    };

    useEffect(() => {
        if (location.pathname === '/') {
            scrollToSection('home');
        }
    }, [location]);

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <LanguageSwitcher />
                </Box>
                <Button color="inherit" onClick={() => handleNavigation('home')}>{t('nav.home')}</Button>
                <Button color="inherit" onClick={() => handleNavigation('about')}>{t('nav.about')}</Button>
                <Button color="inherit" onClick={() => handleNavigation('projects')}>{t('nav.projects')}</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
