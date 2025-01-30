import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { signOut } from 'firebase/auth';
import { IoMdNotifications } from 'react-icons/io';
import { FaGear } from 'react-icons/fa6';
import { CgSpinnerTwo } from 'react-icons/cg';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';

// Styles
import {
  HeaderContainer,
  HeaderIcon,
  HeaderItem,
  HeaderItems,
  HeaderItemsContainer,
  HeaderTitle,
  NotificationIcon,
} from './header.styles';

// Utilities
import { auth } from '../../config/firebase.config';
import { UserContext } from '../../contexts/user.context';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated } = useContext(UserContext);

  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleNavigation = (path: string) => {
    navigate(path);
    setActiveItem(path);
  };

  const handleSignOutPress = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--header-background-color)',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
        position: 'sticky',
        top: 0,
      }}
    >
      <HeaderContainer>
        <HeaderTitle onClick={() => handleNavigation('/')}>
          <CgSpinnerTwo size={40} />
          ponto certo
        </HeaderTitle>
        <HeaderItemsContainer>
          <HeaderItems>
            <HeaderItem
              onClick={() => handleNavigation('/')}
              isActive={activeItem === '/'}
            >
              visão geral
            </HeaderItem>
            <HeaderItem
              onClick={() => handleNavigation('/lancamentos')}
              isActive={activeItem === '/lancamentos'}
            >
              lançamentos
            </HeaderItem>
            <HeaderItem
              onClick={() => handleNavigation('/relatorios')}
              isActive={activeItem === '/relatorios'}
            >
              relatórios
            </HeaderItem>
            <HeaderItem
              onClick={() => handleNavigation('/limite-de-gastos')}
              isActive={activeItem === '/limite-de-gastos'}
            >
              limite de gastos
            </HeaderItem>
          </HeaderItems>
          <HeaderItems>
            <HeaderIcon>
              <FaGear size={20} />
            </HeaderIcon>
            <HeaderIcon>
              <IoMdNotifications size={22} />
              <NotificationIcon>5</NotificationIcon>
            </HeaderIcon>

            <HeaderIcon>
              <FaUser size={22} onClick={() => handleNavigation('/login')} />
            </HeaderIcon>
            {isAuthenticated && (
              <HeaderIcon>
                <FaSignOutAlt
                  data-tooltip-id="signout-tooltip"
                  data-tooltip-content="Sair"
                  size={22}
                  style={{ color: 'var(--red-color)' }}
                  onClick={handleSignOutPress}
                />
                <Tooltip
                  id="signout-tooltip"
                  place="top"
                  className="react-tooltip"
                />
              </HeaderIcon>
            )}
          </HeaderItems>
        </HeaderItemsContainer>
      </HeaderContainer>
    </div>
  );
};

export default Header;
