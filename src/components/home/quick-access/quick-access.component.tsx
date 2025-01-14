import { FunctionComponent } from 'react';

// Styles
import './quick-access.styles.css';

// Utilities
import { FiMinusCircle } from 'react-icons/fi';
import { LuCirclePlus } from 'react-icons/lu';
import { BiTransfer } from 'react-icons/bi';
import { BsBarChart } from 'react-icons/bs';
import NextAccount from '../../../types/next-account.types';
import { getCurrentAndNextMonth } from '../../../utils/getMonth';

// Components
import QuickCustomButton from '../../quick-custom-button/quick-custom-button.component';
import Title from '../../title/title.component';
import { formatCurrencyWithSymbol } from '../../../utils/formatCurrency';

interface QuickAccessProps {
  incomes: NextAccount[];
  expenses: NextAccount[];
}

const QuickAccess: FunctionComponent<QuickAccessProps> = ({
  incomes,
  expenses,
}) => {
  const { currentMonth } = getCurrentAndNextMonth();

  const totalIncomes = incomes
    .filter((income) => income.processed && income.date.includes(currentMonth))
    .reduce((acc, income) => acc + income.value, 0);

  const totalExpenses = expenses
    .filter(
      (expense) => expense.processed && expense.date.includes(currentMonth)
    )
    .reduce((acc, expense) => acc + expense.value, 0);

  return (
    <div className="quick-access-container">
      <div className="quick-access-content">
        <p className="quick-access-title">Boa tarde,</p>
        <p className="quick-access-subtitle">Neto!</p>

        <div className="blocks-of-info-container">
          <div className="block-of-info-content">
            <p>receita mensal</p>
            <p className="block-of-info-positive-value">
              {formatCurrencyWithSymbol(totalIncomes)}
            </p>
          </div>
          <div className="block-of-info-content">
            <p>despesa mensal</p>
            <p className="block-of-info-negative-value">
              {formatCurrencyWithSymbol(totalExpenses)}
            </p>
          </div>
        </div>
      </div>

      <div className="quick-access-content">
        <Title align="center">Acesso rápido</Title>
        <div className="block-of-buttons-content">
          <QuickCustomButton
            startIcon={<FiMinusCircle />}
            iconColor="var(--red-color)"
          >
            Despesa
          </QuickCustomButton>
          <QuickCustomButton
            startIcon={<LuCirclePlus />}
            iconColor="var(--green-color)"
          >
            Receita
          </QuickCustomButton>
          <QuickCustomButton startIcon={<BiTransfer />}>
            Transf.
          </QuickCustomButton>
          <QuickCustomButton
            startIcon={<BsBarChart />}
            iconColor="var(--blue-color)"
          >
            Relat.
          </QuickCustomButton>
        </div>
      </div>
    </div>
  );
};

export default QuickAccess;
