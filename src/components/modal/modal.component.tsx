import { FunctionComponent } from 'react';

// Styles
import { Overlay, ModalContainer, CloseButton } from './modal.styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FunctionComponent<ModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
