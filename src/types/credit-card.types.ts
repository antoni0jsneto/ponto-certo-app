import Account from './account.types';

interface CreditCard {
  id: string;
  icon: { src: string; alt: string };
  name: string;
  limit: number;
  type: 'Cartão manual';
  closeDay: number;
  winsDay: number;
  defaultPaymentAccount: string;
  account: Account;
}

export default CreditCard;
