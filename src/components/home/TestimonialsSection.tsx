

const TestimonialsSection = () => {
    const testimonials = [
        { name: 'John Doe', role: 'Property Buyer', text: 'Great experience! Found my dream home without any broker fees.', rating: 5 },
        { name: 'Jane Smith', role: 'Property Owner', text: 'Easy to list properties and connect directly with buyers.', rating: 5 },
        { name: 'Mike Johnson', role: 'Home Buyer', text: 'Excellent platform with verified listings and transparent pricing.', rating: 5 }
    ];

    return (
        <section className="py-[80px] bg-section-1 sm:py-[60px]">
            <div className="container mx-auto px-[15px] max-w-[1200px] xl:max-w-[1320px]">
                <div className="text-center mb-[50px]">
                    <span className="inline-block py-[6px] px-[20px] bg-[#ff6b6b1a] text-secondary rounded-[50px] text-[14px] font-semibold mb-[15px]">Testimonials</span>
                    <h2 className="text-[42px] text-heading font-bold sm:text-[32px]">What Our Clients Say</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-[35px_30px] rounded-[8px] shadow-[0_2px_15px_rgba(0,0,0,0.05)]">
                            <div className="text-[#ffc107] mb-[20px] text-[16px]">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <i key={i} className="fas fa-star"></i>
                                ))}
                            </div>
                            <p className="text-[15px] leading-[1.8] text-paragraph mb-[25px] italic">{testimonial.text}</p>
                            <div>
                                <h4 className="text-[16px] text-heading mb-[5px] font-bold">{testimonial.name}</h4>
                                <span className="text-[13px] text-paragraph">{testimonial.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
