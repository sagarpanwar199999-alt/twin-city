# 🌆 AI Digital Twin for Smart Cities - Hackathon Website

A modern, futuristic, fully responsive website showcasing an AI-powered Digital Twin system for smart city infrastructure management.

## 📋 Project Overview

This website demonstrates a cutting-edge digital twin platform that enables real-time monitoring, prediction, and optimization of urban systems. Built with HTML5, CSS3, and vanilla JavaScript, it features a dark futuristic theme with glassmorphism effects, neon colors, and smooth animations.

## ✨ Features Implemented

### Design & UI
- **Dark Futuristic Theme** - Modern dark background with neon blue (#00d9ff), cyan (#00f0ff), and purple (#b300ff) accents
- **Glassmorphism Effects** - Frosted glass panels with backdrop blur for a premium look
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - GSAP-powered animations and CSS keyframes for engaging interactions
- **Dynamic Gradient Backgrounds** - Animated grid background and floating particle effects

### Core Sections
1. **Navigation Bar** - Fixed navbar with smooth scrolling, mobile hamburger menu, and dark/light mode toggle
2. **Hero Section** - Animated title, subtitle, CTA button, and floating 3D cubes with stats
3. **About Section** - Digital Twin explanation with feature list and interactive network diagram
4. **Features Section** - 6 advanced features with icons and hover animations
5. **Live Dashboard** - Real-time data visualization with Chart.js graphs:
   - Traffic Flow line chart
   - Energy Distribution doughnut chart
   - Air Quality meter
   - IoT Device counter
   - Population Density bar chart
   - System Health indicators
6. **Technology Stack** - Animated tech cards showing AI/ML, IoT, Cloud, Big Data, Web, and Data Viz technologies
7. **Use Cases** - Smart governance, urban planning, disaster management, sustainability
8. **Team Section** - Team member cards with colorful avatars and social links
9. **Contact Section** - Contact form and information with social media links
10. **Footer** - Quick links and copyright information

### Interactive Features
- 🎨 **Dark/Light Mode Toggle** - Theme switching with localStorage persistence
- 📱 **Mobile Navigation** - Responsive hamburger menu for mobile devices
- 📊 **Live Data Updates** - Simulated real-time data updates in dashboard charts
- ⌨️ **Smooth Scrolling** - Anchor links with smooth scroll behavior
- 🎯 **Hover Effects** - Interactive cards with elevation, glow, and color transitions
- 🔄 **Parallax Effects** - Background movement synchronized with scroll
- ✉️ **Contact Form** - Interactive form with success feedback
- 🚀 **Scroll-Triggered Animations** - Elements animate in as they come into view

### Technical Features
- **Chart.js Integration** - Multiple chart types (line, doughnut, bar) for data visualization
- **GSAP Animation Library** - Advanced timeline and scroll trigger animations
- **Intersection Observer API** - Efficient lazy loading and intersection-based animations
- **CSS Grid & Flexbox** - Modern responsive layout system
- **SVG Graphics** - Custom network connection lines
- **Performance Optimized** - Debounced scroll events, optimized animations, lazy loading

## 📂 Project Structure

```
twin cities/
├── index.html          (Main HTML file with all sections)
├── styles.css          (Complete styling with animations)
├── script.js           (JavaScript with interactivity and charts)
└── README.md           (This file)
```

## 🚀 Quick Start

### Option 1: Direct File Access
1. Open `index.html` in your web browser
2. The website will load with all styles and scripts

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npm install -g http-server
http-server

# Using Live Server in VS Code
# Install the Live Server extension, then right-click index.html → "Open with Live Server"
```

Then navigate to `http://localhost:8000` (or your server's URL)

## 🎨 Customization Guide

### Colors
All colors are defined as CSS variables in `styles.css`:
```css
:root {
    --primary-color: #00d9ff;      /* Cyan */
    --secondary-color: #00f0ff;    /* Light Cyan */
    --accent-color: #b300ff;       /* Purple */
    --accent-light: #e700ff;       /* Light Purple */
    --bg-dark: #0a0e27;            /* Dark Background */
    --bg-darker: #050820;          /* Darker Background */
    --text-light: #e0e0e0;         /* Light Text */
    --text-lighter: #ffffff;       /* White Text */
}
```

### Dashboard Data
Edit the chart data in `script.js` `initializeCharts()` function to use real APIs:
```javascript
// Replace the sample data with API calls
fetch('/api/traffic-data')
    .then(response => response.json())
    .then(data => {
        charts.traffic.data.datasets[0].data = data;
        charts.traffic.update();
    });
```

### Add Real Data Integration
```javascript
// In script.js, modify updateDashboardData() for real API updates
function updateDashboardData() {
    setInterval(() => {
        fetch('/api/live-data')
            .then(res => res.json())
            .then(data => {
                // Update charts with real data
                charts.traffic.data.datasets[0].data = data.traffic;
                charts.traffic.update('none');
            });
    }, 5000);
}
```

## 🔄 Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Dependencies

All dependencies are loaded from CDN:
- **Font Awesome 6.4** - Icons library
- **GSAP 3.12** - Advanced animations and scroll triggers
- **Chart.js 3.9** - Data visualization

## 🎯 Features Breakdown

### Hover Effects
- Feature cards lift on hover with glow effect
- Tech badges change background on hover
- Team member cards scale and glow
- All transitions are smooth (0.3s ease)

### Animations
- **Title Glow** - Hero title pulses with neon glow
- **Floating Cubes** - 3D rotating cubes in hero section
- **Network Nodes** - Pulsing nodes in about section
- **Section Transitions** - Staggered animations when sections come into view
- **Counter Animation** - Numbers count up when hero is visible
- **Dashboard Updates** - Real-time chart updates every 5 seconds

### Mobile Responsive
All components adapt to screen sizes:
- **Desktop** - Full multi-column layouts
- **Tablet** - Optimized 2-column grids
- **Mobile** - Single column layouts, touch-friendly buttons

## 🔧 Performance Tips

1. **Reduce Motion** - Respects `prefers-reduced-motion` user preference
2. **Debounced Scroll** - Scroll events are debounced for performance
3. **Lazy Loading** - Cards animate in only when visible
4. **Optimized Assets** - No heavy images, pure CSS and SVG graphics
5. **Efficient Charts** - Charts are only updated when visible

## 🌙 Dark/Light Mode

The website includes a theme toggle:
- Default: Dark mode
- Toggle via the moon icon in navbar
- Theme preference is saved in localStorage
- All colors automatically adjust

## 📝 Content Customization

### Update Team Members
Edit the team section in `index.html`:
```html
<div class="team-card">
    <div class="team-image">
        <div class="avatar avatar-1"></div>
    </div>
    <h3>Your Name</h3>
    <p class="role">Your Role</p>
    <p class="bio">Your bio here</p>
</div>
```

### Contact Information
Update the contact section with your actual details:
- Email: `hello@smartcitiesai.com`
- Phone: `+1 (555) 123-4567`
- Location: `Innovation District, Tech City`

## 🚀 Deployment

### Netlify
1. Push files to GitHub
2. Connect repository to Netlify
3. Build command: (leave empty, it's static HTML)
4. Publish directory: `/`

### Vercel
```bash
vercel
```

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select main branch as source

### Traditional Hosting
- Upload all files via FTP to your web server
- Ensure all file paths are correct

## 🔐 Security Notes

- Contact form is currently a demo (doesn't send actual emails)
- To add real email functionality, use a backend service (Formspree, SendGrid, etc.)
- All client-side validation; add server-side validation for production

## 📚 External Resources

- [GSAP Documentation](https://greensock.com/gsap/)
- [Chart.js Documentation](https://www.chartjs.org/)
- [CSS Glassmorphism](https://css.glass/)
- [Font Awesome Icons](https://fontawesome.com/icons)

## 🎓 Learning Resources

This project demonstrates:
- Modern CSS (Grid, Flexbox, Custom Properties)
- JavaScript ES6+ features
- Third-party library integration
- Responsive design principles
- Animation and micro-interactions
- Accessibility considerations
- Performance optimization

## 💡 Enhancement Ideas

- [ ] Connect to real IoT data APIs
- [ ] Add WebSocket for live updates
- [ ] Implement user authentication
- [ ] Add more chart types (3D, geospatial)
- [ ] Create admin dashboard
- [ ] Add video background option
- [ ] Implement PWA features
- [ ] Add multi-language support
- [ ] Create interactive city map
- [ ] Add AI chatbot widget

## 📄 License

This project is free to use for hackathon and educational purposes.

## 🤝 Contributing

Feel free to modify, extend, and use this as a foundation for your smart city projects!

---

**Built for: AI Digital Twin for Smart Cities Hackathon 2026** ✨
