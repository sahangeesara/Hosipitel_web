// Booking Component - Appointment Booking Modal
function renderBooking() {
    const modalHTML = `
    <div id="bookingModal" class="modal" style="display: none;">
        <div class="modal-content booking-modal-content">
            <span class="modal-close" id="bookingModalClose">&times;</span>
            <div class="modal-header booking-modal-header">
                <h2>Book Your Appointment</h2>
                <p class="modal-subtitle">Schedule a convenient time to meet with our expert doctors</p>
            </div>
            <div class="modal-body booking-modal-body">
                <form class="booking-form" id="bookingForm">
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="patientName">Full Name *</label>
                            <input type="text" id="patientName" placeholder="Enter your full name" required>
                        </div>
                        <div class="form-group">
                            <label for="patientEmail">Email Address *</label>
                            <input type="email" id="patientEmail" placeholder="your.email@example.com" required>
                        </div>
                    </div>

                    <div class="form-grid">
                        <div class="form-group">
                            <label for="patientPhone">Phone Number *</label>
                            <input type="tel" id="patientPhone" placeholder="+1 (555) 123-4567" required>
                        </div>
                        <div class="form-group">
                            <label for="patientAge">Age *</label>
                            <input type="number" id="patientAge" placeholder="Age" min="1" max="150" required>
                        </div>
                    </div>

                    <div class="form-grid">
                        <div class="form-group">
                            <label for="selectDoctor">Select Doctor *</label>
                            <select id="selectDoctor" required>
                                <option value="">Choose a doctor</option>
                                <option value="dr-james-wilson">Dr. James Wilson - Cardiologist</option>
                                <option value="dr-sarah-ahmed">Dr. Sarah Ahmed - Neurologist</option>
                                <option value="dr-michael-chen">Dr. Michael Chen - Orthopedic Surgeon</option>
                                <option value="dr-emily-rodriguez">Dr. Emily Rodriguez - General Physician</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="selectDepartment">Department *</label>
                            <select id="selectDepartment" required>
                                <option value="">Choose a department</option>
                                <option value="cardiology">Cardiology</option>
                                <option value="neurology">Neurology</option>
                                <option value="orthopedics">Orthopedics</option>
                                <option value="general">General Physician</option>
                                <option value="emergency">Emergency</option>
                                <option value="pediatrics">Pediatrics</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-grid">
                        <div class="form-group">
                            <label for="appointmentDate">Preferred Date *</label>
                            <input type="date" id="appointmentDate" required>
                        </div>
                        <div class="form-group">
                            <label for="appointmentTime">Preferred Time *</label>
                            <input type="time" id="appointmentTime" required>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="visitReason">Reason for Visit *</label>
                        <textarea id="visitReason" rows="4" placeholder="Please describe your health concern or reason for visit..." required></textarea>
                    </div>

                    <div class="form-group">
                        <label for="medicalHistory">Medical History (Optional)</label>
                        <textarea id="medicalHistory" rows="3" placeholder="Any previous medical conditions, allergies, or medications..."></textarea>
                    </div>

                    <div class="form-group checkbox">
                        <input type="checkbox" id="agreeTerms" required>
                        <label for="agreeTerms">I agree to the terms and conditions *</label>
                    </div>

                    <button type="submit" class="btn btn-primary btn-large">Book Appointment</button>
                    <p class="booking-info">We will confirm your appointment via email and phone within 24 hours</p>
                </form>
            </div>
        </div>
    </div>
    `;

    if (!document.getElementById('bookingModal')) {
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        initBookingModal();
        initBookingForm();
    }
}

function initBookingModal() {
    const modal = document.getElementById('bookingModal');
    const closeBtn = document.getElementById('bookingModalClose');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeBookingModal);
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBookingModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display !== 'none') {
            closeBookingModal();
        }
    });
}

function openBookingModal() {
    if (!document.getElementById('bookingModal')) {
        renderBooking();
    }

    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
    }
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}

function initBookingForm() {
    const form = document.getElementById('bookingForm');
    const appointmentDate = document.getElementById('appointmentDate');

    if (form && appointmentDate) {
        appointmentDate.min = new Date().toISOString().split('T')[0];

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = {
                name: document.getElementById('patientName').value,
                email: document.getElementById('patientEmail').value,
                phone: document.getElementById('patientPhone').value,
                age: document.getElementById('patientAge').value,
                doctor: document.getElementById('selectDoctor').value,
                department: document.getElementById('selectDepartment').value,
                date: document.getElementById('appointmentDate').value,
                time: document.getElementById('appointmentTime').value,
                reason: document.getElementById('visitReason').value,
                medicalHistory: document.getElementById('medicalHistory').value
            };

            if (!formData.name || !formData.email || !formData.phone) {
                showNotification('error', 'Please fill in all required fields');
                return;
            }

            showNotification('success', 'Appointment booked successfully! Check your email for confirmation.');
            console.log('Booking Details:', formData);
            form.reset();
            closeBookingModal();
        });

        const emailInput = document.getElementById('patientEmail');
        const phoneInput = document.getElementById('patientPhone');

        emailInput.addEventListener('blur', () => {
            emailInput.style.borderColor = emailInput.value && !validateEmail(emailInput.value) ? '#f44336' : 'var(--border-color)';
        });

        phoneInput.addEventListener('blur', () => {
            phoneInput.style.borderColor = phoneInput.value && !validatePhone(phoneInput.value) ? '#f44336' : 'var(--border-color)';
        });
    }
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
    return /^[\d\s\-()+]{10,}$/.test(phone);
}

window.openBookingModal = openBookingModal;
window.closeBookingModal = closeBookingModal;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderBooking);
} else {
    renderBooking();
}
