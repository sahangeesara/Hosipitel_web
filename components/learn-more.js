// Learn More Component - Modal Details
function renderLearnMore() {
    const modalHTML = `
    <div id="learnMoreModal" class="modal" style="display: none;">
        <div class="modal-content">
                <span class="modal-close" id="learnMoreModalClose">&times;</span>
            <div id="modalBody"></div>
        </div>
    </div>
    `;

    if (!document.getElementById('learnMoreModal')) {
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        initLearnMoreModal();
    }
    initLearnMoreButtons();
}

function initLearnMoreModal() {
    const modal = document.getElementById('learnMoreModal');
    const closeBtn = document.getElementById('learnMoreModalClose');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display !== 'none') {
            modal.style.display = 'none';
        }
    });
}

function initLearnMoreButtons() {
    setTimeout(() => {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card) => {
            if (!card.dataset.listenerAdded) {
                const title = card.querySelector('h3').textContent;
                card.style.cursor = 'pointer';
                card.addEventListener('click', () => {
                    showServiceDetails(title);
                });
                card.dataset.listenerAdded = 'true';
            }
        });

        const deptButtons = document.querySelectorAll('.department-card .btn-secondary');
        deptButtons.forEach((btn) => {
            if (!btn.dataset.listenerAdded) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const title = btn.closest('.department-card').querySelector('h3').textContent;
                    showDepartmentDetails(title);
                });
                btn.dataset.listenerAdded = 'true';
            }
        });
    }, 100);
}

const serviceDetails = {
    'Cardiology': {
        description: 'Advanced Heart and Cardiovascular Care',
        fullDescription: 'Our Cardiology department provides comprehensive care for heart and cardiovascular diseases with state-of-the-art technology.',
        features: ['ECG and Echocardiography', 'Cardiac catheterization', 'Angiography', 'Pacemaker implantation', 'Heart failure management'],
        doctors: ['Dr. James Wilson (Cardiologist, 15+ years)'],
        availability: 'Monday - Saturday, 9 AM - 6 PM'
    },
    'Neurology': {
        description: 'Expert Brain and Nervous System Care',
        fullDescription: 'Specialized neurology care with advanced diagnostic capabilities and expert neurologists.',
        features: ['EEG and EMG testing', 'MRI brain imaging', 'Stroke management', 'Epilepsy treatment', 'Headache management'],
        doctors: ['Dr. Sarah Ahmed (Neurologist, 12+ years)'],
        availability: 'Monday - Friday, 9 AM - 5 PM'
    },
    'Pulmonology': {
        description: 'Comprehensive Respiratory Care',
        fullDescription: 'Advanced respiratory care and treatment with modern facilities for all lung disorders.',
        features: ['Pulmonary function tests', 'Chest imaging', 'Bronchoscopy', 'Asthma management', 'Sleep apnea testing'],
        doctors: ['Senior Pulmonologist on staff'],
        availability: 'Monday - Saturday, 9 AM - 6 PM'
    },
    'Orthopedics': {
        description: 'Bone and Joint Specialist Care',
        fullDescription: 'Specialized bone and joint treatment with expert surgeons using minimally invasive techniques.',
        features: ['Joint replacement surgery', 'Arthroscopic surgery', 'Sports medicine', 'Fracture treatment', 'Spine surgery'],
        doctors: ['Dr. Michael Chen (Orthopedic Surgeon, 18+ years)'],
        availability: 'Monday - Saturday, 9 AM - 6 PM'
    },
    'Ophthalmology': {
        description: 'Complete Eye Care Services',
        fullDescription: 'Complete eye care services including diagnosis, treatment, and surgical services.',
        features: ['Vision testing', 'Cataract surgery', 'Glaucoma treatment', 'Retinal surgery', 'Laser eye surgery'],
        doctors: ['Senior Eye Specialist on staff'],
        availability: 'Monday - Saturday, 9 AM - 6 PM'
    },
    'Dentistry': {
        description: 'Comprehensive Dental Care',
        fullDescription: 'Professional dental care including preventive, restorative, and cosmetic services.',
        features: ['Checkups and cleaning', 'Root canal treatment', 'Teeth whitening', 'Cosmetic dentistry', 'Orthodontics'],
        doctors: ['Senior Dentist on staff'],
        availability: 'Monday - Saturday, 9 AM - 6 PM'
    }
};

