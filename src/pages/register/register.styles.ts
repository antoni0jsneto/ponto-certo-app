import styled from 'styled-components';

export const RegisterContainer = styled.div`
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

export const RegisterHeadline = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  color: #4d4d4d;
`;

export const RegisterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  background-color: #fffdf9;
  border-radius: 6px;
  padding: 43px 30px;
`;

export const RegisterSubtitle = styled.p`
  color: #4d4d4d;
  padding-bottom: 20px;
  width: 100%;
  text-align: center;
  font-size: 0.875rem;
  max-width: 250px;
  margin-bottom: 20px;
`;

export const RegisterInputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
    text-align: start;
  }

  &:last-child {
    flex-direction: row;
  }
`;

export const PasswordContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;

  p {
    font-weight: 600;
    margin-bottom: 5px;
    text-align: start;
    flex: 1;
  }
`;

export const RegisterTermsContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  font-size: 0.875rem;

  p {
    flex: 2;
    color: rgb(105, 105, 105);
    text-align: start;
  }
`;
