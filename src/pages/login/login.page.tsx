import CustomButton from '../../components/custom-button/custom-button.component';
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from './login.styles';

const LoginPage = () => {
  return (
    <LoginContainer>
      <LoginContent>
        <LoginHeadline>Entre com a sua conta</LoginHeadline>

        <CustomButton variant="success">Entrar</CustomButton>

        <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

        <LoginInputContainer></LoginInputContainer>

        <CustomButton variant="primary">Entrar</CustomButton>
      </LoginContent>
    </LoginContainer>
  );
};

export default LoginPage;
