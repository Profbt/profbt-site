const toggle = document.querySelector('[data-nav-toggle]');
const menu = document.querySelector('[data-nav-menu]');
const year = document.querySelector('[data-year]');
const rotator = document.querySelector('[data-rotator]');
const backToTop = document.querySelector('[data-back-to-top]');
const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if (year) {
  year.textContent = new Date().getFullYear();
}

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('is-open', !open);
  });

  menu.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
    }
  });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const words = [
  'Professor',
  'Desenvolvedor',
  'Soluções digitais',
  'Sites profissionais',
  'Automações',
  'IA aplicada',
  'Geógrafo Tech',
];

if (rotator) {
  rotator.textContent = prefersReducedMotion ? 'Soluções digitais' : words[2];
}

if (rotator && !prefersReducedMotion) {
  let index = 2;
  window.setInterval(() => {
    rotator.classList.add('is-changing');
    window.setTimeout(() => {
      index = (index + 1) % words.length;
      rotator.textContent = words[index];
      rotator.classList.remove('is-changing');
    }, 220);
  }, 2400);
}

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = `#${entry.target.id}`;
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === id);
      });
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0.01 });

  sections.forEach((section) => observer.observe(section));
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle && menu) {
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  }
});

if (backToTop) {
  const toggleBackToTop = () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 420);
  };

  toggleBackToTop();
  window.addEventListener('scroll', toggleBackToTop, { passive: true });

  backToTop.addEventListener('click', (event) => {
    if (!prefersReducedMotion) {
      event.preventDefault();
      document.querySelector('#inicio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

