import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setTheme } from '../store/themeSlice';

const useThemeWatch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const browserMatch = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = (event: MediaQueryListEvent) => {
      const localTheme = localStorage.getItem('theme');
      if (!localTheme) {
        const browserTheme = event.matches ? 'dark' : 'light';
        dispatch(setTheme(browserTheme));
      }
    };
    browserMatch.addEventListener('change', handleThemeChange);
  });
};

export default useThemeWatch;
