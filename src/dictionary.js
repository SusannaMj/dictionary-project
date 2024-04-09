import React, { useState } from "react";
import "./dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  let [input, setInput] = useState("");
  let [results, setResults] = useState(null);
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
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
      <section>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="search"
            onChange={handleChange}
            placeholder="What word are you looking for?"
          />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
