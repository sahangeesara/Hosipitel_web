// Departments Component
function renderDepartments() {
    const departmentsData = [
        {
            icon: 'fa-heart',
            title: 'Cardiology',
            description: 'State-of-the-art cardiac care with ECG, Echocardiography, and cardiac surgery facilities.'
        },
        {
            icon: 'fa-brain',
            title: 'Neurology',
            description: 'Advanced neuro-diagnostic and surgical services with expert team of neurologists.'
        },
        {
            icon: 'fa-stethoscope',
            title: 'Emergency',
            description: '24/7 emergency services with fully equipped trauma center and ambulance facility.'
        },
        {
            icon: 'fa-baby',
            title: 'Pediatrics',
            description: 'Specialized childcare with neonatal intensive care unit and pediatric surgery.'
        },
        {
            icon: 'fa-flask',
            title: 'Laboratory',
            description: 'Comprehensive diagnostic lab services with latest technology and quick results.'
        },
        {
            icon: 'fa-x-ray',
            title: 'Radiology',
            description: 'Advanced imaging services including CT, MRI, X-ray, and ultrasound facilities.'
        }
    ];

    const departmentsHTML = `
    <section class="departments" id="departments">
        <div class="container">
            <h2 class="section-title">Our Departments</h2>
            <div class="departments-grid">
                ${departmentsData.map(dept => `
                    <div class="department-card">
                        <div class="dept-header">
                            <i class="fas ${dept.icon}"></i>
                            <h3>${dept.title}</h3>
                        </div>
                        <p>${dept.description}</p>
                        <button class="btn btn-secondary">Learn More</button>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;

    document.getElementById('departments-container').innerHTML = departmentsHTML;
}

// Render departments when document is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderDepartments);
} else {
    renderDepartments();
}
