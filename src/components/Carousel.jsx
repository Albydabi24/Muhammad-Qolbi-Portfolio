import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const DUMMY_IMG = 'https://upload.wikimedia.org/wikipedia/en/f/f8/Dummy_Title_Card.jpeg'

export default function Carousel({ slides = 3, images, className }) {
    const actualImages = images && images.length > 0 ? images : Array(slides).fill(DUMMY_IMG)
    const totalSlides = actualImages.length

    // We start at index 1 because index 0 is the clone of the last slide
    const [currentIndex, setCurrentIndex] = useState(1)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [transitionEnabled, setTransitionEnabled] = useState(true)

    // Create extended slides: [Last, 1, 2, ..., N, First]
    const extendedSlides = [
        actualImages[totalSlides - 1],
        ...actualImages,
        actualImages[0]
    ]

    const next = () => {
        if (isTransitioning) return
        setIsTransitioning(true)
        setTransitionEnabled(true)
        setCurrentIndex(prev => prev + 1)
    }

    const prev = () => {
        if (isTransitioning) return
        setIsTransitioning(true)
        setTransitionEnabled(true)
        setCurrentIndex(prev => prev - 1)
    }

    const handleTransitionEnd = () => {
        setIsTransitioning(false)

        if (currentIndex === 0) {
            // Jump to real last slide
            setTransitionEnabled(false)
            setCurrentIndex(totalSlides)
        } else if (currentIndex === totalSlides + 1) {
            // Jump to real first slide
            setTransitionEnabled(false)
            setCurrentIndex(1)
        }
    }

    // Helper to get active dot index (0-based relative to real slides)
    const getActiveDotIndex = () => {
        if (currentIndex === 0) return totalSlides - 1
        if (currentIndex === totalSlides + 1) return 0
        return currentIndex - 1
    }

    return (
        <div className={`carousel-container ${className || ''}`} style={{ '--slides': slides }}>
            <div className="carousel-viewport">
                <div
                    className="carousel-track"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none'
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {extendedSlides.map((img, i) => (
                        <div key={i} className="carousel-slide">
                            <img
                                src={img}
                                alt={`Slide ${i}`}
                                className="carousel-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="carousel-controls">
                <button className="carousel-btn carousel-prev" onClick={prev} aria-label="Previous">
                    <ChevronLeft size={16} />
                </button>
                <div className="carousel-dots">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <button
                            key={i}
                            className={`carousel-dot ${i === getActiveDotIndex() ? 'active' : ''}`}
                            onClick={() => {
                                setTransitionEnabled(true)
                                setCurrentIndex(i + 1)
                            }}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
                <button className="carousel-btn carousel-next" onClick={next} aria-label="Next">
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    )
}
