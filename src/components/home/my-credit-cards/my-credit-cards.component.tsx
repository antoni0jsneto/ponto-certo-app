import { Fragment, FunctionComponent, useEffect, useState } from 'react';

// Styles
import {
  MyCreditCardsContainer,
  MyCreditCardsContent,
  MyCreditCardsDivisory,
  MyCreditCardsItem,
  MyCreditCardsItemAvaliableLimitSubtitle,
  MyCreditCardsItemAvaliableLimitTitle,
  MyCreditCardsItemAvaliableLimitTitle2,
  MyCreditCardsItemCard,
  MyCreditCardsItemImg,
  MyCreditCardsItemImgContainer,
  MyCreditCardsItemMaturity,
  MyCreditCardsItems,
  MyCreditCardsItemSeeBalanceContainer,
  MyCreditCardsItemSeeBalanceContent,
  MyCreditCardsItemSeeInvoice,
  MyCreditCardsItemSubtitle,
  MyCreditCardsItemTitle,
  MyCreditCardsItemTitleContainer,
} from './my-credit-cards.styles';

// Utilities
import CreditCard from '../../../types/credit-card.types';
import { formatCurrencyWithoutSymbol } from '../../../utils/formatCurrency';
import NextAccount from '../../../types/next-account.types';
import { getCurrentAndNextMonth } from '../../../utils/getMonth';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../../config/firebase.config';

// Components
import CustomButton from '../../custom-button/custom-button.component';
import Title from '../../title/title.component';
import GeneralBalance from '../general-balance/general-balance.component';

interface MyCreditCardsProps {}

const MyCreditCards: FunctionComponent<MyCreditCardsProps> = () => {
  const [itens, setItens] = useState<CreditCard[]>([]);
  const [expenses, setExpenses] = useState<NextAccount[]>([]);

  useEffect(() => {
    const fetchItens = async () => {
      const [itensSnapshot, expensesSnapshot] = await Promise.all([
        getDocs(collection(db, 'creditCards')),
        getDocs(
          query(collection(db, 'transactions'), where('type', '==', 'expense'))
        ),
      ]);

      const itensData = itensSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CreditCard[];

      const expensesData = expensesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as NextAccount[];

      setItens(itensData);
      setExpenses(expensesData);
    };
    fetchItens();
  }, []);

  const { currentMonth, nextMonth } = getCurrentAndNextMonth();
  const date = new Date();
  const day = date.getDate();
  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.value,
    0
  );

  return (
    <MyCreditCardsContainer>
      <GeneralBalance
        title="Faturas de Janeiro"
        balance={totalExpenses}
        type="expense"
      />
      <MyCreditCardsDivisory></MyCreditCardsDivisory>
      <MyCreditCardsContent>
        <Title marginBottom="20px">Meus Cartões</Title>
        <MyCreditCardsItems>
          {itens.map((item, index) => {
            const totalExpenses = expenses
              .filter((expense) => expense.account.id === item.id)
              .reduce((acc, expense) => acc + expense.value, 0);

            return (
              <Fragment key={index}>
                <MyCreditCardsItem>
                  <MyCreditCardsItemCard>
                    <MyCreditCardsItemImgContainer>
                      <MyCreditCardsItemImg
                        src={item.icon.src}
                        alt={item.icon.alt}
                      />
                    </MyCreditCardsItemImgContainer>
                    <MyCreditCardsItemTitleContainer>
                      <MyCreditCardsItemTitle>
                        {item.name}
                      </MyCreditCardsItemTitle>
                      <MyCreditCardsItemSubtitle>
                        {item.type}
                      </MyCreditCardsItemSubtitle>
                    </MyCreditCardsItemTitleContainer>
                    <MyCreditCardsItemSeeInvoice>
                      Ver fatura
                    </MyCreditCardsItemSeeInvoice>
                  </MyCreditCardsItemCard>
                  <MyCreditCardsItemSeeBalanceContainer>
                    <MyCreditCardsItemSeeBalanceContent>
                      <MyCreditCardsItemAvaliableLimitTitle>
                        Limite disponível
                      </MyCreditCardsItemAvaliableLimitTitle>
                      <MyCreditCardsItemAvaliableLimitTitle2>
                        R$
                        <MyCreditCardsItemAvaliableLimitSubtitle>
                          {formatCurrencyWithoutSymbol(item.limit)}
                        </MyCreditCardsItemAvaliableLimitSubtitle>
                      </MyCreditCardsItemAvaliableLimitTitle2>
                    </MyCreditCardsItemSeeBalanceContent>
                    <MyCreditCardsItemSeeBalanceContent>
                      <MyCreditCardsItemAvaliableLimitTitle>
                        Fatura Atual{' '}
                        <MyCreditCardsItemMaturity>
                          (Venc {item.winsDay}/
                          {day > item.winsDay ? nextMonth : currentMonth})
                        </MyCreditCardsItemMaturity>
                      </MyCreditCardsItemAvaliableLimitTitle>
                      <MyCreditCardsItemAvaliableLimitTitle2>
                        R$
                        <MyCreditCardsItemAvaliableLimitSubtitle>
                          {`${totalExpenses > 0 ? '-' : ''}${formatCurrencyWithoutSymbol(totalExpenses)}`}
                        </MyCreditCardsItemAvaliableLimitSubtitle>
                      </MyCreditCardsItemAvaliableLimitTitle2>
                    </MyCreditCardsItemSeeBalanceContent>
                  </MyCreditCardsItemSeeBalanceContainer>
                </MyCreditCardsItem>
                {itens.length - 1 !== index && <MyCreditCardsDivisory />}
              </Fragment>
            );
          })}
        </MyCreditCardsItems>

        <CustomButton>Gerenciar cartões</CustomButton>
      </MyCreditCardsContent>
    </MyCreditCardsContainer>
  );
};

export default MyCreditCards;
