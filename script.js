document.addEventListener('DOMContentLoaded', () => {

// --- Navbar Scroll Effect ---
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
if (window.scrollY > 20) {
navbar.classList.add('nav-scrolled');
} else {
navbar.classList.remove('nav-scrolled');
}
});

// --- Intersection Observer for Fade-in Animations ---
const observerOptions = {
root: null,
rootMargin: '0px',
threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
observer.unobserve(entry.target); // Only animate once
}
});
}, observerOptions);

const fadeElements = document.querySelectorAll('.fade-in-section');
fadeElements.forEach(el => observer.observe(el));

// --- Smooth Scroll for Anchor Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const targetId = this.getAttribute('href');
if (targetId === '#') return;
const targetElement = document.querySelector(targetId);
if (targetElement) {
// Account for fixed navbar height
const headerOffset = 80;
const elementPosition = targetElement.getBoundingClientRect().top;
const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

window.scrollTo({
top: offsetPosition,
behavior: "smooth"
});
}
});
});
});
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('menu-icon');

  function openMenu() {
    menu.classList.add('open');
    icon.textContent = '✕';
  }

  function closeMenu() {
    menu.classList.remove('open');
    icon.textContent = '☰';
  }

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });
});
