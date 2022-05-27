import { useState, useEffect } from "react";

function Form({ todos, setTodos }) {
  // form degerlerini tutan state
  const [form, setForm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (form === "") {
      return false;
    }

    setTodos([
      ...todos,
      {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
        todo: form,
        checked: false,
      },
    ]);
  };

  useEffect(() => {
    setForm("");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // todos ile alakali veri degislikligi olursa form state bosaltiliyor ve todos verisini localstorage ekleniyor

  return (
    <header className="header">
      <h1>todos app</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={form}
          onChange={(e) => setForm(e.target.value)}
        />
      </form>
    </header>
  );
}

export default Form;
