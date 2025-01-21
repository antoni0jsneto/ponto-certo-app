const { addDoc, collection } = require('firebase/firestore');
const { getFirestore } = require('firebase/firestore');
const { initializeApp } = require('firebase/app');

const firebaseConfig = {
  apiKey: 'AIzaSyDA7cgQLCbta2SAdj2KJwZM3UcyLvQz8Vc',
  authDomain: 'ponto-certo-app.firebaseapp.com',
  projectId: 'ponto-certo-app',
  storageBucket: 'ponto-certo-app.firebasestorage.app',
  messagingSenderId: '1067410490980',
  appId: '1:1067410490980:web:328cb458df33f3c591c171',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const categories = [
  {
    id: '1',
    color: '#ffffff',
    background: '#e274a8',
    icon: {
      library: 'react-icons/pi',
      name: 'PiForkKnifeFill',
    },
    title: 'Alimentação',
    type: 'expense',
    goal: 1000,
  },
  {
    id: '2',
    color: '#ffffff',
    background: '#c671e4',
    icon: {
      library: 'react-icons/fa6',
      name: 'FaLaptopCode',
    },
    title: 'Assinaturas e serviços',
    type: 'expense',
    goal: 1000,
  },
  {
    id: '3',
    color: '#ffffff',
    background: '#626491',
    icon: {
      library: 'react-icons/bi',
      name: 'BiSolidDrink',
    },
    title: 'Bares e restaurantes',
    type: 'expense',
    goal: 1000,
  },
  {
    id: '4',
    color: '#ffffff',
    background: '#8193ff',
    icon: {
      library: 'react-icons/ai',
      name: 'AiFillHome',
    },
    title: 'Casa',
    type: 'expense',
    goal: 1000,
  },
  {
    id: '5',
    color: '#ffffff',
    background: '#6470BA',
    icon: {
      library: 'react-icons/fa6',
      name: 'FaGraduationCap',
    },
    title: 'Educação',
    type: 'expense',
    goal: 1000,
  },
  {
    id: '6',
    color: '#ffffff',
    background: '#2EE8B3',
    icon: {
      library: 'react-icons/go',
      name: 'GoStarFill',
    },
    title: 'Salário',
    type: 'income',
    goal: 2000,
  },
];

const accounts = [
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

const creditCards = [
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

const transactions = [
  {
    id: '1',
    title: 'salario',
    date: '2025-01-05',
    value: 50000,
    category: categories[5],
    account: accounts[1],
    processed: true,
    type: 'income',
  },
  {
    id: '2',
    title: 'salario',
    date: '2025-02-05',
    value: 50000,
    category: categories[5],
    account: accounts[1],
    processed: false,
    type: 'income',
  },
  {
    id: '3',
    title: 'salario',
    date: '2025-03-05',
    value: 30000,
    category: categories[5],
    account: accounts[1],
    processed: false,
    type: 'income',
  },
  {
    id: '4',
    title: 'salario',
    date: '2025-04-05',
    value: 35000,
    category: categories[5],
    account: accounts[1],
    processed: false,
    type: 'income',
  },
  {
    id: '5',
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
  {
    id: '12',
    title: 'condomínio',
    date: '2025-10-01',
    value: 500,
    category: categories[3],
    account: accounts[1],
    processed: true,
    type: 'expense',
  },
  {
    id: '13',
    title: 'luz',
    date: '2025-10-01',
    value: 250,
    category: categories[3],
    account: accounts[1],
    processed: true,
    type: 'expense',
  },
  {
    id: '14',
    title: 'escola',
    date: '2025-10-01',
    value: 1500,
    category: categories[4],
    account: accounts[1],
    processed: true,
    type: 'expense',
  },
];

const addDataToFirestore = async (data, collectionName) => {
  await Promise.all(
    data.map(async (item) => {
      await addDoc(collection(db, collectionName), item);
    })
  );
};

const main = async () => {
  const dataMapping = {
    categories,
    accounts,
    creditCards,
    transactions,
  };

  for (const [collectionName, data] of Object.entries(dataMapping)) {
    await addDataToFirestore(data, collectionName);
  }
};

main()
  .then(() => {
    console.log('Dados adicionados com sucesso!');
    process.exit();
  })
  .catch((error) => {
    console.error('Erro ao adicionar dados:', error);
    process.exit(1);
  });
