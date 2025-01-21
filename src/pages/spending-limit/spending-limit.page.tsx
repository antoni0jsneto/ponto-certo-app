// Components
import SubHeader from '../../components/sub-header/sub-header.component';
import Card from '../../components/card/card.component';
import Header from '../../components/header/header.component';
import Container from '../../components/container/container.component';
import SpendingLimitContent from '../../components/spending-limit-content/spending-limit-content.component';

// Utilities
import { PiForkKnifeFill } from 'react-icons/pi';
import Category from '../../types/category.types';
import Account from '../../types/account.types';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa6';
import { BiSolidDrink } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { GoStarFill } from 'react-icons/go';
import NextAccount from '../../types/next-account.types';

const SpendingLimitPage = () => {
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
      goal: 0,
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
            <SubHeader title="Limite de gastos" />
            <SpendingLimitContent categories={categories} expenses={expenses} />
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default SpendingLimitPage;