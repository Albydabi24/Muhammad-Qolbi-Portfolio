import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function Navbar() {
    const { theme, toggleTheme } = useTheme()
    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)

    const navItems = [
        { path: '/', label: 'HOME' },
        { path: '/about', label: 'ABOUT' },
        { path: '/gallery', label: 'GALLERY' },
        { path: '/contact', label: 'CONTACT' },
    ]

    return (
        <nav className="navbar" id="navbar">
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
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <Link to="/contact" className="nav-cta">HIRE ME</Link>
                    <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    )
}
