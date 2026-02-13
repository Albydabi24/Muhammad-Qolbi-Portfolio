import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
    const { theme, toggleTheme } = useTheme()
    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { t } = useTranslation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { path: '/', label: t('nav.home') },
        { path: '/about', label: t('nav.about') },
        { path: '/gallery', label: t('nav.gallery') },
        { path: '/contact', label: t('nav.contact') },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">OBI.</Link>

                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {navItems.map(item => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="nav-actions">
                    <LanguageSwitcher />
                    <button className="theme-toggle" onClick={toggleTheme} aria-label={t('nav.aria.toggleTheme')}>
                        {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <Link to="/contact" className="nav-cta">{t('nav.letsTalk')}</Link>
                    <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label={t('nav.aria.menu')}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    )
}
