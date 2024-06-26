import "./App.css";
import ListTodos from "./components/ListTodos";

const App = () => {
  // eslint-disable-next-line
  const todos = [
    {
      id: 1,
      task: "Walk the Dog",
      complete: false,
    },
    {
      id: 2,
      task: "Feed the Cat",
      complete: true,
    },
  ];

  return (
    <div>
      <h1>Todo</h1>
      {/* your code goes here... */}
      <ListTodos list={todos} />
    </div>
  );
};

export default App;
