import styled from 'styled-components';

interface QuickCustomButtonProps {
  iconColor?: string;
}

export const CustomButtonContainer = styled.button`
  width: 82px;
  height: 90px;
  background-color: transparent;
  color: #a0a0a0;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #f2f4ef;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: #f9f9f9;
  }
`;

export const IconContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'iconColor',
})<QuickCustomButtonProps>`
  font-size: 36px;
  margin-right: 8px;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${(props) => props.iconColor || '#a0a0a0'};
`;
