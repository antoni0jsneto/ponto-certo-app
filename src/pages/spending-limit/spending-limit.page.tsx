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
            <SpendingLimitContent />
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default SpendingLimitPage;
