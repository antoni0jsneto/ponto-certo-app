import { FcGoogle } from 'react-icons/fc';
import { FiLogIn } from 'react-icons/fi';

// Components
import CustomButton from '../../components/custom-button/custom-button.component';

// Styles
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
  Logomarca,
  RegisterLink,
  RememberLink,
} from './login.styles';
import CustomInput from '../../components/custom-input/custom-input.component';
import { CgSpinnerTwo } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/cadastrar');
  };

  return (
    <LoginContainer>
      <Logomarca>
        <CgSpinnerTwo color="var(--green-color)" size={30} />
        <p>ponto certo</p>
      </Logomarca>
      <LoginContent>
        <LoginHeadline>Entre com a sua conta</LoginHeadline>

        <CustomButton variant="danger" startIcon={<FcGoogle size={18} />}>
          Entrar com o Google
        </CustomButton>

        <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

        <LoginInputContainer>
          <p style={{ color: '#4d4d4d' }}>Seu e-mail</p>
          <CustomInput placeholder="" />
        </LoginInputContainer>

        <LoginInputContainer>
          <p style={{ color: '#4d4d4d' }}>Sua senha</p>
          <CustomInput placeholder="" />
          <RememberLink>Esqueci minha senha</RememberLink>
        </LoginInputContainer>

        <CustomButton variant="success" startIcon={<FiLogIn size={18} />}>
          Entrar
        </CustomButton>
      </LoginContent>
      <RegisterLink>
        Ainda não possui conta?{' '}
        <span onClick={handleRegisterClick}>Faça o cadastro!</span>
      </RegisterLink>
    </LoginContainer>
  );
};

export default LoginPage;
