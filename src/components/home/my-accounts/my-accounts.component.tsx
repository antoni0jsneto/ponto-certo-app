import { Fragment, FunctionComponent } from 'react';

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

interface MyAccountsProps {
  accounts: Account[];
  incomes: NextAccount[];
  expenses: NextAccount[];
}

const MyAccounts: FunctionComponent<MyAccountsProps> = ({
  accounts,
  incomes,
  expenses,
}) => {
  const groupedIncomes = incomes.reduce(
    (acc, income) => {
      if (income.processed) {
        acc[income.account.id] = (acc[income.account.id] || 0) + income.value;
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
