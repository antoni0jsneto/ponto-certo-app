import { createContext, FunctionComponent, useState } from 'react';
import { getDocs, collection, where, query } from 'firebase/firestore';

// Utilities
import Transaction from '../types/transaction.types';
import { db } from '../config/firebase.config';

interface ITransactionContext {
  expenses: Transaction[];
  income: Transaction[];
  fetchExpenses: () => void;
  fetchExpensesForMonth: () => void;
  fetchIncome: () => void;
}

export const TransactionContext = createContext<ITransactionContext>({
  expenses: [],
  income: [],
  fetchExpenses: () => {},
  fetchExpensesForMonth: () => {},
  fetchIncome: () => {},
});

const TransactionContextProvider: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [expenses, setExpenses] = useState<Transaction[]>([]);
  const [income, setIncome] = useState<Transaction[]>([]);

  const fetchExpenses = async () => {
    try {
      const expensesSnapshot = await getDocs(
        query(collection(db, 'transactions'), where('type', '==', 'expense'))
      );

      const expensesData = expensesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Transaction[];

      setExpenses(expensesData);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const fetchExpensesForMonth = async () => {
    const year = 2025;
    const month = 0;
    const lastDay = new Date(year, month + 1, 0);
    const firstDay = new Date(year, month, 1);
    const endOfMonth = lastDay.toISOString().split('T')[0];
    const startOfMonth = firstDay.toISOString().split('T')[0];

    const querySnapshot = await getDocs(
      query(
        collection(db, 'transactions'),
        where('type', '==', 'expense'),
        where('date', '>=', startOfMonth),
        where('date', '<=', endOfMonth)
      )
    );

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Transaction[];
    setExpenses(data);
  };

  const fetchIncome = async () => {
    try {
      const incomeSnapshot = await getDocs(
        query(collection(db, 'transactions'), where('type', '==', 'income'))
      );

      const incomeData = incomeSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Transaction[];

      setIncome(incomeData);
    } catch (error) {
      console.error('Error fetching income:', error);
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        expenses,
        income,
        fetchExpenses,
        fetchExpensesForMonth,
        fetchIncome,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContextProvider;
