import HeroSection from '../components/home/HeroSection';
import SearchSection from '../components/home/SearchSection';
import ServicesSection from '../components/home/ServicesSection';
import PropertiesSection from '../components/home/PropertiesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import RecentlyAddedProperties from '../components/home/RecentlyAddedProperties';
import TrendingProperties from '../components/home/TrendingProperties';
import ProjectsSection from '../components/home/ProjectsSection';
import ToolsSection from '../components/home/ToolsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <SearchSection />
            <ServicesSection />
            <PropertiesSection />
            <RecentlyAddedProperties />
            <TrendingProperties />
            <ProjectsSection />
            {/* <WhyChooseUs /> */}
            <ToolsSection />
            {/* <TestimonialsSection /> */}
        </div>
    );
}
