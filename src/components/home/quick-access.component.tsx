import Card from '../card/card.component';
import Container from '../container/container.component';
import './quick-access.styles.css';

const QuickAccess = () => {
  return (
    <div>
      <p>Boa tarde,</p>
      <p>Neto!</p>

      <div>
        <div>
          <p>receita mensal</p>
          <p>R$ 0,00</p>
        </div>
        <div>
          <p>despesa mensal</p>
          <p>R$ 0,00</p>
        </div>
      </div>
    </div>
  );
};

export default QuickAccess;
