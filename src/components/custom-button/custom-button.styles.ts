import styled from 'styled-components';

interface CustomButtonProps {
  textColor?: string;
  borderColor?: string;
  background?: string;
  hoverBackground?: string;
  hoverTextColor?: string;
}

export const CustomButtonContainer = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'textColor',
      'borderColor',
      'background',
      'hoverBackground',
      'hoverTextColor',
    ].includes(prop),
})<CustomButtonProps>`
  width: 100%;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 500;
  line-height: 38px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.borderColor || 'var(--line-color)'};
  background: ${(props) => props.background || 'transparent'};
  color: ${(props) => props.textColor || 'var(--text-gray-color)'};
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
