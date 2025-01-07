// Styles
import './quick-access.styles.css';

// Utilities
import { FiMinusCircle } from 'react-icons/fi';
import { LuCirclePlus } from 'react-icons/lu';
import { BiTransfer } from 'react-icons/bi';
import { TfiBarChart } from 'react-icons/tfi';

// Component
import QuickCustomButton from '../quick-custom-button/quick-custom-button.component';

const QuickAccess = () => {
  return (
    <div className="quick-access-container">
      <div className="quick-access-content">
        <p className="quick-access-title">Boa tarde,</p>
        <p className="quick-access-subtitle">Neto!</p>

        <div className="blocks-of-info-container">
          <div className="block-of-info-content">
            <p>receita mensal</p>
            <p className="block-of-info-positive-value">R$ 0,00</p>
          </div>
          <div className="block-of-info-content">
            <p>despesa mensal</p>
            <p className="block-of-info-negative-value">R$ 0,00</p>
          </div>
        </div>
      </div>

      <div className="quick-access-content">
        <p>Acesso rápido</p>
        <div className="block-of-buttons-content">
          <QuickCustomButton
            startIcon={<FiMinusCircle />}
            iconColor="var(--red-color)"
          >
            Despesa
          </QuickCustomButton>
          <QuickCustomButton
            startIcon={<LuCirclePlus />}
            iconColor="var(--green-color)"
          >
            Receita
          </QuickCustomButton>
          <QuickCustomButton startIcon={<BiTransfer />}>
            Transf.
          </QuickCustomButton>
          <QuickCustomButton
            startIcon={<TfiBarChart />}
            iconColor="var(--blue-color)"
          >
            Relat.
          </QuickCustomButton>
        </div>
      </div>
    </div>
  );
};

export default QuickAccess;