
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showNotification(type, message) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    addNotificationStyles();
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
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


function initScrollAnimations() {
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

    addAnimationStyle();

    // Observe elements after they are rendered
    setTimeout(() => {
        const animateElements = document.querySelectorAll(
            '.service-card, .doctor-card, .department-card, .stat-item'
        );
        animateElements.forEach(element => {
            observer.observe(element);
        });
    }, 100);
}

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



function initActiveNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            
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

    addActiveLinkStyles();
}

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


function initializeApp() {
    console.log('Initializing Hospital Website Application...');

    // Wait for all components to be rendered
    setTimeout(() => {
        initScrollAnimations();
        initActiveNavigation();
        createBackToTopButton();
        console.log('Hospital Website Initialized Successfully');
    }, 500);
}

// Start application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

