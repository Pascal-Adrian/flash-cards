import useThemeWatch from '../hooks/useThemeWatch';

const ThemeWatcher: React.FC<React.PropsWithChildren> = ({ children }) => {
  useThemeWatch();

  return children;
};

export default ThemeWatcher;
