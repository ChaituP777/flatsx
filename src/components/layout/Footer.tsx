import Link from 'next/link';


const Footer = () => {
    return (
        <footer className="bg-primary text-white">
            {/* CTA Section */}
            <div className="bg-secondary py-[60px]">
                <div className="container mx-auto px-[15px] max-w-[1200px] xl:max-w-[1320px]">
                    <div className="flex justify-between items-center gap-[30px] flex-wrap md:flex-col md:text-center">
                        <div className="cta-text">
                            <h3 className="text-white text-[32px] mb-[10px] font-bold md:text-[24px]">Looking for a dream home?</h3>
                            <p className="text-white text-[16px] opacity-90">We can help you realize your dream of a new home</p>
                        </div>
                        <div className="cta-button">
                            <Link href="/properties" className="inline-block py-[15px] px-[35px] text-[16px] font-semibold text-center rounded-[4px] transition-all duration-300 border-none cursor-pointer no-underline bg-white text-secondary hover:bg-primary hover:text-white">
                                Explore Properties <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Main */}
            <div className="pt-[80px] pb-[40px]">
                <div className="container mx-auto px-[15px] max-w-[1200px] xl:max-w-[1320px]">
                    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1.5fr] gap-[40px] lg:grid-cols-3 md:grid-cols-1 md:gap-[30px]">
                        {/* About Section */}
                        <div className="footer-column lg:col-span-3 md:col-span-1">
                            <div className="mb-[20px]">
                                <h2 className="text-white text-[24px] font-bold m-0">FlatSX</h2>
                            </div>
                            <p className="text-white/80 text-[14px] leading-[1.8] mb-[20px]">
                                Your trusted platform for buying, selling, and renting properties without broker fees.
                            </p>
                            <div className="my-[20px]">
                                <p className="flex items-center gap-[10px] mb-[10px] text-white/80 text-[14px]"><i className="fas fa-map-marker-alt"></i> Brooklyn, New York, United States</p>
                                <p className="flex items-center gap-[10px] mb-[10px] text-white/80 text-[14px]"><a href="tel:+0123456789" className="text-white/80 transition-all duration-300 hover:text-secondary hover:pl-[5px]"><i className="fas fa-phone"></i> +0123-456789</a></p>
                                <p className="flex items-center gap-[10px] mb-[10px] text-white/80 text-[14px]"><a href="mailto:info@flatsx.com" className="text-white/80 transition-all duration-300 hover:text-secondary hover:pl-[5px]"><i className="fas fa-envelope"></i> info@flatsx.com</a></p>
                            </div>
                            <div className="flex gap-[10px] mt-[20px]">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] flex items-center justify-center bg-white/10 rounded-full text-white transition-all duration-300 hover:bg-secondary hover:-translate-y-[3px] hover:pl-0">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] flex items-center justify-center bg-white/10 rounded-full text-white transition-all duration-300 hover:bg-secondary hover:-translate-y-[3px] hover:pl-0">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] flex items-center justify-center bg-white/10 rounded-full text-white transition-all duration-300 hover:bg-secondary hover:-translate-y-[3px] hover:pl-0">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] flex items-center justify-center bg-white/10 rounded-full text-white transition-all duration-300 hover:bg-secondary hover:-translate-y-[3px] hover:pl-0">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>

                        {/* Company Links */}
                        <div className="footer-column">
                            <h4 className="text-white text-[18px] mb-[20px] font-bold">Company</h4>
                            <ul className="list-none p-0 m-0">
                                <li className="mb-[12px]"><Link href="/about" className="text-white/80 text-[14px] transition-all duration-300 inline-block hover:text-secondary hover:pl-[5px]">About Us</Link></li>
                                <li className="mb-[12px]"><Link href="/blog" className="text-white/80 text-[14px] transition-all duration-300 inline-block hover:text-secondary hover:pl-[5px]">Blog</Link></li>
                                <li className="mb-[12px]"><Link href="/properties" className="text-white/80 text-[14px] transition-all duration-300 inline-block hover:text-secondary hover:pl-[5px]">All Properties</Link></li>
                                <li className="mb-[12px]"><Link href="/locations" className="text-white/80 text-[14px] transition-all duration-300 inline-block hover:text-secondary hover:pl-[5px]">Locations</Link></li>
                                <li className="mb-[12px]"><Link href="/faq" className="text-white/80 text-[14px] transition-all duration-300 inline-block hover:text-secondary hover:pl-[5px]">FAQ</Link></li>
                                <li className="mb-[12px]"><Link href="/contact" className="text-white/80 text-[14px] transition-all duration-300 inline-block hover:text-secondary hover:pl-[5px]">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Services Links */}
                        <div className="footer-column">
                            <h4 className="text-white text-[18px] mb-[20px] font-bold">Services</h4>
                            <ul className="list-none p-0 m-0">
                                <li className="mb-[12px]"><Link href="/legal-services" className="text-white/80 text-[14px] transition-all duration-300 inline-block hover:text-secondary hover:pl-[5px]">Property Legal Services</Link></li>
                                <li className="mb-[12px]"><Link href="/home-loan" className="text-white/80 text-[14px] transition-all duration-300 inline-block hover:text-secondary hover:pl-[5px]">Home Loan</Link></li>
                                <li className="mb-[12px]"><Link href="/interiors" className="text-white/80 text-[14px] transition-all duration-300 inline-block hover:text-secondary hover:pl-[5px]">Home Interiors</Link></li>
                                <li className="mb-[12px]"><Link href="/builder-projects" className="text-white/80 text-[14px] transition-all duration-300 inline-block hover:text-secondary hover:pl-[5px]">Builder Projects</Link></li>
                                <li className="mb-[12px]"><Link href="/nri-services" className="text-white/80 text-[14px] transition-all duration-300 inline-block hover:text-secondary hover:pl-[5px]">NRI Services</Link></li>
                                <li className="mb-[12px]"><Link href="/sale-agreement" className="text-white/80 text-[14px] transition-all duration-300 inline-block hover:text-secondary hover:pl-[5px]">Sale Agreement</Link></li>
                            </ul>
                        </div>

                        {/* Tools Links */}
                        <div className="footer-column">
                            <h4 className="text-white text-[18px] mb-[20px] font-bold">Popular Tools</h4>
                            <ul className="list-none p-0 m-0">
                                <li className="mb-[12px]"><Link href="/calculator/budget" className="text-white/80 text-[14px] transition-all duration-300 inline-block hover:text-secondary hover:pl-[5px]">Budget Calculator</Link></li>
                                <li className="mb-[12px]"><Link href="/calculator/emi" className="text-white/80 text-[14px] transition-all duration-300 inline-block hover:text-secondary hover:pl-[5px]">EMI Calculator</Link></li>
                                <li className="mb-[12px]"><Link href="/calculator/eligibility" className="text-white/80 text-[14px] transition-all duration-300 inline-block hover:text-secondary hover:pl-[5px]">Loan Eligibility</Link></li>
                                <li className="mb-[12px]"><Link href="/calculator/area" className="text-white/80 text-[14px] transition-all duration-300 inline-block hover:text-secondary hover:pl-[5px]">Area Converter</Link></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="footer-column">
                            <h4 className="text-white text-[18px] mb-[20px] font-bold">Newsletter</h4>
                            <p className="text-white/80 text-[14px] leading-[1.8] mb-[20px]">Subscribe to our weekly newsletter and receive updates via email.</p>
                            <form className="flex gap-[10px] my-[20px]">
                                <input type="email" placeholder="Your Email" required className="flex-1 py-[12px] px-[15px] border-none rounded-[4px] text-[14px]" />
                                <button type="submit" className="py-[12px] px-[20px] bg-secondary text-white border-none rounded-[4px] cursor-pointer transition-all duration-300 hover:bg-primary">
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                            <div className="payment-methods">
                                <h5 className="text-white text-[14px] my-[20px] mb-[10px] font-semibold">We Accept</h5>
                                <div className="flex gap-[15px] text-[28px]">
                                    <i className="fab fa-cc-visa text-white/60"></i>
                                    <i className="fab fa-cc-mastercard text-white/60"></i>
                                    <i className="fab fa-cc-paypal text-white/60"></i>
                                    <i className="fab fa-cc-amex text-white/60"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-white/10 py-[25px]">
                <div className="container mx-auto px-[15px] max-w-[1200px] xl:max-w-[1320px]">
                    <div className="flex justify-between items-center flex-wrap gap-[20px] md:flex-col md:text-center">
                        <p className="text-white/80 m-0 text-[14px]">&copy; 2024 FlatSX. All Rights Reserved</p>
                        <ul className="flex list-none gap-[25px] m-0 p-0 md:justify-center md:flex-wrap">
                            <li><Link href="/terms" className="text-white/80 text-[14px] hover:text-secondary">Terms & Conditions</Link></li>
                            <li><Link href="/privacy" className="text-white/80 text-[14px] hover:text-secondary">Privacy Policy</Link></li>
                            <li><Link href="/cookies" className="text-white/80 text-[14px] hover:text-secondary">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
