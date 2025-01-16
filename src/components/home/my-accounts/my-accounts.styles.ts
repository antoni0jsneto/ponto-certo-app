import { styled } from 'styled-components';

export const MyAccountsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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
  color: var(--text-gray-dark-color);
  font-size: 14px;
  font-weight: 400;
`;
export const MyAccountsItemBalanceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MyAccountsItemBalance = styled.p`
  color: var(--blue-color);
  font-size: 18px;
  font-weight: 600;
`;
