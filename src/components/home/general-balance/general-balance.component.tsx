import { FunctionComponent } from 'react';

// Utilities
import { FaRegEye } from 'react-icons/fa6';
import { formatCurrencyWithoutSymbol } from '../../../utils/formatCurrency';

// Styles
import {
  GeneralBalanceHeader,
  GeneralBalanceSpan,
  GeneralBalanceSubtitle,
  GeneralBalanceTitle,
} from './general-balance.styles';

interface GeneralBalanceProps {
  title: string;
  balance: number;
  type: 'expense' | 'income';
}

const GeneralBalance: FunctionComponent<GeneralBalanceProps> = ({
  title,
  balance,
  type,
}) => {
  const formattedPrice = formatCurrencyWithoutSymbol(balance);

  return (
    <GeneralBalanceHeader>
      <GeneralBalanceTitle>{title}</GeneralBalanceTitle>
      <GeneralBalanceSubtitle>
        R${' '}
        <GeneralBalanceSpan>
          {balance > 0 && type === 'expense' ? '-' : ''}
          {formattedPrice}
        </GeneralBalanceSpan>
        <FaRegEye />
      </GeneralBalanceSubtitle>
    </GeneralBalanceHeader>
  );
};

export default GeneralBalance;
