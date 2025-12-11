import Link from 'next/link';
import './ToolsSection.css';

const ToolsSection = () => {
    const tools = [
        { icon: 'fas fa-calculator', title: 'EMI Calculator', link: '/calculator/emi' },
        { icon: 'fas fa-wallet', title: 'Budget Calculator', link: '/calculator/budget' },
        { icon: 'fas fa-check-circle', title: 'Loan Eligibility', link: '/calculator/eligibility' },
        { icon: 'fas fa-ruler', title: 'Area Converter', link: '/calculator/area' }
    ];

    return (
        <section className="tools-section">
            <div className="container">
                <div className="section-title">
                    <span>Popular Tools</span>
                    <h2>Calculate Your Requirements</h2>
                </div>
                <div className="tools-grid">
                    {tools.map((tool, index) => (
                        <Link key={index} href={tool.link} className="tool-card">
                            <i className={tool.icon}></i>
                            <h3>{tool.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;
