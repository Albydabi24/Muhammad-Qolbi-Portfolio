import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function SplitText({
    text,
    className = '',
    delay = 40,
    duration = 0.8,
    ease = 'power3.out',
    tag: Tag = 'h1',
    children
}) {
    const containerRef = useRef(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        if (!containerRef.current || hasAnimated.current) return

        const chars = containerRef.current.querySelectorAll('.split-char')
        if (chars.length === 0) return

        gsap.set(chars, { opacity: 0, y: 40, filter: 'blur(8px)' })

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true
                        gsap.to(chars, {
                            opacity: 1,
                            y: 0,
                            filter: 'blur(0px)',
                            duration,
                            ease,
                            stagger: delay / 1000,
                        })
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.3 }
        )

        observer.observe(containerRef.current)

        return () => observer.disconnect()
    }, [delay, duration, ease])

    // If children are provided, use them directly (for custom JSX like colored spans)
    if (children) {
        return (
            <Tag ref={containerRef} className={`split-parent ${className}`}>
                {children}
            </Tag>
        )
    }

    // Split text into characters
    const words = text.split(' ')
    return (
        <Tag ref={containerRef} className={`split-parent ${className}`}>
            {words.map((word, wi) => (
                <span key={wi} className="split-word" style={{ display: 'inline-block', whiteSpace: 'pre' }}>
                    {word.split('').map((char, ci) => (
                        <span
                            key={ci}
                            className="split-char"
                            style={{ display: 'inline-block', willChange: 'transform, opacity, filter' }}
                        >
                            {char}
                        </span>
                    ))}
                    {wi < words.length - 1 && (
                        <span className="split-char" style={{ display: 'inline-block' }}>&nbsp;</span>
                    )}
                </span>
            ))}
        </Tag>
    )
}
