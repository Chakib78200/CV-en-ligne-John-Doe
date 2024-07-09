import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import JohnDoe from '../images/John Doe.jpg';
import '../styles/Header.css';

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(!expanded);
    };

    const closeNavbar = () => {
        setExpanded(false);
    };

    return (
        <header>
            <Helmet>
                <title>John Doe - Développeur Web Full Stack</title>
                <meta name="description" content="Portfolio de John Doe, développeur web full stack. Découvrez ses services, réalisations, articles et projets." />
                <meta name="keywords" content="John Doe, développeur web, portfolio, services, réalisations, blog, contact" />
            </Helmet>
            <Navbar expand="lg" expanded={expanded} className="custom-navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand custom-navbar-brand" to="/">
                        <img src={JohnDoe} alt="John Doe" className="img-fluid w-100 custom-img" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} className="custom-toggler" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto custom-nav-links">
                            <NavItem>
                                <NavLink to="/" className={({ isActive }) => "nav-link text-uppercase" + (isActive ? " active" : "")} onClick={closeNavbar}>accueil</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/services" className={({ isActive }) => "nav-link text-uppercase" + (isActive ? " active" : "")} onClick={closeNavbar}>services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/realisation" className={({ isActive }) => "nav-link text-uppercase" + (isActive ? " active" : "")} onClick={closeNavbar}>réalisations</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/blog" className={({ isActive }) => "nav-link text-uppercase" + (isActive ? " active" : "")} onClick={closeNavbar}>blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/contact" className={({ isActive }) => "nav-link text-uppercase" + (isActive ? " active" : "")} onClick={closeNavbar}>me contacter</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </header>
    );
};

export default Header;
