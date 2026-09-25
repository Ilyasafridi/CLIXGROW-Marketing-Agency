// mobile nav toggle
const burger = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');
const headerEl = document.querySelector('header');
if (burger) {
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    headerEl.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    headerEl.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }));
}

// highlight the nav link for the section currently in view
const navAnchors = document.querySelectorAll('nav.links a[href^="#"]');
const sections = Array.from(navAnchors)
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);
if ('IntersectionObserver' in window && sections.length) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
      }
    });
  }, { threshold: 0.4, rootMargin: '-80px 0px -60% 0px' });
  sections.forEach(s => spy.observe(s));
}

// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = (i % 4) * 0.08 + 's';
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}
