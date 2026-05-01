// Navbar Component
function renderNavbar() {
    const navbarHTML = `
    <nav class="navbar">
        <div class="container">
            <div class="navbar-wrapper">
                <div class="logo">
                    <i class="fas fa-hospital"></i>
                    <span>HealthCare Hospital</span>
                </div>
                <button class="nav-toggle" id="navToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#home" class="nav-link">Home</a></li>
                    <li><a href="#services" class="nav-link">Services</a></li>
                    <li><a href="#doctors" class="nav-link">Our Doctors</a></li>
                    <li><a href="#departments" class="nav-link">Departments</a></li>
                    <li><a href="#contact" class="nav-link">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    document.getElementById('navbar-container').innerHTML = navbarHTML;

    // Initialize navbar functionality
    initNavbarEvents();
}

function initNavbarEvents() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle) navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            if (navToggle) navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Render navbar when document is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNavbar);
} else {
    renderNavbar();
}

