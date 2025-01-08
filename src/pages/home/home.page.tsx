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
        <Card width="50%">
          <MyAccounts />
        </Card>
        <Card width="50%">
          <MyCreditCards />
        </Card>
      </Container>
    </div>
  );
};

export default HomePage;
