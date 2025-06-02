import { useEffect, useState } from 'react';
import Page from '../components/Page';
import { type Card, type Set } from '../types/sets';
import mySets from '../utils/mySets';
import { useNavigate, useParams } from 'react-router';
import { FiEdit3 } from 'react-icons/fi';

const MySet: React.FC = () => {
  const { setId } = useParams();
  const navigate = useNavigate();
  const [set, setSet] = useState<Set>();
  const [memorized, setMemorized] = useState<boolean>();
  const [counters, setCounters] = useState<{ [key: string]: number }>({
    all: 0,
    memorized: 0,
    notMemorized: 0,
  });
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const set = mySets.getById(Number(setId));

    if (!set) {
      navigate('/my-sets');
      return;
    }
    setSet(set);
    setCards(set.cards);
  }, [setId, navigate]);

  useEffect(() => {
    if (!set) return;

    const counters = {
      all: set.cards.length,
      memorized: set.cards.filter((card) => card.memorized).length,
      notMemorized: set.cards.filter((card) => !card.memorized).length,
    };

    setCounters(counters);
  }, [set]);

  const handleCardListButtonClick = (memorized?: boolean) => {
    if (!set) return;

    if (memorized === undefined) {
      setMemorized(undefined);
      setCards(set.cards);
    } else {
      setMemorized(memorized);
      setCards(set.cards.filter((card) => card.memorized === memorized));
    }
  };

  return (
    <Page>
      <div className='mt-6'>
        <div className='flex items-center justify-between'>
          <h2 className='text-4xl font-bold'>{set?.title}</h2>
          <button
            className='cursor-pointer flex items-center gap-2 px-6 py-2 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900'
            onClick={() => navigate(`/my-sets/${set?.id}/edit`)}
          >
            <FiEdit3 style={{ width: '100%', height: '100%' }} />
            Edit
          </button>
        </div>
        <div className='h-[0.375rem] w-20 bg-gray-950 dark:bg-gray-50 rounded-full mt-6' />
        <p className='mt-3'>{set?.description}</p>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <button
          className={`cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 ${memorized === undefined ? 'bg-gray-200 dark:bg-gray-800' : ''}`}
          onClick={() => handleCardListButtonClick()}
        >
          All ({counters.all})
        </button>
        {counters.memorized > 0 && (
          <button
            className={`cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 ${memorized ? 'bg-gray-200 dark:bg-gray-800' : ''}`}
            onClick={() => handleCardListButtonClick(true)}
          >
            Memorized ({counters.memorized})
          </button>
        )}
        {counters.notMemorized > 0 && (
          <button
            className={`cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 ${memorized === false ? 'bg-gray-200 dark:bg-gray-800' : ''}`}
            onClick={() => handleCardListButtonClick(false)}
          >
            Not Memorized ({counters.notMemorized})
          </button>
        )}
        <button
          className='cursor-pointer ml-auto px-8 py-2 font-medium rounded-lg bg-gray-950 text-gray-50 hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-950 dark:hover:bg-gray-200'
          onClick={() => navigate(`/my-sets/${set?.id}/study`)}
        >
          Study
        </button>
      </div>
      <div className='grid grid-cols-3 auto-rows-fr gap-4 mt-4'>
        {cards.map((card) => (
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
