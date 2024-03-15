import React, { useState } from "react";

export default function App() {
  const [formdata, setformData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((previousState) => {
      return { ...previousState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
    console.log(formdata);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: formdata.name,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <form>
        <h1>Form Registration</h1>
        <label>Name: </label>
        <br />
        <br/>
        <input
          type="text"
          name="name"
          value={formdata.name}
          onChange={handleChange}
        />
        <br /><br/>

        <label>Email: </label>
        <br/>
        <br/>
        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={handleChange}
        />
        <br />
        <button className="btn"onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
