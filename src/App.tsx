import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import HomePage from './pages/home/home.page';
import ReportsPage from './pages/reports/reports.page';
import SpendingLimitPage from './pages/spending-limit/spending-limit.page';
import IncomeExpensesPage from './pages/income-expenses/income-expenses.page';
import LoginPage from './pages/login/login.page';
import SignUpPage from './pages/sign-up/sign-up.page';

function App() {
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
