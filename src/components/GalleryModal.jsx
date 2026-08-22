import { FaTimes, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import {useEffect, useState} from "react"

export default function GalleryModal({ property, onClose }) {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        //Keyboard buttons
        function handleKeyDown(e) {
            if (e.key === "Escape") {
                onClose();
            }

            if (e.key === "ArrowLeft") {
                previousImage();
            }

            if (e.key === "ArrowRight") {
                nextImage();
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
                document.body.style.overflow = "auto";
                window.removeEventListener("keydown", handleKeyDown)
            };
        }, [onClose]);

    useEffect(() => {
        setCurrentIndex(0);
        }, [property])

        function nextImage() {
            setCurrentIndex((prev) => 
            (prev + 1) % property.images.length);
        }

        function previousImage() {
            setCurrentIndex((prev) => 
            (prev - 1 + property.images.length) % property.images.length);
        }

    const leftIndex = (currentIndex - 1 + property.images.length) % property.images.length;
    const rightIndex = (currentIndex + 1) % property.images.length;
        
    return (
        <div className="gallery-overlay" onClick={onClose}>
            <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    <FaTimes />
                </button>
                <div className="gallery-content">
                    <button className="arrow left-arrow" onClick={previousImage}>
                        <FaAngleLeft />
                    </button>
                    
                    <div className="carousel">
                        <img className="left-image" src={property.images[leftIndex]}
                            alt={`${property.name} image ${leftIndex + 1}`}/>
                        <img className="center-image" src={property.images[currentIndex]}
                            alt={`${property.name} image ${currentIndex + 1}`}/>
                        <img className="right-image" src={property.images[rightIndex]}
                            alt={`${property.name} image ${rightIndex + 1}`} />
                    </div>

                    <button className="arrow right-arrow" onClick={nextImage}>
                        <FaAngleRight />
                    </button>
                </div>
                <div className="dots">
                        {property.images.map((_, index) => (
                            <button key={index} className={`dot ${index === currentIndex ? 
                                "active" : ""
                                }`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                </div>
            </div>
            
        </div>
    )
}