import React from 'react';
import { FunctionComponent } from 'react';

// Styles
import {
  HigherExpensesContainer,
  HigherExpensesItem,
  HigherExpensesItemContainer,
  HigherExpensesItemIcon,
  HigherExpensesItems,
  HigherExpensesItemsChart,
  HigherExpensesItemsContainer,
  HigherExpensesItemSubtitle,
  HigherExpensesItemTitle,
} from './higher-expenses.styles';

// Utilities
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import NextAccount from '../../../types/next-account.types';
import { formatCurrencyWithSymbol } from '../../../utils/formatCurrency';

// Components
import Title from '../../title/title.component';
import CustomButton from '../../custom-button/custom-button.component';
import ReactIcon from '../../react-icon/react-icon.component';

interface HigherExpensesProps {
  title: string;
  expenses: NextAccount[];
}

const HigherExpenses: FunctionComponent<HigherExpensesProps> = ({
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
      {
        value: number;
        icon: { library: string; name: string };
        background: string;
      }
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
    <HigherExpensesContainer>
      <Title>{title}</Title>
      <HigherExpensesItems>
        <HigherExpensesItemsContainer>
          {percentages.map((item, index) => (
            <HigherExpensesItemContainer key={index}>
              <HigherExpensesItem>
                <HigherExpensesItemIcon backgroundIcon={item.background}>
                  <ReactIcon name={item.icon.name} />
                </HigherExpensesItemIcon>
                <HigherExpensesItemTitle>
                  {item.category}
                </HigherExpensesItemTitle>
                <HigherExpensesItemSubtitle>
                  {item.percentage}%
                </HigherExpensesItemSubtitle>
              </HigherExpensesItem>
            </HigherExpensesItemContainer>
          ))}
        </HigherExpensesItemsContainer>
        <HigherExpensesItemsChart>
          <PieChart width={140} height={140}>
            <Pie
              data={percentages}
              dataKey="value"
              nameKey="category"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
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
                formatCurrencyWithSymbol(value),
                name,
              ]}
              contentStyle={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                padding: '8px',
              }}
              itemStyle={{ color: '#333' }}
            />
          </PieChart>
          <CustomButton>Ver relatório</CustomButton>
        </HigherExpensesItemsChart>
      </HigherExpensesItems>
    </HigherExpensesContainer>
  );
};

export default HigherExpenses;
