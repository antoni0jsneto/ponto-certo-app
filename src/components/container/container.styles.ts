import styled from 'styled-components';

export const ContainerMaster = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: calc(100% - 2rem);
  max-width: var(--default-max-width);
  gap: 1rem;
`;
