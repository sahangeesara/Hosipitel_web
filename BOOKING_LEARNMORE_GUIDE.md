# Booking & Learn More Features Guide

## 📅 Booking System

### Overview
A complete appointment booking form that allows users to schedule appointments with doctors at the hospital.

### Location
- **File**: `components/booking.js`
- **Section ID**: `#booking`
- **Container**: `<div id="booking-container"></div>` in index.html
- **Position**: Between Departments and Contact sections

### Features

#### Form Fields
1. **Patient Name** (Required)
   - Text input
   - Validation: Non-empty

2. **Email Address** (Required)
   - Email input
   - Validation: Valid email format (regex)

3. **Phone Number** (Required)
   - Telephone input
   - Validation: 10+ digits with allowed special characters

4. **Age** (Required)
   - Number input
   - Range: 1-150

5. **Select Doctor** (Required)
   - Dropdown menu
   - Options: All 4 doctors from the hospital
   - Dr. James Wilson - Cardiologist
   - Dr. Sarah Ahmed - Neurologist
   - Dr. Michael Chen - Orthopedic Surgeon
   - Dr. Emily Rodriguez - General Physician

6. **Department** (Required)
   - Dropdown menu
   - Options: All 6 hospital departments
   - Cardiology, Neurology, Orthopedics, General, Emergency, Pediatrics

7. **Preferred Date** (Required)
   - Date picker
   - Automatically set to today minimum
   - Future dates only

8. **Preferred Time** (Required)
   - Time picker
   - 24-hour format

9. **Reason for Visit** (Required)
   - Textarea (4 rows)
   - Medical description

10. **Medical History** (Optional)
    - Textarea (3 rows)
    - Previous conditions, allergies, medications

11. **Terms Agreement** (Required)
    - Checkbox
    - Must be checked to submit

### Functionality

#### Validation
- Real-time validation on blur event
- Email validation using regex
- Phone validation using regex
- Minimum date set to today (no past appointments)
- Visual feedback with red border for invalid fields

#### Form Submission
1. Validates all required fields
2. Shows success notification
3. Logs booking data to console
4. Resets form
5. Scrolls to top

#### Success Notification
```
"Appointment booked successfully! Check your email for confirmation."
```

#### Error Notification
```
"Please fill in all required fields"
```

### Styling
- Gradient background
- Card-based form layout
- 2-column grid layout (responsive to 1 column on mobile)
- Professional form design
- Accessible labels and inputs

### Usage

#### For Users
1. Fill in personal information
2. Select preferred doctor and department
3. Choose date and time
4. Describe reason for visit
5. Submit form

#### For Developers
Edit appointment options in `components/booking.js`:

```javascript
// Change doctors
<option value="dr-name">Dr. Name - Specialty</option>

// Change departments
<option value="dept-name">Department Name</option>
```

---

## 🎓 Learn More Feature

### Overview
Interactive modals that display detailed information about services and departments when clicked.

### Location
- **File**: `components/learn-more.js`
- **Features**: Clickable service cards and "Learn More" buttons
- **Modal**: Dynamically created and shown on demand

### How It Works

#### Service Cards (Learn More by Clicking)
- Click on any service card to open detailed modal
- Shows full service description, features, doctors, and availability
- "Learn More" hint appears on hover

#### Department Cards (Learn More Buttons)
- Click "Learn More" button on each department card
- Opens modal with department details
- Shows services, equipment, and specialists

### Modal Content

#### For Services
- Service name and tagline
- Full description
- Key features (bullet list)
- Expert doctors working in this service
- Availability hours
- "Book Appointment" button

#### For Departments
- Department name
- Full description
- Services offered (bullet list)
- Advanced equipment available
- Specialists information
- "Book Appointment" button

### Service Details Included

**Cardiology**
- Description: Advanced Heart and Cardiovascular Care
- Features: ECG, Echocardiography, Cardiac catheterization, etc.
- Doctor: Dr. James Wilson (15+ years)

**Neurology**
- Description: Expert Brain and Nervous System Care
- Features: EEG, MRI, Stroke management, etc.
- Doctor: Dr. Sarah Ahmed (12+ years)

**Pulmonology**
- Description: Comprehensive Respiratory Care
- Features: Pulmonary tests, Chest imaging, etc.
- Doctor: Senior Pulmonologist

**Orthopedics**
- Description: Bone and Joint Specialist Care
- Features: Joint replacement, Arthroscopic surgery, etc.
- Doctor: Dr. Michael Chen (18+ years)

**Ophthalmology**
- Description: Complete Eye Care Services
- Features: Vision testing, Cataract surgery, etc.
- Doctor: Senior Eye Specialist

**Dentistry**
- Description: Comprehensive Dental Care
- Features: Checkups, Root canal, Teeth whitening, etc.
- Doctor: Senior Dentist

### Department Details Included

**Cardiology**
- Services: Diagnostic catheterization, Coronary intervention, etc.
- Equipment: Advanced ECG, Echocardiography, etc.
- Specialists: Dr. James Wilson and team

