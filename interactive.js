// Typing animation for hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// 3D tilt effect for skill cards
function addTiltEffect() {
    const cards = document.querySelectorAll('.skill');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Parallax scrolling effect
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero::after, .hero::before');
        
        document.querySelector('.hero').style.transform = `translateY(${scrolled * 0.5}px)`;
    });
}

// Text reveal animation on scroll
function addScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    });
    
    document.querySelectorAll('h2, .about p, .skill').forEach(el => {
        observer.observe(el);
    });
}

// Magnetic button effect
function addMagneticEffect() {
    const buttons = document.querySelectorAll('.cta-button, .contact-links a');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// Initialize all effects
document.addEventListener('DOMContentLoaded', () => {
    // Typing effect for hero subtitle
    const heroP = document.querySelector('.hero p');
    const originalText = heroP.textContent;
    setTimeout(() => typeWriter(heroP, originalText, 50), 1000);
    
    addTiltEffect();
    addParallaxEffect();
    addScrollReveal();
    addMagneticEffect();
});