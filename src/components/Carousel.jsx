import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const DUMMY_IMG = 'https://upload.wikimedia.org/wikipedia/en/f/f8/Dummy_Title_Card.jpeg'

export default function Carousel({ slides = 3, images }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const totalSlides = images ? images.length : slides

    const goTo = (i) => setCurrentIndex(i)
    const prev = () => setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)
    const next = () => setCurrentIndex((currentIndex + 1) % totalSlides)

    return (
        <div className="timeline-carousel">
            <div className="carousel-viewport">
                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <div key={i} className="carousel-slide">
                            <img
                                src={images ? images[i] : DUMMY_IMG}
                                alt={`Slide ${i + 1}`}
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
                            className={`carousel-dot ${i === currentIndex ? 'active' : ''}`}
                            onClick={() => goTo(i)}
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
