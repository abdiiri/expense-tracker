import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import "./styles.css";


function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Coffee", amount: 3.5, category: "Food" },
    { id: 2, description: "Books", amount: 25.0, category: "Education" },
    { id: 3, description: "Internet", amount: 45.0, category: "Utilities" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
}

export default App;
