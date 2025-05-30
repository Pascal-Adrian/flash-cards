import { PiCardsThreeBold } from 'react-icons/pi';
import type { Set } from '../types/sets';
import { levelsMap } from '../utils/maps';
import Tag from './Tag';
import { BiCategory } from 'react-icons/bi';
import { useNavigate } from 'react-router';

const SetCard: React.FC<Set> = ({
  id,
  title,
  description,
  level,
  category,
  cards,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${id}`);
  };

  return (
    <div
      className='p-6 rounded-lg border border-gray-950/10 dark:border-gray-50/10 cursor-pointer'
      onClick={handleClick}
    >
      <div className='flex items-start justify-between gap-4 mb-3'>
        <h2 className='text-2xl font-medium'>{title}</h2>
        <Tag title={levelsMap[level]} className='mt-1' />
      </div>
      <div className='h-1 bg-gray-950 dark:bg-gray-50 rounded-full w-12 mb-2' />
      <p className='text-gray-600 dark:text-gray-400 line-clamp-3 mb-3'>
        {description}
      </p>
      <div className='flex align-middle gap-6 text-gray-800 dark:text-gray-200 '>
        <div className='flex gap-1 items-center'>
          <PiCardsThreeBold />
          <span>{cards.length} cards</span>
        </div>
        <div className='flex gap-1 items-center'>
          <BiCategory />
          <span>{category.name}</span>
        </div>
      </div>
    </div>
  );
};

export default SetCard;
