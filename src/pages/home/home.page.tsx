// Components
import Card from '../../components/card/card.component';
import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import QuickAccess from '../../components/home/quick-access/quick-access.component';
import MyCreditCards from '../../components/home/my-credit-cards/my-credit-cards.component';
import NextAccounts from '../../components/home/next-accounts/next-accounts.component';
import MonthlySpendingLimit from '../../components/home/monthly-spending-limit/monthly-spending-limit.component';
import HigherExpenses from '../../components/home/higher-expenses/higher-expenses.component';
import MyAccounts from '../../components/home/my-accounts/my-accounts.component';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="large">
        <Card width="100%">
          <QuickAccess />
        </Card>
      </Container>
      <Container maxWidth="large">
        {/* left div */}
        <div
          style={{
            width: 'calc(50% - 1rem)',
          }}
        >
          <Card width="100%">
            <MyAccounts />
          </Card>
          <Card width="100%">
            <NextAccounts title="Contas a receber" type="income" />
          </Card>
          <Card width="100%">
            <MonthlySpendingLimit title="Limite de gastos de Janeiro" />
          </Card>
        </div>

        {/* right div */}
        <div
          style={{
            width: '50%',
          }}
        >
          <Card width="100%">
            <MyCreditCards />
          </Card>
          <Card width="100%">
            <NextAccounts title="Contas a pagar" type="expense" />
          </Card>
          <Card width="100%">
            <HigherExpenses title="Maiores gastos do mês atual" />
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
