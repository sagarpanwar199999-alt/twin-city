// ============ UTILITY FUNCTIONS ============
document.addEventListener('DOMContentLoaded', () => {
    initializeCharts();
    setupAnimations();
    setupInteractivity();
    setupScrollAnimations();
    setupThemeToggle();
    setupMobileMenu();
    initializeMap();
});

// ============ DARK/LIGHT MODE TOGGLE ============
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to dark mode
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        html.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        html.classList.toggle('light-mode');
        const theme = html.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        themeToggle.innerHTML = theme === 'light' 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
    });
}

// ============ MOBILE MENU TOGGLE ============
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ============ CTA BUTTON INTERACTION ============
function setupInteractivity() {
    const ctaButton = document.getElementById('ctaButton');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const dashboardSection = document.getElementById('dashboard');
            dashboardSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Show success message
            const btn = contactForm.querySelector('.submit-btn');
            const originalText = btn.textContent;
            btn.textContent = 'Message Sent! ✨';
            btn.style.background = 'linear-gradient(135deg, #00d9ff, #00f0ff)';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                contactForm.reset();
            }, 3000);
        });
    }
}

// ============ CHART.JS INITIALIZATION ============
let charts = {};

function initializeCharts() {
    const ctx1 = document.getElementById('trafficChart');
    const ctx2 = document.getElementById('energyChart');
    const ctx3 = document.getElementById('populationChart');

    // Chart defaults
    Chart.defaults.color = '#e0e0e0';
    Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';

    // Traffic Flow Chart
    if (ctx1) {
        charts.traffic = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['0:00', '4:00', '8:00', '12:00', '16:00', '20:00', '23:00'],
                datasets: [{
                    label: 'Traffic Flow (vehicles/hour)',
                    data: [45, 52, 78, 95, 88, 72, 48],
                    borderColor: '#00d9ff',
                    backgroundColor: 'rgba(0, 217, 255, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#00d9ff',
                    pointBorderColor: '#fff',
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 217, 255, 0.5)',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: '#e0e0e0',
                            font: { size: 12 }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            display: true,
                            color: 'rgba(255, 255, 255, 0.05)'
                        },
                        ticks: {
                            color: '#a0a0a0'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#a0a0a0'
                        }
                    }
                }
            }
        });
    }

    // Energy Distribution Chart
    if (ctx2) {
        charts.energy = new Chart(ctx2, {
            type: 'doughnut',
            data: {
                labels: ['Solar', 'Wind', 'Grid', 'Battery'],
                datasets: [{
                    data: [35, 25, 30, 10],
                    backgroundColor: [
                        '#00d9ff',
                        '#00f0ff',
                        '#b300ff',
                        '#e700ff'
                    ],
                    borderColor: 'rgba(10, 14, 39, 0.7)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            color: '#e0e0e0',
                            font: { size: 11 },
                            padding: 15
                        }
                    }
                }
            }
        });
    }

    // Population Density Chart
    if (ctx3) {
        charts.population = new Chart(ctx3, {
            type: 'bar',
            data: {
                labels: ['Downtown', 'North Zone', 'South Zone', 'East Zone', 'West Zone'],
                datasets: [{
                    label: 'Population Density (%)',
                    data: [85, 65, 72, 58, 45],
                    backgroundColor: [
                        'rgba(0, 217, 255, 0.8)',
                        'rgba(0, 240, 255, 0.8)',
                        'rgba(179, 0, 255, 0.8)',
                        'rgba(231, 0, 255, 0.8)',
                        'rgba(255, 0, 110, 0.8)'
                    ],
                    borderColor: [
                        '#00d9ff',
                        '#00f0ff',
                        '#b300ff',
                        '#e700ff',
                        '#ff006e'
                    ],
                    borderWidth: 2,
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                indexAxis: 'y',
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: '#e0e0e0',
                            font: { size: 12 }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        },
                        ticks: {
                            color: '#a0a0a0'
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#a0a0a0'
                        }
                    }
                }
            }
        });
    }
}

