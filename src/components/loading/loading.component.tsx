import { FunctionComponent } from 'react';
import { ScaleLoader } from 'react-spinners';

// Styles
import { LoadingContainer } from './loading.styles';

interface LoadingProps {
  message?: string;
}

const Loading: FunctionComponent<LoadingProps> = ({ message }) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <ScaleLoader />
    </LoadingContainer>
  );
};

export default Loading;
