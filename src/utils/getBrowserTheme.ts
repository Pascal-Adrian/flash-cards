import type { Theme } from '../store/themeSlice';

export const getBrowserTheme = (): Theme => {
  let theme = localStorage.getItem('theme') as Theme;

  if (!theme) {
    const browserMatch = window.matchMedia('(prefers-color-scheme: dark)');
    theme = browserMatch.matches ? 'dark' : 'light';
  }

  document.documentElement.classList.toggle('dark', theme === 'dark');

  return theme;
};
