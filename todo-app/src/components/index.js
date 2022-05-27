import { useState } from "react";
// Componentsler import edildi
import Footer from "./Footer";
import Form from "./Form";
import List from "./List";

function Components() {
  // Localstorage varsa veriyi cekiyoruz yoksa bos array olusuyor
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  // Footerdan gelen veriyi filtreleme islemi icin, varsayilan olarak "All" verildi
  const [hide, setHide] = useState("All");

  return (
    <div className="todoapp">
      <Form todos={todos} setTodos={setTodos} />{" "}
      <List todos={todos} setTodos={setTodos} hide={hide} />{" "}
      <Footer todos={todos} setTodos={setTodos} setHide={setHide} />{" "}
    </div>
  );
}

export default Components;
