import { useState } from 'react'
import { Mail, Phone, MessageCircle, MapPin, Building2, Navigation, Send, Globe } from 'lucide-react'

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <>
            {/* Contact Hero / Get In Touch */}
            <section className="contact-hero">
                <div className="section-container">
                    <h1 className="contact-main-title fade-in">Get In Touch</h1>

                    <div className="contact-grid">
                        {/* Left: Contact Info / Channels */}
                        <div className="contact-info fade-in-left">
                            <h2 className="contact-info-title">Contact</h2>
                            <div className="contact-channels">
                                <a href="mailto:muhammadqolbi00@gmail.com" className="contact-channel">
                                    <div className="channel-icon">
                                        <Mail />
                                    </div>
                                    <div className="channel-detail">
                                        <span className="channel-label">Email</span>
                                        <span className="channel-value">muhammadqolbi00@gmail.com</span>
                                    </div>
                                </a>
                                <a href="https://wa.me/+6285233142178" target="_blank" rel="noopener noreferrer" className="contact-channel">
                                    <div className="channel-icon">
                                        <Phone />
                                    </div>
                                    <div className="channel-detail">
                                        <span className="channel-label">Phone</span>
                                        <span className="channel-value">+6285233142178</span>
                                    </div>
                                </a>
                                <a href="https://wa.me/+6285233142178" target="_blank" rel="noopener noreferrer" className="contact-channel">
                                    <div className="channel-icon">
                                        <MessageCircle />
                                    </div>
                                    <div className="channel-detail">
                                        <span className="channel-label">WhatsApp</span>
                                        <span className="channel-value">+6285233142178</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="contact-form-wrapper fade-in-right">
                            {submitted ? (
                                <div className="contact-success" style={{ padding: '2rem', textAlign: 'center', color: 'var(--accent)' }}>
                                    <h3>Message Sent!</h3>
                                    <p>Thank you for contacting me.</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" placeholder="Enter your full name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" placeholder="email@example.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <input type="text" id="subject" placeholder="What is this about?" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>
                                    </div>
                                    <button type="submit" className="form-submit">
                                        <span>Send Message</span>
                                        <Send size={18} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
