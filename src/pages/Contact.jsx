import { useState } from 'react'
import { Mail, Phone, MessageCircle, MapPin, Building2, Navigation, Send, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { t } = useTranslation()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        const formData = new FormData(e.target)

        formData.append("access_key", "40da1596-def3-4041-a84e-eaf30c439cda")

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true)
                e.target.reset()
                // Reset success message after 5 seconds if desired, or keep it
                setTimeout(() => setSubmitted(false), 5000)
            } else {
                console.error("Error", data);
                alert("Something went wrong. Please try again.")
            }
        } catch (error) {
            console.error("Error", error);
            alert("Something went wrong. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <PageTransition>
            <SEO title="Contact" />
            {/* Contact Hero / Get In Touch */}
            <section className="contact-hero">
                <div className="section-container">
                    <h1 className="contact-main-title fade-in">{t('contactPage.title')}</h1>

                    <div className="contact-grid">
                        {/* Left: Contact Info / Channels */}
                        <div className="contact-info fade-in-left">
                            <h2 className="contact-info-title">{t('contactPage.subtitle')}</h2>
                            <div className="contact-channels">
                                <a href="mailto:muhammadqolbi00@gmail.com" className="contact-channel">
                                    <div className="channel-icon">
                                        <Mail />
                                    </div>
                                    <div className="channel-detail">
                                        <span className="channel-label">{t('contactPage.email')}</span>
                                        <span className="channel-value">muhammadqolbi00@gmail.com</span>
                                    </div>
                                </a>
                                <a href="https://wa.me/+6285233142178" target="_blank" rel="noopener noreferrer" className="contact-channel">
                                    <div className="channel-icon">
                                        <Phone />
                                    </div>
                                    <div className="channel-detail">
                                        <span className="channel-label">{t('contactPage.phone')}</span>
                                        <span className="channel-value">+6285233142178</span>
                                    </div>
                                </a>
                                <a href="https://wa.me/+6285233142178" target="_blank" rel="noopener noreferrer" className="contact-channel">
                                    <div className="channel-icon">
                                        <MessageCircle />
                                    </div>
                                    <div className="channel-detail">
                                        <span className="channel-label">{t('contactPage.whatsapp')}</span>
                                        <span className="channel-value">+6285233142178</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="contact-form-wrapper fade-in-right">
                            {submitted ? (
                                <div className="contact-success" style={{ padding: '2rem', textAlign: 'center', color: 'var(--accent)' }}>
                                    <h3>{t('contactPage.form.successTitle')}</h3>
                                    <p>{t('contactPage.form.successMessage')}</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">{t('contactPage.form.name')}</label>
                                        <input type="text" id="name" name="name" placeholder={t('contactPage.form.namePlaceholder')} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">{t('contactPage.form.email')}</label>
                                        <input type="email" id="email" name="email" placeholder={t('contactPage.form.emailPlaceholder')} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">{t('contactPage.form.subject')}</label>
                                        <input type="text" id="subject" name="subject" placeholder={t('contactPage.form.subjectPlaceholder')} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">{t('contactPage.form.message')}</label>
                                        <textarea id="message" name="message" rows="5" placeholder={t('contactPage.form.messagePlaceholder')} required></textarea>
                                    </div>
                                    <button type="submit" className="form-submit" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                                        <span>{isSubmitting ? 'Sending...' : t('contactPage.form.send')}</span>
                                        {isSubmitting ? null : <Send size={18} />}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>


        </PageTransition>
    )
}
