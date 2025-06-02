export type Tag = {
  id: number;
  name: string;
  color: string;
};

export type Category = {
  id: number;
  name: string;
};

export type Card = {
  id?: number;
  question: string;
  answer: string;
  memorized: boolean;
};

export type Set = {
  id?: number;
  title: string;
  description: string;
  last_opened: string | null;
  level: number;
  category?: Category;
  tags: Tag[];
  cards: Card[];
};
