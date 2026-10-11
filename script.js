const navigationLinks = [...document.querySelectorAll('.nav-links a')];
const sections = navigationLinks.map(link => document.querySelector(link.hash));

function updateNavigation() {
  const offset = document.querySelector('.site-header').offsetHeight + 55;
  let activeSection = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= offset) activeSection = section;
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 5) {
    activeSection = sections[sections.length - 1];
  }
  for (const link of navigationLinks) {
    if (link.hash === `#${activeSection.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}

window.addEventListener('scroll', updateNavigation, { passive: true });
window.addEventListener('resize', updateNavigation);
updateNavigation();
