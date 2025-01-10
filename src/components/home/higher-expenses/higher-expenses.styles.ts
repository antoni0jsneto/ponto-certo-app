import { styled } from 'styled-components';

interface HigherExpensesProps {
  backgroundIcon: string;
}

export const HigherExpensesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const HigherExpensesItemsContainer = styled.div``;

export const HigherExpensesItems = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const HigherExpensesItemsChart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  cursor: pointer;
`;

export const HigherExpensesItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 10px;
  flex: 1;

  &:not(&:last-child) {
    margin-bottom: 10px;
    border-bottom: 1px solid var(--line-color);
  }
`;

export const HigherExpensesItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex: 1;
  margin-bottom: 10px;
`;

export const HigherExpensesItemIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'backgroundIcon',
})<HigherExpensesProps>`
  background-color: ${(props) => props.backgroundIcon || '#f8f8f8'};
  color: #fff;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HigherExpensesItemTitle = styled.p`
  color: var(--text-black-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: start;
  flex: 1;
`;

export const HigherExpensesItemSubtitle = styled.p`
  color: inherit;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`;
