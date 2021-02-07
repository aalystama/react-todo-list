import React from "react";
import TodoList from "./Todo/TodoList";
import TodoForm from "./Todo/TodoForm";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 0, title: "First todo", isCompleted: false },
    { id: 1, title: "Second todo", isCompleted: false },
    { id: 2, title: "Third todo", isCompleted: false },
  ]);

  function onToggle(todoId) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          todo.isCompleted = !todo.isCompleted;
        }

        return todo;
      })
    );
  }

  return (
    <div className="wrapper">
      <h1>React TODO list</h1>
      <TodoForm />
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
