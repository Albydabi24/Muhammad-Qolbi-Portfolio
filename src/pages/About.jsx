import { useRef, useEffect } from 'react'
import { User, Briefcase, GraduationCap, Award, MapPin, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import SplitText from '../components/SplitText'
import GlareCard from '../components/GlareCard'
import Carousel from '../components/Carousel'
import { experiences, organizationExperiences, freelanceExperiences } from '../data'

const DUMMY_IMG = 'https://upload.wikimedia.org/wikipedia/en/f/f8/Dummy_Title_Card.jpeg'
const EDUCATION_BG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34Rw1Xujje5f4RuQevoYSNf8nI5EH-bgaDg&s'

export default function About() {
    return (
        <>
            <AboutHero />
            <AboutWorkExperience />
            <AboutOrgVolunteer />
            <AboutFreelance />
            <AboutEducation />
            <HallOfFame />
        </>
    )
}

function AboutHero() {
    return (
        <header className="about-hero">
            <div className="about-hero-container">
                <div className="about-hero-text fade-in-left">
                    <h1 className="about-hero-title">
                        Hello,<br />
                        <span className="text-accent">I am Obi</span>
                    </h1>
                    <p className="about-hero-desc">
                        I am a graduate of the Bachelor of Library and Information Science program from Maulana Malik Ibrahim State Islamic University in Malang with a GPA of 3.83. During my studies, I specialized in and developed skills in digital marketing, particularly in SEO, copywriting, and social media marketing.
                    </p>
                    <div className="about-hero-tags">
                        <span className="tag">Digital Marketing</span>
                        <span className="tag">SEO</span>
                        <span className="tag">Copywriting</span>
                        <span className="tag">Content Writing</span>
                    </div>
                </div>
                <div className="about-hero-avatar fade-in-right">
                    <GlareCard className="avatar-glare-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-card)' }}>
                        <div className="avatar-placeholder" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <User className="avatar-icon" size={64} style={{ color: 'var(--accent)' }} />
                        </div>
                    </GlareCard>
                </div>
            </div>
        </header>
    )
}

function AboutWorkExperience() {
    const sectionRef = useRef(null)

    useEffect(() => {
        if (!sectionRef.current) return
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        )
        const elements = sectionRef.current.querySelectorAll('.fade-up-element, .timeline-dot')
        elements.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="about-timeline-section" ref={sectionRef}>
            <div className="section-container">
                <div className="about-section-header">
                    <h2 className="about-section-title">Work<br /><span className="text-accent">Experience</span></h2>
                </div>
                <div className="experience-timeline">
                    <div className="timeline-line"></div>
                    {experiences.map((exp, i) => (
                        <div key={i} className="timeline-item fade-up-element">
                            <div className={`timeline-dot ${exp.active ? 'active' : ''}`}></div>
                            <div className="timeline-content">
                                <span className={`timeline-year ${exp.active ? 'active' : ''}`}>{exp.period}</span>
                                <h3 className="timeline-role">{exp.title}</h3>
                                <div className="experience-grid">
                                    <div className="timeline-text">
                                        {(Array.isArray(exp.desc) ? exp.desc : [exp.desc]).map((paragraph, pi) => (
                                            <p key={pi} className="timeline-desc" style={{ marginBottom: '0.8rem' }}>{paragraph}</p>
                                        ))}
                                    </div>
                                    <div className="timeline-carousel">
                                        <Carousel slides={7} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function AboutOrgVolunteer() {
    const sectionRef = useRef(null)

    useEffect(() => {
        if (!sectionRef.current) return
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        )
        const elements = sectionRef.current.querySelectorAll('.fade-up-element, .timeline-dot')
        elements.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="about-timeline-section bg-platinum" ref={sectionRef}>
            <div className="section-container">
                <div className="about-section-header">
                    <h2 className="about-section-title">Organization &<br /><span className="text-accent">Volunteer Experience</span></h2>
                </div>
                <div className="experience-timeline">
                    <div className="timeline-line"></div>
                    {organizationExperiences.map((exp, i) => (
                        <div key={i} className="timeline-item fade-up-element">
                            <div className={`timeline-dot ${exp.active ? 'active' : ''}`}></div>
                            <div className="timeline-content">
                                <span className={`timeline-year ${exp.active ? 'active' : ''}`} style={{ color: 'var(--accent)' }}>{exp.period}</span>
                                <h3 className="timeline-role">{exp.title}</h3>
                                <div className="experience-grid">
                                    <div className="timeline-text">
                                        {(Array.isArray(exp.desc) ? exp.desc : [exp.desc]).map((paragraph, pi) => (
                                            <p key={pi} className="timeline-desc" style={{ marginBottom: '0.8rem' }}>{paragraph}</p>
                                        ))}
                                    </div>
                                    <div className="timeline-carousel">
                                        <Carousel slides={7} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function AboutFreelance() {
    const sectionRef = useRef(null)

    useEffect(() => {
        if (!sectionRef.current) return
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        )
        const elements = sectionRef.current.querySelectorAll('.fade-up-element, .timeline-dot')
        elements.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="about-timeline-section" ref={sectionRef}>
            <div className="section-container">
                <div className="about-section-header">
                    <h2 className="about-section-title">Freelance &<br /><span className="text-accent">Project Experience</span></h2>
                </div>
                <div className="experience-timeline">
                    <div className="timeline-line"></div>
                    {freelanceExperiences.map((exp, i) => (
                        <div key={i} className="timeline-item fade-up-element">
                            <div className={`timeline-dot ${exp.active ? 'active' : ''}`}></div>
                            <div className="timeline-content">
                                <span className={`timeline-year ${exp.active ? 'active' : ''}`}>{exp.period}</span>
                                <h3 className="timeline-role">{exp.title}</h3>
                                <div className="experience-grid">
                                    <div className="timeline-text">
                                        {(Array.isArray(exp.desc) ? exp.desc : [exp.desc]).map((paragraph, pi) => (
                                            <p key={pi} className="timeline-desc" style={{ marginBottom: '0.8rem' }}>{paragraph}</p>
                                        ))}
                                    </div>
                                    <div className="timeline-carousel">
                                        <Carousel slides={7} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function AboutEducation() {
    return (
        <section className="education-section" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${EDUCATION_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            <div className="section-container">
                <div className="education-card">
                    <div className="education-badge">
                        <GraduationCap size={32} />
                    </div>
                    <p className="education-label">Studied at</p>
                    <h2 className="education-title">UIN Maulana Malik Ibrahim<br />Malang</h2>
                    <div className="education-stats">
                        <div className="edu-stat">
                            <span className="edu-stat-label">Program</span>
                            <span className="edu-stat-value">Ilmu Perpustakaan & Sains Informasi</span>
                        </div>
                        <div className="edu-stat">
                            <span className="edu-stat-label">IPK</span>
                            <span className="edu-stat-value">3.83</span>
                        </div>
                        <div className="edu-stat">
                            <span className="edu-stat-label">Tahun</span>
                            <span className="edu-stat-value">2021 — 2025</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function HallOfFame() {
    // 16:9 Landscape items (4 rows * 3 cols = 12 items)
    const landscapeItems = Array.from({ length: 12 }, (_, i) => ({
        id: `L-${i}`,
        title: `Achievement ${i + 1}`,
        size: 'hof-wide' // 16:9
    }))

    // 4:5 Portrait items (2 rows * 3 cols = 6 items) or (2 rows * 4 cols = 8?)
    // Assuming 3-column grid usually.
    const portraitItems = Array.from({ length: 6 }, (_, i) => ({
        id: `P-${i}`,
        title: `Portrait ${i + 1}`,
        size: 'hof-tall' // 4:5
    }))

    return (
        <section className="hall-of-fame">
            <div className="section-container">
                <h2 className="section-title">Hall of Fame</h2>

                {/* Landscape Grid - 2 Cols */}
                <div className="hof-grid-section" style={{ marginBottom: '2rem' }}>
                    <div className="hof-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                        {landscapeItems.map((item) => (
                            <div key={item.id} className={`hof-item ${item.size}`}>
                                <div className="hof-placeholder">
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Portrait Grid */}
                <div className="hof-grid-section">
                    <div className="hof-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        {portraitItems.map((item) => (
                            <div key={item.id} className={`hof-item ${item.size}`}>
                                <div className="hof-placeholder">
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
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


