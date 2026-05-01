// Hero Component
function renderHero() {
    const heroHTML = `
    <section class="hero" id="home">
        <div class="hero-content">
            <h1>Welcome to HealthCare Hospital</h1>
            <p>Your health is our priority. We provide the best medical care and treatment services.</p>
            <button class="btn btn-primary" onclick="scrollToSection('contact')">Book Appointment</button>
        </div>
    </section>
    `;

    document.getElementById('hero-container').innerHTML = heroHTML;
}

// Render hero when document is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderHero);
} else {
    renderHero();
}

