import { useRef } from 'react'

export default function GlareCard({ children, className = '' }) {
    const cardRef = useRef(null)

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100

        cardRef.current.style.setProperty('--glare-x', x + '%')
        cardRef.current.style.setProperty('--glare-y', y + '%')

        const tiltX = ((y - 50) / 50) * -8
        const tiltY = ((x - 50) / 50) * 8
        cardRef.current.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`
    }

    const handleMouseLeave = () => {
        cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
    }

    return (
        <div
            ref={cardRef}
            className={`skill-card glare-card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="glare-overlay"></div>
            {children}
        </div>
    )
}
