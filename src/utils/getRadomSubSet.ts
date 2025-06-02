const getRandomSubSet = <T>(array: T[], size: number): T[] => {
  if (size > array.length) {
    throw new Error('Size must not be greater than the array length');
  }

  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, size);
};

export default getRandomSubSet;
