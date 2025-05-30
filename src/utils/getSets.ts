import type { Set } from '../types/sets';
import sets from '../mock/sets.json';

export interface GetSetsParams {
  skip?: number;
  limit?: number;
  search?: string;
  category?: number;
  level?: number;
}

const getSets = ({
  skip,
  limit,
  search,
  category,
  level,
}: GetSetsParams): Set[] => {
  let filteredSets = sets;

  if (search) {
    filteredSets = filteredSets.filter((set) =>
      set.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  if (category) {
    filteredSets = filteredSets.filter((set) => set.category.id === category);
  }

  if (level) {
    filteredSets = filteredSets.filter((set) => set.level === level);
  }

  if (skip !== undefined && limit !== undefined) {
    filteredSets = filteredSets.slice(skip, skip + limit);
  }

  return filteredSets;
};

export default getSets;
