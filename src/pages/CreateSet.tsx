import { useNavigate } from 'react-router';
import Page from '../components/Page';
import SetForm from '../components/SetForm';
import type { Set } from '../types/sets';
import mySets from '../utils/mySets';

const CreateSet: React.FC = () => {
  const navigate = useNavigate();

  const onSubmit = (set: Set) => {
    const result = mySets.create(set);
    if (result) {
      navigate(`/my-sets/${result.id}`);
    } else {
      console.error('Failed to create the set');
    }
  };

  return (
    <Page>
      <SetForm onSubmit={onSubmit} />
    </Page>
  );
};

export default CreateSet;
