import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase';
import {useState, useEffect} from 'react'
import PropertyCard from '../components/PropertyCard'
import { useFavourites } from '../context/FavouritesContext';
import { FaHeartBroken } from 'react-icons/fa';

export default function Favourites() {

    const { favourites } = useFavourites();
    const [properties, setProperties] = useState([]);

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

    const favouriteProperties = properties.filter(property => favourites.includes(property.id));

    if (favouriteProperties.length === 0) {
        return (
            <section className='favourites-page'>
                <div className="no-favourites">
                    <p className='p1'><FaHeartBroken /> You haven't added favourites yet.</p>
                    <p>Browse our listings and click the heart icon to save
                        properties you'd like to revisit.
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section className='favourites-page'>
            <div className="favourites-container">
                {favouriteProperties.map(property =>
                (<PropertyCard key={property.id} property={property} />)
                )}
            </div>
        </section>
    )
}