import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import SplitText from '../components/SplitText'
import SpotlightCard from '../components/SpotlightCard'

const DUMMY_IMG = 'https://upload.wikimedia.org/wikipedia/en/f/f8/Dummy_Title_Card.jpeg'

export default function Gallery() {
    return (
        <>
            <GalleryHero />
            <HolalaSection />
            <OpapaSection />
            <CTASection />
        </>
    )
}

/* ───── Gallery Hero ───── */
function GalleryHero() {
    return (
        <header className="gallery-hero">
            <div className="gallery-hero-content container">
                <SplitText tag="h1" className="gallery-title" text="Gallery" />
                <div style={{ marginTop: '1rem' }}>
                    <SplitText
                        tag="p"
                        className="gallery-desc"
                        text="A collection of my creative works and moments."
                        style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}
                    />
                </div>
                <div className="scroll-indicator" style={{ marginTop: '2rem' }}>
                    <SplitText
                        tag="span"
                        text="Scroll to explore"
                        style={{ fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                    />
                    <div className="scroll-line"></div>
                </div>
            </div>
        </header>
    )
}

/* ───── Holala (Grid) ───── */
function HolalaSection() {
    // 12 Items as requested
    const items = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        src: DUMMY_IMG,
        title: `Project ${i + 1}`
    }))

    return (
        <section className="holala-section" id="holala">
            <div className="section-container">
                <h2 className="section-title">Holala</h2>
                <div className="holala-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
                    {items.map((item, index) => (
                        <div key={item.id} className="holala-item fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="holala-img-wrapper">
                                <img src={item.src} alt={item.title} loading="lazy" />
                                <div className="holala-overlay">
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ───── Opapa (Chunked Carousel: 12 items, 3 Slides of 4) ───── */
function OpapaSection() {
    // 12 Items total
    const items = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        title: `Opapa Moment ${i + 1}`,
        src: DUMMY_IMG
    }))

    const itemsPerPage = 4
    const totalPages = Math.ceil(items.length / itemsPerPage) // 3 pages
    const [pageIndex, setPageIndex] = useState(0)

    const handleNext = () => {
        setPageIndex((prev) => (prev + 1) % totalPages)
    }

    const handlePrev = () => {
        setPageIndex((prev) => (prev - 1 + totalPages) % totalPages)
    }

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(handleNext, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="opapa-section" id="opapa">
            <div className="section-container">
                {/* Center Title */}
                <div className="opapa-header" style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative' }}>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>Opapa</h2>
                    {/* Navigation Buttons positioned relative to header or absolute? Keeping them inline for now or below */}
                </div>

                <div className="opapa-carousel-wrapper" style={{ overflow: 'hidden', position: 'relative' }}>
                    <div className="opapa-track" style={{
                        display: 'flex',
                        width: `${totalPages * 100}%`, // 300% width
                        transform: `translateX(-${(pageIndex * (100 / totalPages))}%)`,
                        transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}>
                        {/* Render 3 Pages */}
                        {Array.from({ length: totalPages }).map((_, pageI) => (
                            <div key={pageI} className="opapa-slide-page" style={{
                                width: `${100 / totalPages}%`, // 33.33%
                                display: 'grid',
                                gridTemplateColumns: 'repeat(4, 1fr)',
                                gap: '1.5rem',
                                padding: '0 0.5rem'
                            }}>
                                {/* Render 4 items for this page */}
                                {items.slice(pageI * itemsPerPage, (pageI + 1) * itemsPerPage).map((item) => (
                                    <div key={item.id} className="opapa-item">
                                        <div className="opapa-card">
                                            <img src={item.src} alt={item.title} />
                                            <div className="opapa-info">
                                                <h4>{item.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Controls (Centered below or nice arrows) */}
                <div className="carousel-nav" style={{ justifyContent: 'center', marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                    <button onClick={handlePrev} className="nav-btn"><ChevronLeft /></button>
                    {/* Dots indicator */}
                    <div className="nav-dots" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <div key={i}
                                style={{
                                    width: i === pageIndex ? '24px' : '8px',
                                    height: '8px',
                                    borderRadius: '4px',
                                    background: i === pageIndex ? 'var(--accent)' : 'var(--border-color)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setPageIndex(i)}
                            />
                        ))}
                    </div>
                    <button onClick={handleNext} className="nav-btn"><ChevronRight /></button>
                </div>
            </div>
        </section>
    )
}

function CTASection() {
    return (
        <section className="cta-section">
            <div className="section-container">
                <SpotlightCard className="cta-spotlight" spotlightColor="rgba(235, 94, 40, 0.4)">
                    <div className="cta-box-content">
                        <div className="cta-text">
                            <h2>Let's work together</h2>
                            <p>Siap meningkatkan performa digital marketing bisnismu?</p>
                        </div>
                        <Link to="/contact" className="btn-cta">Contact Me</Link>
                    </div>
                </SpotlightCard>
            </div>
        </section>
    )
}
