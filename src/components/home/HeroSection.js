'use client';

import { useState, useEffect } from 'react';
import './HeroSection.css';

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
        <section className="hero-section">
            <div className="hero-slider">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="container">
                            <div className="hero-content">
                                <p className="hero-subtitle">
                                    <i className="fas fa-home"></i> {slide.subtitle}
                                </p>
                                <h1 className="hero-title">{slide.title}</h1>
                                <p className="hero-description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                                </p>
                                <button className="btn btn-primary">
                                    Make An Enquiry
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hero-pagination">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>

            <button
                className="hero-nav hero-prev"
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            >
                <i className="fas fa-arrow-left"></i>
            </button>
            <button
                className="hero-nav hero-next"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            >
                <i className="fas fa-arrow-right"></i>
            </button>
        </section>
    );
};

export default HeroSection;
