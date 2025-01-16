import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import HomePage from './pages/home.page';
import ReportsPage from './pages/reports.page';
import SpendingLimitPage from './pages/spending-limit.page';
import IncomeExpensesPage from './pages/income-expenses.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lancamentos" element={<IncomeExpensesPage />} />
          <Route path="/relatorios" element={<ReportsPage />} />
          <Route path="/limite-de-gastos" element={<SpendingLimitPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
