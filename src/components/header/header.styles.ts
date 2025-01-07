import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  color: #fffdf9;
  gap: 4rem;
  max-width: var(--default-max-width);
`;

export const HeaderTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const HeaderItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  gap: 2rem;
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  &:nth-child(1) {
    flex: 1;
    gap: 4rem;
    color: #d3f4dc;
  }

  &:nth-child(1):hover,
  &:nth-child(1):active {
    color: #fff;
    border-bottom: 2px solid #fff;
  }

  &:nth-child(2) {
    gap: 7px;
  }
`;

export const HeaderItem = styled.div`
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  gap: 2px;
  position: relative;
  cursor: pointer;
`;

export const NotificationIcon = styled.p`
  font-size: 0.6rem;
  background-color: #d82637;
  color: #fff;
  padding: 5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  position: absolute;
  top: 9px;
  left: 13px;
`;
