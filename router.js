import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';

export const route = ref(window.location.pathname.replace(/\/$/, '') || '/');

window.addEventListener('popstate', () => {
  route.value = window.location.pathname.replace(/\/$/, '') || '/';
  window.scrollTo({ top: 0 });
});

document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href]');
  if (!a) return;
  const href = a.getAttribute('href');
  if (href && href.startsWith('/') && !href.startsWith('//') && !a.hasAttribute('target')) {
    e.preventDefault();
    history.pushState(null, '', href);
    route.value = href.replace(/\/$/, '') || '/';
    window.scrollTo({ top: 0 });
  }
});
