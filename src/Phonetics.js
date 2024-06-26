import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <span className="phonetics">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="listen-button"
      >
        Listen
      </a>

      <span className="text">{props.phonetic.text}</span>
    </span>
  );
}
