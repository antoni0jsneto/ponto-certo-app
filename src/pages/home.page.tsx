// Utilities
import NextAccount from '../types/next-account.types';
import Category from '../types/category.types';
import CreditCard from '../types/credit-card.types';
import Account from '../types/account.types';

import { PiForkKnifeFill } from 'react-icons/pi';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa6';
import { BiSolidDrink } from 'react-icons/bi';
import { GoStarFill } from 'react-icons/go';
import { AiFillHome } from 'react-icons/ai';

// Components
import Card from '../components/card/card.component';
import Container from '../components/container/container.component';
import Header from '../components/header/header.component';
import QuickAccess from '../components/home/quick-access/quick-access.component';
import MyCreditCards from '../components/home/my-credit-cards/my-credit-cards.component';
import NextAccounts from '../components/home/next-accounts/next-accounts.component';
import MonthlySpendingLimit from '../components/home/monthly-spending-limit/monthly-spending-limit.component';
import HigherExpenses from '../components/home/higher-expenses/higher-expenses.component';
import MyAccounts from '../components/home/my-accounts/my-accounts.component';

const HomePage = () => {
  const accounts: Account[] = [
    {
      id: '1',
      icon: {
        src: '/institutions/logos/carteira-inicial.png',
        alt: 'Conta inicial',
      },
      name: 'Conta inicial',
      type: 'Conta manual',
    },
    {
      id: '2',
      icon: {
        src: '/institutions/logos/intermedium.png',
        alt: 'Inter',
      },
      name: 'Inter',
      type: 'Conta manual',
    },
    {
      id: '3',
      icon: {
        src: '/institutions/logos/nuconta.png',
        alt: 'NuBank',
      },
      name: 'NuBank',
      type: 'Conta manual',
    },
  ];

  const categories: Category[] = [
    {
      id: '1',
      color: '#ffffff',
      background: '#e274a8',
      icon: <PiForkKnifeFill />,
      title: 'Alimentação',
      type: 'expense',
      goal: 1000,
    },
    {
      id: '2',
      color: '#ffffff',
      background: '#c671e4',
      icon: <FaLaptopCode />,
      title: 'Assinaturas e serviços',
      type: 'expense',
      goal: 1000,
    },
    {
      id: '3',
      color: '#ffffff',
      background: '#626491',
      icon: <BiSolidDrink />,
      title: 'Bares e restaurantes',
      type: 'expense',
      goal: 1000,
    },
    {
      id: '4',
      color: '#ffffff',
      background: '#8193ff',
      icon: <AiFillHome />,
      title: 'Casa',
      type: 'expense',
      goal: 1000,
    },
    {
      id: '6',
      color: '#ffffff',
      background: '#6470BA',
      icon: <FaGraduationCap />,
      title: 'Educação',
      type: 'expense',
      goal: 1000,
    },
    {
      id: '5',
      color: '#ffffff',
      background: '#2EE8B3',
      icon: <GoStarFill />,
      title: 'Salário',
      type: 'income',
      goal: 2000,
    },
  ];

  const creditCards: CreditCard[] = [
    {
      id: '1',
      icon: {
        src: '/institutions/logos/intermedium.png',
        alt: 'Inter',
      },
      name: 'Inter Black',
      limit: 1000,
      type: 'Cartão manual',
      closeDay: 12,
      winsDay: 18,
      defaultPaymentAccount: 'Inter',
      account: accounts[1],
    },
    {
      id: '2',
      icon: {
        src: '/institutions/logos/nuconta.png',
        alt: 'NuBank',
      },
      name: 'NuBank',
      limit: 2000,
      type: 'Cartão manual',
      closeDay: 11,
      winsDay: 20,
      defaultPaymentAccount: 'NuBank',
      account: accounts[1],
    },
  ];

  const incomes: NextAccount[] = [
    {
      id: '5',
      title: 'salario',
      date: '05/01/2025',
      value: 50000,
      category: categories[5],
      account: accounts[1],
      processed: true,
    },
    {
      id: '1',
      title: 'salario',
      date: '05/02/2025',
      value: 50000,
      category: categories[5],
      account: accounts[1],
      processed: false,
    },
    {
      id: '2',
      title: 'salario',
      date: '05/03/2025',
      value: 30000,
      category: categories[5],
      account: accounts[1],
      processed: false,
    },
    {
      id: '3',
      title: 'salario',
      date: '05/04/2025',
      value: 35000,
      category: categories[5],
      account: accounts[1],
      processed: false,
    },
    {
      id: '4',
      title: 'salario',
      date: '05/05/2025',
      value: 2000,
      category: categories[5],
      account: accounts[2],
      processed: false,
    },
    {
      id: '6',
      title: 'salario',
      date: '05/06/2025',
      value: 2000,
      category: categories[5],
      account: accounts[2],
      processed: false,
    },
    {
      id: '7',
      title: 'salario',
      date: '05/07/2025',
      value: 2000,
      category: categories[5],
      account: accounts[2],
      processed: false,
    },
    {
      id: '8',
      title: 'salario',
      date: '05/08/2025',
      value: 2000,
      category: categories[5],
      account: accounts[2],
      processed: false,
    },
    {
      id: '9',
      title: 'salario',
      date: '05/06/2025',
      value: 2000,
      category: categories[5],
      account: accounts[2],
      processed: false,
    },
    {
      id: '10',
      title: 'salario',
      date: '05/07/2025',
      value: 2000,
      category: categories[5],
      account: accounts[2],
      processed: false,
    },
    {
      id: '11',
      title: 'salario',
      date: '05/08/2025',
      value: 2000,
      category: categories[5],
      account: accounts[2],
      processed: false,
    },
  ];

  const expenses: NextAccount[] = [
    {
      id: '4',
      title: 'condomínio',
      date: '10/01/2025',
      value: 500,
      category: categories[3],
      account: accounts[1],
      processed: true,
    },
    {
      id: '5',
      title: 'luz',
      date: '10/01/2025',
      value: 250,
      category: categories[3],
      account: accounts[1],
      processed: true,
    },
    {
      id: '6',
      title: 'escola',
      date: '10/01/2025',
      value: 1500,
      category: categories[4],
      account: accounts[1],
      processed: true,
    },
  ];

  return (
    <div>
      <Header />
      <Container>
        <Card width="100%">
          <QuickAccess incomes={incomes} expenses={expenses} />
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
            <MyAccounts
              accounts={accounts}
              incomes={incomes}
              expenses={expenses}
            />
          </Card>
          <Card width="100%">
            <NextAccounts title="Contas a receber" itens={incomes} />
          </Card>
          <Card width="100%">
            <MonthlySpendingLimit
              title="Limite de gastos de Janeiro"
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
            <MyCreditCards itens={creditCards} expenses={expenses} />
          </Card>
          <Card width="100%">
            <NextAccounts title="Contas a pagar" itens={expenses} />
          </Card>
          <Card width="100%">
            <HigherExpenses
              title="Maiores gastos do mês atual"
              expenses={expenses}
            />
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
