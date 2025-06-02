import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, setTheme } from '../store/themeSlice';
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeButton: React.FC = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    dispatch(setTheme(newTheme));
  };

  return (
    <button
      className='cursor-pointer p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-900'
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <FiMoon /> : <FiSun />}
    </button>
  );
};

export default ThemeButton;
