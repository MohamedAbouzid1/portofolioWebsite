// Portfolio Website JavaScript
// This file contains interactive functionality for the portfolio website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeWebsite();
});

function initializeWebsite() {
    // Add smooth scrolling for navigation links
    setupSmoothScrolling();
    
    // Add active navigation highlighting
    setupActiveNavigation();
    
    // Add scroll animations (can be enhanced later)
    setupScrollAnimations();
    
    // Add dynamic hero interactions
    setupHeroInteractions();
    
    
    // Add typing animation
    setupTypingAnimation();
    
    
    // Add navbar scroll effects
    setupNavbarScrollEffects();
}

function setupSmoothScrolling() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setupActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Function to update active navigation
    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // Initial call
    updateActiveNav();
}

function setupScrollAnimations() {
    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe project cards and skill items
    const animatedElements = document.querySelectorAll('.project-card, .skill-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Utility functions for future enhancements
function showNotification(message, type = 'info') {
    // Future: Add notification system
    console.log(`${type.toUpperCase()}: ${message}`);
}

function validateEmail(email) {
    // Future: Add email validation for contact form
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Dynamic Hero Interactions - Simplified for minimalist design
function setupHeroInteractions() {
    // Removed parallax and excessive animations for cleaner look
    // Hero section now relies on CSS animations only
}


// Typing Animation
function setupTypingAnimation() {
    const nameElement = document.querySelector('.name-highlight');
    if (!nameElement) return;
    
    const text = nameElement.textContent;
    nameElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            nameElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing animation after a delay
    setTimeout(typeWriter, 1000);
}

// Simplified scroll animations for minimalist design
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with subtle fade-in
    const animatedElements = document.querySelectorAll(
        '.project-card, .skill-category, .contact-item'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(15px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}


// Navbar Scroll Effects - Simplified
function setupNavbarScrollEffects() {
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Add scrolled class for subtle styling changes
        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Export functions for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeWebsite,
        setupSmoothScrolling,
        setupActiveNavigation,
        setupScrollAnimations,
        setupHeroInteractions,
        setupTypingAnimation,
        setupNavbarScrollEffects,
        showNotification,
        validateEmail
    };
}
