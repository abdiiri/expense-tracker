function ExpenseTable({ expenses }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td>{expense.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
