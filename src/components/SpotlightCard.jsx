import { useRef, useState } from 'react'
import { useTheme } from './ThemeProvider'

export default function SpotlightCard({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)" }) {
    const divRef = useRef(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)
    const { theme } = useTheme()

    const handleMouseMove = (e) => {
        if (!divRef.current) return
        const rect = divRef.current.getBoundingClientRect()
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        setOpacity(1)
    }

    const handleMouseLeave = () => {
        setOpacity(0)
    }

    // Choose color based on theme if not overridden, or use prop
    // Default React Bits style is white-ish spotlight on dark.
    const finalSpotlightColor = spotlightColor

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`spotlight-card ${className}`}
            style={{
                position: 'relative',
                overflow: 'hidden',
                background: theme === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius-lg)'
            }}
        >
            <div
                style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    inset: 0,
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${finalSpotlightColor}, transparent 40%)`,
                    transition: 'opacity 0.3s',
                }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </div>
        </div>
    )
}
