import {
  Fragment,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';

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
import Transaction from '../../../types/transaction.types';
import { getCurrentAndNextMonth } from '../../../utils/getMonth';
import { db } from '../../../config/firebase.config';

// Components
import CustomButton from '../../custom-button/custom-button.component';
import Title from '../../title/title.component';
import GeneralBalance from '../general-balance/general-balance.component';
import { TransactionContext } from '../../../contexts/transaction.context';

interface MyCreditCardsProps {}

const MyCreditCards: FunctionComponent<MyCreditCardsProps> = () => {
  const [cards, setCards] = useState<CreditCard[]>([]);
  const { expenses, fetchExpenses } = useContext(TransactionContext);

  useEffect(() => {
    const fetchCards = async () => {
      const cardsSnapshot = await getDocs(collection(db, 'creditCards'));

      const cardsData = cardsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CreditCard[];

      setCards(cardsData);
    };
    fetchCards();
    fetchExpenses();
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
          {cards.map((card, index) => {
            const totalExpenses = expenses
              .filter((expense) => expense.account.id === card.id)
              .reduce((acc, expense) => acc + expense.value, 0);

            return (
              <Fragment key={index}>
                <MyCreditCardsItem>
                  <MyCreditCardsItemCard>
                    <MyCreditCardsItemImgContainer>
                      <MyCreditCardsItemImg
                        src={card.icon.src}
                        alt={card.icon.alt}
                      />
                    </MyCreditCardsItemImgContainer>
                    <MyCreditCardsItemTitleContainer>
                      <MyCreditCardsItemTitle>
                        {card.name}
                      </MyCreditCardsItemTitle>
                      <MyCreditCardsItemSubtitle>
                        {card.type}
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
                          {formatCurrencyWithoutSymbol(card.limit)}
                        </MyCreditCardsItemAvaliableLimitSubtitle>
                      </MyCreditCardsItemAvaliableLimitTitle2>
                    </MyCreditCardsItemSeeBalanceContent>
                    <MyCreditCardsItemSeeBalanceContent>
                      <MyCreditCardsItemAvaliableLimitTitle>
                        Fatura Atual{' '}
                        <MyCreditCardsItemMaturity>
                          (Venc {card.winsDay}/
                          {day > card.winsDay ? nextMonth : currentMonth})
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
                {cards.length - 1 !== index && <MyCreditCardsDivisory />}
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
