import { createContext, FunctionComponent, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';

// Utilities
import Category from '../types/category.types';
import { db } from '../config/firebase.config';

interface ICategoryContext {
  categories: Category[];
  fetchCategories: () => void;
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  fetchCategories: () => {},
});

const CategoryContextProvider: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const categoriesSnapshot = await getDocs(collection(db, 'categories'));

      const categoriesData = categoriesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Category[];

      setCategories((prev) =>
        JSON.stringify(prev) === JSON.stringify(categoriesData)
          ? prev
          : categoriesData
      );
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <CategoryContext.Provider value={{ categories, fetchCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
