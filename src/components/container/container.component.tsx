import { FunctionComponent } from 'react';

// Style
import { ContainerContent, ContainerMaster } from './container.styles';

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: 'large' | 'medium';
}

const Container: FunctionComponent<ContainerProps> = ({
  children,
  maxWidth = 'medium',
}) => {
  return (
    <ContainerMaster>
      <ContainerContent maxWidth={maxWidth}>{children}</ContainerContent>
    </ContainerMaster>
  );
};

export default Container;
