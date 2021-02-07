import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const todoListStyle = {
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  return (
    <ul style={todoListStyle}>
      {props.todos.map((todo) => {
        return <TodoItem todo={todo} onChange={props.onToggle} key={todo.id} />;
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
