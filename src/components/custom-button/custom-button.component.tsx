import { FunctionComponent, ReactNode, ButtonHTMLAttributes } from 'react';

// Styles
import { CustomButtonContainer, IconContainer } from './custom-button.styles';

// Utilities
import ButtonThemes from '../../theme/button.themes';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  startIcon?: ReactNode;
  variant?:
    | 'default'
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark';
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  variant = 'default',
  children,
  startIcon,
  ...rest
}) => {
  const { borderColor, background, hoverBackground, hoverTextColor } =
    ButtonThemes[variant];

  return (
    <CustomButtonContainer
      borderColor={borderColor}
      background={background}
      hoverBackground={hoverBackground}
      hoverTextColor={hoverTextColor}
      {...rest}
    >
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
