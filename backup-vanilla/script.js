/* ═══════════════════════════════════════════════════════
   OBI Portfolio — Enhanced JavaScript
   Features: Blur Text, Glare Hover, Dark Mode, Carousels,
   Testimonials Slider, Timeline Animations
   ═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ───────────────────────────────────────────────
       1. Lucide Icons
    ─────────────────────────────────────────────── */
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    /* ───────────────────────────────────────────────
       2. Dark Mode / Light Mode Toggle
    ─────────────────────────────────────────────── */
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Restore saved theme
    const savedTheme = localStorage.getItem('obi-theme') || 'light';
    html.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', next);
            localStorage.setItem('obi-theme', next);

            // Re-init lucide icons after theme change (icon swap)
            if (typeof lucide !== 'undefined') {
                setTimeout(() => lucide.createIcons(), 50);
            }
        });
    }

    /* ───────────────────────────────────────────────
       3. Navbar Scroll Shadow
    ─────────────────────────────────────────────── */
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.style.boxShadow = window.scrollY > 10
                ? '0 4px 30px rgba(0,0,0,0.08)'
                : 'none';
        }, { passive: true });
    }

    /* ───────────────────────────────────────────────
       4. Active Nav Link Detection (Multi-page)
    ─────────────────────────────────────────────── */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    /* ───────────────────────────────────────────────
       5. Mobile Hamburger Menu
    ─────────────────────────────────────────────── */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }

    /* ───────────────────────────────────────────────
       6. Scroll Animations — IntersectionObserver
    ─────────────────────────────────────────────── */
    const animatedEls = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    if (animatedEls.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
        animatedEls.forEach(el => observer.observe(el));
    }

    /* ───────────────────────────────────────────────
       7. Blur Text Animation (Hero)
    ─────────────────────────────────────────────── */
    const blurWords = document.querySelectorAll('.blur-word');
    if (blurWords.length > 0) {
        const blurObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const words = entry.target.querySelectorAll('.blur-word');
                    words.forEach((word, i) => {
                        setTimeout(() => {
                            word.classList.add('revealed');
                        }, i * 250);
                    });
                    blurObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        const blurContainer = document.querySelector('[data-blur-text]');
        if (blurContainer) {
            blurObserver.observe(blurContainer);
        }
    }

    /* ───────────────────────────────────────────────
       8. Glare Hover Effect (Skill Cards)
    ─────────────────────────────────────────────── */
    const glareCards = document.querySelectorAll('.glare-card');
    glareCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            card.style.setProperty('--glare-x', x + '%');
            card.style.setProperty('--glare-y', y + '%');

            // 3D tilt
            const tiltX = ((y - 50) / 50) * -8;
            const tiltY = ((x - 50) / 50) * 8;
            card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });

    /* ───────────────────────────────────────────────
       9. Timeline Dot Animations
    ─────────────────────────────────────────────── */
    const timelineDots = document.querySelectorAll('.animate-dot');
    if (timelineDots.length > 0) {
        const dotObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    dotObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        timelineDots.forEach(dot => dotObserver.observe(dot));
    }

    /* ───────────────────────────────────────────────
       10. Timeline Image Carousels
    ─────────────────────────────────────────────── */
    const carousels = document.querySelectorAll('[data-carousel]');
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const dotsContainer = carousel.querySelector('.carousel-dots');

        if (!track || slides.length === 0) return;

        let currentIndex = 0;

        // Create dots
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Slide ${i + 1}`);
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });

        function goToSlide(index) {
            currentIndex = index;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots();
        }

        function updateDots() {
            const dots = dotsContainer.querySelectorAll('.carousel-dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                goToSlide(currentIndex);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % slides.length;
                goToSlide(currentIndex);
            });
        }
    });

    /* ───────────────────────────────────────────────
       11. Testimonials Slider
    ─────────────────────────────────────────────── */
    const testiTrack = document.getElementById('testiTrack');
    const testiPrev = document.getElementById('testiPrev');
    const testiNext = document.getElementById('testiNext');
    const testiDotsContainer = document.getElementById('testiDots');

    if (testiTrack && testiPrev && testiNext) {
        let testiIndex = 0;
        const testiCards = testiTrack.querySelectorAll('.testi-card');
        const totalTesti = testiCards.length;

        function getVisibleTesti() {
            const w = window.innerWidth;
            if (w >= 1024) return 3;
            if (w >= 768) return 2;
            return 1;
        }

        // Create dots
        function createTestiDots() {
            if (!testiDotsContainer) return;
            testiDotsContainer.innerHTML = '';
            const visible = getVisibleTesti();
            const maxIndex = Math.max(0, totalTesti - visible);
            for (let i = 0; i <= maxIndex; i++) {
                const dot = document.createElement('button');
                dot.className = 'testi-dot' + (i === 0 ? ' active' : '');
                dot.addEventListener('click', () => {
                    testiIndex = i;
                    updateTestiSlider();
                });
                testiDotsContainer.appendChild(dot);
            }
        }

        function updateTestiSlider() {
            const visible = getVisibleTesti();
            const maxIndex = Math.max(0, totalTesti - visible);
            testiIndex = Math.min(testiIndex, maxIndex);
            const percent = (testiIndex / totalTesti) * 100;
            testiTrack.style.transform = `translateX(-${percent}%)`;

            // Update dots
            const dots = testiDotsContainer?.querySelectorAll('.testi-dot');
            if (dots) {
                dots.forEach((dot, i) => dot.classList.toggle('active', i === testiIndex));
            }
        }

        testiPrev.addEventListener('click', () => {
            testiIndex = Math.max(0, testiIndex - 1);
            updateTestiSlider();
        });

        testiNext.addEventListener('click', () => {
            const visible = getVisibleTesti();
            const maxIndex = Math.max(0, totalTesti - visible);
            testiIndex = Math.min(maxIndex, testiIndex + 1);
            updateTestiSlider();
        });

        // Auto-advance
        let testiAutoplay = setInterval(() => {
            const visible = getVisibleTesti();
            const maxIndex = Math.max(0, totalTesti - visible);
            testiIndex = testiIndex >= maxIndex ? 0 : testiIndex + 1;
            updateTestiSlider();
        }, 5000);

        // Pause on hover
        testiTrack.addEventListener('mouseenter', () => clearInterval(testiAutoplay));
        testiTrack.addEventListener('mouseleave', () => {
            testiAutoplay = setInterval(() => {
                const visible = getVisibleTesti();
                const maxIndex = Math.max(0, totalTesti - visible);
                testiIndex = testiIndex >= maxIndex ? 0 : testiIndex + 1;
                updateTestiSlider();
            }, 5000);
        });

        createTestiDots();

        // Recalculate on resize
        window.addEventListener('resize', () => {
            createTestiDots();
            updateTestiSlider();
        });
    }

    /* ───────────────────────────────────────────────
       12. Slide Buttons (Experience Header — legacy)
    ─────────────────────────────────────────────── */
    document.querySelectorAll('.slide-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.closest('.experience-header-slides') || btn.closest('.timeline-slides');
            if (parent) {
                parent.querySelectorAll('.slide-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });
    });

    /* ───────────────────────────────────────────────
       13. Gallery — Custom Cursor Effect
    ─────────────────────────────────────────────── */
    const galleryImage = document.getElementById('galleryImage');
    const galleryCursor = document.getElementById('galleryCursor');
    if (galleryImage && galleryCursor) {
        galleryImage.addEventListener('mousemove', (e) => {
            const rect = galleryImage.getBoundingClientRect();
            galleryCursor.style.left = (e.clientX - rect.left) + 'px';
            galleryCursor.style.top = (e.clientY - rect.top) + 'px';
            galleryCursor.style.opacity = '1';
        });
        galleryImage.addEventListener('mouseleave', () => {
            galleryCursor.style.opacity = '0';
        });
    }

    /* ───────────────────────────────────────────────
       14. Gallery — OPAPA Carousel
    ─────────────────────────────────────────────── */
    const opapaTrack = document.getElementById('opapaTrack');
    const opopaPrev = document.getElementById('opopaPrev');
    const opopaNext = document.getElementById('opopaNext');
    if (opapaTrack && opopaPrev && opopaNext) {
        const slides = opapaTrack.querySelectorAll('.opapa-slide');
        let opapaIndex = 0;

        function getVisibleSlides() {
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 768) return 2;
            return 1;
        }

        function updateOpapaCarousel() {
            const visible = getVisibleSlides();
            const slideWidth = 100 / visible;
            opapaTrack.style.transform = `translateX(-${opapaIndex * slideWidth}%)`;
        }

        opopaPrev.addEventListener('click', () => {
            opapaIndex = Math.max(0, opapaIndex - 1);
            updateOpapaCarousel();
        });
        opopaNext.addEventListener('click', () => {
            const visible = getVisibleSlides();
            const maxIndex = Math.max(0, slides.length - visible);
            opapaIndex = Math.min(maxIndex, opapaIndex + 1);
            updateOpapaCarousel();
        });
    }

    /* ───────────────────────────────────────────────
       15. Contact Form Validation
    ─────────────────────────────────────────────── */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill all required fields.');
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email.');
                return;
            }

            alert('Thank you! Your message has been sent.');
            contactForm.reset();
        });
    }

    /* ───────────────────────────────────────────────
       16. Smooth Scroll for anchor links
    ─────────────────────────────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
