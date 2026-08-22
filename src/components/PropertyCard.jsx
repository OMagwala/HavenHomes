import { FaMapMarkerAlt, FaBed, FaBath, FaCar, FaHeart } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useFavourites } from "../context/FavouritesContext"
import formatPrice from "../utils/formatPrice";

export default function PropertyCard({property, openGallery}) {

    const { favourites, toggleFavourite } = useFavourites();
    const favourite = favourites.includes(property.id);
    

    return (
        <div className="card-box">
            <div className="property-image">
                <img src={property.image} alt={property.name} />
                <button
                    className="heart-btn"
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleFavourite(property.id);
                    }}
                    aria-label={favourite ? "Remove from favourites" : "Add to favourites"}
                >

                    <FaHeart
                        className={favourite ? "favourite" : ""}
                    />

                </button>
            </div>
            <section className="property-details">
                <div className='price'>
                    <h2>{property.name}</h2>
                    <h3>{formatPrice(property.price)}</h3>
                </div>
                <div className="location">
                    
                    <a href={property.mapLink} target="_blank" rel="noopener noreferrer"
                        title="Find in Google Maps">
                        <FaMapMarkerAlt />
                        </a>
                    <h4>
                         {property.location}
                    </h4>
                </div>
                <ul className='rooms'>
                    <li>
                        <FaBed />
                        {property.bedrooms} {property.bedrooms === 1 ? "bedroom" : "bedrooms"} |
                    </li>
                    <li>
                        <FaBath />
                        {property.bathrooms} {property.bathrooms === 1 ? "bathroom" : "bathrooms"} |
                    </li>
                    <li>
                        <FaCar />
                        {property.garages} {property.garages === 1 ? "garage" : "garages"}
                    </li>
                </ul>
                <div className='card-btns'>
                    <Link to={`/property/${property.id}`} className='view-btn'>View Property</Link>
                    {openGallery && (
                        <button className='gallery-btn' onClick={() => openGallery(property)}>
                            Gallery
                        </button>
                    )}
                </div>
            </section>
        </div>
    )
}