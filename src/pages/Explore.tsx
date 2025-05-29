import { FiSearch } from 'react-icons/fi';
import Input from '../components/Input';
import Page from '../components/Page';
// @ts-expect-error: categories is mocked data
import categories from '../mock/categories';
import { useState } from 'react';
import type { SelectValue } from '../components/Select';
import Select from '../components/Select';

const Explore: React.FC = () => {
  const [category, setCategory] = useState<SelectValue>();

  const handleCategoryChange = (value: SelectValue) => {
    setCategory(value);
  };

  // @ts-expect-error: categories is mocked data
  const categoryOptions = categories.map((cat) => ({
    label: cat.name,
    value: cat.id,
  }));

  return (
    <Page>
      <div>
        <Input startIcon={<FiSearch />} placeholder='search here...' />
        <Select
          options={categoryOptions}
          value={category}
          onChange={handleCategoryChange}
          placeholder='Select a category'
        />
      </div>
      <div></div>
    </Page>
  );
};
export default Explore;
