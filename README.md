# HealthCare Hospital - Responsive Web Page

A modern, fully responsive hospital website built with HTML, CSS, and JavaScript using a component-based architecture.

## 📁 Project Structure

```
Hosipitel_web/
├── index.html                    # Main entry point
├── css/
│   └── styles.css               # All styles and responsive design
├── js/
│   └── app.js                   # Main application logic
├── components/
│   ├── navbar.js                # Navigation component
│   ├── hero.js                  # Hero section component
│   ├── stats.js                 # Statistics component
│   ├── services.js              # Services section component
│   ├── doctors.js               # Doctors section component
│   ├── departments.js           # Departments section component
│   ├── contact.js               # Contact section component
│   └── footer.js                # Footer component
└── README.md                    # This file
```

## 🎯 Features

### Components
- **Navbar Component** - Sticky navigation with responsive hamburger menu
- **Hero Component** - Eye-catching welcome section
- **Stats Component** - Animated statistics with counters
- **Services Component** - 6 medical services with hover effects
- **Doctors Component** - Doctor profiles with social links
- **Departments Component** - Hospital departments with descriptions
- **Contact Component** - Contact form with validation
- **Footer Component** - Newsletter subscription and links

### Functionality
- ✅ Fully responsive (Mobile, Tablet, Desktop)
- ✅ Mobile hamburger menu with animation
- ✅ Smooth scroll navigation
- ✅ Animated counters for statistics
- ✅ Form validation (Email, Phone)
- ✅ Notification system
- ✅ Scroll animations for elements
- ✅ Back-to-top button
- ✅ Active navigation highlighting
- ✅ Modern UI/UX design

## 📱 Responsive Breakpoints

- **Extra Small** (< 576px) - Mobile phones
- **Mobile** (576px - 767px) - Large phones/small tablets
- **Tablet** (768px - 1024px) - Tablets
- **Desktop** (> 1024px) - Desktop computers

## 🚀 Getting Started

1. Clone or download the project
2. Open `index.html` in your web browser
3. The website will automatically load all components

## 📝 How It Works

Each component is a self-contained JavaScript module that:
1. Renders its HTML into a container
2. Initializes its own event listeners
3. Handles its own functionality

The main `js/app.js` file:
- Initializes global functionality
- Sets up scroll animations
- Manages navigation highlighting
- Creates the back-to-top button
- Handles utility functions (notifications, scrolling)

## 🎨 Customization

### Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #ff6b6b;
    --dark-color: #1a1a1a;
    --light-color: #f5f5f5;
}
```

### Adding New Data
Edit component files to modify content:
- Services: Edit `components/services.js`
- Doctors: Edit `components/doctors.js`
- Departments: Edit `components/departments.js`

## 📦 Dependencies

- **Font Awesome 6.0.0** - Icon library (via CDN)
- No other external dependencies required

## 🔧 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## 📧 Contact Information

- **Email**: info@healthcarehospital.com
- **Phone**: +1 (555) 123-4567
- **Address**: 123 Medical Street, Health City, HC 12345

## 📄 License

This project is open source and available for use.

---

**Created with ❤️ for modern healthcare web presence**

