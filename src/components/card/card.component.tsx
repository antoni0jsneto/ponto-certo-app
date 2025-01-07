import { FunctionComponent, ReactNode } from 'react';

// Style
import { CardContainer } from './card.styles';

interface CardProps {
  width: string;
  children: ReactNode;
}

const Card: FunctionComponent<CardProps> = ({ width, children }) => {
  return <CardContainer width={width}>{children}</CardContainer>;
};

export default Card;
