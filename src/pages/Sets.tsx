import { FiSearch } from 'react-icons/fi';
import Input from '../components/Input';
import categories from '../mock/categories.json';
import { levelsMap } from '../utils/maps';
import { useEffect, useState } from 'react';
import type { SelectValue } from '../components/Select';
import Select from '../components/Select';
import getSets from '../utils/getSets';
import type { Set } from '../types/sets';
import SetCard from '../components/SetCard';
import Page from '../components/Page';

const Sets: React.FC = () => {
  const [sets, setSets] = useState<Set[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<SelectValue>();
  const [level, setLevel] = useState<SelectValue>();

  useEffect(() => {
    const sets = getSets({
      search: search ? search.trim() : undefined,
      category: category ? Number(category) : undefined,
      level: level ? Number(level) : undefined,
    });

    setSets(sets);
  }, [search, category, level]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (value: SelectValue) => {
    setCategory(value);
  };

  const handleLevelChange = (value: SelectValue) => {
    setLevel(value);
  };

  const categoryOptions = categories.map((cat) => ({
    label: cat.name,
    value: cat.id,
  }));

  const levelOptions = Object.entries(levelsMap).map(([key, value]) => ({
    label: value,
    value: key,
  }));

  return (
    <Page>
      <div className='flex items-center gap-4'>
        <Input
          startIcon={<FiSearch />}
          placeholder='search here...'
          className='w-full'
          value={search}
          onChange={handleSearchChange}
        />
        <Select
          options={categoryOptions}
          value={category}
          onChange={handleCategoryChange}
          className='w-56'
          placeholder='All Categories'
        />
        <Select
          options={levelOptions}
          value={level}
          onChange={handleLevelChange}
          className='w-56'
          placeholder='All Levels'
        />
      </div>
      <div className='mt-4 grid grid-cols-3 gap-4'>
        {sets.map((set) => (
          <SetCard key={set.id} {...set} />
        ))}
      </div>
    </Page>
  );
};
export default Sets;
