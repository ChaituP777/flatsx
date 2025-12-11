import PropertyCard from '../common/PropertyCard';
import './PropertiesSection.css';

const PropertiesSection = () => {
    const properties = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600',
            title: 'Luxury 3BHK Apartment',
            description: 'Spacious apartment with modern amenities, modular kitchen, and stunning city views.',
            price: 3490000,
            priceType: 'Month',
            location: 'Koramangala, Bangalore',
            status: 'For Rent',
            bedrooms: 3,
            bathrooms: 2,
            area: 3450,
            photos: 4,
            videos: 2,
            agent: {
                name: 'William Seklo',
                image: 'https://randomuser.me/api/portraits/men/1.jpg'
            }
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
            title: 'Premium Villa with Pool',
            description: 'Elegant independent villa featuring private swimming pool and landscaped garden.',
            price: 5600000,
            priceType: 'Month',
            location: 'Whitefield, Bangalore',
            status: 'For Sale',
            bedrooms: 4,
            bathrooms: 3,
            area: 4200,
            photos: 6,
            videos: 1,
            agent: {
                name: 'Sarah Johnson',
                image: 'https://randomuser.me/api/portraits/women/2.jpg'
            }
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600',
            title: 'Cozy 2BHK Flat',
            description: 'Well-maintained apartment in prime residential area. Close to schools and hospitals.',
            price: 2890000,
            priceType: 'Month',
            location: 'Indiranagar, Bangalore',
            status: 'For Rent',
            bedrooms: 2,
            bathrooms: 2,
            area: 2800,
            photos: 5,
            videos: 2,
            agent: {
                name: 'Michael Brown',
                image: 'https://randomuser.me/api/portraits/men/3.jpg'
            }
        }
    ];

    return (
        <section className="properties-section">
            <div className="container">
                <div className="section-title">
                    <span>Properties</span>
                    <h2>Featured Listings</h2>
                </div>

                <div className="properties-grid">
                    {properties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                <div className="view-all-btn">
                    <button className="btn btn-primary">
                        View All Properties <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PropertiesSection;
