import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import SubHeader from '../../components/sub-header/sub-header.component';
import Card from '../../components/card/card.component';
import Header from '../../components/header/header.component';
import Container from '../../components/container/container.component';
import SpendingLimitContent from '../../components/spending-limit-content/spending-limit-content.component';

// Utilities
import { UserContext } from '../../contexts/user.context';

const SpendingLimitPage = () => {
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
            <SubHeader title="Limite de gastos" />
            <SpendingLimitContent />
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default SpendingLimitPage;
