import { styled } from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  width: 250px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  padding-right: 35px;
`;

export const Dropdown = styled.ul`
  position: absolute;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
  padding: 5px 0;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  display: none;
  z-index: 999;
`;

export const OptionItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

export const OptionIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const OptGroupLabel = styled.div`
  padding: 5px 10px;
  font-weight: bold;
  background: #f7f7f7;
`;

export const ClearSelectionButton = styled.span`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 18px;
  color: #888;
`;

export const ArrowIcon = styled.div<{ isOpen: boolean }>`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%)
    ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  cursor: pointer;
  font-size: 12px;
  color: #888;

  &::after {
    content: '▼';
    font-size: 12px;
  }
`;
