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
            <div className="pt-[100px] pb-[70px] bg-primary">
                <div className="container mx-auto px-[15px] max-w-[1200px] xl:max-w-[1320px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] lg:gap-[60px]">
                        {/* Column 1: Brand & Reach Us */}
                        <div className="footer-column">
                            <div className="mb-[30px]">
                                <h2 className="text-white text-[28px] font-bold m-0">FlatSX</h2>
                            </div>
                            <p className="text-white/80 text-[15px] leading-[1.8] mb-[30px]">
                                Your trusted platform for buying, selling, and renting properties without broker fees.
                            </p>
                            <div className="flex flex-col gap-[15px]">
                                <p className="flex items-start gap-[15px] text-white/80 text-[15px] leading-[1.6]">
                                    <i className="fas fa-map-marker-alt mt-[5px] text-secondary"></i>
                                    <span>Brooklyn, New York, United States</span>
                                </p>
                                <p className="flex items-center gap-[15px] text-white/80 text-[15px]">
                                    <i className="fas fa-phone text-secondary"></i>
                                    <a href="tel:+0123456789" className="transition-all duration-300 hover:text-white hover:pl-[5px]">+0123-456789</a>
                                </p>
                                <p className="flex items-center gap-[15px] text-white/80 text-[15px]">
                                    <i className="fas fa-envelope text-secondary"></i>
                                    <a href="mailto:info@flatsx.com" className="transition-all duration-300 hover:text-white hover:pl-[5px]">info@flatsx.com</a>
                                </p>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="footer-column">
                            <h4 className="text-white text-[20px] mb-[30px] font-bold">Quick Links</h4>
                            <ul className="list-none p-0 m-0 flex flex-col gap-[15px]">
                                <li><Link href="/about" className="text-white/80 text-[15px] transition-all duration-300 hover:text-secondary hover:pl-[10px] inline-block">About Us</Link></li>
                                <li><Link href="/properties" className="text-white/80 text-[15px] transition-all duration-300 hover:text-secondary hover:pl-[10px] inline-block">Properties</Link></li>
                                <li><Link href="/blog" className="text-white/80 text-[15px] transition-all duration-300 hover:text-secondary hover:pl-[10px] inline-block">Blog & News</Link></li>
                                <li><Link href="/contact" className="text-white/80 text-[15px] transition-all duration-300 hover:text-secondary hover:pl-[10px] inline-block">Contact Us</Link></li>
                                <li><Link href="/faq" className="text-white/80 text-[15px] transition-all duration-300 hover:text-secondary hover:pl-[10px] inline-block">FAQ</Link></li>
                                <li><Link href="/calculator/emi" className="text-white/80 text-[15px] transition-all duration-300 hover:text-secondary hover:pl-[10px] inline-block">EMI Calculator</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Services */}
                        <div className="footer-column">
                            <h4 className="text-white text-[20px] mb-[30px] font-bold">Our Services</h4>
                            <ul className="list-none p-0 m-0 flex flex-col gap-[15px]">
                                <li><Link href="/legal-services" className="text-white/80 text-[15px] transition-all duration-300 hover:text-secondary hover:pl-[10px] inline-block">Legal Services</Link></li>
                                <li><Link href="/home-loan" className="text-white/80 text-[15px] transition-all duration-300 hover:text-secondary hover:pl-[10px] inline-block">Home Loans</Link></li>
                                <li><Link href="/interiors" className="text-white/80 text-[15px] transition-all duration-300 hover:text-secondary hover:pl-[10px] inline-block">Interiors</Link></li>
                                <li><Link href="/builder-projects" className="text-white/80 text-[15px] transition-all duration-300 hover:text-secondary hover:pl-[10px] inline-block">Builder Projects</Link></li>
                                <li><Link href="/nri-services" className="text-white/80 text-[15px] transition-all duration-300 hover:text-secondary hover:pl-[10px] inline-block">NRI Services</Link></li>
                                <li><Link href="/sale-agreement" className="text-white/80 text-[15px] transition-all duration-300 hover:text-secondary hover:pl-[10px] inline-block">Sale Agreement</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Newsletter & Social */}
                        <div className="footer-column">
                            <h4 className="text-white text-[20px] mb-[30px] font-bold">Newsletter</h4>
                            <p className="text-white/80 text-[15px] leading-[1.8] mb-[25px]">
                                Subscribe to get the latest property updates and news.
                            </p>
                            <form className="mb-[30px]">
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full h-[55px] pl-[20px] pr-[60px] bg-white/5 border border-white/10 rounded-[6px] text-white text-[14px] placeholder:text-white/40 focus:outline-none focus:border-secondary transition-all"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-[5px] top-[5px] w-[45px] h-[45px] bg-secondary text-white rounded-[4px] flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-secondary"
                                    >
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </form>
                            <div>
                                <h5 className="text-white text-[16px] mb-[20px] font-semibold">Follow Us</h5>
                                <div className="flex gap-[15px]">
                                    <a href="#" className="w-[45px] h-[45px] flex items-center justify-center bg-white/5 rounded-full text-white transition-all duration-300 hover:bg-secondary hover:-translate-y-[5px]">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>

                                    <a href="#" className="w-[45px] h-[45px] flex items-center justify-center bg-white/5 rounded-full text-white transition-all duration-300 hover:bg-secondary hover:-translate-y-[5px]">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#" className="w-[45px] h-[45px] flex items-center justify-center bg-white/5 rounded-full text-white transition-all duration-300 hover:bg-secondary hover:-translate-y-[5px]">
                                        <i className="fab fa-instagram"></i>
                                    </a>
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
