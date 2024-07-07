
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar_toggle');
    const navbarLinks = document.querySelector('.navbar__links');

    navbarToggle.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
    });
});
