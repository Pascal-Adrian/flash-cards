import { useNavigate, useParams } from 'react-router';
import Page from '../components/Page';
import { useEffect, useState } from 'react';
import type { Set } from '../types/sets';
import mySets from '../utils/mySets';
import SetForm from '../components/SetForm';

const EditSet: React.FC = () => {
  const { setId } = useParams();
  const navigate = useNavigate();
  const [set, setSet] = useState<Set>();

  useEffect(() => {
    const set = mySets.getById(Number(setId));

    setSet(set);
  }, [setId]);

  const onSubmit = (updatedSet: Set) => {
    const result = mySets.update(updatedSet);

    if (result) {
      navigate(`/my-sets/${result.id}`);
    } else {
      console.error('Failed to update the set');
    }
  };

  return <Page>{set && <SetForm set={set} onSubmit={onSubmit} />}</Page>;
};

export default EditSet;
