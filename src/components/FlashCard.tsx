import { useState } from 'react';

export interface FlashCardProps {
  question: string;
  answer: string;
}

const FlashCard: React.FC<FlashCardProps> = ({ question, answer }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div
      className='cursor-pointer group w-full h-96 [perspective:1000px]'
      onClick={handleClick}
    >
      <div
        className={`relative h-full w-full font-semibold text-center rounded-xl border border-gray-950/10 dark:border-gray-50/10 shadow-sm transition-all duration-500 [transform-style:preserve-3d] ${show ? '[transform:rotateX(180deg)]' : ''}`}
      >
        <div className='absolute inset-0 flex items-center justify-center px-16 py-8 text-4xl h-full w-full rounded-xl [backface-visibility:hidden]'>
          {question}
        </div>
        <div className='absolute inset-0 flex items-center justify-center px-16 py-8 text-2xl h-full w-full bg-gray-200 dark:bg-gray-800 rounded-xl [transform:rotateX(180deg)] [backface-visibility:hidden]'>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
