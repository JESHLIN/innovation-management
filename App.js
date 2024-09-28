import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import InnovationPage from './pages/InnovationPage';
import IPRPage from './pages/IPRPage';
import StartUpPage from './pages/StartUpPage';
import HomePage from './pages/HomePage';
import About from './components/About';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/ipr" element={<IPRPage />} />
                    <Route path="/startup" element={<StartUpPage />} />
                    <Route path="/innovation" element={<InnovationPage />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
