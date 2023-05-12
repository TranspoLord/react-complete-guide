import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Home Insurance",
      amount: 651.67,
      date: new Date(2020, 1, 1),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 125.25,
      date: new Date(2020, 1, 1),
    },
    {
      id: "e3",
      title: "Life Insurance",
      amount: 984.89,
      date: new Date(2020, 1, 1),
    },
    {
      id: "e4",
      title: "Health Insurance",
      amount: 236.12,
      date: new Date(2020, 1, 1),
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
