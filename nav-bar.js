function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

const links = document.querySelectorAll('.nav-links li a');
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});