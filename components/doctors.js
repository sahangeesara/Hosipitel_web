// Doctors Component
function renderDoctors() {
    const doctorsData = [
        {
            name: 'Dr. James Wilson',
            specialty: 'Cardiologist',
            experience: '15+ years experience'
        },
        {
            name: 'Dr. Sarah Ahmed',
            specialty: 'Neurologist',
            experience: '12+ years experience'
        },
        {
            name: 'Dr. Michael Chen',
            specialty: 'Orthopedic Surgeon',
            experience: '18+ years experience'
        },
        {
            name: 'Dr. Emily Rodriguez',
            specialty: 'General Physician',
            experience: '10+ years experience'
        }
    ];

    const doctorsHTML = `
    <section class="doctors" id="doctors">
        <div class="container">
            <h2 class="section-title">Our Expert Doctors</h2>
            <div class="doctors-grid">
                ${doctorsData.map(doctor => `
                    <div class="doctor-card">
                        <div class="doctor-image">
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <h3>${doctor.name}</h3>
                        <p class="specialty">${doctor.specialty}</p>
                        <p class="experience">${doctor.experience}</p>
                        <div class="doctor-social">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;

    document.getElementById('doctors-container').innerHTML = doctorsHTML;
}

// Render doctors when document is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderDoctors);
} else {
    renderDoctors();
}

