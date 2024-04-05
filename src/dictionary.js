import React, { useState } from "react";
import "./dictionary.css";

export default function Dictionary() {
  let [input, setInput] = useState("");
  function handleChange(event) {
    event.preventDefault();
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(input);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleChange} />
      </form>
    </div>
  );
}
