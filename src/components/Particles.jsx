import { useEffect, useRef } from 'react'
import { useTheme } from './ThemeProvider'

export default function Particles({
    particleCount = 80,
    particleSpread = 10,
    speed = 0.5,
    particleColors,
    moveParticlesOnHover = true,
    particleHoverFactor = 1,
    alphaParticles = false,
    particleBaseSize = 100,
    sizeRandomness = 1,
    cameraDistance = 20,
    disableRotation = false,
    className
}) {
    const canvasRef = useRef(null)
    const { theme } = useTheme()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let animationFrameId
        let particles = []
        let mouse = { x: 0, y: 0 }

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = canvas.parentElement.clientWidth
            canvas.height = canvas.parentElement.clientHeight
        }

        window.addEventListener('resize', resizeCanvas)
        resizeCanvas()

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 2 + 1

                // Clearer colors as requested
                const isDark = theme === 'dark'
                // Dark mode: Cyan/White mix. Light mode: Navy/Blue mix.
                // User asked for "lebih diperjelas lagi"
                const colors = isDark
                    ? ['rgba(0, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.5)', 'rgba(235, 94, 40, 0.4)']
                    : ['rgba(20, 33, 61, 0.4)', 'rgba(235, 94, 40, 0.4)', 'rgba(0, 0, 0, 0.3)']

                this.color = colors[Math.floor(Math.random() * colors.length)]

                this.speedX = Math.random() * speed - speed / 2
                this.speedY = Math.random() * speed - speed / 2
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                // Mouse interaction
                if (moveParticlesOnHover) {
                    const dx = mouse.x - this.x
                    const dy = mouse.y - this.y
                    const distance = Math.sqrt(dx * dx + dy * dy)
                    if (distance < 100) {
                        const forceDirectionX = dx / distance
                        const forceDirectionY = dy / distance
                        const force = (100 - distance) / 100
                        const directionX = forceDirectionX * force * particleHoverFactor
                        const directionY = forceDirectionY * force * particleHoverFactor
                        this.x -= directionX
                        this.y -= directionY
                    }
                }

                // Wrap around screen
                if (this.x > canvas.width) this.x = 0
                if (this.x < 0) this.x = canvas.width
                if (this.y > canvas.height) this.y = 0
                if (this.y < 0) this.y = canvas.height
            }

            draw() {
                ctx.fillStyle = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        // Init particles
        const init = () => {
            particles = []
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle())
            }
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            for (let i = 0; i < particles.length; i++) {
                particles[i].update()
                particles[i].draw()
            }
            animationFrameId = requestAnimationFrame(animate)
        }

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect()
            mouse.x = e.clientX - rect.left
            mouse.y = e.clientY - rect.top
        }

        init()
        animate()
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [theme, particleCount, speed, particleHoverFactor, moveParticlesOnHover])

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0
            }}
        />
    )
}
