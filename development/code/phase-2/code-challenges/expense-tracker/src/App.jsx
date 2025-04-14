import React, { useState } from "react";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseForm from "./components/ExpenseForm";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Liquid Refreshment",
      amount: 10,
      category: "Food",
      date: "2025-04-28",
    },
    {
      id: 2,
      description: "MLC Tokens",
      amount: 2000,
      category: "Personal",
      date: "2025-04-27",
    },
    {
      id: 3,
      description: "Bus Token",
      amount: 300,
      category: "Personal",
      date: "2025-04-27",
    },
    {
      id: 4,
      description: "Buy Book",
      amount: 1000,
      category: "Goods",
      date: "2025-04-27",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="header">
        <h1>Expense Tracker</h1>
        <p>Manage your finances</p>
      </div>

      <div className="content">
        <div className="add-expense-section">
          <h2>Add Expense</h2>
          <ExpenseForm addExpense={addExpense} />
        </div>

        <div className="expenses-section">
          <SearchBar setSearchTerm={setSearchTerm} />
          <ExpenseTable expenses={filteredExpenses} />
        </div>
      </div>
    </div>
  );
}

export default App;
