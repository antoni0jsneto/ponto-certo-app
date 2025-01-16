import { styled } from 'styled-components';

export const IncomeExpensesHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const IncomeExpensesHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IncomeExpensesButtonContainer = styled.div`
  display: flex;
  margin-left: 10px;
  position: relative;
  height: 36px;
`;

export const IncomeExpensesButton = styled.button`
  color: #d72638;
  background-color: transparent;
  border: none;
  width: 15px;
  height: 36px;
  font-size: 36px;
  line-height: 36px;
  cursor: pointer;
`;

export const IncomeExpensesDropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  list-style-type: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 5px 0 0 0;
  z-index: 1;
`;

export const IncomeExpensesDropdownItem = styled.li`
  padding: 5px 18px;
  cursor: pointer;
  font-size: 13px;
  text-align: center;
  color: var(--text-gray-dark-color);
  font-weight: 500;

  &:hover {
    color: #fff;
  }

  &:hover:first-child {
    background-color: var(--red-color);
  }

  &:hover:nth-child(2) {
    background-color: var(--green-color);
  }

  &:hover:last-child {
    background-color: var(--blue-color);
  }
`;

export const IncomeExpensesArrowButton = styled.button`
  color: #5c5f5a;
  background-color: transparent;
  border: none;
  width: 25px;
  height: 25px;
  font-size: 25px;
  line-height: 25px;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background-color: #eaeaea;
    color: #2f312d;
  }
`;

export const IncomeExpensesMonthYear = styled.p`
  color: #5c5f5a;
  font-size: 16px;
  text-align: start;
  flex: 1;
  margin: 0 30px;
`;
