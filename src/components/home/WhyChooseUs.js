import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const benefits = [
        { icon: 'fas fa-handshake', title: 'Trusted By Thousands', description: 'Lorem ipsum dolor sit amet consectetur' },
        { icon: 'fas fa-home', title: 'Wide Range of Properties', description: 'Lorem ipsum dolor sit amet consectetur' },
        { icon: 'fas fa-dollar-sign', title: 'No Broker Fees', description: 'Connect directly with property owners' },
        { icon: 'fas fa-shield-alt', title: 'Financing Made Easy', description: 'Lorem ipsum dolor sit amet consectetur' }
    ];

    return (
        <section className="why-choose-us">
            <div className="container">
                <div className="section-title">
                    <span>Why Choose Us</span>
                    <h2>We Provide Full Service At Every Step</h2>
                </div>
                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-card">
                            <i className={benefit.icon}></i>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
