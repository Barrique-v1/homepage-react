import React from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import theme from './styles/theme';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Container>
                <section id="home">
                    <Home />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </Container>
        </ThemeProvider>
    );
};

export default App;
