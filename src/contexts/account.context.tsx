import { createContext, FunctionComponent, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';

// Utilities
import Account from '../types/account.types';
import { db } from '../config/firebase.config';

interface IAccountContext {
  accounts: Account[];
  fetchAccounts: () => void;
}

export const AccountContext = createContext<IAccountContext>({
  accounts: [],
  fetchAccounts: () => {},
});

const AccountContextProvider: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  const fetchAccounts = async () => {
    try {
      const accountsSnapshot = await getDocs(collection(db, 'accounts'));

      const accountsData = accountsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Account[];

      setAccounts(accountsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <AccountContext.Provider value={{ accounts, fetchAccounts }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountContextProvider;
