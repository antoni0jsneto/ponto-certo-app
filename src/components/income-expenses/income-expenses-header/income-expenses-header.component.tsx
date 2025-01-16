import { useState } from 'react';
import Title from '../../title/title.component';
import { FaCirclePlus } from 'react-icons/fa6';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import {
  IncomeExpensesArrowButton,
  IncomeExpensesButton,
  IncomeExpensesButtonContainer,
  IncomeExpensesDropdownItem,
  IncomeExpensesDropdownList,
  IncomeExpensesHeaderContainer,
  IncomeExpensesHeaderContent,
  IncomeExpensesMonthYear,
} from './income-expenses-header.styles';

const IncomeExpensesHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <IncomeExpensesHeaderContainer>
      <IncomeExpensesHeaderContent>
        <Title marginBottom="0">Lançamentos</Title>

        <IncomeExpensesButtonContainer style={{ position: 'relative' }}>
          <IncomeExpensesButton onClick={toggleDropdown}>
            <FaCirclePlus />
          </IncomeExpensesButton>

          {isOpen && (
            <IncomeExpensesDropdownList>
              <IncomeExpensesDropdownItem
                onClick={() => selectOption('expense')}
              >
                Despesa
              </IncomeExpensesDropdownItem>
              <IncomeExpensesDropdownItem
                onClick={() => selectOption('income')}
              >
                Receita
              </IncomeExpensesDropdownItem>
              <IncomeExpensesDropdownItem
                onClick={() => selectOption('transfer')}
              >
                Transferência
              </IncomeExpensesDropdownItem>
            </IncomeExpensesDropdownList>
          )}
        </IncomeExpensesButtonContainer>
      </IncomeExpensesHeaderContent>

      <IncomeExpensesHeaderContent>
        <IncomeExpensesArrowButton>
          <RiArrowLeftSLine />
        </IncomeExpensesArrowButton>
        <IncomeExpensesMonthYear>Janeiro 2025</IncomeExpensesMonthYear>
        <IncomeExpensesArrowButton>
          <RiArrowRightSLine />
        </IncomeExpensesArrowButton>
      </IncomeExpensesHeaderContent>
    </IncomeExpensesHeaderContainer>
  );
};

export default IncomeExpensesHeader;
