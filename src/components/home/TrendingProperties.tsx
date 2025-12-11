
import PropertyCard from '../common/PropertyCard';

const TrendingProperties = () => {
    const properties = [
        {
            id: 7,
            image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600',
            title: 'Exclusive Penthouse Suite',
            description: 'Top floor penthouse with panoramic city views and private terrace.',
            price: 12000000,
            priceType: 'Total',
            location: 'UB City, Bangalore',
            status: 'Hot',
            bedrooms: 4,
            bathrooms: 4,
            area: 4500,
            photos: 15,
            videos: 3,
            agent: {
                name: 'Courtney Henry',
                image: 'https://randomuser.me/api/portraits/women/7.jpg'
            }
        },
        {
            id: 8,
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600',
            title: 'Modern Townhouse',
            description: 'Contemporary design townhouse with smart automation and energy efficient systems.',
            price: 7500000,
            priceType: 'Total',
            location: 'HSR Layout, Bangalore',
            status: 'Trending',
            bedrooms: 3,
            bathrooms: 3,
            area: 2100,
            photos: 9,
            videos: 1,
            agent: {
                name: 'Arlene McCoy',
                image: 'https://randomuser.me/api/portraits/women/8.jpg'
            }
        },
        {
            id: 9,
            image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600',
            title: 'Budget Friendly Family Flat',
            description: 'Affordable 2BHK apartment with community amenities like gym and pool.',
            price: 4500000,
            priceType: 'Total',
            location: 'Yelahanka, Bangalore',
            status: 'Best Value',
            bedrooms: 2,
            bathrooms: 2,
            area: 1100,
            photos: 6,
            videos: 0,
            agent: {
                name: 'Floyd Miles',
                image: 'https://randomuser.me/api/portraits/men/9.jpg'
            }
        }
    ];

    return (
        <section className="py-[80px] bg-white sm:py-[60px]">
            <div className="container mx-auto px-[15px] max-w-[1200px] xl:max-w-[1320px]">
                <div className="text-center mb-[50px]">
                    <span className="inline-block py-[6px] px-[20px] bg-[#ff6b6b1a] text-secondary rounded-[50px] text-[14px] font-semibold mb-[15px]">Popular Choice</span>
                    <h2 className="text-[42px] text-heading font-bold sm:text-[32px]">Trending Properties</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-[50px]">
                    {properties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                <div className="text-center">
                    <button className="btn btn-primary py-[15px] px-[40px] text-[16px]">
                        View Trending <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TrendingProperties;
