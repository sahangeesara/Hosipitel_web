// ============================================
// Mobile Navigation Toggle
// ============================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// Smooth Scroll Function
// ============================================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// Form Submission
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Show success message
        showNotification('success', 'Message sent successfully! We will contact you soon.');
        
        // Reset form
        contactForm.reset();
        
        // Log form data (in real application, you would send this to server)
        console.log({
            name: formData.get('name') || contactForm.querySelector('input[type="text"]').value,
            email: formData.get('email') || contactForm.querySelector('input[type="email"]').value,
            phone: formData.get('phone') || contactForm.querySelector('input[type="tel"]').value,
            department: formData.get('department') || contactForm.querySelector('select').value,
            message: formData.get('message') || contactForm.querySelector('textarea').value
        });
    });
}


const newsletterForms = document.querySelectorAll('.newsletter-form');

newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        showNotification('success', `Subscribed with ${email}!`);
        form.reset();
    });
});

// ============================================
// Notification System
// ============================================

function showNotification(type, message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles dynamically
    addNotificationStyles();
    
    // Add to body
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function addNotificationStyles() {
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.innerHTML = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
                padding: 1.5rem;
                min-width: 300px;
                z-index: 10000;
                animation: slideIn 0.3s ease;
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .notification.show {
                opacity: 1;
            }

            .notification-content {
                display: flex;
                align-items: center;
                gap: 1rem;
            }

            .notification-success {
                border-left: 5px solid #4caf50;
            }

            .notification-success i {
                color: #4caf50;
                font-size: 1.5rem;
            }

            .notification-error {
                border-left: 5px solid #f44336;
            }

            .notification-error i {
                color: #f44336;
                font-size: 1.5rem;
            }

            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                }
                to {
                    transform: translateX(0);
                }
            }

            @media (max-width: 576px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    min-width: auto;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ============================================
// Scroll Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation class to elements
const animateElements = document.querySelectorAll(
    '.service-card, .doctor-card, .department-card, .stat-item'
);

animateElements.forEach(element => {
    addAnimationStyle();
    observer.observe(element);
});

function addAnimationStyle() {
    if (!document.getElementById('animation-styles')) {
        const style = document.createElement('style');
        style.id = 'animation-styles';
        style.innerHTML = `
            .service-card, .doctor-card, .department-card, .stat-item {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }

            .service-card.animated, 
            .doctor-card.animated, 
            .department-card.animated, 
            .stat-item.animated {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }
}

// ============================================
// Active Navigation Link Highlighting
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active link styles
function addActiveLinkStyles() {
    if (!document.getElementById('active-link-styles')) {
        const style = document.createElement('style');
        style.id = 'active-link-styles';
        style.innerHTML = `
            .nav-link.active {
                color: var(--primary-color);
            }

            .nav-link.active::after {
                width: 100%;
            }
        `;
        document.head.appendChild(style);
    }
}

addActiveLinkStyles();

// ============================================
// Department Card Click Handlers
// ============================================

const departmentButtons = document.querySelectorAll('.department-card .btn');

departmentButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const departmentName = button.closest('.department-card').querySelector('h3').textContent;
        scrollToSection('contact');
        showNotification('success', `Booking appointment for ${departmentName}`);
    });
});

// ============================================
// Counter Animation for Stats
// ============================================

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

// Observe stat items for counter animation
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

// ============================================
// Service Cards Hover Effect
// ============================================

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, rgba(0, 102, 204, 0.05) 0%, rgba(255, 107, 107, 0.05) 100%)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.background = 'var(--white-color)';
    });
});

// ============================================
// Back to Top Button
// ============================================

function createBackToTopButton() {
    const button = document.createElement('button');
    button.id = 'backToTop';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        font-size: 1.2rem;
        cursor: pointer;
        display: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    `;
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'flex';
            button.style.alignItems = 'center';
            button.style.justifyContent = 'center';
        } else {
            button.style.display = 'none';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#0052a3';
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = 'var(--primary-color)';
        button.style.transform = 'scale(1)';
    });
}

createBackToTopButton();

// ============================================
// Page Load Animation
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// Keyboard Navigation
// ============================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================
// Form Validation
// ============================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]{10,}$/;
    return re.test(phone);
}

// Add form validation on input
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

// ============================================
// Initialize Page
// ============================================

console.log('Hospital Website Initialized Successfully');

