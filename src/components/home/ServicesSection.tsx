import Link from 'next/link';


const ServicesSection = () => {
    const services = [
        {
            icon: 'fas fa-home',
            title: 'Buy a Home',
            description: 'Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
            link: '/properties?type=buy'
        },
        {
            icon: 'fas fa-building',
            title: 'Sell a Home',
            description: 'Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
            link: '/post-property'
        }
    ];

    return (
        <section className="py-[80px] bg-section-1 sm:py-[60px]">
            <div className="container mx-auto px-[15px] max-w-[1200px] xl:max-w-[1320px]">
                <div className="text-center mb-[50px]">
                    <span className="inline-block py-[6px] px-[20px] bg-[#ff6b6b1a] text-secondary rounded-[50px] text-[14px] font-semibold mb-[15px]">Our Services</span>
                    <h2 className="text-[42px] text-heading font-bold sm:text-[32px]">Our Main Focus</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-[40px_30px] rounded-[8px] text-center transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:-translate-y-[10px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] group">
                            <div className="w-[80px] h-[80px] mx-auto mb-[25px] flex items-center justify-center bg-[#ff6b6b1a] rounded-full text-[36px] text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white">
                                <i className={service.icon}></i>
                            </div>
                            <h3 className="text-[22px] mb-[15px] text-heading">{service.title}</h3>
                            <p className="text-[15px] leading-[1.8] text-paragraph mb-[20px]">{service.description}</p>
                            <Link href={service.link} className="text-secondary font-semibold text-[15px] inline-flex items-center gap-[8px] transition-all duration-300 hover:gap-[12px]">
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
