import "./App.css";
import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";
import { useState } from "react";

const todos = [
  { id: 1, title: "go to the gym" },
  { id: 2, title: "compile recipes to try out" },
  { id: 3, title: "brainstorm ideas for bakery business" },
];

function App() {
  const [todoList, setTodoList] = useState(todos);
  return (
    <div>
      <h1>My To-Do's</h1>
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
