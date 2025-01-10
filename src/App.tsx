import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import HomePage from './pages/home.page';
import ReportsPage from './pages/reports.page';
import GoalsPage from './pages/goals.page';
import IncomeExpensesPage from './pages/income-expenses.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<IncomeExpensesPage />} />
          <Route path="/" element={<ReportsPage />} />
          <Route path="/" element={<GoalsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
