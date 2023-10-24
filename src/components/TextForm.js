import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clipboard is clear!", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Clipboard text is copied!!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Double space is removed!", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="text-uppercase">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="8"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            style={{
              background: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-dark" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-dark mx-2" onClick={handleLwClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-dark" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-dark mx-2" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-dark mx-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} charectors
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preeview here."}
        </p>
      </div>
    </>
  );
}
