import styled from 'styled-components';

interface CardProps {
  width: string;
}

export const CardContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'width',
})<CardProps>`
  display: flex;
  background-color: var(--card-background-color);
  padding: 30px;
  border: 1px solid var(--body-background-color);
  box-shadow: 0px 41px 70px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  min-width: 150px;
  box-sizing: border-box;
  flex: 1 1 calc(${(props) => props.width} - 1rem);
  margin-bottom: 1rem;
`;
