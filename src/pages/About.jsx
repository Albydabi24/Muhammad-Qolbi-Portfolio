import { useRef, useEffect } from 'react'
import { User, Briefcase, GraduationCap, Award, MapPin, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import SplitText from '../components/SplitText'
import GlareCard from '../components/GlareCard'
import { experiences, organizationExperiences } from '../data'

const DUMMY_IMG = 'https://upload.wikimedia.org/wikipedia/en/f/f8/Dummy_Title_Card.jpeg'
const EDUCATION_BG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34Rw1Xujje5f4RuQevoYSNf8nI5EH-bgaDg&s'

export default function About() {
    return (
        <>
            <AboutHero />
            <AboutWorkExperience />
            <AboutOrgVolunteer />
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
                        Fresh graduate dari program studi Ilmu Perpustakaan dan Sains Informasi, UIN Maulana Malik Ibrahim Malang.
                        Passionate di bidang digital marketing, SEO, copywriting, dan social media management.
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
    return (
        <section className="about-timeline-section">
            <div className="section-container">
                <div className="about-section-header">
                    <h2 className="about-section-title">Work<br /><span className="text-accent">Experience</span></h2>
                </div>
                <div className="about-timeline">
                    <div className="tl-line"></div>
                    {experiences.map((exp, i) => (
                        <div key={i} className="tl-item">
                            <div className={`tl-dot ${exp.active ? 'active' : ''}`}></div>
                            <div className="tl-content">
                                <span className={`tl-year ${exp.active ? 'active' : ''}`}>{exp.period}</span>
                                <h3 className="tl-role">{exp.title}</h3>
                                {/* Handle both string and array description formats */}
                                {(Array.isArray(exp.desc) ? exp.desc : [exp.desc]).map((paragraph, pi) => (
                                    <p key={pi} className="tl-desc">{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function AboutOrgVolunteer() {
    return (
        <section className="about-timeline-section bg-platinum">
            <div className="section-container">
                <div className="about-section-header">
                    <h2 className="about-section-title">Organization &<br /><span className="text-accent">Volunteer Experience</span></h2>
                </div>
                <div className="about-timeline">
                    <div className="tl-line"></div>
                    {organizationExperiences.map((exp, i) => (
                        <div key={i} className="tl-item">
                            <div className={`tl-dot ${exp.active ? 'active' : ''}`}></div>
                            <div className="tl-content">
                                {/* Handle array descriptions for Org Exp too */}
                                <span className={`tl-year ${exp.active ? 'active' : ''}`} style={{ color: 'var(--accent)' }}>{exp.period}</span>
                                <h3 className="tl-role">{exp.title}</h3>
                                {(Array.isArray(exp.desc) ? exp.desc : [exp.desc]).map((paragraph, pi) => (
                                    <p key={pi} className="tl-desc">{paragraph}</p>
                                ))}
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
    // Generate 15 items with varied sizes for masonry effect
    const achievements = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        title: `Achievement ${i + 1}`,
        size: i % 5 === 0 ? 'hof-wide' : (i % 3 === 0 ? 'hof-tall' : '')
    }))

    return (
        <section className="hall-of-fame">
            <div className="section-container">
                <h2 className="section-title">Hall of Fame</h2>
                <div className="hof-grid">
                    {achievements.map((item) => (
                        <div key={item.id} className={`hof-item ${item.size}`}>
                            <div className="hof-placeholder">
                                <span>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

