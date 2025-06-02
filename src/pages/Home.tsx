import { useEffect, useState } from 'react';
import Page from '../components/Page';
import mySets from '../utils/mySets';
import type { Set } from '../types/sets';
import HomePlaceholder from '../components/HomePlaceholder';
import MySets from '../components/MySets';

const Home: React.FC = () => {
  const [sets, setSets] = useState<Set[]>([]);

  useEffect(() => {
    fetchSets();
  }, []);

  const fetchSets = () => {
    const sets = mySets.getAll();
    setSets(sets);
  };

  const handleDelete = (setId: number) => {
    mySets.remove(setId);
    fetchSets();
  };

  return (
    <Page>
      {sets.length > 0 ? (
        <MySets sets={sets} onDelete={handleDelete} />
      ) : (
        <HomePlaceholder />
      )}
    </Page>
  );
};

export default Home;
