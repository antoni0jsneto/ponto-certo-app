// Components
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Card from '../../components/card/card.component';
import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import IncomeExpensesContent from '../../components/income-expenses/income-expenses-content/income-expenses-content.component';
import SubHeader from '../../components/sub-header/sub-header.component';

// Utilities
import { UserContext } from '../../contexts/user.context';

const IncomeExpensesPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(UserContext);

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <Header />
      <Container>
        <Card width="100%">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              width: '100%',
            }}
          >
            <SubHeader title="Lançamentos" showButton={true} />
            <div style={{ height: '20px' }}></div>
            <IncomeExpensesContent />
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default IncomeExpensesPage;
