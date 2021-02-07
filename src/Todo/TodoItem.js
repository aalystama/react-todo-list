import React from "react";
import PropTypes from "prop-types";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem",
    marginBottom: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  input: {
    marginRight: "1rem",
  },
  button: {
    background: "red",
    width: "35px",
    height: "35px",
    color: "white",
    borderRadius: "4px",
    border: "none",
  },
};

function TodoItem({ todo, onChange }) {
  return (
    <li style={styles.li}>
      <span>
        <input
          type="checkbox"
          style={styles.input}
          checked={todo.isCompleted}
          onChange={() => onChange(todo.id)}
        />
        {todo.title}
      </span>

      <button style={styles.button}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
