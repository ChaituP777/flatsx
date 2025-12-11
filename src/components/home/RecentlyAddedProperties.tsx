
import PropertyCard from '../common/PropertyCard';

const RecentlyAddedProperties = () => {
    const properties = [
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600',
            title: 'Modern Apartment in City Center',
            description: 'Newly constructed 2BHK with smart home features and excellent connectivity.',
            price: 4500000,
            priceType: 'Total',
            location: 'MG Road, Bangalore',
            status: 'New',
            bedrooms: 2,
            bathrooms: 2,
            area: 1200,
            photos: 8,
            videos: 1,
            agent: {
                name: 'Robert Fox',
                image: 'https://randomuser.me/api/portraits/men/4.jpg'
            }
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?w=600',
            title: 'Spacious Family Home',
            description: '3BHK villa with private garden in a gated community. Perfect for families.',
            price: 8500000,
            priceType: 'Total',
            location: 'Sarjapur Road, Bangalore',
            status: 'For Sale',
            bedrooms: 3,
            bathrooms: 3,
            area: 2400,
            photos: 12,
            videos: 2,
            agent: {
                name: 'Jenny Wilson',
                image: 'https://randomuser.me/api/portraits/women/5.jpg'
            }
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600',
            title: 'Studio Apartment near Tech Park',
            description: 'Compact and fully furnished studio ideal for professionals. High rental yield.',
            price: 25000,
            priceType: 'Month',
            location: 'Electronic City, Bangalore',
            status: 'For Rent',
            bedrooms: 1,
            bathrooms: 1,
            area: 600,
            photos: 5,
            videos: 0,
            agent: {
                name: 'Guy Hawkins',
                image: 'https://randomuser.me/api/portraits/men/6.jpg'
            }
        }
    ];

    return (
        <section className="py-[80px] bg-section-1 sm:py-[60px]">
            <div className="container mx-auto px-[15px] max-w-[1200px] xl:max-w-[1320px]">
                <div className="text-center mb-[50px]">
                    <span className="inline-block py-[6px] px-[20px] bg-[#ff6b6b1a] text-secondary rounded-[50px] text-[14px] font-semibold mb-[15px]">Fresh Arrivals</span>
                    <h2 className="text-[42px] text-heading font-bold sm:text-[32px]">Recently Added Property List</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-[50px]">
                    {properties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                <div className="text-center">
                    <button className="btn btn-primary py-[15px] px-[40px] text-[16px]">
                        View New Listings <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RecentlyAddedProperties;
