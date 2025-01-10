import { FunctionComponent } from 'react';

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
import NextAccount from '../../../types/next-account.types';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

// Components
import CustomButton from '../../custom-button/custom-button.component';
import Title from '../../title/title.component';

interface MonthlySpendingLimitProps {
  title: string;
  expenses: NextAccount[];
}

const MonthlySpendingLimit: FunctionComponent<MonthlySpendingLimitProps> = ({
  title,
  expenses,
}) => {
  const groupedByCategory = expenses.reduce(
    (acc, expense) => {
      const categoryTitle = expense.category.title;

      if (!acc[categoryTitle]) {
        acc[categoryTitle] = {
          value: 0,
          icon: expense.category.icon,
          background: expense.category.background,
        };
      }

      acc[categoryTitle].value += expense.value;
      return acc;
    },
    {} as Record<
      string,
      { value: number; icon: React.ReactNode; background: string }
    >
  );

  const totalExpenses = Object.values(groupedByCategory).reduce(
    (acc, category) => acc + category.value,
    0
  );

  const percentages = Object.entries(groupedByCategory).map(
    ([category, { value, icon, background }]) => ({
      category,
      value,
      icon,
      background,
      percentage: ((value / totalExpenses) * 100).toFixed(2),
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
                <PieChart width={50} height={50}>
                  <Pie
                    data={percentages}
                    dataKey="value"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    innerRadius={10}
                    outerRadius={20}
                    fill="#8884d8"
                    style={{ cursor: 'pointer' }}
                  >
                    {percentages.map((item, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={item.background}
                        stroke="none"
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number, name: string) => [
                      new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(value),
                      `${name}`,
                    ]}
                    contentStyle={{
                      backgroundColor: '#fff',
                      borderRadius: '8px',
                      padding: '8px',
                    }}
                    itemStyle={{ color: '#333' }}
                  />
                </PieChart>
              </MonthlySpendingLimitItemsChart>
              <MonthlySpendingLimitItemContent>
                <MonthlySpendingLimitItemTitle>
                  {item.category}
                </MonthlySpendingLimitItemTitle>
                <MonthlySpendingLimitItemSubtitle>
                  Meta: R$ {item.value}
                </MonthlySpendingLimitItemSubtitle>
                <MonthlySpendingLimitItemSubtitle>
                  Gasto: R$ {item.value}
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
