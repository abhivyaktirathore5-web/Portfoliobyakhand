document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navLinks = document.getElementById('nav-links');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Mobile menu toggle logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinksContainer = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinksContainer) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Fade in elements
    const fadeElements = document.querySelectorAll('.timeline-content, .skill-card, .edu-card, .section-title, .about-text');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Achievement Carousel Logic
    const achievementCards = document.querySelectorAll('.achievements-slider .achievement-card');
    const prevBtn = document.getElementById('prev-achievement');
    const nextBtn = document.getElementById('next-achievement');
    let currentAchievementIndex = 0;

    if (achievementCards.length > 0 && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            achievementCards[currentAchievementIndex].classList.remove('active');
            currentAchievementIndex = (currentAchievementIndex - 1 + achievementCards.length) % achievementCards.length;
            achievementCards[currentAchievementIndex].classList.add('active');
        });

        nextBtn.addEventListener('click', () => {
            achievementCards[currentAchievementIndex].classList.remove('active');
            currentAchievementIndex = (currentAchievementIndex + 1) % achievementCards.length;
            achievementCards[currentAchievementIndex].classList.add('active');
        });
    }
});
