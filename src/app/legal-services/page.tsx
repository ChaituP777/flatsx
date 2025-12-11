

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
        <div className="min-h-screen">
            <div className="bg-primary pt-[80px] pb-[80px] text-center text-white">
                <div className="container">
                    <h1 className="text-[42px] font-bold mb-[15px] text-white">Property Legal Services</h1>
                    <p className="text-[18px] opacity-90 text-white">Professional legal assistance for your property transactions</p>
                </div>
            </div>

            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] -mt-[50px] mb-[80px] max-w-[1200px] mx-auto">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-[40px_30px] rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-center transition-transform duration-300 hover:-translate-y-[10px]">
                            <h3 className="text-[24px] mb-[20px] text-heading">{service.title}</h3>
                            <div className="text-[36px] font-bold text-secondary mb-[30px]">{service.price}</div>
                            <ul className="list-none p-0 mb-[30px] text-left">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="py-[12px] border-b border-border-1 flex items-center gap-[12px]">
                                        <i className="fas fa-check-circle text-green-500 text-[18px]"></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-primary w-full">Get Started</button>
                        </div>
                    ))}
                </div>

                <div className="text-center p-[60px_40px] bg-section-1 rounded-[8px] mb-[80px]">
                    <h2 className="text-[32px] mb-[15px]">Need Legal Consultation?</h2>
                    <p className="text-[18px] text-gray-600 mb-[30px]">Book a free consultation with our legal experts</p>
                    <button className="btn btn-primary">Book Consultation</button>
                </div>
            </div>
        </div>
    );
};

export default LegalServices;
