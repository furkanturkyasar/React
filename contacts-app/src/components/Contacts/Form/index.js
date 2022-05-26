import { useState, useEffect } from "react";

function Form({ addContact, contacts }) {
  const initialValues = { fullname: "", phone_number: "" };
  const [form, setForm] = useState(initialValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setForm(initialValues);
  }, [contacts]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <div>
          <input
            name="fullname"
            placeholder="Full name"
            onChange={onChangeInput}
            value={form.fullname}
          />
        </div>
        <div>
          <input
            name="phone_number"
            placeholder="Phone Number"
            onChange={onChangeInput}
            value={form.phone_number}
          />
        </div>
        <div className="btn">
          <button>Add</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
