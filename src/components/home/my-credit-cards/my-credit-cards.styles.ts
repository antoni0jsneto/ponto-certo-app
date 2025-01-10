import { styled } from 'styled-components';

export const MyCreditCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MyCreditCardsDivisory = styled.div`
  border-bottom: 1px solid var(--line-color);
  width: 100%;
  margin: 20px 0;
`;

export const MyCreditCardsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MyCreditCardsItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MyCreditCardsItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MyCreditCardsItemImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 62px;
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
`;

export const MyCreditCardsItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MyCreditCardsItemTitleContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 15px;
`;

export const MyCreditCardsItemTitle = styled.p`
  color: #1a1c19;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

export const MyCreditCardsItemSubtitle = styled.p`
  color: #858782;
  font-size: 14px;
  font-weight: 400;
`;
export const MyCreditCardsItemBalanceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MyCreditCardsItemBalance = styled.p`
  color: var(--blue-color);
  font-size: 18px;
  font-weight: 600;
`;

export const MyCreditCardsItemSeeInvoice = styled.button`
  display: flex;
  flex-shrink: 0;
  background-color: #dffce9;
  color: var(--green-color);
  height: 34px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding: 0 13px;
  transition: all 0.3s ease-in;
  border: none;
  border-radius: 6px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #eafced;
    color: #6cbb79;
  }
`;

export const MyCreditCardsItemSeeBalanceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0 40px 0;
  background-color: var(--body-background-color);
  border-radius: 24px;
  height: 72px;
  padding: 0 40px 0 75px;
`;

export const MyCreditCardsItemSeeBalanceContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MyCreditCardsItemAvaliableLimitTitle = styled.p`
  color: #858782;
  font-size: 14px;
  font-weight: 400;
  margin-top: -4px;
`;

export const MyCreditCardsItemAvaliableLimitTitle2 = styled.p`
  color: #858782;
  font-size: 16px;
  font-weight: 400;
  margin-top: -4px;
`;

export const MyCreditCardsItemAvaliableLimitSubtitle = styled.span`
  font-size: inherit;
  font-weight: 700;
  color: var(--text-black-color);
  margin-left: 6px;
  font-size: 16px;
`;

export const MyCreditCardsItemMaturity = styled.span`
  font-size: 11px;
  margin-left: 4px;
  color: inherit;
  letter-spacing: -1px;
  opacity: 0.7;
`;
