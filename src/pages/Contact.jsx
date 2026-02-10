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
                            <h2 className="contact-info-title">Hubungi</h2>
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
                                    <h3>Pesan Terkirim!</h3>
                                    <p>Terima kasih telah menghubungi saya.</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Nama Lengkap</label>
                                        <input type="text" id="name" placeholder="Masukkan nama lengkap" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" placeholder="email@contoh.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subjek</label>
                                        <input type="text" id="subject" placeholder="Tentang apa?" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Pesan</label>
                                        <textarea id="message" rows="5" placeholder="Tulis pesanmu di sini..." required></textarea>
                                    </div>
                                    <button type="submit" className="form-submit">
                                        <span>Kirim Pesan</span>
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
