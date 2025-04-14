import React from "react";
import '../App.css';

function ExpenseTable({ expenses }) {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Expense</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>{expense.amount}</td>
            <td>{expense.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
