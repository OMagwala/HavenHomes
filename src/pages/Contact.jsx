import AgentCard from '../components/AgentCard'
import agents from '../data/agents'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useEffect, useState } from 'react'

export default function Contact() {

    const [properties, setProperties] = useState([])

    useEffect(() => {
        async function fetchProperties() {
            const querySnapshot = await getDocs(collection(db, "properties"))

            const propertyData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            setProperties(propertyData)
        }

        fetchProperties()
    }, [])
    
    return (
        <section className='contact-page'>
            <div className="contact-header">
                <h1>Meet Our Property Consultants</h1>

                <p>
                    Meet the team behind Haven Homes. Our experienced property consultants are here to guide you every step of the way,
                    whether you're buying your first home, searching for a holiday retreat,
                    or investing in your next property.
                </p>
            </div>
            <div className="agents-container">
                {agents.map((agent) => (
                    <AgentCard key={agent.id} agent={agent} properties={properties} />
                ))}
            </div>
        </section>
    )
}
