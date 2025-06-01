import { useEffect, useState } from 'react';
import Page from '../components/Page';
import { type Card, type Set } from '../types/sets';
import mySets from '../utils/mySets';
import { useParams } from 'react-router';
import { FiEdit3 } from 'react-icons/fi';

const MySet: React.FC = () => {
  const { setId } = useParams();
  const [set, setSet] = useState<Set>();
  const [cardLists, setCardLists] = useState<{ [key: string]: Card[] }>({
    all: [],
    memorized: [],
    notMemorized: [],
  });
  const [currentCardList, setCurrentCardList] = useState<string>('all');

  useEffect(() => {
    const set = mySets.getById(Number(setId));

    setSet(set);
  }, [setId]);

  useEffect(() => {
    if (!set) return;

    const cardLists: { [key: string]: Card[] } = {
      all: set.cards,
      memorized: set.cards.filter((card) => card.memorized),
      notMemorized: set.cards.filter((card) => !card.memorized),
    };

    setCardLists(cardLists);
  }, [set]);

  const handleCardListButtonClick = (
    type: 'all' | 'memorized' | 'notMemorized',
  ) => {
    setCurrentCardList(type);
  };

  return (
    <Page>
      <div className='mt-6'>
        <div className='flex items-center justify-between'>
          <h2 className='text-4xl font-bold'>{set?.title}</h2>
          <button className='cursor-pointer flex items-center gap-2 px-6 py-2 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900'>
            <FiEdit3 style={{ width: '100%', height: '100%' }} />
            Edit
          </button>
        </div>
        <div className='h-[0.375rem] w-20 bg-gray-950 dark:bg-gray-50 rounded-full mt-6' />
        <p className='mt-3'>{set?.description}</p>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <button
          className={`cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 ${currentCardList === 'all' ? 'bg-gray-200 dark:bg-gray-800' : ''}`}
          onClick={() => handleCardListButtonClick('all')}
        >
          All ({cardLists.all.length})
        </button>
        {cardLists.memorized.length > 0 && (
          <button
            className={`cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 ${currentCardList === 'memorized' ? 'bg-gray-200 dark:bg-gray-800' : ''}`}
            onClick={() => handleCardListButtonClick('memorized')}
          >
            Memorized ({cardLists.memorized.length})
          </button>
        )}
        {cardLists.notMemorized.length > 0 && (
          <button
            className={`cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 ${currentCardList === 'notMemorized' ? 'bg-gray-200 dark:bg-gray-800' : ''}`}
            onClick={() => handleCardListButtonClick('notMemorized')}
          >
            Not Memorized ({cardLists.notMemorized.length})
          </button>
        )}
        <button className='cursor-pointer ml-auto px-8 py-2 font-medium rounded-lg bg-gray-950 text-gray-50 hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-950 dark:hover:bg-gray-200'>
          Study
        </button>
      </div>
      <div className='grid grid-cols-3 auto-rows-fr gap-4 mt-4'>
        {cardLists[currentCardList].map((card) => (
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

export default MySet;
