import styled from 'styled-components';

type CustomInputContainerProps = {
  hasError?: boolean;
};

export const CustomInputContainer = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== 'hasError',
})<CustomInputContainerProps>`
  border: none;
  width: 100%;
  background-color: #e9ecef;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: '#343a40';
  border: ${(props) => (props.hasError ? '2px solid #FF6A6A' : 'none')};

  &::placeholder {
    color: ${(props) => (props.hasError ? '#FF6A6A' : '#6C757D')};
  }

  &:focus {
    outline: ${(props) => (props.hasError ? 'none' : '2px solid #6C757D')};
  }
`;
