import type { Theme } from '../store/themeSlice';

export const getBrowserTheme = (): Theme => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    return storedTheme as Theme;
  } else {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';
    return systemTheme as Theme;
  }
};
