import { FunctionComponent } from 'react';

// Utilities
import NextAccount from '../../types/next-account.types';

// Styles
import {
  NextAccountsContainer,
  NextAccountsDivisory,
  NextAccountsHeader,
  NextAccountsItem,
  NextAccountsItemContent,
  NextAccountsItemContentSubtitle,
  NextAccountsItemContentTitle,
  NextAccountsItemIcon,
  NextAccountsItemsContainer,
  NextAccountstSubtitle,
  NextAccountstTitle,
} from './next-accounts.styles';

interface NextAccountsProps {
  title: string;
  itens: NextAccount[];
}

const NextAccounts: FunctionComponent<NextAccountsProps> = ({
  title,
  itens,
}) => {
  return (
    <NextAccountsContainer>
      <NextAccountsHeader>
        <NextAccountstTitle>{title}</NextAccountstTitle>
        <NextAccountstSubtitle>Próximas</NextAccountstSubtitle>
      </NextAccountsHeader>

      <NextAccountsItemsContainer>
        {itens.map((item, index) => {
          const formattedPrice = item.value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          });

          return (
            <div key={index}>
              <NextAccountsItem>
                <NextAccountsItemIcon backgroundIcon={item.category.background}>
                  {item.category.icon}
                </NextAccountsItemIcon>
                <NextAccountsItemContent>
                  <NextAccountsItemContentTitle>
                    {item.title}
                  </NextAccountsItemContentTitle>
                  <NextAccountsItemContentSubtitle>
                    {item.date}
                  </NextAccountsItemContentSubtitle>
                </NextAccountsItemContent>
                <p>{formattedPrice}</p>
              </NextAccountsItem>
              {index < itens.length - 1 && <NextAccountsDivisory />}
            </div>
          );
        })}
      </NextAccountsItemsContainer>
    </NextAccountsContainer>
  );
};

export default NextAccounts;
