'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            {/* Header Top */}
            <div className="header-top">
                <div className="container">
                    <div className="header-top-content">
                        <div className="header-contact">
                            <a href="mailto:info@flatsx.com">
                                <i className="fas fa-envelope"></i> info@flatsx.com
                            </a>
                            <a href="/locations">
                                <i className="fas fa-map-marker-alt"></i> 15/A, Nest Tower, NYC
                            </a>
                        </div>
                        <div className="header-social">
                            <select className="language-selector">
                                <option>English</option>
                                <option>Hindi</option>
                                <option>Arabic</option>
                            </select>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header Main */}
            <div className="header-main">
                <div className="container">
                    <div className="header-main-content">
                        {/* Logo */}
                        <div className="logo">
                            <Link href="/">
                                <h2>FlatSX</h2>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li className="dropdown">
                                    <Link href="#">For Flat Owners <i className="fas fa-chevron-down"></i></Link>
                                    <ul className="dropdown-menu">
                                        <li><Link href="/post-property">Post Property</Link></li>
                                        <li><Link href="/login/owner">Owner Login</Link></li>
                                        <li><Link href="/dashboard">Manage Properties</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link href="#">Services <i className="fas fa-chevron-down"></i></Link>
                                    <ul className="dropdown-menu">
                                        <li><Link href="/legal-services">Legal Services</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link href="#">Tools <i className="fas fa-chevron-down"></i></Link>
                                    <ul className="dropdown-menu">
                                        <li><Link href="/calculator/budget">Budget Calculator</Link></li>
                                        <li><Link href="/calculator/emi">EMI Calculator</Link></li>
                                        <li><Link href="/calculator/eligibility">Loan Eligibility</Link></li>
                                        <li><Link href="/calculator/area">Area Converter</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </nav>

                        {/* Header Actions */}
                        <div className="header-actions">
                            <Link href="/login/buyer" className="btn btn-primary">
                                Sign Up / Log In
                            </Link>
                            <button className="menu-toggle" onClick={toggleMenu}>
                                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
