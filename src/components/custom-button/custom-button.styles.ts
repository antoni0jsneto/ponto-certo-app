import styled from 'styled-components';

interface CustomButtonProps {
  borderColor?: string;
  background?: string;
  hoverBackground?: string;
  hoverTextColor?: string;
}

export const CustomButtonContainer = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'iconColor',
})<CustomButtonProps>`
  width: 100%;
  padding: 10px 20px;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 5px;
  border: 0.5px solid ${(props) => props.borderColor || '#A0A0A0'};
  background: ${(props) => props.background || 'transparent'};
  color: ${(props) => props.borderColor || '#A0A0A0'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.hoverBackground || props.borderColor};
    color: ${(props) => props.hoverTextColor || '#ffffff'};
  }
`;

export const IconContainer = styled.div`
  margin-right: 8px;
  height: 100%;
  display: flex;
  align-items: center;
`;
