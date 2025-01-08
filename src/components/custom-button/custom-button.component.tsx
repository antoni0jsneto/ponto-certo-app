import { FunctionComponent, ReactNode, ButtonHTMLAttributes } from 'react';

// Styles
import { CustomButtonContainer, IconContainer } from './custom-button.styles';
import ButtonThemes from '../../theme/button.themes';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  startIcon?: ReactNode;
  variant?: 'default' | 'success' | 'danger' | 'warning';
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  variant = 'default',
  children,
  startIcon,
  ...rest
}) => {
  const theme = ButtonThemes[variant] || ButtonThemes.default;

  return (
    <CustomButtonContainer
      borderColor={theme.borderColor}
      background={theme.background}
      hoverBackground={theme.hoverBackground}
      hoverTextColor={theme.hoverTextColor}
      {...rest}
    >
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