// ============ GSAP ANIMATIONS ============
function setupAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero title animation
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        gsap.to(heroTitle, {
            duration: 3,
            repeat: -1,
            yoyo: true,
            letterSpacing: '3px'
        });
    }

    // Floating cubes animation (already in CSS but can enhance)
    const cubes = document.querySelectorAll('.floating-cube');
    cubes.forEach((cube, index) => {
        gsap.to(cube, {
            duration: 8 + index * 2,
            y: 30,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    });

    // Feature cards stagger animation
    const featureCards = document.querySelectorAll('.feature-card');
    gsap.to(featureCards, {
        scrollTrigger: {
            trigger: '.features',
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        onStart: () => {
            featureCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
            });
        }
    });

    // Dashboard panels animation
    const dashboardPanels = document.querySelectorAll('.dashboard-panel');
    gsap.to(dashboardPanels, {
        scrollTrigger: {
            trigger: '.dashboard',
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        onStart: () => {
            dashboardPanels.forEach(panel => {
                panel.style.opacity = '0';
                panel.style.transform = 'translateY(20px)';
            });
        }
    });

    // Tech cards animation
    const techCards = document.querySelectorAll('.tech-card');
    gsap.to(techCards, {
        scrollTrigger: {
            trigger: '.tech-stack',
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        onStart: () => {
            techCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9)';
            });
        }
    });

    // Team cards animation
    const teamCards = document.querySelectorAll('.team-card');
    gsap.to(teamCards, {
        scrollTrigger: {
            trigger: '.team',
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        onStart: () => {
            teamCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
            });
        }
    });

    // Use case cards animation
    const useCaseCards = document.querySelectorAll('.use-case-card');
    gsap.to(useCaseCards, {
        scrollTrigger: {
            trigger: '.use-cases',
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 1,
        rotate: 0,
        duration: 0.5,
        stagger: 0.1,
        onStart: () => {
            useCaseCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'rotateY(20deg)';
            });
        }
    });

    // Network nodes pulsing animation (enhance existing)
    const nodes = document.querySelectorAll('.node');
    nodes.forEach((node, index) => {
        gsap.to(node, {
            duration: 2,
            scale: 1.1,
            repeat: -1,
            yoyo: true,
            delay: index * 0.2,
            ease: 'sine.inOut'
        });
    });

    // SVG connection lines animation
    const svg = document.querySelector('.connections');
    if (svg) {
        drawConnections(svg);
    }
}

// Draw SVG connections between network nodes
function drawConnections(svg) {
    const positions = {
        node1: { x: 150, y: 50 },
        node2: { x: 50, y: 150 },
        node3: { x: 250, y: 150 },
        node4: { x: 150, y: 250 }
    };

    // Create lines
    Object.keys(positions).forEach((key1) => {
        Object.keys(positions).forEach((key2) => {
            if (key1 < key2) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', positions[key1].x);
                line.setAttribute('y1', positions[key1].y);
                line.setAttribute('x2', positions[key2].x);
                line.setAttribute('y2', positions[key2].y);
                line.setAttribute('stroke', '#00d9ff');
                line.setAttribute('stroke-width', '2');
                line.setAttribute('opacity', '0.3');
                svg.appendChild(line);
            }
        });
    });
}

// ============ SCROLL ANIMATIONS ============
function setupScrollAnimations() {
    // Scroll-triggered section animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'center center',
                scrub: 1,
                markers: false,
            },
            opacity: 1,
            duration: 1
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============ REAL-TIME DATA SIMULATION ============
function updateDashboardData() {
    // Simulate real-time data updates
    setInterval(() => {
        if (charts.traffic) {
            const newValue = Math.floor(Math.random() * 100) + 1;
            charts.traffic.data.datasets[0].data.push(newValue);
            charts.traffic.data.datasets[0].data.shift();
            charts.traffic.update('none');
        }

        // Update device counter
        const counterDisplay = document.querySelector('.counter-display');
        if (counterDisplay) {
            const change = Math.floor(Math.random() * 10) - 5;
            let current = parseInt(counterDisplay.textContent.replace(/,/g, ''));
            current += change;
            counterDisplay.textContent = current.toLocaleString();
        }
    }, 5000);
}

// Initialize data updates
updateDashboardData();

// ============ PARALLAX EFFECT ============
window.addEventListener('scroll', () => {
    const particles = document.querySelector('.floating-particles');
    if (particles) {
        particles.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    }

    // Scroll-triggered animations for stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach((stat) => {
        const rect = stat.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            stat.style.opacity = '1';
            stat.style.transform = 'translateY(0)';
        }
    });
});

// ============ PERFORMANCE OPTIMIZATION ============
// Debounce scroll events
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Animation updates happen here
            ticking = false;
        });
        ticking = true;
    }
});

