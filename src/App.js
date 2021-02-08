import React, { useState } from "react";
import TodoList from "./Todo/TodoList";
import TodoForm from "./Todo/TodoForm";

function App() {
  let [todos, setTodos] = useState([
    { id: 0, title: "First todo", isCompleted: false },
    { id: 1, title: "Second todo", isCompleted: false },
    { id: 2, title: "Third todo", isCompleted: false },
  ]);

  const onToggle = (todoId) =>
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );

  const onSubmit = (event) => {
    event.preventDefault();
    setTodos([
      {
        id: todos.length,
        title: event.target.todo.value,
        isCompleted: false,
      },
      ...todos,
    ]);
    event.target.todo.value = "";
  };

  return (
    <div className="wrapper">
      <h1>React TODO list</h1>
      <TodoForm onSubmit={onSubmit} />
      <h2>Open todos</h2>
      <TodoList
        todos={todos.filter((todo) => !todo.isCompleted)}
        onToggle={onToggle}
      />
      <h2>Closed todos</h2>
      <TodoList
        todos={todos.filter((todo) => todo.isCompleted)}
        onToggle={onToggle}
      />
    </div>
  );
}

export default App;
