import { ReactNode } from 'react';

interface Category {
  id: string;
  color: string;
  background: string;
  icon: ReactNode;
  title: string;
  type: string;
  goal: number;
}

export default Category;