// ============ LOADING ANIMATION ============
window.addEventListener('load', () => {
    // Fade in main content
    gsap.to('body', {
        opacity: 1,
        duration: 0.8,
        onStart: () => {
            document.body.style.opacity = '0.8';
        }
    });

    // Animate hero section
    gsap.from('.hero-title', {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.hero-subtitle', {
        duration: 0.8,
        y: 50,
        opacity: 0,
        delay: 0.1,
        ease: 'power3.out'
    });

    gsap.from('.cta-button', {
        duration: 0.8,
        y: 50,
        opacity: 0,
        delay: 0.2,
        ease: 'power3.out'
    });
});

// ============ MOUSE TRACKING FOR VISUAL EFFECTS ============
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelector('.floating-particles');
    if (particles) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        gsap.to(particles, {
            x: x * 10,
            y: y * 10,
            duration: 0.5,
            overwrite: 'auto'
        });
    }
});

// ============ INTERSECTION OBSERVER FOR LAZY ANIMATIONS ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards
document.querySelectorAll('.feature-card, .team-card, .tech-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    observer.observe(card);
});

// ============ ACCESSIBILITY & PERFORMANCE ============
// Respect user's motion preferences
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(0.5);
}

// Handle window resize for responsive animations
window.addEventListener('resize', () => {
    // Recalculate positions if needed
    if (charts.traffic) {
        charts.traffic.resize();
    }
    if (charts.energy) {
        charts.energy.resize();
    }
    if (charts.population) {
        charts.population.resize();
    }
});

// ============ SMOOTH SCROLL FALLBACK ============
if (!('scrollBehavior' in document.documentElement.style)) {
    console.log('Smooth scroll not supported, using polyfill fallback');
}

// ============ STATS COUNTER ANIMATION ============
function animateCounters() {
    const stats = document.querySelectorAll('.stat h3');
    stats.forEach((stat) => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 30;
        
        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + (stat.textContent.includes('+') ? '+' : '');
                clearInterval(counter);
            } else {
                stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
            }
        }, 30);
    });
}

// Trigger counter animation when hero comes into view
const heroSection = document.querySelector('.hero');
if (heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateCounters();
            heroObserver.unobserve(heroSection);
        }
    });
    heroObserver.observe(heroSection);
}

// ============ MAP INTEGRATION ============
let cityMap;
let markerClusterGroup;

