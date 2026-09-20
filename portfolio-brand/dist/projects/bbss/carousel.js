(() => {
  const carousel = document.querySelector('.bbss-page #work .bbss-carousel');
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll('.bbss-slide')];
  let current = 0;
  const stage = carousel.querySelector('.bbss-carousel-stage');
  const positionArrows = () => {
    const screen = slides[current].querySelector('.bbss-screen').getBoundingClientRect();
    stage.style.setProperty('--bbss-arrow-top', `${screen.top - stage.getBoundingClientRect().top + screen.height / 2}px`);
  };
  new ResizeObserver(positionArrows).observe(stage);
  const show = direction => {
    current = (current + direction + slides.length) % slides.length;
    slides.forEach((slide, index) => { slide.hidden = index !== current; });
    positionArrows();
  };
  carousel.querySelector('.bbss-carousel-prev').addEventListener('click', () => show(-1));
  carousel.querySelector('.bbss-carousel-next').addEventListener('click', () => show(1));
  carousel.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(event.key === 'ArrowRight' ? 1 : -1);
    }
  });
  let touch = null;
  carousel.addEventListener('touchstart', event => {
    touch = event.touches.length === 1 && event.target.closest('.bbss-screen')
      ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
  }, { passive: true });
  carousel.addEventListener('touchend', event => {
    if (!touch || event.touches.length) { touch = null; return; }
    const end = event.changedTouches[0];
    const dx = end.clientX - touch.x, dy = end.clientY - touch.y;
    touch = null;
    if (Math.abs(dx) >= 60 && Math.abs(dx) > Math.abs(dy) * 1.5) show(dx < 0 ? 1 : -1);
  }, { passive: true });
  carousel.addEventListener('touchcancel', () => { touch = null; }, { passive: true });
  let wheelDelta = 0, lastWheel = 0, wheelLocked = false;
  carousel.addEventListener('wheel', event => {
    if (!event.target.closest('.bbss-screen') || event.ctrlKey || Math.abs(event.deltaX) <= Math.abs(event.deltaY) * 1.5) return;
    event.preventDefault();
    const now = performance.now();
    if (now - lastWheel > 180) { wheelDelta = 0; wheelLocked = false; }
    lastWheel = now;
    if (wheelLocked) return;
    wheelDelta += event.deltaX * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? 500 : 1);
    if (Math.abs(wheelDelta) >= 60) { show(wheelDelta > 0 ? 1 : -1); wheelLocked = true; }
  }, { passive: false });
})();
