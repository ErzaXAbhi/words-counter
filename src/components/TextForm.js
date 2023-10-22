import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="8"
            value={text}
            onChange={handleOnChange}
            id="myBox"
          ></textarea>
        </div>
        <button className="btn btn-dark" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-dark mx-2" onClick={handleLwClick}>
          Convert to lowercase
        </button>
      </div>
      <div className="container my-5">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} charectors
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
