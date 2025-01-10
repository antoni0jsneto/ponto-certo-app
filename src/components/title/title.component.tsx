import { FunctionComponent, ReactNode } from 'react';

// Utilities
import { TitleContainer } from './title.styles';

interface TitleProps {
  children: ReactNode;
  align?: 'start' | 'center' | 'end';
  marginBottom?: string;
}

const Title: FunctionComponent<TitleProps> = ({
  children,
  align,
  marginBottom,
}) => {
  return (
    <TitleContainer align={align} marginBottom={marginBottom}>
      {children}
    </TitleContainer>
  );
};

export default Title;
