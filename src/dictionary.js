import React, { useState } from "react";
import "./dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [input, setInput] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }
  function handleChange(event) {
    event.preventDefault();
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(input);
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;

    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <input type="search" onChange={handleChange} />
      </form>
    </div>
  );
}
