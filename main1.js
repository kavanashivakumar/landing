const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

/* Close menu when a link is clicked */
navLinks.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
    }
});
