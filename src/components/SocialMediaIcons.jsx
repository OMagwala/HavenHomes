import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function SocialMediaIcons({ socials }) {
    return (
        <div className="social-icons">
            <a href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <FaLinkedinIn />
            </a>

            <a href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
            >
                <FaInstagram />
            </a>

            <a href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
            >
                <FaFacebookF />
            </a>

            <a href={socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
            >
                <FaXTwitter />
            </a>
        </div>
    )
}