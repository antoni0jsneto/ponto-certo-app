import './header.styles.css';
import { IoMdNotifications } from 'react-icons/io';
import { FaGear } from 'react-icons/fa6';
import { CgSpinnerTwo } from 'react-icons/cg';

const Header = () => {
  return (
    <div className="header-container">
      <h2 className="header-title">
        <CgSpinnerTwo size={30} />
        PONTO CERTO APP
      </h2>
      <div className="header-items-container">
        <div className="header-items">
          <div className="header-item">visão geral</div>
          <div className="header-item">lançamentos</div>
          <div className="header-item">relatórios</div>
          <div className="header-item">metas</div>
        </div>
        <div className="header-items">
          <div className="header-item">
            <FaGear size={20} />
          </div>
          <div className="header-item">
            <IoMdNotifications size={22} />
            <p className="notification-icon">5</p>
          </div>

          {/* Perfil aqui */}
        </div>
      </div>
    </div>
  );
};

export default Header;
