import "./App.css";

function App() {
  const todoList = [
    { id: 1, title: "go to the gym" },
    { id: 2, title: "compile recipes to try out" },
    { id: 3, title: "brainstorm ideas for bakery business" },
  ];
  return (
    <div>
      <h1>My To-Do's</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
