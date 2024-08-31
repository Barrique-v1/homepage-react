import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Box,
    Drawer,
    List,
    ListItem,
    useMediaQuery,
    Switch
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import { useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Theme } from '@mui/material/styles'; // Import the Theme type
import './Navbar.css';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language === 'en');

    useEffect(() => {
        setLanguage(i18n.language === 'en');
    }, [i18n.language]);

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const isEnglish = event.target.checked;
        const newLanguage = isEnglish ? 'en' : 'de';
        try {
            await i18n.changeLanguage(newLanguage); // Handle the promise
            setLanguage(isEnglish);
        } catch (error) {
            console.error("Failed to change language", error);
        }
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
    const [menuOpen, setMenuOpen] = useState(false);

    const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

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

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClick = (sectionId: string) => {
        toggleMenu();
        handleNavigation(sectionId);
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
                {isXs ? (
                    <>
                        <IconButton color="inherit" onClick={toggleMenu}>
                            {menuOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                        <Drawer anchor="right" open={menuOpen} onClose={toggleMenu}>
                            <List>
                                <ListItem onClick={() => handleMenuClick('home')}>
                                    <Button fullWidth>{t('nav.home')}</Button>
                                </ListItem>
                                <ListItem onClick={() => handleMenuClick('about')}>
                                    <Button fullWidth>{t('nav.about')}</Button>
                                </ListItem>
                                <ListItem onClick={() => handleMenuClick('projects')}>
                                    <Button fullWidth>{t('nav.projects')}</Button>
                                </ListItem>
                            </List>
                        </Drawer>
                    </>
                ) : (
                    <>
                        <Button color="inherit" onClick={() => handleNavigation('home')}>{t('nav.home')}</Button>
                        <Button color="inherit" onClick={() => handleNavigation('about')}>{t('nav.about')}</Button>
                        <Button color="inherit" onClick={() => handleNavigation('projects')}>{t('nav.projects')}</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
