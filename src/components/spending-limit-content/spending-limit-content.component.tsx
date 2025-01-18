import { FunctionComponent, ReactNode } from 'react';

// Styles
import {
  SpendingLimitContentContainer,
  SpendingLimitContentDivisory,
  SpendingLimitContentHeader,
  SpendingLimitContentHeaderSubtitle,
  SpendingLimitContentHeaderTitle,
  SpendingLimitContentItem,
  SpendingLimitContentItemContainer,
  SpendingLimitContentItemContent,
  SpendingLimitContentItemContentButton,
  SpendingLimitContentItemContentTitle,
  SpendingLimitContentItemContentValue,
  SpendingLimitContentItemIcon,
  SpendingLimitContentItems,
  SpendingLimitContentItemSubContent,
  SpendingLimitContentProgressBarContainer,
  SpendingLimitContentProgressBarFill,
  SpendingLimitProgressBarText,
} from './spending-limit-content.styles';

// Utilities
import { MdEdit } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
import { formatCurrencyWithoutSymbol } from '../../utils/formatCurrency';
import Category from '../../types/category.types';
import NextAccount from '../../types/next-account.types';

interface SpendingLimitContentProps {
  categories: Category[];
  expenses: NextAccount[];
}

interface CategorySummary {
  icon: ReactNode;
  background: string;
  name: string;
  value: number;
  limit: number;
  percentage: number;
}

// Helper Functions
const calculateCategorySummaries = (
  expenses: NextAccount[]
): Record<string, CategorySummary> => {
  return expenses.reduce<Record<string, CategorySummary>>((acc, expense) => {
    const { title, icon, background, goal } = expense.category;

    if (!acc[title]) {
      acc[title] = {
        icon,
        background,
        name: title,
        value: 0,
        limit: goal,
        percentage: 0,
      };
    }

    acc[title].value += expense.value;
    acc[title].percentage = (acc[title].value / acc[title].limit) * 100;
    return acc;
  }, {});
};

const SpendingLimitContent: FunctionComponent<SpendingLimitContentProps> = ({
  categories,
  expenses,
}) => {
  // Totals
  const totalExpenses = expenses.reduce((acc, { value }) => acc + value, 0);
  const totalLimit = expenses.reduce(
    (acc, { category }) => acc + category.goal,
    0
  );
  const totalPercentage = (totalExpenses / totalLimit) * 100 || 0;

  // Grouped Categories
  const groupedByCategory = calculateCategorySummaries(expenses);

  // Enrich Categories
  const categoriesList = categories.map((category) => ({
    id: category.id,
    title: category.title,
    icon: category.icon,
    background: category.background,
    color: category.color,
    type: category.type,
    value: groupedByCategory[category.title]?.value || 0,
    limit: groupedByCategory[category.title]?.limit || category.goal,
    percentage: groupedByCategory[category.title]?.percentage || 0,
    name: category.title,
  }));

  // Component for Each Category
  const CategoryItem: FunctionComponent<CategorySummary> = ({
    icon,
    background,
    name,
    value,
    limit,
    percentage,
  }) => (
    <SpendingLimitContentItem>
      <SpendingLimitContentItemIcon backgroundIcon={background}>
        {icon}
      </SpendingLimitContentItemIcon>
      <SpendingLimitContentItemContainer>
        <SpendingLimitContentItemContent>
          <SpendingLimitContentItemContentTitle>
            {name}
          </SpendingLimitContentItemContentTitle>
          <SpendingLimitContentItemSubContent>
            {limit !== 0 && (
              <SpendingLimitContentItemContentValue>
                {formatCurrencyWithoutSymbol(value)}{' '}
                <span>de {formatCurrencyWithoutSymbol(limit)}</span>
              </SpendingLimitContentItemContentValue>
            )}
          </SpendingLimitContentItemSubContent>
          <div style={{ width: '100%', marginTop: '3px' }}>
            <SpendingLimitContentProgressBarContainer>
              <SpendingLimitContentProgressBarFill
                progress={String(percentage)}
              />
              {percentage > 0 && (
                <SpendingLimitProgressBarText>
                  {percentage}%
                </SpendingLimitProgressBarText>
              )}
            </SpendingLimitContentProgressBarContainer>
          </div>
        </SpendingLimitContentItemContent>
      </SpendingLimitContentItemContainer>
      <SpendingLimitContentItemContentButton>
        {limit === 0 ? <FaPlus /> : <MdEdit />}
      </SpendingLimitContentItemContentButton>
    </SpendingLimitContentItem>
  );

  return (
    <div>
      <SpendingLimitContentDivisory />
      <SpendingLimitContentContainer>
        <SpendingLimitContentHeader>
          <SpendingLimitContentHeaderTitle>
            Despesas
          </SpendingLimitContentHeaderTitle>
          <SpendingLimitContentHeaderSubtitle>
            {formatCurrencyWithoutSymbol(totalExpenses)}{' '}
            <span>de {formatCurrencyWithoutSymbol(totalLimit)}</span>
          </SpendingLimitContentHeaderSubtitle>
          <div style={{ margin: '0 50px 0 70px' }}>
            <SpendingLimitContentProgressBarContainer height="60px">
              <SpendingLimitContentProgressBarFill
                progress={String(totalPercentage)}
              />
              {totalPercentage > 0 && (
                <SpendingLimitProgressBarText>
                  {totalPercentage}%
                </SpendingLimitProgressBarText>
              )}
            </SpendingLimitContentProgressBarContainer>
          </div>
        </SpendingLimitContentHeader>

        <SpendingLimitContentItems>
          {categoriesList.map((category, index) => (
            <CategoryItem key={index} {...category} />
          ))}
        </SpendingLimitContentItems>
      </SpendingLimitContentContainer>
    </div>
  );
};

export default SpendingLimitContent;