function initializeMap() {
    const mapElement = document.getElementById('cityMap');
    if (!mapElement) return;

    // Initialize map centered on India
    cityMap = L.map('cityMap').setView([20.5937, 78.9629], 5);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
        className: 'map-tile'
    }).addTo(cityMap);

    // Create marker cluster group
    markerClusterGroup = L.markerClusterGroup({
        maxClusterRadius: 80,
        disableClusteringAtZoom: 15
    });

    // Define smart city infrastructure points across major Indian cities
    const smartCityPoints = [
        // Delhi - Traffic Management
        { lat: 28.7041, lng: 77.1025, type: 'traffic', name: 'Delhi Central Traffic Hub', city: 'Delhi', icon: '🚦' },
        { lat: 28.6139, lng: 77.2090, type: 'traffic', name: 'Delhi South Junction', city: 'Delhi', icon: '🚦' },
        { lat: 28.5355, lng: 77.3910, type: 'energy', name: 'Delhi Solar Farm', city: 'Delhi', icon: '⚡' },
        
        // Mumbai - Energy and Safety
        { lat: 19.0760, lng: 72.8777, type: 'energy', name: 'Mumbai Smart Grid', city: 'Mumbai', icon: '⚡' },
        { lat: 19.1136, lng: 72.8697, type: 'safety', name: 'Mumbai Emergency Center', city: 'Mumbai', icon: '🔐' },
        { lat: 19.0176, lng: 72.8479, type: 'traffic', name: 'Mumbai Traffic Control', city: 'Mumbai', icon: '🚦' },
        
        // Bangalore - Tech Infrastructure
        { lat: 12.9716, lng: 77.5946, type: 'iot', name: 'Bangalore IoT Hub', city: 'Bangalore', icon: '📡' },
        { lat: 12.9352, lng: 77.6245, type: 'air', name: 'Bangalore Air Quality Monitor', city: 'Bangalore', icon: '🌍' },
        { lat: 13.1939, lng: 77.7064, type: 'water', name: 'Bangalore Water Treatment', city: 'Bangalore', icon: '💧' },
        
        // Hyderabad - Smart Infrastructure
        { lat: 17.3850, lng: 78.4867, type: 'traffic', name: 'Hyderabad Traffic System', city: 'Hyderabad', icon: '🚦' },
        { lat: 17.4000, lng: 78.5500, type: 'energy', name: 'Hyderabad Energy Station', city: 'Hyderabad', icon: '⚡' },
        { lat: 17.3589, lng: 78.4740, type: 'iot', name: 'Hyderabad Sensor Network', city: 'Hyderabad', icon: '📡' },
        
        // Chennai - Maritime & Energy
        { lat: 13.0827, lng: 80.2707, type: 'air', name: 'Chennai Pollution Monitor', city: 'Chennai', icon: '🌍' },
        { lat: 13.1939, lng: 80.2704, type: 'water', name: 'Chennai Water Management', city: 'Chennai', icon: '💧' },
        { lat: 13.0479, lng: 80.2385, type: 'safety', name: 'Chennai Security Center', city: 'Chennai', icon: '🔐' },
        
        // Kolkata - Infrastructure
        { lat: 22.5726, lng: 88.3639, type: 'traffic', name: 'Kolkata Traffic Hub', city: 'Kolkata', icon: '🚦' },
        { lat: 22.5448, lng: 88.3426, type: 'air', name: 'Kolkata Air Quality Station', city: 'Kolkata', icon: '🌍' },
        { lat: 22.5677, lng: 88.3725, type: 'iot', name: 'Kolkata IoT System', city: 'Kolkata', icon: '📡' },
        
        // Pune - Energy & Safety
        { lat: 18.5204, lng: 73.8567, type: 'energy', name: 'Pune Energy Station', city: 'Pune', icon: '⚡' },
        { lat: 18.5535, lng: 73.9114, type: 'safety', name: 'Pune Safety Control', city: 'Pune', icon: '🔐' },
        
        // Ahmedabad - Smart City
        { lat: 23.0225, lng: 72.5714, type: 'water', name: 'Ahmedabad Water System', city: 'Ahmedabad', icon: '💧' },
        { lat: 23.1815, lng: 72.6409, type: 'traffic', name: 'Ahmedabad Traffic Control', city: 'Ahmedabad', icon: '🚦' },
        
        // Jaipur - Infrastructure
        { lat: 26.9124, lng: 75.7873, type: 'air', name: 'Jaipur Air Monitor', city: 'Jaipur', icon: '🌍' },
        { lat: 26.9353, lng: 75.8261, type: 'energy', name: 'Jaipur Smart Grid', city: 'Jaipur', icon: '⚡' },
    ];

    // Store globally for search functionality
    window.allSmartCityPoints = smartCityPoints;

    // Add markers to map
    smartCityPoints.forEach(point => {
        const marker = createCustomMarker(point);
        markerClusterGroup.addLayer(marker);
    });

    cityMap.addLayer(markerClusterGroup);

    // Invalidate map size after a brief delay
    setTimeout(() => {
        cityMap.invalidateSize();
    }, 100);

    // Initialize search and filter functionality
    setupMapSearch();
}

