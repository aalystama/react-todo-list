import React from "react";

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

function TodoForm() {
  return (
    <form style={styles.form}>
      <input
        type="text"
        placeholder="Write your TODO"
        style={styles.input}
      ></input>
      <button style={styles.button}>Enter</button>
    </form>
  );
}

export default TodoForm;
