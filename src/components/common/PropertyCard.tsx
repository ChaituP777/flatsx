import Image from 'next/image';


const PropertyCard = ({ property }) => {
    return (
        <div className="bg-white rounded-[8px] overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[8px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] group">
            <div className="relative h-[250px] overflow-hidden">
                <Image
                    src={property.image || '/placeholder-property.jpg'}
                    alt={property.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-[15px] left-[15px] bg-secondary text-white py-[6px] px-[15px] rounded-[4px] text-[12px] font-semibold z-[2]">{property.status}</div>
                <div className="absolute bottom-[15px] left-[15px] bg-black/70 text-white py-[8px] px-[12px] rounded-[4px] text-[13px] flex items-center gap-[6px] z-[2]">
                    <i className="fas fa-map-marker-alt"></i> {property.location}
                </div>
                <div className="absolute top-[15px] right-[15px] flex gap-[10px] z-[2]">
                    <span className="bg-black/70 text-white py-[6px] px-[10px] rounded-[4px] text-[12px] flex items-center gap-[5px]"><i className="fas fa-camera"></i> {property.photos || 4}</span>
                    <span className="bg-black/70 text-white py-[6px] px-[10px] rounded-[4px] text-[12px] flex items-center gap-[5px]"><i className="fas fa-video"></i> {property.videos || 2}</span>
                </div>
            </div>
            <div className="p-[20px]">
                <div className="text-[24px] font-bold text-secondary mb-[10px]">
                    ₹{property.price?.toLocaleString()}
                    {property.priceType && <span className="text-[14px] font-normal text-paragraph">/{property.priceType}</span>}
                </div>
                <h3 className="text-[18px] font-bold text-heading mb-[10px] leading-[1.4]">{property.title}</h3>
                <p className="text-[14px] text-paragraph leading-[1.6] mb-[15px] line-clamp-2">{property.description}</p>
                <div className="flex gap-[20px] pt-[15px] border-t border-border-1">
                    <div className="flex items-center gap-[8px] text-[13px] text-paragraph">
                        <i className="fas fa-bed text-secondary text-[16px]"></i>
                        <span>{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-[8px] text-[13px] text-paragraph">
                        <i className="fas fa-bath text-secondary text-[16px]"></i>
                        <span>{property.bathrooms} Bathrooms</span>
                    </div>
                    <div className="flex items-center gap-[8px] text-[13px] text-paragraph">
                        <i className="fas fa-ruler-combined text-secondary text-[16px]"></i>
                        <span>{property.area} sq ft</span>
                    </div>
                </div>
            </div>
            <div className="p-[15px_20px] bg-section-1 flex justify-between items-center">
                <div className="flex items-center gap-[12px]">
                    <Image
                        src={property.agent?.image || '/placeholder-avatar.jpg'}
                        alt={property.agent?.name}
                        width={40}
                        height={40}
                        className="w-[40px] h-[40px] rounded-full object-cover"
                    />
                    <div>
                        <h4 className="text-[14px] font-semibold text-heading m-0">{property.agent?.name || 'Agent Name'}</h4>
                        <span className="text-[12px] text-paragraph">Estate Agent</span>
                    </div>
                </div>
                <div className="flex gap-[8px]">
                    <button className="w-[36px] h-[36px] rounded-full border-[2px] border-border-1 bg-white text-paragraph cursor-pointer transition-all duration-300 flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary" title="View Details">
                        <i className="fas fa-expand"></i>
                    </button>
                    <button className="w-[36px] h-[36px] rounded-full border-[2px] border-border-1 bg-white text-paragraph cursor-pointer transition-all duration-300 flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary" title="Add to Wishlist">
                        <i className="far fa-heart"></i>
                    </button>
                    <button className="w-[36px] h-[36px] rounded-full border-[2px] border-border-1 bg-white text-paragraph cursor-pointer transition-all duration-300 flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary" title="More Info">
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
