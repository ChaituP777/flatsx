

const WhyChooseUs = () => {
    const benefits = [
        { icon: 'fas fa-handshake', title: 'Trusted By Thousands', description: 'Lorem ipsum dolor sit amet consectetur' },
        { icon: 'fas fa-home', title: 'Wide Range of Properties', description: 'Lorem ipsum dolor sit amet consectetur' },
        { icon: 'fas fa-dollar-sign', title: 'No Broker Fees', description: 'Connect directly with property owners' },
        { icon: 'fas fa-shield-alt', title: 'Financing Made Easy', description: 'Lorem ipsum dolor sit amet consectetur' }
    ];

    return (
        <section className="py-[80px] bg-section-1 sm:py-[60px]">
            <div className="container mx-auto px-[15px] max-w-[1200px] xl:max-w-[1320px]">
                <div className="text-center mb-[50px]">
                    <span className="inline-block py-[6px] px-[20px] bg-[#ff6b6b1a] text-secondary rounded-[50px] text-[14px] font-semibold mb-[15px]">Why Choose Us</span>
                    <h2 className="text-[42px] text-heading font-bold sm:text-[32px]">We Provide Full Service At Every Step</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="text-center p-[30px_20px] bg-white rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] group">
                            <i className={`${benefit.icon} text-[48px] text-secondary mb-[20px]`}></i>
                            <h3 className="text-[18px] mb-[10px] text-heading">{benefit.title}</h3>
                            <p className="text-[14px] text-paragraph">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
