const toggle = document.querySelector('[data-nav-toggle]');
const menu = document.querySelector('[data-nav-menu]');
const year = document.querySelector('[data-year]');
const links = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
const sections = links
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

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = `#${entry.target.id}`;
      links.forEach((link) => {
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
