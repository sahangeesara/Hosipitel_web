<!-- COMPONENT ARCHITECTURE DOCUMENTATION -->

# Component-Based Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────┐
│                    index.html (Entry Point)              │
│                  - Defines Container DIVs                │
│                  - Loads CSS and Libraries               │
│                  - Loads All Components                  │
└────────────────────────┬────────────────────────────────┘
                         │
     ┌───────────────────┼────��──────────────┐
     │                   │                   │
     ▼                   ▼                   ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  Components/ │  │     css/     │  │      js/     │
│              │  │              │  │              │
│ navbar.js    │  │ styles.css   │  │  app.js      │
│ hero.js      │  │ (All Styles) │  │ (Logic)      │
│ stats.js     │  │ (Responsive) │  │              │
│ services.js  │  │              │  │              │
│ doctors.js   │  └──────────────┘  └──────────────┘
│ departments.js
│ contact.js   
│ footer.js    
└──────────────┘
```

## Component Initialization Flow

```
Page Load
    ↓
DOM Content Loaded Event
    ├─ navbar.js        → Renders Navigation & Sets Events
    ├─ hero.js          → Renders Hero Section
    ├─ stats.js         → Renders Stats & Counter Animation
    ├─ services.js      → Renders Services & Hover Effects
    ├─ doctors.js       → Renders Doctor Profiles
    ├─ departments.js   → Renders Departments & Button Events
    ├─ contact.js       → Renders Contact Form & Validation
    ├─ footer.js        → Renders Footer & Newsletter
    ↓
app.js Initializes
    ├─ initScrollAnimations()      → Observes Elements
    ├─ initActiveNavigation()      → Highlights Nav Links
    ├─ createBackToTopButton()     → Creates Scroll Button
    └─ Global Utilities Ready
         ├─ scrollToSection()
         └─ showNotification()
```

## Data Flow

### Navigation Component
```
navbar.js
├─ renderNavbar()        → Renders HTML
└─ initNavbarEvents()    → Sets up:
                           ├─ Mobile menu toggle
                           ├─ Link click handlers
                           ├─ Keyboard navigation
                           └─ Menu animations
```

### Services Component
```
services.js
├─ servicesData (Array of objects)
├─ renderServices()      → Maps data to HTML
└─ initServiceCardEvents() → Adds hover effects
```

### Stats Component
```
stats.js
├─ renderStats()           → Renders HTML
└─ initStatsAnimation()    → Sets up:
                             └─ Counter animation on scroll
```

### Contact Component
```
contact.js
├─ renderContact()         → Renders Form
└─ initContactFormEvents() → Sets up:
                             ├─ Form submission
                             ├─ Email validation
                             ├─ Phone validation
                             └─ Error highlighting
```

## Global Utilities (app.js)

```
Global Functions:
├─ scrollToSection()         → Smooth scroll to any section
├─ showNotification()        → Display toast notifications
├─ initScrollAnimations()    → Animate elements on scroll
├─ initActiveNavigation()    → Highlight active nav link
├─ createBackToTopButton()   → Generate scroll-to-top button
└─ Page Load Animations      → Fade-in effects
```

## Event Flow Diagram

```
User Interaction:

1. Click Navigation Link
   → navLinks click handler (navbar.js)
   → scrollToSection() (app.js)
   → Smooth scroll to section

2. Scroll Page
   → Scroll event listener (app.js)
   → Check active section
   → Update navigation highlight

3. Submit Contact Form
   → Form submit handler (contact.js)
   → Validate email/phone
   → Show notification (app.js)
   → Reset form

4. Click Department Button
   → Button click handler (departments.js)
   → scrollToSection() (app.js)
   → Show notification (app.js)

5. Scroll Down (>300px)
   → Back-to-top button shows
   → Click scrolls to top
```

## Component Lifecycle

```
Component Lifecycle:

1. MODULE LOAD
   └─ Script loaded into memory

2. DOM READY
   ├─ Component render function called
   ├─ HTML inserted into container
   ├─ DOM elements now available

3. INITIALIZATION
   ├─ Event listeners attached
   ├─ Animations started
   ├─ State initialized

4. READY
   └─ Component fully functional
```

## Data Structure Examples

### Services Data
```javascript
const servicesData = [
    {
        icon: 'fa-heart',
        title: 'Cardiology',
        description: 'Advanced heart care...'
    },
    // ...more services
]
```

### Doctors Data
```javascript
const doctorsData = [
    {
        name: 'Dr. James Wilson',
        specialty: 'Cardiologist',
        experience: '15+ years'
    },
    // ...more doctors
]
```

## Responsive Design Architecture

```
CSS Variables (Root)
├─ Color scheme (primary, secondary, etc.)
├─ Spacing and sizing
└─ Animations and transitions

Media Queries:
├─ @media (max-width: 1024px)  → Tablet adjustments
├─ @media (max-width: 768px)   → Mobile menu activation
├─ @media (max-width: 576px)   → Extra small optimizations
└─ @media print                → Print styles
```

## File Dependencies

```
index.html
├── font-awesome CDN
├── css/styles.css
├── components/navbar.js
├── components/hero.js
├── components/stats.js
├── components/services.js
├── components/doctors.js
├── components/departments.js
├── components/contact.js
├── components/footer.js
└── js/app.js (depends on all components)
```

## Adding a New Component

```
Steps to add new component:

1. Create: components/newfeature.js
   └─ Follow existing pattern
      ├─ renderNewFeature()        function
      ├─ initNewFeatureEvents()    function
      └─ Export by rendering on load

2. Update: index.html
   └─ Add container div
   └─ Add script tag

3. Optional: Add global utilities in app.js
   └─ If needs global functionality

4. Update: css/styles.css
   └─ Add component-specific styles

5. Reference in: README.md
   └─ Update documentation
```

---

This modular architecture makes the code:
✅ Easy to maintain
✅ Simple to extend
✅ Clean and organized
✅ Reusable components

