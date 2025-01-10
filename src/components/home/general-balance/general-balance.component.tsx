// Utilities
import { FaRegEye } from 'react-icons/fa6';

// Styles
import {
  GeneralBalanceHeader,
  GeneralBalanceSpan,
  GeneralBalanceSubtitle,
  GeneralBalanceTitle,
} from './general-balance.styles';
import { FunctionComponent } from 'react';

interface GeneralBalanceProps {
  title: string;
  balance: number;
}

const GeneralBalance: FunctionComponent<GeneralBalanceProps> = ({
  title,
  balance,
}) => {
  const formattedPrice = balance.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <GeneralBalanceHeader>
      <GeneralBalanceTitle>{title}</GeneralBalanceTitle>
      <GeneralBalanceSubtitle>
        R$ <GeneralBalanceSpan>{formattedPrice}</GeneralBalanceSpan>
        <FaRegEye />
      </GeneralBalanceSubtitle>
    </GeneralBalanceHeader>
  );
};

export default GeneralBalance;
