import { FunctionComponent, useState } from 'react';

// Utilities
import { FaCirclePlus } from 'react-icons/fa6';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

// Styles
import {
  SubArrowButton,
  SubButton,
  SubButtonContainer,
  SubDropdownItem,
  SubDropdownList,
  SubHeaderContainer,
  SubHeaderContent,
  SubMonthYear,
} from './sub-header.styles';

// Components
import Title from '../title/title.component';

interface SubHeaderProps {
  showButton?: boolean;
  title: string;
}

const SubHeader: FunctionComponent<SubHeaderProps> = ({
  showButton = false,
  title,
}) => {
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
    <SubHeaderContainer>
      <SubHeaderContent>
        <Title marginBottom="0">{title}</Title>

        {showButton && (
          <SubButtonContainer style={{ position: 'relative' }}>
            <SubButton onClick={toggleDropdown}>
              <FaCirclePlus />
            </SubButton>

            {isOpen && (
              <SubDropdownList>
                <SubDropdownItem onClick={() => selectOption('expense')}>
                  Despesa
                </SubDropdownItem>
                <SubDropdownItem onClick={() => selectOption('income')}>
                  Receita
                </SubDropdownItem>
                <SubDropdownItem onClick={() => selectOption('transfer')}>
                  Transferência
                </SubDropdownItem>
              </SubDropdownList>
            )}
          </SubButtonContainer>
        )}
      </SubHeaderContent>

      <SubHeaderContent>
        <SubArrowButton>
          <RiArrowLeftSLine />
        </SubArrowButton>
        <SubMonthYear>Janeiro 2025</SubMonthYear>
        <SubArrowButton>
          <RiArrowRightSLine />
        </SubArrowButton>
      </SubHeaderContent>
    </SubHeaderContainer>
  );
};

export default SubHeader;
