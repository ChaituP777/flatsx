import './LegalServices.css';

const LegalServices = () => {
    const services = [
        {
            title: 'Property Verification Package',
            price: '₹5,999',
            features: ['Title Verification', 'Document Review', 'Legal Opinion', 'Ownership Verification']
        },
        {
            title: 'Sale Agreement Package',
            price: '₹12,999',
            features: ['Agreement Drafting', 'Registration Support', 'Stamp Duty Calculation', 'Legal Consultation']
        },
        {
            title: 'Complete Legal Package',
            price: '₹24,999',
            features: ['All Verification Services', 'Agreement Drafting', 'Registration Assistance', 'Dispute Support', '6 Month Legal Support']
        }
    ];

    return (
        <div className="legal-services-page">
            <div className="legal-hero">
                <div className="container">
                    <h1>Property Legal Services</h1>
                    <p>Professional legal assistance for your property transactions</p>
                </div>
            </div>

            <div className="container">
                <div className="services-grid-legal">
                    {services.map((service, index) => (
                        <div key={index} className="service-package">
                            <h3>{service.title}</h3>
                            <div className="package-price">{service.price}</div>
                            <ul className="package-features">
                                {service.features.map((feature, i) => (
                                    <li key={i}>
                                        <i className="fas fa-check-circle"></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-primary btn-block">Get Started</button>
                        </div>
                    ))}
                </div>

                <div className="consultation-section">
                    <h2>Need Legal Consultation?</h2>
                    <p>Book a free consultation with our legal experts</p>
                    <button className="btn btn-primary">Book Consultation</button>
                </div>
            </div>
        </div>
    );
};

export default LegalServices;
