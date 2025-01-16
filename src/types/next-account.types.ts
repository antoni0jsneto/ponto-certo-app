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
  type: 'income' | 'expense';
  repeat?: {
    frequency:
      | 'daily'
      | 'weekly'
      | 'biweekly'
      | 'monthly'
      | 'bimonthly'
      | 'quarterly'
      | 'semestral'
      | 'yearly';
    type: 'fixed' | 'installment';
  };
  observation?: string;
  attachments?: string[];
}

export default NextAccount;
