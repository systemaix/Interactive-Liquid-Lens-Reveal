const bg = document.querySelector('.bg-image');
const wrapper = document.querySelector('.mask-wrapper');

// Create liquid trailing blobs
const blobs = Array.from({ length: 5 }).map(() => {
    const b = document.createElement('div');
    b.className = 'cursor-light';
    wrapper.appendChild(b);
    return { element: b, x: 0, y: 0 };
});

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    
    // Update the CSS Mask position
    bg.style.setProperty('--x', `${clientX}px`);
    bg.style.setProperty('--y', `${clientY}px`);

    // Animate trailing blobs with lerp (Linear Interpolation)
    blobs.forEach((blob, index) => {
        const delay = (index + 1) * 0.1;
        
        // Simple smoothing
        blob.x += (clientX - blob.x) * delay;
        blob.y += (clientY - blob.y) * delay;

        blob.element.style.transform = `translate(${blob.x}px, ${blob.y}px)`;
    });
});