**Neurology**
- Services: Diagnostics, Stroke care, Brain tumor management, etc.
- Equipment: MRI, CT scanner, EEG/EMG lab, etc.
- Specialists: Dr. Sarah Ahmed and team

**Emergency**
- Services: Trauma care, Medical emergencies, etc.
- Equipment: Trauma center, ICU beds, etc.
- Specialists: Emergency Medicine Team

**Pediatrics**
- Services: Newborn screening, Neonatal ICU, etc.
- Equipment: NICU, Pediatric ICU, etc.
- Specialists: Pediatric specialists

**Laboratory**
- Services: Blood tests, Pathology, Genetic testing, etc.
- Equipment: Automated analyzers, Gene sequencers, etc.
- Specialists: Laboratory specialists

**Radiology**
- Services: X-ray, CT, MRI, Ultrasound, etc.
- Equipment: 64-slice CT, 3T MRI, etc.
- Specialists: Radiology team

### Modal Interactions

#### Opening Modal
- Click on service card → Opens service details
- Click "Learn More" button → Opens department details

#### Closing Modal
- Click X button in top right
- Click outside the modal
- Press ESC key

### Styling
- Professional gradient header
- Organized content sections
- Feature and equipment lists with icons
- Responsive design
- Smooth animations (fade-in, slide-up)

### Data Management

Service details stored in:
```javascript
const serviceDetails = {
    'ServiceName': {
        description: '',
        fullDescription: '',
        features: [],
        doctors: [],
        availability: ''
    }
}
```

Department details stored in:
```javascript
const departmentDetails = {
    'DepartmentName': {
        fullDescription: '',
        services: [],
        equipment: [],
        specialists: ''
    }
}
```

### Usage

#### For Users
1. Hover over service card to see "Click to learn more" hint
2. Click service card to see detailed information
3. Click "Learn More" button on department for department details
4. Click "Book Appointment" to go to booking form
5. Close modal by clicking X, outside, or pressing ESC

#### For Developers

**Add new service:**
```javascript
const serviceDetails = {
    // ...existing...
    'New Service': {
        description: 'Short description',
        fullDescription: 'Long description',
        features: ['Feature 1', 'Feature 2'],
        doctors: ['Dr. Name (Specialty, Years)'],
        availability: 'Hours'
    }
}
```

**Add new department:**
```javascript
const departmentDetails = {
    // ...existing...
    'New Department': {
        fullDescription: 'Full description',
        services: ['Service 1', 'Service 2'],
        equipment: ['Equipment 1', 'Equipment 2'],
        specialists: 'Team description'
    }
}
```

---

## 🔗 Integration

### Navigation
1. Departments section → Click "Learn More" button
2. Services section → Click card
3. Modal shows details
4. Click "Book Appointment" → Scrolls to booking form

### Form Connection
When "Book Appointment" is clicked from modal:
1. Modal closes
2. Page smoothly scrolls to booking form
3. Booking form is ready to fill

### Data Flow
```
User clicks
    ↓
Opens modal with details
    ↓
Clicks "Book Appointment"
    ↓
Modal closes and scrolls to booking
    ↓
User fills booking form
    ↓
Submits appointment
```

---

## 📱 Responsive Design

### Desktop (>1024px)
- Full modal width with 700px max
- 2-column form grid
- All features visible

### Tablet (768px-1024px)
- Modal width adjusted
- Form grid responsive
- All features accessible

### Mobile (<768px)
- Modal takes 95% width
- Form single column
- Touch-friendly buttons
- Optimized text sizing

---

## 🎯 Future Enhancements

### Booking System
- Email confirmation integration
- Backend API connection
- Calendar integration
- Automated email reminders
- Payment integration
- Real-time availability checking

### Learn More
- Image galleries
- Video testimonials
- Doctor profiles
- Treatment outcomes data
- Insurance information
- Cost estimates

---

## 📋 Files Modified

1. **index.html**
   - Added booking container
   - Added booking.js script tag
   - Added learn-more.js script tag

2. **css/styles.css**
   - Added booking form styles
   - Added modal styles
   - Added responsive styles

3. **components/booking.js** (NEW)
   - Complete booking form with validation

4. **components/learn-more.js** (NEW)
   - Modal functionality
   - Service details
   - Department details

---

## ✨ CSS Classes

### Booking Form
- `.booking` - Section wrapper
- `.booking-form` - Form container
- `.form-grid` - Grid layout
- `.form-group` - Individual field
- `.btn-large` - Large submit button
- `.booking-info` - Info message

### Modal
- `.modal` - Modal overlay
- `.modal-content` - Modal box
- `.modal-header` - Header section
- `.modal-body` - Content section
- `.modal-close` - Close button
- `.modal-section` - Content sections
- `.features-list` - Features list
- `.equipment-list` - Equipment list

---

**Ready to use! Open `index.html` to see booking and learn more features in action.** 🚀

