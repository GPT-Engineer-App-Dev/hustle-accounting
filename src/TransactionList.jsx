import React from 'react';

const TransactionList = ({ transactions, editTransaction, deleteTransaction }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Transaction List</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border px-4 py-2">{transaction.date}</td>
              <td className="border px-4 py-2">{transaction.amount}</td>
              <td className="border px-4 py-2">{transaction.type}</td>
              <td className="border px-4 py-2">{transaction.category}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => editTransaction(transaction.id, { ...transaction, amount: transaction.amount + 10 })}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTransaction(transaction.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;