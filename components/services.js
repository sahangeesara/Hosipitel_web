// Services Component
function renderServices() {
    const servicesData = [
        {
            icon: 'fa-heart',
            title: 'Cardiology',
            description: 'Advanced heart care and treatment with latest technologies and experienced cardiologists.'
        },
        {
            icon: 'fa-brain',
            title: 'Neurology',
            description: 'Expert neurological care for brain and nervous system disorders with modern facilities.'
        },
        {
            icon: 'fa-lungs',
            title: 'Pulmonology',
            description: 'Comprehensive respiratory care and treatment with state-of-the-art equipment.'
        },
        {
            icon: 'fa-bone',
            title: 'Orthopedics',
            description: 'Specialized bone and joint treatment services with expert surgeons.'
        },
        {
            icon: 'fa-eye',
            title: 'Ophthalmology',
            description: 'Complete eye care services including surgery and vision correction.'
        },
        {
            icon: 'fa-tooth',
            title: 'Dentistry',
            description: 'Comprehensive dental care and cosmetic dentistry services.'
        }
    ];

    const servicesHTML = `
    <section class="services" id="services">
        <div class="container">
            <h2 class="section-title">Our Services</h2>
            <div class="services-grid">
                ${servicesData.map(service => `
                    <div class="service-card">
                        <div class="service-icon">
                            <i class="fas ${service.icon}"></i>
                        </div>
                        <h3>${service.title}</h3>
                        <p>${service.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;

    document.getElementById('services-container').innerHTML = servicesHTML;

    // Initialize service card animations
    initServiceCardEvents();
}

function initServiceCardEvents() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, rgba(0, 102, 204, 0.05) 0%, rgba(255, 107, 107, 0.05) 100%)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'var(--white-color)';
        });
    });
}

// Render services when document is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderServices);
} else {
    renderServices();
}

