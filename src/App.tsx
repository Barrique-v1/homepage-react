import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects/Projects';
import theme from './styles/theme';
import Footer from './components/Footer/footer';
import Impressum from "./pages/Impressum";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Navbar />
                <Container>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <section id="home">
                                        <Home />
                                    </section>
                                    <section id="about">
                                        <About />
                                    </section>
                                    <section id="projects">
                                        <Projects />
                                    </section>
                                </>
                            }
                        />
                        <Route path="/impressum" element={<Impressum />} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </ThemeProvider>
    );
};

export default App;
