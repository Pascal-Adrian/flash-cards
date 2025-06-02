import { TbCardsFilled } from 'react-icons/tb';
import { useNavigate } from 'react-router';

const HomePlaceholder: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateSet = () => {
    navigate('/my-sets/create');
  };

  const handleExploreSets = () => {
    navigate('/sets');
  };

  return (
    <div className='w-full h-full flex items-center justify-center text-center my-auto mt-[20vh]'>
      <div className='flex flex-col items-center gap-4 p-16 border border-gray-950/10 dark:border-gray-50/10 rounded-2xl'>
        <div className='w-16 h-16'>
          <TbCardsFilled style={{ width: '100%', height: '100%' }} />
        </div>
        <div>
          <h2 className='text-6xl font-bold'>Flash Card App</h2>
          <p className='text-gray-400 dark:text-gray-600'>by Pascal Adrian</p>
        </div>
        <p className='text-lg dark:text-gray-300'>
          Create your own flash cards and study them.
        </p>
        <div className='flex gap-4 font-medium mt-4'>
          <button
            className='cursor-pointer px-6 py-4 rounded-md border border-gray-950/10 dark:border-gray-50/10'
            onClick={handleCreateSet}
          >
            Create Set
          </button>
          <button
            className='cursor-pointer px-6 py-4 rounded-md bg-gray-950 text-gray-50 hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-950 hover:dark:bg-gray-200 transition-colors'
            onClick={handleExploreSets}
          >
            Explore Sets
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePlaceholder;
