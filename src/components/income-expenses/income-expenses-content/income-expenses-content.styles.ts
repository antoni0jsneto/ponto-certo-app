import { styled } from 'styled-components';

interface IncomeExpensesContentProps {
  backgroundColor: string;
}

export const IncomeExpensesContentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IncomeExpensesContentDayContainer = styled.div`
  position: relative;
`;

export const IncomeExpensesContentDay = styled.p`
  position: absolute;
  bottom: 20px;
  right: 60px;
  font-size: 21px;
  color: var(--text-gray-color);
`;

export const IncomeExpensesContentItems = styled.div`
  margin-top: 30px;
`;

export const IncomeExpensesContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const IncomeExpensesContentDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  &:first-child {
    flex: 2;
  }

  &:nth-child(2) {
    justify-content: center;
    flex: 1;
  }

  &:last-child {
    justify-content: flex-end;
    flex: 1;
  }
`;

export const IncomeExpensesContentItemIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'backgroundColor',
})<IncomeExpensesContentProps>`
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IncomeExpensesContentItemTitle = styled.p`
  text-align: start;
  color: var(--text-black-color);
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
`;

export const IncomeExpensesContentItemAccount = styled.p`
  flex: 1;
  text-align: start;
  color: var(--text-gray-color);
  font-size: 14px;
  line-height: 16px;
`;

export const IncomeExpensesContentItemType = styled.p`
  text-align: start;
`;

export const IncomeExpensesContentItemProcessed = styled.div`
  text-align: start;
`;

export const IncomeExpensesContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IncomeExpensesContentFooterDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IncomeExpensesContentFooterTitle = styled.p`
  color: var(--green-color);
  outline: none;
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
`;

export const IncomeExpensesContentFooterSubtitle = styled.p`
  color: var(--text-gray-color);
  font-size: 14px;
  font-weight: 500;
  text-align: start;
  margin-left: 30px;
`;

export const IncomeExpensesContentFooterBalance = styled.p`
  color: var(--blue-color);
  font-size: 17px;
  font-weight: 500;
`;

export const IncomeExpensesContentFooterPredicted = styled.p`
  color: var(--text-gray-color);
  font-size: 17px;
  font-weight: 500;
`;

export const IncomeExpensesContentFooterButton = styled.p`
  color: var(--text-gray-color);
  font-size: 17px;
  cursor: pointer;
`;

export const IncomeExpensesContentDivisory = styled.div`
  border-bottom: 1px solid var(--line-color);
  width: 100%;
  margin: 20px 0;
`;
