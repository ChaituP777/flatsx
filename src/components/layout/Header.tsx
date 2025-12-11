'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
        <header className={`sticky top-0 z-[2000] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-all duration-300 ${isScrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.15)]' : ''}`}>

            {/* Header Main */}
            <div className="py-[15px]">
                <div className="container mx-auto px-[15px] max-w-[1200px] xl:max-w-[1320px]">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="logo">
                            <Link href="/">
                                <h2 className="text-primary text-[28px] font-bold m-0 cursor-pointer hover:text-secondary hover:transition-colors duration-300">FlatsXChange</h2>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className={`fixed top-0 right-[-100%] w-[300px] h-[100vh] bg-white shadow-[-5px_0_20px_rgba(0,0,0,0.1)] transition-[right] duration-300 pt-[80px] px-[20px] pb-[20px] overflow-y-auto md:static md:w-auto md:h-auto md:bg-transparent md:shadow-none md:p-0 md:overflow-visible ${isMenuOpen ? '!right-0' : ''}`}>
                            <ul className="flex flex-col gap-0 items-start w-full md:flex-row md:gap-[30px] md:items-center">
                                <li className="w-full border-b border-border-1 md:w-auto md:border-none relative group">
                                    <Link href="/" className="text-heading font-semibold text-[15px] py-[15px] w-full block md:inline-block md:py-[10px] md:w-auto transition-colors duration-300 hover:text-secondary">Home</Link>
                                </li>
                                <li className="w-full border-b border-border-1 md:w-auto md:border-none relative group dropdown">
                                    <Link href="#" className="text-heading font-semibold text-[15px] py-[15px] w-full block md:inline-block md:py-[10px] md:w-auto transition-colors duration-300 hover:text-secondary flex items-center gap-1">For Flat Owners <i className="fas fa-chevron-down text-xs"></i></Link>
                                    <ul className="static shadow-none bg-section-bg-1 pl-[20px] mt-[10px] hidden flex-col gap-0 md:absolute md:top-full md:left-0 md:bg-white md:min-w-[220px] md:shadow-[0_8px_25px_rgba(0,0,0,0.15)] md:rounded-md md:py-2 md:z-[2100] md:mt-[5px] md:opacity-0 md:-translate-y-[10px] md:items-start md:pl-0 md:transition-all md:duration-300 md:pointer-events-none group-hover:flex md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto">
                                        <li className="p-0 w-full"><Link href="/post-property" className="py-[12px] px-[20px] block w-full text-[14px] text-heading transition-all duration-200 hover:bg-section-bg-1 hover:text-secondary hover:pl-[25px]">Post Property</Link></li>
                                        <li className="p-0 w-full"><Link href="/login/owner" className="py-[12px] px-[20px] block w-full text-[14px] text-heading transition-all duration-200 hover:bg-section-bg-1 hover:text-secondary hover:pl-[25px]">Owner Login</Link></li>
                                        <li className="p-0 w-full"><Link href="/dashboard" className="py-[12px] px-[20px] block w-full text-[14px] text-heading transition-all duration-200 hover:bg-section-bg-1 hover:text-secondary hover:pl-[25px]">Manage Properties</Link></li>
                                    </ul>
                                </li>
                                <li className="w-full border-b border-border-1 md:w-auto md:border-none relative group dropdown">
                                    <Link href="#" className="text-heading font-semibold text-[15px] py-[15px] w-full block md:inline-block md:py-[10px] md:w-auto transition-colors duration-300 hover:text-secondary flex items-center gap-1">Services <i className="fas fa-chevron-down text-xs"></i></Link>
                                    <ul className="static shadow-none bg-section-bg-1 pl-[20px] mt-[10px] hidden flex-col gap-0 md:absolute md:top-full md:left-0 md:bg-white md:min-w-[220px] md:shadow-[0_8px_25px_rgba(0,0,0,0.15)] md:rounded-md md:py-2 md:z-[2100] md:mt-[5px] md:opacity-0 md:-translate-y-[10px] md:items-start md:pl-0 md:transition-all md:duration-300 md:pointer-events-none group-hover:flex md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto">
                                        <li className="p-0 w-full"><Link href="/legal-services" className="py-[12px] px-[20px] block w-full text-[14px] text-heading transition-all duration-200 hover:bg-section-bg-1 hover:text-secondary hover:pl-[25px]">Legal Services</Link></li>
                                    </ul>
                                </li>
                                <li className="w-full border-b border-border-1 md:w-auto md:border-none relative group dropdown">
                                    <Link href="#" className="text-heading font-semibold text-[15px] py-[15px] w-full block md:inline-block md:py-[10px] md:w-auto transition-colors duration-300 hover:text-secondary flex items-center gap-1">Tools <i className="fas fa-chevron-down text-xs"></i></Link>
                                    <ul className="static shadow-none bg-section-bg-1 pl-[20px] mt-[10px] hidden flex-col gap-0 md:absolute md:top-full md:left-0 md:bg-white md:min-w-[220px] md:shadow-[0_8px_25px_rgba(0,0,0,0.15)] md:rounded-md md:py-2 md:z-[2100] md:mt-[5px] md:opacity-0 md:-translate-y-[10px] md:items-start md:pl-0 md:transition-all md:duration-300 md:pointer-events-none group-hover:flex md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto">
                                        <li className="p-0 w-full"><Link href="/calculator/budget" className="py-[12px] px-[20px] block w-full text-[14px] text-heading transition-all duration-200 hover:bg-section-bg-1 hover:text-secondary hover:pl-[25px]">Budget Calculator</Link></li>
                                        <li className="p-0 w-full"><Link href="/calculator/emi" className="py-[12px] px-[20px] block w-full text-[14px] text-heading transition-all duration-200 hover:bg-section-bg-1 hover:text-secondary hover:pl-[25px]">EMI Calculator</Link></li>
                                        <li className="p-0 w-full"><Link href="/calculator/eligibility" className="py-[12px] px-[20px] block w-full text-[14px] text-heading transition-all duration-200 hover:bg-section-bg-1 hover:text-secondary hover:pl-[25px]">Loan Eligibility</Link></li>
                                        <li className="p-0 w-full"><Link href="/calculator/area" className="py-[12px] px-[20px] block w-full text-[14px] text-heading transition-all duration-200 hover:bg-section-bg-1 hover:text-secondary hover:pl-[25px]">Area Converter</Link></li>
                                    </ul>
                                </li>
                                <li className="w-full border-b border-border-1 md:w-auto md:border-none relative group">
                                    <Link href="/about" className="text-heading font-semibold text-[15px] py-[15px] w-full block md:inline-block md:py-[10px] md:w-auto transition-colors duration-300 hover:text-secondary">About Us</Link>
                                </li>
                                <li className="w-full border-b border-border-1 md:w-auto md:border-none relative group">
                                    <Link href="/contact" className="text-heading font-semibold text-[15px] py-[15px] w-full block md:inline-block md:py-[10px] md:w-auto transition-colors duration-300 hover:text-secondary">Contact</Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Header Actions */}
                        <div className="flex items-center gap-[15px]">
                            {/* <Link href="/login/buyer" className="inline-block py-[12px] px-[30px] text-[14px] font-semibold text-center rounded-[4px] transition-all duration-300 border-none cursor-pointer no-underline bg-secondary text-white hover:bg-primary hover:text-white">
                                Sign Up / Log In
                            </Link> */}
                            <Link href="/login/buyer" className="inline-block py-[12px] px-[30px] text-[14px] font-semibold text-center rounded-[4px] transition-all duration-300 border-none cursor-pointer no-underline bg-secondary text-white hover:bg-primary hover:text-white">
                                I Want to Buy
                            </Link>
                            <Link href="/login/owner" className="inline-block text-[14px] font-semibold text-center rounded-[4px] transition-all duration-300 cursor-pointer no-underline bg-transparent text-secondary border-2 border-secondary px-[28px] py-[10px] hover:bg-secondary hover:text-white">
                                I Want to Sell
                            </Link>
                            <button className="md:hidden bg-none border-none text-[24px] text-primary cursor-pointer" onClick={toggleMenu}>
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
