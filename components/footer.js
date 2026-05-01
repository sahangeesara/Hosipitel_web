// Footer Component
function renderFooter() {
    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>About Hospital</h3>
                    <p>HealthCare Hospital is a leading medical institution providing comprehensive healthcare services with state-of-the-art facilities.</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#doctors">Doctors</a></li>
                        <li><a href="#departments">Departments</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Newsletter</h3>
                    <form class="newsletter-form">
                        <input type="email" placeholder="Enter your email" required>
                        <button type="submit" class="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 HealthCare Hospital. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;

    document.getElementById('footer-container').innerHTML = footerHTML;

    // Initialize footer events
    initFooterEvents();
}

function initFooterEvents() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');

    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            showNotification('success', `Subscribed with ${email}!`);
            form.reset();
        });
    });
}

// Render footer when document is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
} else {
    renderFooter();
}

