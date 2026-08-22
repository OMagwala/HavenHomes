import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaTimes, FaHeart } from 'react-icons/fa'
import MyLogo from '../assets/HomeImages/Logo.webp'
import { useState } from 'react'
import {useFavourites} from '../context/FavouritesContext'
import '../index.css'

const links = [
    { name: "Home", path: "/" },
    { name: "Listings", path: "/listings" },
    { name: "Contact", path: "/contact" },
    {path: "/favourites"}
];

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { favourites } = useFavourites();
    const favouritesCounter = favourites.length;
    
    function toggleTabs() {
        setIsMenuOpen(prev => !prev);
    }

    return (
        <div className="nav-bar">
            <div className='logo'>
                <Link to='/' className='logo-icon'>
                    <img src={MyLogo} alt="Company Logo" />
                </Link>
            </div>
            <ul className={isMenuOpen? "nav-links open" : "nav-links"}>
                {links.map((link) => (
                    <li key={link.path}>
                        <NavLink
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                        >
                            {link.path === "/favourites" ? (
                                <>
                                    <span className="nav-icon">
                                        <FaHeart />
                                    </span>

                                    <span className="fav-count">
                                        {favouritesCounter}
                                    </span>
                                </>
                            ) : (
                                link.name
                            )}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div>
                <NavLink to="/enquiry" className="enquiry-btn" onClick={() => setIsMenuOpen(false)}>
                    Enquire
                </NavLink>
            </div>
            <div className='hamburger-menu' onClick={toggleTabs}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
        </div>
    )
}