import { TbCardsFilled } from 'react-icons/tb';
import ThemeButton from './ThemeButton';
import { Link, useLocation } from 'react-router';

const Header: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/explore',
      label: 'Explore',
    },
    {
      path: '/my-cards',
      label: 'My Cards',
    },
  ];

  return (
    <header className='px-8 py-2 flex items-center justify-between gap-8 border-b border-gray-950/10 dark:border-gray-50/10'>
      <div className='flex items-center gap-2'>
        <span className='w-8 h-8'>
          <TbCardsFilled style={{ width: '100%', height: '100%' }} />
        </span>
        <h1 className='text-2xl font-semibold'>Flash Cards</h1>
      </div>
      <nav className='mr-auto'>
        <ul className='flex gap-2'>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                className={`px-2 pt-3 pb-2 flex items-center justify-center hover:text-gray-950 dark:hover:text-gray-50 ${location.pathname === link.path ? 'text-gray-950 dark:text-gray-50' : 'text-gray-400 dark:text-gray-600'}`}
                to={link.path}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
