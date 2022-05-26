import React, { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./style.css";

function Contacts() {
  const [contacs, setContacs] = useState([
    {
      fullname: "Furkan",
      phone_number: "1234",
    },
    {
      fullname: "Didem",
      phone_number: "246531",
    },
    {
      fullname: "Aristo",
      phone_number: "9876",
    },
  ]);

  useEffect(() => {
    console.log(contacs);
  }, [contacs]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacs={contacs} />
      <Form addContact={setContacs} contacts={contacs} />
    </div>
  );
}

export default Contacts;
