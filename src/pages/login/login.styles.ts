import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--body-background-color);
`;

export const Logomarca = styled.div`
  font-family: 'Oxanium', serif;
  font-weight: bold;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    color: #d3f4dc;
  }

  p {
    color: #2f473f;
  }
`;

export const LoginHeadline = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #4d4d4d;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  background-color: #fffdf9;
  border-radius: 6px;
  padding: 43px 30px;
`;

export const LoginSubtitle = styled.p`
  color: #4d4d4d;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(218, 218, 218);
  width: 100%;
  margin-top: 20px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const LoginInputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
    text-align: start;
  }
`;

export const RememberLink = styled.p`
  color: var(--text-gray-color);
  text-align: start;
  font-size: 0.875rem;
  width: 100%;

  &:hover {
    text-decoration: underline;
    color: var(--green-color);
    cursor: pointer;
  }
`;

export const RegisterLink = styled.p`
  text-align: center;
  color: var(--text-gray-color);
  position: absolute;
  bottom: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;

  span {
    color: var(--green-color);
    text-decoration: underline;
    font-weight: 500;
    transition: filter 0.3s ease;

    &:hover {
      cursor: pointer;
      filter: brightness(1.2);
    }
  }
`;
