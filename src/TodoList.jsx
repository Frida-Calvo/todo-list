function TodoList() {
  const todoList = [
    { id: 1, title: "go to the gym" },
    { id: 2, title: "compile recipes to try out" },
    { id: 3, title: "brainstorm ideas for bakery business" },
  ];
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
