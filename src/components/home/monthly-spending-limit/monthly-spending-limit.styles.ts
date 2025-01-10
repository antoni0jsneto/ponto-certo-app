import { styled } from 'styled-components';

interface MonthlySpendingLimitProps {
  backgroundIcon: string;
}

export const MonthlySpendingLimitContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MonthlySpendingLimitItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;

export const MonthlySpendingLimitItemsChart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  cursor: pointer;
`;

export const MonthlySpendingLimitItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const MonthlySpendingLimitItemContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: start;
`;

export const MonthlySpendingLimitItemContent2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MonthlySpendingLimitItemTitle = styled.p`
  color: var(--text-black-color);
  font-size: 16px;
  line-height: 19px;
  text-align: start;
  flex: 1;
  margin-bottom: 3px;
`;

export const MonthlySpendingLimitItemSubtitle = styled.p`
  color: var(--text-gray-color);
  font-size: 14px;
  text-align: start;
`;

export const MonthlySpendingLimitDivisory = styled.div`
  border-bottom: 1px solid var(--line-color);
  width: 100%;
  margin: 20px 0;
`;
