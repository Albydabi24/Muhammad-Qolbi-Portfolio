import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, User, ArrowRight } from 'lucide-react'
import SplitText from '../components/SplitText'
import Aurora from '../components/Aurora'
import GlareCard from '../components/GlareCard'
import Carousel from '../components/Carousel'
import Particles from '../components/Particles'
import SpotlightCard from '../components/SpotlightCard'
import { skills, experiences, testimonials, blogPosts } from '../data'

const LOGO_IMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0j6z2QgoeLStEHFE2mXZvdx9OPKV7GQt7sA&s'
const ABOUT_IMG = 'https://media.licdn.com/dms/image/v2/C4D12AQEsE-QAj5uG4w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1609780633737?e=2147483647&v=beta&t=W7TkFqqYlintQzikTmFXCJxR0MuUPIS7uMSX8ot5S6M'

// Create enough copies for smooth infinite loop
const logos = Array(12).fill(LOGO_IMG)

/* ═══════════ COMPONENT ═══════════ */
export default function Home() {
    return (
        <>
            <HeroSection />
            <LogoTicker />
            <AboutProblem />
            <SkillsSection />
            <ExperienceSection />
            <TestimonialsSection />
            <BlogSection />
            <CTASection />
        </>
    )
}

/* ───── Hero ───── */
function HeroSection() {
    return (
        <section className="hero" id="hero">
            <Aurora />
            <Particles className="hero-particles" particleCount={100} speed={0.4} />
            <div className="hero-content container">
                <SplitText tag="h1" className="hero-title" text="Hi, I'm Obi" />

                <p className="hero-desc">
                    I am a fresh graduate of the bachelor of library and science information program from{' '}
                    <a href="https://uin-malang.ac.id/" target="_blank" rel="noopener noreferrer" className="hero-uni-link">
                        <strong>Maliki Islamic University</strong>
                    </a>{' '}
                    in Malang with a <span className="text-highlight" style={{ fontSize: '0.9em' }}>GPA of 3.83</span>. I specialized in and developed skills in{' '}
                    <strong className="text-highlight">digital marketing</strong>, particularly in{' '}
                    <strong className="text-highlight">SEO</strong>,{' '}
                    <strong className="text-highlight">copywriting</strong>,{' '}
                    <strong className="text-highlight">content writing</strong>, and{' '}
                    <strong className="text-highlight">social media marketing</strong>.
                </p>

                <Link to="/contact" className="btn-primary hero-btn">Let's Talk More</Link>
            </div>
        </section>
    )
}

/* ───── Logo Ticker ───── */
function LogoTicker() {
    return (
        <section className="logo-ticker">
            <div className="ticker-track">
                {/* Doubled list to ensure seamless infinite scroll with -50% animation */}
                {[...logos, ...logos].map((logoSrc, i) => (
                    <div key={i} className="ticker-item-img">
                        <img src={logoSrc} alt="Client Logo" />
                    </div>
                ))}
            </div>
        </section>
    )
}

/* ───── About / Problem-Solution ───── */
function AboutProblem() {
    return (
        <section className="about-problem" id="about-problem">
            <div className="about-problem-container container">
                <div className="about-problem-image">
                    <GlareCard className="about-glare-card">
                        <img src={ABOUT_IMG} alt="Obi Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                    </GlareCard>
                </div>
                <div className="about-problem-text">
                    <h2 className="about-problem-title">Penjualanmu tidak meningkat?</h2>
                    {/* Fixed Typography Case */}
                    <p className="about-problem-subtitle" style={{ textTransform: 'none' }}>Bisa jadi itu karena :</p>
                    <ul className="about-problem-list">
                        <li><span className="bullet"></span> Deskripsi product yang bertele-tele</li>
                        <li><span className="bullet"></span> CTA yang tidak kuat</li>
                        <li><span className="bullet"></span> Storytelling yang kaku</li>
                        <li><span className="bullet"></span> Tagline yang kurang deskriptif</li>
                    </ul>
                    <blockquote className="about-problem-quote">
                        "Mengenalku lebih jauh mungkin bisa jadi <span style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>solusi yang tepat untukmu</span>"
                    </blockquote>
                </div>
            </div>
        </section>
    )
}

