import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container">
                <div className="nav-content">
                    <div className="logo">
                        <Link to="/">
                            <img src="/logo.png" alt="Atlas Fitness Elite Logo" className="logo-image" />
                            <span className="logo-text">
                                ATLAS<span className="logo-accent">FIT</span>
                            </span>
                        </Link>
                    </div>
                    <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} id="navLinks">
                        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                            Home
                        </Link>
                        <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                            About Us
                        </Link>
                        <Link to="/programs" className={`nav-link ${isActive('/programs') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                            Programs
                        </Link>
                        <Link to="/facilities" className={`nav-link ${isActive('/facilities') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                            Facilities
                        </Link>
                        <Link to="/membership" className={`nav-link ${isActive('/membership') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                            Membership
                        </Link>
                        <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                            Join Us
                        </Link>
                        <Link to="/contact" className="btn btn-primary mobile-join-btn" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: '1rem', width: '100%', textAlign: 'center' }}>
                            Join Now
                        </Link>
                    </div>
                    <div className="nav-actions">
                        <button
                            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                            id="mobileMenuToggle"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
