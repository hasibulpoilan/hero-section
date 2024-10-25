// GSAP Animation for Hero Section
window.addEventListener('load', () => {
    gsap.fromTo('.hero-title', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo('.hero-subtitle', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
    );

    // Delay and stagger images so they "float" in sequence
    gsap.fromTo('.hero-img', 
        { scale: 0.8, opacity: 0, y: 20 }, 
        { scale: 1, opacity: 1, y: 0, duration: 1, stagger: 0.3, delay: 0.6, ease: "power3.out" }
    );
});


// Mouse movement effect (fine-tuned for subtlety)
const heroImages = document.querySelectorAll('.hero-img');

// Enhanced Mouse Movement Effect
heroImages.forEach(img => {
    img.addEventListener('mousemove', (e) => {
        const rect = img.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.2;

        gsap.to(img, {
            x: x, 
            y: y,
            duration: 0.5,
            ease: "power2.out",
            overwrite: true,
        });
    });

    img.addEventListener('mouseleave', () => {
        gsap.to(img, { x: 0, y: 0, duration: 0.5, ease: "power2.out" });
    });
});


// Parallax Scrolling Effect
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    // Adjusting parallax intensity for each layer
    gsap.to('.layer1', { y: scrollPosition * 0.3, ease: "none" });
    gsap.to('.layer2', { y: scrollPosition * 0.2, ease: "none" });
    gsap.to('.layer3', { y: scrollPosition * 0.1, ease: "none" });
});

// Fade-in Animation on Load for Hero Section
window.addEventListener('load', () => {
    gsap.to('.hero-title, .hero-subtitle, .hero-img', {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power1.out"
    });
});
