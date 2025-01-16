// Utilities
import { GoStarFill } from 'react-icons/go';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa6';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidDrink } from 'react-icons/bi';
import { PiForkKnifeFill } from 'react-icons/pi';
import Account from '../types/account.types';
import Category from '../types/category.types';
import NextAccount from '../types/next-account.types';

// Components
import Card from '../components/card/card.component';
import Container from '../components/container/container.component';
import Header from '../components/header/header.component';
import IncomeExpensesContent from '../components/income-expenses/income-expenses-content/income-expenses-content.component';
import IncomeExpensesHeader from '../components/income-expenses/income-expenses-header/income-expenses-header.component';

const IncomeExpensesPage = () => {
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

  const incomes: NextAccount[] = [
    {
      id: '5',
      title: 'salario',
      date: '2025-01-05',
      value: 50000,
      category: categories[5],
      account: accounts[1],
      processed: true,
      type: 'income',
    },
    {
      id: '12',
      title: 'salario',
      date: '2025-01-05',
      value: 50000,
      category: categories[5],
      account: accounts[1],
      processed: true,
      type: 'income',
    },
    {
      id: '13',
      title: 'salario',
      date: '2025-01-05',
      value: 50000,
      category: categories[5],
      account: accounts[1],
      processed: true,
      type: 'income',
    },
    {
      id: '14',
      title: 'salario',
      date: '2025-01-06',
      value: 50000,
      category: categories[5],
      account: accounts[1],
      processed: true,
      type: 'income',
    },
    {
      id: '15',
      title: 'salario',
      date: '2025-01-06',
      value: 50000,
      category: categories[5],
      account: accounts[1],
      processed: true,
      type: 'income',
    },
    {
      id: '1',
      title: 'salario',
      date: '2025-02-05',
      value: 50000,
      category: categories[5],
      account: accounts[1],
      processed: false,
      type: 'income',
    },
    {
      id: '2',
      title: 'salario',
      date: '2025-03-05',
      value: 30000,
      category: categories[5],
      account: accounts[1],
      processed: false,
      type: 'income',
    },
    {
      id: '3',
      title: 'salario',
      date: '2025-04-05',
      value: 35000,
      category: categories[5],
      account: accounts[1],
      processed: false,
      type: 'income',
    },
    {
      id: '4',
      title: 'salario',
      date: '2025-05-05',
      value: 2000,
      category: categories[5],
      account: accounts[2],
      processed: false,
      type: 'income',
    },
    {
      id: '6',
      title: 'salario',
      date: '2025-06-05',
      value: 2000,
      category: categories[5],
      account: accounts[2],
      processed: false,
      type: 'income',
    },
    {
      id: '7',
      title: 'salario',
      date: '2025-07-05',
      value: 2000,
      category: categories[5],
      account: accounts[2],
      processed: false,
      type: 'income',
    },
    {
      id: '8',
      title: 'salario',
      date: '2025-08-05',
      value: 2000,
      category: categories[5],
      account: accounts[2],
      processed: false,
      type: 'income',
    },
    {
      id: '9',
      title: 'salario',
      date: '2025-06-05',
      value: 2000,
      category: categories[5],
      account: accounts[2],
      processed: false,
      type: 'income',
    },
    {
      id: '10',
      title: 'salario',
      date: '2025-07-05',
      value: 2000,
      category: categories[5],
      account: accounts[2],
      processed: false,
      type: 'income',
    },
    {
      id: '11',
      title: 'salario',
      date: '2025-08-05',
      value: 2000,
      category: categories[5],
      account: accounts[2],
      processed: false,
      type: 'income',
    },
  ];

  const expenses: NextAccount[] = [
    {
      id: '4',
      title: 'condomínio',
      date: '2025-01-01',
      value: 500,
      category: categories[3],
      account: accounts[1],
      processed: true,
      type: 'expense',
    },
    {
      id: '5',
      title: 'luz',
      date: '2025-01-05',
      value: 250,
      category: categories[3],
      account: accounts[1],
      processed: true,
      type: 'expense',
    },
    {
      id: '6',
      title: 'escola',
      date: '2025-01-10',
      value: 1500,
      category: categories[4],
      account: accounts[1],
      processed: true,
      type: 'expense',
    },
  ];

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
            <IncomeExpensesHeader />
            <IncomeExpensesContent incomes={incomes} expenses={expenses} />
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default IncomeExpensesPage;
