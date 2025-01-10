import { ReactNode } from 'react';

interface Category {
  color: string;
  background: string;
  icon: ReactNode;
  title: string;
  type: string;
  goal: number;
}

export default Category;
