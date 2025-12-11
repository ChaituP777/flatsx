
import Link from 'next/link';

const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600',
            title: 'Prestige Lakeside Habitat',
            location: 'Varthur, Bangalore',
            status: 'Under Construction',
            type: 'Apartments & Villas',
            units: '2, 3 & 4 BHK'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600',
            title: 'Sobha Dream Acres',
            location: 'Balagere, Bangalore',
            status: 'Ready to Move',
            type: 'Apartments',
            units: '1 & 2 BHK'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600',
            title: 'Brigade Cornerstone Utopia',
            location: 'Whitefield, Bangalore',
            status: 'New Launch',
            type: 'Mixed Use',
            units: 'Studio, 1, 2 & 3 BHK'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600',
            title: 'Godrej Woods',
            location: 'Sarjapur, Bangalore',
            status: 'Pre-Launch',
            type: 'Forest Theme Apartments',
            units: '2 & 3 BHK'
        }
    ];

    return (
        <section className="py-[80px] bg-section-1 sm:py-[60px]">
            <div className="container mx-auto px-[15px] max-w-[1200px] xl:max-w-[1320px]">
                <div className="text-center mb-[50px]">
                    <span className="inline-block py-[6px] px-[20px] bg-[#ff6b6b1a] text-secondary rounded-[50px] text-[14px] font-semibold mb-[15px]">Top Developers</span>
                    <h2 className="text-[42px] text-heading font-bold sm:text-[32px]">New Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-[50px]">
                    {projects.map(project => (
                        <div key={project.id} className="bg-white rounded-[12px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:-translate-y-[5px] transition-all duration-300 group cursor-pointer">
                            <div className="relative h-[200px] overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute top-[10px] left-[10px] bg-secondary text-white text-[10px] font-bold px-[10px] py-[4px] rounded-[4px] uppercase tracking-wider">
                                    {project.status}
                                </div>
                            </div>
                            <div className="p-[20px]">
                                <h3 className="text-[18px] font-bold text-heading mb-[5px] truncate">{project.title}</h3>
                                <p className="text-[14px] text-gray-500 mb-[10px] flex items-center gap-[5px]">
                                    <i className="fas fa-map-marker-alt text-secondary"></i> {project.location}
                                </p>
                                <div className="flex justify-between items-center text-[12px] font-medium border-t border-border-1 pt-[10px] mt-[10px]">
                                    <span className="bg-gray-100 px-[8px] py-[2px] rounded text-gray-700">{project.type}</span>
                                    <span className="text-secondary">{project.units}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button className="btn btn-primary py-[15px] px-[40px] text-[16px]">
                        View All Projects <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
