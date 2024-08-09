import React from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
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
                <section id="projects">
                    <Projects />
                </section>
            </Container>
        </ThemeProvider>
    );
};

export default App;
