// Contact Component
function renderContact() {
    const contactHTML = `
    <section class="contact" id="contact">
        <div class="container">
            <h2 class="section-title">Contact Us</h2>
            <div class="contact-wrapper">
                <div class="contact-info">
                    <div class="info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <h3>Address</h3>
                            <p>123 Medical Street, Health City, HC 12345</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-phone"></i>
                        <div>
                            <h3>Phone</h3>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h3>Email</h3>
                            <p>info@healthcarehospital.com</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-clock"></i>
                        <div>
                            <h3>Working Hours</h3>
                            <p>24/7 Emergency Services</p>
                            <p>OPD: 9 AM - 6 PM (Mon-Sat)</p>
                        </div>
                    </div>
                </div>
                <form class="contact-form" id="contactForm">
                    <div class="form-group">
                        <input type="text" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <input type="tel" placeholder="Your Phone" required>
                    </div>
                    <div class="form-group">
                        <select required>
                            <option value="">Select Department</option>
                            <option value="cardiology">Cardiology</option>
                            <option value="neurology">Neurology</option>
                            <option value="orthopedics">Orthopedics</option>
                            <option value="general">General Physician</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    </section>
    `;

    document.getElementById('contact-container').innerHTML = contactHTML;

    // Initialize contact form events
    initContactFormEvents();
}

function initContactFormEvents() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            showNotification('success', 'Message sent successfully! We will contact you soon.');
            contactForm.reset();
            
            console.log('Contact form submitted');
        });

        // Add form validation
        const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

        formInputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.type === 'email' && input.value && !validateEmail(input.value)) {
                    input.style.borderColor = '#f44336';
                    input.title = 'Please enter a valid email address';
                } else if (input.type === 'tel' && input.value && !validatePhone(input.value)) {
                    input.style.borderColor = '#ff9800';
                    input.title = 'Please enter a valid phone number';
                } else {
                    input.style.borderColor = 'var(--border-color)';
                    input.title = '';
                }
            });
            
            input.addEventListener('input', () => {
                if (input.value.trim()) {
                    input.style.borderColor = 'var(--border-color)';
                }
            });
        });
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]{10,}$/;
    return re.test(phone);
}

// Render contact when document is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderContact);
} else {
    renderContact();
}

