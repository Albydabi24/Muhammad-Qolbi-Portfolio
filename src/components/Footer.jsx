import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram, Linkedin, Home, User, Image } from 'lucide-react'
import { Dock, DockIcon } from './Dock'
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="footer">
            <div className="section-container">
                <div className="footer-grid" style={{ marginBottom: '5rem' }}> {/* Increased spacing from 3rem to 5rem */}
                    {/* Left — Logo + Nav + Contact */}
                    <div className="footer-left">
                        <Link to="/" className="footer-logo" style={{ textDecoration: 'none', color: 'inherit' }}>OBI.</Link>
                        <nav style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '2rem' }}>
                            <Dock magnification={60} distance={100} style={{ gap: '30px' }}>
                                <DockIcon width={50} magnification={70} className="bg-black/10 dark:bg-white/10 p-2">
                                    <Link to="/" aria-label={t('nav.home')} className="w-full h-full flex items-center justify-center text-current font-medium text-sm">
                                        {t('nav.home')}
                                    </Link>
                                </DockIcon>
                                <DockIcon width={55} magnification={75} className="bg-black/10 dark:bg-white/10 p-2">
                                    <Link to="/about" aria-label={t('nav.about')} className="w-full h-full flex items-center justify-center text-current font-medium text-sm">
                                        {t('nav.about')}
                                    </Link>
                                </DockIcon>
                                <DockIcon width={65} magnification={85} className="bg-black/10 dark:bg-white/10 p-2">
                                    <Link to="/gallery" aria-label={t('nav.gallery')} className="w-full h-full flex items-center justify-center text-current font-medium text-sm">
                                        {t('nav.gallery')}
                                    </Link>
                                </DockIcon>
                                <DockIcon width={65} magnification={85} className="bg-black/10 dark:bg-white/10 p-2">
                                    <Link to="/contact" aria-label={t('nav.contact')} className="w-full h-full flex items-center justify-center text-current font-medium text-sm">
                                        {t('nav.contact')}
                                    </Link>
                                </DockIcon>
                            </Dock>
                        </nav>
                        <div className="footer-contact-info" style={{ gap: '1.5rem' }}> {/* Increased gap slightly */}
                            <div className="footer-contact-item">
                                <Mail size={16} />
                                <a href="mailto:muhammadqolbi00@gmail.com">muhammadqolbi00@gmail.com</a>
                            </div>
                            <div className="footer-contact-item">
                                <Phone size={16} />
                                <a href="https://wa.me/+6285233142178" target="_blank" rel="noopener noreferrer">+6285233142178</a>
                            </div>
                            <div className="footer-contact-item">
                                <Instagram size={16} />
                                <div className="footer-social-links">
                                    <a href="https://www.instagram.com/biyoosh.i/" target="_blank" rel="noopener noreferrer">@biyoosh.i</a>
                                    <span className="footer-divider">|</span>
                                    <a href="https://www.instagram.com/biyoo.work/" target="_blank" rel="noopener noreferrer">@biyoo.work</a>
                                </div>
                            </div>
                            <div className="footer-contact-item">
                                <Linkedin size={16} />
                                <a href="https://www.linkedin.com/in/muhammad-nurul-qolbi" target="_blank" rel="noopener noreferrer">Muhammad Nurul Qolbi</a>
                            </div>
                            <div className="footer-contact-item">
                                <span className="footer-icon-text">Q</span>
                                <a href="https://id.quora.com/profile/Qolbi-Muhammad" target="_blank" rel="noopener noreferrer">Qolbi Muhammad</a>
                            </div>
                            <div className="footer-contact-item">
                                <span className="footer-icon-text">M</span>
                                <a href="https://qolbimuhammad.medium.com/" target="_blank" rel="noopener noreferrer">Muhammad Nurul Qolbi</a>
                            </div>
                        </div>
                    </div>

                    {/* Right — Map + Address */}
                    <div className="footer-right">
                        <div className="footer-map-card">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.8944!3d-6.3249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed5a3dc1e0e7%3A0x0!2sJl.+Kramat+P.+Syarief+No.32+RT%2FRW+001%2F008+Kelurahan+Lubang+Buaya+Kecamatan+Cipayung+Jakarta+Timur!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                                width="100%"
                                height="220"
                                style={{ border: 0, borderRadius: '16px' }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Maps"
                            ></iframe>
                            <div className="footer-address-text">
                                <p style={{ lineHeight: '1.8', fontSize: '0.9rem' }}>
                                    <span style={{ color: 'var(--accent)', fontWeight: '800', display: 'block', marginBottom: '0.5rem', fontSize: '1rem' }}>
                                        {t('footer.addressTitle')}
                                    </span>
                                    <span style={{ color: 'rgba(255,255,255,0.8)' }}>
                                        {t('footer.address')}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
                    <div className="footer-socials">
                        <a href="https://www.instagram.com/biyoosh.i/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.linkedin.com/in/muhammad-nurul-qolbi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://id.quora.com/profile/Qolbi-Muhammad" target="_blank" rel="noopener noreferrer">Quora</a>
                        <a href="https://qolbimuhammad.medium.com/" target="_blank" rel="noopener noreferrer">Medium</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
