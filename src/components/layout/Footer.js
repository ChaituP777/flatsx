import Link from 'next/link';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            {/* CTA Section */}
            <div className="footer-cta">
                <div className="container">
                    <div className="footer-cta-content">
                        <div className="cta-text">
                            <h3>Looking for a dream home?</h3>
                            <p>We can help you realize your dream of a new home</p>
                        </div>
                        <div className="cta-button">
                            <Link href="/properties" className="btn btn-primary">
                                Explore Properties <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Main */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* About Section */}
                        <div className="footer-column">
                            <div className="footer-logo">
                                <h2>FlatSX</h2>
                            </div>
                            <p>
                                Your trusted platform for buying, selling, and renting properties without broker fees.
                            </p>
                            <div className="footer-contact">
                                <p><i className="fas fa-map-marker-alt"></i> Brooklyn, New York, United States</p>
                                <p><a href="tel:+0123456789"><i className="fas fa-phone"></i> +0123-456789</a></p>
                                <p><a href="mailto:info@flatsx.com"><i className="fas fa-envelope"></i> info@flatsx.com</a></p>
                            </div>
                            <div className="footer-social">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>

                        {/* Company Links */}
                        <div className="footer-column">
                            <h4>Company</h4>
                            <ul>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/properties">All Properties</Link></li>
                                <li><Link href="/locations">Locations</Link></li>
                                <li><Link href="/faq">FAQ</Link></li>
                                <li><Link href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Services Links */}
                        <div className="footer-column">
                            <h4>Services</h4>
                            <ul>
                                <li><Link href="/legal-services">Property Legal Services</Link></li>
                                <li><Link href="/home-loan">Home Loan</Link></li>
                                <li><Link href="/interiors">Home Interiors</Link></li>
                                <li><Link href="/builder-projects">Builder Projects</Link></li>
                                <li><Link href="/nri-services">NRI Services</Link></li>
                                <li><Link href="/sale-agreement">Sale Agreement</Link></li>
                            </ul>
                        </div>

                        {/* Tools Links */}
                        <div className="footer-column">
                            <h4>Popular Tools</h4>
                            <ul>
                                <li><Link href="/calculator/budget">Budget Calculator</Link></li>
                                <li><Link href="/calculator/emi">EMI Calculator</Link></li>
                                <li><Link href="/calculator/eligibility">Loan Eligibility</Link></li>
                                <li><Link href="/calculator/area">Area Converter</Link></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="footer-column">
                            <h4>Newsletter</h4>
                            <p>Subscribe to our weekly newsletter and receive updates via email.</p>
                            <form className="newsletter-form">
                                <input type="email" placeholder="Your Email" required />
                                <button type="submit">
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                            <div className="payment-methods">
                                <h5>We Accept</h5>
                                <div className="payment-icons">
                                    <i className="fab fa-cc-visa"></i>
                                    <i className="fab fa-cc-mastercard"></i>
                                    <i className="fab fa-cc-paypal"></i>
                                    <i className="fab fa-cc-amex"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p>&copy; 2024 FlatSX. All Rights Reserved</p>
                        <ul className="footer-bottom-links">
                            <li><Link href="/terms">Terms & Conditions</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/cookies">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
