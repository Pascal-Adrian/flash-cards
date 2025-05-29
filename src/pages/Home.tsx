import { useSelector } from 'react-redux';
import { selectTheme } from '../store/themeSlice';

const Home: React.FC = () => {
  const theme = useSelector(selectTheme);

  return (
    <div className='text-amber-300 dark:text-red-500'>
      Current theme: {theme}
    </div>
  );
};

export default Home;
