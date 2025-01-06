import { FunctionComponent, ReactNode } from 'react';

// Style
import './card.styles.css';

interface CardProps {
  width: string;
  children: ReactNode;
}

const Card: FunctionComponent<CardProps> = ({ width, children }) => {
  return (
    <div
      style={{ flex: `1 1 calc(${width} - 1rem)` }}
      className="card-container"
    >
      {children}
    </div>
  );
};

export default Card;
