// Components
import Card from '../../components/card/card.component';
import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import IncomeExpensesContent from '../../components/income-expenses/income-expenses-content/income-expenses-content.component';
import SubHeader from '../../components/sub-header/sub-header.component';

const IncomeExpensesPage = () => {
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