const departmentDetails = {
    'Cardiology': {
        fullDescription: 'State-of-the-art cardiac care with ECG, Echocardiography, and full cardiac surgery capabilities.',
        services: ['Diagnostic catheterization', 'Coronary intervention', 'Bypass surgery', 'Heart valve replacement', 'Arrhythmia management'],
        equipment: ['Advanced ECG machines', 'Echocardiography systems', 'Cardiac catheterization lab', 'Surgical suite'],
        specialists: 'Dr. James Wilson and team'
    },
    'Neurology': {
        fullDescription: 'Advanced neuro-diagnostic and surgical services with expert team of neurologists.',
        services: ['Neurological diagnostics', 'Stroke emergency care', 'Brain tumor management', 'Seizure disorder treatment', 'Neurorehabilitation'],
        equipment: ['High-field MRI', 'CT scanner', 'EEG/EMG lab', 'Operating theaters'],
        specialists: 'Dr. Sarah Ahmed and team'
    },
    'Emergency': {
        fullDescription: '24/7 emergency services with fully equipped trauma center, emergency physicians, and ambulance facility.',
        services: ['Trauma care', 'Acute medical emergencies', 'Surgical emergencies', 'Intensive care', 'Emergency imaging'],
        equipment: ['Trauma center', 'ICU beds', 'Imaging suite', 'Emergency operating theater'],
        specialists: 'Emergency Medicine Team'
    },
    'Pediatrics': {
        fullDescription: 'Specialized childcare with neonatal intensive care unit and comprehensive pediatric services.',
        services: ['Newborn screening', 'Neonatal intensive care', 'Pediatric surgery', 'Child development assessment', 'Immunization programs'],
        equipment: ['NICU', 'Pediatric ICU', 'Child-friendly facilities', 'Specialized equipment'],
        specialists: 'Pediatric specialists'
    },
    'Laboratory': {
        fullDescription: 'Comprehensive diagnostic lab services with latest technology and quick turnaround results.',
        services: ['Blood tests', 'Pathology services', 'Genetic testing', 'Molecular diagnostics', 'Microbiology testing'],
        equipment: ['Automated analyzers', 'Gene sequencers', 'Microscopy systems', 'HPLC machines'],
        specialists: 'Laboratory specialists'
    },
    'Radiology': {
        fullDescription: 'Advanced imaging services including CT, MRI, X-ray, ultrasound, and fluoroscopy facilities.',
        services: ['X-ray imaging', 'CT scanning', 'MRI imaging', 'Ultrasound', 'Interventional radiology'],
        equipment: ['64-slice CT scanner', '3T MRI', 'Digital X-ray', 'Ultrasound machines', 'Fluoroscopy suite'],
        specialists: 'Radiology team'
    }
};

function showServiceDetails(title) {
    const details = serviceDetails[title];
    if (!details) return;

    const features = details.features.map(f => `<li>✓ ${f}</li>`).join('');
    const doctors = details.doctors.map(d => `<li>${d}</li>`).join('');

    const content = `
        <div class="modal-header">
            <h2>${title}</h2>
            <p class="modal-subtitle">${details.description}</p>
        </div>
        <div class="modal-body">
            <p class="modal-description">${details.fullDescription}</p>
            <div class="modal-section">
                <h3>Key Features</h3>
                <ul class="features-list">${features}</ul>
            </div>
            <div class="modal-section">
                <h3>Expert Doctors</h3>
                <ul class="doctors-list">${doctors}</ul>
            </div>
            <div class="modal-section">
                <h3>Availability</h3>
                <p>${details.availability}</p>
            </div>
            <div class="modal-section">
                <button class="btn btn-primary" onclick="document.getElementById('learnMoreModal').style.display='none'; openBookingModal();">Book Appointment</button>
            </div>
        </div>
    `;

    document.getElementById('modalBody').innerHTML = content;
    document.getElementById('learnMoreModal').style.display = 'block';
}

function showDepartmentDetails(title) {
    const details = departmentDetails[title];
    if (!details) return;

    const services = details.services.map(s => `<li>✓ ${s}</li>`).join('');
    const equipment = details.equipment.map(e => `<li>• ${e}</li>`).join('');

    const content = `
        <div class="modal-header">
            <h2>${title} Department</h2>
        </div>
        <div class="modal-body">
            <p class="modal-description">${details.fullDescription}</p>
            <div class="modal-section">
                <h3>Services Offered</h3>
                <ul class="features-list">${services}</ul>
            </div>
            <div class="modal-section">
                <h3>Advanced Equipment</h3>
                <ul class="equipment-list">${equipment}</ul>
            </div>
            <div class="modal-section">
                <h3>Specialists</h3>
                <p>${details.specialists}</p>
            </div>
            <div class="modal-section">
                <button class="btn btn-primary" onclick="document.getElementById('learnMoreModal').style.display='none'; openBookingModal();">Book Appointment</button>
            </div>
        </div>
    `;

    document.getElementById('modalBody').innerHTML = content;
    document.getElementById('learnMoreModal').style.display = 'block';
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderLearnMore);
} else {
    renderLearnMore();
}