function createCustomMarker(point) {
    const colors = {
        traffic: '#00d9ff',
        energy: '#ffaa00',
        air: '#00ff88',
        safety: '#ff0055',
        iot: '#b300ff',
        water: '#0088ff'
    };

    // Create custom div icon
    const customIcon = L.divIcon({
        html: `
            <div class="custom-marker" style="background-color: ${colors[point.type]}; box-shadow: 0 0 15px ${colors[point.type]}80;">
                ${point.icon}
            </div>
        `,
        className: `marker-${point.type}`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

    const marker = L.marker([point.lat, point.lng], { icon: customIcon });
    
    // Create popup with nice styling
    const popupContent = `
        <div style="color: #e0e0e0; font-size: 12px;">
            <h4 style="color: #00d9ff; margin: 0 0 5px 0;">${point.name}</h4>
            <p style="margin: 0; font-size: 11px;">Type: <strong>${point.type.toUpperCase()}</strong></p>
            <p style="margin: 5px 0 0 0; font-size: 11px;">Status: <span style="color: #00ff88;">● Active</span></p>
        </div>
    `;
    
    marker.bindPopup(popupContent, {
        maxWidth: 200,
        className: 'custom-popup'
    });

    // Live data update for markers
    marker.on('click', function() {
        updateMapInfoPanel(point);
    });

    return marker;
}

function updateMapInfoPanel(point) {
    const activeSensors = document.getElementById('activeSensors');
    const dataPoints = document.getElementById('dataPoints');
    
    if (activeSensors && dataPoints) {
        // Simulate data updates based on clicked marker
        const sensorCount = Math.floor(Math.random() * 5000) + 1000;
        const dataCount = Math.floor(Math.random() * 50000) + 10000;
        
        activeSensors.textContent = sensorCount.toLocaleString();
        dataPoints.textContent = dataCount.toLocaleString();
    }
}

// Update map data at intervals
setInterval(() => {
    const activeSensors = document.getElementById('activeSensors');
    if (activeSensors) {
        let current = parseInt(activeSensors.textContent.replace(/,/g, ''));
        const change = Math.floor(Math.random() * 20) - 10;
        current += change;
        if (current < 1000) current = 1000;
        activeSensors.textContent = current.toLocaleString();
    }

    const dataPoints = document.getElementById('dataPoints');
    if (dataPoints) {
        let current = parseInt(dataPoints.textContent.replace(/,/g, ''));
        const change = Math.floor(Math.random() * 500) - 250;
        current += change;
        if (current < 5000) current = 5000;
        dataPoints.textContent = current.toLocaleString();
    }
}, 3000);

// Re-initialize map when theme changes
const originalToggle = setupThemeToggle;
window.addEventListener('themechange', () => {
    if (cityMap) {
        setTimeout(() => {
            cityMap.invalidateSize();
        }, 300);
    }
});

// ============ MAP SEARCH & FILTER FUNCTIONALITY ============
function setupMapSearch() {
    const searchInput = document.getElementById('mapSearch');
    const searchBtn = document.getElementById('searchBtn');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchResults = document.getElementById('searchResults');

    let currentFilter = 'all';
    let visibleMarkers = new Set();

    // Search functionality
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        searchResults.classList.remove('show');
        searchResults.innerHTML = '';

        if (!query) return;

        const filtered = window.allSmartCityPoints.filter(point => {
            const matchesQuery = point.name.toLowerCase().includes(query) ||
                                point.city.toLowerCase().includes(query) ||
                                point.type.toLowerCase().includes(query);
            const matchesFilter = currentFilter === 'all' || point.type === currentFilter;
            return matchesQuery && matchesFilter;
        });

        if (filtered.length > 0) {
            searchResults.classList.add('show');
            filtered.forEach(point => {
                const resultDiv = document.createElement('div');
                resultDiv.className = 'search-result-item';
                resultDiv.innerHTML = `
                    <span class="result-name">${point.name}</span>
                    <span class="result-type">${point.type}</span>
                `;
                resultDiv.addEventListener('click', () => {
                    centerMapOnPoint(point);
                    searchInput.value = '';
                    searchResults.classList.remove('show');
                });
                searchResults.appendChild(resultDiv);
            });
        }
    }

    function centerMapOnPoint(point) {
        cityMap.setView([point.lat, point.lng], 12);
        setTimeout(() => {
            const marker = L.latLng(point.lat, point.lng);
            const popup = L.popup()
                .setLatLng(marker)
                .setContent(`
                    <div style="color: #e0e0e0; font-size: 12px;">
                        <h4 style="color: #00d9ff; margin: 0 0 5px 0;">${point.name}</h4>
                        <p style="margin: 0; font-size: 11px;">City: <strong>${point.city}</strong></p>
                        <p style="margin: 0; font-size: 11px;">Type: <strong>${point.type.toUpperCase()}</strong></p>
                        <p style="margin: 5px 0 0 0; font-size: 11px;">Status: <span style="color: #00ff88;">● Active</span></p>
                    </div>
                `)
                .openOn(cityMap);
        }, 500);
    }

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            
            // Update markers visibility
            updateMarkerVisibility(currentFilter);
        });
    });

    function updateMarkerVisibility(filter) {
        const filtered = window.allSmartCityPoints.filter(point =>
            filter === 'all' || point.type === filter
        );

        // Clear and re-populate cluster group
        markerClusterGroup.clearLayers();
        filtered.forEach(point => {
            const marker = createCustomMarker(point);
            markerClusterGroup.addLayer(marker);
        });
    }
}
