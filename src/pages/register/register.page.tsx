import { FiLogIn } from 'react-icons/fi';
import CustomButton from '../../components/custom-button/custom-button.component';
import CustomInput from '../../components/custom-input/custom-input.component';
import { RegisterLink } from '../login/login.styles';
import {
  Logomarca,
  PasswordContainer,
  RegisterContainer,
  RegisterContent,
  RegisterHeadline,
  RegisterInputContainer,
  RegisterSubtitle,
  RegisterTermsContainer,
} from './register.styles';
import { CgSpinnerTwo } from 'react-icons/cg';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
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

        <div style={{ marginTop: '30px' }}>
          <RegisterInputContainer>
            <p style={{ color: '#4d4d4d' }}>Seu e-mail</p>
            <CustomInput placeholder="" />
          </RegisterInputContainer>

          <PasswordContainer>
            <p style={{ color: '#4d4d4d' }}>Sua senha</p>
            <p style={{ color: '#4d4d4d' }}>Repetir senha</p>
          </PasswordContainer>

          <PasswordContainer>
            <RegisterInputContainer>
              <CustomInput placeholder="" />
            </RegisterInputContainer>

            <RegisterInputContainer>
              <CustomInput placeholder="" />
            </RegisterInputContainer>
          </PasswordContainer>

          <RegisterTermsContainer>
            <CustomInput
              style={{ width: '15px' }}
              type="checkbox"
              placeholder=""
            />
            <p>
              Li e concordo com os <span>termos de uso</span>
            </p>
          </RegisterTermsContainer>
        </div>

        <CustomButton variant="success" startIcon={<FiLogIn size={18} />}>
          Comerçar a usar
        </CustomButton>
      </RegisterContent>
      <RegisterLink>
        Já sou cadastrado.{' '}
        <span onClick={handleLoginClick}>Quero fazer login!</span>
      </RegisterLink>
    </RegisterContainer>
  );
};

export default RegisterPage;
