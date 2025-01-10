// Styles
import {
  MyAccountsContainer,
  MyAccountsDivisory,
  MyAccountsContent,
  MyAccountsItems,
  MyAccountsItem,
  MyAccountsItemImgContainer,
  MyAccountsItemImg,
  MyAccountsItemTitleContainer,
  MyAccountsItemTitle,
  MyAccountsItemSubtitle,
  MyAccountsItemBalanceContainer,
  MyAccountsItemBalance,
} from './my-accounts.styles';

// Components
import Title from '../../title/title.component';
import CustomButton from '../../custom-button/custom-button.component';
import GeneralBalance from '../general-balance/general-balance.component';

const MyAccounts = () => {
  return (
    <MyAccountsContainer>
      <GeneralBalance title="Saldo geral" balance={0} />
      <MyAccountsDivisory></MyAccountsDivisory>
      <MyAccountsContent>
        <Title marginBottom="20px">Minhas contas</Title>
        <MyAccountsItems>
          <MyAccountsItem>
            <MyAccountsItemImgContainer>
              <MyAccountsItemImg
                src="/institutions/logos/carteira-inicial.png"
                alt="Conta inicial"
              />
            </MyAccountsItemImgContainer>
            <MyAccountsItemTitleContainer>
              <MyAccountsItemTitle>Conta inicial</MyAccountsItemTitle>
              <MyAccountsItemSubtitle>Conta manual</MyAccountsItemSubtitle>
            </MyAccountsItemTitleContainer>
            <MyAccountsItemBalanceContainer>
              <MyAccountsItemBalance>R$ 0,00</MyAccountsItemBalance>
            </MyAccountsItemBalanceContainer>
          </MyAccountsItem>

          <MyAccountsDivisory></MyAccountsDivisory>

          <MyAccountsItem>
            <MyAccountsItemImgContainer>
              <MyAccountsItemImg
                src="/institutions/logos/intermedium.png"
                alt="Banco Inter"
              />
            </MyAccountsItemImgContainer>
            <MyAccountsItemTitleContainer>
              <MyAccountsItemTitle>Inter</MyAccountsItemTitle>
              <MyAccountsItemSubtitle>Conta manual</MyAccountsItemSubtitle>
            </MyAccountsItemTitleContainer>
            <MyAccountsItemBalanceContainer>
              <MyAccountsItemBalance>R$ 0,00</MyAccountsItemBalance>
            </MyAccountsItemBalanceContainer>
          </MyAccountsItem>

          <MyAccountsDivisory></MyAccountsDivisory>

          <MyAccountsItem>
            <MyAccountsItemImgContainer>
              <MyAccountsItemImg
                src="/institutions/logos/nuconta.png"
                alt="NuBank"
              />
            </MyAccountsItemImgContainer>
            <MyAccountsItemTitleContainer>
              <MyAccountsItemTitle>NuBank</MyAccountsItemTitle>
              <MyAccountsItemSubtitle>Conta manual</MyAccountsItemSubtitle>
            </MyAccountsItemTitleContainer>
            <MyAccountsItemBalanceContainer>
              <MyAccountsItemBalance>R$ 0,00</MyAccountsItemBalance>
            </MyAccountsItemBalanceContainer>
          </MyAccountsItem>
        </MyAccountsItems>
        <CustomButton>Gerenciar contas</CustomButton>
      </MyAccountsContent>
    </MyAccountsContainer>
  );
};

export default MyAccounts;
