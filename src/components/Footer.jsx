import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">
                            <img
                                src="/footer-logo.png"
                                alt="Atlas Fitness Elite"
                                style={{
                                    height: '100px',
                                    width: 'auto',
                                    verticalAlign: 'middle',
                                    marginRight: '10px',
                                }}
                            />
                            ATLAS<span className="logo-accent">FITNESS</span>
                        </h3>
                        <p className="footer-text">
                            Empowering transformations through expert guidance, innovative workouts, and community
                            spirit.
                        </p>
                        <div className="social-links">
                            <a
                                href="https://facebook.com/atlasfitnesselite"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Facebook"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com/atlasfitnesselite"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Instagram"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/programs">Programs</Link>
                            </li>
                            <li>
                                <Link to="/facilities">Facilities</Link>
                            </li>
                            <li>
                                <Link to="/membership">Membership</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Training Programs</h4>
                        <ul className="footer-links">
                            <li>
                                <Link to="/programs#hiit">HIIT Training</Link>
                            </li>
                            <li>
                                <Link to="/programs#strength">Strength & Conditioning</Link>
                            </li>
                            <li>
                                <Link to="/programs#personal">Personal Training</Link>
                            </li>
                            <li>
                                <Link to="/programs#yoga">Yoga & Mobility</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Contact Info</h4>
                        <ul className="footer-links">
                            <li>
                                📍 3-4-98/4/204, New Narsina Nagar, Mallapur
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;Hyderabad, Telangana 500076
                            </li>
                            <li>
                                📞 +91 99882 29441
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;+91 83175 29757
                            </li>
                            <li>✉️ atlasfitnesselite@gmail.com</li>
                            <li>
                                ⏰ Mon-Fri: 5:00 AM - 11:00 PM <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;Sat: 5:00 AM - 11:00 PM <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;Sun: 5:00 AM - 6:00 PM
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Atlas Fitness Elite. All rights reserved. | Designed for Champions.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
