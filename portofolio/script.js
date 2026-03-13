// Smooth appearance saat scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Simulasi Klik pada Dots
const dots = document.querySelectorAll('.dot');
dots.forEach(dot => {
    dot.addEventListener('click', function() {
        const parent = this.parentElement;
        parent.querySelector('.dot.active').classList.remove('active');
        this.classList.add('active');
    });
});

// Animasi masuk sederhana untuk kartu
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

function moveSlider(id, pageIndex) {
    const grid = document.getElementById(id);
    const containerWidth = grid.parentElement.offsetWidth;
    
    // Geser grid ke kiri berdasarkan lebar container
    // Jika pageIndex 0 (awal), geser 0. Jika pageIndex 1, geser sejauh lebar container.
    grid.style.transform = `translateX(-${pageIndex * (containerWidth + 30)}px)`;

    // Update warna titik (dots) yang aktif
    const section = grid.closest('.container');
    const dots = section.querySelectorAll('.dot');
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[pageIndex].classList.add('active');
}