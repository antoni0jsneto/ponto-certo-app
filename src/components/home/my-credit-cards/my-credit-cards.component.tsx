// Styles
import {
  MyCreditCardsContainer,
  MyCreditCardsContent,
  MyCreditCardsDivisory,
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
import CustomButton from '../../custom-button/custom-button.component';
import Title from '../../title/title.component';
import GeneralBalance from '../general-balance/general-balance.component';

const MyCreditCards = () => {
  return (
    <MyCreditCardsContainer>
      <GeneralBalance title="Faturas de Janeiro" balance={0} />
      <MyCreditCardsDivisory></MyCreditCardsDivisory>
      <MyCreditCardsContent>
        <Title marginBottom="20px">Meus Cartões</Title>
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
