import { FiSearch } from 'react-icons/fi';
import Input from '../components/Input';
import Page from '../components/Page';

const Explore: React.FC = () => {
  return (
    <Page>
      <div>
        <Input startIcon={<FiSearch />} placeholder='search here...' />
      </div>
    </Page>
  );
};
export default Explore;
