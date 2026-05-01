// ============================================
// HERO COMPONENT — MediQueue
// ============================================

const HERO_SLIDES = [
    {
        eyebrow: 'MediQueue Hospital',
        title: 'Emergency-ready care when every second matters',
        image: 'assets/images/1.png',
        text: '24/7 specialists, fast triage, and modern treatment rooms designed to keep patients moving safely through care.',
        badge: '24/7 Emergency Support',
        stat: 'Fast response teams available now'
    },
    {
        eyebrow: 'Expert Doctors',
        title: 'Trusted specialists for every stage of treatment',
        image: 'assets/images/2.png',
        text: 'Our multidisciplinary doctors work together to deliver compassionate care, clear guidance, and precise follow-up.',
        badge: 'Specialist Care',
        stat: 'Cardiology • Neurology • Orthopedics'
    },
    {
        eyebrow: 'Modern Facilities',
        title: 'Advanced tools with a patient-first experience',
        image: 'assets/images/3.png',
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
                                <img src="${slide.image}" alt="${slide.eyebrow}" style="width:100%;max-width:460px;height:240px;object-fit:cover;border-radius:12px;display:block;margin:0 0 1.5rem 0;">
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
                    <button
                        class="hero-dot ${index === 0 ? 'active' : ''}"
                        type="button"
                        role="tab"
                        aria-label="Go to slide ${index + 1}"
                        data-hero-dot="${index}"
                    ></button>
                `).join('')}
            </div>
        </div>
    </section>
    `;

    document.getElementById('hero-container').innerHTML = heroHTML;

    // KEY FIX: your CSS uses position:absolute on slides — the track & slider
    // have no natural height unless we sync it from the tallest slide.
    syncSliderHeight();
    window.addEventListener('resize', syncSliderHeight);

    initHeroSlider();
}

// Temporarily show all slides to measure the tallest one, then set
// that height on .hero-slider and .hero-track so absolute children
// don't collapse the container to 0px.
function syncSliderHeight() {
    const slider = document.getElementById('heroSlider');
    if (!slider) return;

    const track  = slider.querySelector('.hero-track');
    const slides = Array.from(slider.querySelectorAll('.hero-slide'));

    // Remove height constraints so we can measure
    slider.style.height = '';
    track.style.height  = '';
    slides.forEach(s => { s.style.position = 'relative'; s.style.opacity = '1'; });

    // Measure tallest slide
    let maxH = 0;
    slides.forEach(s => { maxH = Math.max(maxH, s.offsetHeight); });

    // Restore absolute positioning now that we have the height
    slides.forEach(s => { s.style.position = ''; s.style.opacity = ''; });

    // Apply explicit height to both containers
    const finalH = Math.max(maxH, 550) + 'px';
    slider.style.height = finalH;
    track.style.height  = finalH;
}

function initHeroSlider() {
    const slider  = document.getElementById('heroSlider');
    if (!slider) return;

    const slides  = Array.from(slider.querySelectorAll('.hero-slide'));
    const dots    = Array.from(slider.querySelectorAll('[data-hero-dot]'));
    const prevBtn = slider.querySelector('[data-hero-prev]');
    const nextBtn = slider.querySelector('[data-hero-next]');

    let currentIndex = 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const updateSlider = (index) => {
        currentIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => slide.classList.toggle('active', i === currentIndex));
        dots.forEach((dot,   i) => dot.classList.toggle('active',   i === currentIndex));
    };

    const goNext = () => updateSlider(currentIndex + 1);
    const goPrev = () => updateSlider(currentIndex - 1);

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            updateSlider(Number(dot.dataset.heroDot));
            resetAutoplay();
        });
    });

    if (prevBtn) prevBtn.addEventListener('click', () => { goPrev(); resetAutoplay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goNext(); resetAutoplay(); });

    const startAutoplay = () => {
        if (!prefersReducedMotion && !window.heroSliderInterval) {
            window.heroSliderInterval = setInterval(goNext, 5000);
        }
    };

    const stopAutoplay = () => {
        if (window.heroSliderInterval) {
            clearInterval(window.heroSliderInterval);
            window.heroSliderInterval = null;
        }
    };

    const resetAutoplay = () => { stopAutoplay(); startAutoplay(); };

    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);

    // Touch / swipe support
    let touchStartX = 0;
    slider.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });
    slider.addEventListener('touchend', e => {
        const delta = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 50) {
            delta > 0 ? goNext() : goPrev();
            resetAutoplay();
        }
    }, { passive: true });

    updateSlider(0);
    startAutoplay();
}

// Render hero when document is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderHero);
} else {
    renderHero();
}