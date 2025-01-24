import React, { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

// Styles
import './App.css';

// Pages
import HomePage from './pages/home/home.page';
import ReportsPage from './pages/reports/reports.page';
import SpendingLimitPage from './pages/spending-limit/spending-limit.page';
import IncomeExpensesPage from './pages/income-expenses/income-expenses.page';
import LoginPage from './pages/login/login.page';
import SignUpPage from './pages/sign-up/sign-up.page';

// Components
import Loading from './components/loading/loading.component';

// Utilities
import { auth, db } from './config/firebase.config';
import { UserContext } from './contexts/user.context';
import User from './types/user.types';

function App() {
  const [isInitializing, setIsInitializing] = useState(true);

  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user;

    if (isSigningOut) {
      logoutUser();

      return setIsInitializing(false);
    }

    const isSignIn = !isAuthenticated && user;

    if (isSignIn) {
      const querySnapshot = await getDocs(
        query(collection(db, 'users'), where('id', '==', user.uid))
      );

      const userFromFirestore = querySnapshot.docs[0]?.data() as User;

      loginUser(userFromFirestore);

      return setIsInitializing(false);
    }

    return setIsInitializing(false);
  });

  if (isInitializing) return <Loading />;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastrar" element={<SignUpPage />} />
          <Route path="/lancamentos" element={<IncomeExpensesPage />} />
          <Route path="/relatorios" element={<ReportsPage />} />
          <Route path="/limite-de-gastos" element={<SpendingLimitPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
