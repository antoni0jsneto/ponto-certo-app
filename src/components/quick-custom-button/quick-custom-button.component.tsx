import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react';
import {
  CustomButtonContainer,
  IconContainer,
} from './quick-custom-button.styles';

interface QuickCustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  startIcon?: ReactNode;
  iconColor?: string;
}

const QuickCustomButton: FunctionComponent<QuickCustomButtonProps> = ({
  children,
  startIcon,
  iconColor,
  ...rest
}) => {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon && (
        <IconContainer iconColor={iconColor}>{startIcon}</IconContainer>
      )}
      {children}
    </CustomButtonContainer>
  );
};

export default QuickCustomButton;
