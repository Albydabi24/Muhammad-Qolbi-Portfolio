import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import SplitText from '../components/SplitText'
import SpotlightCard from '../components/SpotlightCard'
import GlareCard from '../components/GlareCard'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'

const DUMMY_IMG = 'https://upload.wikimedia.org/wikipedia/en/f/f8/Dummy_Title_Card.jpeg'

export default function Gallery() {
    return (
        <PageTransition>
            <SEO title="Gallery" />
            <GalleryHero />
            <HolalaSection />
            <OpapaSection />
            <CTASection />
        </PageTransition>
    )
}

/* ───── Gallery Hero ───── */
function GalleryHero() {
    const { t } = useTranslation()

    return (
        <header className="gallery-hero">
            <div className="gallery-hero-content container" style={{ textAlign: 'center' }}>
                <SplitText
                    tag="h1"
                    className="gallery-hero-title"
                    text={t('gallery.title')}
                    delay={40}
                    style={{ fontSize: '3.5rem' }}
                />
                <div style={{ marginTop: '0rem' }}>
                    <SplitText
                        tag="p"
                        className="gallery-hero-subtitle"
                        text={t('gallery.subtitle')}
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
    const { t } = useTranslation()

    // 12 Items as requested with specific titles
    const items = [
        { id: 1, title: "Published Press Release on Java Times" },
        { id: 2, title: "Brief SEO Articles for Buangdisini.com" },
        { id: 3, title: "Published Articles for Buangdisini.com" },
        { id: 4, title: "Awardee Scholarship Story for Candidate College Instagram Post" },
        { id: 5, title: "Carousle Information for Candidate College Instagram Post" },
        { id: 6, title: "Mini Games Content for Candidate College Instagram Post" },
        { id: 7, title: "KOL Schedulde Post for ASIAN KUNGFU GENERATION 30th Anniversary Concert" },
        { id: 8, title: "Full List of Guest Star in Paradicfest Vol.2 Concert" },
        { id: 9, title: "Full Team Commitee of Paradicfest Vol.2 Concert" },
        { id: 10, title: "Marketing Request Portal (MORPEST) for Job on Yours Marketing Team" },
        { id: 11, title: "All-Mark for Job on Yours Marketing Team" },
        { id: 12, title: "Social Media Dashboard (SOSBOARD) for Job on Yours Marketing Team" }
    ].map(item => ({
        ...item,
        src: `/photos/WORK EXPERIENCE/Work-${item.id}.webp`
    }))

    return (
        <section className="holala-section" id="holala">
            <div className="section-container">
                <h2 className="section-title">{t('gallery.workTitle')}</h2>
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
    const { t } = useTranslation()

    // 12 Items total
    const items = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        title: t(`gallery.orgItems.${i + 1}`),
        src: `/photos/ORGANIZATION AND VOLUNTEER/Organization-${i + 1}.webp`
    }))

    return (
        <section className="opapa-section" id="opapa">
            <div className="section-container">
                <h2 className="section-title">{t('gallery.orgTitle')}</h2>
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
                                borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
                                boxShadow: 'var(--shadow-lg)'
                            }}>
                                <img src={item.src} alt={item.title} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} loading="lazy" />
                            </GlareCard>
                            <div className="opapa-info" style={{
                                padding: '1rem',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-color)',
                                borderTop: 'none',
                                borderRadius: '0 0 var(--radius-md) var(--radius-md)'
                            }}>
                                <h4 style={{ margin: 0, fontSize: '1rem' }}>{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function CTASection() {
    const { t } = useTranslation()

    return (
        <section className="cta-section">
            <div className="section-container">
                <SpotlightCard className="cta-spotlight" spotlightColor="rgba(235, 94, 40, 0.4)">
                    <div className="cta-box-content">
                        <div className="cta-text">
                            <h2>{t('cta.title')}</h2>
                            <p>{t('cta.desc')}</p>
                        </div>
                        <Link to="/contact" className="btn-cta">{t('cta.button')}</Link>
                    </div>
                </SpotlightCard>
            </div>
        </section>
    )
}
