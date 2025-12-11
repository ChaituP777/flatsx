import './TestimonialsSection.css';

const TestimonialsSection = () => {
    const testimonials = [
        { name: 'John Doe', role: 'Property Buyer', text: 'Great experience! Found my dream home without any broker fees.', rating: 5 },
        { name: 'Jane Smith', role: 'Property Owner', text: 'Easy to list properties and connect directly with buyers.', rating: 5 },
        { name: 'Mike Johnson', role: 'Home Buyer', text: 'Excellent platform with verified listings and transparent pricing.', rating: 5 }
    ];

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="section-title">
                    <span>Testimonials</span>
                    <h2>What Our Clients Say</h2>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="stars">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <i key={i} className="fas fa-star"></i>
                                ))}
                            </div>
                            <p>{testimonial.text}</p>
                            <div className="testimonial-author">
                                <h4>{testimonial.name}</h4>
                                <span>{testimonial.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
