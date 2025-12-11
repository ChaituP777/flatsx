import Image from 'next/image';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card">
            <div className="property-card-image">
                <Image
                    src={property.image || '/placeholder-property.jpg'}
                    alt={property.title}
                    width={400}
                    height={300}
                    className="property-img"
                />
                <div className="property-badge">{property.status}</div>
                <div className="property-location">
                    <i className="fas fa-map-marker-alt"></i> {property.location}
                </div>
                <div className="property-media-count">
                    <span><i className="fas fa-camera"></i> {property.photos || 4}</span>
                    <span><i className="fas fa-video"></i> {property.videos || 2}</span>
                </div>
            </div>
            <div className="property-card-body">
                <div className="property-price">
                    ₹{property.price?.toLocaleString()}
                    {property.priceType && <span className="price-type">/{property.priceType}</span>}
                </div>
                <h3 className="property-title">{property.title}</h3>
                <p className="property-description">{property.description}</p>
                <div className="property-features">
                    <div className="feature">
                        <i className="fas fa-bed"></i>
                        <span>{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="feature">
                        <i className="fas fa-bath"></i>
                        <span>{property.bathrooms} Bathrooms</span>
                    </div>
                    <div className="feature">
                        <i className="fas fa-ruler-combined"></i>
                        <span>{property.area} sq ft</span>
                    </div>
                </div>
            </div>
            <div className="property-card-footer">
                <div className="property-agent">
                    <Image
                        src={property.agent?.image || '/placeholder-avatar.jpg'}
                        alt={property.agent?.name}
                        width={40}
                        height={40}
                        className="agent-img"
                    />
                    <div>
                        <h4>{property.agent?.name || 'Agent Name'}</h4>
                        <span>Estate Agent</span>
                    </div>
                </div>
                <div className="property-actions">
                    <button className="action-btn" title="View Details">
                        <i className="fas fa-expand"></i>
                    </button>
                    <button className="action-btn" title="Add to Wishlist">
                        <i className="far fa-heart"></i>
                    </button>
                    <button className="action-btn" title="More Info">
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
