import { FiLogIn } from 'react-icons/fi';
import { CgSpinnerTwo } from 'react-icons/cg';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// Utilities
import validator from 'validator';

// Components
import CustomButton from '../../components/custom-button/custom-button.component';
import CustomInput from '../../components/custom-input/custom-input.component';
import InputErrorMessage from '../../components/input-error-message/input-error-message.component';

// Styles
import { RegisterLink } from '../login/login.styles';
import {
  Logomarca,
  PasswordContainer,
  PasswordContent,
  RegisterContainer,
  RegisterContent,
  RegisterHeadline,
  RegisterInputContainer,
  RegisterSubtitle,
  RegisterTermsContainer,
} from './sign-up.styles';

interface SignUpForm {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  terms: boolean;
}

const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<SignUpForm>();

  const watchPassword = watch('password');

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSubmitPress = (data: SignUpForm) => {
    console.log({ data });
  };
  console.log({ errors });

  return (
    <RegisterContainer>
      <Logomarca>
        <CgSpinnerTwo color="var(--green-color)" size={30} />
        <p>ponto certo</p>
      </Logomarca>
      <RegisterContent>
        <RegisterHeadline>Crie sua conta como quiser</RegisterHeadline>

        <RegisterSubtitle>
          Crie sua conta para começar a controlar sua grana
        </RegisterSubtitle>

        <CustomButton variant="danger" startIcon={<FcGoogle size={18} />}>
          Cria uma conta usando o Google
        </CustomButton>

        <div
          style={{
            marginTop: '30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <RegisterInputContainer>
            <p style={{ color: '#4d4d4d' }}>Seu nome</p>
            <CustomInput
              placeholder=""
              hasError={!!errors?.name}
              {...register('name', { required: true })}
            />

            {errors?.name?.type === 'required' && (
              <InputErrorMessage>O nome é obrigatório.</InputErrorMessage>
            )}
          </RegisterInputContainer>

          <RegisterInputContainer>
            <p style={{ color: '#4d4d4d' }}>Seu e-mail</p>
            <CustomInput
              placeholder=""
              hasError={!!errors?.email}
              {...register('email', {
                required: true,
                validate: (value) => validator.isEmail(value),
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
          </RegisterInputContainer>

          <PasswordContainer>
            <PasswordContent>
              <p style={{ color: '#4d4d4d', flex: 1, textAlign: 'start' }}>
                Sua senha
              </p>
              <p style={{ color: '#4d4d4d', flex: 1, textAlign: 'start' }}>
                Repetir senha
              </p>
            </PasswordContent>
            <PasswordContent>
              <RegisterInputContainer>
                <CustomInput
                  hasError={!!errors?.password}
                  placeholder=""
                  type="password"
                  {...register('password', { required: true })}
                />
              </RegisterInputContainer>

              <RegisterInputContainer>
                <CustomInput
                  hasError={!!errors?.passwordConfirmation}
                  placeholder=""
                  type="password"
                  {...register('passwordConfirmation', {
                    required: true,
                    validate: (value) => value === watchPassword,
                  })}
                />
              </RegisterInputContainer>
            </PasswordContent>
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
            )}

            {errors?.passwordConfirmation?.type === 'required' && (
              <InputErrorMessage>
                A confirmação da senha é obrigatória.
              </InputErrorMessage>
            )}

            {errors?.passwordConfirmation?.type === 'validate' && (
              <InputErrorMessage>
                A confirmação da senha precisa ser igual a senha.
              </InputErrorMessage>
            )}
          </PasswordContainer>

          <RegisterTermsContainer hasError={!!errors?.terms}>
            <input
              type="checkbox"
              className="checkbox"
              {...register('terms', { required: true })}
            />
            <p>
              Li e concordo com os <span>termos de uso</span>
            </p>
          </RegisterTermsContainer>
        </div>
        {errors?.terms?.type === 'required' && (
          <InputErrorMessage>
            Leia e aceite os termos para continuar.
          </InputErrorMessage>
        )}

        <div style={{ marginTop: '20px', width: '100%' }}>
          <CustomButton
            variant="success"
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Comerçar a usar
          </CustomButton>
        </div>
      </RegisterContent>
      <RegisterLink>
        Já sou cadastrado.{' '}
        <span onClick={handleLoginClick}>Quero fazer login!</span>
      </RegisterLink>
    </RegisterContainer>
  );
};

export default SignUpPage;
