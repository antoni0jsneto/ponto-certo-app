import { IoMdNotifications } from 'react-icons/io';
import { FaGear } from 'react-icons/fa6';
import { CgSpinnerTwo } from 'react-icons/cg';

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
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleNavigation = (path: string) => {
    navigate(path);
    setActiveItem(path);
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--header-background-color)',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
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
          </HeaderItems>
        </HeaderItemsContainer>
      </HeaderContainer>
    </div>
  );
};

export default Header;
