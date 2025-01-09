// Utilities
import { FaRegEye } from 'react-icons/fa6';

// Styles
import {
  GeneralBalance,
  GeneralBalanceSubtitle,
  GeneralBalanceTitle,
  MyCreditCardsContainer,
  MyCreditCardsContent,
  MyCreditCardsContentTitle,
  MyCreditCardsDivisory,
  MyCreditCardsHeader,
  MyCreditCardsItem,
  MyCreditCardsItemAvaliableLimitSubtitle,
  MyCreditCardsItemAvaliableLimitTitle,
  MyCreditCardsItemAvaliableLimitTitle2,
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

// Components
import CustomButton from '../custom-button/custom-button.component';

const MyCreditCards = () => {
  return (
    <MyCreditCardsContainer>
      <MyCreditCardsHeader>
        <GeneralBalanceTitle>Faturas de Janeiro</GeneralBalanceTitle>
        <GeneralBalanceSubtitle>
          R$ <GeneralBalance>0,00</GeneralBalance>
          <FaRegEye />
        </GeneralBalanceSubtitle>
      </MyCreditCardsHeader>
      <MyCreditCardsDivisory></MyCreditCardsDivisory>
      <MyCreditCardsContent>
        <MyCreditCardsContentTitle>Meus Cartões</MyCreditCardsContentTitle>
        <MyCreditCardsItems>
          <MyCreditCardsItem>
            <MyCreditCardsItemImgContainer>
              <MyCreditCardsItemImg
                src="/institutions/logos/intermedium.png"
                alt="Banco Inter"
              />
            </MyCreditCardsItemImgContainer>
            <MyCreditCardsItemTitleContainer>
              <MyCreditCardsItemTitle>Inter Black</MyCreditCardsItemTitle>
              <MyCreditCardsItemSubtitle>
                Cartão manual
              </MyCreditCardsItemSubtitle>
            </MyCreditCardsItemTitleContainer>
            <MyCreditCardsItemSeeInvoice>
              Ver fatura
            </MyCreditCardsItemSeeInvoice>
          </MyCreditCardsItem>
        </MyCreditCardsItems>
        <MyCreditCardsItemSeeBalanceContainer>
          <MyCreditCardsItemSeeBalanceContent>
            <MyCreditCardsItemAvaliableLimitTitle>
              Limite disponível
            </MyCreditCardsItemAvaliableLimitTitle>
            <MyCreditCardsItemAvaliableLimitTitle2>
              R$
              <MyCreditCardsItemAvaliableLimitSubtitle>
                3.400,00
              </MyCreditCardsItemAvaliableLimitSubtitle>
            </MyCreditCardsItemAvaliableLimitTitle2>
          </MyCreditCardsItemSeeBalanceContent>
          <MyCreditCardsItemSeeBalanceContent>
            <MyCreditCardsItemAvaliableLimitTitle>
              Fatura Atual{' '}
              <MyCreditCardsItemMaturity>
                (Venc 15/02)
              </MyCreditCardsItemMaturity>
            </MyCreditCardsItemAvaliableLimitTitle>
            <MyCreditCardsItemAvaliableLimitTitle2>
              R$
              <MyCreditCardsItemAvaliableLimitSubtitle>
                0,00
              </MyCreditCardsItemAvaliableLimitSubtitle>
            </MyCreditCardsItemAvaliableLimitTitle2>
          </MyCreditCardsItemSeeBalanceContent>
        </MyCreditCardsItemSeeBalanceContainer>
        <CustomButton>Gerenciar cartões</CustomButton>
      </MyCreditCardsContent>
    </MyCreditCardsContainer>
  );
};

export default MyCreditCards;
