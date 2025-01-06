import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import HomePage from './pages/home/home.page';
import FinancialOverviewPage from './pages/home/financial-overview.page';
import ReportsPage from './pages/home/reports.page';
import GoalsPage from './pages/home/goals.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<FinancialOverviewPage />} />
          <Route path="/" element={<ReportsPage />} />
          <Route path="/" element={<GoalsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
