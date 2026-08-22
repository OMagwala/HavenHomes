import '../index.css'
import HeroImage from '../assets/HomeImages/Hero.webp'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <section className='hero-section'>
                <div className='img-section'>
                    <img src={HeroImage} alt="Company Image" />
                </div>
                <div className='intro'>
                    <h1>Find Your Perfect Home</h1>
                    <p>Whether you're searching for your first home, upgrading for a growing family,
                        or investing in property, Haven Homes is here to make the journey simple.
                        Explore quality homes, discover neighbourhoods you'll love,
                        and take the next step toward finding a place that fits your lifestyle,
                        budget, and future.
                    </p>
                    <article className='socials'>
                        <p>Follow us on:</p>
                        <ul>
                            <li><a  href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Facebook"
                            ><FaFacebookF /></a>
                            </li>

                            <li><a  href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="LinkedIn"
                                ><FaLinkedinIn /></a>
                            </li>

                            <li><a  href="https://x.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="X"
                                ><FaXTwitter /></a>
                            </li>

                            <li><a  href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Instagram"
                                ><FaInstagram /></a>
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
            <Footer />
        </>
    )
}