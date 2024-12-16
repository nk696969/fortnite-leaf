window.addEventListener('scroll', function() {
    const contentSection = document.querySelector('.content-section');
    const sectionTop = contentSection.offsetTop;
    const sectionHeight = contentSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > sectionTop + sectionHeight / 2) {
        contentSection.style.opacity = 1;
        contentSection.style.transform = 'translateY(0)';
    }
});
