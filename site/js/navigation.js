/**
 * Navigation — scroll-based section highlighting, smooth scroll,
 * scroll progress bar, hamburger menu, and scroll-reveal animations.
 */

export function initNavigation() {
  const nav = document.getElementById('main-nav');
  const links = nav.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('.section');
  const progressBar = document.getElementById('scroll-progress');
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');

  // ── Smooth scroll on nav link click ──
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu
        if (navLinks.classList.contains('nav__links--open')) {
          closeMobileMenu();
        }
      }
    });
  });

  // ── Hamburger menu toggle ──
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('nav__links--open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    navLinks.classList.add('nav__links--open');
    hamburger.classList.add('nav__hamburger--open');
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMobileMenu() {
    navLinks.classList.remove('nav__links--open');
    hamburger.classList.remove('nav__hamburger--open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  // ── Scroll progress bar ──
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = progress + '%';
    }
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // ── Intersection Observer for active section ──
  const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 60;

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(link => {
            link.classList.toggle(
              'nav__link--active',
              link.dataset.section === id
            );
          });
        }
      });
    },
    {
      rootMargin: `-${navHeight + 20}px 0px -60% 0px`,
      threshold: 0
    }
  );

  sections.forEach(section => sectionObserver.observe(section));

  // ── Scroll-reveal animations ──
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    }
  );

  revealElements.forEach(el => revealObserver.observe(el));
}
