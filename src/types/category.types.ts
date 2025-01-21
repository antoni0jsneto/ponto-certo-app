import { ReactNode } from 'react';

interface Category {
  id: string;
  color: string;
  background: string;
  icon: {
    library: string;
    name: string;
  };
  title: string;
  type: string;
  goal: number;
}

export default Category;
