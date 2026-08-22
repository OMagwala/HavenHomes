import { useParams, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { doc, getDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { FaEnvelope } from 'react-icons/fa'
import agents from '../data/agents'


export default function Enquiry() {

    const { id } = useParams()
    const location = useLocation()

    const isPropertyEnquiry = location.pathname.startsWith('/enquiry/property')
    const isAgentEnquiry = location.pathname.startsWith('/enquiry/agent')

    const [property, setProperty] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const agent = isAgentEnquiry
        ? agents.find(agent => agent.id === Number(id))
        : null

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const [submitted, setSubmitted] = useState(false)


    useEffect(() => {

        setSubmitted(false)

    async function fetchProperty() {

        if (!isPropertyEnquiry) {
            setProperty(null)
            setError(false)
            setFormData(prev => ({
                ...prev,
                message: ""
            }))
            setLoading(false)
            return
        }

        setLoading(true)

        try {
            const propertyRef = doc(db, "properties", id)
            const propertySnap = await getDoc(propertyRef)

            if (propertySnap.exists()) {
                const propertyData = {
                    id: propertySnap.id,
                    ...propertySnap.data()
                }

                setProperty(propertyData)

                setFormData(prev => ({
                    ...prev,
                    message: `Hello Haven Homes,

I am interested in the ${propertyData.name} property located in ${propertyData.location}.

Please contact me with more information.

Thank you.`
                }))
            } else {
                setError(true)
            }
        } catch (error) {
            console.error("Error fetching property:", error)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

        fetchProperty()

    }, [id, isPropertyEnquiry, location.pathname])


    function handleChange(event) {

        const { name, value } = event.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }


    async function handleSubmit(event) {
        event.preventDefault()

        try {
            await addDoc(collection(db, "enquiries"), {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
                propertyId: property?.id || null,
                propertyName: property?.name || null,
                agentId: agent?.id || null,
                agentName: agent?.name || null,
                createdAt: serverTimestamp()
            })
            setSubmitted(true)
        } catch (error) {
            console.error("Error submitting enquiry:", error)
            setError(true)
        }
    }


    if (loading) {
        return <h2 className='p2'>Loading...</h2>
    }

    if (error) {
        return (
            <section className="error-message">
                <h1>Something went wrong</h1>
                <p>We couldn't load this property right now. Please try again later.</p>
            </section>
        )
    }


    if (submitted) {

        function startNewEnquiry() {
            setSubmitted(false)
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            })
        }

        return (
            <section className="success-message">
                <h1>Thank You!</h1>
                <p>Your enquiry has been submitted successfully.</p>
                <p>One of our consultants will contact you shortly.</p>
                <button className='another-enquiry-btn' onClick={startNewEnquiry}>
                    <FaEnvelope />
                    <span>Make Another Enquiry</span>
                </button>
            </section>
        )
    }

    return (

        <section className="enquiry-page">

            <header className="enquiry-header">

                <h1>Make an Enquiry</h1>


                {!property && !agent && (

                    <p className="enquiry-intro">
                        Every great home begins with a conversation.
                        Tell us what you're looking for, and our team will help you
                        find a property that suits your lifestyle and goals.
                    </p>

                )}


                {property && (

                    <div className="selected-item">

                        <h2>{property.name}</h2>

                        <p>{property.location}</p>

                    </div>

                )}


                {agent && (

                    <div className="selected-item">

                        <h2>{agent.name}</h2>

                        <p>{agent.title}</p>

                    </div>

                )}

            </header>


            <form className="enquiry-form" onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />


                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />


                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="^(0[0-9]{9}|\+27[0-9]{9})$"
                    title="Please enter a valid South African phone number, e.g. 0821234567 or +27821234567."
                />


                <textarea
                    name="message"
                    rows="8"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />


                <button type="submit">
                    Submit Enquiry
                </button>

            </form>

        </section>
    )
}