import { FcGoogle } from 'react-icons/fc';
import { FiLogIn } from 'react-icons/fi';
import { CgSpinnerTwo } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// Components
import CustomButton from '../../components/custom-button/custom-button.component';
import CustomInput from '../../components/custom-input/custom-input.component';

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
import InputErrorMessage from '../../components/input-error-message/input-error-message.component';
import validator from 'validator';

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/cadastrar');
  };

  const handleSubmitPress = (data: any) => {
    console.log({ data });
  };
  console.log({ errors });

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
          <CustomInput
            hasError={!!errors?.email}
            placeholder=""
            {...register('email', {
              required: true,
              validate: (value) => {
                return validator.isEmail(value);
              },
            })}
          />

          {errors?.email?.type === 'required' && (
            <InputErrorMessage>O e-mail é obrigatório.</InputErrorMessage>
          )}

          {errors?.email?.type === 'validate' && (
            <InputErrorMessage>
              Por favor, insira um e-mail válido.
            </InputErrorMessage>
          )}
        </LoginInputContainer>

        <LoginInputContainer>
          <p style={{ color: '#4d4d4d' }}>Sua senha</p>
          <CustomInput
            hasError={!!errors?.password}
            placeholder=""
            type="password"
            {...register('password', { required: true })}
          />
          <RememberLink>Esqueci minha senha</RememberLink>

          {errors?.password?.type === 'required' && (
            <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
          )}
        </LoginInputContainer>

        <CustomButton
          variant="success"
          startIcon={<FiLogIn size={18} />}
          onClick={() => handleSubmit(handleSubmitPress)()}
        >
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
