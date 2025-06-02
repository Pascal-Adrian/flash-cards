import { useNavigate, useParams } from 'react-router';
import Page from '../components/Page';
import { useCallback, useEffect, useState } from 'react';
import mySets from '../utils/mySets';
import { type Set, type Card } from '../types/sets';
import getRandomSubSet from '../utils/getRadomSubSet';
import FlashCard from '../components/FlashCard';

const Study: React.FC = () => {
  const { setId } = useParams();
  const navigate = useNavigate();
  const [set, setSet] = useState<Set>();
  const [cards, setCards] = useState<Card[]>([]);
  const [currentCard, setCurrentCard] = useState<number>(0);

  useEffect(() => {
    const set = mySets.getById(Number(setId));
    setSet(set);
  }, [setId]);

  const selectCards = () => {
    if (!set) return;

    const subsetLegth = Math.min(set.cards.length, 10);

    const memorizedCards = set?.cards.filter((card) => card.memorized);
    const notMemorizedCards = set?.cards.filter((card) => !card.memorized);
    if (notMemorizedCards?.length < subsetLegth) {
      const randomAdditionalCards = getRandomSubSet(
        memorizedCards,
        subsetLegth - notMemorizedCards.length,
      );
      const shuffledCards = getRandomSubSet(
        [...notMemorizedCards, ...randomAdditionalCards],
        subsetLegth,
      );
      setCards(shuffledCards);
    } else {
      const shuffledCards = getRandomSubSet(notMemorizedCards, subsetLegth);
      setCards(shuffledCards);
    }
  };

  const selectCardsClb = useCallback(selectCards, [set]);

  useEffect(() => {
    selectCardsClb();
  }, [selectCardsClb]);

  const handleButton = (memorized: boolean) => {
    if (!set) return;
    const updatedCards = [...cards];
    updatedCards[currentCard].memorized = memorized;
    setCards(updatedCards);
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      const updatedSet = { ...set, cards: updatedCards };
      mySets.update(updatedSet);
      navigate(`/my-sets/${set?.id}`);
    }
  };

  return (
    <Page>
      <div className='mt-6'>
        <FlashCard
          question={cards[currentCard]?.question}
          answer={cards[currentCard]?.answer}
        />
        <div className='w-full flex items-center justify-center gap-4 mt-6 font-medium'>
          <button
            className='cursor-pointer flex-1/2 px-6 py-4 rounded-md border border-gray-950/10 dark:border-gray-50/10'
            onClick={() => handleButton(false)}
          >
            Not Memorized
          </button>
          <button
            className='cursor-pointer flex-1/2 px-6 py-4 rounded-md bg-gray-950 border-r-gray-950 text-gray-50 hover:bg-gray-800 dark:bg-gray-50 dark:border-gray-50 dark:text-gray-950 dark:hover:bg-gray-200'
            onClick={() => handleButton(true)}
          >
            Memorized
          </button>
        </div>
      </div>
    </Page>
  );
};

export default Study;
