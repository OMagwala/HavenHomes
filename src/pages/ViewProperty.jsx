import { Link, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import {useState, useEffect} from 'react'
import { useFavourites } from '../context/FavouritesContext'
import formatPrice from '../utils/formatPrice'
import { FaMapMarkerAlt, FaBed, FaBath, FaCar, FaRulerCombined, FaCheckCircle, FaHome, FaHeart, FaEnvelope } from "react-icons/fa";

export default function ViewProperty() {
    

    const {id} = useParams();

    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    const { favourites, toggleFavourite } = useFavourites();

    useEffect(() => {
        async function fetchProperty() {
            const propertyRef = doc(db, "properties", id);
            const propertySnap = await getDoc(propertyRef);

            if (propertySnap.exists()) {
                setProperty({
                    id: propertySnap.id,
                    ...propertySnap.data()
                });
            }
            setLoading(false);
        }
        fetchProperty();
    }, [id]);

    if (loading) {
        return <h2 className='p2'>Loading property...</h2>
    }

    if (!property) {
        return <h2 className='p2'>Property Not Found.</h2>
    }

    const favourite = favourites.includes(property.id);

    return (
        <main className="property-detail">
            <section className="property-hero">
                <img src={property.image} alt={property.name} />
                <div className="hero-overlay">
                    <div className="hero-info">
                        <h1>{property.name}</h1>
                        <h2>{formatPrice(property.price)}</h2>
                        <p><FaMapMarkerAlt /> {property.location}</p>
                    </div>
                </div>
            </section>

            <section className="property-information">
                <div className="info-card">
                    <FaHome />
                    <span>
                        {property.type}
                    </span>
                </div>
                <div className="info-card">
                    <FaBed />
                    <span>
                        {property.bedrooms}{" "}
                        {property.bedrooms === 1 ? "Bedroom" : "Bedrooms"}
                    </span>
                </div>
                <div className="info-card">
                    <FaBath />
                    <span>
                        {property.bathrooms}{" "}
                        {property.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
                    </span>
                </div>
                <div className="info-card">
                    <FaCar />
                    <span>
                        {property.garages}{" "}
                        {property.garages === 1 ? "Garage" : "Garages"}
                    </span>
                </div>
                <div className="info-card">
                    <FaRulerCombined />
                    <span>{property.floorArea} m²</span>
                </div>
            </section>

            <section className="property-description">
                <h2>Description</h2>
                <p>{property.description}</p>
            </section>

            <section className="property-features">
                <h2>Features</h2>
                <ul>
                    {property.features.map((feature) => (
                        <li key={feature}>
                           <FaCheckCircle /> {feature}
                        </li> 
                    ))}
                </ul>
            </section>

            <section className="property-gallery">
                <h2>Gallery ({property.images?.length || 0})</h2>
                <div className="gallery-grid">
                    {property.images?.map((image, index) => (
                        <img key={index} src={image} alt={`${property.name} ${index + 1}`} loading='lazy'/>
                    ))}
                </div>
            </section>

            <section className="property-actions">
                <Link to={`/enquiry/property/${property.id}`}>
                    <button aria-label={`Make enquiry about ${property.name}`}>
                        <FaEnvelope />
                        Make Enquiry
                    </button>
                </Link>
                <button aria-label={`View ${property.name} on Google Maps`} onClick={() => window.open(property.mapLink, "_blank", "noopener,noreferrer")}>
                    <FaMapMarkerAlt />
                    View on Map
                </button>
                <button onClick={() => toggleFavourite(property.id)} aria-label={favourite ? `Remove ${property.name} from favourites` : `Add ${property.name} to favourites`
}>
                    <FaHeart className={favourite ? "favourite" : ""} />
                    {favourite ? "Remove from Favourites" : "Add to Favourites"}
                </button>
            </section>
        </main>
    )
}