import sets from '../mock/sets.json';

const getSet = (setId: number) => {
  const set = sets.find((s) => s.id === setId);

  if (!set) {
    throw new Error(`Set with id ${setId} not found`);
  }

  return set;
};

export default getSet;
