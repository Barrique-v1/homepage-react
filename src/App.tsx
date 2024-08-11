import React from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects/Projects';
import theme from './styles/theme';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Container style={{marginTop: '64px'}}>
                <section id="home">
                    <Home/>
                </section>
                <section id="about">
                    <About/>
                </section>
                <section id="projects">
                    <Projects/>
                </section>
            </Container>
        </ThemeProvider>
    );
};

export default App;
