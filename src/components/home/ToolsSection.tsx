import Link from 'next/link';


const ToolsSection = () => {
    const tools = [
        { icon: 'fas fa-calculator', title: 'EMI Calculator', link: '/calculator/emi' },
        { icon: 'fas fa-wallet', title: 'Budget Calculator', link: '/calculator/budget' },
        { icon: 'fas fa-check-circle', title: 'Loan Eligibility', link: '/calculator/eligibility' },
        { icon: 'fas fa-ruler', title: 'Area Converter', link: '/calculator/area' }
    ];

    return (
        <section className="py-[80px] bg-white sm:py-[60px]">
            <div className="container mx-auto px-[15px] max-w-[1200px] xl:max-w-[1320px]">
                <div className="text-center mb-[50px]">
                    <span className="inline-block py-[6px] px-[20px] bg-[#ff6b6b1a] text-secondary rounded-[50px] text-[14px] font-semibold mb-[15px]">Popular Tools</span>
                    <h2 className="text-[42px] text-heading font-bold sm:text-[32px]">Calculate Your Requirements</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px]">
                    {tools.map((tool, index) => (
                        <Link key={index} href={tool.link} className="bg-section-1 p-[40px_20px] text-center rounded-[8px] transition-all duration-300 cursor-pointer hover:bg-secondary hover:-translate-y-[5px] hover:shadow-[0_10px_25px_rgba(255,107,107,0.3)] group block">
                            <i className={`${tool.icon} text-[42px] text-secondary mb-[15px] transition-all duration-300 group-hover:text-white`}></i>
                            <h3 className="text-[16px] text-heading transition-all duration-300 group-hover:text-white">{tool.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;
