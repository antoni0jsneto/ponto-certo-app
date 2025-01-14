import Account from './account.types';
import Category from './category.types';

interface NextAccount {
  id: string;
  title: string;
  date: string;
  value: number;
  category: Category;
  account: Account;
  processed: boolean;
}

export default NextAccount;
