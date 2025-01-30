import { Fragment, FunctionComponent, useContext, useEffect } from 'react';

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
import { formatCurrencyWithSymbol } from '../../../utils/formatCurrency';
import { TransactionContext } from '../../../contexts/transaction.context';
import { AccountContext } from '../../../contexts/account.context';

interface MyAccountsProps {}

const MyAccounts: FunctionComponent<MyAccountsProps> = ({}) => {
  const { income, expenses, fetchIncome, fetchExpenses } =
    useContext(TransactionContext);
  const { accounts, fetchAccounts } = useContext(AccountContext);

  useEffect(() => {
    fetchAccounts();
    fetchIncome();
    fetchExpenses();
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
