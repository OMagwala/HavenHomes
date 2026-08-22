export function getFavourites() {
    const favourites = localStorage.getItem("favourites");

    if (!favourites) {
        return [];
    }

    try {
        return JSON.parse(favourites);
    } catch (error) {
        console.error("Invalid favourites data:", error);
        localStorage.removeItem("favourites");
        return [];
    }
}

export function addFavourite(id) {
    const favourites = getFavourites()

    if (!favourites.includes(id)) {
        favourites.push(id);
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }
}

export function removeFavourite(id) {
    const favourites = getFavourites().filter(favourite => favourite !== id);
    localStorage.setItem("favourites", JSON.stringify(favourites));
}

export function isFavourite(id) {
    return getFavourites().includes(id);
}
