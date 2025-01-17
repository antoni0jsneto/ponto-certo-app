import styled from 'styled-components';

interface ContainerProps {
  maxWidth: 'large' | 'medium';
}

export const ContainerMaster = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContainerContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'maxWidth',
})<ContainerProps>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: calc(100% - 2rem);
  max-width: ${(props: ContainerProps) =>
    props.maxWidth === 'large'
      ? 'var(--default-max-large-width)'
      : 'var(--default-max-medium-width)'};
  gap: 1rem;
`;
