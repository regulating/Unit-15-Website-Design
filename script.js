// script.js

document.addEventListener('DOMContentLoaded', () => {
    const elementsToBlur = document.querySelectorAll('.blur-transition');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('is-blurred');
            } else {
                entry.target.classList.add('is-blurred');
            }
        });
    }, observerOptions);

    elementsToBlur.forEach(element => {
        observer.observe(element);
    });
});
