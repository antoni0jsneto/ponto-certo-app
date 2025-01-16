import { FunctionComponent } from 'react';

// Utilities
import { HiHandThumbUp, HiHandThumbDown } from 'react-icons/hi2';
import { FaPlus } from 'react-icons/fa';
import NextAccount from '../../../types/next-account.types';
import { formatCurrencyWithSymbol } from '../../../utils/formatCurrency';

// Styles
import {
  IncomeExpensesContentContainer,
  IncomeExpensesContentDay,
  IncomeExpensesContentDayContainer,
  IncomeExpensesContentDiv,
  IncomeExpensesContentDivisory,
  IncomeExpensesContentFooter,
  IncomeExpensesContentFooterBalance,
  IncomeExpensesContentFooterButton,
  IncomeExpensesContentFooterDiv,
  IncomeExpensesContentFooterPredicted,
  IncomeExpensesContentFooterSubtitle,
  IncomeExpensesContentFooterTitle,
  IncomeExpensesContentItem,
  IncomeExpensesContentItemAccount,
  IncomeExpensesContentItemIcon,
  IncomeExpensesContentItemProcessed,
  IncomeExpensesContentItems,
  IncomeExpensesContentItemTitle,
  IncomeExpensesContentItemType,
} from './income-expenses-content.styles';

interface IncomeExpensesContentProps {
  incomes: NextAccount[];
  expenses: NextAccount[];
}

interface IncomeExpenseItemProps {
  item: NextAccount;
  isNewDate: boolean;
}

// Helper function to check if a date belongs to the current month
const includesMonth = (date: string) => {
  const itemDate = new Date(
    Date.UTC(
      parseInt(date.slice(0, 4)), // Ano
      parseInt(date.slice(5, 7)) - 1, // Mês (base 0)
      parseInt(date.slice(8, 10)) // Dia
    )
  );

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  return (
    itemDate.getUTCFullYear() === currentYear &&
    itemDate.getUTCMonth() === currentMonth
  );
};

// Helper function to extract the day from a date
const getDay = (date: string) =>
  String(new Date(date).getUTCDate()).padStart(2, '0');

// Component to render an individual income/expense item
const IncomeExpenseItem: FunctionComponent<IncomeExpenseItemProps> = ({
  item,
  isNewDate,
}) => {
  return (
    <div>
      {isNewDate && <IncomeExpensesContentDivisory />}
      <IncomeExpensesContentContainer>
        {isNewDate && (
          <IncomeExpensesContentDayContainer>
            <IncomeExpensesContentDay>
              {getDay(item.date)}
            </IncomeExpensesContentDay>
          </IncomeExpensesContentDayContainer>
        )}
        <IncomeExpensesContentItem
          style={isNewDate ? {} : { marginTop: '5px' }}
        >
          <IncomeExpensesContentDiv>
            <IncomeExpensesContentItemIcon
              backgroundColor={item.category.background}
            >
              {item.category.icon}
            </IncomeExpensesContentItemIcon>
            <IncomeExpensesContentItemTitle>
              {item.title}
            </IncomeExpensesContentItemTitle>
          </IncomeExpensesContentDiv>
          <IncomeExpensesContentDiv>
            <IncomeExpensesContentItemAccount>
              {item.account.name}
            </IncomeExpensesContentItemAccount>
          </IncomeExpensesContentDiv>
          <IncomeExpensesContentDiv>
            <IncomeExpensesContentItemType>
              {item.type === 'expense' ? '-' : '+'}
              {formatCurrencyWithSymbol(item.value)}
            </IncomeExpensesContentItemType>
            <IncomeExpensesContentItemProcessed>
              {item.processed ? (
                <HiHandThumbUp style={{ color: 'var(--green-color)' }} />
              ) : (
                <HiHandThumbDown style={{ color: 'var(--red-color)' }} />
              )}
            </IncomeExpensesContentItemProcessed>
          </IncomeExpensesContentDiv>
        </IncomeExpensesContentItem>
      </IncomeExpensesContentContainer>
    </div>
  );
};

// Main component
const IncomeExpensesContent: FunctionComponent<IncomeExpensesContentProps> = ({
  incomes,
  expenses,
}) => {
  // Filter and sum helper functions
  const filterByMonth = (data: NextAccount[], processed: boolean) =>
    data.filter(
      (item) => includesMonth(item.date) && item.processed === processed
    );

  const sumValues = (data: NextAccount[]) =>
    data.reduce((acc, item) => acc + item.value, 0);

  // Filtered and summed data
  const processedIncomes = filterByMonth(incomes, true);
  const processedExpenses = filterByMonth(expenses, true);
  const unprocessedIncomes = filterByMonth(incomes, false);
  const unprocessedExpenses = filterByMonth(expenses, false);

  const totalIncome = sumValues(processedIncomes);
  const totalExpense = sumValues(processedExpenses);
  const totalPredictedIncome = sumValues(unprocessedIncomes);
  const totalPredictedExpense = sumValues(unprocessedExpenses);

  const incomeExpenses = [...incomes, ...expenses].filter((item) => {
    const isIncluded = includesMonth(item.date);
    return isIncluded;
  });

  const incomeOrderedExpenses = incomeExpenses.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const balance = totalIncome - totalExpense;
  const totalPredicted = totalPredictedIncome - totalPredictedExpense;

  return (
    <IncomeExpensesContentItems>
      {incomeOrderedExpenses.map((item, index) => (
        <IncomeExpenseItem
          key={`${item.id}-${index}`}
          item={item}
          isNewDate={item.date !== incomeOrderedExpenses[index - 1]?.date}
        />
      ))}
      <IncomeExpensesContentDivisory />
      <IncomeExpensesContentFooter>
        <IncomeExpensesContentFooterTitle>
          Entenda seu saldo
        </IncomeExpensesContentFooterTitle>
        <IncomeExpensesContentFooterDiv>
          <IncomeExpensesContentFooterSubtitle>
            saldo
          </IncomeExpensesContentFooterSubtitle>
          <IncomeExpensesContentFooterSubtitle>
            previsto
          </IncomeExpensesContentFooterSubtitle>
        </IncomeExpensesContentFooterDiv>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <IncomeExpensesContentFooterDiv>
            <IncomeExpensesContentFooterBalance>
              {formatCurrencyWithSymbol(balance)}
            </IncomeExpensesContentFooterBalance>
            <IncomeExpensesContentFooterPredicted>
              {formatCurrencyWithSymbol(totalPredicted)}
            </IncomeExpensesContentFooterPredicted>
          </IncomeExpensesContentFooterDiv>
          <IncomeExpensesContentFooterButton>
            <FaPlus />
          </IncomeExpensesContentFooterButton>
        </div>
      </IncomeExpensesContentFooter>
    </IncomeExpensesContentItems>
  );
};

export default IncomeExpensesContent;
