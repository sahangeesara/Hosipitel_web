import DoctorService from "../services/DoctorService.js";
async function renderDoctors() {

    const service = new DoctorService();

    let doctorsData = [];

    try {
        doctorsData = await service.getAllDoctors();
        console.log(doctorsData);
    } catch (error) {
        console.error("Failed to load doctors:", error);
        doctorsData = [];
    }

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

                        <h3>${doctor.name || "No Name"}</h3>

                        <p class="specialty">
                            ${doctor.department || "No Department"}
                        </p>

                        <p class="experience">
                            Age: ${doctor.age ?? "-"} | Phone: ${doctor.phone ?? "-"}
                        </p>

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

// init
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderDoctors);
} else {
    renderDoctors();
}
