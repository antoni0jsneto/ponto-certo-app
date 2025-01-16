import { styled } from 'styled-components';

export const GeneralBalanceHeader = styled.div`
  padding: 0 30px 0 14px;
  display: flex;
  flex-direction: column;
  border-left: 3px solid var(--green-color);
`;

export const GeneralBalanceTitle = styled.p`
  color: var(--text-gray-dark-color);
  font-size: 14px;
  line-height: 15px;
  font-weight: 400;
  text-align: start;
`;

export const GeneralBalanceSubtitle = styled.p`
  color: var(--text-gray-dark-color);
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 4px;
`;

export const GeneralBalanceSpan = styled.span`
  color: var(--text-black-color);
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  margin: 0 12px 0 6px;
`;
