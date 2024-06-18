import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-10-01', amount: 200, type: 'expense', category: 'Nike' },
    { id: 2, date: '2023-10-02', amount: 150, type: 'income', category: 'Adidas' },
  ]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: transactions.length + 1 }]);
  };

  const editTransaction = (id, updatedTransaction) => {
    setTransactions(transactions.map((transaction) => (transaction.id === id ? updatedTransaction : transaction)));
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sneaker Accounting App</h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        editTransaction={editTransaction}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;