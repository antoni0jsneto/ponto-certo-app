import { styled } from 'styled-components';

interface TitleProps {
  align?: string;
  marginBottom?: string;
}

export const TitleContainer = styled.h2.withConfig({
  shouldForwardProp: (prop) => prop !== 'align' && prop !== 'marginBottom',
})<TitleProps>`
  text-align: ${(props) => props.align || 'start'};
  color: var(--text-black-color);
  font-size: 17px;
  font-weight: 600;
  line-height: 17px;
  margin-bottom: ${(props) => props.marginBottom || '45px'};
`;
