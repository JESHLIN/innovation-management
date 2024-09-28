import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Innovation Management</h1>
            </div>
            <ul className="navbar-links">
                <li><Link to="/homepage">Home</Link></li>
                <li><Link to="/ipr">IPR</Link></li>
                <li><Link to="/startup">Startups</Link></li>
                <li><Link to="/innovation">Innovation</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
