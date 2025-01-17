import { styled } from 'styled-components';

interface NextAccountsProps {
  backgroundIcon: string;
}

export const NextAccountsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 30px;
`;

export const NextAccountsHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NextAccountstSubtitle = styled.p`
  text-align: center;
  background-color: #f8f8f8;
  color: var(--text-gray-dark-color);
  border-radius: 6px;
  margin-bottom: 22px;
  font-size: 15px;
  font-weight: 500;
  line-height: 35px;
  margin-bottom: 25px;
`;

export const NextAccountsItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const NextAccountsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const NextAccountsDivisory = styled.div`
  border-bottom: 1px solid var(--line-color);
  width: 100%;
  margin: 20px 0;
`;

export const NextAccountsItemIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'backgroundIcon',
})<NextAccountsProps>`
  background-color: ${(props) => props.backgroundIcon || '#f8f8f8'};
  color: #fff;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NextAccountsItemContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 20px;
`;

export const NextAccountsItemContentTitle = styled.p`
  color: #4d4d4d;
  font-size: 15px;
  text-align: start;
`;

export const NextAccountsItemContentSubtitle = styled.p`
  color: var(--text-gray-color);
  font-size: 14px;
  text-align: start;
`;

export const NextAccountsItemContentValue = styled.p`
  color: #4d4d4d;
  font-size: 14px;
`;

export const SeeMoreButton = styled.button`
  display: flex;
  flex-shrink: 0;
  background-color: transparent;
  color: var(--gray-color);
  height: 34px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
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
