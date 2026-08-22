import PropertyCard from '../components/PropertyCard'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useState, useEffect } from 'react'
import GalleryModal from '../components/GalleryModal'

export default function Listings() {

    const [properties, setProperties] = useState([]);
    const [showGallery, setShowGallery] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);

    useEffect(() => {
        async function fetchProperties() {
            const querySnapshot = await getDocs(collection(db, "properties"));
            const propertyData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setProperties(propertyData);
        }
        fetchProperties();
    }, []);

    function openGallery(property) {
        setSelectedProperty(property);
        setShowGallery(true);
    }

    function closeGallery() {
        setShowGallery(false);
        setSelectedProperty(null);
    }

    return (
        <div className='cards-container'>
            {properties.map((property) => (
                <PropertyCard key={property.id} property={property} openGallery={openGallery}/>
            ))}
            {showGallery && (
                <GalleryModal
                    property={selectedProperty}
                    onClose={closeGallery}
                />
            )}
        </div>
    )
}