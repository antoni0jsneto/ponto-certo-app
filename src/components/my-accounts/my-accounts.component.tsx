// Utilities
import { FaRegEye } from 'react-icons/fa6';

// Styles
import {
  GeneralBalanceTitle,
  GeneralBalanceSubtitle,
  MyAccountsContainer,
  MyAccountsHeader,
  GeneralBalance,
  MyAccountsDivisory,
  MyAccountsContentTitle,
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
import CustomButton from '../custom-button/custom-button.component';

const MyAccounts = () => {
  return (
    <MyAccountsContainer>
      <MyAccountsHeader>
        <GeneralBalanceTitle>Saldo geral</GeneralBalanceTitle>
        <GeneralBalanceSubtitle>
          R$ <GeneralBalance>0,00</GeneralBalance>
          <FaRegEye />
        </GeneralBalanceSubtitle>
      </MyAccountsHeader>
      <MyAccountsDivisory></MyAccountsDivisory>
      <MyAccountsContent>
        <MyAccountsContentTitle>Minhas contas</MyAccountsContentTitle>
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
