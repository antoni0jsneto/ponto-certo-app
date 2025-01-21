import React, { useState } from 'react';
import { FunctionComponent } from 'react';

// Utilities
import NextAccount from '../../../types/next-account.types';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import { formatCurrencyWithSymbol } from '../../../utils/formatCurrency';

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
  SeeMoreButton,
} from './next-accounts.styles';

// Components
import Title from '../../title/title.component';
import ReactIcon from '../../react-icon/react-icon.component';

interface NextAccountsProps {
  title: string;
  itens: NextAccount[];
  initialLimit?: number;
  incrementValue?: number;
}

const NextAccounts: FunctionComponent<NextAccountsProps> = ({
  title,
  itens,
  initialLimit = 5,
  incrementValue = 3,
}) => {
  const [visibleCount, setVisibleCount] = useState(initialLimit);

  const handleToggleShow = () => {
    if (visibleCount >= itens.length) {
      setVisibleCount(initialLimit);
    } else {
      setVisibleCount((prevCount) =>
        Math.min(prevCount + incrementValue, itens.length)
      );
    }
  };

  return (
    <NextAccountsContainer>
      <NextAccountsHeader>
        <Title>{title}</Title>
        <NextAccountstSubtitle>Próximas</NextAccountstSubtitle>
      </NextAccountsHeader>

      <NextAccountsItemsContainer>
        {itens.slice(0, visibleCount).map((item, index) => {
          const formattedPrice = formatCurrencyWithSymbol(item.value);

          return (
            <div key={index}>
              <NextAccountsItem>
                <NextAccountsItemIcon backgroundIcon={item.category.background}>
                  <ReactIcon name={item.category.icon.name} />
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
              {index < itens.filter((_, i) => i < visibleCount).length - 1 && (
                <NextAccountsDivisory />
              )}
            </div>
          );
        })}
      </NextAccountsItemsContainer>

      <div
        style={{
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {itens.length > initialLimit && (
          <SeeMoreButton onClick={handleToggleShow}>
            {visibleCount >= itens.length ? (
              <>
                Ver Menos <IoMdArrowDropup />
              </>
            ) : (
              <>
                Ver Mais <IoMdArrowDropdown />
              </>
            )}
          </SeeMoreButton>
        )}
      </div>
    </NextAccountsContainer>
  );
};

export default NextAccounts;
