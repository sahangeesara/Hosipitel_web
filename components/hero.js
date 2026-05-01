// Hero Component
const HERO_SLIDES = [
    {
        eyebrow: 'MediQueue Hospital',
        title: 'Emergency-ready care when every second matters',
        text: '24/7 specialists, fast triage, and modern treatment rooms designed to keep patients moving safely through care.',
        badge: '24/7 Emergency Support',
        stat: 'Fast response teams available now'
    },
    {
        eyebrow: 'Expert Doctors',
        title: 'Trusted specialists for every stage of treatment',
        text: 'Our multidisciplinary doctors work together to deliver compassionate care, clear guidance, and precise follow-up.',
        badge: 'Specialist Care',
        stat: 'Cardiology • Neurology • Orthopedics'
    },
    {
        eyebrow: 'Modern Facilities',
        title: 'Advanced tools with a patient-first experience',
        text: 'From diagnostics to recovery, MediQueue combines modern technology with calm, comfortable service spaces.',
        badge: 'Modern Diagnostics',
        stat: 'Imaging • Lab • Pharmacy'
    }
];

function renderHero() {
    const heroHTML = `
    <section class="hero" id="home">
        <div class="hero-slider" id="heroSlider" aria-label="Hero slider">
            <div class="hero-track">
                ${HERO_SLIDES.map((slide, index) => `
                    <article class="hero-slide ${index === 0 ? 'active' : ''}" data-slide="${index}">
                        <div class="hero-slide-inner container">
                            <div class="hero-copy">
                                <span class="hero-eyebrow">${slide.eyebrow}</span>
                                <h1>${slide.title}</h1>
                                <p>${slide.text}</p>
                                <div class="hero-actions">
                                    <button class="btn btn-primary" type="button" onclick="openBookingModal()">Book Appointment</button>
                                    <div class="hero-badge">${slide.badge}</div>
                                </div>
                            </div>
                            <div class="hero-highlight">
                                <div class="hero-highlight-card">
                                    <i class="fas fa-hospital-user"></i>
                                    <h3>MediQueue</h3>
                                    <p>${slide.stat}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                `).join('')}
            </div>

            <button class="hero-nav hero-prev" type="button" aria-label="Previous slide" data-hero-prev>
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="hero-nav hero-next" type="button" aria-label="Next slide" data-hero-next>
                <i class="fas fa-chevron-right"></i>
            </button>

            <div class="hero-dots" role="tablist" aria-label="Select hero slide">
                ${HERO_SLIDES.map((_, index) => `
                    <button class="hero-dot ${index === 0 ? 'active' : ''}" type="button" aria-label="Go to slide ${index + 1}" data-hero-dot="${index}"></button>
                `).join('')}
            </div>
        </div>
    </section>
    `;

    document.getElementById('hero-container').innerHTML = heroHTML;
    initHeroSlider();
}

function initHeroSlider() {
    const slider = document.getElementById('heroSlider');
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll('.hero-slide'));
    const dots = Array.from(slider.querySelectorAll('[data-hero-dot]'));
    const prevButton = slider.querySelector('[data-hero-prev]');
    const nextButton = slider.querySelector('[data-hero-next]');

    let currentIndex = 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const updateSlider = (index) => {
        currentIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === currentIndex));
        dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === currentIndex));
    };

    const goNext = () => updateSlider(currentIndex + 1);
    const goPrev = () => updateSlider(currentIndex - 1);

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            updateSlider(Number(dot.dataset.heroDot));
            resetAutoplay();
        });
    });

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            goPrev();
            resetAutoplay();
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            goNext();
            resetAutoplay();
        });
    }

    const resetAutoplay = () => {
        if (window.heroSliderInterval) {
            clearInterval(window.heroSliderInterval);
            window.heroSliderInterval = null;
        }
        if (!prefersReducedMotion) {
            window.heroSliderInterval = setInterval(goNext, 5000);
        }
    };

    slider.addEventListener('mouseenter', () => {
        if (window.heroSliderInterval) {
            clearInterval(window.heroSliderInterval);
            window.heroSliderInterval = null;
        }
    });

    slider.addEventListener('mouseleave', () => {
        if (!prefersReducedMotion && !window.heroSliderInterval) {
            window.heroSliderInterval = setInterval(goNext, 5000);
        }
    });

    updateSlider(0);
    if (!prefersReducedMotion) {
        if (window.heroSliderInterval) clearInterval(window.heroSliderInterval);
        window.heroSliderInterval = setInterval(goNext, 5000);
    }
}

// Render hero when document is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderHero);
} else {
    renderHero();
}
