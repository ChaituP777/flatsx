import Link from 'next/link';
import './ServicesSection.css';

const ServicesSection = () => {
    const services = [
        {
            icon: 'fas fa-home',
            title: 'Buy a Home',
            description: 'Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
            link: '/properties?type=buy'
        },
        {
            icon: 'fas fa-key',
            title: 'Rent a Home',
            description: 'Over 1 million+ homes for rent available on the website, we can match you with a house you will want to call home.',
            link: '/properties?type=rent'
        },
        {
            icon: 'fas fa-building',
            title: 'Sell a Home',
            description: 'Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
            link: '/post-property'
        }
    ];

    return (
        <section className="services-section">
            <div className="container">
                <div className="section-title">
                    <span>Our Services</span>
                    <h2>Our Main Focus</h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">
                                <i className={service.icon}></i>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <Link href={service.link} className="service-link">
                                Find A Home <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
