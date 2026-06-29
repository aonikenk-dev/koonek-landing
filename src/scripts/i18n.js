// Language switch — ES / EN
export function initLang() {
  const STORAGE_KEY = 'koonek-lang';

  function setLang(lang) {
    document.body.setAttribute('data-lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.toggle === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.toggle));
  });

  // init from storage or browser preference
  const saved = localStorage.getItem(STORAGE_KEY);
  const auto  = navigator.language.startsWith('en') ? 'en' : 'es';
  setLang(saved || auto);
}
