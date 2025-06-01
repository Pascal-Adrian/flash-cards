import { useEffect, useState } from 'react';
import Page from '../components/Page';
import type { Set } from '../types/sets';
import getSet from '../utils/getSet';
import { useNavigate, useParams } from 'react-router';
import mySets from '../utils/mySets';

const SetPage: React.FC = () => {
  const { setId } = useParams();
  const navigate = useNavigate();
  const [set, setSet] = useState<Set>();

  useEffect(() => {
    const set = getSet(Number(setId));
    setSet(set);
  }, [setId]);

  const handleSetAddMySets = () => {
    if (!set) return;
    mySets.add(set);
    navigate(`/my-sets/${set.id}`);
  };

  return (
    <Page>
      <div className='mt-6'>
        <div className='flex items-center justify-between'>
          <h2 className='text-4xl font-bold'>{set?.title}</h2>
          <button
            className='cursor-pointer w-fit px-6 py-4 font-bold bg-gray-950 text-gray-50 hover:bg-gray-800 active:bg-gray-950 dark:bg-gray-50 dark:text-gray-950 dark:hover:bg-gray-200 dark:active:bg-gray-50 rounded-lg'
            onClick={handleSetAddMySets}
          >
            Save & Start Studying
          </button>
        </div>
        <div className='h-[0.375rem] w-20 bg-gray-950 dark:bg-gray-50 rounded-full mt-6' />
        <p className='mt-3'>{set?.description}</p>
      </div>
      <div className='grid grid-cols-3 auto-rows-fr gap-4 mt-4'>
        {set?.cards.map((card) => (
          <div
            className='p-6 border border-gray-950/10 dark:border-gray-50/10 rounded-lg'
            key={card.id}
          >
            <h3 className='text-xl font-medium'>{card.question}</h3>
            <p className='text-gray-600 dark:text-gray-400 mt-3'>
              {card.answer}
            </p>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default SetPage;
