const preferenceKey = 'portfolio-theme';
const mediaQuery = '(prefers-color-scheme: light)';

function savedTheme() {
  try { const theme = localStorage.getItem(preferenceKey); return ['light', 'dark'].includes(theme) ? theme : null; }
  catch { return null; }
}
export function currentTheme() {
  return savedTheme() || (window.matchMedia(mediaQuery).matches ? 'light' : 'dark');
}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#ffffff' : '#0b0d0c');
  window.dispatchEvent(new Event('portfolio-theme-change'));
}
export function setTheme(theme) {
  try { localStorage.setItem(preferenceKey, theme); } catch { /* The theme still works when storage is unavailable. */ }
  applyTheme(theme);
}
export function initializeTheme() {
  applyTheme(currentTheme());
  window.matchMedia(mediaQuery).addEventListener('change', () => { if (!savedTheme()) applyTheme(currentTheme()); });
  window.addEventListener('storage', event => { if (event.key === preferenceKey || event.key === null) applyTheme(currentTheme()); });
}
