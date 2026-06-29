// Splash screen logic
// - scroll down (native or button) exits the splash
// - scrolling back hides nav and main (fresh-entry feel)
export function initSplash() {
  const splashEl = document.getElementById('splash');
  const mainEl   = document.getElementById('main');
  const navEl    = document.getElementById('nav');
  const anchor   = document.getElementById('main-anchor');
  const arrow    = document.getElementById('splashArrow');

  if (!splashEl || !mainEl || !navEl) return;

  const THRESHOLD = 0.6; // fraction of vh to cross before showing main

  function showMain(smooth = true) {
    mainEl.classList.add('visible');
    navEl.classList.add('visible');
    if (smooth && anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (arrow) {
    arrow.addEventListener('click', e => {
      e.preventDefault();
      showMain(true);
    });
  }

  window.addEventListener('scroll', () => {
    const pastSplash = window.scrollY > window.innerHeight * THRESHOLD;

    if (pastSplash) {
      mainEl.classList.add('visible');
      navEl.classList.add('visible');
      navEl.classList.toggle('scrolled', window.scrollY > window.innerHeight + 60);
    } else {
      navEl.classList.remove('visible', 'scrolled');
      mainEl.classList.remove('visible');
    }
  }, { passive: true });
}
