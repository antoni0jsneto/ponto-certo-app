import { styled } from 'styled-components';

interface SpendingLimitContentProps {
  height?: string;
  color?: string;
  progress?: string;
  backgroundIcon?: string;
}

export const SpendingLimitContentContainer = styled.div`
  padding: 0 30px;
`;

export const SpendingLimitContentHeader = styled.div`
  padding: 30px 0;
`;

export const SpendingLimitContentHeaderTitle = styled.p`
  color: var(--red-color);
  font-size: 16px;
  font-weight: 500;
`;

export const SpendingLimitContentHeaderSubtitle = styled.p`
  font-size: 14px;
  color: var(--text-default-color);
  font-weight: 500;
  margin-bottom: 20px;

  span {
    color: var(--text-gray-color);
  }
`;

export const SpendingLimitContentProgressBarContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'height',
})<SpendingLimitContentProps>`
  position: relative;
  height: ${(props) => props.height || '20px'};
  border-radius: 5px;
  width: 100%;
  background-color: #f3f3f0;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const SpendingLimitContentProgressBarFill = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'progress',
})<SpendingLimitContentProps>`
  background: ${(props) => props.color || 'var(--red-color)'};
  height: 100%;
  transition: width 1s ease-in-out;
  width: ${(props) => props.progress || 0}%;
  background-size: 20px 20px;
`;

export const SpendingLimitProgressBarText = styled.span`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  color: white;
  font-weight: bold;
  pointer-events: none;
  z-index: 2; /* Ensure it appears above the bar */
`;

export const SpendingLimitContentDivisory = styled.div`
  border-bottom: 1px solid var(--line-color);
  width: 100%;
  margin: 20px 0;
`;

export const SpendingLimitContentItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  margin-top: 30px;
  padding: 0 30px 50px 30px;
`;

export const SpendingLimitContentItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const SpendingLimitContentItemIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'backgroundIcon',
})<SpendingLimitContentProps>`
  background-color: ${(props) => props.backgroundIcon || '#f8f8f8'};
  color: #fff;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpendingLimitContentItemContainer = styled.div`
  flex: 1;
`;

export const SpendingLimitContentItemContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SpendingLimitContentItemContentTitle = styled.div`
  flex: 1;
  text-align: start;
  font-size: 14px;
`;

export const SpendingLimitContentItemSubContent = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

export const SpendingLimitContentItemContentValue = styled.div`
  font-size: 14px;

  span {
    color: var(--text-gray-color);
  }
`;

export const SpendingLimitContentItemContentButton = styled.div`
  color: var(--text-gray-color);
  opacity: 0.35;

  &:hover {
    cursor: pointer;
    color: var(--green-color);
    opacity: 1;
  }
`;
