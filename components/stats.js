// Stats Component
function renderStats() {
    const statsHTML = `
    <section class="stats">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-icon">
                        <i class="fas fa-user-md"></i>
                    </div>
                    <div class="stat-content">
                        <h3>150+</h3>
                        <p>Experienced Doctors</p>
                    </div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon">
                        <i class="fas fa-procedures"></i>
                    </div>
                    <div class="stat-content">
                        <h3>50,000+</h3>
                        <p>Patients Treated</p>
                    </div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon">
                        <i class="fas fa-bed"></i>
                    </div>
                    <div class="stat-content">
                        <h3>500+</h3>
                        <p>Hospital Beds</p>
                    </div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon">
                        <i class="fas fa-award"></i>
                    </div>
                    <div class="stat-content">
                        <h3>25+</h3>
                        <p>Years of Excellence</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;

    document.getElementById('stats-container').innerHTML = statsHTML;

    // Initialize stats animation
    initStatsAnimation();
}

function initStatsAnimation() {
    function animateCounter(element, target, duration = 2000) {
        let current = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    const statItems = document.querySelectorAll('.stat-content h3');
    let statsAnimated = false;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                statItems.forEach(item => {
                    const text = item.textContent;
                    const number = parseInt(text.replace(/\D/g, ''));
                    if (!isNaN(number)) {
                        animateCounter(item, number);
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

// Render stats when document is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderStats);
} else {
    renderStats();
}

