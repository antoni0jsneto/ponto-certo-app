import { FunctionComponent, useEffect, useState } from 'react';
import { FiMinusCircle } from 'react-icons/fi';
import { LuCirclePlus } from 'react-icons/lu';
import { BiTransfer } from 'react-icons/bi';
import { BsBarChart } from 'react-icons/bs';

// Styles
import './quick-access.styles.css';

// Utilities
import NextAccount from '../../../types/next-account.types';
import { getCurrentAndNextMonth } from '../../../utils/getMonth';
import { formatCurrencyWithSymbol } from '../../../utils/formatCurrency';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../config/firebase.config';

// Components
import QuickCustomButton from '../../quick-custom-button/quick-custom-button.component';
import Title from '../../title/title.component';

interface QuickAccessProps {}

const QuickAccess: FunctionComponent<QuickAccessProps> = ({}) => {
  const [income, setIncome] = useState<NextAccount[]>([]);
  const [expenses, setExpenses] = useState<NextAccount[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'transactions'));
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as NextAccount[];
        setIncome(data.filter((item) => item.type === 'income'));
        setExpenses(data.filter((item) => item.type === 'expense'));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const { currentMonth } = getCurrentAndNextMonth();

  const totalIncomes = income
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
