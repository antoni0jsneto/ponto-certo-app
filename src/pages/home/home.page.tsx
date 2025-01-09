// Components
import Card from '../../components/card/card.component';
import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import QuickAccess from '../../components/home/quick-access.component';
import MyAccounts from '../../components/my-accounts/my-accounts.component';
import MyCreditCards from '../../components/my-credit-cards/my-credit-cards.component';
import NextAccounts from '../../components/next-accounts/next-accounts.component';
import MonthlySpendingLimit from '../../components/monthly-spending-limit/monthly-spending-limit.component';

// Utilities
import NextAccount from '../../types/next-account.types';
import Category from '../../types/category.types';

import { PiForkKnifeFill } from 'react-icons/pi';
import { FaLaptopCode } from 'react-icons/fa6';
import { BiSolidDrink } from 'react-icons/bi';
import { GoStarFill } from 'react-icons/go';
import { AiFillHome } from 'react-icons/ai';
import { IoSchool } from 'react-icons/io5';

const HomePage = () => {
  const categories: Category[] = [
    {
      color: '#ffffff',
      background: '#e274a8',
      icon: <PiForkKnifeFill />,
      title: 'Alimentação',
      type: 'expense',
    },
    {
      color: '#ffffff',
      background: '#c671e4',
      icon: <FaLaptopCode />,
      title: 'Assinaturas e serviços',
      type: 'expense',
    },
    {
      color: '#ffffff',
      background: '#626491',
      icon: <BiSolidDrink />,
      title: 'Bares e restaurantes',
      type: 'expense',
    },
    {
      color: '#ffffff',
      background: '#8193ff',
      icon: <AiFillHome />,
      title: 'Casa',
      type: 'expense',
    },
    {
      color: '#ffffff',
      background: '#2EE8B3',
      icon: <GoStarFill />,
      title: 'Salário',
      type: 'income',
    },
  ];

  const nextAccounts: NextAccount[] = [
    {
      title: 'salario',
      date: '05/02/2025',
      value: 30000,
      category: {
        color: '#ffffff',
        background: '#2EE8B3',
        icon: <GoStarFill />,
        title: 'Salário',
        type: 'income',
      },
    },
    {
      title: 'salario',
      date: '05/03/2025',
      value: 30000,
      category: {
        color: '#ffffff',
        background: '#2EE8B3',
        icon: <GoStarFill />,
        title: 'Salário',
        type: 'income',
      },
    },
    {
      title: 'salario',
      date: '05/04/2025',
      value: 30000,
      category: {
        color: '#ffffff',
        background: '#2EE8B3',
        icon: <GoStarFill />,
        title: 'Salário',
        type: 'income',
      },
    },
  ];

  const expenses: NextAccount[] = [
    {
      title: 'condomínio',
      date: '10/01/2025',
      value: 500,
      category: {
        color: '#ffffff',
        background: '#8193ff',
        icon: <AiFillHome />,
        title: 'Casa',
        type: 'expense',
      },
    },
    {
      title: 'luz',
      date: '10/01/2025',
      value: 250,
      category: {
        color: '#ffffff',
        background: '#8193ff',
        icon: <AiFillHome />,
        title: 'Casa',
        type: 'expense',
      },
    },
    {
      title: 'escola',
      date: '10/01/2025',
      value: 1500,
      category: {
        color: '#ffffff',
        background: '#6470ba',
        icon: <IoSchool />,
        title: 'Educação',
        type: 'expense',
      },
    },
    {
      title: 'luz',
      date: '10/01/2025',
      value: 250,
      category: {
        color: '#ffffff',
        background: '#8193ff',
        icon: <AiFillHome />,
        title: 'Casa',
        type: 'expense',
      },
    },
  ];

  return (
    <div>
      <Header />
      <Container>
        <Card width="100%">
          <QuickAccess />
        </Card>
      </Container>
      <Container>
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
            <NextAccounts title="Contas a receber" itens={nextAccounts} />
          </Card>
          <Card width="100%">
            <MonthlySpendingLimit
              title="Maiores gastos do mês atual"
              expenses={expenses}
            />
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
            <NextAccounts title="Contas a pagar" itens={expenses} />
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
