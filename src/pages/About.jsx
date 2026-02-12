import { useRef, useEffect } from 'react'
import { User, Briefcase, GraduationCap, Award, MapPin, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import SplitText from '../components/SplitText'
import GlareCard from '../components/GlareCard'
import Carousel from '../components/Carousel'
import { experiences, organizationExperiences, freelanceExperiences } from '../data'
import { useTranslation, Trans } from 'react-i18next'
import SpotlightCard from '../components/SpotlightCard'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'

const DUMMY_IMG = 'https://upload.wikimedia.org/wikipedia/en/f/f8/Dummy_Title_Card.jpeg'
const EDUCATION_BG = '/photos/uin-malang.webp'

export default function About() {
    return (
        <PageTransition>
            <SEO title="About" />
            <AboutHero />
            <AboutWorkExperience />
            <AboutOrgVolunteer />
            <AboutFreelance />
            <AboutEducation />
            <HallOfFame />
        </PageTransition>
    )
}

function AboutHero() {
    const { t } = useTranslation()

    return (
        <header className="about-hero">
            <div className="about-hero-container">
                <div className="about-hero-text fade-in-left">
                    <h1 className="about-hero-title">
                        <Trans i18nKey="hero.greetingFull" components={[<span className="text-accent" />]} />
                    </h1>
                    <p className="about-hero-desc">
                        {t('hero.descriptionAbout')}
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
                        <div className="avatar-placeholder" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            <img src="/photos/Foto Kerja-1.webp" alt="Obi Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </GlareCard>
                </div>
            </div>
        </header>
    )
}

function AboutWorkExperience() {
    const sectionRef = useRef(null)
    const { t } = useTranslation()

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
                    <h2 className="about-section-title">
                        <Trans i18nKey="experience.titleWork" components={[<span className="text-accent" />]} />
                    </h2>
                </div>
                <div className="experience-timeline">
                    <div className="timeline-line"></div>
                    {experiences.map((exp, i) => {
                        const job = t(`experiences.jobs.${exp.id}`, { returnObjects: true })
                        return (
                            <div key={i} className="timeline-item fade-up-element">
                                <div className={`timeline-dot ${exp.active ? 'active' : ''}`}></div>
                                <div className="timeline-content">
                                    <span className={`timeline-year ${exp.active ? 'active' : ''}`}>{job.period}</span>
                                    <h3 className="timeline-role">{job.title}</h3>
                                    <div className="experience-grid">
                                        <div className="timeline-text">
                                            {(Array.isArray(job.desc) ? job.desc : [job.desc]).map((paragraph, pi) => (
                                                <p key={pi} className="timeline-desc" style={{ marginBottom: '0.8rem' }} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                                            ))}
                                        </div>
                                        <div className="timeline-carousel">
                                            <Carousel
                                                slides={7}
                                                images={exp.images}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

function AboutOrgVolunteer() {
    const sectionRef = useRef(null)
    const { t } = useTranslation()

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
                    <h2 className="about-section-title">
                        <Trans i18nKey="experience.titleOrg" components={[<span className="text-accent" />]} />
                    </h2>
                </div>
                <div className="experience-timeline">
                    <div className="timeline-line"></div>
                    {organizationExperiences.map((exp, i) => {
                        const org = t(`experiences.orgs.${exp.id}`, { returnObjects: true })
                        return (
                            <div key={i} className="timeline-item fade-up-element">
                                <div className={`timeline-dot ${exp.active ? 'active' : ''}`}></div>
                                <div className="timeline-content">
                                    <span className={`timeline-year ${exp.active ? 'active' : ''}`} style={{ color: 'var(--accent)' }}>{org.period}</span>
                                    <h3 className="timeline-role">{org.title}</h3>
                                    <div className="experience-grid">
                                        <div className="timeline-text">
                                            {(Array.isArray(org.desc) ? org.desc : [org.desc]).map((paragraph, pi) => (
                                                <p key={pi} className="timeline-desc" style={{ marginBottom: '0.8rem' }} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                                            ))}
                                        </div>
                                        <div className="timeline-carousel">
                                            <Carousel slides={7} images={exp.images} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

function AboutFreelance() {
    const sectionRef = useRef(null)
    const { t } = useTranslation()

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
                    <h2 className="about-section-title">
                        <Trans i18nKey="experience.titleFreelance" components={[<span className="text-accent" />]} />
                    </h2>
                </div>
                <div className="experience-timeline">
                    <div className="timeline-line"></div>
                    {freelanceExperiences.map((exp, i) => {
                        const freelance = t(`experiences.freelance.${exp.id}`, { returnObjects: true })
                        return (
                            <div key={i} className="timeline-item fade-up-element">
                                <div className={`timeline-dot ${exp.active ? 'active' : ''}`}></div>
                                <div className="timeline-content">
                                    <span className={`timeline-year ${exp.active ? 'active' : ''}`}>{freelance.period}</span>
                                    <h3 className="timeline-role">{freelance.title}</h3>
                                    <div className="experience-grid">
                                        <div className="timeline-text">
                                            {(Array.isArray(freelance.desc) ? freelance.desc : [freelance.desc]).map((paragraph, pi) => (
                                                <p key={pi} className="timeline-desc" style={{ marginBottom: '0.8rem' }} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                                            ))}
                                        </div>
                                        <div className="timeline-carousel">
                                            <Carousel slides={7} images={exp.images} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

function AboutEducation() {
    const { t } = useTranslation()

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
                    <p className="education-label">{t('education.label')}</p>
                    <h2 className="education-title">UIN Maulana Malik Ibrahim<br />Malang</h2>
                    <div className="education-stats">
                        <div className="edu-stat">
                            <span className="edu-stat-label">{t('education.program')}</span>
                            <span className="edu-stat-value">{t('education.programValue')}</span>
                        </div>
                        <div className="edu-stat">
                            <span className="edu-stat-label">{t('education.gpa')}</span>
                            <span className="edu-stat-value">3.83</span>
                        </div>
                        <div className="edu-stat">
                            <span className="edu-stat-label">{t('education.year')}</span>
                            <span className="edu-stat-value">2021 — 2025</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function HallOfFame() {
    const { t } = useTranslation()

    return (
        <section className="hall-of-fame">
            <div className="section-container">
                <h2 className="section-title">{t('hallOfFame.title')}</h2>

                {/* Landscape Grid - 2 Cols */}
                <div className="hof-grid-section" style={{ marginBottom: '2rem' }}>
                    <div className="hof-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={`L-${i}`} className="hof-item hof-wide" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                <img
                                    src={`/photos/HALL OF FAME/Landscape-${i + 1}.webp`}
                                    alt={`Hall of Fame Landscape ${i + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        borderRadius: 'var(--radius-md)',
                                        filter: 'none',
                                        opacity: 1,
                                        transition: 'transfor 0.3s ease'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Portrait Grid */}
                <div className="hof-grid-section">
                    <div className="hof-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        {/* Potrait-2.webp is missing from list, so we map carefully or just try 1..6 and see if browser handles missing gracefully or we skip 2? 
                            The list was: 1, 3, 4, 5, 6. Total 5. 
                            Let's use the 5 available images. 
                        */}
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <div key={`P-${num}`} className="hof-item hof-tall" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                <img
                                    src={`/photos/HALL OF FAME/Potrait-${num}.webp`}
                                    alt={`Hall of Fame Portrait ${num}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        borderRadius: 'var(--radius-md)',
                                        filter: 'none',
                                        opacity: 1,
                                        transition: 'transform 0.3s ease'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
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



