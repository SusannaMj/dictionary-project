import React from "react";
export default function Results(props) {
  if (props.results) {
    return <div className="results">Show results</div>;
  } else {
    return null;
  }
}
