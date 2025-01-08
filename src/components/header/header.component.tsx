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

const Header = () => {
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
        <HeaderTitle>
          <CgSpinnerTwo size={30} />
          PONTO CERTO APP
        </HeaderTitle>
        <HeaderItemsContainer>
          <HeaderItems>
            <HeaderItem>visão geral</HeaderItem>
            <HeaderItem>lançamentos</HeaderItem>
            <HeaderItem>relatórios</HeaderItem>
            <HeaderItem>metas</HeaderItem>
          </HeaderItems>
          <HeaderItems>
            <HeaderIcon>
              <FaGear size={20} />
            </HeaderIcon>
            <HeaderIcon>
              <IoMdNotifications size={22} />
              <NotificationIcon>5</NotificationIcon>
            </HeaderIcon>

            {/* Perfil aqui */}
          </HeaderItems>
        </HeaderItemsContainer>
      </HeaderContainer>
    </div>
  );
};

export default Header;
