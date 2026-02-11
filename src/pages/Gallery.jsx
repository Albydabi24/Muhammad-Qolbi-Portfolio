import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import SplitText from '../components/SplitText'
import SpotlightCard from '../components/SpotlightCard'
import GlareCard from '../components/GlareCard'

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
            <div className="gallery-hero-content container" style={{ textAlign: 'center' }}>
                <SplitText
                    tag="h1"
                    className="gallery-hero-title"
                    text="Gallery"
                    delay={40}
                    style={{ fontSize: '3.5rem' }}
                />
                <div style={{ marginTop: '0.5rem' }}>
                    <SplitText
                        tag="p"
                        className="gallery-hero-subtitle"
                        text="A collection of my creative works and moments. Scroll to explore"
                        style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 500 }}
                        delay={20}
                    />
                </div>
                <div className="scroll-indicator" style={{ marginTop: '1rem' }}>
                    <div className="scroll-line" style={{ margin: '0 auto' }}></div>
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
                <h2 className="section-title">My Work Experiences Galleries</h2>
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

/* ───── Opapa (Grid - same as Holala) ───── */
function OpapaSection() {
    // 12 Items total
    const items = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        title: `Organization & Volunteer Moment ${i + 1}`,
        src: DUMMY_IMG
    }))

    return (
        <section className="opapa-section" id="opapa">
            <div className="section-container">
                <h2 className="section-title">My Organization & Volunteer Experiences Galleries</h2>
                <div className="opapa-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '2rem',
                    marginTop: '2rem'
                }}>
                    {items.map((item, index) => (
                        <div key={item.id} className="opapa-item fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <GlareCard className="opapa-card" style={{
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: 'var(--shadow-lg)'
                            }}>
                                <img src={item.src} alt={item.title} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} loading="lazy" />
                                <div className="opapa-info" style={{
                                    padding: '1rem',
                                    background: 'var(--bg-card)',
                                    borderTop: '1px solid var(--border-color)',
                                    borderRadius: '0 0 var(--radius-md) var(--radius-md)'
                                }}>
                                    <h4 style={{ margin: 0, fontSize: '1rem' }}>{item.title}</h4>
                                </div>
                            </GlareCard>
                        </div>
                    ))}
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
                            <p>Ready to boost your business's digital marketing performance?</p>
                        </div>
                        <Link to="/contact" className="btn-cta">Contact Me</Link>
                    </div>
                </SpotlightCard>
            </div>
        </section>
    )
}
