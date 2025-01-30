import React, { useEffect, useState } from 'react';
import { FunctionComponent } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';

// Utilities
import Transaction from '../../../types/transaction.types';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import { formatCurrencyWithSymbol } from '../../../utils/formatCurrency';
import { db } from '../../../config/firebase.config';

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
  type: 'expense' | 'income';
  initialLimit?: number;
  incrementValue?: number;
}

const NextAccounts: FunctionComponent<NextAccountsProps> = ({
  title,
  type,
  initialLimit = 5,
  incrementValue = 3,
}) => {
  const [visibleCount, setVisibleCount] = useState(initialLimit);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const snapshot = await getDocs(
          query(collection(db, 'transactions'), where('type', '==', type))
        );

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Transaction[];

        setTransactions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTransactions();
  }, []);

  const handleToggleShow = () => {
    if (visibleCount >= transactions.length) {
      setVisibleCount(initialLimit);
    } else {
      setVisibleCount((prevCount) =>
        Math.min(prevCount + incrementValue, transactions.length)
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
        {transactions.slice(0, visibleCount).map((item, index) => {
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
              {index <
                transactions.filter((_, i) => i < visibleCount).length - 1 && (
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
        {transactions.length > initialLimit && (
          <SeeMoreButton onClick={handleToggleShow}>
            {visibleCount >= transactions.length ? (
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
