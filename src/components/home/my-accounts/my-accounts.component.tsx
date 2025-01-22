import { Fragment, FunctionComponent, useEffect, useState } from 'react';

// Styles
import {
  MyAccountsContainer,
  MyAccountsDivisory,
  MyAccountsContent,
  MyAccountsItems,
  MyAccountsItem,
  MyAccountsItemImgContainer,
  MyAccountsItemImg,
  MyAccountsItemTitleContainer,
  MyAccountsItemTitle,
  MyAccountsItemSubtitle,
  MyAccountsItemBalanceContainer,
  MyAccountsItemBalance,
} from './my-accounts.styles';

// Components
import Title from '../../title/title.component';
import CustomButton from '../../custom-button/custom-button.component';
import GeneralBalance from '../general-balance/general-balance.component';

// Utilities
import Account from '../../../types/account.types';
import NextAccount from '../../../types/next-account.types';
import { formatCurrencyWithSymbol } from '../../../utils/formatCurrency';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../../config/firebase.config';

interface MyAccountsProps {}

const MyAccounts: FunctionComponent<MyAccountsProps> = ({}) => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [income, setIncome] = useState<NextAccount[]>([]);
  const [expenses, setExpenses] = useState<NextAccount[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [accountsSnapshot, incomeSnapshot, expensesSnapshot] =
          await Promise.all([
            getDocs(collection(db, 'accounts')),
            getDocs(
              query(
                collection(db, 'transactions'),
                where('type', '==', 'income')
              )
            ),
            getDocs(
              query(
                collection(db, 'transactions'),
                where('type', '==', 'expense')
              )
            ),
          ]);

        const accountsData = accountsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Account[];

        const incomeData = incomeSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as NextAccount[];

        const expensesData = expensesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as NextAccount[];

        setAccounts(accountsData);
        setIncome(incomeData);
        setExpenses(expensesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const groupedIncomes = income.reduce(
    (acc, i) => {
      if (i.processed) {
        acc[i.account.id] = (acc[i.account.id] || 0) + i.value;
      }
      return acc;
    },
    {} as Record<string, number>
  );

  const totalIncomes = Object.values(groupedIncomes).reduce(
    (acc, value) => acc + value,
    0
  );

  const groupedExpenses = expenses.reduce(
    (acc, expense) => {
      if (expense.processed) {
        acc[expense.account.id] =
          (acc[expense.account.id] || 0) + expense.value;
      }
      return acc;
    },
    {} as Record<string, number>
  );

  const totalExpenses = Object.values(groupedExpenses).reduce(
    (acc, value) => acc + value,
    0
  );

  return (
    <MyAccountsContainer>
      <GeneralBalance
        title="Saldo geral"
        balance={totalIncomes - totalExpenses}
        type="income"
      />
      <MyAccountsDivisory></MyAccountsDivisory>
      <MyAccountsContent>
        <Title marginBottom="20px">Minhas contas</Title>
        <MyAccountsItems>
          {accounts.map((account, index) => {
            const totalAccountIncomes = groupedIncomes[account.id] || 0;
            const totalAccountExpenses = groupedExpenses[account.id] || 0;

            const accountBalance = totalAccountIncomes - totalAccountExpenses;

            return (
              <Fragment key={account.id}>
                <MyAccountsItem>
                  <MyAccountsItemImgContainer>
                    <MyAccountsItemImg
                      src={account.icon.src}
                      alt={account.icon.alt}
                    />
                  </MyAccountsItemImgContainer>
                  <MyAccountsItemTitleContainer>
                    <MyAccountsItemTitle>{account.name}</MyAccountsItemTitle>
                    <MyAccountsItemSubtitle>
                      {account.type}
                    </MyAccountsItemSubtitle>
                  </MyAccountsItemTitleContainer>
                  <MyAccountsItemBalanceContainer>
                    <MyAccountsItemBalance>
                      {formatCurrencyWithSymbol(accountBalance)}
                    </MyAccountsItemBalance>
                  </MyAccountsItemBalanceContainer>
                </MyAccountsItem>
                {accounts.length - 1 !== index && <MyAccountsDivisory />}
              </Fragment>
            );
          })}
        </MyAccountsItems>
        <CustomButton>Gerenciar contas</CustomButton>
      </MyAccountsContent>
    </MyAccountsContainer>
  );
};

export default MyAccounts;
