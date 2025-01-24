// Components
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Header from '../../components/header/header.component';

// Utilities
import { UserContext } from '../../contexts/user.context';

const ReportsPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(UserContext);

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <Header />
      <p>em breve...</p>
    </div>
  );
};

export default ReportsPage;
