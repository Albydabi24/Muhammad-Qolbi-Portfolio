import { useRef, useEffect } from 'react'
import { User, Briefcase, GraduationCap, Award, MapPin, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import SplitText from '../components/SplitText'
import GlareCard from '../components/GlareCard'
import Carousel from '../components/Carousel'
import { experiences, organizationExperiences, freelanceExperiences, hallOfProof } from '../data'
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
            <HallOfProof />
            <FullPortfolioSection />
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
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <SplitText
                        tag="h2"
                        className="section-title"
                        text={t('hallOfFame.title')}
                        style={{ marginBottom: '0rem', fontSize: '3.5rem' }}
                        delay={40}
                    />
                    <div style={{ marginTop: '0rem' }}>
                        <SplitText
                            tag="p"
                            text={t('hallOfFame.desc')}
                            style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '1rem' }}
                            delay={20}
                        />
                    </div>
                    <div className="scroll-indicator" style={{ marginTop: '1rem' }}>
                        <div className="scroll-line" style={{ margin: '0 auto' }}></div>
                    </div>
                </div>

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
                                        transition: 'transform 0.3s ease'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Portrait Grid */}
                <div className="hof-grid-section">
                    <div className="hof-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
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

function HallOfProof() {
    const { t } = useTranslation()

    return (
        <section className="hall-of-proof" style={{ marginTop: '5rem', paddingBottom: '5rem' }}>
            <div className="section-container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <SplitText
                        tag="h2"
                        className="section-title"
                        text={t('hallOfProof.title')}
                        style={{ marginBottom: '0rem', fontSize: '3.5rem' }}
                        delay={40}
                    />
                    <div style={{ marginTop: '0rem' }}>
                        <SplitText
                            tag="p"
                            text={t('hallOfProof.desc')}
                            style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '1rem' }}
                            delay={20}
                        />
                    </div>
                    <div className="scroll-indicator" style={{ marginTop: '1rem' }}>
                        <div className="scroll-line" style={{ margin: '0 auto' }}></div>
                    </div>
                </div>

                <div className="hop-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)', // 4 items per row
                    gap: '2.5rem',
                    marginTop: '2rem'
                }}>
                    {hallOfProof.map((item, index) => (
                        <div key={item.id} className="hop-item fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="hop-card-inner" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-color)',
                                borderRadius: 'var(--radius-md)',
                                overflow: 'hidden',
                                transition: 'var(--transition)',
                                boxShadow: 'var(--shadow-md)'
                            }}>
                                <div className="hop-img-wrapper" style={{ flexShrink: 0 }}>
                                    <GlareCard className="hop-glare-card" style={{ width: '100%', height: '100%', borderRadius: '0' }}>
                                        <img src={item.src} alt={item.title} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} loading="lazy" />
                                    </GlareCard>
                                </div>
                                <div className="hop-info" style={{
                                    padding: '1.25rem',
                                    flexGrow: 1,
                                    display: 'flex',
                                    alignItems: 'flex-start'
                                }}>
                                    <h4 style={{ margin: 0, fontSize: '1rem', lineHeight: '1.5', fontWeight: 600 }}>{item.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function FullPortfolioSection() {
    const { t } = useTranslation()

    return (
        <section className="full-portfolio-section" style={{ paddingBottom: '5rem' }}>
            <div className="section-container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div className="scroll-indicator" style={{ marginBottom: '2rem' }}>
                        <div className="scroll-line" style={{ margin: '0 auto' }}></div>
                    </div>
                    <SplitText
                        tag="h2"
                        className="section-title"
                        text={t('fullPortfolio.title')}
                        style={{ fontSize: '2.5rem', marginBottom: '2rem' }}
                        delay={40}
                    />
                </div>

                <div className="full-portfolio-card-wrapper" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <a
                        href="https://www.canva.com/design/DAGxvWaxGqU/Q8ZIohJtNHus6PaYpm_Ggg/view?utm_content=DAGxvWaxGqU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha48507c05f"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-channel"
                        style={{ width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', padding: '1.5rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                    >
                        <div className="channel-icon" style={{ marginRight: '1.5rem', color: 'var(--accent)' }}>
                            <Briefcase size={32} />
                        </div>
                        <div className="channel-detail" style={{ display: 'flex', flexDirection: 'column' }}>
                            <span className="channel-label" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{t('fullPortfolio.label')}</span>
                            <span className="channel-value" style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)' }}>{t('fullPortfolio.linkText')}</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
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



