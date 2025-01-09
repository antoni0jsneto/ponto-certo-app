import { color } from './../../../node_modules/@types/d3-color/index.d';
import { styled } from 'styled-components';

interface MonthlySpendingLimitProps {
  backgroundIcon: string;
}

export const MonthlySpendingLimitContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MonthlySpendingLimitTitle = styled.h2`
  text-align: start;
  color: #2e312d;
  font-size: 17px;
  font-weight: 600;
  line-height: 17px;
  margin-bottom: 45px;
`;

export const MonthlySpendingLimitItemsContainer = styled.div``;

export const MonthlySpendingLimitItems = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const MonthlySpendingLimitItemsChart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  cursor: pointer;
`;

export const MonthlySpendingLimitItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 10px;
  flex: 1;
`;

export const MonthlySpendingLimitItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex: 1;
  margin-bottom: 10px;
`;

export const MonthlySpendingLimitItemIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'backgroundIcon',
})<MonthlySpendingLimitProps>`
  background-color: ${(props) => props.backgroundIcon || '#f8f8f8'};
  color: #fff;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MonthlySpendingLimitItemTitle = styled.p`
  color: #2e312d;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: start;
  flex: 1;
`;

export const MonthlySpendingLimitItemSubtitle = styled.p`
  color: inherit;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`;
