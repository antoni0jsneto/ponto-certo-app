import { FunctionComponent, useContext, useEffect, useState } from 'react';

// Styles
import {
  MonthlySpendingLimitContainer,
  MonthlySpendingLimitDivisory,
  MonthlySpendingLimitItem,
  MonthlySpendingLimitItemContent,
  MonthlySpendingLimitItemContent2,
  MonthlySpendingLimitItems,
  MonthlySpendingLimitItemsChart,
  MonthlySpendingLimitItemSubtitle,
  MonthlySpendingLimitItemTitle,
} from './monthly-spending-limit.styles';

// Utilities
import { PieChart, Pie, Cell } from 'recharts';
import { TransactionContext } from '../../../contexts/transaction.context';

// Components
import CustomButton from '../../custom-button/custom-button.component';
import Title from '../../title/title.component';

interface MonthlySpendingLimitProps {
  title: string;
}

const MonthlySpendingLimit: FunctionComponent<MonthlySpendingLimitProps> = ({
  title,
}) => {
  const { expenses, fetchExpensesForMonth } = useContext(TransactionContext);

  useEffect(() => {
    fetchExpensesForMonth();
  }, []);

  const groupedByCategory = expenses.reduce(
    (acc, expense) => {
      const categoryTitle = expense.category.title;

      if (!acc[categoryTitle]) {
        acc[categoryTitle] = {
          value: 0,
          goal: expense.category.goal || 0,
          icon: expense.category.icon,
          background: expense.category.background,
        };
      }

      acc[categoryTitle].value += expense.value;
      return acc;
    },
    {} as Record<
      string,
      {
        value: number;
        goal: number;
        icon: { library: string; name: string };
        background: string;
      }
    >
  );

  const percentages = Object.entries(groupedByCategory).map(
    ([category, { value, goal, icon, background }]) => ({
      category,
      value,
      goal,
      icon,
      background,
      percentage: ((value / goal) * 100).toFixed(2),
      color: value > goal ? '#d72638' : '#61CF98',
    })
  );

  return (
    <MonthlySpendingLimitContainer>
      <Title>{title}</Title>
      <MonthlySpendingLimitItems>
        {percentages.map((item, index) => (
          <div key={index}>
            <MonthlySpendingLimitItem>
              <MonthlySpendingLimitItemsChart>
                <PieChart width={80} height={80}>
                  <Pie
                    data={[
                      { name: 'Progresso', value: item.value },
                      {
                        name: 'Restante',
                        value:
                          item.goal - item.value > 0
                            ? item.goal - item.value
                            : 0,
                      },
                    ]}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={20}
                    outerRadius={30}
                    startAngle={80}
                    endAngle={440}
                    paddingAngle={0}
                  >
                    <Cell key="progress" fill={item.color} />
                    <Cell key="background" fill="#eaeaea" />
                  </Pie>
                </PieChart>
              </MonthlySpendingLimitItemsChart>
              <MonthlySpendingLimitItemContent>
                <MonthlySpendingLimitItemTitle>
                  {item.category}
                </MonthlySpendingLimitItemTitle>
                <MonthlySpendingLimitItemSubtitle>
                  Meta: R$ {item.goal.toLocaleString('pt-BR')}
                </MonthlySpendingLimitItemSubtitle>
                <MonthlySpendingLimitItemSubtitle>
                  Gasto: R$ {item.value.toLocaleString('pt-BR')}
                </MonthlySpendingLimitItemSubtitle>
              </MonthlySpendingLimitItemContent>
              <MonthlySpendingLimitItemContent2>
                {item.percentage}%
              </MonthlySpendingLimitItemContent2>
            </MonthlySpendingLimitItem>
            {index < percentages.length - 1 && <MonthlySpendingLimitDivisory />}
          </div>
        ))}
      </MonthlySpendingLimitItems>
      <CustomButton>Análise completa</CustomButton>
    </MonthlySpendingLimitContainer>
  );
};

export default MonthlySpendingLimit;
