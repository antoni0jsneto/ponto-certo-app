import { FunctionComponent } from 'react';

// Style
import './container.styles.css';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <div className="container">
      <div className="container-content">{children}</div>
    </div>
  );
};

export default Container;
