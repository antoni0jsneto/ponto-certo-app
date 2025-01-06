// Components
import Card from '../../components/card/card.component';
import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import QuickAccess from '../../components/home/quick-access.component';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Card width="100%">
          <QuickAccess />
        </Card>
      </Container>
    </div>
  );
};

export default HomePage;
