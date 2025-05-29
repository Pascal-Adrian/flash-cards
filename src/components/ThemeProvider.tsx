import { useSelector } from 'react-redux';
import { selectTheme } from '../store/themeSlice';
import useThemeWatch from '../hooks/useThemeWatch';

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const theme = useSelector(selectTheme);

  useThemeWatch();

  return <div className={`${theme === 'dark' ? 'dark' : ''}`}>{children}</div>;
};

export default ThemeProvider;
