const menu = document.querySelector('.menu-toggle');
const rail = document.querySelector('.rail');
function closeMenu() { rail?.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); }
menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); rail.classList.toggle('open', open); });
rail?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && rail?.classList.contains('open')) { closeMenu(); menu.focus(); } });
const sections = [...document.querySelectorAll('.observed')];
const links = [...document.querySelectorAll('.rail nav a')];
let scheduled = false;
function updateNavigation() { scheduled = false; let current = sections[0]; for (const section of sections) if (section.getBoundingClientRect().top <= Math.min(innerHeight * .35, 240)) current = section; if (innerHeight + scrollY >= document.documentElement.scrollHeight - 3) current = sections.at(-1); links.forEach(a => { if (a.hash === '#' + current?.id) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); }); }
function scheduleNavigation() { if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); } }
addEventListener('scroll', scheduleNavigation, { passive: true }); addEventListener('resize', scheduleNavigation); updateNavigation();
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectCase(index, focus = false) { tabs.forEach((tab, i) => { tab.setAttribute('aria-selected', String(i === index)); tab.tabIndex = i === index ? 0 : -1; document.getElementById(tab.getAttribute('aria-controls')).hidden = i !== index; }); if (focus) tabs[index].focus(); }
tabs.forEach((tab, index) => { tab.addEventListener('click', () => selectCase(index)); tab.addEventListener('keydown', e => { let next; if (e.key === 'ArrowRight') next = (index + 1) % tabs.length; if (e.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length; if (e.key === 'Home') next = 0; if (e.key === 'End') next = tabs.length - 1; if (next !== undefined) { e.preventDefault(); selectCase(next, true); } }); });
document.querySelectorAll('[data-case]').forEach(link => link.addEventListener('click', () => { selectCase(Number(link.dataset.case)); requestAnimationFrame(() => tabs[Number(link.dataset.case)]?.focus({ preventScroll: true })); }));
