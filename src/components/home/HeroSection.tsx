'use client';

import { useState, useEffect } from 'react';


const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
            title: 'Discover Your Perfect Home',
            subtitle: 'Buy, Sell & Rent Properties Without Broker Fees'
        },
        {
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
            title: 'Direct Owner Listings',
            subtitle: 'Connect Directly with Property Owners'
        },
        {
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
            title: 'Your Dream Property Awaits',
            subtitle: 'Thousands of Verified Properties Across India'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="relative h-[600px] overflow-hidden md:h-[500px]">
            <div className="w-full h-full relative">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1a1a2e]/90 to-[#1a1a2e]/60"></div>
                        <div className="container mx-auto px-[15px] max-w-[1200px] xl:max-w-[1320px] h-full relative">
                            <div className="relative z-[2] pt-[150px] max-w-[650px] md:pt-[100px]">
                                <p className="text-white text-[16px] font-semibold mb-[20px] flex items-center gap-[10px]">
                                    <i className="fas fa-home"></i> {slide.subtitle}
                                </p>
                                <h1 className="text-white text-[56px] font-extrabold leading-[1.2] mb-[20px] md:text-[36px]">{slide.title}</h1>
                                <p className="text-white/90 text-[18px] leading-[1.8] mb-[30px] md:text-[16px]">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                                </p>
                                <button className="btn btn-primary py-[16px] px-[40px] text-[16px]">
                                    Make An Enquiry
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 z-10 flex gap-[12px]">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-[12px] h-[12px] rounded-full bg-white/50 border-none cursor-pointer transition-all duration-300 ${index === currentSlide ? '!bg-secondary !w-[35px] !rounded-[6px]' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>

            <button
                className="absolute top-1/2 -translate-y-1/2 z-10 w-[50px] h-[50px] rounded-full bg-white/20 text-white border-none cursor-pointer flex items-center justify-center transition-all duration-300 backdrop-blur-[10px] hover:bg-secondary left-[30px] hover:w-[60px] hover:h-[60px]"
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            >
                <i className="fas fa-arrow-left"></i>
            </button>
            <button
                className="absolute top-1/2 -translate-y-1/2 z-10 w-[50px] h-[50px] rounded-full bg-white/20 text-white border-none cursor-pointer flex items-center justify-center transition-all duration-300 backdrop-blur-[10px] hover:bg-secondary right-[30px] hover:w-[60px] hover:h-[60px]"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            >
                <i className="fas fa-arrow-right"></i>
            </button>
        </section>
    );
};

export default HeroSection;
