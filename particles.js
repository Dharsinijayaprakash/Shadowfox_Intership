// Create animated particles
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 20 + 10}s linear infinite;
        `;
        particleContainer.appendChild(particle);
    }
    
    document.body.appendChild(particleContainer);
}

// Mouse trail effect
function createMouseTrail() {
    const trail = [];
    const trailLength = 20;
    
    document.addEventListener('mousemove', (e) => {
        trail.push({ x: e.clientX, y: e.clientY, life: trailLength });
        
        if (trail.length > trailLength) {
            trail.shift();
        }
        
        // Clear previous trail
        document.querySelectorAll('.trail-dot').forEach(dot => dot.remove());
        
        // Create new trail
        trail.forEach((point, index) => {
            const dot = document.createElement('div');
            dot.className = 'trail-dot';
            dot.style.cssText = `
                position: fixed;
                width: ${point.life / 2}px;
                height: ${point.life / 2}px;
                background: rgba(120, 119, 198, ${point.life / trailLength});
                border-radius: 50%;
                left: ${point.x}px;
                top: ${point.y}px;
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
            `;
            document.body.appendChild(dot);
            
            point.life--;
        });
    });
}

// Initialize effects
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    createMouseTrail();
});