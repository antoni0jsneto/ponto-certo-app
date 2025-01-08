import { styled } from 'styled-components';

export const MyAccountsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MyAccountsHeader = styled.div`
  padding: 0 30px 0 14px;
  display: flex;
  flex-direction: column;
  border-left: 3px solid var(--green-color);
`;

export const GeneralBalanceTitle = styled.p`
  color: #858782;
  font-size: 14px;
  line-height: 15px;
  font-weight: 400;
  text-align: start;
`;

export const GeneralBalanceSubtitle = styled.p`
  color: #858782;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 4px;
`;

export const GeneralBalance = styled.span`
  color: #2e312d;
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  margin: 0 12px 0 6px;
`;

export const MyAccountsDivisory = styled.div`
  border-bottom: 1px solid var(--line-color);
  width: 100%;
  margin: 20px 0;
`;

export const MyAccountsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MyAccountsContentTitle = styled.h2`
  color: #2e312d;
  font-size: 17px;
  font-weight: 600;
  line-height: 17px;
  text-align: start;
  margin-bottom: 20px;
`;

export const MyAccountsItems = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;

export const MyAccountsItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MyAccountsItemImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;

export const MyAccountsItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MyAccountsItemTitleContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 15px;
`;

export const MyAccountsItemTitle = styled.p`
  color: #1a1c19;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

export const MyAccountsItemSubtitle = styled.p`
  color: #858782;
  font-size: 14px;
  font-weight: 400;
`;
export const MyAccountsItemBalanceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MyAccountsItemBalance = styled.p`
  color: #3062d4;
  font-size: 18px;
  font-weight: 600;
`;
