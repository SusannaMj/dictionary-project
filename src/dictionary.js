import React, { useState } from "react";
import "./dictionary.css";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";

export default function Dictionary() {
  let [input, setInput] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handlePhotoResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }
  function handleChange(event) {
    event.preventDefault();
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;

    axios.get(apiUrl).then(handleResponse);

    //documentation: https://www.pexels.com/api/documentation/#photos-search

    let pexelsApiKey =
      "GuL4SylJyKr9XA9dEHNknmycUPlLpfK2l69RCfNw8m9SXhrnzN0L6CMj";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: {
          Authorization: ` ${pexelsApiKey}`,
        },
      })
      .then(handlePhotoResponse);
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
      <Photos photos={photos} />{" "}
    </div>
  );
}
