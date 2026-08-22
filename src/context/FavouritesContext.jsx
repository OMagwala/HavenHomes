import { createContext, useContext, useState, useEffect } from "react"
import { getFavourites, addFavourite, removeFavourite } from "../utils/favourites"

const FavouritesContext = createContext(null);

export default function FavouritesProvider({ children }) {
    
    const [favourites, setFavourites] = useState(getFavourites());

    function toggleFavourite(id) {

        const currentFavourites = getFavourites();

        if (currentFavourites.includes(id)) {
            removeFavourite(id);
        } else {
            addFavourite(id);
        }
        setFavourites(getFavourites());
    }

    useEffect(() => {
        function handleStorage() {
            setFavourites(getFavourites());
        }
    
        window.addEventListener("storage", handleStorage);

        return () => window.removeEventListener("storage", handleStorage);
    }, []);

    return (
        <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
            {children}
        </FavouritesContext.Provider>
    )
}

export function useFavourites() {
    return useContext(FavouritesContext)
}