/* ───── Skills ───── */
function SkillsSection() {
    return (
        <section className="section skills-section" id="skills">
            <div className="section-container">
                <h2 className="section-title">Skill Yang Aku Miliki</h2>
                <div className="skills-grid">
                    {skills.map((skill, i) => (
                        <GlareCard key={i}>
                            <div className="skill-icon-circle">
                                <skill.Icon size={24} />
                            </div>
                            <h3 className="skill-name">{skill.name}</h3>
                        </GlareCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ───── Experience (Sticky Left + Timeline Right) ───── */
function ExperienceSection() {
    const sectionRef = useRef(null)

    useEffect(() => {
        if (!sectionRef.current) return

        // Target both dots and timeline content for animation
        const animatedElements = sectionRef.current.querySelectorAll('.timeline-dot, .fade-up-element')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view')
                        // Optional: unobserve if you want it to trigger only once
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
        )

        animatedElements.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="section experience-section" id="experience" ref={sectionRef}>
            <div className="experience-container">
                <div className="experience-header">
                    <h2 className="experience-title">Work</h2>
                    <p className="experience-subtitle">— experience</p>
                    <p className="experience-desc">Aku memiliki berbagai pengalaman di berbagai bidang yang sesuai dengan kebutuhanmu.</p>
                </div>
                <div className="experience-timeline">
                    <div className="timeline-line"></div>
                    {experiences.map((exp, i) => (
                        <div key={i} className="timeline-item fade-up-element">
                            <div className={`timeline-dot ${exp.active ? 'active' : ''}`}></div>
                            <div className="timeline-content">
                                <span className={`timeline-year ${exp.active ? 'active' : ''}`}>{exp.period}</span>
                                <h3 className="timeline-role">{exp.title}</h3>
                                {(Array.isArray(exp.desc) ? exp.desc : [exp.desc]).map((paragraph, pi) => (
                                    <p key={pi} className="timeline-desc">{paragraph}</p>
                                ))}
                                <Carousel slides={3} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ───── Testimonials (3 at a time, Loop 1 by 1) ───── */
function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(true)

    // Create a circular buffer: [Last, First, ... , Last, First]
    // Actually, for 3-up, we need specific clones. 
    // Simplest robust infinite loop: duplicate array N times.
    // Let's do [...testimonials, ...testimonials, ...testimonials] to be safe.
    // Or just [...testimonials, ...testimonials] (10 items). 
    // Showing 3.
    // Index 0 to 4. 
    // If we go to 5 (which is 0's clone), we show it, then reset to 0 without transition.

    const extendedTestimonials = [...testimonials, ...testimonials]
    const totalItems = testimonials.length

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext()
        }, 5000)
        return () => clearInterval(timer)
    }, [currentIndex])

    const handleNext = () => {
        if (currentIndex >= totalItems) return // Prevent rapid clicks messing up reset
        setCurrentIndex(prev => prev + 1)
    }

    const handlePrev = () => {
        if (currentIndex <= 0) return
        setCurrentIndex(prev => prev - 1)
    }

    // Handle seamless reset
    useEffect(() => {
        if (currentIndex === totalItems) {
            // We reached the clone of the first item. 
            // Wait for transition to finish, then snap back to 0.
            const timeout = setTimeout(() => {
                setIsTransitioning(false)
                setCurrentIndex(0)
            }, 500) // Match transition duration
            return () => clearTimeout(timeout)
        }
        if (currentIndex === -1) {
            // Snap to end
            setTimeout(() => {
                setIsTransitioning(false)
                setCurrentIndex(totalItems - 1)
            }, 500)
        }
    }, [currentIndex, totalItems])

    // Re-enable transition after snap
    useEffect(() => {
        if (!isTransitioning) {
            // Force reflow? React handles it usually if we set state in next tick
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsTransitioning(true)
                })
            })
        }
    }, [isTransitioning])

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="section-container">
                <div className="testimonials-header">
                    <h2 className="section-title-light">What they Said About Me</h2>
                    <div className="testimonials-nav">
                        <button className="testi-arrow" onClick={handlePrev} aria-label="Previous">
                            <ChevronLeft size={22} />
                        </button>
                        <button className="testi-arrow" onClick={handleNext} aria-label="Next">
                            <ChevronRight size={22} />
                        </button>
                    </div>
                </div>

                <div className="testimonials-slider-3up" style={{ overflow: 'hidden' }}>
                    <div className="testimonials-track-inner"
                        style={{
                            display: 'flex',
                            width: `${(extendedTestimonials.length / 3) * 100}%`,
                            transform: `translateX(-${(currentIndex * (100 / extendedTestimonials.length))}%)`,
                            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                        }}>
                        {extendedTestimonials.map((t, i) => (
                            <div key={i} className="testi-card-item" style={{ flex: `0 0 ${100 / extendedTestimonials.length}%`, maxWidth: `${100 / extendedTestimonials.length}%`, padding: '0 0.8rem' }}>
                                <div className="testi-card-inner" style={{
                                    height: '100%',
                                    padding: '2.5rem',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div className="testi-avatar" style={{ marginBottom: '1.5rem' }}>
                                        <User size={22} />
                                    </div>
                                    <p className="testi-text" style={{ flex: 1, marginBottom: '1.5rem' }}>{t.text}</p>
                                    <h4 className="testi-name">{t.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ───── Blog ───── */
function BlogSection() {
    return (
        <section className="section blog-section" id="blog">
            <div className="section-container">
                <h2 className="section-title blog-title">BLOG</h2>
                <div className="blog-grid">
                    {blogPosts.map((post, i) => (
                        <article key={i} className="blog-card">
                            <div className="blog-thumbnail">
                                <div className="blog-thumb-lines">
                                    <span></span><span></span><span></span><span></span>
                                </div>
                            </div>
                            <div className="blog-info">
                                <span className="blog-category">{post.category}</span>
                                <h3 className="blog-headline">{post.title}</h3>
                                <p className="blog-excerpt">{post.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ───── CTA ───── */
function CTASection() {
    return (
        <section className="cta-section" id="cta">
            <div className="section-container">
                <SpotlightCard className="cta-spotlight" spotlightColor="rgba(255, 255, 255, 0.15)">
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
