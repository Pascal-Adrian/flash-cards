import type { Set } from '../types/sets';

const mySets = {
  add: (set: Set) => {
    const sets = JSON.parse(localStorage.getItem('mySets') || '[]');

    if (sets.find((s: Set) => s.id === set.id)) {
      return;
    }

    const updatedSet = set;
    updatedSet.last_opened = new Date().toISOString();
    sets.push(updatedSet);
    localStorage.setItem('mySets', JSON.stringify(sets));
  },
  remove: (setId: number) => {
    const sets = JSON.parse(localStorage.getItem('mySets') || '[]');
    const updatedSets = sets.filter((set: Set) => set.id !== setId);
    localStorage.setItem('mySets', JSON.stringify(updatedSets));
  },
  getById: (setId: number): Set | undefined => {
    const sets = JSON.parse(localStorage.getItem('mySets') || '[]');
    return sets.find((set: Set) => set.id === setId);
  },
  getAll: (): Set[] => {
    return JSON.parse(localStorage.getItem('mySets') || '[]');
  },
  update: (set: Set) => {
    const sets = JSON.parse(localStorage.getItem('mySets') || '[]');
    const index = sets.findIndex((s: Set) => s.id === set.id);

    if (index === -1) {
      return;
    }

    const cards = set.cards.map((card, index) => ({
      ...card,
      id: card.id || Math.floor(Math.random() * 1000000) + index,
    }));

    const updatedSet = {
      ...set,
      last_opened: new Date().toISOString(),
      cards,
    };

    sets[index] = updatedSet;
    localStorage.setItem('mySets', JSON.stringify(sets));

    return updatedSet;
  },
  create: (set: Set) => {
    const sets = JSON.parse(localStorage.getItem('mySets') || '[]');
    const newSet = {
      ...set,
      id: Math.floor(Math.random() * 1000000),
      last_opened: new Date().toISOString(),
      cards: set.cards.map((card, index) => ({
        ...card,
        id: card.id || Math.floor(Math.random() * 1000000) + index,
      })),
    };

    sets.push(newSet);
    localStorage.setItem('mySets', JSON.stringify(sets));

    return newSet;
  },
};

export default mySets;
