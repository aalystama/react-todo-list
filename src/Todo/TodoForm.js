import React from "react";
import PropTypes from "prop-types";

const styles = {
  form: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    padding: ".5rem",
    marginRight: "1rem",
    borderRadius: "4px",
  },
  button: {
    borderRadius: "4px",
    padding: ".5rem",
  },
};

function TodoForm({ onSubmit }) {
  return (
    <form style={styles.form} onSubmit={onSubmit}>
      <input
        name="todo"
        type="text"
        placeholder="Write your TODO"
        style={styles.input}
      ></input>
    </form>
  );
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TodoForm;
