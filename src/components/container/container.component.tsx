import { FunctionComponent } from 'react';

// Style
import { ContainerContent, ContainerMaster } from './container.styles';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <ContainerMaster>
      <ContainerContent>{children}</ContainerContent>
    </ContainerMaster>
  );
};

export default Container;
