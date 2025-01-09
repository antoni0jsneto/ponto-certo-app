// Components
import Card from '../../components/card/card.component';
import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import QuickAccess from '../../components/home/quick-access.component';
import MyAccounts from '../../components/my-accounts/my-accounts.component';
import MyCreditCards from '../../components/my-credit-cards/my-credit-cards.component';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Card width="100%">
          <QuickAccess />
        </Card>
      </Container>
      <Container>
        <div
          style={{
            width: 'calc(50% - 1rem)',
          }}
        >
          <Card width="100%">
            <MyAccounts />
          </Card>
        </div>
        <div
          style={{
            width: '50%',
          }}
        >
          <Card width="100%">
            <MyCreditCards />
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
