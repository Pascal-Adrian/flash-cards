import { AiOutlineDelete } from 'react-icons/ai';
import type { Set } from '../types/sets';
import { useNavigate } from 'react-router';
import { FiClock } from 'react-icons/fi';
import dayjs from 'dayjs';
import { PiCardsThreeBold } from 'react-icons/pi';

export interface MySetsProps {
  sets: Set[];
  onDelete: (setId: number) => void;
}

const MySets: React.FC<MySetsProps> = ({ sets, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='flex items-center justify-between gap-4'>
        <h2 className='text-2xl font-bold'>My Sets:</h2>
        <button
          className='cursor-pointer px-6 py-4 bg-gray-950 text-gray-50 hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-950 dark:hover:bg-gray-200 rounded-lg font-medium'
          onClick={() => navigate('/my-sets/create')}
        >
          Create a new set
        </button>
      </div>
      <ul className='grid grid-cols-3 gap-4 mt-4'>
        {sets.map((set) => (
          <li
            key={set.id}
            className='p-6 border border-gray-950/10 dark:border-gray-50/10 rounded-lg cursor-pointer '
            onClick={() => set.id && navigate(`/my-sets/${set.id}`)}
          >
            <div className='flex items-center justify-between'>
              <h3 className='text-2xl font-medium'>{set.title}</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (set.id) {
                    onDelete(set.id);
                  }
                }}
                className='p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg'
              >
                <div className='h-5 w-5'>
                  <AiOutlineDelete style={{ width: '100%', height: '100%' }} />
                </div>
              </button>
            </div>
            <div className='h-1 w-20 bg-gray-950 dark:bg-gray-50 rounded-full mt-3' />
            <p className='text-gray-600 dark:text-gray-400 line-clamp-3 mt-2'>
              {set.description}
            </p>
            <div className='flex items-center gap-6 text-gray-800 dark:text-gray-200 mt-4 border-t border-gray-950/10 dark:border-gray-50/10 pt-2'>
              <div className='flex gap-1 items-center'>
                <FiClock />
                <span>
                  Last opened {dayjs(set.last_opened).format('YYYY/MM/DD')}
                </span>
              </div>
              <div className='flex gap-1 items-center'>
                <PiCardsThreeBold />
                <span>{set.cards.length} cards</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MySets;
