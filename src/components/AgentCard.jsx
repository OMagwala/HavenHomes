import SocialMediaIcons from './SocialMediaIcons'
import { Link } from 'react-router-dom';
import { FaHouseUser, FaPhoneAlt, FaEnvelope, FaBriefcase } from "react-icons/fa";

export default function AgentCard({ agent, properties }) {
    
    const managedProperties = properties.filter(property => agent.properties.includes(property.id));

    return (
        <div className="agent-info">
            <div className="agent-card">
                <div className='agent-data'>
                    <img src={agent.image} alt={agent.name} />
                <div className='social-links'>
                        <h4>Connect With Me</h4>
                        <SocialMediaIcons socials={agent.socials} />
                    </div>
                    
                </div>
                <div className="agent-details">
                    <h2>{agent.gender === "Male" ? "Mr." : "Ms."} {agent.name}</h2>
                    <p className='agent-title'>{agent.title}</p>
                    <ul>
                        <li><FaBriefcase /> {agent.experience} Years Experience</li>
                        <li><FaPhoneAlt /> {agent.phone}</li>
                        <li><FaEnvelope /> {agent.email}</li>
                    </ul>
                    <p className='agent-bio'>{agent.bio}</p>
                    <div className="agent-properties">
                        <h4>Current Listings</h4>
                        <ul className='managed-properties'>
                            {managedProperties.map((property) => (
                                <li key={property.id}>
                                   <FaHouseUser /> {property.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link to={`/enquiry/agent/${agent.id}`}>
                        <button className='agent-btn' aria-label={`Make enquiry with ${agent.name}`}>
                            <p>Make Enquiry</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}