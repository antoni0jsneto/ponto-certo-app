import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Styles
import './index.css';

// Components
import App from './App';

// Utilities
import UserContextProvider from './contexts/user.context';
import CategoryContextProvider from './contexts/category.context';
import TransactionContextProvider from './contexts/transaction.context';
import AccountContextProvider from './contexts/account.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <CategoryContextProvider>
        <TransactionContextProvider>
          <AccountContextProvider>
            <App />
          </AccountContextProvider>
        </TransactionContextProvider>
      </CategoryContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
